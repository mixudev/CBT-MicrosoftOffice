## Question Bank Schema & Quality Rules

## Originality & Attribution

Semua 120 soal adalah soal latihan original yang disusun berdasarkan materi modul.

Dilarang:

- menyalin langsung contoh soal modul;
- mengambil soal aktual Microsoft;
- mengklaim soal berasal dari TrustTrain;
- mengklaim soal ini adalah exam dump.

## Source Rules

Setiap soal harus dapat dijawab berdasarkan:

- `Modul Mahasiswa Office 2016.pdf`;
- fungsi Office 2019 yang ekuivalen ketika nama menu/UI perlu dinormalisasi.

Jangan memperluas scope menjadi fitur Office modern yang tidak relevan dengan modul.

## Schema Structure

Setiap soal memiliki struktur:

```javascript
{
  id: "EXCEL-001",
  app: "excel",
  lesson: "Excel 1: Interface",
  difficulty: "Basic",
  question: "Pertanyaan soal?",
  options: [
    { 
      key: "A", 
      text: "Opsi jawaban",
      rationale: "Benar/Salah. Penjelasan mengapa opsi ini benar/salah dan fungsi sebenarnya."
    },
    // ... 4 opsi lainnya (B, C, D, E)
  ],
  answer: "A",
  explanation: "Penjelasan umum untuk soal ini.",
  tags: ["Tag1", "Tag2"]
}
```

**Field `rationale` pada setiap opsi (A-E):**
- Untuk opsi BENAR: Jelaskan mengapa ini jawaban tepat sesuai fungsi Microsoft Office 2019.
- Untuk opsi SALAH (distractor): Jelaskan apa fungsi sebenarnya dari fitur tersebut di aplikasi Microsoft Office dan kenapa tidak sesuai dengan konteks soal ini.
- Bahasa Indonesia formal, edukatif, 50-150 karakter.
- Membantu pengguna memahami seluruh opsi, bukan hanya kunci jawaban.

## Quality Rules

1. Original.
2. Tidak ambigu.
3. Satu jawaban benar.
4. Lima opsi.
5. Konteks jelas.
6. Istilah Office 2019 familiar.
7. Utamakan scenario-based question.
8. Hindari trick wording.
9. Hindari terlalu banyak pertanyaan bertipe “yang bukan”.
10. Jangan gunakan “semua benar” atau “semua salah” kecuali benar-benar diperlukan.
11. Distractor harus masuk akal.
12. Variasikan posisi jawaban benar.
13. Jangan duplicate question text.
14. Jangan sekadar mengganti nama fitur dari soal lain.
15. Explanation harus informatif, singkat, dan original.
16. Setiap soal wajib memiliki `lesson`, `difficulty`, dan `tags` yang berguna untuk analytics.

## Office 2016 → Office 2019 Normalization

Bila istilah/menu berubah hanya karena versi UI tetapi fiturnya sama, gunakan istilah Office 2019.

Jangan menyatakan fitur berbeda sebagai sama hanya karena nama terlihat mirip.

## Required Coverage

Detail coverage ada pada tiga file question bank per aplikasi.
