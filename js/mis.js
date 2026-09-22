// HTML 원본 콘텐츠에 번역·화면 진입 효과만 연결합니다.
export function renderMis(content = {}) {
  const section = document.querySelector('.mis-tka');
  if (!section) return;
  section.querySelectorAll('[data-mis]').forEach(element => {
    const translation = content[element.dataset.mis];
    if (typeof translation === 'string') element.textContent = translation;
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...section.querySelectorAll('[data-mis-reveal], [data-mis-blur]')];
  const sequence = section.querySelector('[data-mis-sequence]');
  let observer;
  function finish() {
    observer?.disconnect();
    targets.forEach(element => element.classList.remove('mis-pending', 'mis-shown'));
    sequence.classList.remove('mis-sequence-ready', 'mis-sequence-playing');
  }
  if (motion.matches || !('IntersectionObserver' in window)) return finish();
  targets.forEach(element => element.classList.add('mis-pending'));
  sequence.classList.add('mis-sequence-ready');
  function afterImageReady(image, show) {
    if (!image || image.complete) return show();
    image.addEventListener('load', show, { once: true });
    image.addEventListener('error', show, { once: true });
  }
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.intersectionRatio < (entry.target === sequence ? .45 : .18)) return;
      observer.unobserve(entry.target);
      if (entry.target === sequence) {
        afterImageReady(sequence.querySelector('img'), () => {
          if (!motion.matches && sequence.classList.contains('mis-sequence-ready')) sequence.classList.add('mis-sequence-playing');
        });
      } else {
        const element = entry.target;
        afterImageReady(element.querySelector('img'), () => {
          if (!motion.matches && element.classList.contains('mis-pending')) element.classList.add('mis-shown');
        });
      }
    });
  }, { threshold: [.18, .45] });
  [...targets, sequence].forEach(element => observer.observe(element));
  motion.addEventListener('change', event => { if (event.matches) finish(); });
}
