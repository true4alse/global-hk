// 콘텐츠를 만들거나 복제하지 않고, 기존 HTML의 번역과 등장 효과만 연결합니다.
export function renderSpecialty(content = {}) {
  const section = document.querySelector('#specialty-center');
  if (!section) return;
  section.querySelectorAll('[data-specialty-alt]').forEach(image => {
    const text = content[image.dataset.specialtyAlt];
    if (typeof text === 'string') image.alt = text;
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const targets = [...section.querySelectorAll('[data-specialty-reveal]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('specialty-shown');
      observer.unobserve(entry.target);
    });
  }, { threshold: .1 });
  targets.forEach(target => {
    target.classList.add('specialty-pending');
    observer.observe(target);
  });
  motion.addEventListener('change', () => {
    if (!motion.matches) return;
    observer.disconnect();
    targets.forEach(target => target.classList.remove('specialty-pending','specialty-shown'));
  });
}
