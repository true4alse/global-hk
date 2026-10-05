export function renderCenterMenu() {
  const menu = document.querySelector('.center-menu');
  const header = document.querySelector('.site-header');
  if (!menu || !header) return;
  const links = [...menu.querySelectorAll('a')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;
  function update() {
    scheduled = false;
    const top = Math.max(0, header.getBoundingClientRect().bottom) + 12;
    menu.style.setProperty('--center-menu-top', `${top}px`);
    let current = 0;
    sections.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= Math.max(top + 80, innerHeight * .4)) current = i;
    });
    links.forEach((link, i) => {
      if (i === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, { passive:true });
  window.addEventListener('resize', schedule);
  header.addEventListener('transitionend', schedule);
  new ResizeObserver(schedule).observe(header);
  update();
}

