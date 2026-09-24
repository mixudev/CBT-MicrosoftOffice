/**
 * Exam mode page controller
 */

(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode') || 'single';  // 'single' | 'combined'
  let appName = (urlParams.get('app') || 'excel').toLowerCase();

  let activeExam = StorageService.getActiveExam();
  const now = Date.now();

  let questions = [];
  let answers = {};
  let marked = {};
  let startedAt = now;
  let endsAt = now;
  let currentIndex = 0;

  const config = EXAM_CONFIG[mode];
  const examDuration = config.duration * 1000;  // ms

  // Recovery logic: resume active exam if mode matches and not expired
  if (activeExam && activeExam.mode === mode && activeExam.endsAt > now) {
    // Resume existing exam
    if (mode === 'single' && activeExam.appName !== appName) {
      // Switching apps in single mode → start new
      questions = QuizEngine.prepareExamQuestions(appName);
      startedAt = now;
      endsAt = now + examDuration;
      answers = {};
      marked = {};
      currentIndex = 0;
      StorageService.saveActiveExam({ mode, appName, questions, answers, marked, startedAt, endsAt, currentIndex });
    } else {
      // Resume
      questions = activeExam.questions;
      answers = activeExam.answers || {};
      marked = activeExam.marked || {};
      startedAt = activeExam.startedAt;
      endsAt = activeExam.endsAt;
      currentIndex = activeExam.currentIndex || 0;
      if (mode === 'single') appName = activeExam.appName;
    }
  } else {
    // Start new exam
    if (mode === 'combined') {
      questions = QuizEngine.prepareCombinedExam();
      appName = 'combined';  // Special app name for UI
    } else {
      questions = QuizEngine.prepareExamQuestions(appName);
    }
    startedAt = now;
    endsAt = now + examDuration;
    answers = {};
    marked = {};
    currentIndex = 0;
    StorageService.saveActiveExam({ mode, appName, questions, answers, marked, startedAt, endsAt, currentIndex });
  }

  const totalQuestions = questions.length;
  const appMeta = mode === 'combined' 
    ? { name: 'Microsoft Office Specialist 2019', shortName: 'MOS', badgeClass: 'badge-info', color: '#6366f1' }
    : APP_METADATA[appName];

  // DOM refs
  const appBadge = document.getElementById('appBadge');
  const qHeaderCounter = document.getElementById('qHeaderCounter');
  const timerDisplay = document.getElementById('timerDisplay');
  const examTimerPill = document.getElementById('examTimerPill');
  
  // Desktop duplicates
  const appBadgeDesktop = document.getElementById('appBadgeDesktop');
  const qHeaderCounterDesktop = document.getElementById('qHeaderCounterDesktop');
  const timerDisplayDesktop = document.getElementById('timerDisplayDesktop');
  const examTimerPillDesktop = document.getElementById('examTimerPillDesktop');
  const reviewStatusBadgeDesktop = document.getElementById('reviewStatusBadgeDesktop');
  const qAppBadgeDesktop = document.getElementById('qAppBadgeDesktop');
  
  const currentQuestionNum = document.getElementById('currentQuestionNum');
  const reviewStatusBadge = document.getElementById('reviewStatusBadge');
  const btnMarkReview = document.getElementById('btnMarkReview');
  const questionPrompt = document.getElementById('questionPrompt');
  const optionsList = document.getElementById('optionsList');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnSubmitExam = document.getElementById('btnSubmitExam');
  const answeredStatusText = document.getElementById('answeredStatusText');
  const desktopMapGrid = document.getElementById('desktopMapGrid');
  const mobileMapGrid = document.getElementById('mobileMapGrid');

  appBadge.className = `badge ${appMeta.badgeClass}`;
  appBadge.textContent = appMeta.shortName;
  if (appBadgeDesktop) {
    appBadgeDesktop.className = `badge ${appMeta.badgeClass}`;
    appBadgeDesktop.textContent = appMeta.shortName;
  }
  
  document.title = mode === 'combined' 
    ? `Combined Exam: MOS 2019 | Practice Lab`
    : `Exam: ${appMeta.name} | Practice Lab`;

  // Timer
  const examTimer = new ExamTimer({
    endsAt,
    onTick: ({ formatted, remainingSeconds, isUrgent, isWarning }) => {
      timerDisplay.textContent = formatted;
      if (timerDisplayDesktop) timerDisplayDesktop.textContent = formatted;
      
      if (isUrgent) {
        examTimerPill.className = 'timer-pill timer-urgent';
        if (examTimerPillDesktop) examTimerPillDesktop.className = 'timer-pill timer-urgent';
      } else if (isWarning) {
        examTimerPill.className = 'timer-pill timer-warning';
        if (examTimerPillDesktop) examTimerPillDesktop.className = 'timer-pill timer-warning';
      } else {
        examTimerPill.className = 'timer-pill';
        if (examTimerPillDesktop) examTimerPillDesktop.className = 'timer-pill';
      }
    },
    onExpire: () => handleFinalSubmit(true)
  });

  examTimer.start();

  function renderQuestion(index) {
    currentIndex = Math.max(0, Math.min(totalQuestions - 1, index));
    const q = questions[currentIndex];
    saveProgressLocally();

    currentQuestionNum.textContent = currentIndex + 1;
    
    // Format counter as zero-padded (01 / 40)
    const qNum = String(currentIndex + 1).padStart(2, '0');
    qHeaderCounter.textContent = `${qNum} / ${totalQuestions}`;
    if (qHeaderCounterDesktop) qHeaderCounterDesktop.textContent = `${qNum} / ${totalQuestions}`;
    
    // Mobile submit button visibility (only show on last question)
    const btnSubmitMobile = document.getElementById('btnSubmitExamMobile');
    if (btnSubmitMobile) {
      btnSubmitMobile.style.display = currentIndex === totalQuestions - 1 ? 'inline-flex' : 'none';
      btnSubmitMobile.onclick = () => btnSubmitExam.click();
    }
    
    // Show app badge in combined mode
    const qAppBadge = document.getElementById('qAppBadge');
    if (mode === 'combined') {
      const qApp = APP_METADATA[q.app];
      qAppBadge.textContent = qApp.shortName;
      qAppBadge.className = `badge ${qApp.badgeClass}`;
      qAppBadge.style.display = 'inline-flex';
      
      if (qAppBadgeDesktop) {
        qAppBadgeDesktop.textContent = qApp.shortName;
        qAppBadgeDesktop.className = `badge ${qApp.badgeClass}`;
        qAppBadgeDesktop.style.display = 'inline-flex';
      }
    } else {
      qAppBadge.style.display = 'none';
      if (qAppBadgeDesktop) qAppBadgeDesktop.style.display = 'none';
    }
    
    questionPrompt.textContent = q.question;

    const isMarked = !!marked[q.id];
    reviewStatusBadge.style.display = isMarked ? 'inline-flex' : 'none';
    if (reviewStatusBadgeDesktop) reviewStatusBadgeDesktop.style.display = isMarked ? 'inline-flex' : 'none';
    
    btnMarkReview.setAttribute('aria-pressed', isMarked ? 'true' : 'false');
    btnMarkReview.className = isMarked ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-sm';
    
    // Icon-only review badge button
    btnMarkReview.innerHTML = isMarked
      ? icon('bookmarkFilled', {size:'1em'})
      : icon('bookmark', {size:'1em'});
    btnMarkReview.setAttribute('title', isMarked ? 'Hapus tanda review' : 'Tandai untuk review');

    const selectedKey = answers[q.id] || null;
    optionsList.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `option-item ${selectedKey === opt.key ? 'selected' : ''}`;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', selectedKey === opt.key ? 'true' : 'false');
      btn.id = `opt-${opt.key}`;
      btn.innerHTML = `
        <span class="option-key">${opt.key}</span>
        <span class="option-text">${opt.text}</span>
      `;
      btn.onclick = () => selectAnswer(opt.key);
      optionsList.appendChild(btn);
    });

    btnPrev.disabled = currentIndex === 0;
    if (currentIndex === totalQuestions - 1) {
      btnNext.innerHTML = `
        <span class="btn-text-full">Tinjau / Submit</span>
        <span class="btn-text-mobile">Selesai</span>
      `;
    } else {
      btnNext.innerHTML = `
        <span class="btn-text-full">Soal Berikutnya →</span>
        <span class="btn-text-mobile">Berikutnya →</span>
      `;
    }

    updateMap();
  }

  function selectAnswer(key) {
    answers[questions[currentIndex].id] = key;
    saveProgressLocally();
    renderQuestion(currentIndex);
  }

  function toggleMarkReview() {
    const q = questions[currentIndex];
    if (marked[q.id]) { delete marked[q.id]; } else { marked[q.id] = true; }
    saveProgressLocally();
    renderQuestion(currentIndex);
  }

  function saveProgressLocally() {
    StorageService.saveActiveExam({ mode, appName, questions, answers, marked, startedAt, endsAt, currentIndex });
  }

  function updateMap() {
    const answeredCount = Object.keys(answers).length;
    answeredStatusText.textContent = `${answeredCount}/${totalQuestions} Terjawab`;
    buildQuestionCells(desktopMapGrid);
    buildQuestionCells(mobileMapGrid);
  }

  // Unified question cell builder for sidebar and fullscreen drawer
  function buildQuestionCells(targetEl) {
    if (!targetEl) return;
    targetEl.innerHTML = '';
    questions.forEach((q, idx) => {
      const cell = document.createElement('div');
      const isAnswered = answers[q.id] != null;
      const isMarked = !!marked[q.id];
      const isCurrent = idx === currentIndex;
      
      let statusClass = isMarked ? 'marked' : isAnswered ? 'answered' : 'unanswered';
      if (isCurrent) statusClass += ' current';
      cell.className = `q-cell ${statusClass}`;
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', `Soal ${idx + 1}`);
      cell.setAttribute('data-question-index', idx);
      
      const numStr = String(idx + 1).padStart(2, '0');
      const cellIconSvg = isMarked ? icon('bookmark', {size:'0.7em'}) : isAnswered ? icon('check', {size:'0.7em'}) : '?';
      cell.innerHTML = `
        <span>${numStr}</span>
        <span class="cell-icon" aria-hidden="true">${cellIconSvg}</span>
      `;
      
      // Use direct event instead of onclick to avoid override
      cell.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(this.getAttribute('data-question-index'), 10);
        
        // Close drawer FIRST before rendering (immediate feedback)
        closeFullscreenDrawer();
        if (typeof UI !== 'undefined' && UI.closeDrawer) UI.closeDrawer('examDrawer');
        
        // Then render question after brief delay
        setTimeout(() => {
          renderQuestion(idx);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      });
      
      cell.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cell.click(); } };
      targetEl.appendChild(cell);
    });
  }

  // Submit handler
  btnSubmitExam.onclick = () => {
    const unansweredCount = totalQuestions - Object.keys(answers).length;
    const markedCount = Object.keys(marked).length;
    document.getElementById('modalUnansweredCount').textContent = unansweredCount;
    document.getElementById('modalMarkedCount').textContent = markedCount;
    UI.showModal('submitModal');
  };

  document.getElementById('btnConfirmSubmit').onclick = () => handleFinalSubmit(false);

  function handleFinalSubmit(isAutoExpired = false) {
    examTimer.stop();
    const elapsedSeconds = Math.round((Date.now() - startedAt) / 1000);
    const result = QuizEngine.calculateResults(questions, answers, elapsedSeconds, mode, appName);
    result.isAutoExpired = isAutoExpired;
    StorageService.clearActiveExam();
    const savedEntry = StorageService.saveExamResult(result);
    window.location.href = `result.html?id=${savedEntry.id}&mode=${mode}`;
  }

  // Navigation
  btnPrev.onclick = () => { if (currentIndex > 0) renderQuestion(currentIndex - 1); };
  btnNext.onclick = () => {
    if (currentIndex < totalQuestions - 1) { renderQuestion(currentIndex + 1); }
    else { btnSubmitExam.click(); }
  };
  btnMarkReview.onclick = toggleMarkReview;

  document.addEventListener('keydown', (e) => {
    if (document.querySelector('.modal-backdrop.show')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') { if (currentIndex > 0) renderQuestion(currentIndex - 1); }
    else if (e.key === 'ArrowRight') { if (currentIndex < totalQuestions - 1) renderQuestion(currentIndex + 1); }
    else if (e.key.toLowerCase() === 'm') { toggleMarkReview(); }
    else {
      const keyMap = { '1':'A','2':'B','3':'C','4':'D','5':'E','a':'A','b':'B','c':'C','d':'D','e':'E' };
      const chosen = keyMap[e.key.toLowerCase()];
      if (chosen) selectAnswer(chosen);
    }
  });

  // Fullscreen mobile drawer toggle (if present)
  const btnMobileMapToggle = document.getElementById('btnMobileMapToggle');
  if (btnMobileMapToggle) {
    btnMobileMapToggle.onclick = () => {
      const drawer = document.getElementById('examDrawerFullscreen');
      drawer.classList.add('show');
      document.body.style.overflow = 'hidden';
      
      const answeredCount = Object.keys(answers).length;
      document.getElementById('drawerAnsweredStatus').textContent = `${answeredCount} / ${totalQuestions} Terjawab`;
      
      const gridEl = document.getElementById('fullscreenMapGrid');
      buildQuestionCells(gridEl);
    };
  }

  // FAB toggle (mobile) - with pointer-events guard for reliability
  const fabBtn = document.getElementById('fabToggleMap');
  if (fabBtn) {
    fabBtn.style.pointerEvents = 'auto';
    fabBtn.style.touchAction = 'manipulation';
    fabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const drawer = document.getElementById('examDrawerFullscreen');
      if (!drawer) return;
      drawer.classList.add('show');
      document.body.style.overflow = 'hidden';
      const answeredCount = Object.keys(answers).length;
      const statusEl = document.getElementById('drawerAnsweredStatus');
      if (statusEl) statusEl.textContent = `${answeredCount} / ${totalQuestions} Terjawab`;
      const gridEl = document.getElementById('fullscreenMapGrid');
      if (gridEl) buildQuestionCells(gridEl);
    });
  }

  window.closeFullscreenDrawer = function() {
    const drawer = document.getElementById('examDrawerFullscreen');
    drawer.classList.remove('show');
    document.body.style.overflow = '';
  };

  renderQuestion(currentIndex);
})();
