// 센터 배너 공통 등장 효과. 콘텐츠와 이미지 경로는 HTML에서 관리합니다.
export function renderCenterBanners() {
  const targets = [...document.querySelectorAll('[data-center-banner-reveal]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!targets.length || motion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('center-banner-shown');
      observer.unobserve(entry.target);
    });
  }, { threshold: .1 });
  targets.forEach(target => {
    target.classList.add('center-banner-pending');
    observer.observe(target);
  });
  motion.addEventListener('change', () => {
    if (!motion.matches) return;
    observer.disconnect();
    targets.forEach(target => target.classList.remove('center-banner-pending', 'center-banner-shown'));
  });
}
