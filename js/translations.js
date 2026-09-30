// 문구만 교체합니다. 이미지 경로·숫자·콘텐츠 구조는 HTML에서 관리합니다.
export const sectionAttributes = {
  'data-nav': 'nav',
  'data-hero': 'hero',
  'data-about': 'about',
  'data-global': 'global',
  'data-mis': 'mis',
  'data-treatment': 'treatment',
  'data-incision': 'incision',
  'data-cadaver': 'cadaver',
  'data-research': 'research',
  'data-knee': 'knee',
  'data-center-treatment': 'centerTreatments',
};

export const translatedAttributes = {
  'data-i18n-alt': 'alt',
  'data-i18n-label': 'aria-label',
  'data-i18n-role-description': 'aria-roledescription',
  'data-i18n-pause': 'data-pause',
  'data-i18n-play': 'data-play',
};

function lookup(content, key) {
  return key.split('.').reduce((value, part) => value?.[part], content);
}

export function applyTranslations(content, root = document) {
  function translateText(element, key) {
    const value = lookup(content, key);
    // 누락된 키는 HTML 원문을 유지합니다. 강조·아이콘을 포함한 부모는 덮어쓰지 않습니다.
    if (typeof value !== 'string' || [...element.children].some(child => child.tagName !== 'BR')) return;
    element.textContent = value;
    element.toggleAttribute('data-i18n-lines', value.includes('\n'));
  }
  for (const [attribute, group] of Object.entries(sectionAttributes)) {
    root.querySelectorAll(`[${attribute}]`).forEach(element => {
      translateText(element, `${group}.${element.getAttribute(attribute)}`);
    });
  }
  root.querySelectorAll('[data-i18n]').forEach(element => translateText(element, element.getAttribute('data-i18n')));
  for (const [binding, attribute] of Object.entries(translatedAttributes)) {
    root.querySelectorAll(`[${binding}]`).forEach(element => {
      const value = lookup(content, element.getAttribute(binding));
      if (typeof value === 'string') element.setAttribute(attribute, value);
    });
  }
}
