// Only state and interaction; all links, icons and translations are authored in HTML.
export function renderQuickMenu() {
  const menu = document.querySelector('.contact-quick');
  if (!menu) return;
  const toggle = menu.querySelector('.contact-quick-toggle');
  const panel = menu.querySelector('.contact-quick-panel');
  const mobile = matchMedia('(max-width:1100px)');
  const specialtyMenu = document.querySelector('.center-menu');
  function matchRailSize() {
    if (specialtyMenu && !mobile.matches) {
      menu.style.setProperty('--contact-rail-height', `${Math.min(specialtyMenu.getBoundingClientRect().height, innerHeight - 40)}px`);
    }
  }
  if (specialtyMenu) new ResizeObserver(matchRailSize).observe(specialtyMenu);
  window.addEventListener('resize', matchRailSize);
  matchRailSize();
  function setOpen(open, restoreFocus = false) {
    menu.classList.toggle('is-open', mobile.matches && open);
    toggle.setAttribute('aria-expanded', String(mobile.matches && open));
    toggle.setAttribute('aria-labelledby', open ? 'contact-quick-close-label' : 'contact-quick-open-label');
    panel.inert = mobile.matches && !open;
    if (mobile.matches && !open) panel.setAttribute('aria-hidden','true');
    else panel.removeAttribute('aria-hidden');
    if (restoreFocus) toggle.focus({preventScroll:true});
  }
  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  // Capture nested scrolling too (for example, the hotel carousel).
  document.addEventListener('scroll', () => {
    if (mobile.matches && menu.classList.contains('is-open')) setOpen(false);
  }, { capture: true, passive: true });
  document.addEventListener('pointerdown', event => { if (!menu.contains(event.target)) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false, true); event.preventDefault(); }
  });
  menu.addEventListener('focusout', event => { if (!menu.contains(event.relatedTarget)) setOpen(false); });
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  const copyEmail = panel.querySelector('[data-quick-copy-email]');
  const copySuccess = document.querySelector('[data-quick-copy-success]');
  const copyError = document.querySelector('[data-quick-copy-error]');
  const copyNotice = document.querySelector('.quick-copy-notice');
  let copyTimer;
  function positionCopyNotice(anchor) {
    const rect = copyNotice.getBoundingClientRect();
    const gap = 10, edge = 12;
    const fitsLeft = anchor.left - gap - rect.width >= edge;
    const left = fitsLeft ? anchor.left - gap - rect.width : anchor.left + anchor.width / 2 - rect.width / 2;
    const top = fitsLeft ? anchor.top + anchor.height / 2 - rect.height / 2 : anchor.top - gap - rect.height;
    copyNotice.style.left = `${Math.max(edge, Math.min(left, innerWidth - rect.width - edge))}px`;
    copyNotice.style.top = `${Math.max(edge, Math.min(top, innerHeight - rect.height - edge))}px`;
  }
  function hideCopyNotice() {
    clearTimeout(copyTimer);
    copySuccess.hidden = copyError.hidden = true;
  }
  document.addEventListener('scroll', hideCopyNotice, { capture:true, passive:true });
  window.addEventListener('resize', hideCopyNotice);
  copyEmail?.addEventListener('click', async () => {
    const anchor = copyEmail.getBoundingClientRect();
    clearTimeout(copyTimer);
    copySuccess.hidden = copyError.hidden = true;
    copyEmail.disabled = true;
    try {
      await navigator.clipboard.writeText(copyEmail.dataset.quickCopyEmail);
      copySuccess.hidden = false;
    } catch {
      copyError.hidden = false;
    } finally {
      copyEmail.disabled = false;
      positionCopyNotice(anchor);
      copyTimer = setTimeout(() => { copySuccess.hidden = copyError.hidden = true; }, copyError.hidden ? 3500 : 8000);
    }
  });
  mobile.addEventListener('change', () => setOpen(false));
  setOpen(false);
}
