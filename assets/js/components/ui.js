/**
 * UI Helper & Component Controller
 * Provides standardized modal dialogs, drawers, accessibility helpers, and keyboard bindings.
 */

const UI = {
  // Modal Management
  showModal(modalId) {
    const el = document.getElementById(modalId);
    if (!el) return;
    el.classList.add('show');
    el.setAttribute('aria-hidden', 'false');
    // Trap focus inside modal
    const focusable = el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) {
      focusable[0].focus();
    }
  },

  hideModal(modalId) {
    const el = document.getElementById(modalId);
    if (!el) return;
    el.classList.remove('show');
    el.setAttribute('aria-hidden', 'true');
  },

  // Mobile Question Map Drawer
  toggleDrawer(drawerId = 'questionMapDrawer') {
    const el = document.getElementById(drawerId);
    if (!el) return;
    el.classList.toggle('active');
  },

  closeDrawer(drawerId = 'questionMapDrawer') {
    const el = document.getElementById(drawerId);
    if (!el) return;
    el.classList.remove('active');
  },

  // Toast / Floating Banner
  showToast(message, type = 'info', durationMs = 4000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.position = 'fixed';
      container.style.top = '20px';
      container.style.right = '20px';
      container.style.zIndex = '9999';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '10px';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `alert alert-${type}`;
    toast.style.boxShadow = 'var(--shadow-lg)';
    toast.style.minWidth = '280px';
    toast.style.animation = 'slideInDown 0.25s ease';
    toast.innerHTML = `
      <div style="flex: 1;">${message}</div>
      <button type="button" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:inherit;" aria-label="Close">&times;</button>
    `;

    toast.querySelector('button').onclick = () => toast.remove();
    container.appendChild(toast);

    if (durationMs > 0) {
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, durationMs);
    }
  },

  // App Metadata formatting
  getAppMeta(app) {
    switch (app.toLowerCase()) {
      case 'excel':
        return {
          name: 'Microsoft Excel 2019',
          shortName: 'Excel',
          badgeClass: 'badge-excel',
          btnClass: 'btn-excel',
          iconClass: 'app-icon-excel',
          iconText: 'X',
          accentColor: 'var(--color-excel)'
        };
      case 'powerpoint':
        return {
          name: 'Microsoft PowerPoint 2019',
          shortName: 'PowerPoint',
          badgeClass: 'badge-ppt',
          btnClass: 'btn-ppt',
          iconClass: 'app-icon-ppt',
          iconText: 'P',
          accentColor: 'var(--color-ppt)'
        };
      case 'word':
        return {
          name: 'Microsoft Word 2019',
          shortName: 'Word',
          badgeClass: 'badge-word',
          btnClass: 'btn-word',
          iconClass: 'app-icon-word',
          iconText: 'W',
          accentColor: 'var(--color-word)'
        };
      default:
        return {
          name: 'Microsoft Office 2019',
          shortName: 'Office',
          badgeClass: 'badge-neutral',
          btnClass: 'btn-primary',
          iconClass: 'app-icon-excel',
          iconText: 'O',
          accentColor: 'var(--brand-primary)'
        };
    }
  }
};

// Global escape key handler for open modals & drawers
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.show').forEach(m => m.classList.remove('show'));
    document.querySelectorAll('.drawer-backdrop.active').forEach(d => d.classList.remove('active'));
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { UI };
}
