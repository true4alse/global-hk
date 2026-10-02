// All text, photographs and decorative assets are authored in index.html.
export function renderApkass() {
  const section = document.querySelector('#apkass');
  if (!section || section.dataset.initialized) return;
  section.dataset.initialized = 'true';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...section.querySelectorAll('[data-apkass-reveal]')];
  let observer;
  function setup() {
    observer?.disconnect();
    targets.forEach(item => item.classList.remove('apkass-reveal-pending'));
    if (motion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('apkass-reveal-pending');
      entry.target.classList.add('apkass-reveal-shown');
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    targets.filter(item => !item.classList.contains('apkass-reveal-shown')).forEach(item => {
      item.classList.add('apkass-reveal-pending');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', setup);
  setup();
}
