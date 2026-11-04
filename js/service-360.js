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
    }), { threshold: .08, rootMargin: '0px 0px -96px 0px' });
    targets.filter(item => !item.dataset.revealed).forEach(item => {
      item.classList.add('service360-reveal-pending');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', reveal);
  reveal();
  initHotelMarquee(section, motion);
}

function initHotelMarquee(section, motion) {
  if (!window.Swiper) return;
  const gallery = section.querySelector('.service360-hotels');
  let paused = false;
  let dragging = false;
  let frame = 0;
  let previousTime = 0;
  const swiper = new window.Swiper(gallery, {
    slidesPerView: 'auto', spaceBetween: 24, loop: true,
    speed: 500, initialSlide: 5, centeredSlides: true,
    loopAdditionalSlides: 0, a11y: false, grabCursor: true,
    freeMode: { enabled: true, momentum: false },
    breakpoints: { 601: { spaceBetween: 24 }, 1101: { spaceBetween: 32 } }
  });
  // Keep a constant pixel speed instead of restarting a long transition per card.
  // Swiper manages dragging and reorders only the existing HTML slides at the seam.
  function advance(time) {
    frame = 0;
    if (paused || dragging || motion.matches || document.hidden) return;
    const elapsed = previousTime ? Math.min(time - previousTime, 64) : 0;
    previousTime = time;
    swiper.setTransition(0);
    const anchor = swiper.slides[swiper.activeIndex];
    const before = anchor.getBoundingClientRect().left;
    swiper.loopFix({ direction: 'next', setTranslate: true });
    // loopFix may snap to a slide center; retain its actual on-screen position.
    const correction = before - anchor.getBoundingClientRect().left;
    const position = swiper.getTranslate() + correction - elapsed * 0.032;
    swiper.setTranslate(position);
    swiper.updateProgress(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    frame = requestAnimationFrame(advance);
  }
  function sync() {
    cancelAnimationFrame(frame);
    previousTime = 0;
    if (!paused && !dragging && !motion.matches && !document.hidden) {
      frame = requestAnimationFrame(advance);
    }
  }
  swiper.on('touchStart', () => { dragging = true; sync(); });
  swiper.on('touchEnd', () => { dragging = false; sync(); });
  gallery.addEventListener('focusin', () => {
    paused = gallery.matches(':focus-visible');
    sync();
  });
  gallery.addEventListener('focusout', () => { paused = false; sync(); });
  gallery.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    paused = true;
    sync();
    if (event.key === 'ArrowRight') swiper.slideNext(motion.matches ? 0 : 500);
    else swiper.slidePrev(motion.matches ? 0 : 500);
  });
  motion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  sync();
}
