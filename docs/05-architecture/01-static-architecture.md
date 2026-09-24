# Static Architecture

## Prinsip

Gunakan arsitektur static sederhana.

Default stack:

- HTML
- CSS
- Vanilla JavaScript
- ES Modules bila membantu

Framework besar tidak dibutuhkan.

## Suggested Structure

```text
/
├── index.html
├── practice.html
├── exam.html
├── result.html
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── app.css
│   │   └── components.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── storage.js
│   │   ├── timer.js
│   │   ├── quiz-engine.js
│   │   ├── ui.js
│   │   └── questions.js
│   │
│   └── icons/
│
└── data/
    └── questions.js
```

Struktur ini boleh diperbaiki selama tanggung jawab tetap jelas.

## Modular Responsibilities

Pisahkan minimal concern berikut:

- storage state;
- timer;
- quiz engine;
- UI components/helpers;
- question data;
- page initialization.

Hindari copy-paste logic di banyak halaman.

## Runtime Constraint

Website harus dapat berjalan langsung sebagai static site.

Fungsi inti tidak boleh membutuhkan:

- PHP;
- Node server;
- database;
- REST API;
- authentication provider.

Build step hanya boleh digunakan bila opsional dan tidak menghilangkan kemampuan deploy static.
