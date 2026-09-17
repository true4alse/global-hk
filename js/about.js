const cleanups = new WeakMap();
export function renderAbout(content) {
  const section = document.querySelector('.about');
  if (!section || !content) return;
  cleanups.get(section)?.();
  const formatter = new Intl.NumberFormat(document.documentElement.lang || 'ko');
  section.querySelector('[data-about="kicker"]').textContent = content.kicker;
  section.querySelector('.about-title').textContent = content.title;
  section.querySelectorAll('.about-description p').forEach((p,i) => p.textContent = content.description[i]);
  const counters = [...section.querySelectorAll('.about-stat-value')];
  counters.forEach(element => {
    // 최종 숫자는 HTML에서 읽고, 애니메이션 재초기화에도 유지합니다.
    element.dataset.target ||= element.textContent.replaceAll(',', '').trim();
    const card = element.closest('[data-stat]');
    const label = card.querySelector('.about-stat-label');
    if (content.statLabels?.[card.dataset.stat]) label.textContent = content.statLabels[card.dataset.stat];
    card.setAttribute('aria-label', label.textContent + ' ' + formatter.format(Number(element.dataset.target)));
    element.setAttribute('aria-hidden','true');
  });
  if (document.documentElement.lang !== 'ko') section.querySelectorAll('[data-photo]').forEach(img => {
    const alt = content.photoAlt?.[img.dataset.photo];
    if (alt) img.alt = alt;
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
      track.style.setProperty('--marquee-distance', width * photos.length + 'px');
      track.style.setProperty('--marquee-duration', width * photos.length/16 + 's');
      photos.forEach((img,i)=>{
        const steps = row.dataset.direction === 'left' ? photos.length-1-i : i+1;
        img.style.animationDelay = -steps*width/16 + 's';
      });
      row.classList.add('marquee-ready');
    };
    layout();
    const resize = new ResizeObserver(layout); resize.observe(row); resizers.push(resize);
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const frames = new Set();
  let observer;
  const reveals = [...section.querySelectorAll('[data-about-reveal]')];
  const toggle = section.querySelector('.about-motion-toggle');
  let paused = false;
  toggle.hidden = reduced.matches;
  toggle.textContent = content.pause;
  function onToggle() {
    paused = !paused;
    rows.forEach(row => row.classList.toggle('is-paused', paused));
    toggle.textContent = paused ? content.resume : content.pause;
  }
  toggle.addEventListener('click',onToggle);
  function count(element) {
    const target = Number(element.dataset.target);
    let start;
    function tick(now) {
      frames.delete(id);
      start ??= now;
      const progress = Math.min((now-start)/2400,1);
      element.textContent = formatter.format(Math.round(target*(1-Math.pow(1-progress,3))));
      if(progress < 1) { id=requestAnimationFrame(tick); frames.add(id); }
    }
    let id=requestAnimationFrame(tick); frames.add(id);
  }
  function showFinal() {
    frames.forEach(cancelAnimationFrame); frames.clear();
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
      if (!entry.isIntersecting) return;
      observer.unobserve(element);
      if(element.classList.contains('about-stat-value')) count(element);
      else element.classList.add('about-shown');
    }),{threshold:.15});
    [...reveals,...counters,...rows].forEach(element => observer.observe(element));
  } else showFinal();
  function onReducedChange() {
    toggle.hidden = reduced.matches;
    if(reduced.matches) { showFinal(); observer?.disconnect(); rows.forEach(row => row.classList.remove('is-in-view')); }
    // 동작 줄이기를 해제한 경우에도 숫자·문구는 다시 숨기지 않습니다.
    else rows.forEach(row => row.classList.add('is-in-view'));
  }
  reduced.addEventListener('change',onReducedChange);
  cleanups.set(section,()=>{
    observer?.disconnect(); frames.forEach(cancelAnimationFrame); resizers.forEach(r=>r.disconnect());
    toggle.removeEventListener('click',onToggle); reduced.removeEventListener('change',onReducedChange);
  });
}
