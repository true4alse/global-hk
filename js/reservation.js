// Static form preview: no patient data is persisted or transmitted before an endpoint is connected.
export function renderReservation() {
  const form = document.querySelector('.reservation-form');
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = 'true';
  form.addEventListener('submit', event => event.preventDefault());
  const button = form.querySelector('.reservation-submit');
  const status = form.querySelector('.reservation-status');
  button.addEventListener('click', () => {
    if (!form.reportValidity()) return;
    status.hidden = false;
  });
}
