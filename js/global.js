// 콘텐츠를 생성하지 않고 HTML에 있는 요소의 번역과 동작만 연결합니다.
export function renderGlobal(content = {}) {
  const section = document.querySelector('.global-excellence');
  if (!section) return;
  section.querySelectorAll('[data-global]').forEach(element => {
    const text = content[element.dataset.global];
    if (typeof text === 'string') element.textContent = text;
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const watermark = section.querySelector('.global-watermark');
  let fadeFrame = 0;
  // 섹션 상단 진입 시 85%, 섹션 끝에 도달하면 16%. 위로 스크롤하면 복원됩니다.
  function updateWatermark() {
    fadeFrame = 0;
    const bounds = section.getBoundingClientRect();
    const distance = Math.max(1, bounds.height - innerHeight);
    const progress = Math.max(0, Math.min(1, -bounds.top / distance));
    watermark.style.opacity = motion.matches ? '.16' : String(.85 - .69 * progress);
  }
  function scheduleWatermark() {
    if (!fadeFrame) fadeFrame = requestAnimationFrame(updateWatermark);
  }
  addEventListener('scroll', scheduleWatermark, { passive: true });
  addEventListener('resize', scheduleWatermark);
  new ResizeObserver(scheduleWatermark).observe(section);
  motion.addEventListener('change', scheduleWatermark);
  updateWatermark();
  const targets = [...section.querySelectorAll('[data-global-reveal], [data-global-photo]')];
  const counters = [...section.querySelectorAll('[data-global-count]')];
  const formatter = new Intl.NumberFormat(document.documentElement.lang || 'ko');
  const values = new Map(counters.map(element => [element,Number(element.textContent.replaceAll(',','').trim())]));
  const frames = new Set();
  let observer;
  function finish() {
    observer?.disconnect();
    frames.forEach(cancelAnimationFrame); frames.clear();
    targets.forEach(element => element.classList.add('global-shown'));
    values.forEach((value,element) => element.textContent = formatter.format(value));
  }
  function count(element) {
    const target = values.get(element);
    let start, id;
    function tick(now) {
      frames.delete(id);
      start ??= now;
      const progress = Math.min((now-start)/2400,1);
      element.textContent = formatter.format(Math.round(target*(1-Math.pow(1-progress,3))));
      if (progress < 1) { id = requestAnimationFrame(tick); frames.add(id); }
    }
    id = requestAnimationFrame(tick); frames.add(id);
  }
  if (motion.matches || !('IntersectionObserver' in window)) return finish();
  targets.forEach(element => element.classList.add('global-pending'));
  counters.forEach(element => {
    element.setAttribute('aria-label',formatter.format(values.get(element)));
    element.textContent = '0';
  });
  observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    if (values.has(entry.target)) count(entry.target);
    else entry.target.classList.add('global-shown');
  }), {threshold: .18});
  [...targets,...counters].forEach(element => observer.observe(element));
  motion.addEventListener('change',event => { if (event.matches) finish(); });
}
