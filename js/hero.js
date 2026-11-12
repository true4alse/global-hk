const heroInstances = new WeakMap();

// Content, pictures and controls are authored in HTML. Swiper only moves slides.
export function renderHero(content) {
  const hero = document.querySelector('.hero');
  if (!hero || !content) return;
  const number = hero.querySelector('.hero-number');
  const target = Number(number.dataset.target ||= number.textContent.replaceAll(',', '').trim());
  const formatted = new Intl.NumberFormat('en-US').format(target);
  hero.querySelector('.hero-statistic')?.setAttribute('aria-label', `${content.period.replaceAll(' ', '')} ${formatted} ${content.unit}`);
  if (heroInstances.has(hero)) {
    heroInstances.get(hero).refresh();
    return;
  }
  if (!window.Swiper) return;
  const region = hero.querySelector('.hero-slider');
  const slides = [...hero.querySelectorAll('[data-hero-slide]')];
  const dots = [...hero.querySelectorAll('[data-hero-go]')];
  const toggle = hero.querySelector('.hero-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false, paused = false, focused = false, hovered = false;
  let frame = 0, timer = 0, generation = 0;
  let previousRealIndex = 0;

  function finishCount() {
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    number.textContent = formatted;
  }
  function countUp() {
    let started;
    function tick(now) {
      started ??= now;
      const progress = Math.min((now - started) / 2200, 1);
      number.textContent = new Intl.NumberFormat('en-US').format(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }
  function activeSlide() { return slides.find(slide => Number(slide.dataset.heroSlide) === swiper.realIndex); }
  function markCurrent() {
    slides.forEach(slide => {
      const active = Number(slide.dataset.heroSlide) === swiper.realIndex;
      slide.inert = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach(dot => {
      if (Number(dot.dataset.heroGo) === swiper.realIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }
  function resetArrival() {
    generation++;
    finishCount();
    // Keep each slide's first reveal across loops and offscreen pauses.
    slides.forEach(slide => {
      if (slide.classList.contains('is-arrived')) slide.classList.add('is-revealed');
    });
  }
  async function arrive() {
    if (!visible || document.hidden) return;
    const slide = activeSlide();
    if (!slide || slide.classList.contains('is-arrived')) return;
    const ownGeneration = ++generation;
    // Wait for actual pictures, so slow connections do not spend the reveal unseen.
    await Promise.all([...slide.querySelectorAll('img')].map(img => img.decode?.().catch(() => {})));
    if (generation !== ownGeneration || !visible || document.hidden || activeSlide() !== slide) return;
    slide.classList.add('is-arrived');
    if (slide.contains(number) && !reduced.matches) {
      number.textContent = '0';
      timer = setTimeout(countUp, 1900);
    }
  }
  function sync() {
    const play = visible && !document.hidden && !paused && !focused && !hovered && !reduced.matches;
    if (play && !swiper.autoplay.running) swiper.autoplay.start();
    if (!play && swiper.autoplay.running) swiper.autoplay.stop();
    swiper.params.speed = reduced.matches ? 0 : 850;
    toggle.disabled = reduced.matches;
    toggle.setAttribute('aria-label', paused ? toggle.dataset.play : toggle.dataset.pause);
    toggle.classList.toggle('is-paused', paused);
  }
  const swiper = new window.Swiper(region, {
    init: false, slidesPerView: 1, spaceBetween: 0, loop: true,
    autoHeight: false, speed: reduced.matches ? 0 : 850,
    autoplay: { delay: 10000, disableOnInteraction: false },
    a11y: false,
  });
  swiper.on('slideChange', () => {
    // Loop initialization and layout updates can emit slideChange for the
    // same slide. Only a genuine departure should finish its first reveal.
    if (swiper.realIndex !== previousRealIndex) {
      resetArrival();
      previousRealIndex = swiper.realIndex;
    }
    markCurrent();
  });
  swiper.on('slideChangeTransitionEnd', arrive);
  // Startup resize/update can invalidate a pending decode without transitionEnd.
  swiper.on('resize', () => queueMicrotask(arrive));
  swiper.on('update', () => queueMicrotask(arrive));
  swiper.init();
  hero.classList.add('is-enhanced');
  hero.querySelector('.hero-controls').hidden = false;
  markCurrent();
  const initialBounds = hero.getBoundingClientRect();
  visible = initialBounds.bottom > 0 && initialBounds.top < window.innerHeight;
  sync();
  arrive();
  hero.querySelector('.hero-next').addEventListener('click', () => swiper.slideNext());
  hero.querySelector('.hero-previous').addEventListener('click', () => swiper.slidePrev());
  dots.forEach(dot => dot.addEventListener('click', () => swiper.slideToLoop(Number(dot.dataset.heroGo))));
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  hero.addEventListener('focusin', () => { focused = true; sync(); });
  hero.addEventListener('focusout', event => { if (!hero.contains(event.relatedTarget)) { focused = false; sync(); } });
  hero.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; sync(); } });
  hero.addEventListener('pointerleave', () => { hovered = false; sync(); });
  document.addEventListener('visibilitychange', () => { sync(); if (document.hidden) resetArrival(); else arrive(); });
  reduced.addEventListener('change', () => { finishCount(); sync(); arrive(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
      if (visible) arrive(); else resetArrival();
    }, { threshold: 0.08 }).observe(hero);
  } else { visible = true; sync(); arrive(); }
  heroInstances.set(hero, { refresh() {
    swiper.update();
    markCurrent();
    sync();
    arrive();
  } });
}
