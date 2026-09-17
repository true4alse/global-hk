import { renderGlobal } from './global.js';
import { renderAbout } from './about.js';
import { renderHero } from './hero.js';
import { languages, initializeLocale, localeUrl } from './i18n.js';

const selected = initializeLocale();
renderHero(selected.content.hero);
renderAbout(selected.content.about);
renderGlobal(selected.content.global);
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


