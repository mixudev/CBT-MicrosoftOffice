/**
 * Practice mode page controller
 */

(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const appName = (urlParams.get('app') || 'excel').toLowerCase();

  const appMeta = APP_METADATA[appName];
  const appBadge = document.getElementById('appBadge');
  appBadge.className = `badge ${appMeta.badgeClass}`;
  appBadge.textContent = appMeta.shortName;
  document.title = `Practice: ${appMeta.name} | Practice Lab`;

  const questions = QuizEngine.preparePracticeQuestions(appName);
  const totalQuestions = questions.length;
  let currentIndex = 0;

  const practiceProgress = StorageService.getPracticeProgress(appName);
  const answers = practiceProgress.practiceAnswers || {};
  
  // Check if user has previous progress
  const hasProgress = Object.keys(answers).length > 0;
  
  if (hasProgress) {
    const answeredCount = Object.keys(answers).length;
    ModalAlert.confirm(
      `Anda memiliki ${answeredCount} dari ${totalQuestions} soal yang sudah dijawab. Pilih "Lanjutkan" untuk melanjutkan progress sebelumnya, atau "Restart" untuk memulai dari awal.`,
      'Lanjutkan Latihan?',
      {
        confirmText: 'Lanjutkan',
        cancelText: 'Restart'
      }
    ).then((confirmed) => {
      if (!confirmed) {
        // User chose Restart (cancel button)
        Object.keys(answers).forEach(key => delete answers[key]);
        StorageService.clearPracticeProgress(appName);
        window.location.reload();
      }
      // If confirmed, just continue (keep existing answers)
    });
  }

  // DOM refs
  const questionNumBadge = document.getElementById('questionNumBadge');
  const lessonTag = document.getElementById('lessonTag');
  const questionPrompt = document.getElementById('questionPrompt');
  const optionsList = document.getElementById('optionsList');
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackStatusBadge = document.getElementById('feedbackStatusBadge');
  const feedbackCorrectAnswerKey = document.getElementById('feedbackCorrectAnswerKey');
  const feedbackExplanation = document.getElementById('feedbackExplanation');
  const feedbackLessonSource = document.getElementById('feedbackLessonSource');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const questionCounterSmall = document.getElementById('questionCounterSmall');
  const answeredCounter = document.getElementById('answeredCounter');
  const progressText = document.getElementById('progressText');
  const desktopProgressBadge = document.getElementById('desktopProgressBadge');
  const desktopMapGrid = document.getElementById('desktopMapGrid');
  const desktopMapPanel = document.getElementById('desktopMapPanel');

  desktopMapPanel.style.display = 'block';

  function renderQuestion(index) {
    currentIndex = Math.max(0, Math.min(totalQuestions - 1, index));
    const q = questions[currentIndex];

    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    questionNumBadge.textContent = `${currentIndex + 1} / ${totalQuestions}`;
    lessonTag.textContent = q.lesson || 'Modul';
    questionPrompt.textContent = q.question;
    questionCounterSmall.textContent = `${currentIndex + 1} / ${totalQuestions}`;

    const selectedKey = answers[q.id] || null;
    const hasAnswered = selectedKey !== null;

    optionsList.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-item';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', selectedKey === opt.key ? 'true' : 'false');
      btn.id = `opt-${opt.key}`;

      if (hasAnswered) {
        if (opt.key === q.answer) {
          btn.classList.add('correct-revealed');
        } else if (opt.key === selectedKey && selectedKey !== q.answer) {
          btn.classList.add('wrong-revealed');
        }
      } else if (selectedKey === opt.key) {
        btn.classList.add('selected');
      }

      btn.innerHTML = `
        <span class="option-key">${opt.key}</span>
        <span class="option-text">${opt.text}</span>
      `;
      btn.onclick = () => selectAnswer(opt.key);
      optionsList.appendChild(btn);
    });

    if (hasAnswered) {
      const isCorrect = selectedKey === q.answer;
      feedbackBox.className = 'practice-feedback-box show';
      feedbackStatusBadge.className = isCorrect ? 'badge badge-success practice-feedback-badge' : 'badge badge-danger practice-feedback-badge';
      feedbackStatusBadge.innerHTML = isCorrect
        ? `${icon('checkCircle', {size:'0.9em'})} <span class="feedback-text-desktop">Jawaban Benar</span>`
        : `${icon('xCircle', {size:'0.9em'})} <span class="feedback-text-desktop">Jawaban Salah</span>`;
      const correctOpt = q.options.find(o => o.key === q.answer);
      feedbackCorrectAnswerKey.textContent = `${q.answer}. ${correctOpt ? correctOpt.text : ''}`;
      feedbackExplanation.textContent = q.explanation || 'Tidak ada penjelasan tambahan.';
      feedbackLessonSource.textContent = q.lesson || 'Modul Mahasiswa Office 2016';
    } else {
      feedbackBox.className = 'practice-feedback-box';
    }

    btnPrev.disabled = currentIndex === 0;
    btnNext.textContent = currentIndex === totalQuestions - 1 ? 'Selesai Latihan' : 'Berikutnya';

    updateMap();
    updateProgress();
  }

  function selectAnswer(key) {
    const q = questions[currentIndex];
    answers[q.id] = key;
    StorageService.savePracticeAnswer(appName, q.id, key);
    renderQuestion(currentIndex);
  }

  function updateProgress() {
    const count = Object.keys(answers).length;
    if (answeredCounter) answeredCounter.textContent = count;
    if (progressText) {
      progressText.innerHTML = `
        <span class="text-detail-desktop">${count} dari ${totalQuestions} soal telah dijawab</span>
        <span class="text-detail-mobile">${count} / ${totalQuestions}</span>
      `;
    }
    if (desktopProgressBadge) desktopProgressBadge.textContent = `${count}/${totalQuestions} Selesai`;
  }

  function updateMap() {
    buildQuestionCells(desktopMapGrid);
  }

  // Unified question cell builder
  function buildQuestionCells(targetEl) {
    targetEl.innerHTML = '';
    questions.forEach((q, idx) => {
      const cell = document.createElement('div');
      const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
      const isCurrent = idx === currentIndex;
      let statusClass = isAnswered ? 'answered' : 'unanswered';
      if (isCurrent) statusClass += ' current';
      cell.className = `q-cell ${statusClass}`;
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', `Soal ${idx + 1}, ${isAnswered ? 'sudah dijawab' : 'belum dijawab'}${isCurrent ? ', aktif' : ''}`);
      const numStr = String(idx + 1).padStart(2, '0');
      cell.innerHTML = `
        <span>${numStr}</span>
        <span class="cell-icon" aria-hidden="true">${isAnswered ? icon('check', {size:'0.7em'}) : '?'}</span>
      `;
      cell.onclick = () => { renderQuestion(idx); };
      cell.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') cell.onclick(); };
      targetEl.appendChild(cell);
    });
  }

  // Fullscreen drawer for mobile
  function openPracticeDrawer() {
    const drawer = document.getElementById('practiceDrawerFullscreen');
    if (!drawer) return;
    
    drawer.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    const answeredCount = Object.keys(answers).length;
    document.getElementById('drawerProgressText').textContent = `${answeredCount} / ${totalQuestions} Dijawab`;
    
    const gridEl = document.getElementById('fullscreenMapGrid');
    if (gridEl) buildQuestionCellsForDrawer(gridEl);
  }

  window.openPracticeDrawer = openPracticeDrawer;

  window.closePracticeDrawer = function() {
    const drawer = document.getElementById('practiceDrawerFullscreen');
    if (drawer) {
      drawer.classList.remove('show');
      document.body.style.overflow = '';
    }
  };

  function buildQuestionCellsForDrawer(targetEl) {
    targetEl.innerHTML = '';
    questions.forEach((q, idx) => {
      const cell = document.createElement('div');
      const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
      const isCurrent = idx === currentIndex;
      let statusClass = isAnswered ? 'answered' : 'unanswered';
      if (isCurrent) statusClass += ' current';
      cell.className = `q-cell ${statusClass}`;
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', `Soal ${idx + 1}`);
      
      const numStr = String(idx + 1).padStart(2, '0');
      const cellIconSvg = isAnswered ? icon('check', {size:'0.7em'}) : '?';
      cell.innerHTML = `
        <span>${numStr}</span>
        <span class="cell-icon" aria-hidden="true">${cellIconSvg}</span>
      `;
      
      cell.onclick = () => { 
        renderQuestion(idx);
        setTimeout(() => {
          closePracticeDrawer();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      };
      
      cell.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') cell.onclick(); };
      targetEl.appendChild(cell);
    });
  }

  // Event listeners
  btnPrev.onclick = () => { if (currentIndex > 0) renderQuestion(currentIndex - 1); };
  btnNext.onclick = () => {
    if (currentIndex < totalQuestions - 1) {
      renderQuestion(currentIndex + 1);
    } else {
      showCompletionModal();
    }
  };

  function showCompletionModal() {
    const answeredCount = Object.keys(answers).length;
    document.getElementById('completionAnsweredCount').textContent = `${answeredCount} / ${totalQuestions}`;
    const msg = answeredCount === totalQuestions
      ? `Sempurna! Anda telah menjawab seluruh ${totalQuestions} soal latihan.`
      : `Anda telah menjawab ${answeredCount} dari ${totalQuestions} soal latihan.`;
    document.getElementById('completionMessage').textContent = msg;

    const modal = document.getElementById('practiceCompletionModal');
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  window.returnToDashboard = function() {
    window.location.href = 'index.html';
  };

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') { if (currentIndex > 0) renderQuestion(currentIndex - 1); }
    else if (e.key === 'ArrowRight') { if (currentIndex < totalQuestions - 1) renderQuestion(currentIndex + 1); }
    else {
      const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E' };
      const chosen = keyMap[e.key.toLowerCase()];
      if (chosen) selectAnswer(chosen);
    }
  });

  // Wire mobile header toggle if present
  const btnMobileMap = document.getElementById('btnMobileMap');
  if (btnMobileMap) {
    btnMobileMap.onclick = openPracticeDrawer;
  }

  // FAB toggle (mobile) - with pointer-events guard for reliability
  const fabBtn = document.getElementById('fabToggleMap');
  if (fabBtn) {
    fabBtn.style.pointerEvents = 'auto';
    fabBtn.style.touchAction = 'manipulation';
    fabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openPracticeDrawer();
    });
  }

  renderQuestion(0);
})();
