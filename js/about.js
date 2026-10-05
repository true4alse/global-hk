const cleanups = new WeakMap();
export function renderAbout() {
  const section = document.querySelector('.about');
  if (!section) return;
  cleanups.get(section)?.();
  const formatter = new Intl.NumberFormat('en-US');
  const counters = [...section.querySelectorAll('.about-stat-value')];
  counters.forEach(element => {
    // 최종 숫자는 HTML에서 읽고, 애니메이션 재초기화에도 유지합니다.
    element.dataset.target ||= element.textContent.replaceAll(',', '').trim();
    const card = element.closest('[data-stat]');
    const label = card.querySelector('.about-stat-label');
    card.setAttribute('aria-label', label.textContent + ' ' + formatter.format(Number(element.dataset.target)));
    element.setAttribute('aria-hidden','true');
  });
  const rows = [...section.querySelectorAll('.about-marquee')];
  const resizers = [];
  rows.forEach(row => {
    const track = row.querySelector('.about-marquee-track');
    const photos = [...track.querySelectorAll('img')];
    // HTML에 있는 이미지만 이동합니다. 생성·복제·src 변경은 하지 않습니다.
    const layout = () => {
      if (photos.length < 2) return;
      const width = Math.max(220, Math.min(innerWidth * .203125,390), row.clientWidth / (photos.length-1) + 1);
      track.style.setProperty('--photo-width', width + 'px');
      track.style.setProperty('--photo-height', width * 2/3 + 'px');
      const height = width * 2/3;
      const widths = photos.map(img => height * (img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1.5));
      const distance = widths.reduce((sum, value) => sum + value, 0);
      track.style.setProperty('--marquee-distance', distance + 'px');
      track.style.setProperty('--marquee-duration', distance/16 + 's');
      let offset = 0;
      photos.forEach((img,i)=>{
        img.style.setProperty('--individual-photo-width', widths[i] + 'px');
        offset += widths[i];
        img.style.animationDelay = -(row.dataset.direction === 'left' ? distance-offset : offset)/16 + 's';
      });
      row.classList.add('marquee-ready');
    };
    layout();
    photos.forEach(img => { if (!img.complete) img.addEventListener('load', layout, { once:true }); });
    const resize = new ResizeObserver(layout); resize.observe(row); resizers.push(resize);
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const frames = new Set();
  const counterFrames = new Map();
  let observer;
  const reveals = [...section.querySelectorAll('[data-about-reveal]')];
  const toggle = section.querySelector('.about-motion-toggle');
  let paused = false;
  if (toggle) { toggle.hidden = reduced.matches; toggle.textContent = toggle.dataset.pause; }
  function onToggle() {
    paused = !paused;
    rows.forEach(row => row.classList.toggle('is-paused', paused));
    toggle.textContent = paused ? toggle.dataset.play : toggle.dataset.pause;
  }
  toggle?.addEventListener('click',onToggle);
  function count(element) {
    stopCount(element);
    const target = Number(element.dataset.target);
    let start;
    function tick(now) {
      frames.delete(id);
      start ??= now;
      const progress = Math.min((now-start)/2400,1);
      element.textContent = formatter.format(Math.round(target*(1-Math.pow(1-progress,3))));
      if(progress < 1) { id=requestAnimationFrame(tick); frames.add(id); counterFrames.set(element,id); }
      else counterFrames.delete(element);
    }
    element.textContent = '0';
    let id=requestAnimationFrame(tick); frames.add(id); counterFrames.set(element,id);
  }
  function stopCount(element) {
    const id = counterFrames.get(element);
    if (id !== undefined) { cancelAnimationFrame(id); frames.delete(id); counterFrames.delete(element); }
  }
  function showFinal() {
    frames.forEach(cancelAnimationFrame); frames.clear(); counterFrames.clear();
    counters.forEach(element => element.textContent = formatter.format(Number(element.dataset.target)));
    reveals.forEach(element => { element.classList.remove('about-pending'); element.classList.add('about-shown'); });
  }
  if (!reduced.matches && 'IntersectionObserver' in window) {
    reveals.forEach(element => element.classList.add('about-pending'));
    counters.forEach(element => element.textContent = '0');
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const element = entry.target;
      if (element.classList.contains('about-marquee')) {
        element.classList.toggle('is-in-view',entry.isIntersecting); return;
      }
      if (element.classList.contains('about-stat-value')) {
        if (entry.isIntersecting) count(element);
        else { stopCount(element); element.textContent = '0'; }
        return;
      }
      if (!entry.isIntersecting) return;
      observer.unobserve(element);
      element.classList.add('about-shown');
    }),{threshold:.15});
    [...reveals,...counters,...rows].forEach(element => observer.observe(element));
  } else showFinal();
  function onReducedChange() {
    if (toggle) toggle.hidden = reduced.matches;
    if(reduced.matches) { showFinal(); observer?.disconnect(); rows.forEach(row => row.classList.remove('is-in-view')); }
    // 동작 줄이기를 해제한 경우에도 숫자·문구는 다시 숨기지 않습니다.
    else rows.forEach(row => row.classList.add('is-in-view'));
  }
  reduced.addEventListener('change',onReducedChange);
  cleanups.set(section,()=>{
    observer?.disconnect(); frames.forEach(cancelAnimationFrame); resizers.forEach(r=>r.disconnect());
    toggle?.removeEventListener('click',onToggle); reduced.removeEventListener('change',onReducedChange);
  });
}
