# Website Modes

## 1. Practice Mode

Karakteristik:

- Tidak menggunakan timer.
- User bebas berpindah soal.
- Feedback diberikan segera setelah jawaban dipilih.
- Tampilkan status benar/salah.
- Tampilkan jawaban benar.
- Tampilkan explanation.
- **Tampilkan rationale untuk opsi yang dipilih (mengapa salah & fungsi sebenarnya)**.
- **Tampilkan rationale untuk kunci jawaban (mengapa benar)**.
- **Opsi: Toggle untuk melihat bedah semua pilihan (A-E) beserta rationalenya**.
- Tampilkan lesson sumber.
- Sediakan reset jawaban.
- Hasil Practice Mode tidak boleh mengubah active Exam Mode.

Contoh feedback:

`✓ Jawaban Benar`

atau

`✕ Jawaban Salah`

Lalu:

- **Pilihan Anda: [X. Nama Fitur]** → Penjelasan mengapa keliru & fungsi aslinya
- **Kunci Jawaban: [Y. Nama Fitur]** → Penjelasan mengapa benar
- Pembahasan Umum
- Lesson
- Toggle: Bedah Semua Pilihan (A-E) → Rationale lengkap untuk setiap opsi

## 2. Exam Mode

Karakteristik:

- Tepat 40 soal untuk satu aplikasi.
- Timer 50 menit.
- Timer mulai hanya saat `Mulai Simulasi`.
- Tidak ada Pause.
- Jawaban, explanation, dan correct answer tidak boleh dibuka sebelum submit.
- User boleh maju/mundur.
- User boleh mark for review.
- Question Map harus sinkron.
- User boleh submit walaupun ada soal kosong.
- Auto submit saat timer mencapai `00:00`.

Status question map:

- `✓` Answered
- `?` Not Answered
- `★` Review

## 3. Review Mode

Setelah submit tampilkan:

- Simulation Score
- total correct
- total wrong
- unanswered
- percentage
- time used
- time remaining saat submit/manual
- semua pertanyaan
- jawaban user
- jawaban benar
- **rationale untuk jawaban yang dipilih user (jika salah: mengapa keliru)**
- **rationale untuk kunci jawaban (mengapa benar)**
- explanation
- lesson
- topic analysis
- **toggle: bedah semua pilihan (A-E) dengan rationale lengkap**

Action utama:

- `Review Again`
- `Back to Dashboard`
- `Try New Simulation`
