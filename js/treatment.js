// 이미지와 본문 구조는 HTML에 두고, 번역과 화면 진입 효과만 연결합니다.
export function renderTreatment(content = {}) {
  const section = document.querySelector('.treatment');
  if (!section) return;
  section.querySelectorAll('[data-treatment]').forEach(element => {
    const translated = content[element.dataset.treatment];
    if (typeof translated === 'string') element.textContent = translated;
  });
  connectTreatmentLabels(section);
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const targets = [...section.querySelectorAll('[data-treatment-reveal]')];
  targets.forEach(element => element.classList.add('treatment-pending'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.intersectionRatio < .15) return;
      observer.unobserve(entry.target);
      const show = () => {
        if (entry.target.classList.contains('treatment-pending')) entry.target.classList.add('treatment-shown');
      };
      const image = entry.target.querySelector('img');
      if (image && !image.complete) {
        image.addEventListener('load', show, { once: true });
        image.addEventListener('error', show, { once: true });
      } else show();
    });
  }, { threshold: .15 });
  targets.forEach(element => observer.observe(element));
  motion.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    targets.forEach(element => element.classList.remove('treatment-pending','treatment-shown'));
  });
}

// HTML에 작성된 연결선의 좌표만 갱신합니다. 문구·이미지·장식 태그를 JS로 만들지 않습니다.
function connectTreatmentLabels(section) {
  const method = section.querySelector('.treatment-method');
  const circle = method.querySelector('.treatment-instrument-circle');
  const mappings = [
    ['efficiency', '.treatment-efficiency h3'],
    ['injury', '.treatment-minimum h3:first-child'],
    ['incision', '.treatment-minimum h3:last-child']
  ];
  const entries = mappings.map(([name, selector]) => ({ name, heading: method.querySelector(selector), line: method.querySelector(`[data-treatment-connector="${name}"]`) }));
  let queued = false;
  function positionLines() {
    queued = false;
    const origin = method.getBoundingClientRect();
    const disc = circle.getBoundingClientRect();
    const circleStyle = getComputedStyle(circle);
    const center = { x: disc.left - origin.left + disc.width / 2, y: disc.top - origin.top + disc.height / 2 };
    const radius = disc.width / 2 + parseFloat(circleStyle.outlineOffset) + 1;
    const mobile = matchMedia('(max-width: 760px)').matches;
    entries.forEach(({ name, heading, line }) => {
      // 제목의 빈 여백을 제외한 실제 글자 폭을 측정하고 등장 애니메이션의 이동량을 뺍니다.
      const range = document.createRange();
      range.selectNodeContents(heading);
      const text = range.getBoundingClientRect();
      const transform = new DOMMatrixReadOnly(getComputedStyle(heading).transform);
      const box = { left: text.left - origin.left - transform.m41, right: text.right - origin.left - transform.m41, top: text.top - origin.top - transform.m42, bottom: text.bottom - origin.top - transform.m42 };
      let start, joint, bend, end;
      if (mobile && name === 'efficiency') {
        // 모바일의 설명 문단을 가로지르지 않도록 왼쪽 여백을 따라 연결합니다.
        start = { x: box.left - 10, y: (box.top + box.bottom) / 2 };
        end = { x: center.x - radius * .94, y: center.y - radius * .34 };
        joint = { x: -10, y: start.y };
        bend = { x: -10, y: end.y };
      } else if (mobile) {
        start = { x: (box.left + box.right) / 2, y: box.top - 10 };
        end = { x: center.x + radius * (name === 'injury' ? -.65 : .65), y: center.y + radius * .76 };
        joint = { x: start.x, y: start.y - 20 };
        bend = end;
      } else {
        const left = name === 'efficiency';
        start = { x: left ? box.right + 10 : box.left - 10, y: (box.top + box.bottom) / 2 };
        end = { x: center.x + radius * (left ? -.8 : .8), y: center.y + radius * (name === 'incision' ? .6 : -.6) };
        joint = { x: start.x + (end.x - start.x) * .45, y: start.y };
        bend = end;
      }
      for (const [label, point] of [['start',start],['joint',joint],['bend',bend],['end',end]]) {
        line.style.setProperty(`--${label}-x`, `${point.x}px`);
        line.style.setProperty(`--${label}-y`, `${point.y}px`);
      }
      for (const [label, a, b] of [['arm',start,joint],['stem',joint,bend],['tail',bend,end]]) {
        line.style.setProperty(`--${label}-length`, `${Math.hypot(b.x-a.x,b.y-a.y)}px`);
        line.style.setProperty(`--${label}-angle`, `${Math.atan2(b.y-a.y,b.x-a.x)}rad`);
      }
      line.classList.add('is-positioned');
    });
  }
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(positionLines);
  }
  const resize = new ResizeObserver(schedule);
  [method,circle,...entries.map(entry => entry.heading)].forEach(element => resize.observe(element));
  window.addEventListener('resize', schedule, { passive: true });
  document.fonts.ready.then(schedule);
  positionLines();
}
