# Final Validation Checklist

Sebelum project dinyatakan selesai, lakukan audit berikut.

## Data Integrity

- [ ] Tidak ada duplicate question ID.
- [ ] Tidak ada duplicate question text.
- [ ] Setiap soal mempunyai 5 options.
- [ ] Setiap soal mempunyai tepat 1 correct answer.
- [ ] `answer` cocok dengan option key.
- [ ] Semua 40 Excel tersedia.
- [ ] Semua 40 PowerPoint tersedia.
- [ ] Semua 40 Word tersedia.
- [ ] Total 120 soal.
- [ ] ID mengikuti convention.

## Coverage

- [ ] Semua item coverage Excel ada.
- [ ] Semua item coverage PowerPoint ada.
- [ ] Semua item coverage Word ada.
- [ ] Lesson dan tags cukup untuk analytics.

## Functional

- [ ] Practice Mode berjalan.
- [ ] Exam Mode berjalan.
- [ ] Review Mode berjalan.
- [ ] Timer 50 menit benar.
- [ ] Timestamp recovery benar.
- [ ] Auto submit benar.
- [ ] Manual submit benar.
- [ ] Question map sinkron.
- [ ] Mark for Review benar.
- [ ] Unanswered benar.
- [ ] Score calculation benar.
- [ ] Topic analysis benar.
- [ ] Recent Results benar.
- [ ] localStorage recovery benar.

## Technical

- [ ] Tidak ada TODO.
- [ ] Tidak ada placeholder logic.
- [ ] Tidak ada fake timer.
- [ ] Tidak ada fake score.
- [ ] Tidak ada dummy question map.
- [ ] Tidak ada broken import.
- [ ] Tidak ada broken link.
- [ ] Tidak ada console error.
- [ ] Static deploy berhasil.

## UX

- [ ] Responsive pada semua target width.
- [ ] Keyboard navigation bekerja.
- [ ] Focus state jelas.
- [ ] Modal accessible.
- [ ] Timer/progress punya aria-label.
- [ ] Tidak ada horizontal overflow pada mobile.
