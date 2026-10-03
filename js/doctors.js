// Images and the repeated marquee groups are authored in index.html.
export function renderDoctors() {
  const section = document.querySelector('.doctors');
  if (!section || section.dataset.initialized) return;
  section.dataset.initialized = 'true';
  const gallery = section.querySelector('.doctors-gallery');
  const toggle = section.querySelector('.doctors-motion-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...section.querySelectorAll('[data-doctors-reveal]')];
  let paused = false;
  let reveals;
  function sync() {
    gallery.classList.toggle('is-ready', !reduced.matches);
    gallery.classList.toggle('is-paused', paused);
    toggle.hidden = reduced.matches;
    toggle.textContent = paused ? toggle.dataset.play : toggle.dataset.pause;
  }
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  function motionPreference() {
    reveals?.disconnect();
    targets.forEach(item => item.classList.remove('doctors-reveal-pending'));
    if (!reduced.matches && 'IntersectionObserver' in window) {
      reveals = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('doctors-reveal-pending');
        entry.target.classList.add('doctors-reveal-shown');
        reveals.unobserve(entry.target);
      }), { threshold: 0.08 });
      targets.filter(item => !item.classList.contains('doctors-reveal-shown')).forEach(item => {
        item.classList.add('doctors-reveal-pending');
        reveals.observe(item);
      });
    }
    sync();
  }
  reduced.addEventListener('change', motionPreference);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      gallery.classList.toggle('is-offscreen', !entries[0].isIntersecting);
    }).observe(gallery);
  }
  motionPreference();
  initDoctorSlider(section, reduced);
}

// Swiper only moves the eleven profiles authored in HTML; it creates no content.
function initDoctorSlider(section, reduced) {
  if (!window.Swiper) return;
  const region = section.querySelector('.doctor-carousel');
  const slider = region.querySelector('.doctor-slider');
  const toggle = region.querySelector('.doctor-slide-toggle');
  const slides = [...slider.querySelectorAll('.doctor-profile')];
  const dots = [...region.querySelectorAll('[data-doctor-slide]')];
  let paused = false, focused = false, visible = false, modalOpen = false;
  const swiper = new window.Swiper(slider, {

    slidesPerView: 1, spaceBetween: 0, loop: true, rewind: true,
    autoHeight: false, speed: reduced.matches ? 0 : 650,
    autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: false },
    navigation: { prevEl: region.querySelector('.doctor-previous'), nextEl: region.querySelector('.doctor-next'), addIcons: false },
    a11y: false,
    on: {
      slideChange(instance) {
        const current = instance.realIndex;
        slides.forEach((slide, i) => { slide.inert = i !== current; slide.setAttribute('aria-hidden', String(i !== current)); });
        dots.forEach((dot, i) => {
          if (i === current) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }
    },
  });
  function sync() {
    const play = visible && !document.hidden && !paused && !focused && !modalOpen && !reduced.matches;
    if (play && !swiper.autoplay.running) swiper.autoplay.start();
    if (!play && swiper.autoplay.running) swiper.autoplay.stop();
    swiper.params.speed = reduced.matches ? 0 : 650;
    toggle.disabled = reduced.matches;
    toggle.setAttribute('aria-label', paused ? toggle.dataset.play : toggle.dataset.pause);
    toggle.classList.toggle('is-paused', paused);
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => swiper.slideToLoop(i)));
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  slider.addEventListener('focusin', () => { focused = true; sync(); });
  slider.addEventListener('focusout', event => { if (!slider.contains(event.relatedTarget)) { focused = false; sync(); } });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(region);
  } else visible = true;
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  // Flex stretch keeps every profile as tall as the longest profile at this viewport.
  slides.forEach((slide, i) => { slide.inert = i !== 0; slide.setAttribute('aria-hidden', String(i !== 0)); });
  region.querySelector('.doctor-slider-controls').hidden = false;
  initDoctorModals(section, open => { modalOpen = open; sync(); });
  sync();
}

// All eleven dialog contents are authored in HTML; JS only opens and closes them.
function initDoctorModals(section, onChange) {
  const mobile = matchMedia('(max-width: 767px)');
  const dialogs = [...section.querySelectorAll('.doctor-modal')];
  let active = null, returnFocus = null, previousOverflow = '';
  section.querySelectorAll('[data-doctor-modal]').forEach(button => {
    button.addEventListener('click', () => {
      if (!mobile.matches || active) return;
      const dialog = document.getElementById(button.dataset.doctorModal);
      if (!dialog || typeof dialog.showModal !== 'function') return;
      returnFocus = button;
      active = dialog;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      onChange(true);
      dialog.querySelector('.doctor-modal-close').focus({ preventScroll: true });
    });
  });
  dialogs.forEach(dialog => {
    dialog.querySelector('.doctor-modal-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (active !== dialog) return;
      active = null;
      document.body.style.overflow = previousOverflow;
      returnFocus?.focus({ preventScroll: true });
      onChange(false);
    });
  });
  mobile.addEventListener('change', () => { if (!mobile.matches) active?.close(); });
}
