// 모든 센터에서 재사용: HTML의 native details를 보완하며 콘텐츠를 생성하지 않습니다.
export function renderCenterTreatments() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.center-treatment-disclosure').forEach(details => {
    const summary = details.querySelector(':scope > summary');
    const panel = details.querySelector(':scope > .center-treatment-panel');
    const content = panel?.querySelector('.center-treatment-content');
    if (!summary || !panel || !content) return;
    let animation;
    let expanded = details.open;
    let animationEnd = 0;
    // 강조 span은 부모 문장과 함께 움직입니다. 워터마크·연결 화살표는 배경으로 유지합니다.
    const selector = 'h4, h5, h6, p, figcaption, img, .center-treatment-tag, .center-treatment-video a > span, [data-center-treatment-reveal]';
    const targets = [...content.querySelectorAll(selector)].filter(element =>
      !element.matches('.center-treatment-watermark') &&
      !element.closest('[aria-hidden="true"], [data-center-treatment-reveal="none"]') &&
      !element.parentElement.closest('[data-center-treatment-reveal]')
    );
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      if (!expanded || motion.matches) return;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('center-treatment-reveal-shown');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08 }) : null;

    function prepareReveal() {
      observer?.disconnect();
      targets.forEach(element => {
        element.classList.remove('center-treatment-reveal-shown');
        element.classList.toggle('center-treatment-reveal-pending', !motion.matches && !!observer);
      });
    }
    function observeContent() {
      if (!expanded || motion.matches) return;
      targets.forEach(element => observer?.observe(element));
    }
    function finish() {
      animation?.cancel();
      animation = undefined;
      details.open = expanded;
      if (!expanded) {
        prepareReveal();
        // 상세를 접어도 버튼과 키보드 포커스가 화면 밖으로 사라지지 않게 합니다.
        if (summary.getBoundingClientRect().top < 0) {
          summary.scrollIntoView({ block: 'center', behavior: 'instant' });
        }
      }
    }
    function animateHeight(startHeight, duration) {
      animation?.cancel();
      details.open = true;
      animationEnd = performance.now() + duration;
      const current = panel.animate(
        [{ height: `${startHeight}px` }, { height: `${expanded ? content.getBoundingClientRect().height : 0}px` }],
        { duration, easing: 'cubic-bezier(.25, .8, .25, 1)', fill: 'both' }
      );
      animation = current;
      current.onfinish = () => { if (animation === current) finish(); };
    }

    prepareReveal();
    observeContent();

    summary.addEventListener('click', event => {
      // 애니메이션 API가 없는 환경은 기본 details 키보드/클릭 동작을 사용합니다.
      if (!panel.animate) return;
      event.preventDefault();
      const startHeight = details.open ? panel.getBoundingClientRect().height : 0;
      expanded = !expanded;
      observer?.disconnect();
      if (motion.matches) {
        finish();
        return;
      }
      if (expanded && !details.open) prepareReveal();
      animateHeight(startHeight, expanded ? 720 : 560);
      observeContent();
    });
    details.addEventListener('toggle', () => {
      if (animation) return;
      expanded = details.open;
      if (!expanded) prepareReveal();
      else observeContent();
    });
    // 펼치는 중 반응형 배치/이미지 높이가 바뀌면 현재 높이에서 새 높이로 이어갑니다.
    if ('ResizeObserver' in window) new ResizeObserver(() => {
      if (animation && expanded) {
        animateHeight(panel.getBoundingClientRect().height, Math.max(120, animationEnd - performance.now()));
      }
    }).observe(content);
    motion.addEventListener('change', () => {
      finish();
      prepareReveal();
      observeContent();
    });
  });
}
