// HTML의 문구 번역과 등장 효과만 연결합니다. 이미지·콘텐츠 생성 및 복제는 하지 않습니다.
export function renderKneeCenter() {
  const section = document.querySelector('#knee-center');
  if (!section) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const targets = [...section.querySelectorAll('[data-knee-reveal]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('knee-center-shown');
      observer.unobserve(entry.target);
    });
  }, { threshold: .1 });
  targets.forEach(target => {
    target.classList.add('knee-center-pending');
    observer.observe(target);
  });
  motion.addEventListener('change', () => {
    if (!motion.matches) return;
    observer.disconnect();
    targets.forEach(target => target.classList.remove('knee-center-pending', 'knee-center-shown'));
  });
}
