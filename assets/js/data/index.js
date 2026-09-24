/**
 * Question Bank Index - merges per-app banks into QUESTION_BANK global.
 * Order preserved from source: excel, powerpoint, word (40 each, 120 total).
 */

const QUESTION_BANK = {
  excel: EXCEL_QUESTION_BANK,
  powerpoint: POWERPOINT_QUESTION_BANK,
  word: WORD_QUESTION_BANK
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK };
}
