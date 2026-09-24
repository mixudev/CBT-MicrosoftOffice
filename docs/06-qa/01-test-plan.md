# QA Test Plan

## Dashboard

Verifikasi:

- semua application card membuka flow yang benar;
- Practice button bekerja;
- Exam Simulation button bekerja;
- recent results bekerja;
- empty state muncul ketika histori belum ada.

## Practice Mode

Verifikasi:

- semua 40 soal dapat dibuka;
- jawaban dapat dipilih;
- feedback benar/salah sesuai answer key;
- explanation benar dan tampil;
- lesson tampil;
- next/previous bekerja;
- reset bekerja;
- tidak ada timer.

## Exam Mode

Verifikasi:

- tepat 40 soal;
- timer 50 menit;
- refresh tidak mereset waktu;
- warning 10/5/1 menit bekerja;
- auto-submit bekerja;
- manual submit bekerja;
- mark for review bekerja;
- question map sinkron;
- unanswered dihitung terpisah;
- correct answer tidak terlihat sebelum submit.

## Result

Verifikasi:

- score benar;
- correct count benar;
- wrong count benar;
- unanswered benar;
- percentage benar;
- lesson analysis benar;
- retry bekerja;
- review bekerja;
- dashboard history terisi.

## Storage

Verifikasi:

- result tersimpan;
- active exam tersimpan;
- refresh recovery bekerja;
- clear/reset bekerja;
- stale active exam ditangani.

## Responsive

Uji pada 1440, 1280, 1024, 768, 480, 360 px.

## Browser

Minimal:

- Chrome
- Edge
- Firefox

## Console

Tidak boleh ada:

- uncaught exception;
- failed module import;
- broken asset reference;
- invalid DOM manipulation;
- broken link.
