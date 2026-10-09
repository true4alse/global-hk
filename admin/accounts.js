// The server renders this dialog only after a verified account insertion.
const successDialog = document.querySelector('.account-success');
if (successDialog) {
  successDialog.addEventListener('close', () => {
    document.querySelector('input[name="display_name"]')?.focus();
  });
  successDialog.showModal();
}
