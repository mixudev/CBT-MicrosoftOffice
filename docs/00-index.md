# Documentation Index — Microsoft Office 2019 Practice Lab

Dokumen ini menjadi peta kerja implementation agent. Semua requirement inti dipisahkan per domain agar dapat dikerjakan tanpa satu prompt raksasa.

## Urutan Baca yang Disarankan

1. `docs/01-product/01-scope.md`
2. `docs/01-product/02-modes.md`
3. `docs/02-functional/01-timer.md`
4. `docs/02-functional/02-quiz-engine.md`
5. `docs/02-functional/03-randomization-storage.md`
6. `docs/02-functional/04-results-review.md`
7. `docs/03-question-bank/01-schema-quality.md`
8. `docs/03-question-bank/02-excel.md`
9. `docs/03-question-bank/03-powerpoint.md`
10. `docs/03-question-bank/04-word.md`
11. `docs/04-ui/01-design-system.md`
12. `docs/04-ui/02-exam-interface.md`
13. `docs/04-ui/03-responsive-accessibility.md`
14. `docs/05-architecture/01-static-architecture.md`
15. `docs/06-qa/01-test-plan.md`
16. `docs/06-qa/02-validation-checklist.md`
17. `docs/07-honesty/01-security-disclaimer-readme.md`

## Source Material

Primary source:
`Modul Mahasiswa Office 2016.pdf`

Target practice environment:
Microsoft Office 2019.

## Authority

`MASTER_PROMPT.md` adalah instruksi orkestrasi untuk AI agent.
Dokumen di bawah `docs/` adalah spesifikasi implementasi yang harus dipatuhi agent.

## Prinsip

- Static-only.
- No backend, database, API, login, atau server-side dependency.
- Vanilla HTML + CSS + JavaScript menjadi default.
- Semua 120 soal wajib terimplementasi.
- Semua fungsi harus nyata, bukan mockup.
- Functionality lebih penting daripada dekorasi.
