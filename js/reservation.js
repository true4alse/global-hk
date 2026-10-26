export function renderReservation() {
  const form = document.querySelector('.reservation-form');
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = 'true';
  const button = form.querySelector('.reservation-submit');
  const status = form.querySelector('.reservation-status');
  const endpoint = new URL('./api/reservations.php', document.baseURI);
  let pending = false;
  let attempt;
  function show(state) {
    status.hidden = false;
    status.querySelectorAll('[data-reservation-state]').forEach(item => {
      item.hidden = item.dataset.reservationState !== state;
    });
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    values.screenLanguage = document.documentElement.lang;
    const fingerprint = JSON.stringify(values);
    if (!attempt || attempt.fingerprint !== fingerprint) {
      attempt = { fingerprint, requestId: crypto.randomUUID() };
    }
    values.requestId = attempt.requestId;
    pending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    show('sending');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const session = await fetch(endpoint, { credentials: 'same-origin', cache: 'no-store', signal: controller.signal });
      if (!session.ok) throw new Error('session');
      const { csrf } = await session.json();
      const response = await fetch(endpoint, {
        method: 'POST', credentials: 'same-origin', signal: controller.signal,
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        show(response.status === 422 ? 'invalid' : response.status === 429 ? 'rate' : 'error');
        return;
      }
      const result = await response.json();
      if (result.ok !== true) throw new Error('response');
      form.reset();
      attempt = undefined;
      show('success');
    } catch {
      show('error');
    } finally {
      clearTimeout(timeout);
      pending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
}
