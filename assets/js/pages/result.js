/**
 * Result page controller with progressive disclosure
 */

let resultData = null;
let currentFilter = 'all';
let expandedQuestions = new Set();

function initResultPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const resultId = urlParams.get('id');

  // Load result
  if (resultId) {
    resultData = StorageService.getResultById(resultId);
  }
  if (!resultData) {
    const recent = StorageService.getRecentResults(1);
    if (recent.length > 0) resultData = recent[0];
  }
  if (!resultData) {
    ModalAlert.alert('Tidak ada data hasil ujian. Kembali ke dashboard.').then(() => {
      window.location.href = 'index.html';
    });
    return;
  }

  renderHeader();
  renderAnalytics();
  renderQuestionReview();
}

function renderHeader() {
  const isCombined = resultData.mode === 'combined' || resultData.appName === 'combined';
  const appMeta = isCombined
    ? { name: 'Microsoft Office Specialist 2019 (Combined)', shortName: 'MOS Combined', badgeClass: 'badge-info', color: '#6366f1' }
    : (APP_METADATA[resultData.appName] || { name: resultData.appName, shortName: resultData.appName, badgeClass: 'badge-neutral' });

  document.getElementById('appBadge').className = `badge ${appMeta.badgeClass}`;
  document.getElementById('appBadge').textContent = appMeta.shortName;
  document.title = `Hasil: ${appMeta.name} | Practice Lab`;

  document.getElementById('scorePercentage').textContent = `${resultData.percentage}%`;
  document.getElementById('scoreRatio').textContent = `${resultData.correctCount} / ${resultData.totalQuestions}`;

  const statusBadge = document.getElementById('statusBadge');
  if (resultData.percentage >= 80) {
    statusBadge.className = 'badge badge-success';
    statusBadge.textContent = 'Strong Understanding';
  } else if (resultData.percentage >= 60) {
    statusBadge.className = 'badge badge-warning';
    statusBadge.textContent = 'Needs Review';
  } else {
    statusBadge.className = 'badge badge-neutral';
    statusBadge.textContent = 'Further Practice Needed';
  }

  document.getElementById('statCorrect').textContent = resultData.correctCount;
  document.getElementById('statWrong').textContent = resultData.wrongCount;
  document.getElementById('statUnanswered').textContent = resultData.unansweredCount;
  document.getElementById('statTimeUsed').textContent = resultData.timeUsedFormatted;
  document.getElementById('statTimeRemaining').textContent = resultData.timeRemainingFormatted;

  const totalDurationEl = document.getElementById('totalDurationText');
  if (totalDurationEl) {
    totalDurationEl.textContent = isCombined ? '120 menit' : '50 menit';
  }

  const btnRetry = document.getElementById('btnRetryExam');
  if (btnRetry) {
    btnRetry.href = isCombined ? 'exam.html?mode=combined' : `exam.html?app=${resultData.appName}`;
  }

  const btnPractice = document.getElementById('btnPracticeMode');
  if (btnPractice) {
    if (isCombined) {
      btnPractice.style.display = 'none';
    } else {
      btnPractice.href = `practice.html?app=${resultData.appName}`;
    }
  }
}

