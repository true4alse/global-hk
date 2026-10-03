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
  initHotelMarquee(section, motion);
}

function initHotelMarquee(section, motion) {
  if (!window.Swiper) return;
  const gallery = section.querySelector('.service360-hotels');
  let paused = false;
  const swiper = new window.Swiper(gallery, {
    slidesPerView: 'auto', spaceBetween: 24, loop: true,
    speed: 10000, initialSlide: 2, centeredSlides: true,
    loopAdditionalSlides: 2, a11y: false, grabCursor: true,
    autoplay: { delay: 0, disableOnInteraction: false, waitForTransition: true },
    breakpoints: { 601: { spaceBetween: 24 }, 1101: { spaceBetween: 32 } }
  });
  function freeze() {
    const position = swiper.getTranslate();
    swiper.autoplay.stop();
    swiper.setTransition(0);
    swiper.setTranslate(position);
    swiper.updateProgress(position);
  }
  function sync() {
    if (paused || motion.matches || document.hidden) freeze();
    else if (!swiper.autoplay.running) swiper.autoplay.start();
  }
  gallery.addEventListener('mouseenter', () => { paused = true; sync(); });
  gallery.addEventListener('mouseleave', () => { paused = gallery.contains(document.activeElement); sync(); });
  gallery.addEventListener('focusin', () => { paused = true; sync(); });
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
