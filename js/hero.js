const activeAnimations = new WeakMap();

// 선택된 언어 콘텐츠와 공통 히어로 모션을 연결합니다.
export function renderHero(content) {
  const hero = document.querySelector('.hero');
  if (!hero || !content) return;
  activeAnimations.get(hero)?.();
  hero.querySelectorAll('[data-hero]').forEach(element => {
    const value = content[element.dataset.hero];
    if (typeof value === 'string') element.textContent = value;
  });
  const number = hero.querySelector('.hero-number');
  number.dataset.target ||= number.textContent.replaceAll(',', '').trim();
  const count = new Intl.NumberFormat(document.documentElement.lang || 'ko').format(Number(number.dataset.target));
  const animationContent = { ...content, count };
  hero.querySelector('.hero-statistic')?.setAttribute('aria-label', content.period.replaceAll(' ', '') + ' ' + count + content.unit);
  activeAnimations.set(hero, animateHero(hero, animationContent));
}

function animateHero(hero, content) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const statistic = hero.querySelector('.hero-statistic');
  const number = hero.querySelector('.hero-number');
  const texts = [...hero.querySelectorAll('.hero-period, .hero-unit, .hero-title, .hero-description p')];
  const target = Number(content.count.replaceAll(',', ''));
  const formatter = new Intl.NumberFormat(document.documentElement.lang || 'ko');
  let frame = 0;
  let observer;
  let disposed = false;

  function finish() {
    cancelAnimationFrame(frame);
    observer?.disconnect();
    number.classList.remove('is-rolling');
    number.textContent = content.count;
    statistic.classList.remove('statistic-pending');
    texts.forEach(element => element.classList.remove('reveal-pending'));
  }

  function countUp() {
    const duration = 2400;
    let startedAt;
    function tick(now) {
      startedAt ??= now;
      const progress = Math.min((now - startedAt) / duration, 1);
      // 빠르게 올라간 뒤 목표 숫자에 가까워지며 부드럽게 감속합니다.
      const eased = 1 - Math.pow(1 - progress, 3);
      number.textContent = formatter.format(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else number.textContent = content.count;
    }
    frame = requestAnimationFrame(tick);
  }

  function startObserving() {
    if (disposed || reducedMotion.matches) return finish();
    if (!('IntersectionObserver' in window) || !Number.isFinite(target)) return finish();
    number.textContent = '0';
    statistic.classList.add('statistic-pending');
    texts.forEach(element => {
      element.classList.remove('is-revealed');
      element.classList.add('reveal-pending');
    });
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (entry.target === number) {
          statistic.classList.remove('statistic-pending');
          countUp();
        } else {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.15 });
    observer.observe(number);
    texts.forEach(element => observer.observe(element));
  }

  const onMotionChange = () => { if (reducedMotion.matches) finish(); };
  reducedMotion.addEventListener('change', onMotionChange);
  // 사용자 동작 줄이기 설정에서는 최종 수치와 문구를 즉시 표시합니다.
  if (reducedMotion.matches) finish();
  else startObserving();
  return () => {
    disposed = true;
    finish();
    reducedMotion.removeEventListener('change', onMotionChange);
  };
}



