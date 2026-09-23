// HTML의 문구만 번역하고, 같은 관찰자로 문구·배경·트로피의 화면 진입 효과를 연결합니다.
export function renderCadaver(content = {}) {
  const section = document.querySelector('.cadaver');
  if (!section) return;
  section.querySelectorAll('[data-cadaver]').forEach(element => {
    const text = content[element.dataset.cadaver];
    if (typeof text === 'string') element.textContent = text;
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const targets = [...section.querySelectorAll('[data-cadaver-reveal]')];
  targets.forEach(element => element.classList.add('cadaver-pending'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.intersectionRatio < .12) return;
      observer.unobserve(entry.target);
      const show = () => entry.target.classList.add('cadaver-shown');
      const image = entry.target.matches('img') ? entry.target : entry.target.querySelector('img');
      if (image && !image.complete) {
        image.addEventListener('load', show, { once: true });
        image.addEventListener('error', show, { once: true });
      } else show();
    });
  }, { threshold: .12 });
  targets.forEach(element => observer.observe(element));
  motion.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    targets.forEach(element => element.classList.remove('cadaver-pending','cadaver-shown'));
  });
}
