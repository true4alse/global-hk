// Animate existing HTML only; content remains visible without JavaScript.
export function renderScrollMotion() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  // These existing elements have no section-specific reveal. Only motion classes
  // are added: HTML content and translation attributes stay untouched.
  const additions = [...document.querySelectorAll(
    '.treatment-instrument-image, .treatment-strategy-image, .service360-hotels, ' +
    '.reservation-patient > h3, .reservation-field, .reservation-insurance, ' +
    '.reservation-actions, .footer-logo, .footer-social, .footer-copyright'
  )];
  additions.forEach(element => element.classList.add('scroll-motion-content'));
  const content = [...document.querySelectorAll('[data-scroll-reveal], .scroll-motion-content')];
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
  // Spin the decorative ring only while it is visible. The instrument and
  // connector coordinates are stationary, including during rotation.
  const rings = [...document.querySelectorAll('.treatment-instrument-circle')];
  const visibleRings = new Set();
  const syncRings = () => rings.forEach(ring => ring.classList.toggle(
    'ring-motion-running', visibleRings.has(ring) && !motion.matches && !document.hidden
  ));
  if ('IntersectionObserver' in window) {
    const ringObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleRings.add(entry.target);
        else visibleRings.delete(entry.target);
      });
      syncRings();
    });
    rings.forEach(ring => ringObserver.observe(ring));
  }
  motion.addEventListener('change', syncRings);
  document.addEventListener('visibilitychange', syncRings);
}
