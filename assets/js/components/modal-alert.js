/**
 * Custom Alert & Confirm Modal Component
 * Replaces native alert() and confirm() with styled modals
 */

const ModalAlert = {
  // Show alert modal
  alert(message, title = 'Pemberitahuan') {
    return new Promise((resolve) => {
      const modal = this._createModal({
        title,
        message,
        buttons: [
          { text: 'OK', class: 'btn-primary', onClick: () => { this._close(); resolve(); } }
        ]
      });
      document.body.appendChild(modal);
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
      document.body.style.overflow = 'hidden';
    });
  },

  // Show confirm modal
  confirm(message, title = 'Konfirmasi', options = {}) {
    const confirmText = options.confirmText || 'Konfirmasi';
    const cancelText = options.cancelText || 'Batal';
    return new Promise((resolve) => {
      const modal = this._createModal({
        title,
        message,
        buttons: [
          { text: cancelText, class: 'btn-outline', onClick: () => { this._close(); resolve(false); } },
          { text: confirmText, class: 'btn-primary', onClick: () => { this._close(); resolve(true); } }
        ]
      });
      document.body.appendChild(modal);
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
      document.body.style.overflow = 'hidden';
    });
  },

  _createModal({ title, message, buttons }) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop custom-alert-modal';
    backdrop.id = 'customAlertModal';
    backdrop.innerHTML = `
      <div class="modal-dialog" role="dialog" style="max-width:440px;">
        <div class="modal-header">
          <h3 style="font-size:1.1rem;margin:0;font-weight:700;">${title}</h3>
          <button type="button" onclick="ModalAlert._close()" aria-label="Tutup" style="background:rgba(0,0,0,0.05);border:none;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;padding:0;" onmouseover="this.style.background='rgba(0,0,0,0.1)'" onmouseout="this.style.background='rgba(0,0,0,0.05)'">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 4L4 12M4 4l8 8"/></svg>
          </button>
        </div>
        <div class="modal-body" style="padding:1.5rem;">
          <p style="font-size:0.95rem;line-height:1.6;color:var(--text-primary);margin:0;">${message}</p>
        </div>
        <div class="modal-footer" style="display:flex;gap:0.75rem;padding:1rem;border-top:1px solid var(--border);">
          ${buttons.map((btn, idx) => 
            `<button class="btn ${btn.class}" data-btn-idx="${idx}" style="flex:1;padding:0.75rem;">${btn.text}</button>`
          ).join('')}
        </div>
      </div>
    `;
    
    // Attach click handlers
    buttons.forEach((btn, idx) => {
      const btnEl = backdrop.querySelector(`[data-btn-idx="${idx}"]`);
      btnEl.onclick = btn.onClick;
    });
    
    return backdrop;
  },

  _close() {
    const modal = document.getElementById('customAlertModal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
      setTimeout(() => modal.remove(), 200);
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ModalAlert };
}
