"""HTML 기본 문구와 ko.js의 일치·누락 검사. 실행: python scripts/check_locales.py"""
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())


class Element:
    def __init__(self, tag, attrs, parent, start, opening):
        self.tag, self.attrs, self.parent = tag, dict(attrs), parent
        self.start, self.opening, self.parts = start, opening, []

    def text(self):
        if self.tag == 'br':
            return '\n'
        return ''.join(part if isinstance(part, str) else part.text() for part in self.parts)

    def ancestors(self):
        item = self
        while item:
            yield item
            item = item.parent

    def has_class(self, name):
        return name in self.attrs.get('class', '').split()


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.offsets, offset = [], 0
        for line in source.splitlines(keepends=True):
            self.offsets.append(offset)
            offset += len(line)
        self.elements, self.stack = [], []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        line, col = self.getpos()
        item = Element(tag, attrs, self.stack[-1] if self.stack else None,
                       self.offsets[line - 1] + col, self.get_starttag_text())
        if self.stack:
            self.stack[-1].parts.append(item)
        self.elements.append(item)
        if tag not in VOID:
            self.stack.append(item)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.stack.pop()

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        if self.stack:
            self.stack[-1].parts.append(data)


def load_config():
    result = subprocess.run(['node', '--input-type=module', '-e',
        "import ko from './locales/ko.js'; "
        "import {sectionAttributes, translatedAttributes} from './js/translations.js'; "
        "console.log(JSON.stringify({ko, sectionAttributes, translatedAttributes}));"],
        cwd=ROOT, capture_output=True, text=True, encoding='utf-8', check=True)
    return json.loads(result.stdout)


def bindings(item, config):
    for attr, group in config['sectionAttributes'].items():
        if attr in item.attrs:
            yield f'{group}.{item.attrs[attr]}', item.text(), 'text'
    if 'data-i18n' in item.attrs:
        yield item.attrs['data-i18n'], item.text(), 'text'
    for attr, target in config['translatedAttributes'].items():
        if attr in item.attrs:
            yield item.attrs[attr], item.attrs.get(target), target


def lookup(content, key):
    for part in key.split('.'):
        if isinstance(content, list) and part.isdigit() and int(part) < len(content):
            content = content[int(part)]
        elif isinstance(content, dict):
            content = content.get(part)
        else:
            return None
    return content


def check():
    config = load_config()
    page = Page((ROOT / 'index.html').read_text(encoding='utf-8'))
    errors, keys, count = [], set(), 0
    attribute_bindings = {target: binding for binding, target in config['translatedAttributes'].items()}
    for item in page.elements:
        for key, original, target in bindings(item, config):
            count += 1
            keys.add(key)
            value = lookup(config['ko'], key)
            if not isinstance(value, str):
                errors.append(f'{key}: 한국어 문자열 누락')
            elif value != original:
                errors.append(f'{key}: HTML/ko.js 불일치 {original!r} != {value!r}')
            if target == 'text' and any(isinstance(p, Element) and p.tag != 'br' for p in item.parts):
                errors.append(f'{key}: 강조/이미지가 있는 부모에 텍스트 키를 연결하면 안 됩니다')
        exempt = any(a.tag in ('script', 'style') or 'data-i18n-static' in a.attrs for a in item.ancestors())
        text_bound = any(target == 'text' for _, _, target in bindings(item, config))
        direct = ''.join(p for p in item.parts if isinstance(p, str)).strip()
        if not exempt and not text_bound and re.search(r'[^\W\d_]', direct):
            errors.append(f'<{item.tag}> 번역 키 없는 문구: {direct[:90]}')
        for target, binding in attribute_bindings.items():
            value = item.attrs.get(target, '')
            if not value or not re.search(r'[^\W\d_]', value):
                continue
            if target == 'aria-label' and 'data-i18n-dynamic-label' in item.attrs:
                continue
            if binding not in item.attrs:
                errors.append(f'<{item.tag}> {target} 번역 키 누락: {value[:90]}')
    if errors:
        print('\n'.join(errors))
        return 1
    print(f'PASS: {count}개 연결 / {len(keys)}개 한국어 키. 누락·불일치·부모 요소 덮어쓰기 없음.')
    return 0


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    raise SystemExit(check())
