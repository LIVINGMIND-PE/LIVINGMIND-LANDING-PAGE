/**
 * LIVING MIND — tutor.js
 * Tutor page specific scripts: contact form validation & submission
 */

document.addEventListener('DOMContentLoaded', () => {

  const form        = document.getElementById('contact-form');
  const formWrap    = document.getElementById('form-wrap');
  const successView = document.getElementById('form-success');

  if (!form) return;

  /* ── Live validation helpers ────────────────── */
  const showError = (field, msg) => {
    clearError(field);
    field.classList.add('input-error');
    const err = document.createElement('span');
    err.className = 'field-error';
    err.textContent = msg;
    err.style.cssText = 'color:#e53e3e;font-size:.75rem;margin-top:.25rem;display:block';
    field.parentNode.appendChild(err);
  };

  const clearError = (field) => {
    field.classList.remove('input-error');
    const existing = field.parentNode.querySelector('.field-error');
    if (existing) existing.remove();
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ── Input error styles ─────────────────────── */
  const style = document.createElement('style');
  style.textContent = `.input-error{border-color:#e53e3e!important;box-shadow:0 0 0 3px rgba(229,62,62,.12)!important}`;
  document.head.appendChild(style);

  /* ── Clear error on input ───────────────────── */
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => clearError(field));
  });

  /* ── Form submission ────────────────────────── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('name');
    const email   = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let valid = true;

    if (!name.value.trim()) {
      showError(name, 'Por favor ingresa tu nombre.');
      valid = false;
    }

    if (!email.value.trim() || !validateEmail(email.value.trim())) {
      showError(email, 'Ingresa un correo electrónico válido.');
      valid = false;
    }

    if (!subject.value) {
      showError(subject, 'Selecciona un tema.');
      valid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      showError(message, 'El mensaje debe tener al menos 10 caracteres.');
      valid = false;
    }

    if (!valid) return;

    /* Simulate async submission */
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Enviando…';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Show success state
      formWrap.style.display = 'none';
      if (successView) successView.style.display = 'block';
    }, 1200);
  });

  /* ── Reset form button ──────────────────────── */
  const resetBtn = document.getElementById('form-reset-btn');
  resetBtn?.addEventListener('click', () => {
    form.reset();
    form.querySelectorAll('.field-error').forEach(el => el.remove());
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) { submitBtn.textContent = 'Enviar Mensaje'; submitBtn.disabled = false; }
    if (formWrap)    formWrap.style.display    = 'block';
    if (successView) successView.style.display = 'none';
  });

});
