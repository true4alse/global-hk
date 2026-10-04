export function renderContact() {
  const targets = [...document.querySelectorAll('[data-contact-reveal]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  function update() {
    observer?.disconnect();
    targets.forEach(item => item.classList.remove('contact-reveal-pending'));
    if (motion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('contact-reveal-pending');
      entry.target.dataset.contactShown = 'true';
      observer.unobserve(entry.target);
    }), { threshold: .1 });
    targets.filter(item => !item.dataset.contactShown).forEach(item => {
      item.classList.add('contact-reveal-pending');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', update);
  update();
}
