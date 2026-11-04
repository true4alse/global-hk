export function renderCenterMenu() {
  const menu = document.querySelector('.center-menu');
  const header = document.querySelector('.site-header');
  if (!menu || !header) return;
  const headerTop = header.querySelector('.header-top');
  const mobile = matchMedia('(max-width: 760px)');
  const movingHeaders = new Set();
  const links = [...menu.querySelectorAll('a')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;
  function update() {
    scheduled = false;
    // On mobile only the top row moves; the fixed header wrapper stays in place.
    const visibleHeader = mobile.matches && headerTop ? headerTop : header;
    const top = Math.max(0, visibleHeader.getBoundingClientRect().bottom) + 12;
    menu.style.setProperty('--center-menu-top', `${top}px`);
    let current = 0;
    sections.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= Math.max(top + 80, innerHeight * .4)) current = i;
    });
    links.forEach((link, i) => {
      if (i === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (movingHeaders.size) schedule();
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, { passive:true });
  window.addEventListener('resize', schedule);
  header.addEventListener('transitionrun', event => {
    if (event.propertyName !== 'transform' || ![header, headerTop].includes(event.target)) return;
    movingHeaders.add(event.target);
    schedule();
  });
  const finishTransition = event => {
    if (event.propertyName !== 'transform' || ![header, headerTop].includes(event.target)) return;
    movingHeaders.delete(event.target);
    schedule();
  };
  header.addEventListener('transitionend', finishTransition);
  header.addEventListener('transitioncancel', finishTransition);
  mobile.addEventListener('change', schedule);
  new ResizeObserver(schedule).observe(header);
  update();
}

