# Timer Specification

## Durasi

Gunakan:

```js
const EXAM_DURATION = 50 * 60;
```

Artinya:

- 50 menit
- 3000 detik

Tampilkan format:

`49:59` → `00:00`

Label yang digunakan:

> Waktu simulasi mengikuti durasi ujian MOS Microsoft: 50 menit.

Tambahkan helper text:

> Rata-rata waktu: ±75 detik/soal

## Source of Truth

Jangan menjadikan counter `setInterval` sebagai sumber waktu utama.

Gunakan timestamp:

- `examStartedAt`
- `examEndsAt`

Perhitungan:

```js
remaining = examEndsAt - Date.now();
```

Interval hanya boleh dipakai untuk refresh tampilan.

## Lifecycle

1. User berada di halaman materi/dashboard → timer belum berjalan.
2. User menekan `Mulai Simulasi` → buat timestamp start/end.
3. Simpan timestamp ke `localStorage`.
4. Saat berpindah soal, gunakan timestamp yang sama.
5. Saat browser refresh, baca timestamp dan hitung ulang sisa waktu.
6. Saat tab inactive/browser lag, waktu tetap mengikuti timestamp nyata.
7. Saat sisa waktu `<= 0`, otomatis submit.

## Warning Threshold

- 10 menit: warning.
- 5 menit: warning lebih jelas.
- 1 menit: urgent warning.
- 0 detik: submit langsung.

Jangan memberi tambahan waktu otomatis.

## UX Rules

Exam Mode tidak memiliki tombol Pause.
Timer harus mempunyai `aria-label` yang bermakna.
Gunakan status visual + teks, bukan warna saja.
