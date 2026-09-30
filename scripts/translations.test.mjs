import test from 'node:test';
import assert from 'node:assert/strict';
import { applyTranslations } from '../js/translations.js';

// 외부 DOM 라이브러리 없이 번역 경계만 검사합니다. 실제 화면/동작은 브라우저에서 확인합니다.
class Element {
  constructor(attrs, text = '', children = [], tagName = 'SPAN') {
    this.attrs = { ...attrs };
    this.value = text;
    this.children = children;
    this.tagName = tagName;
  }
  getAttribute(name) { return this.attrs[name] ?? null; }
  setAttribute(name, value) { this.attrs[name] = String(value); }
  toggleAttribute(name, force) {
    if (force) this.attrs[name] = '';
    else delete this.attrs[name];
  }
  get textContent() { return this.value; }
  set textContent(value) { this.value = value; this.children = []; }
}
const root = (...elements) => ({
  querySelectorAll(selector) {
    const attribute = selector.slice(1, -1);
    return elements.filter(element => Object.hasOwn(element.attrs, attribute));
  },
});

test('기존 센터 키와 중첩/배열 키로 긴 번역 및 줄바꿈을 연결한다', () => {
  const title = new Element({ 'data-center-treatment': 'title' }, '제목', [new Element({}, '', [], 'BR')]);
  const copy = new Element({ 'data-i18n': 'about.description.0' }, '소개');
  applyTranslations({ centerTreatments: { title: 'Robot-assisted surgery\nIndividual treatment planning' }, about: { description: ['Translated introduction'] } }, root(title, copy));
  assert.equal(title.textContent, 'Robot-assisted surgery\nIndividual treatment planning');
  assert.equal(title.getAttribute('data-i18n-lines'), '');
  assert.equal(copy.textContent, 'Translated introduction');
  applyTranslations({ centerTreatments: { title: 'One line' } }, root(title));
  assert.equal(title.getAttribute('data-i18n-lines'), null);
});

test('누락/잘못된 타입의 번역은 HTML 기본 문구와 alt를 유지한다', () => {
  const missing = new Element({ 'data-i18n': 'missing.key' }, '기본 한국어');
  const invalid = new Element({ 'data-knee': 'title' }, '무릎전담센터');
  const photo = new Element({ 'data-i18n-alt': 'photo.alt', alt: '사진 설명' });
  applyTranslations({ knee: { title: { invalid: true } } }, root(missing, invalid, photo));
  assert.equal(missing.textContent, '기본 한국어');
  assert.equal(invalid.textContent, '무릎전담센터');
  assert.equal(photo.getAttribute('alt'), '사진 설명');
});

test('강조/이미지를 포함한 부모는 보존하고 말단 문구만 안전하게 교체한다', () => {
  const accent = new Element({ 'data-i18n': 'accent', class: 'center-treatment-emphasis' }, '경험', [], 'STRONG');
  const photo = new Element({ src: '/original.webp' }, '', [], 'IMG');
  const parent = new Element({ 'data-i18n': 'parent' }, '', [accent, photo]);
  applyTranslations({ parent: '부모 덮어쓰기 금지', accent: '<b>Experience</b>' }, root(parent, accent, photo));
  assert.deepEqual(parent.children, [accent, photo]);
  assert.equal(accent.textContent, '<b>Experience</b>');
  assert.equal(accent.getAttribute('class'), 'center-treatment-emphasis');
  assert.equal(photo.getAttribute('src'), '/original.webp');
});

test('alt·접근성 이름·재생/정지 문구를 번역하고 이미지와 통계는 유지한다', () => {
  const image = new Element({ 'data-i18n-alt': 'photo', alt: '설명', src: '/original.webp' });
  const button = new Element({ 'data-i18n-label': 'label', 'data-i18n-pause': 'pause', 'data-i18n-play': 'play', 'data-pause': '정지', 'data-play': '재생' });
  const number = new Element({ 'data-count': '' }, '7,208');
  applyTranslations({ photo: 'Doctor', label: 'Slideshow', pause: 'Pause', play: 'Play' }, root(image, button, number));
  assert.equal(image.getAttribute('alt'), 'Doctor');
  assert.equal(image.getAttribute('src'), '/original.webp');
  assert.equal(button.getAttribute('aria-label'), 'Slideshow');
  assert.equal(button.getAttribute('data-pause'), 'Pause');
  assert.equal(button.getAttribute('data-play'), 'Play');
  assert.equal(number.textContent, '7,208');
});
