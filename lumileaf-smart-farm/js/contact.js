/**
 * Ươm Xanh Smart Farm - Contact Form Module
 */
export function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    showToast('Thông tin hợp lệ. Chưa gửi dữ liệu; vui lòng liên hệ nhom4@smartfarm.vn.');
    clearErrors(form);
  });

  // Real-time validation on blur
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
  });
}

function validateForm(form) {
  let valid = true;
  const fields = form.querySelectorAll('[required], [type="email"], [data-validate="phone"]');

  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });

  const checkbox = form.querySelector('[name="privacy"]');
  if (checkbox && !checkbox.checked) {
    const group = checkbox.closest('.form-group');
    group?.classList.add('is-error');
    const errorEl = group?.querySelector('.form-group__error');
    if (errorEl) errorEl.textContent = 'Vui lòng đồng ý với chính sách bảo mật.';
    valid = false;
  }

  return valid;
}

function validateField(field) {
  const group = field.closest('.form-group');
  const errorEl = group?.querySelector('.form-group__error');
  let message = '';

  if (field.hasAttribute('required') && !field.value.trim()) {
    message = 'Trường này là bắt buộc.';
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) message = 'Email không hợp lệ.';
  } else if (field.dataset.validate === 'phone' && field.value) {
    const phoneRegex = /^(\+84|0)[0-9]{9,10}$/;
    const cleaned = field.value.replace(/\s/g, '');
    if (!phoneRegex.test(cleaned)) message = 'Số điện thoại không hợp lệ.';
  }

  if (message) {
    group?.classList.add('is-error');
    if (errorEl) errorEl.textContent = message;
    return false;
  }

  group?.classList.remove('is-error');
  return true;
}

function clearErrors(form) {
  form.querySelectorAll('.form-group').forEach(g => g.classList.remove('is-error'));
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span class="toast__message"></span>
    `;
    document.body.appendChild(toast);
  }

  toast.querySelector('.toast__message').textContent = message;
  toast.classList.add('is-visible');

  setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

export { showToast };
