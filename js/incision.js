// 콘텐츠는 HTML이 원본입니다. JS는 번역과 화면 진입 애니메이션만 연결합니다.
export function renderIncision(content = {}) {
  const section = document.querySelector('.incision-results');
  if (!section) return;
  section.querySelectorAll('[data-incision]').forEach(element => {
    const text = content[element.dataset.incision];
    if (typeof text === 'string') element.textContent = text;
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const targets = [...section.querySelectorAll('[data-incision-reveal]')];
  targets.forEach(element => element.classList.add('incision-pending'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.intersectionRatio < .15) return;
      observer.unobserve(entry.target);
      const show = () => entry.target.classList.add('incision-shown');
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
    targets.forEach(element => element.classList.remove('incision-pending','incision-shown'));
  });
}