function renderAnalytics() {
  const perAppContainer = document.getElementById('perAppBreakdownContainer');
  if (perAppContainer && resultData.mode === 'combined' && resultData.perAppStats) {
    perAppContainer.style.display = 'block';
    perAppContainer.innerHTML = `
      <h3 style="margin-bottom:1rem;">Hasil Per Aplikasi</h3>
      <div class="stats-grid">
        ${resultData.perAppStats.map(app => {
          const meta = APP_METADATA[app.app];
          return `
            <div class="card" style="padding:1rem;border-left:3px solid ${meta.color};">
              <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.25rem;">${app.name}</div>
              <div style="font-size:1.5rem;font-weight:700;margin-bottom:0.5rem;">${app.percentage}%</div>
              <div style="font-size:0.85rem;color:var(--text-muted);">
                ${app.correct} benar, ${app.wrong} salah, ${app.unanswered} kosong dari ${app.total} soal
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  const boxNeedsReview = document.getElementById('boxNeedsReview');
  const listNeedsReview = document.getElementById('listNeedsReview');
  if (resultData.needsReview && resultData.needsReview.length > 0) {
    boxNeedsReview.style.display = 'flex';
    listNeedsReview.innerHTML = resultData.needsReview.map(item =>
      `<li><strong>${item.topic}</strong>: ${item.text}</li>`
    ).join('');
  }

  const boxStrengths = document.getElementById('boxStrengths');
  const listStrengths = document.getElementById('listStrengths');
  if (resultData.strengths && resultData.strengths.length > 0) {
    boxStrengths.style.display = 'flex';
    listStrengths.innerHTML = resultData.strengths.map(item =>
      `<li><strong>${item.topic}</strong>: ${item.text}</li>`
    ).join('');
  }

  const tbody = document.getElementById('lessonBreakdownTableBody');
  tbody.innerHTML = (resultData.lessonBreakdown || []).map(row => {
    const barColor = row.percentage >= 70 ? 'var(--status-success)' : 'var(--status-warning)';
    return `
      <tr>
        <td><strong>${row.lessonName}</strong></td>
        <td style="color:var(--status-success);font-weight:600;">${row.correct}</td>
        <td style="color:var(--status-danger);font-weight:600;">${row.wrong}</td>
        <td style="color:var(--text-muted);">${row.unanswered}</td>
        <td>
          <div style="display:flex;align-items:center;gap:0.5rem;">
            <div style="flex:1;height:6px;background:var(--bg-subtle);border-radius:4px;overflow:hidden;min-width:60px;">
              <div style="width:${row.percentage}%;height:100%;background:${barColor};"></div>
            </div>
            <span style="font-size:0.8rem;font-weight:600;">${row.percentage}%</span>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function setFilter(filter) {
  currentFilter = filter;
  renderQuestionReview();
}

function renderQuestionReview() {
  const container = document.getElementById('reviewContainer');
  const filterBtnContainer = document.getElementById('filterButtonsContainer');
  if (!resultData || !resultData.questions || !filterBtnContainer) return;

  // Build filter buttons
  const wrongCount = resultData.questions.filter(q => q.isAnswered && !q.isCorrect).length;
  const correctCount = resultData.questions.filter(q => q.isCorrect).length;
  const unansweredCount = resultData.questions.filter(q => !q.isAnswered).length;
  
  let filterHTML = `
    <button id="filterAll" class="btn btn-sm ${currentFilter === 'all' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('all')">
      <span class="filter-label-desktop">Semua (${resultData.totalQuestions})</span>
      <span class="filter-label-mobile">Semua</span>
    </button>
    <button id="filterWrong" class="btn btn-sm ${currentFilter === 'wrong' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('wrong')">
      ${icon('xCircle', {size:'0.9em'})}
      <span class="filter-label-desktop">Salah (${wrongCount})</span>
      <span class="filter-label-mobile">${wrongCount}</span>
    </button>
    <button id="filterCorrect" class="btn btn-sm ${currentFilter === 'correct' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('correct')">
      ${icon('checkCircle', {size:'0.9em'})}
      <span class="filter-label-desktop">Benar (${correctCount})</span>
      <span class="filter-label-mobile">${correctCount}</span>
    </button>
    <button id="filterUnanswered" class="btn btn-sm ${currentFilter === 'unanswered' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('unanswered')">
      ${icon('helpCircle', {size:'0.9em'})}
      <span class="filter-label-desktop">Kosong (${unansweredCount})</span>
      <span class="filter-label-mobile">${unansweredCount}</span>
    </button>
  `;
  
  // Add per-app filters in combined mode
  if (resultData.mode === 'combined') {
    filterHTML += `
      <span style="display:inline-block;width:1px;height:20px;background:var(--border);margin:0 0.5rem;"></span>
      <button id="filterExcel" class="btn btn-sm ${currentFilter === 'excel' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('excel')">Excel</button>
      <button id="filterPowerpoint" class="btn btn-sm ${currentFilter === 'powerpoint' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('powerpoint')">PowerPoint</button>
      <button id="filterWord" class="btn btn-sm ${currentFilter === 'word' ? 'btn-primary' : 'btn-outline'}" onclick="setFilter('word')">Word</button>
    `;
  }
  
  filterBtnContainer.innerHTML = filterHTML;

  const filtered = resultData.questions.filter(q => {
    // Status filters
    if (currentFilter === 'wrong') return q.isAnswered && !q.isCorrect;
    if (currentFilter === 'correct') return q.isCorrect;
    if (currentFilter === 'unanswered') return !q.isAnswered;
    
    // App filters (combined mode)
    if (currentFilter === 'excel' || currentFilter === 'powerpoint' || currentFilter === 'word') {
      return q.app === currentFilter;
    }
    
    return true; // 'all'
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">Tidak ada soal untuk filter ini.</div>`;
    return;
  }

  container.innerHTML = filtered.map((q, idx) => {
    const qNum = String(q.index + 1).padStart(2, '0');
    const isExpanded = expandedQuestions.has(q.id);
    
    let statusBadge = '';
    if (!q.isAnswered) {
      statusBadge = `<span class="status-icon-badge" style="color:var(--text-muted);">${icon('helpCircle', {size:'1.2em'})}</span><span class="status-text-desktop badge badge-neutral">Belum Dijawab</span>`;
    } else if (q.isCorrect) {
      statusBadge = `<span class="status-icon-badge" style="color:var(--status-success);">${icon('checkCircle', {size:'1.2em'})}</span><span class="status-text-desktop badge badge-success">Benar</span>`;
    } else {
      statusBadge = `<span class="status-icon-badge" style="color:var(--status-danger);">${icon('xCircle', {size:'1.2em'})}</span><span class="status-text-desktop badge badge-danger">Salah</span>`;
    }
    
    // Show app badge in combined mode
    const appBadgeHtml = (resultData.mode === 'combined' && q.app && APP_METADATA[q.app])
      ? `<span class="badge ${APP_METADATA[q.app].badgeClass} result-app-badge">${APP_METADATA[q.app].shortName}</span>`
      : '';
    
    // Lesson badge (hide on mobile)
    const lessonBadgeHtml = `<span class="badge badge-neutral lesson-badge-desktop" style="text-transform:none;font-size:0.7rem;">${q.lesson || 'Modul'}</span>`;

    const borderColor = !q.isAnswered ? 'var(--border-light)' : q.isCorrect ? 'var(--status-success)' : 'var(--status-danger)';

    return `
      <article class="review-item ${isExpanded ? '' : 'collapsed'}" style="border-color:${borderColor};">
        <div class="review-item-header" onclick="toggleQuestion('${q.id}')">
          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;flex:1;">
            <span style="font-weight:700;color:var(--text-secondary);font-family:var(--font-mono);">Q${qNum}</span>
            ${statusBadge}
            ${appBadgeHtml}
            ${lessonBadgeHtml}
          </div>
          <button type="button" class="review-item-toggle" aria-expanded="${isExpanded}" aria-label="${isExpanded ? 'Tutup detail' : 'Lihat detail'}" style="background:none;border:none;padding:0.5rem;cursor:pointer;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;transition:transform 0.2s ease;${isExpanded ? 'transform:rotate(180deg);' : ''}">
            ${icon('chevronDown', {size:'1.25em'})}
          </button>
        </div>
        <div class="review-item-body">
          <p style="font-weight:600;font-size:1rem;margin-bottom:1rem;color:var(--text-primary);line-height:1.5;">
            ${q.question}
          </p>

          <div style="display:grid;grid-template-columns:1fr;gap:0.75rem;margin-bottom:1rem;">
            <div style="background:${q.isCorrect ? 'var(--status-success-bg)' : !q.isAnswered ? 'var(--bg-surface)' : 'var(--status-danger-bg)'};padding:0.75rem 1rem;border-radius:var(--radius-sm);border:1px solid ${q.isCorrect ? '#bbf7d0' : !q.isAnswered ? 'var(--border-light)' : '#fecaca'};">
              <span style="font-size:0.7rem;text-transform:uppercase;font-weight:700;color:var(--text-muted);display:block;">Jawaban Anda:</span>
              <div style="font-weight:600;margin-top:2px;">
                ${q.isAnswered ? `${q.selectedKey}. ${q.selectedText}` : '<em style="color:var(--text-muted);">Tidak dijawab</em>'}
              </div>
            </div>

            <div style="background:var(--status-success-bg);padding:0.75rem 1rem;border-radius:var(--radius-sm);border:1px solid #bbf7d0;">
              <span style="font-size:0.7rem;text-transform:uppercase;font-weight:700;color:var(--status-success);display:block;">Jawaban Benar:</span>
              <div style="font-weight:700;color:#166534;margin-top:2px;">
                ${q.correctKey}. ${q.correctText}
              </div>
            </div>
          </div>

          <div style="background:var(--bg-surface);padding:1rem;border-radius:var(--radius-sm);border:1px solid var(--border-light);font-size:0.9rem;line-height:1.5;">
            <strong style="display:block;color:var(--text-secondary);margin-bottom:0.25rem;">Pembahasan:</strong>
            <div>${q.explanation || 'Pembahasan materi modul.'}</div>
            ${q.tags && q.tags.length > 0 ? `<div style="margin-top:0.5rem;font-size:0.75rem;color:var(--text-muted);">Tags: ${q.tags.join(', ')}</div>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function toggleQuestion(qid) {
  const wasExpanded = expandedQuestions.has(qid);
  
  // Auto-close others: only one can be open
  expandedQuestions.clear();
  
  // Toggle current
  if (!wasExpanded) {
    expandedQuestions.add(qid);
  }
  
  // Smooth DOM update instead of full re-render
  const allItems = document.querySelectorAll('.review-item');
  allItems.forEach(item => {
    const itemHeader = item.querySelector('.review-item-header');
    const itemBody = item.querySelector('.review-item-body');
    const toggle = item.querySelector('.review-item-toggle');
    
    // Extract qid from onclick attribute
    const onclickAttr = itemHeader.getAttribute('onclick');
    const match = onclickAttr && onclickAttr.match(/toggleQuestion\('([^']+)'\)/);
    const itemQid = match ? match[1] : null;
    
    if (itemQid === qid && !wasExpanded) {
      // Expand this one
      item.classList.remove('collapsed');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.style.transform = 'rotate(180deg)';
    } else {
      // Collapse all others
      item.classList.add('collapsed');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.style.transform = '';
    }
  });
}

// Tab switching
let currentTab = 'stats';

window.switchResultTab = function(tabName) {
  currentTab = tabName;
  
  // Update button states
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      btn.style.borderBottomColor = 'var(--color-primary)';
      btn.style.color = 'var(--color-primary)';
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
      btn.style.borderBottomColor = 'transparent';
      btn.style.color = 'var(--text-muted)';
    }
  });
  
  // Show/hide content
  document.getElementById('tabStats').style.display = tabName === 'stats' ? 'block' : 'none';
  document.getElementById('tabAnalysis').style.display = tabName === 'analysis' ? 'block' : 'none';
  document.getElementById('tabReview').style.display = tabName === 'review' ? 'block' : 'none';
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Initialize
document.addEventListener('DOMContentLoaded', initResultPage);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initResultPage, setFilter, toggleQuestion };
}
