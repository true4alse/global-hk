// 콘텐츠·사진 경로는 HTML이 원본입니다. 선택·스크롤·블러 전환만 담당합니다.
export function renderFacilities() {
  const section = document.querySelector('#facilities');
  if (!section || section.dataset.initialized) return;
  const floors = [...section.querySelectorAll('[data-floor]')];
  const panels = [...section.querySelectorAll('[data-floor-panel]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function selectPhoto(panel, id, animate = true) {
    const photos = [...panel.querySelectorAll('[data-facilities-photo]')];
    const selected = photos.find(photo => photo.dataset.facilitiesPhoto === id);
    if (!selected) return;
    panel.dataset.selectedPhoto = id;
    photos.forEach(photo => { photo.hidden = photo !== selected; });
    panel.querySelectorAll('[data-photo]').forEach(link => {
      if (link.dataset.photo === id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    const image = selected.querySelector('img');
    image.getAnimations?.().forEach(animation => animation.cancel());
    if (animate && !reduced.matches) image.animate?.([
      { filter: 'blur(16px)', opacity: .25, transform: 'scale(1.025)' },
      { filter: 'blur(0)', opacity: 1, transform: 'scale(1)' },
    ], { duration: 700, easing: 'cubic-bezier(.22,1,.36,1)' });
  }
  function scrollState(panel) {
    const strip = panel.querySelector('.facilities-thumbnails');
    const prev = panel.querySelector('[data-scroll="prev"]');
    const next = panel.querySelector('[data-scroll="next"]');
    const overflow = strip.scrollWidth > strip.clientWidth + 2;
    prev.hidden = next.hidden = !overflow;
    prev.disabled = strip.scrollLeft <= 2;
    next.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
  }
  function selectFloor(id) {
    const selected = panels.find(panel => panel.dataset.floorPanel === id);
    if (!selected) return;
    panels.forEach(panel => { panel.hidden = panel !== selected; });
    floors.forEach(link => {
      if (link.dataset.floor === id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    selectPhoto(selected, selected.dataset.selectedPhoto || selected.querySelector('[data-photo]').dataset.photo);
    scrollState(selected);
  }
  floors.forEach((link, index) => {
    link.addEventListener('click', event => { event.preventDefault(); selectFloor(link.dataset.floor); });
    link.addEventListener('keydown', event => {
      const directions = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      let next;
      if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = floors.length - 1;
      else if (event.key in directions) next = (index + directions[event.key] + floors.length) % floors.length;
      else return;
      event.preventDefault(); floors[next].focus(); selectFloor(floors[next].dataset.floor);
    });
  });
  panels.forEach(panel => {
    const links = [...panel.querySelectorAll('[data-photo]')];
    const strip = panel.querySelector('.facilities-thumbnails');
    links.forEach((link, index) => {
      link.addEventListener('click', event => { event.preventDefault(); selectPhoto(panel, link.dataset.photo); });
      link.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = Math.min(index + 1, links.length - 1);
        else if (event.key === 'ArrowLeft') next = Math.max(index - 1, 0);
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = links.length - 1;
        else return;
        event.preventDefault(); links[next].focus(); selectPhoto(panel, links[next].dataset.photo);
      });
    });
    panel.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => {
      strip.scrollBy({ left: strip.clientWidth * .75 * (button.dataset.scroll === 'prev' ? -1 : 1), behavior: reduced.matches ? 'instant' : 'smooth' });
    }));
    strip.addEventListener('scroll', () => scrollState(panel), { passive: true });
    selectPhoto(panel, panel.querySelectorAll('[data-facilities-photo]')[0].dataset.facilitiesPhoto, false);
  });
  section.classList.add('is-ready');
  section.dataset.initialized = 'true';
  const hashTarget = document.getElementById(location.hash.slice(1));
  const initial = hashTarget?.closest('[data-floor-panel]');
  selectFloor(initial?.dataset.floorPanel || '6');
  if (hashTarget?.dataset.facilitiesPhoto && initial) selectPhoto(initial, hashTarget.dataset.facilitiesPhoto, false);
  if ('ResizeObserver' in window) new ResizeObserver(() => panels.filter(panel => !panel.hidden).forEach(scrollState)).observe(section);
  else window.addEventListener('resize', () => panels.filter(panel => !panel.hidden).forEach(scrollState));
}
