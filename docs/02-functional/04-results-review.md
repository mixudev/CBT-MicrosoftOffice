# Results, Review & Insights

## Score Formula

```js
correct = jumlah jawaban benar
wrong = jumlah jawaban salah
unanswered = totalQuestions - answered
percentage = (correct / totalQuestions) * 100
```

Untuk 40 soal:

`1 soal = 2.5%`

Jangan membulatkan secara agresif sehingga total menjadi tidak konsisten.

Contoh:

`32 / 40 = 80%`

## Result Header

Contoh:

```text
Microsoft Excel 2019
Simulation Result

Score: 32 / 40
Percentage: 80%
Answered: 40
Correct: 32
Wrong: 8
Time Used: 38:42
Time Remaining: 11:18
```

## Topic Analysis

Gunakan `lesson` dan `tags` dari question bank.

Contoh:

```text
Pivot Table
4 mistakes

Formula & Function
2 mistakes

Chart
2 mistakes
```

Jangan gunakan ranking pengguna.

Gunakan label:

- `Strong Area`
- `Needs Review`
- `Practice Again`

## Lesson Breakdown

Contoh:

```text
Lesson 1 — 8 / 10
Lesson 2 — 7 / 10
Lesson 3 — 4 / 8
Lesson 4 — 6 / 7
Lesson 5 — 2 / 5
```

Angka harus dihitung dari hasil aktual.

## Review Item

Setiap item menampilkan:

- Question number
- Question text
- Jawaban Anda
- Jawaban Benar
- Status
- Pembahasan
- Lesson

Contoh struktur:

```text
Q01
Pertanyaan...

Jawaban Anda:
B. ...

Jawaban Benar:
C. ...

Status:
Salah

Pembahasan:
...

Lesson:
Excel 1.5
```

## Actions

- `Review Again`
- `Back to Dashboard`
- `Try New Simulation`

## Dashboard Recent Results

Tampilkan data `localStorage`, misalnya:

```text
Excel
80%
38:12
2 hours ago
```

Jika belum ada histori:

> Belum ada hasil latihan.
