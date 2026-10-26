// Animate existing HTML only; content remains visible without JavaScript.
export function renderScrollMotion() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const content = [...document.querySelectorAll('[data-scroll-reveal]')];
  const cards = [...document.querySelectorAll('.center-treatment')];
  const targets = [...content, ...cards];
  const shown = new WeakSet();
  let observer;
  const triggers = new Map(targets.map(target => [
    target.querySelector('.center-treatment-hero') || target, target
  ]));
  function setup() {
    observer?.disconnect();
    targets.forEach(target => target.classList.remove('scroll-motion-pending'));
    if (motion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const target = triggers.get(entry.target);
        // Do not spend the reveal on an image that is still loading.
        if (target instanceof HTMLImageElement && !target.complete) return;
        target.classList.remove('scroll-motion-pending');
        shown.add(target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -96px 0px' });
    triggers.forEach((target, trigger) => {
      if (shown.has(target)) return;
      target.classList.add('scroll-motion-pending');
      observer.observe(trigger);
    });
  }
  content.filter(target => target instanceof HTMLImageElement).forEach(image => {
    const ready = () => {
      if (!observer || motion.matches || shown.has(image)) return;
      observer.unobserve(image);
      observer.observe(image);
    };
    image.addEventListener('load', ready);
    image.addEventListener('error', ready);
  });
  // Keyboard navigation must never land on an invisible control.
  targets.forEach(card => card.addEventListener('focusin', () => {
    card.classList.remove('scroll-motion-pending');
    shown.add(card);
  }));
  motion.addEventListener('change', setup);
  setup();
}
