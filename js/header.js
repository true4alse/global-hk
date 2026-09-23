import { renderIncision } from './incision.js';
import { renderTreatment } from './treatment.js';
import { renderMis } from './mis.js';
import { renderGlobal } from './global.js';
import { renderAbout } from './about.js';
import { renderHero } from './hero.js';
import { languages, initializeLocale, localeUrl } from './i18n.js';

const selected = initializeLocale();
renderHero(selected.content.hero);
renderAbout(selected.content.about);
renderGlobal(selected.content.global);
renderMis(selected.content.mis);
renderTreatment(selected.content.treatment);
renderIncision(selected.content.incision);
const toggle = document.querySelector('.language-toggle');
const panel = document.querySelector('.language-options');
toggle.disabled = false;
toggle.setAttribute('aria-label', selected.content.languageLabel);
document.querySelector('.hospital-logo').setAttribute('aria-label', selected.content.homeLabel);
document.querySelectorAll('[data-nav]').forEach(button => {
  button.textContent = selected.content.nav[button.dataset.nav];
});

function setOpen(open, restoreFocus = false) {
  panel.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  if (restoreFocus) toggle.focus();
}

document.querySelectorAll('[data-language]').forEach(button => {
  const language = languages.find(item => item.code === button.dataset.language);
  button.disabled = !language?.content;
  if (language?.code === selected.code) button.setAttribute('aria-current','true');
  else button.removeAttribute('aria-current');
  button.addEventListener('click', () => {
    if (!language?.content) return;
    if (language.code === selected.code) return setOpen(false,true);
    location.assign(localeUrl(language.code));
  });
});

toggle.addEventListener('click', () => setOpen(panel.hidden));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !panel.hidden) setOpen(false, true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.language-picker')) setOpen(false);
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.language-picker')) setOpen(false);
});



// 고정 2단 헤더: 아래로 스크롤하면 1층만 숨기고, 위로 스크롤하거나 맨 위에 도착하면 다시 표시합니다.
// 실제 스크롤 방향을 사용하므로 마우스 휠·터치·키보드 모두 같은 방식으로 동작합니다.
const header = document.querySelector('.site-header');
const headerTop = header.querySelector('.header-top');
let previousScroll = Math.max(0, window.scrollY);
let directionDistance = 0;
let framePending = false;
function showHeaderTop(show) {
  header.classList.toggle('is-compact', !show);
  headerTop.inert = !show;
}
function measureHeader() {
  document.documentElement.style.setProperty('--header-top-height', `${headerTop.offsetHeight}px`);
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
}
measureHeader();
new ResizeObserver(measureHeader).observe(header);
window.addEventListener('scroll', () => {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(() => {
    framePending = false;
    const current = Math.max(0, window.scrollY);
    const delta = current - previousScroll;
    previousScroll = current;
    if (current <= 12) {
      showHeaderTop(true);
      directionDistance = 0;
      return;
    }
    if (!delta) return;
    directionDistance = Math.sign(delta) === Math.sign(directionDistance) ? directionDistance + delta : delta;
    // 미세한 스크롤에는 반응하지 않아 헤더가 떨리지 않도록 합니다.
    if (Math.abs(directionDistance) < 8) return;
    if (directionDistance < 0) showHeaderTop(true);
    else if (current > headerTop.offsetHeight && panel.hidden && !headerTop.contains(document.activeElement)) showHeaderTop(false);
    directionDistance = 0;
  });
}, { passive: true });
// 키보드로 헤더에 접근할 때 로고와 언어 메뉴도 함께 사용할 수 있게 합니다.
header.addEventListener('focusin', () => showHeaderTop(true));
