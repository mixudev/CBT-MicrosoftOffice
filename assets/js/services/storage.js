/**
 * Storage Service for MOS Practice Lab
 * Handles persistent data under the 'mos_practice_lab' namespace.
 */

const STORAGE_KEY = 'mos_practice_lab';

const StorageService = {
  // Default data schema
  getDefaultData() {
    return {
      recentResults: [],
      progress: {
        excel: { answeredCount: 0, lastVisitedIndex: 0, practiceAnswers: {} },
        powerpoint: { answeredCount: 0, lastVisitedIndex: 0, practiceAnswers: {} },
        word: { answeredCount: 0, lastVisitedIndex: 0, practiceAnswers: {} }
      },
      activeExam: null,
      preferences: {
        fontSize: 'normal', // 'normal' | 'large'
        autoAdvance: true
      }
    };
  },

  // Read entire state safely
  getState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this.getDefaultData();
      const parsed = JSON.parse(raw);
      // Ensure schema keys exist
      return {
        recentResults: Array.isArray(parsed.recentResults) ? parsed.recentResults : [],
        progress: parsed.progress || this.getDefaultData().progress,
        activeExam: parsed.activeExam || null,
        preferences: parsed.preferences || this.getDefaultData().preferences
      };
    } catch (e) {
      console.warn('[Storage] Failed to read from localStorage:', e);
      return this.getDefaultData();
    }
  },

  // Write entire state safely
  saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      console.error('[Storage] Failed to save state to localStorage:', e);
      return false;
    }
  },

  // Active Exam Management
  saveActiveExam(examState) {
    const state = this.getState();
    // Ensure mode field exists (default to 'single' for backward compat)
    if (!examState.mode) {
      examState.mode = examState.appName ? 'single' : 'combined';
    }
    state.activeExam = examState;
    return this.saveState(state);
  },

  getActiveExam() {
    const state = this.getState();
    const exam = state.activeExam;
    // Auto-expire old exams without mode field (pre-refactor sessions)
    if (exam && !exam.mode) {
      console.warn('[Storage] Active exam missing mode field, expiring...');
      this.clearActiveExam();
      return null;
    }
    return exam;
  },

  clearActiveExam() {
    const state = this.getState();
    state.activeExam = null;
    return this.saveState(state);
  },

  // Recent Exam Results Management
  saveExamResult(result) {
    const state = this.getState();
    // Add unique result ID & timestamp
    const resultEntry = {
      id: 'res_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...result
    };
    state.recentResults.unshift(resultEntry);
    // Keep maximum 20 recent results to avoid filling localStorage
    if (state.recentResults.length > 20) {
      state.recentResults = state.recentResults.slice(0, 20);
    }
    this.saveState(state);
    return resultEntry;
  },

  getRecentResults(limit = 10) {
    const state = this.getState();
    return state.recentResults.slice(0, limit);
  },

  getResultById(id) {
    const state = this.getState();
    return state.recentResults.find(r => r.id === id) || null;
  },

  // Practice Mode Progress
  getPracticeProgress(app) {
    const state = this.getState();
    if (!state.progress[app]) {
      state.progress[app] = { answeredCount: 0, lastVisitedIndex: 0, practiceAnswers: {} };
    }
    return state.progress[app];
  },

  savePracticeAnswer(app, questionId, selectedKey) {
    const state = this.getState();
    if (!state.progress[app]) {
      state.progress[app] = { answeredCount: 0, lastVisitedIndex: 0, practiceAnswers: {} };
    }
    state.progress[app].practiceAnswers[questionId] = selectedKey;
    state.progress[app].answeredCount = Object.keys(state.progress[app].practiceAnswers).length;
    this.saveState(state);
  },

  clearPracticeProgress(app) {
    const state = this.getState();
    if (state.progress[app]) {
      state.progress[app] = { answeredCount: 0, lastVisitedIndex: 0, practiceAnswers: {} };
      this.saveState(state);
    }
  },

  // Clear all data (optional maintenance)
  clearAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {
      return false;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StorageService };
}
