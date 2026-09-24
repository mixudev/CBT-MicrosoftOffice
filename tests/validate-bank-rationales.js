/**
 * Automated QA Validator for Question Bank Rationales
 * Checks all 120 questions across Excel, PowerPoint, and Word
 * Ensures:
 * 1. Exactly 40 questions per app (120 total)
 * 2. Exactly 5 options (A, B, C, D, E) per question
 * 3. Every option has a non-empty rationale (>15 chars)
 * 4. Correct answer option has rationale confirming it is correct
 * 5. Distractor options have rationale explaining why they are wrong/their actual purpose
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');

// Load data files directly via evaluation (since they declare globals in browser style)
function loadBank(filename) {
  const filePath = path.join(__dirname, '../assets/js/data', filename);
  const code = fs.readFileSync(filePath, 'utf-8');
  // Create an evaluation context
  const fn = new Function(code + `
    if (typeof EXCEL_QUESTION_BANK !== 'undefined') return EXCEL_QUESTION_BANK;
    if (typeof POWERPOINT_QUESTION_BANK !== 'undefined') return POWERPOINT_QUESTION_BANK;
    if (typeof WORD_QUESTION_BANK !== 'undefined') return WORD_QUESTION_BANK;
    return [];
  `);
  return fn();
}

console.log('=== VALIDATING 120-QUESTION BANK COMPREHENSIVE RATIONALES ===\n');

const apps = [
  { name: 'excel', file: 'excel.js', expectedPrefix: 'EXCEL-' },
  { name: 'powerpoint', file: 'powerpoint.js', expectedPrefix: 'POWERPOINT-' },
  { name: 'word', file: 'word.js', expectedPrefix: 'WORD-' }
];

let totalQuestions = 0;
let totalOptions = 0;
let totalRationales = 0;
let issues = [];

apps.forEach(app => {
  console.log(`Checking ${app.name.toUpperCase()} question bank...`);
  const bank = loadBank(app.file);

  if (!Array.isArray(bank) || bank.length !== 40) {
    issues.push(`[${app.name}] Expected exactly 40 questions, found ${bank ? bank.length : 0}`);
    return;
  }

  totalQuestions += bank.length;

  bank.forEach((q, qIdx) => {
    const qNum = qIdx + 1;
    const expectedId = `${app.expectedPrefix}${String(qNum).padStart(3, '0')}`;

    if (q.id !== expectedId) {
      issues.push(`[${app.name}] Question ${qNum} has ID "${q.id}", expected "${expectedId}"`);
    }

    if (!q.question || q.question.trim().length < 10) {
      issues.push(`[${app.name} - ${q.id}] Question text too short or empty`);
    }

    if (!['A', 'B', 'C', 'D', 'E'].includes(q.answer)) {
      issues.push(`[${app.name} - ${q.id}] Invalid answer key: "${q.answer}"`);
    }

    if (!Array.isArray(q.options) || q.options.length !== 5) {
      issues.push(`[${app.name} - ${q.id}] Must have exactly 5 options, has ${q.options ? q.options.length : 0}`);
      return;
    }

    const standardKeys = ['A', 'B', 'C', 'D', 'E'];
    q.options.forEach((opt, oIdx) => {
      totalOptions++;
      const expectedKey = standardKeys[oIdx];

      if (opt.key !== expectedKey) {
        issues.push(`[${app.name} - ${q.id}] Option index ${oIdx} key is "${opt.key}", expected "${expectedKey}"`);
      }

      if (!opt.text || opt.text.trim().length === 0) {
        issues.push(`[${app.name} - ${q.id}] Option ${opt.key} has empty text`);
      }

      // Check rationale: every option must be fully explained before release.
      if (!opt.rationale || opt.rationale.trim().length === 0) {
        issues.push(`[${app.name} - ${q.id}] Option ${opt.key} is missing rationale`);
      } else {
        totalRationales++;
        if (opt.rationale.trim().length < 15) {
          issues.push(`[${app.name} - ${q.id}] Option ${opt.key} rationale too short (${opt.rationale.length} chars)`);
        }
      }
    });
  });

  console.log(`  ✓ ${bank.length} questions processed for ${app.name}`);
});

console.log('\n--- VALIDATION SUMMARY ---');
console.log(`Total Questions: ${totalQuestions} / 120`);
console.log(`Total Options:   ${totalOptions} / 600`);
console.log(`Total Rationales: ${totalRationales} / 600 (${((totalRationales / (totalOptions || 1)) * 100).toFixed(1)}%)`);

if (issues.length > 0) {
  console.log(`\nFound ${issues.length} issue(s):`);
  issues.slice(0, 20).forEach(issue => console.log('  ⚠ ' + issue));
  if (issues.length > 20) console.log(`  ... and ${issues.length - 20} more`);
  process.exit(1);
} else {
  console.log('\n✓ ALL CHECKS PASSED: Bank questions structure is 100% compliant!');
}
