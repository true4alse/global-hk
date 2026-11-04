export function renderReservation() {
  const form = document.querySelector('.reservation-form');
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = 'true';
  const button = form.querySelector('.reservation-submit');
  const status = form.querySelector('.reservation-status');
  const successDialog = document.querySelector('.reservation-success-dialog');
  let invalidField;
  form.noValidate = true;
  successDialog?.addEventListener('close', () => {
    (invalidField || button).focus({ preventScroll: !invalidField });
  });
  function setDateBounds(today) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(today || '')) return;
    form.elements.birthday.min = '1900-01-01';
    form.elements.birthday.max = today;
    form.elements.appointmentDate.min = today;
  }
  function refreshDateBounds() {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
    const part = type => parts.find(p => p.type === type).value;
    setDateBounds(`${part('year')}-${part('month')}-${part('day')}`);
  }
  refreshDateBounds();
  form.addEventListener('input', event => event.target.removeAttribute('aria-invalid'));
  const endpoint = new URL('./api/reservations.php', document.baseURI);
  let pending = false;
  let attempt;
  function show(state, field = null) {
    status.hidden = state !== 'sending';
    status.querySelectorAll('[data-reservation-state]').forEach(item => {
      item.hidden = item.dataset.reservationState !== state;
    });
    if (state !== 'sending') {
      invalidField = field;
      if (field) field.setAttribute('aria-invalid', 'true');
      successDialog.dataset.result = state;
      const active = successDialog.querySelector(`[data-reservation-result="${state}"]`);
      successDialog.querySelectorAll('[data-reservation-result]').forEach(item => { item.hidden = item !== active; });
      successDialog.setAttribute('aria-labelledby', active.id);
      successDialog.querySelector('.reservation-success-icon').textContent = state === 'success' ? '✓' : '!';
      const detail = successDialog.querySelector('.reservation-result-detail');
      const label = field?.labels?.[0]?.querySelector('[data-i18n]')?.textContent.trim();
      detail.textContent = [label, field?.validationMessage].filter(Boolean).join(' — ');
      detail.hidden = !detail.textContent;
      if (detail.hidden) successDialog.removeAttribute('aria-describedby');
      else successDialog.setAttribute('aria-describedby', detail.id);
      if (successDialog && typeof successDialog.showModal === 'function') {
        if (!successDialog.open) successDialog.showModal();
      } else {
        window.alert([active.textContent.trim(), detail.textContent].filter(Boolean).join('\n'));
      }
    }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (pending) return;
    refreshDateBounds();
    if (!form.checkValidity()) { show('invalid', form.querySelector(':invalid:not(fieldset)')); return; }
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
      const { csrf, today } = await session.json();
      setDateBounds(today);
      if (!form.checkValidity()) { show('invalid', form.querySelector(':invalid:not(fieldset)')); return; }
      const response = await fetch(endpoint, {
        method: 'POST', credentials: 'same-origin', signal: controller.signal,
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const failure = await response.json().catch(() => ({}));
        setDateBounds(failure.today);
        const field = typeof failure.field === 'string' ? Array.from(form.elements).find(item => item.name === failure.field) : null;
        show(response.status === 422 ? 'invalid' : response.status === 429 ? 'rate' : 'error', field);
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
