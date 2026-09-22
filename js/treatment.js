// 이미지와 본문 구조는 HTML에 두고, 번역과 화면 진입 효과만 연결합니다.
export function renderTreatment(content = {}) {
  const section = document.querySelector('.treatment');
  if (!section) return;
  section.querySelectorAll('[data-treatment]').forEach(element => {
    const translated = content[element.dataset.treatment];
    if (typeof translated === 'string') element.textContent = translated;
  });
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
