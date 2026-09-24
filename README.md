# Microsoft Office 2019 Practice Lab

> **Platform Simulasi CBT Mandiri Microsoft Office 2019 (Excel, PowerPoint, Word)**  
> Berbasis Modul Mahasiswa Office 2016, diselaraskan dengan Standar Ujian Sertifikasi MOS (*Microsoft Office Specialist*).

![Static Badge](https://img.shields.io/badge/version-2.0-blue)
![Static Badge](https://img.shields.io/badge/platform-100%25%20static-brightgreen)
![Static Badge](https://img.shields.io/badge/questions-120-green)

---

## 🎯 Tujuan Aplikasi

Website ini dirancang sebagai platform latihan mandiri interaktif (*Practice Simulation*) bagi mahasiswa dan pembelajar yang akan mengikuti ujian berbasis CBT (*Computer-Based Testing*). Seluruh soal latihan disusun secara original berdasarkan silabus **Modul Mahasiswa Office 2016** dengan terminologi UI yang disesuaikan untuk **Microsoft Office 2019**.

---

## ✨ Fitur Utama

### 1. Bank Soal Lengkap (120 Soal)

| Aplikasi | Jumlah | Rentang ID |
|----------|--------|------------|
| Microsoft Excel 2019 | 40 soal | `EXCEL-001` – `EXCEL-040` |
| Microsoft PowerPoint 2019 | 40 soal | `POWERPOINT-001` – `POWERPOINT-040` |
| Microsoft Word 2019 | 40 soal | `WORD-001` – `WORD-040` |

Setiap soal dilengkapi **pembahasan** (*explanation*), **tag materi**, **tingkat kesulitan**, dan **kunci jawaban** — terverifikasi byte-identical terhadap bank soal asli.

### 2. 3 Mode Belajar

| Mode | Deskripsi |
|------|-----------|
| **Practice** | Latihan bebas tanpa timer. Feedback seketika, kunci jawaban, dan pembahasan lengkap. Progress tersimpan otomatis (bisa lanjut / restart). |
| **Exam (Simulasi)** | Simulasi ujian CBT resmi dengan timer countdown, pengacakan soal & opsi, peta soal, dan penandaan review. |
| **Review (Hasil)** | Analisis skor komprehensif, breakdown per aplikasi, identifikasi materi lemah (*Needs Review*), dan pembahasan interaktif. |

### 3. Exam Mode – Single & Combined

- **Single Exam**: 40 soal dari satu aplikasi dalam **50 menit**.
- **Combined Exam** *(standar MOS)*: **30 soal acak per aplikasi (90 soal total)** dalam **120 menit** — meniru format ujian sertifikasi Microsoft Office Specialist sesungguhnya.
- Setiap sesi: urutan soal **diacak**, urutan opsi **diacak** dengan remapping kunci jawaban otomatis.

### 4. Timer Cerdas (Timestamp-Based)

- Countdown berbasis *timestamp* — aman dari refresh, ganti tab, atau lag perangkat.
- Peringatan visual pada sisa **5 menit** dan **1 menit**.
- **Auto-submit** otomatis ketika waktu habis.
- Session recovery: ujian aktif bisa dilanjutkan setelah browser ditutup.

### 5. UX Modern & Responsif

- **Mobile-first**: peta soal menjadi *fullscreen drawer* dengan tombol FAB (Floating Action Button).
- **Desktop**: sidebar question map permanen.
- Navigasi keyboard: `←`/`→` pindah soal, `A–E`/`1–5` pilih jawaban, `M` tandai review.
- Semua dialog custom (bukan `alert()`/`confirm()` default browser).
- Ikon SVG inline & aset gambar — tanpa emoji di UI.
- Animasi halus: transisi soal, feedback jawaban, drawer slide.

### 6. Zero-Backend / Zero-Build

- 100% statis: HTML + CSS + JavaScript vanilla.
- Data tersimpan di `localStorage` (namespace `mos_practice_lab`).
- Tidak ada dependency, tidak perlu `npm install`, tidak ada build step.
- Siap offline maupun dihosting di mana saja.

---

## 🏗️ Arsitektur

```
/
├── index.html                # Dashboard & Riwayat Latihan
├── practice.html             # Mode Latihan (tanpa timer)
├── exam.html                 # Mode Simulasi Ujian (single/combined)
├── result.html               # Hasil & Analisis (tab: Ringkasan/Analisis/Review)
│
├── assets/
│   ├── css/
│   │   ├── tokens.css        # Design tokens (warna, spacing, radius, font)
│   │   ├── base.css          # Reset, utilitas responsif, tipografi
│   │   ├── components.css    # (legacy)
│   │   ├── app.css           # (legacy)
│   │   └── components/       # Modular: button, badge, card, option, timer,
│   │                         #   modal, result, exam-header, practice-feedback, animations
│   │
│   ├── js/
│   │   ├── core/
│   │   │   └── constants.js  # EXAM_CONFIG, APP_METADATA, APP_NAMES
│   │   ├── data/
│   │   │   ├── excel.js      # 40 soal Excel
│   │   │   ├── powerpoint.js # 40 soal PowerPoint
│   │   │   ├── word.js       # 40 soal Word
│   │   │   └── index.js      # QUESTION_BANK gabungan
│   │   ├── services/
│   │   │   ├── storage.js    # localStorage + session recovery
│   │   │   ├── timer.js      # countdown timestamp-based
│   │   │   └── quiz-engine.js# acak soal/opsi, penilaian, analisis topik
│   │   ├── components/
│   │   │   ├── icon.js       # sistem SVG icons
│   │   │   ├── ui.js         # modal/drawer helpers
│   │   │   └── modal-alert.js# custom alert/confirm
│   │   └── pages/
│   │       ├── dashboard.js  # controller beranda
│   │       ├── practice.js   # controller latihan
│   │       ├── exam.js       # controller ujian (mode-aware)
│   │       └── result.js     # controller hasil (tab + filter + accordion)
│   │
│   └── images/               # logo, app icons, SVG assets
│
├── docs/                     # Dokumentasi lengkap (arsitektur, UI, QA)
└── REFACTOR.md               # Riwayat refactor arsitektur
```

### Prinsip Modular

- **Satu file = satu tanggung jawab**
- Komponen UI reusable: `btn-text-full`/`btn-text-mobile` untuk responsive text, `buildQuestionCells` untuk peta soal (sidebar desktop + drawer mobile + practice + exam)
- Design tokens terpusat di `tokens.css`
- Tanpa god file: `exam.js` ~350 baris, semua file < 700 baris

---

## 🚀 Cara Menjalankan Secara Lokal

Murni statis, tanpa build step.

### Opsi 1: Buka Langsung di Browser

Double-click `index.html` di File Explorer.

### Opsi 2: Local Web Server

```bash
# Python
python -m http.server 3000

# Node
npx serve .
```

Buka `http://localhost:3000`.

---

## 🌐 Deploy ke Vercel

```bash
npx vercel --prod
```

Project sudah terhubung & terdeploy otomatis ke production:
**https://cbt-microsoft.vercel.app**

### Alternatif: GitHub Pages

1. Push repository ini ke GitHub.
2. **Settings** → **Pages** → *Source*: branch `main`, folder `/ (root)`.
3. Save — situs aktif dalam hitungan detik.

---

## ⌨️ Shortcut Keyboard

| Tombol | Aksi |
|--------|------|
| `←` / `→` | Navigasi soal sebelumnya / berikutnya |
| `A–E` atau `1–5` | Pilih jawaban |
| `M` | Tandai / hapus tanda review |

---

## 🧪 QA Ringkasan

- **120 soal** terverifikasi: semua ID unik, kunci jawaban valid, referensi materi ada.
- **159+ hasil uji** pada engine acak & penilaian (node assert).
- Seluruh JS lolos `node --check`.
- Diuji di Chrome/Edge desktop & viewport mobile (375px–1440px).

---

## ⚖️ Penafian Hukum & Etika

- **Independent Practice Tool**: Sarana latihan mandiri independen untuk edukasi. **TIDAK berafiliasi** dengan Microsoft Corporation, Certiport, maupun TrustTrain.
- Seluruh butir soal adalah **soal latihan original** untuk menguji pemahaman konsep — bukan naskah soal ujian sertifikasi komersial.
- Skor yang dihasilkan berlabel *Simulation Score* & *Training Result* sebagai panduan evaluasi belajar mandiri.

---

## 📄 Lisensi & Kepemilikan

Sumber materi utama: *Modul Mahasiswa Office 2016.pdf* & *MOS-2019-Module.pdf* (folder `docs/`).

Dibuat oleh **[mixudev](https://github.com/mixudev)** — gunakan untuk pembelajaran, hormati hak cipta materi sumber.