/**
 * Quiz Engine Module
 * Manages question shuffling, option randomization, grading, and topic analytics.
 */

const QuizEngine = {
  // Fisher-Yates array shuffler
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  /**
   * Prepares questions for Exam Mode:
   * - Filters by app
   * - Shuffles question order
   * - Shuffles options while re-mapping correct answer key accurately
   */
  prepareExamQuestions(appName) {
    const rawQuestions = QUESTION_BANK[appName.toLowerCase()];
    if (!rawQuestions || rawQuestions.length === 0) {
      throw new Error(`No questions found for app: ${appName}`);
    }

    // Shuffle questions order
    const shuffledQuestions = this.shuffleArray(rawQuestions);

    // Deep clone and shuffle options for each question
    return shuffledQuestions.map((q, idx) => {
      // Find the text of the correct answer first
      const originalCorrectOption = q.options.find(opt => opt.key === q.answer);
      const originalCorrectText = originalCorrectOption ? originalCorrectOption.text : '';

      // Shuffle options array
      const shuffledOptionsRaw = this.shuffleArray(q.options);
      const standardKeys = ['A', 'B', 'C', 'D', 'E'];

      let newAnswerKey = 'A';
      const newOptions = shuffledOptionsRaw.map((opt, optIdx) => {
        const key = standardKeys[optIdx];
        if (opt.text === originalCorrectText) {
          newAnswerKey = key;
        }
        return {
          key: key,
          text: opt.text,
          rationale: opt.rationale || ''
        };
      });

      return {
        id: q.id,
        index: idx,
        app: q.app,
        lesson: q.lesson,
        difficulty: q.difficulty,
        question: q.question,
        options: newOptions,
        answer: newAnswerKey,
        originalAnswer: q.answer,
        explanation: q.explanation,
        tags: q.tags || []
      };
    });
  },

  /**
   * Prepares questions for Practice Mode (sequential, standard options order)
   */
  preparePracticeQuestions(appName) {
    const rawQuestions = QUESTION_BANK[appName.toLowerCase()];
    if (!rawQuestions || rawQuestions.length === 0) {
      throw new Error(`No questions found for app: ${appName}`);
    }

    return rawQuestions.map((q, idx) => ({
      ...q,
      index: idx,
      options: q.options.map(opt => ({
        ...opt,
        rationale: opt.rationale || ''
      }))
    }));
  },

  /**
   * Prepares combined exam: 30 questions per app (90 total), randomized selection + order
   * @returns {Array} 90 shuffled questions with app diversity
   */
  prepareCombinedExam() {
    const apps = ['excel', 'powerpoint', 'word'];
    const questionsPerApp = 30;
    let combined = [];

    apps.forEach(app => {
      const rawQuestions = QUESTION_BANK[app];
      if (!rawQuestions || rawQuestions.length < questionsPerApp) {
        throw new Error(`Insufficient questions for ${app}: need ${questionsPerApp}, have ${rawQuestions?.length || 0}`);
      }

      // Sample 30 random questions from 40
      const shuffledPool = this.shuffleArray(rawQuestions);
      const selectedQuestions = shuffledPool.slice(0, questionsPerApp);

      // Prepare with shuffled options (reuse existing logic)
      const prepared = selectedQuestions.map(q => {
        const originalCorrectOption = q.options.find(opt => opt.key === q.answer);
        const originalCorrectText = originalCorrectOption ? originalCorrectOption.text : '';

        const shuffledOptionsRaw = this.shuffleArray(q.options);
        const standardKeys = ['A', 'B', 'C', 'D', 'E'];

        let newAnswerKey = 'A';
        const newOptions = shuffledOptionsRaw.map((opt, optIdx) => {
          const key = standardKeys[optIdx];
          if (opt.text === originalCorrectText) {
            newAnswerKey = key;
          }
          return { 
            key, 
            text: opt.text,
            rationale: opt.rationale || ''
          };
        });

        return {
          id: q.id,
          app: q.app,
          lesson: q.lesson,
          difficulty: q.difficulty,
          question: q.question,
          options: newOptions,
          answer: newAnswerKey,
          originalAnswer: q.answer,
          explanation: q.explanation,
          tags: q.tags || []
        };
      });

      combined = combined.concat(prepared);
    });

    // Final shuffle: mix all 90 questions together
    const finalShuffled = this.shuffleArray(combined);

    // Re-index after final shuffle
    return finalShuffled.map((q, idx) => ({ ...q, index: idx }));
  },

  /**
   * Evaluates user exam answers and computes full analytics
   * @param {Array} examQuestions - The prepared exam questions array
   * @param {Object} userAnswers - Key-value map: { [questionId]: 'A' | 'B' | ... }
   * @param {number} timeUsedSeconds - Elapsed time in seconds
   * @param {string} modeOrAppName - 'single' | 'combined' (mode) OR 'excel' | 'powerpoint' | 'word' (legacy appName)
   * @param {string} appName - Optional app name for single mode
   */
  calculateResults(examQuestions, userAnswers = {}, timeUsedSeconds = 0, modeOrAppName = 'excel', appName = null) {
    // Handle both old signature (4 args) and new signature (5 args)
    let mode = 'single';
    let finalAppName = 'excel';
    
    if (modeOrAppName === 'single' || modeOrAppName === 'combined') {
      mode = modeOrAppName;
      finalAppName = appName || 'excel';
    } else {
      // Legacy: 4th arg is appName
      finalAppName = modeOrAppName;
      mode = 'single';
    }
    const total = examQuestions.length;
    let correctCount = 0;
    let wrongCount = 0;
    let answeredCount = 0;

    const questionResults = [];
    const lessonMap = {};

    examQuestions.forEach(q => {
      const selected = userAnswers[q.id] || null;
      const isAnswered = selected !== null && selected !== undefined;
      const isCorrect = isAnswered && selected === q.answer;

      if (isAnswered) {
        answeredCount++;
        if (isCorrect) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }

      // Track by lesson
      const lesson = q.lesson || 'General';
      if (!lessonMap[lesson]) {
        lessonMap[lesson] = {
          lessonName: lesson,
          total: 0,
          correct: 0,
          wrong: 0,
          unanswered: 0
        };
      }
      lessonMap[lesson].total++;
      if (isCorrect) {
        lessonMap[lesson].correct++;
      } else if (isAnswered) {
        lessonMap[lesson].wrong++;
      } else {
        lessonMap[lesson].unanswered++;
      }

      // Detail item
      const chosenOption = isAnswered ? q.options.find(o => o.key === selected) : null;
      const correctOption = q.options.find(o => o.key === q.answer);

      questionResults.push({
        id: q.id,
        index: q.index,
        app: q.app,
        question: q.question,
        lesson: q.lesson,
        tags: q.tags,
        options: q.options.map(opt => ({
          key: opt.key,
          text: opt.text,
          rationale: opt.rationale || ''
        })),
        selectedKey: selected,
        selectedText: chosenOption ? chosenOption.text : null,
        selectedRationale: chosenOption ? (chosenOption.rationale || '') : null,
        correctKey: q.answer,
        correctText: correctOption ? correctOption.text : '',
        correctRationale: correctOption ? (correctOption.rationale || q.explanation) : q.explanation,
        isAnswered: isAnswered,
        isCorrect: isCorrect,
        explanation: q.explanation
      });
    });

    const unansweredCount = total - answeredCount;
    // Section 27: 1 soal = 2.5%, percentage = (correct / total) * 100
    const percentage = Number(((correctCount / total) * 100).toFixed(1));

    // Lesson Breakdown Analysis
    const lessonBreakdown = Object.values(lessonMap).map(l => ({
      ...l,
      percentage: Number(((l.correct / l.total) * 100).toFixed(0))
    }));

    // Strengths and Needs Review topics
    const strengths = [];
    const needsReview = [];

    lessonBreakdown.forEach(l => {
      if (l.wrong === 0 && l.unanswered === 0) {
        strengths.push({
          topic: l.lessonName,
          text: `Menguasai seluruh soal (${l.correct}/${l.total})`
        });
      } else if (l.percentage >= 75) {
        strengths.push({
          topic: l.lessonName,
          text: `Performa baik (${l.correct}/${l.total})`
        });
      } else {
        needsReview.push({
          topic: l.lessonName,
          mistakes: l.wrong + l.unanswered,
          text: `${l.wrong} salah, ${l.unanswered} belum dijawab dari ${l.total} soal`
        });
      }
    });

    // Per-app breakdown (combined mode only)
    let perAppStats = null;
    if (mode === 'combined') {
      const apps = ['excel', 'powerpoint', 'word'];
      perAppStats = apps.map(app => {
        const appQuestions = questionResults.filter(q => q.app === app);
        const appTotal = appQuestions.length;
        const appCorrect = appQuestions.filter(q => q.isCorrect).length;
        const appWrong = appQuestions.filter(q => !q.isCorrect && q.isAnswered).length;
        const appUnanswered = appQuestions.filter(q => !q.isAnswered).length;
        const appPercentage = appTotal > 0 ? Number(((appCorrect / appTotal) * 100).toFixed(1)) : 0;

        return {
          app,
          name: APP_METADATA[app].name,
          shortName: APP_METADATA[app].shortName,
          total: appTotal,
          correct: appCorrect,
          wrong: appWrong,
          unanswered: appUnanswered,
          percentage: appPercentage
        };
      });
    }

    // Formatting elapsed and remaining times
    const formatSeconds = (sec) => {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const totalDurationSeconds = (typeof EXAM_CONFIG !== 'undefined' && EXAM_CONFIG[mode]) 
      ? EXAM_CONFIG[mode].duration 
      : (mode === 'combined' ? 120 * 60 : 50 * 60);
    const actualTimeUsed = Math.min(totalDurationSeconds, Math.max(0, timeUsedSeconds));
    const timeRemainingSeconds = Math.max(0, totalDurationSeconds - actualTimeUsed);

    return {
      mode: mode,
      appName: mode === 'combined' ? 'combined' : finalAppName.toLowerCase(),
      totalQuestions: total,
      answeredCount,
      unansweredCount,
      correctCount,
      wrongCount,
      percentage,
      timeUsedSeconds: actualTimeUsed,
      timeRemainingSeconds,
      timeUsedFormatted: formatSeconds(actualTimeUsed),
      timeRemainingFormatted: formatSeconds(timeRemainingSeconds),
      lessonBreakdown,
      strengths,
      needsReview,
      perAppStats,
      questions: questionResults
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuizEngine };
}
