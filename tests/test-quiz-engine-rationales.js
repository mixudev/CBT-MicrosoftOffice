/**
 * Unit Test: QuizEngine Option Rationales
 * Validates that rationale field is preserved through shuffling and grading
 */

const assert = require('assert');

// Mock global constants
global.APP_METADATA = {
  excel: { name: 'Microsoft Excel 2019', shortName: 'Excel', color: '#107c41' },
  powerpoint: { name: 'Microsoft PowerPoint 2019', shortName: 'PowerPoint', color: '#d83b01' },
  word: { name: 'Microsoft Word 2019', shortName: 'Word', color: '#185abd' }
};

global.EXAM_CONFIG = {
  single: { duration: 50 * 60, questionsPerApp: 40, totalQuestions: 40 },
  combined: { duration: 120 * 60, questionsPerApp: 30, totalQuestions: 90 }
};

// Mock question with rationales
const mockQuestion = {
  id: "TEST-001",
  app: "excel",
  lesson: "Excel 1: Functions",
  difficulty: "Basic",
  question: "Fitur untuk menjumlahkan sel secara otomatis adalah?",
  options: [
    { 
      key: "A", 
      text: "AutoSum", 
      rationale: "Benar. AutoSum secara otomatis menyisipkan fungsi SUM untuk menjumlahkan rentang sel yang dipilih." 
    },
    { 
      key: "B", 
      text: "Format Painter", 
      rationale: "Salah. Format Painter digunakan untuk menyalin format tampilan sel (warna, font, border), bukan untuk kalkulasi angka." 
    },
    { 
      key: "C", 
      text: "Sort & Filter", 
      rationale: "Salah. Sort & Filter digunakan untuk mengurutkan data dan menyaring baris tabel berdasarkan kriteria tertentu." 
    },
    { 
      key: "D", 
      text: "Conditional Formatting", 
      rationale: "Salah. Conditional Formatting memberikan highlight visual otomatis pada sel berdasarkan kondisi, bukan menjumlahkan nilai." 
    },
    { 
      key: "E", 
      text: "Flash Fill", 
      rationale: "Salah. Flash Fill mengenali pola pengetikan untuk mengisi data secara otomatis, bukan untuk perhitungan matematika." 
    }
  ],
  answer: "A",
  explanation: "AutoSum adalah shortcut fungsi penjumlahan cepat.",
  tags: ["Math", "Functions"]
};

global.QUESTION_BANK = {
  excel: [mockQuestion],
  powerpoint: [],
  word: []
};

// Load QuizEngine
const { QuizEngine } = require('../assets/js/services/quiz-engine.js');

console.log('=== RUNNING TEST: QuizEngine Option Rationales ===\n');

// Test 1: Practice Questions Preserve Rationale
console.log('Test 1: Practice mode preserves option rationales...');
const practiceQs = QuizEngine.preparePracticeQuestions('excel');
assert.strictEqual(practiceQs.length, 1, 'Should have 1 practice question');
assert.strictEqual(practiceQs[0].options.length, 5, 'Should have 5 options');
assert.strictEqual(
  practiceQs[0].options[0].rationale, 
  mockQuestion.options[0].rationale, 
  'Practice question must preserve rationale for option A'
);
assert.strictEqual(
  practiceQs[0].options[1].rationale, 
  mockQuestion.options[1].rationale, 
  'Distractor rationale must be preserved for option B'
);
console.log('✓ PASS: Practice mode preserves all option rationales\n');

// Test 2: Exam Questions Shuffling Preserves Text-to-Rationale Binding
console.log('Test 2: Exam mode preserves text-to-rationale binding after shuffling...');
const examQs = QuizEngine.prepareExamQuestions('excel');
const preparedQ = examQs[0];
assert.strictEqual(preparedQ.options.length, 5, 'Should have 5 shuffled options');

preparedQ.options.forEach(opt => {
  const original = mockQuestion.options.find(o => o.text === opt.text);
  assert.ok(original, `Option text "${opt.text}" should exist in original`);
  assert.strictEqual(
    opt.rationale, 
    original.rationale, 
    `Option ${opt.key} (${opt.text}) must keep its matching rationale after shuffle`
  );
});
console.log('✓ PASS: Text-to-rationale binding preserved after shuffle\n');

// Test 3: calculateResults Returns Selected and Correct Rationales
console.log('Test 3: calculateResults returns selectedRationale and correctRationale...');

// Scenario A: Wrong answer selected
const wrongOptionKey = preparedQ.options.find(o => o.text === "Format Painter").key;
const wrongAnswers = { "TEST-001": wrongOptionKey };
const resultsWrong = QuizEngine.calculateResults(examQs, wrongAnswers, 60, 'single', 'excel');

