import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = (await readFile(new URL('../js/doctors.js', import.meta.url), 'utf8')).replace('export function', 'function');
function element() {
  const classes = new Set();
  return {
    dataset: {}, listeners: {}, hidden: true,
    classList: {
      add: name => classes.add(name), remove: name => classes.delete(name),
      contains: name => classes.has(name),
      toggle(name, value) { if (value) classes.add(name); else classes.delete(name); },
    },
    addEventListener(name, fn) { this.listeners[name] = fn; },
  };
}
function setup(reduce = false) {
  const gallery = element(), toggle = element(), title = element(), section = element();
  toggle.dataset = { play: '사진 움직임 재생', pause: '사진 움직임 멈추기' };
  section.querySelector = selector => selector.includes('gallery') ? gallery : toggle;
  section.querySelectorAll = () => [title];
  const media = { matches: reduce, addEventListener: (_, fn) => { media.change = fn; } };
  const observers = [];
  class Observer {
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe() {} unobserve() {} disconnect() { this.disconnected = true; }
  }
  const context = vm.createContext({ document: { querySelector: () => section }, matchMedia: () => media,
    window: { IntersectionObserver: Observer }, IntersectionObserver: Observer });
  vm.runInContext(source + '\nrenderDoctors();', context);
  return { gallery, toggle, title, media, observers, context };
}
test('마키의 정지/재생과 화면 밖 정지가 독립적으로 적용된다', () => {
  const { gallery, toggle, observers } = setup();
  assert.equal(gallery.classList.contains('is-ready'), true);
  assert.equal(toggle.hidden, false);
  toggle.listeners.click();
  assert.equal(toggle.textContent, '사진 움직임 재생');
  assert.equal(gallery.classList.contains('is-paused'), true);
  observers[0].callback([{ isIntersecting: false }]);
  toggle.listeners.click();
  assert.equal(gallery.classList.contains('is-paused'), false);
  assert.equal(gallery.classList.contains('is-offscreen'), true);
  observers[0].callback([{ isIntersecting: true }]);
  assert.equal(gallery.classList.contains('is-offscreen'), false);
});
test('동작 줄이기는 즉시 표시하고 사용자 설정 변경에도 반영한다', () => {
  const { gallery, toggle, title, media, observers } = setup(true);
  assert.equal(gallery.classList.contains('is-ready'), false);
  assert.equal(toggle.hidden, true);
  assert.equal(title.classList.contains('doctors-reveal-pending'), false);
  media.matches = false; media.change();
  assert.equal(title.classList.contains('doctors-reveal-pending'), true);
  observers[1].callback([{ isIntersecting: true, target: title }]);
  assert.equal(title.classList.contains('doctors-reveal-shown'), true);
  media.matches = true; media.change();
  assert.equal(toggle.hidden, true);
  assert.equal(title.classList.contains('doctors-reveal-pending'), false);
});
test('다시 초기화해도 이벤트와 관찰자가 중복되지 않는다', () => {
  const { context, observers } = setup();
  vm.runInContext('renderDoctors();', context);
  assert.equal(observers.length, 2);
});

function modalSetup() {
  const button = element(), closeButton = element(), dialog = element();
  button.dataset.doctorModal = 'doctor-modal-0';
  let focus = '';
  button.focus = () => { focus = 'button'; };
  closeButton.focus = () => { focus = 'close'; };
  dialog.showModal = () => { dialog.open = true; };
  dialog.close = () => { dialog.open = false; dialog.listeners.close(); };
  dialog.querySelector = () => closeButton;
  dialog.getBoundingClientRect = () => ({ left: 10, top: 10, right: 390, bottom: 790 });
  const section = { querySelectorAll: selector => selector === '.doctor-modal' ? [dialog] : [button] };
  const body = { style: { overflow: 'auto' } };
  const media = { matches: true, addEventListener: (_, fn) => { media.change = fn; } };
  const states = [];
  const context = vm.createContext({ section, onChange: open => states.push(open),
    document: { body, getElementById: () => dialog }, matchMedia: () => media });
  vm.runInContext(source + '\ninitDoctorModals(section, onChange);', context);
  return { button, closeButton, dialog, body, media, states, focus: () => focus };
}

test('상세 팝업은 배경 스크롤을 잠그고 닫을 때 이전 설정과 버튼 포커스를 복구한다', () => {
  const { button, closeButton, dialog, body, states, focus } = modalSetup();
  button.listeners.click();
  assert.equal(dialog.open, true);
  assert.equal(body.style.overflow, 'hidden');
  assert.equal(focus(), 'close');
  button.listeners.click();
  assert.deepEqual(states, [true]);
  closeButton.listeners.click();
  assert.equal(dialog.open, false);
  assert.equal(body.style.overflow, 'auto');
  assert.equal(focus(), 'button');
  assert.deepEqual(states, [true, false]);
});

test('본문 클릭은 팝업을 유지하고 바깥 클릭 또는 데스크톱 전환은 팝업을 닫는다', () => {
  const { button, dialog, media } = modalSetup();
  button.listeners.click();
  dialog.listeners.click({ target: dialog, clientX: 50, clientY: 50 });
  assert.equal(dialog.open, true);
  dialog.listeners.click({ target: dialog, clientX: 0, clientY: 50 });
  assert.equal(dialog.open, false);
  button.listeners.click();
  media.matches = false; media.change();
  assert.equal(dialog.open, false);
  button.listeners.click();
  assert.equal(dialog.open, false);
});
