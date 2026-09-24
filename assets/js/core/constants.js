/**
 * Core constants
 */

const APP_NAMES = ['excel', 'powerpoint', 'word'];

const EXAM_MODES = {
  SINGLE: 'single',
  COMBINED: 'combined'
};

const EXAM_CONFIG = {
  single: {
    duration: 50 * 60,        // 3000 seconds
    questionsPerApp: 40,
    totalQuestions: 40
  },
  combined: {
    duration: 120 * 60,       // 7200 seconds (2 hours)
    questionsPerApp: 30,
    totalQuestions: 90        // 30×3
  }
};

// Legacy exports for backward compatibility
const EXAM_DURATION_SECONDS = 50 * 60; // 3000s
const TOTAL_QUESTIONS_PER_APP = 40;

const APP_METADATA = {
  excel: {
    name: 'Microsoft Excel 2019',
    shortName: 'Excel',
    badgeClass: 'badge-excel',
    btnClass: 'btn-excel',
    iconClass: 'app-icon-excel',
    iconText: 'X',
    color: '#107c41'
  },
  powerpoint: {
    name: 'Microsoft PowerPoint 2019',
    shortName: 'PowerPoint',
    badgeClass: 'badge-ppt',
    btnClass: 'btn-ppt',
    iconClass: 'app-icon-ppt',
    iconText: 'P',
    color: '#d83b01'
  },
  word: {
    name: 'Microsoft Word 2019',
    shortName: 'Word',
    badgeClass: 'badge-word',
    btnClass: 'btn-word',
    iconClass: 'app-icon-word',
    iconText: 'W',
    color: '#185abd'
  }
};

const TIMER_THRESHOLDS = {
  TEN_MINUTES: 10 * 60,
  FIVE_MINUTES: 5 * 60,
  ONE_MINUTE: 60
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    APP_NAMES,
    EXAM_DURATION_SECONDS,     // legacy
    TOTAL_QUESTIONS_PER_APP,   // legacy
    EXAM_MODES,
    EXAM_CONFIG,
    APP_METADATA,
    TIMER_THRESHOLDS
  };
}