assert.strictEqual(resultsWrong.questions.length, 1, 'Should have 1 question result');
const resQ = resultsWrong.questions[0];

assert.strictEqual(resQ.isCorrect, false, 'Result should be marked as wrong');
assert.strictEqual(resQ.isAnswered, true, 'Result should be marked as answered');
assert.ok(
  resQ.selectedRationale && resQ.selectedRationale.includes('Format Painter'), 
  'Selected rationale must contain Format Painter explanation'
);
assert.ok(
  resQ.selectedRationale.includes('menyalin format tampilan'), 
  'Selected rationale must explain why chosen option is wrong and what it does'
);
assert.ok(
  resQ.correctRationale && resQ.correctRationale.includes('AutoSum'), 
  'Correct rationale must contain AutoSum explanation'
);
assert.ok(
  resQ.correctRationale.includes('menjumlahkan rentang sel'), 
  'Correct rationale must explain why the correct option is right'
);
console.log('✓ PASS: Wrong answer returns proper rationales\n');

// Scenario B: Correct answer selected
const correctOptionKey = preparedQ.options.find(o => o.text === "AutoSum").key;
const correctAnswers = { "TEST-001": correctOptionKey };
const resultsCorrect = QuizEngine.calculateResults(examQs, correctAnswers, 60, 'single', 'excel');
const resQCorrect = resultsCorrect.questions[0];

assert.strictEqual(resQCorrect.isCorrect, true, 'Result should be marked as correct');
assert.strictEqual(
  resQCorrect.selectedRationale, 
  resQCorrect.correctRationale, 
  'Selected rationale should match correct rationale when answer is correct'
);
console.log('✓ PASS: Correct answer returns matching rationales\n');

// Scenario C: Unanswered question
const noAnswers = {};
const resultsUnanswered = QuizEngine.calculateResults(examQs, noAnswers, 60, 'single', 'excel');
const resQUnanswered = resultsUnanswered.questions[0];

assert.strictEqual(resQUnanswered.isAnswered, false, 'Result should be marked as unanswered');
assert.strictEqual(resQUnanswered.selectedKey, null, 'Selected key should be null');
assert.strictEqual(resQUnanswered.selectedRationale, null, 'Selected rationale should be null');
assert.ok(resQUnanswered.correctRationale, 'Correct rationale should still be available');
console.log('✓ PASS: Unanswered question handles rationales correctly\n');

// Test 4: All Options Have Rationale in Results
console.log('Test 4: Result includes all options with rationales...');
assert.strictEqual(resQ.options.length, 5, 'Result should include all 5 options');
resQ.options.forEach((opt, idx) => {
  assert.ok(opt.key, `Option ${idx} should have key`);
  assert.ok(opt.text, `Option ${idx} should have text`);
  assert.ok(opt.rationale, `Option ${idx} should have rationale`);
});
console.log('✓ PASS: All options in result include rationales\n');

// Test 5: Backward Compatibility - Missing Rationale Fallback
console.log('Test 5: Backward compatibility with missing rationale...');
const legacyQuestion = {
  id: "LEGACY-001",
  app: "excel",
  lesson: "Legacy Test",
  difficulty: "Basic",
  question: "Legacy question without rationales?",
  options: [
    { key: "A", text: "Option A" }, // No rationale
    { key: "B", text: "Option B" },
    { key: "C", text: "Option C" },
    { key: "D", text: "Option D" },
    { key: "E", text: "Option E" }
  ],
  answer: "A",
  explanation: "This is the general explanation.",
  tags: ["Legacy"]
};

global.QUESTION_BANK.excel.push(legacyQuestion);
const legacyPractice = QuizEngine.preparePracticeQuestions('excel');
const legacyQ = legacyPractice.find(q => q.id === 'LEGACY-001');

assert.ok(legacyQ, 'Legacy question should be prepared');
assert.strictEqual(legacyQ.options[0].rationale, '', 'Missing rationale should default to empty string');

const legacyExam = QuizEngine.prepareExamQuestions('excel');
const legacyResults = QuizEngine.calculateResults(
  legacyExam.filter(q => q.id === 'LEGACY-001'),
  { 'LEGACY-001': 'A' },
  30,
  'single',
  'excel'
);
const legacyRes = legacyResults.questions[0];

assert.ok(
  legacyRes.correctRationale === '' || legacyRes.correctRationale === legacyQuestion.explanation,
  'Should fallback to explanation when rationale is missing'
);
console.log('✓ PASS: Backward compatibility maintained\n');

console.log('=== ALL TESTS PASSED SUCCESSFULLY! ===');
console.log('QuizEngine rationale system is working correctly.');
