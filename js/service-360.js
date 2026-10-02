// Content, image paths and translations remain in HTML and locales/ko.js.
export function renderService360() {
  const section = document.querySelector('#service-360');
  if (!section || section.dataset.initialized) return;
  section.dataset.initialized = 'true';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...section.querySelectorAll('[data-service360-reveal]')];
  let observer;
  function reveal() {
    observer?.disconnect();
    targets.forEach(item => item.classList.remove('service360-reveal-pending'));
    if (motion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('service360-reveal-pending');
      entry.target.dataset.revealed = 'true';
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    targets.filter(item => !item.dataset.revealed).forEach(item => {
      item.classList.add('service360-reveal-pending');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', reveal);
  reveal();
  const gallery = section.querySelector('.service360-hotels');
  const cards = [...gallery.querySelectorAll('.service360-hotel')];
  let active = 2;
  function centerCard(behavior = 'instant') {
    const card = cards[active];
    gallery.scrollTo({ left: card.offsetLeft - gallery.offsetLeft - (gallery.clientWidth - card.clientWidth) / 2, behavior });
  }
  gallery.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    active = event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : Math.max(0, Math.min(cards.length - 1, active + (event.key === 'ArrowRight' ? 1 : -1)));
    centerCard(motion.matches ? 'instant' : 'smooth');
  });
  gallery.addEventListener('scrollend', () => {
    const middle = gallery.getBoundingClientRect().left + gallery.clientWidth / 2;
    active = cards.reduce((best, card, index) => Math.abs(card.getBoundingClientRect().left + card.clientWidth / 2 - middle) < Math.abs(cards[best].getBoundingClientRect().left + cards[best].clientWidth / 2 - middle) ? index : best, 0);
  });
  let drag;
  gallery.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { x: event.clientX, left: gallery.scrollLeft };
    gallery.setPointerCapture(event.pointerId);
    gallery.classList.add('is-dragging');
  });
  gallery.addEventListener('pointermove', event => {
    if (!drag) return;
    gallery.scrollLeft = drag.left - (event.clientX - drag.x);
  });
  function endDrag() {
    if (!drag) return;
    drag = null;
    gallery.classList.remove('is-dragging');
  }
  gallery.addEventListener('pointerup', endDrag);
  gallery.addEventListener('pointercancel', endDrag);
  gallery.addEventListener('lostpointercapture', endDrag);
  gallery.addEventListener('dragstart', event => event.preventDefault());
  // Native horizontal scrolling works with touch, trackpads and keyboard, without duplicated cards.
  new ResizeObserver(() => centerCard()).observe(gallery);
}
