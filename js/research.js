// 콘텐츠 DOM을 만들지 않습니다. 번역, Swiper 동작, 화면 진입 애니메이션만 연결합니다.
export function renderResearch(content = {}) {
  const section = document.querySelector('#research');
  if (!section) return;
  section.querySelectorAll('[data-research]').forEach(element => {
    const value = content[element.dataset.research];
    if (typeof value === 'string') element.textContent = value;
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...section.querySelectorAll('[data-research-reveal]')];
  let revealObserver;
  if (!motion.matches && 'IntersectionObserver' in window) {
    targets.forEach(element => element.classList.add('research-pending'));
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('research-shown');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .12 });
    targets.forEach(element => revealObserver.observe(element));
  }

  const slider = section.querySelector('.research-slider');
  const photoToggle = section.querySelector('.research-photo-toggle');
  const marqueeToggle = section.querySelector('.research-marquee-toggle');
  let visible = !('IntersectionObserver' in window);
  let photoPaused = false;
  let marqueePaused = false;
  let focused = false;
  // 2000ms마다 다음 사진으로 이동. loop는 HTML에 있는 슬라이드를 재배치하며 콘텐츠를 복제하지 않습니다.
  const swiper = window.Swiper ? new window.Swiper(slider, {
    slidesPerView: 'auto', centeredSlides: true, spaceBetween: 20,
    loop: true, loopAddBlankSlides: false, speed: motion.matches ? 0 : 650,
    autoplay: { delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: false },
    navigation: { prevEl: section.querySelector('.research-previous'), nextEl: section.querySelector('.research-next'), addIcons: false },
    // 접근성 역할과 버튼 이름은 HTML에 직접 작성해 라이브러리의 DOM 생성을 끕니다.
    a11y: false,
    breakpoints: { 701: { spaceBetween: 20 }, 1400: { spaceBetween: 28 } }
  }) : null;
  function syncMotion() {
    section.classList.toggle('is-in-view', visible && !document.hidden);
    section.classList.toggle('is-paused', marqueePaused || motion.matches);
    if (swiper) {
      swiper.params.speed = motion.matches ? 0 : 650;
      const shouldPlay = visible && !document.hidden && !motion.matches && !photoPaused && !focused;
      if (shouldPlay && !swiper.autoplay.running) swiper.autoplay.start();
      if (!shouldPlay && swiper.autoplay.running) swiper.autoplay.stop();
    }
  }
  function toggleLabel(button, paused, kind) {
    button.setAttribute('aria-pressed', String(paused));
    const state = paused ? 'play' : 'pause';
    button.textContent = content[`${kind}${paused ? 'Play' : 'Pause'}`] || button.dataset[state];
  }
  photoToggle.addEventListener('click', () => {
    photoPaused = !photoPaused;
    toggleLabel(photoToggle, photoPaused, 'photo');
    syncMotion();
  });
  marqueeToggle.addEventListener('click', () => {
    marqueePaused = !marqueePaused;
    toggleLabel(marqueeToggle, marqueePaused, 'marquee');
    syncMotion();
  });
  slider.addEventListener('focusin', () => { focused = true; syncMotion(); });
  slider.addEventListener('focusout', event => {
    if (!slider.contains(event.relatedTarget)) { focused = false; syncMotion(); }
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      syncMotion();
    }, { threshold: 0 }).observe(section);
  }
  motion.addEventListener('change', () => {
    if (motion.matches) {
      revealObserver?.disconnect();
      targets.forEach(element => element.classList.remove('research-pending', 'research-shown'));
    }
    photoToggle.disabled = motion.matches || !swiper;
    syncMotion();
  });
  document.addEventListener('visibilitychange', syncMotion);
  photoToggle.disabled = motion.matches || !swiper;
  syncMotion();
}
