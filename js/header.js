import { renderCenterMenu } from './center-menu.js';
import { renderContact } from './contact.js';
import { renderCustomerCenter } from './customer-center.js';
import { renderReservation } from './reservation.js?v=20261007';
import { renderService360 } from './service-360.js';
import { renderFacilities } from './facilities.js';
import { renderDoctors } from './doctors.js';
import { renderApkass } from './apkass.js';
import { renderCenterBanners } from './center-banner.js';
import { renderCenterTreatments } from './center-treatment.js';
import { renderKneeCenter } from './knee-center.js';
import { renderSpecialty } from './specialty.js';
import { renderResearch } from './research.js';
import { renderCadaver } from './cadaver.js';
import { renderIncision } from './incision.js';
import { renderTreatment } from './treatment.js';
import { renderMis } from './mis.js';
import { renderGlobal } from './global.js';
import { renderAbout } from './about.js';
import { renderHero } from './hero.js';
import { languages, initializeLocale, localeUrl } from './i18n.js';
import { applyTranslations } from './translations.js';

let selected = initializeLocale();
applyTranslations(selected.content);
renderHero(selected.content.hero);
renderAbout();
renderGlobal();
renderMis();
renderTreatment();
renderIncision();
renderCadaver();
renderResearch();
renderSpecialty();
renderKneeCenter();
renderCenterBanners();
renderCenterTreatments();
renderDoctors();
renderApkass();
renderFacilities();
renderService360();
renderReservation();
renderCustomerCenter();
renderContact();
renderCenterMenu();
const toggle = document.querySelector('.language-toggle');
const panel = document.querySelector('.language-options');
const currentLanguageName = document.querySelector('.current-language-name');
function updateLanguageName() {
  currentLanguageName.textContent = selected.label;
  currentLanguageName.lang = selected.code;
  currentLanguageName.dir = selected.dir;
}
updateLanguageName();
toggle.disabled = false;
function setOpen(open, restoreFocus = false) {
  panel.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  if (restoreFocus) toggle.focus();
}

// 언어 선택은 현재 문서에서 적용합니다. 별도 언어 경로의 페이지 로딩에 의존하지 않습니다.
function changeLanguage(code, pushHistory = true) {
  const language = languages.find(item => item.code === code && item.content);
  if (!language) return;
  if (pushHistory) history.pushState(null, '', localeUrl(code));
  selected = initializeLocale(code);
  applyTranslations(selected.content);
  updateLanguageName();
  renderHero(selected.content.hero);
  renderAbout();
  document.querySelectorAll('[data-language]').forEach(button => {
    if (button.dataset.language === selected.code) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  setOpen(false, true);
  window.dispatchEvent(new Event('resize'));
}

window.addEventListener('popstate', () => {
  const restored = initializeLocale();
  if (restored.code !== selected.code) changeLanguage(restored.code, false);
});

document.querySelectorAll('[data-language]').forEach(button => {
  const language = languages.find(item => item.code === button.dataset.language);
  button.disabled = !language?.content;
  if (language?.code === selected.code) button.setAttribute('aria-current','true');
  else button.removeAttribute('aria-current');
  button.addEventListener('click', () => {
    if (!language?.content) return;
    if (language.code === selected.code) return setOpen(false,true);
    changeLanguage(language.code);
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
    else if (current > headerTop.offsetHeight && panel.hidden) {
      // 언어 선택 후 마우스 포커스가 버튼에 남아도 스크롤 숨김을 막지 않습니다.
      // 키보드로 조작 중인 경우에만 포커스가 화면 밖으로 사라지지 않도록 유지합니다.
      const keyboardFocus = headerTop.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
      if (!keyboardFocus) showHeaderTop(false);
    }
    directionDistance = 0;
  });
}, { passive: true });
// 키보드로 헤더에 접근할 때 로고와 언어 메뉴도 함께 사용할 수 있게 합니다.
header.addEventListener('focusin', () => showHeaderTop(true));

// A base URL must not turn same-page section links into a navigation to the site root.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const hash = link.getAttribute('href');
  const target = document.getElementById(hash.slice(1));
  if (!target) return;
  event.preventDefault();
  history.pushState(null, '', location.pathname + location.search + hash);
  if (link.closest('.center-menu')) {
    // scrollIntoView adds both the document's padding and the banner's margin.
    // Align the banner directly below the header in its destination state instead.
    const targetTop = window.scrollY + target.getBoundingClientRect().top;
    const scrollingUp = targetTop - header.offsetHeight < window.scrollY;
    showHeaderTop(scrollingUp);
    const visibleHeaderHeight = header.offsetHeight - (scrollingUp ? 0 : headerTop.offsetHeight);
    window.scrollTo({
      top: Math.max(0, targetTop - visibleHeaderHeight),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
    return;
  }
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
});
