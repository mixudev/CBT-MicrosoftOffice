# Quiz Engine Specification

## Question Object

Setiap soal wajib mempunyai bentuk berikut:

```js
{
  id,
  app,
  lesson,
  difficulty,
  question,
  options: [
    { key, text },
    { key, text },
    { key, text },
    { key, text },
    { key, text }
  ],
  answer,
  explanation,
  tags
}
```

## ID Convention

- `EXCEL-001` sampai `EXCEL-040`
- `POWERPOINT-001` sampai `POWERPOINT-040`
- `WORD-001` sampai `WORD-040`

Total wajib: `120` soal.

## Rules

- tepat 5 opsi: A, B, C, D, E;
- hanya 1 jawaban benar;
- `answer` harus merujuk ke key yang benar;
- tidak ada duplicate question ID;
- tidak ada duplicate question text;
- tidak ada ambiguous answer;
- tidak ada dua opsi yang sama-sama benar;
- distribusi posisi jawaban benar harus divariasikan;
- jangan selalu B/C;
- jangan membuat distractor yang absurd atau terlalu mudah ditebak;
- hindari soal trivia yang tidak berkaitan dengan skill;
- utamakan scenario-based question;
- gunakan istilah UI yang familiar pada Office 2019.

## Exam Selection

Bank default sudah tepat 40 soal per aplikasi.

Implementation awal:

- gunakan seluruh 40 soal aplikasi tersebut;
- hanya randomisasi urutannya;
- jangan mengambil soal dari aplikasi lain.

## Practice Feedback

Setelah user memilih jawaban:

- tampilkan benar/salah;
- tampilkan jawaban benar;
- tampilkan explanation;
- tampilkan lesson;
- jangan menunggu submit seluruh quiz.

## Exam Feedback

Sebelum submit jangan tampilkan:

- correct answer;
- explanation;
- correct/wrong state.

Boleh menampilkan:

- selected answer;
- question number;
- question status;
- timer.
