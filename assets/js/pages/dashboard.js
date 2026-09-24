/**
 * Dashboard controller
 */

function initDashboard() {
  checkActiveExam();
  renderRecentResults();
}

function checkActiveExam() {
  const activeExam = StorageService.getActiveExam();
  if (!activeExam || activeExam.endsAt <= Date.now()) return;

  const banner   = document.getElementById('activeExamBanner');
  const desc     = document.getElementById('activeExamDesc');
  const resumeBtn = document.getElementById('btnResumeExam');
  const discardBtn = document.getElementById('btnDiscardExam');
  const isCombined = activeExam.mode === 'combined';
  const appMeta  = isCombined
    ? { name: 'Microsoft Office Specialist 2019 (Combined)', shortName: 'MOS' }
    : APP_METADATA[activeExam.appName];

  banner.style.display = 'block';
  desc.textContent = isCombined
    ? 'Sesi ujian gabungan (90 soal, 120 menit) sedang berlangsung.'
    : `Sesi ujian ${appMeta.name} sedang berlangsung.`;
  resumeBtn.href = isCombined ? 'exam.html?mode=combined' : `exam.html?app=${activeExam.appName}`;

  discardBtn.onclick = () => {
    ModalAlert.confirm('Batalkan sesi ujian aktif ini? Jawaban yang belum disubmit akan dihapus.', 'Konfirmasi Batalkan Ujian').then((confirmed) => {
      if (confirmed) {
        StorageService.clearActiveExam();
        banner.style.display = 'none';
      }
    });
  };
}

// Combined exam modal handlers
window.showCombinedExamModal = function() {
  const modal = document.getElementById('combinedExamModal');
  modal.style.display = 'flex';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
};

window.hideCombinedExamModal = function() {
  const modal = document.getElementById('combinedExamModal');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  setTimeout(() => { modal.style.display = 'none'; }, 200);
};

window.confirmStartCombinedExam = function() {
  const activeExam = StorageService.getActiveExam();
  if (activeExam && activeExam.mode === 'combined') {
    const remainingMs = activeExam.endsAt - Date.now();
    if (remainingMs > 0) {
      const mins = Math.ceil(remainingMs / 60000);
      ModalAlert.confirm(`Anda memiliki ujian gabungan aktif dengan sisa waktu ${mins} menit. Lanjutkan?`, 'Lanjutkan Ujian Aktif').then((confirmed) => {
        if (confirmed) {
          window.location.href = 'exam.html?mode=combined';
        }
      });
      return;
    }
  }
  // Start new combined exam
  window.location.href = 'exam.html?mode=combined';
};

// Close modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('combinedExamModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideCombinedExamModal();
      }
    });
  }
});

function renderRecentResults() {
  const results  = StorageService.getRecentResults(5);
  const container = document.getElementById('recentHistoryContainer');
  const clearBtn = document.getElementById('btnClearHistory');
  const emptyNotice = document.getElementById('emptyHistoryNotice');

  if (results.length === 0) {
    emptyNotice.style.display = 'block';
    return;
  }

  emptyNotice.style.display = 'none';
  clearBtn.style.display = 'inline-flex';

  clearBtn.onclick = () => {
    ModalAlert.confirm('Hapus seluruh riwayat latihan lokal?', 'Konfirmasi Hapus').then((confirmed) => {
      if (confirmed) {
        const state = StorageService.getState();
        state.recentResults = [];
        StorageService.saveState(state);
        location.reload();
      }
    });
  };

  container.innerHTML = results.map(res => {
    const isCombined = res.mode === 'combined' || res.appName === 'combined';
    const meta = isCombined 
      ? { name: 'MOS 2019 Combined', iconClass: '', iconText: 'MOS', app: 'combined' }
      : (APP_METADATA[res.appName] || { name: res.appName, iconClass: '', iconText: '?', app: res.appName });
    
    const dateStr = new Date(res.createdAt).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    const isPass = res.percentage >= 70;
    
    // Map app name to icon file
    const iconMap = {
      'excel': 'excel-icon.png',
      'powerpoint': 'powerpoint-icon.png',
      'word': 'word-icon.png',
      'combined': 'logo.png'
    };
    const iconFile = iconMap[meta.app] || 'logo.png';
    
    return `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:1rem;border:1px solid var(--border-light);border-radius:var(--radius-sm);background:var(--bg-surface);flex-wrap:wrap;gap:0.75rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div class="app-icon-box" style="width:38px;height:38px;background:none;padding:0;border:none;display:flex;align-items:center;justify-content:center;">
            <img src="assets/images/${iconFile}" alt="${meta.name}" style="width:100%;height:100%;object-fit:contain;" onerror="this.outerHTML='<span style=\\'font-size:1rem;font-weight:700;\\'>${meta.iconText}</span>'">
          </div>
          <div>
            <div style="font-weight:700;">${meta.name}</div>
            <div style="font-size:0.8rem;color:var(--text-muted);">${dateStr} &bull; ${res.timeUsedFormatted || '-'}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="text-align:right;">
            <div style="font-size:1.25rem;font-weight:800;color:${isPass ? 'var(--status-success)' : 'var(--status-warning)'};">${res.percentage}%</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">${res.correctCount} / ${res.totalQuestions}</div>
          </div>
          <a href="result.html?id=${res.id}" class="btn btn-outline btn-sm">Lihat Detail</a>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', initDashboard);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initDashboard };
}
