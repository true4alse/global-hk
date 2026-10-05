import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = (await readFile(new URL('../js/hero.js', import.meta.url), 'utf8')).replace('export function', 'function');
test('언어를 반복 변경해도 원본 7208로 카운트하고 쉼표로 표시한다', () => {
  const classes = { add() {}, remove() {} };
  const number = { textContent:'7,208', dataset:{}, classList:classes };
  const statistic = { classList:classes, setAttribute() {} };
  const hero = { querySelector:s => s === '.hero-number' ? number : statistic, querySelectorAll:() => [] };
  const document = { documentElement:{lang:'ko'}, querySelector:() => hero };
  const frames = new Map();
  let id = 0;
  let reduced = false;
  const context = vm.createContext({
    document, Intl, window:{ matchMedia:() => ({ matches:reduced, addEventListener() {}, removeEventListener() {} }), IntersectionObserver:true },
    requestAnimationFrame:fn => { frames.set(++id,fn); return id; },
    cancelAnimationFrame:key => frames.delete(key),
    IntersectionObserver:class { constructor(fn) { this.fn=fn; } observe(target) { this.fn([{target,isIntersecting:true}]); } unobserve() {} disconnect() {} },
  });
  vm.runInContext(source, context);
  const tick = time => { const pending=[...frames.values()]; frames.clear(); pending.forEach(fn=>fn(time)); };
  for (const lang of ['ko','ru','vi','ar','en']) {
    document.documentElement.lang=lang;
    vm.runInContext("renderHero({period:'연간',unit:'례'})",context);
    tick(0);
    assert.equal(number.textContent,'0');
    tick(1200);
    assert.equal(number.textContent,'6,307',lang+' 중간 애니메이션');
    tick(2400);
    assert.equal(number.textContent,'7,208',lang+' 최종 표기');
    assert.equal(number.dataset.target,'7208');
  }
  reduced=true;
  vm.runInContext("renderHero({period:'연간',unit:'례'})",context);
  assert.equal(number.textContent,'7,208');
  assert.equal(frames.size,0);
});
