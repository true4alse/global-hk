export function renderCustomerCenter() {
  const section = document.querySelector('#customer-center');
  if (!section || section.dataset.initialized) return;
  section.dataset.initialized = 'true';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...section.querySelectorAll('[data-customer-reveal]')];
  let observer;
  function reveal() {
    observer?.disconnect();
    targets.forEach(item => item.classList.remove('customer-reveal-pending'));
    if (motion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('customer-reveal-pending');
      entry.target.dataset.revealed = 'true';
      observer.unobserve(entry.target);
    }), { threshold: .1 });
    targets.filter(item => !item.dataset.revealed).forEach(item => {
      item.classList.add('customer-reveal-pending');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', reveal);
  reveal();
  const success = section.querySelector('.customer-copy-status');
  const failure = section.querySelector('.customer-copy-error');
  let timer;
  section.querySelectorAll('[data-copy-target]').forEach(button => {
    button.addEventListener('click', async () => {
      success.hidden = failure.hidden = true;
      clearTimeout(timer);
      const value = document.getElementById(button.dataset.copyTarget)?.textContent.trim();
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        success.hidden = false;
      } catch { failure.hidden = false; }
      timer = setTimeout(() => { success.hidden = failure.hidden = true; }, 3500);
    });
  });
}
