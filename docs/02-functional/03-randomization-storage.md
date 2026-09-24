# Randomization & Local Storage

## Randomization

Untuk setiap Exam Mode:

- ambil 40 soal dari bank aplikasi aktif;
- acak urutan pertanyaan;
- acak opsi jawaban;
- setelah opsi diacak, `answer` tetap harus menunjuk ke key yang benar;
- simpan original question ID;
- jangan mengubah isi pertanyaan;
- Practice Mode boleh menampilkan seluruh soal tanpa random selection.

Karena bank awal tepat 40 soal per aplikasi, randomisasi terutama berada pada urutan pertanyaan dan urutan opsi.

## Local Storage Namespace

Gunakan namespace:

`mos_practice_lab`

Struktur minimum:

```json
{
  "recentResults": [],
  "progress": {},
  "activeExam": {},
  "preferences": {}
}
```

## Active Exam

Simpan minimal:

- application
- mode
- questionOrder
- answers
- markedQuestions
- startedAt
- endsAt

Tidak perlu menyimpan answer key terpisah dalam object active exam bila source question bank sudah dapat di-resolve dengan question ID.

## Result History

Simpan:

- application
- mode
- submittedAt
- startedAt
- endsAt
- score
- correct
- wrong
- unanswered
- percentage
- timeUsed
- question order/answers bila diperlukan untuk review lokal

## Recovery

Saat halaman Exam dibuka:

- cek `activeExam`;
- bila active exam masih valid, restore state;
- bila `endsAt <= Date.now()`, submit otomatis;
- jangan membuat session baru hanya karena browser refresh.

## Reset / Clear

Sediakan jalur untuk:

- reset current practice;
- memulai simulation baru;
- clear local history bila fitur ini disediakan.

Pastikan operasi clear tidak meninggalkan state active exam yang stale.
