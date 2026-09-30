import test from 'node:test';
import assert from 'node:assert/strict';
import { renderCenterTreatments } from '../js/center-treatment.js';

function setup({ reduced = false, animate = true } = {}) {
  const observers = [];
  const resizers = [];
  const motion = {
    matches: reduced, listeners: [],
    addEventListener(_, callback) { this.listeners.push(callback); },
    change() { this.listeners.forEach(callback => callback()); },
  };
  class Observer {
    constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.targets.clear(); }
  }
  class Resize {
    constructor(callback) { this.callback = callback; resizers.push(this); }
    observe() {}
  }
  function box() {
    const classes = new Set();
    const target = {
      matches: () => false, closest: () => null, parentElement: { closest: () => null },
      classList: {
        add: name => classes.add(name), remove: name => classes.delete(name),
        toggle(name, enabled) { if (enabled) classes.add(name); else classes.delete(name); },
      },
    };
    const content = { height: 6000, querySelectorAll: () => [target], getBoundingClientRect() { return { height: this.height }; } };
    const summary = {
      addEventListener(_, callback) { this.click = callback; },
      getBoundingClientRect: () => ({ top: 100 }), scrollIntoView() {},
    };
    const animations = [];
    const panel = { querySelector: () => content, getBoundingClientRect: () => ({ height: 300 }) };
    if (animate) panel.animate = (frames, options) => {
      const animation = { frames, options, cancelled: false, cancel() { this.cancelled = true; } };
      animations.push(animation);
      return animation;
    };
    const details = {
      open: false, querySelector: selector => selector.includes('summary') ? summary : panel,
      addEventListener(_, callback) { this.toggle = callback; },
    };
    return { details, summary, content, animations, target, classes };
  }
  const boxes = [box(), box()];
  const globals = { document: { querySelectorAll: () => boxes.map(box => box.details) }, window: { IntersectionObserver: Observer, ResizeObserver: Resize }, IntersectionObserver: Observer, ResizeObserver: Resize, matchMedia: () => motion };
  const originals = new Map(Object.keys(globals).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  Object.assign(globalThis, globals);
  renderCenterTreatments();
  return { boxes, observers, resizers, motion, restore() {
    for (const [key, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  } };
}
const click = box => box.summary.click({ preventDefault() {} });

test('연속 클릭 시 이전 완료 콜백을 무시하고 마지막 상태로 접는다', () => {
  const state = setup();
  try {
    const [box, other] = state.boxes;
    click(box);
    assert.equal(box.animations[0].frames[1].height, '6000px');
    click(box);
    box.animations[0].onfinish();
    assert.equal(box.details.open, true);
    assert.equal(box.animations[1].frames[0].height, '300px');
    box.animations[1].onfinish();
    assert.equal(box.details.open, false);
    assert.equal(other.details.open, false);
    assert.equal(other.animations.length, 0);
  } finally { state.restore(); }
});

test('등장 효과는 보일 때 적용하고 닫은 뒤 다시 열면 초기화한다', () => {
  const state = setup();
  try {
    const [box] = state.boxes;
    click(box);
    state.observers[0].callback([{ isIntersecting: true, target: box.target }]);
    assert.ok(box.classes.has('center-treatment-reveal-shown'));
    box.animations.at(-1).onfinish();
    click(box);
    box.animations.at(-1).onfinish();
    assert.ok(!box.classes.has('center-treatment-reveal-shown'));
    click(box);
    assert.ok(state.observers[0].targets.has(box.target));
  } finally { state.restore(); }
});

test('펼치는 중 높이가 바뀌면 현재 위치에서 새 높이로 이어간다', () => {
  const state = setup();
  try {
    const [box] = state.boxes;
    click(box);
    box.content.height = 9000;
    state.resizers[0].callback();
    assert.ok(box.animations[0].cancelled);
    assert.deepEqual(box.animations[1].frames, [{ height: '300px' }, { height: '9000px' }]);
    box.animations[1].onfinish();
    assert.equal(box.details.open, true);
  } finally { state.restore(); }
});

test('동작 줄이기는 즉시 표시하고 실행 중 설정 변경도 반영한다', () => {
  const state = setup();
  try {
    const [box] = state.boxes;
    click(box);
    state.motion.matches = true;
    state.motion.change();
    assert.ok(box.animations[0].cancelled);
    assert.equal(box.details.open, true);
    assert.ok(!box.classes.has('center-treatment-reveal-pending'));
    click(box);
    assert.equal(box.details.open, false);
    assert.equal(box.animations.length, 1);
  } finally { state.restore(); }
});

test('애니메이션 API가 없으면 기본 details 동작으로 콘텐츠를 표시한다', () => {
  const state = setup({ animate: false });
  try {
    const [box] = state.boxes;
    box.summary.click({ preventDefault() { assert.fail('기본 동작을 막으면 안 됩니다'); } });
    box.details.open = true;
    box.details.toggle();
    assert.ok(state.observers[0].targets.has(box.target));
  } finally { state.restore(); }
});
