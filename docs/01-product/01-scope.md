# Product Scope

## Nama Produk

Microsoft Office 2019 Practice Lab

## Posisi Produk

Website statis untuk latihan CBT mahasiswa berdasarkan materi `Modul Mahasiswa Office 2016.pdf` dengan target UI/function terminology Microsoft Office 2019.

Website bukan produk resmi Microsoft, Certiport, atau TrustTrain.

Semua soal adalah soal latihan original berdasarkan materi modul; jangan mengklaim sebagai soal aktual dari Microsoft atau TrustTrain.

## Tujuan

Website harus memungkinkan pengguna untuk:

- memilih Excel, PowerPoint, atau Word;
- memilih Practice Mode atau Exam Mode;
- mengerjakan 40 soal untuk satu aplikasi;
- menggunakan timer 50 menit pada Exam Mode;
- berpindah soal dan menandai soal untuk review;
- submit manual atau auto-submit saat waktu habis;
- melihat hasil dan pembahasan setelah submit;
- melihat topik yang perlu diulang;
- mengulang simulasi;
- menyimpan histori lokal menggunakan `localStorage`;
- menggunakan website tanpa login, backend, database, API, atau layanan eksternal.

## Deployment Target

Project harus dapat langsung digunakan pada:

- Vercel
- Netlify
- GitHub Pages
- shared hosting biasa

## Batasan

- Jangan gunakan backend.
- Jangan gunakan database.
- Jangan membutuhkan login.
- Jangan bergantung pada API untuk fungsi inti.
- Jangan memakai framework besar bila vanilla HTML/CSS/JS cukup.
- Jangan overengineering.
- Pecah file berdasarkan tanggung jawab dan hindari file yang terlalu besar.

## Terminologi

Gunakan label produk:

- `Practice Simulation`
- `Simulation Score`
- `Training Result`

Jangan memakai `Pass` / `Fail` sebagai hasil resmi Microsoft.

## Disclaimer Produk

Footer wajib memuat:

> Independent practice tool. Not affiliated with Microsoft, Certiport, or TrustTrain.

Dan jelaskan bahwa model ini adalah simulasi CBT berbasis pilihan ganda, sedangkan ujian MOS dapat memiliki komponen interaktif/praktik.
