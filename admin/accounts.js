// The server renders this dialog only after a verified account insertion.
const successDialog = document.querySelector('.account-success');
if (successDialog) {
  successDialog.addEventListener('close', () => {
    document.querySelector('.account-create-open')?.focus();
  });
  successDialog.showModal();
}

// Format only the visible value; the server normalizes it before storage.
function formatNotificationPhone(value) {
  const digits = value.replace(/[^0-9]/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}


document.querySelectorAll('.notification-open').forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialog);
  const form = dialog.querySelector('form');
  const phone = form.querySelector('[name="notification_phone"]');
  const save = form.querySelector('.notification-save');
  const sync = () => { save.disabled = !/^010-[0-9]{4}-[0-9]{4}$/.test(phone.value); };
  button.addEventListener('click', () => {
    form.reset(); sync(); dialog.showModal(); phone.focus();
  });
  dialog.querySelector('.notification-cancel').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => button.focus());
  phone.addEventListener('input', () => {
    const cursor = phone.selectionStart ?? phone.value.length;
    const before = phone.value.slice(0, cursor).replace(/[^0-9]/g, '').length;
    phone.value = formatNotificationPhone(phone.value);
    let position = 0, count = 0;
    while (position < phone.value.length && count < before) {
      if (/[0-9]/.test(phone.value[position])) count++;
      position++;
    }
    phone.setSelectionRange(position, position);
    sync();
  });
  form.addEventListener('submit', (event) => {
    sync();
    if (save.disabled) event.preventDefault();
  });
});

const createDialog = document.querySelector('.account-create-dialog');
const createButton = document.querySelector('.account-create-open');
if (createDialog && createButton) {
  createButton.addEventListener('click', () => {
    createDialog.showModal();
    createDialog.querySelector('[name="display_name"]').focus();
  });
  createDialog.querySelector('.account-create-cancel').addEventListener('click', () => createDialog.close());
  createDialog.addEventListener('close', () => {
    createDialog.querySelectorAll('input[type="password"]').forEach((input) => { input.value = ''; });
    createButton.focus();
  });
  if (createDialog.dataset.reopen === 'true') {
    createDialog.showModal();
    createDialog.querySelector('[role="alert"]').focus();
  }
}
