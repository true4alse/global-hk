import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = (await readFile(new URL('../js/hero.js', import.meta.url), 'utf8')).replace('export function', 'function');
test('Swiper 로드 실패 시에도 HTML 숫자와 번역된 접근성 문구를 유지한다', () => {
  const number = { textContent: '2,500', dataset: { target: '2500' } };
  const attributes = new Map();
  const statistic = { setAttribute: (key, value) => attributes.set(key, value) };
  const hero = { querySelector: selector => selector === '.hero-number' ? number : statistic };
  const context = vm.createContext({ document: { querySelector: () => hero }, Intl, window: {} });
  vm.runInContext(source, context);
  for (const [period, unit] of [['연 간', '례'], ['Annually', 'cases'], ['Ежегодно', 'случаев']]) {
    context.renderHero({ period, unit });
    assert.equal(number.textContent, '2,500');
    assert.equal(number.dataset.target, '2500');
    assert.equal(attributes.get('aria-label'), `2,500 ${unit}`);
  }
});

test('숫자는 번역 데이터가 아닌 HTML data-target에서 읽는다', () => {
  const number = { textContent: '1,234', dataset: { target: '9876' } };
  let label;
  const hero = { querySelector: selector => selector === '.hero-number' ? number : { setAttribute: (_, value) => { label = value; } } };
  const context = vm.createContext({ document: { querySelector: () => hero }, Intl, window: {} });
  vm.runInContext(source, context);
  context.renderHero({ period: 'Annual', unit: 'cases', number: 'wrong' });
  assert.equal(label, '9,876 cases');
});
