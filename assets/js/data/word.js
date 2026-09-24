/**
 * Microsoft Word 2019 - Question Bank
 * Extracted verbatim from the master question bank.
 * Content is source-of-truth: DO NOT EDIT question, options, answers,
 * explanations, lessons, difficulty, or tags.
 */

const WORD_QUESTION_BANK = [
    {
      id: "WORD-001",
      app: "word",
      lesson: "Word 1: Interface & Fundamentals",
      difficulty: "Basic",
      question: "Tab yang terdapat pada Word, Excel, dan PowerPoint dan digunakan untuk perintah dasar seperti clipboard serta formatting adalah?",
      options: [
        { key: "A", text: "Home", rationale: "Benar. Tab Home adalah tab standar yang memuat fungsi dasar editing, clipboard, dan format teks di semua aplikasi Office." },
        { key: "B", text: "Data", rationale: "Salah. Tab Data adalah tab khusus di Microsoft Excel untuk pengolahan dan analisis data." },
        { key: "C", text: "Mailings", rationale: "Salah. Tab Mailings digunakan khusus di Microsoft Word untuk pembuatan surat massal (Mail Merge)." },
        { key: "D", text: "Formulas", rationale: "Salah. Tab Formulas adalah tab khusus di Microsoft Excel untuk fungsi dan kalkulasi rumus matematika." },
        { key: "E", text: "References", rationale: "Salah. Tab References digunakan di Word untuk catatan kaki, kutipan, dan daftar isi, bukan format dasar." }
      ],
      answer: "A",
      explanation: "Tab Home adalah tab utama yang seragam di seluruh aplikasi Office, memuat grup Clipboard, Font, Paragraph, dan Styles dasar.",
      tags: ["Ribbon", "Home Tab", "Interface"]
    },
    {
      id: "WORD-002",
      app: "word",
      lesson: "Word 1: Interface & Fundamentals",
      difficulty: "Basic",
      question: "View yang paling sesuai untuk melihat bentuk dokumen seperti hasil cetak adalah?",
      options: [
        { key: "A", text: "Draft", rationale: "Salah. Draft View menyederhanakan tampilan tanpa menampilkan batas halaman, header, atau footer fisik." },
        { key: "B", text: "Print Layout", rationale: "Benar. Print Layout menampilkan dokumen persis seperti tampilan saat dicetak di atas kertas fisik (WYSIWYG)." },
        { key: "C", text: "Web Layout", rationale: "Salah. Web Layout menampilkan dokumen seperti halaman web di peramban internet tanpa pembagian halaman." },
        { key: "D", text: "Outline", rationale: "Salah. Outline View menyajikan struktur hierarki heading dan poin dokumen tanpa tata letak halaman cetak." },
        { key: "E", text: "Reading", rationale: "Salah. Read Mode (Reading) mengoptimalkan tampilan untuk membaca di layar tanpa menampilkan margin cetak." }
      ],
      answer: "B",
      explanation: "Print Layout adalah tampilan default Word yang menampilkan dokumen persis seperti yang akan terlihat saat dicetak di atas kertas fisik (WYSIWYG).",
      tags: ["Views", "Print Layout"]
    },
    {
      id: "WORD-003",
      app: "word",
      lesson: "Word 1: Interface & Fundamentals",
      difficulty: "Basic",
      question: "Untuk membuat dokumen baru secara manual dapat menggunakan?",
      options: [
        { key: "A", text: "File > New", rationale: "Benar. Menu File > New membuka tampilan Backstage untuk membuat dokumen kosong baru atau memilih template." },
        { key: "B", text: "Review > New", rationale: "Salah. Tab Review digunakan untuk pemeriksaan ejaan, terjemahan, komentar, dan proteksi dokumen." },
        { key: "C", text: "View > New", rationale: "Salah. Tab View digunakan untuk mengatur mode tampilan, panel navigasi, dan tingkat pembesaran dokumen." },
        { key: "D", text: "References > New", rationale: "Salah. Tab References digunakan untuk mengelola referensi seperti footnote, kutipan, dan daftar pustaka." },
        { key: "E", text: "Mailings > New", rationale: "Salah. Tab Mailings digunakan untuk membuat dokumen massal seperti label, amplop, dan Mail Merge." }
      ],
      answer: "A",
      explanation: "Membuat dokumen kosong baru atau menggunakan template dilakukan melalui menu Backstage: File > New.",
      tags: ["New Document", "Backstage"]
    },
    {
      id: "WORD-004",
      app: "word",
      lesson: "Word 1: Interface & Fundamentals",
      difficulty: "Basic",
      question: "Template online Office membutuhkan apa?",
      options: [
        { key: "A", text: "Printer", rationale: "Salah. Printer adalah perangkat keras output cetak dan tidak dibutuhkan saat mencari template online." },
        { key: "B", text: "Internet", rationale: "Benar. Mengakses dan mengunduh katalog template online dari server Microsoft Office.com membutuhkan koneksi internet." },
        { key: "C", text: "Scanner", rationale: "Salah. Scanner digunakan untuk mendigitalkan dokumen fisik, bukan untuk mengunduh template online." },
        { key: "D", text: "Database", rationale: "Salah. Database tidak diwajibkan oleh pengguna akhir untuk sekadar memilih template dokumen Word." },
        { key: "E", text: "Outlook", rationale: "Salah. Outlook adalah aplikasi klien email dan kalender, tidak diperlukan untuk mengunduh template Word." }
      ],
      answer: "B",
      explanation: "Mengunduh dan mencari katalog template online dari repositori Office.com memerlukan koneksi jaringan internet yang aktif.",
      tags: ["Template", "Internet"]
    },
    {
      id: "WORD-005",
      app: "word",
      lesson: "Word 2: Document Structure & Outlines",
      difficulty: "Basic",
      question: "Fitur yang paling sesuai untuk membuat kerangka heading dan subheading dokumen adalah?",
      options: [
        { key: "A", text: "Outline View", rationale: "Benar. Outline View dirancang khusus untuk membuat kerangka naskah bertingkat dan mengelola level heading dokumen." },
        { key: "B", text: "Print Preview", rationale: "Salah. Print Preview menampilkan simulasi cetak halaman dokumen tanpa fitur pengelolaan struktur heading." },
        { key: "C", text: "Web Layout", rationale: "Salah. Web Layout menampilkan dokumen seperti tampilan halaman web, bukan untuk menyusun struktur bab." },
        { key: "D", text: "Table View", rationale: "Salah. Table View bukan nama mode tampilan resmi yang tersedia di Microsoft Word." },
        { key: "E", text: "Header View", rationale: "Salah. Header View bukan mode tampilan naskah; header diedit langsung di dalam Print Layout." }
      ],
      answer: "A",
      explanation: "Outline View di Word digunakan untuk menyusun kerangka dokumen bertingkat dan mengelola hierarki heading secara terstruktur.",
      tags: ["Outline View", "Document Structure"]
    },
    {
      id: "WORD-006",
      app: "word",
      lesson: "Word 2: Document Structure & Outlines",
      difficulty: "Basic",
      question: "Agar judul bab dapat digunakan sebagai struktur utama dalam dokumen dan TOC, style yang sesuai biasanya?",
      options: [
        { key: "A", text: "Normal", rationale: "Salah. Style Normal digunakan untuk teks isi paragraf umum, bukan untuk judul bab dokumen." },
        { key: "B", text: "Heading 1", rationale: "Benar. Heading 1 adalah gaya judul tingkat teratas yang otomatis dikenali oleh Table of Contents dan panel Navigasi." },
        { key: "C", text: "Subtitle", rationale: "Salah. Subtitle digunakan untuk subjudul deskriptif pelengkap judul utama di bawah Title." },
        { key: "D", text: "Caption", rationale: "Salah. Caption digunakan untuk memberi label nomor dan keterangan pada gambar atau tabel." },
        { key: "E", text: "Footer", rationale: "Salah. Footer adalah area margin bawah halaman untuk nomor halaman atau catatan pengarang." }
      ],
      answer: "B",
      explanation: "Heading 1 adalah gaya judul tingkat tertinggi yang secara otomatis dikenali oleh Table of Contents (Daftar Isi) dan panel Navigasi.",
      tags: ["Heading", "Styles", "TOC"]
    },
    {
      id: "WORD-007",
      app: "word",
      lesson: "Word 2: Document Structure & Outlines",
      difficulty: "Basic",
      question: "Pada Outline View, tombol Move Up/Down digunakan untuk?",
      options: [
        { key: "A", text: "Mengubah warna teks", rationale: "Salah. Tombol Move Up/Down pada Outlining tidak mempengaruhi warna atau atribut visual teks." },
        { key: "B", text: "Memindahkan posisi item dalam outline", rationale: "Benar. Move Up/Down memindahkan urutan posisi judul beserta seluruh teks atau sub-bab di bawahnya." },
        { key: "C", text: "Menghapus halaman", rationale: "Salah. Tombol ini hanya mengubah tata letak urutan hierarki, tidak menghapus halaman dokumen." },
        { key: "D", text: "Mengubah font", rationale: "Salah. Format jenis dan ukuran font diatur melalui grup Font di tab Home, bukan tombol Outlining." },
        { key: "E", text: "Membuat table", rationale: "Salah. Penyisipan tabel dilakukan melalui menu Insert > Table, bukan tombol navigasi Outline." }
      ],
      answer: "B",
      explanation: "Tombol Move Up dan Move Down pada ribbon Outlining memindahkan blok bab atau paragraf ke atas atau ke bawah beserta seluruh sub-isi di bawahnya.",
      tags: ["Outline View", "Move Up/Down"]
    },
    {
      id: "WORD-008",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Basic",
      question: "Fitur yang digunakan untuk membuat halaman judul secara otomatis adalah?",
      options: [
        { key: "A", text: "Cover Page", rationale: "Benar. Insert > Cover Page menyediakan galeri halaman sampul siap pakai lengkap dengan tata letak profesional." },
        { key: "B", text: "Page Number", rationale: "Salah. Page Number digunakan untuk menyisipkan penomoran halaman pada header atau footer." },
        { key: "C", text: "Header", rationale: "Salah. Header digunakan untuk menempatkan teks atau informasi statis di margin atas setiap halaman." },
        { key: "D", text: "Footnote", rationale: "Salah. Footnote menyisipkan catatan kaki referensi tambahan di bagian bawah halaman dokumen." },
        { key: "E", text: "Section Break", rationale: "Salah. Section Break membagi format dokumen menjadi beberapa bagian, bukan membuat sampul otomatis." }
      ],
      answer: "A",
      explanation: "Insert > Cover Page menyediakan galeri halaman sampul siap pakai yang diformat profesional lengkap dengan placeholder judul, penulis, dan tanggal.",
      tags: ["Cover Page", "Insert"]
    },
    {
      id: "WORD-009",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Basic",
      question: "Untuk memulai halaman baru tanpa membuat section baru gunakan?",
      options: [
        { key: "A", text: "Page Break", rationale: "Benar. Page Break (Ctrl+Enter) memindahkan kursor langsung ke awal halaman baru dalam satu section yang sama." },
        { key: "B", text: "Section Break", rationale: "Salah. Section Break memisahkan halaman sekaligus membuat bagian dokumen baru dengan pengaturan berbeda." },
        { key: "C", text: "Column Break", rationale: "Salah. Column Break memindahkan teks ke kolom koran berikutnya dalam halaman yang sama." },
        { key: "D", text: "Line Break", rationale: "Salah. Line Break (Shift+Enter) membuat baris baru tanpa mengakhiri paragraf atau berpindah halaman." },
        { key: "E", text: "Wrap Text", rationale: "Salah. Wrap Text mengatur perataan teks di sekitar objek gambar, bukan memisahkan halaman." }
      ],
      answer: "A",
      explanation: "Page Break (Ctrl + Enter) mendorong kursor ke awal halaman berikutnya namun tetap berada dalam section dokumen yang sama.",
      tags: ["Page Break", "Breaks"]
    },
    {
      id: "WORD-010",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Intermediate",
      question: "Jika bagian dokumen harus mempunyai header berbeda dari bagian sebelumnya, fitur yang paling penting adalah?",
      options: [
        { key: "A", text: "Page Break", rationale: "Salah. Page Break hanya memindahkan teks ke halaman baru tanpa memisahkan keterkaitan format header." },
        { key: "B", text: "Section Break", rationale: "Benar. Section Break memungkinkan setiap bagian dokumen memiliki konfigurasi margin, orientasi, atau header berbeda." },
        { key: "C", text: "WordArt", rationale: "Salah. WordArt adalah fitur tipografi dekoratif artistik, bukan pemisah struktur halaman dokumen." },
        { key: "D", text: "Drop Cap", rationale: "Salah. Drop Cap memperbesar huruf pertama paragraf, tidak berkaitan dengan pemisahan header halaman." },
        { key: "E", text: "Caption", rationale: "Salah. Caption memberikan keterangan teks penjelas pada gambar atau tabel di dokumen." }
      ],
      answer: "B",
      explanation: "Section Break membagi dokumen menjadi bagian-bagian terpisah yang memungkinkan konfigurasi margin, orientasi, atau header/footer yang berbeda.",
      tags: ["Section Break", "Header"]
    },
    {
      id: "WORD-011",
      app: "word",
      lesson: "Word 1: Interface & Fundamentals",
      difficulty: "Basic",
      question: "Fitur Show/Hide digunakan untuk menampilkan?",
      options: [
        { key: "A", text: "Semua hidden files", rationale: "Salah. Fitur Show/Hide di Word tidak menampilkan file tersembunyi pada sistem operasi komputer." },
        { key: "B", text: "Tanda format seperti paragraph marks dan spasi", rationale: "Benar. Tombol Show/Hide (¶) menampilkan simbol format tersembunyi seperti tanda spasi, tab, dan jeda paragraf." },
        { key: "C", text: "Semua gambar", rationale: "Salah. Objek gambar tampil secara visual di dokumen dan tidak dikontrol oleh tombol Show/Hide tanda format." },
        { key: "D", text: "Semua chart", rationale: "Salah. Objek grafik/chart selalu tampil di layar dan tidak disembunyikan oleh tombol tanda format." },
        { key: "E", text: "Semua hyperlink", rationale: "Salah. Hyperlink ditampilkan sebagai teks bergaris bawah berwarna, bukan karakter non-cetak Show/Hide." }
      ],
      answer: "B",
      explanation: "Tombol Show/Hide (ikon Pilcrow ¶) menampilkan simbol format non-cetak seperti tanda spasi (titik), jeda paragraf, tab, dan jeda halaman.",
      tags: ["Show/Hide", "Formatting Marks"]
    },
    {
      id: "WORD-012",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Basic",
      question: "Untuk membuat teks menjadi beberapa kolom seperti koran gunakan?",
      options: [
        { key: "A", text: "Margins", rationale: "Salah. Margins mengatur jarak batas tepi antara teks dokumen dengan pinggiran kertas." },
        { key: "B", text: "Orientation", rationale: "Salah. Orientation mengatur arah kertas dokumen antara Portrait (tegak) atau Landscape (mendatar)." },
        { key: "C", text: "Columns", rationale: "Benar. Layout > Columns membagi aliran teks menjadi 2, 3, atau lebih kolom sejajar seperti surat kabar." },
        { key: "D", text: "Size", rationale: "Salah. Size menentukan dimensi ukuran kertas dokumen seperti A4, Letter, atau Legal." },
        { key: "E", text: "Breaks", rationale: "Salah. Breaks menyisipkan pemisah halaman, kolom, atau section pada dokumen." }
      ],
      answer: "C",
      explanation: "Menu Layout > Columns membagi aliran teks menjadi 2, 3 kolom atau lebih seperti tata letak artikel surat kabar atau majalah.",
      tags: ["Columns", "Page Layout"]
    },
    {
      id: "WORD-013",
      app: "word",
      lesson: "Word 4: Typography & Formatting",
      difficulty: "Basic",
      question: "Untuk membuat huruf pertama pada paragraf menjadi lebih besar digunakan?",
      options: [
        { key: "A", text: "Drop Cap", rationale: "Benar. Drop Cap (Insert > Drop Cap) memperbesar huruf kapital pertama paragraf hingga menjuntai beberapa baris." },
        { key: "B", text: "WordArt", rationale: "Salah. WordArt membuat teks artistik dekoratif mandiri, bukan mengubah huruf awal paragraf." },
        { key: "C", text: "Initial Font", rationale: "Salah. Initial Font bukan nama fitur pemformatan huruf awal paragraf di Microsoft Word." },
        { key: "D", text: "Large Character", rationale: "Salah. Large Character bukan istilah resmi fitur tipografi awal paragraf di Microsoft Word." },
        { key: "E", text: "Grow Font", rationale: "Salah. Grow Font (Increase Font Size) memperbesar seluruh teks yang diseleksi, bukan membuat gaya Drop Cap." }
      ],
      answer: "A",
      explanation: "Drop Cap (Insert > Drop Cap) memperbesar huruf kapital awal suatu paragraf sehingga menjuntai beberapa baris ke bawah.",
      tags: ["Drop Cap", "Typography"]
    },
    {
      id: "WORD-014",
      app: "word",
      lesson: "Word 4: Typography & Formatting",
      difficulty: "Basic",
      question: "Untuk membuat paragraf rata kiri dan kanan gunakan?",
      options: [
        { key: "A", text: "Align Left", rationale: "Salah. Align Left (Ctrl+L) hanya meratakan teks di batas tepi kiri dokumen dengan tepi kanan tidak rata." },
        { key: "B", text: "Center", rationale: "Salah. Center (Ctrl+E) memposisikan baris teks tepat di tengah bidang antara margin kiri dan kanan." },
        { key: "C", text: "Align Right", rationale: "Salah. Align Right (Ctrl+R) meratakan teks di batas tepi kanan dengan tepi kiri tidak rata." },
        { key: "D", text: "Justify", rationale: "Benar. Justify (Ctrl+J) menyesuaikan spasi antar kata sehingga kedua sisi margin (kiri dan kanan) rata rapi." },
        { key: "E", text: "Distributed", rationale: "Salah. Distributed meratakan huruf dalam kata secara merata ke seluruh lebar baris, bukan spasi kata standar." }
      ],
      answer: "D",
      explanation: "Justify (Ctrl + J) meratakan margin teks di sisi kiri sekaligus di sisi kanan paragraf dengan menyesuaikan spasi antar kata.",
      tags: ["Justify", "Paragraph"]
    },
    {
      id: "WORD-015",
      app: "word",
      lesson: "Word 4: Typography & Formatting",
      difficulty: "Basic",
      question: "Untuk menaikkan posisi karakter seperti “th” pada 20th gunakan?",
      options: [
        { key: "A", text: "Subscript", rationale: "Salah. Subscript mengecilkan dan menurunkan posisi karakter ke bawah garis teks normal." },
        { key: "B", text: "Superscript", rationale: "Benar. Superscript (Ctrl+Shift++) mengecilkan dan menaikkan posisi huruf di atas garis dasar teks normal." },
        { key: "C", text: "Drop Cap", rationale: "Salah. Drop Cap memperbesar huruf pertama paragraf, bukan menaikkan posisi karakter ordinal penulisan." },
        { key: "D", text: "Small Caps", rationale: "Salah. Small Caps memformat huruf kecil menjadi huruf kapital berukuran lebih mungil." },
        { key: "E", text: "Italic", rationale: "Salah. Italic memiringkan bentuk huruf font tanpa mengubah ketinggian posisi karakternya." }
      ],
      answer: "B",
      explanation: "Superscript (Ctrl + Shift + +) mengecilkan ukuran karakter dan menaikkannya di atas garis dasar teks normal (misalnya 20th atau X²).",
      tags: ["Superscript", "Font Effects"]
    },
    {
      id: "WORD-016",
      app: "word",
      lesson: "Word 4: Typography & Formatting",
      difficulty: "Basic",
      question: "Untuk menurunkan posisi karakter seperti rumus kimia H₂O gunakan?",
      options: [
        { key: "A", text: "Superscript", rationale: "Salah. Superscript menaikkan karakter ke atas garis dasar, seperti penulisan kuadrat matematika (X²)." },
        { key: "B", text: "Subscript", rationale: "Benar. Subscript (Ctrl+=) mengecilkan dan menurunkan posisi karakter di bawah garis dasar teks normal (H₂O)." },
        { key: "C", text: "Drop Cap", rationale: "Salah. Drop Cap memperbesar huruf awal paragraf, bukan merendahkan karakter rumus kimia." },
        { key: "D", text: "Underline", rationale: "Salah. Underline menambahkan garis horizontal di bawah karakter teks, bukan menurunkan posisi karakter." },
        { key: "E", text: "All Caps", rationale: "Salah. All Caps mengubah semua karakter menjadi huruf kapital tanpa menurunkan posisi karakter." }
      ],
      answer: "B",
      explanation: "Subscript (Ctrl + =) mengecilkan ukuran karakter dan menurunkannya di bawah garis dasar teks normal (misalnya H₂O).",
      tags: ["Subscript", "Font Effects"]
    },
    {
      id: "WORD-017",
      app: "word",
      lesson: "Word 4: Lists & Indents",
      difficulty: "Basic",
      question: "Untuk membuat daftar dengan simbol bullet gunakan?",
      options: [
        { key: "A", text: "Bullets", rationale: "Benar. Bullets membuat daftar poin tak berurutan yang diawali simbol grafis seperti lingkaran atau tanda centang." },
        { key: "B", text: "Numbering", rationale: "Salah. Numbering membuat daftar urutan yang diawali oleh angka numerik atau huruf alfabetis." },
        { key: "C", text: "Multilevel List", rationale: "Salah. Multilevel List membuat daftar hierarkis bertingkat dengan penomoran atau simbol bersarang." },
        { key: "D", text: "Caption", rationale: "Salah. Caption memberikan judul penjelas bernomor pada objek gambar atau tabel." },
        { key: "E", text: "Styles", rationale: "Salah. Styles menerapkan sekumpulan kombinasi format font dan paragraf yang telah ditentukan." }
      ],
      answer: "A",
      explanation: "Fitur Bullets pada tab Home membuat daftar tak berurut yang ditandai dengan lingkaran, kotak, atau simbol grafis lainnya.",
      tags: ["Bullets", "Lists"]
    },
    {
      id: "WORD-018",
      app: "word",
      lesson: "Word 4: Lists & Indents",
      difficulty: "Basic",
      question: "Untuk membuat daftar dengan angka 1, 2, 3 dan seterusnya gunakan?",
      options: [
        { key: "A", text: "Bullets", rationale: "Salah. Bullets menggunakan simbol grafis seperti titik atau kotak, bukan angka berurutan." },
        { key: "B", text: "Numbering", rationale: "Benar. Numbering menyusun daftar berurutan secara otomatis menggunakan angka Arab, Romawi, atau alfabet." },
        { key: "C", text: "SmartArt", rationale: "Salah. SmartArt membuat diagram konsep visual, bukan penomoran daftar poin teks sederhana." },
        { key: "D", text: "List Picture", rationale: "Salah. List Picture bukan fitur standar pembuatan daftar penomoran angka di Microsoft Word." },
        { key: "E", text: "Caption", rationale: "Salah. Caption digunakan untuk memberi label nomor dan deskripsi pada gambar atau tabel." }
      ],
      answer: "B",
      explanation: "Fitur Numbering menyusun daftar berurutan dengan penomoran angka Arab, angka Romawi, ataupun alfabetis.",
      tags: ["Numbering", "Lists"]
    },
    {
      id: "WORD-019",
      app: "word",
      lesson: "Word 4: Lists & Indents",
      difficulty: "Intermediate",
      question: "Untuk membuat struktur daftar bertingkat seperti 1, a, i digunakan?",
      options: [
        { key: "A", text: "Multilevel List", rationale: "Benar. Multilevel List mengorganisasi daftar ke dalam beberapa tingkat hierarki bertingkat (misalnya 1, a, i)." },
        { key: "B", text: "Single List", rationale: "Salah. Single List bukan istilah fitur resmi Microsoft Word untuk pembuatan daftar hierarkis." },
        { key: "C", text: "Page Number", rationale: "Salah. Page Number menyisipkan nomor halaman pada header atau footer dokumen." },
        { key: "D", text: "Footnote", rationale: "Salah. Footnote menyisipkan catatan kaki penjelasan di bagian dasar halaman dokumen." },
        { key: "E", text: "Columns", rationale: "Salah. Columns membagi tata letak halaman naskah menjadi beberapa kolom koran vertikal." }
      ],
      answer: "A",
      explanation: "Multilevel List mengorganisasi daftar ke dalam berbagai tingkat hierarki bersarang (nested list) dengan format penomoran berbeda di setiap level.",
      tags: ["Multilevel List", "Lists"]
    },
    {
      id: "WORD-020",
      app: "word",
      lesson: "Word 4: Lists & Indents",
      difficulty: "Intermediate",
      question: "Untuk membuat bullet menggunakan gambar tertentu digunakan?",
      options: [
        { key: "A", text: "Define New Bullet", rationale: "Benar. Define New Bullet memungkinkan pemilihan ikon gambar kustom (Picture) sebagai simbol penanda poin." },
        { key: "B", text: "New Picture Style", rationale: "Salah. New Picture Style bukan perintah untuk membuat simbol bullet kustom berbentuk gambar." },
        { key: "C", text: "Insert Picture List", rationale: "Salah. Insert Picture List bukan menu pembuatan bullet bergambar di Microsoft Word." },
        { key: "D", text: "Picture Caption", rationale: "Salah. Picture Caption memberikan teks keterangan di bawah gambar, bukan membuat bullet list." },
        { key: "E", text: "Custom Icon", rationale: "Salah. Custom Icon bukan nama menu resmi untuk mengubah bullet menjadi gambar di Word." }
      ],
      answer: "A",
      explanation: "Melalui dropdown Bullets > 'Define New Bullet...', pengguna dapat memilih opsi Picture untuk menjadikan file gambar sebagai ikon simbol poin.",
      tags: ["Define New Bullet", "Lists"]
    },
    {
      id: "WORD-021",
      app: "word",
      lesson: "Word 4: Typography & Formatting",
      difficulty: "Basic",
      question: "Untuk membuat jarak antar baris menjadi 1.5 lines gunakan?",
      options: [
        { key: "A", text: "Font Spacing", rationale: "Salah. Font Spacing bukan opsi standar jarak baris di tab Home Microsoft Word." },
        { key: "B", text: "Line and Paragraph Spacing", rationale: "Benar. Tombol Line and Paragraph Spacing mengatur jarak spasi vertikal antar baris kalimat (misal 1.5 baris)." },
        { key: "C", text: "Character Spacing", rationale: "Salah. Character Spacing mengatur jarak kerapatan horizontal antar huruf dalam satu kata." },
        { key: "D", text: "Page Size", rationale: "Salah. Page Size mengatur ukuran dimensi lembar kertas dokumen kerja (misal A4 atau Letter)." },
        { key: "E", text: "Margins", rationale: "Salah. Margins mengatur jarak ruang kosong antara tepi kertas dengan batas teks naskah." }
      ],
      answer: "B",
      explanation: "Line and Paragraph Spacing pada tab Home mengatur jarak vertikal antar baris teks (seperti 1.0, 1.15, 1.5, atau 2.0).",
      tags: ["Line Spacing", "Paragraph"]
    },
    {
      id: "WORD-022",
      app: "word",
      lesson: "Word 5: References & Citations",
      difficulty: "Basic",
      question: "Catatan yang biasanya muncul di bagian bawah halaman disebut?",
      options: [
        { key: "A", text: "Header", rationale: "Salah. Header terletak di area margin paling atas halaman dokumen dan berulang secara otomatis." },
        { key: "B", text: "Footer", rationale: "Salah. Footer terletak di margin bawah tetapi berisi informasi umum berulang, bukan catatan referensi bernomor." },
        { key: "C", text: "Footnote", rationale: "Benar. Footnote (Catatan Kaki) disisipkan di bagian bawah halaman spesifik tempat tanda rujukan berada." },
        { key: "D", text: "Caption", rationale: "Salah. Caption adalah teks label singkat yang diletakkan di bawah gambar atau tabel penjelas." },
        { key: "E", text: "Citation", rationale: "Salah. Citation adalah teks sumber singkat di dalam kalimat (misal nama pengarang dan tahun)." }
      ],
      answer: "C",
      explanation: "Footnote (Catatan Kaki) disisipkan melalui tab References dan dicetak di bagian paling bawah halaman tempat nomor referensi berada.",
      tags: ["Footnote", "References"]
    },
    {
      id: "WORD-023",
      app: "word",
      lesson: "Word 5: References & Citations",
      difficulty: "Basic",
      question: "Jika ingin menyisipkan kutipan dari sumber tertentu gunakan?",
      options: [
        { key: "A", text: "Citation", rationale: "Benar. Insert Citation menyisipkan rujukan kutipan akademis langsung ke dalam teks sesuai gaya bibliografi." },
        { key: "B", text: "Footer", rationale: "Salah. Footer adalah area margin bawah untuk informasi statis umum, bukan format kutipan sitasi ilmiah." },
        { key: "C", text: "Drop Cap", rationale: "Salah. Drop Cap adalah gaya tipografi memperbesar huruf awal paragraf, bukan kutipan sitasi sumber." },
        { key: "D", text: "Caption", rationale: "Salah. Caption digunakan untuk menamai dan memberi nomor urut gambar atau tabel naskah." },
        { key: "E", text: "Bookmark", rationale: "Salah. Bookmark memberi penanda lokasi tertentu dalam dokumen untuk navigasi pintas internal." }
      ],
      answer: "A",
      explanation: "Fitur Insert Citation (tab References) memasukkan rujukan kutipan akademis (seperti format APA atau IEEE) dari daftar sumber yang dikelola.",
      tags: ["Citation", "References"]
    },
    {
      id: "WORD-024",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Basic",
      question: "Bagan dapat dimasukkan secara langsung ke Word melalui?",
      options: [
        { key: "A", text: "Insert > Chart", rationale: "Benar. Menu Insert > Chart menyisipkan grafik data numerik yang terintegrasi dengan spreadsheet pengolah angka." },
        { key: "B", text: "Review > Chart", rationale: "Salah. Tab Review digunakan untuk alat pemeriksaan naskah dan komentar, bukan menyisipkan grafik." },
        { key: "C", text: "View > Chart", rationale: "Salah. Tab View mengatur mode tampilan dokumen dan pembesaran, bukan membuat bagan visual." },
        { key: "D", text: "References > Chart", rationale: "Salah. Tab References digunakan untuk sitasi, daftar pustaka, dan daftar isi, bukan bagan grafik." },
        { key: "E", text: "Mailings > Chart", rationale: "Salah. Tab Mailings digunakan khusus untuk pencetakan dokumen massal (Mail Merge), bukan grafik." }
      ],
      answer: "A",
      explanation: "Grafik/bagan disisipkan ke dalam dokumen Word secara langsung melalui tab Insert > Chart.",
      tags: ["Chart", "Insert"]
    },
    {
      id: "WORD-025",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Intermediate",
      question: "Untuk memutar 3D Pie Chart pada Word digunakan?",
      options: [
        { key: "A", text: "Point Explosion", rationale: "Salah. Point Explosion memisahkan potongan irisan grafik pie keluar dari pusat lingkaran, bukan merotasi sudut." },
        { key: "B", text: "3D Rotation", rationale: "Benar. 3D Rotation pada Chart Tools memutar sudut kemiringan perspektif grafik lingkaran tiga dimensi." },
        { key: "C", text: "Caption", rationale: "Salah. Caption memberi label keterangan pada objek gambar atau bagan, bukan mengatur perputaran sudut grafik." },
        { key: "D", text: "Wrap Text", rationale: "Salah. Wrap Text mengatur perataan teks naskah di sekitar batas tepi objek grafik pada halaman." },
        { key: "E", text: "Recolor", rationale: "Salah. Recolor mengubah skema warna grafik atau gambar, bukan memutar orientasi ruang tiga dimensi." }
      ],
      answer: "B",
      explanation: "Format 3D Rotation pada Chart Tools memungkinkan rotasi sudut pandang grafik lingkaran tiga dimensi sesuai sudut rotasi X dan Y yang diinginkan.",
      tags: ["3D Rotation", "Chart"]
    },
    {
      id: "WORD-026",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Basic",
      question: "Untuk membuat struktur data berbentuk baris dan kolom digunakan?",
      options: [
        { key: "A", text: "Table", rationale: "Benar. Table menyusun informasi dalam bentuk kisi-kisi sel terstruktur yang terdiri dari baris dan kolom." },
        { key: "B", text: "WordArt", rationale: "Salah. WordArt adalah teks artistik dekoratif, bukan representasi data baris dan kolom tabular." },
        { key: "C", text: "SmartArt", rationale: "Salah. SmartArt menyajikan diagram visual hubungan konsep, bukan tabel data kisi-kisi sel murni." },
        { key: "D", text: "Footnote", rationale: "Salah. Footnote adalah catatan kaki rujukan di bagian bawah halaman, bukan tabel baris dan kolom." },
        { key: "E", text: "Caption", rationale: "Salah. Caption adalah label teks penjelas di bawah objek visual, bukan struktur data berbaris dan berkolom." }
      ],
      answer: "A",
      explanation: "Table (Tabel) adalah kisi-kisi yang terdiri dari sel yang disusun dalam baris horizontal dan kolom vertikal untuk merapikan informasi tabular.",
      tags: ["Table", "Insert"]
    },
    {
      id: "WORD-027",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Basic",
      question: "Fitur untuk mempercantik teks dengan gaya visual khusus adalah?",
      options: [
        { key: "A", text: "SmartArt", rationale: "Salah. SmartArt digunakan untuk membuat diagram alur konsep atau struktur organisasi visual." },
        { key: "B", text: "WordArt", rationale: "Benar. WordArt menerapkan efek tipografi artistik seperti bayangan, pantulan, kontur 3D, dan lengkungan teks." },
        { key: "C", text: "Picture", rationale: "Salah. Picture menyisipkan file gambar ilustrasi atau foto ke dalam dokumen kerja Word." },
        { key: "D", text: "Caption", rationale: "Salah. Caption memberikan keterangan judul bernomor pada objek ilustrasi atau tabel naskah." },
        { key: "E", text: "Bibliography", rationale: "Salah. Bibliography adalah daftar referensi kepustakaan di bagian akhir karya tulis ilmiah." }
      ],
      answer: "B",
      explanation: "WordArt adalah galeri gaya teks dekoratif yang menerapkan efek bayangan, lengkungan, gradien, dan kontur 3D artistik.",
      tags: ["WordArt", "Text Visuals"]
    },
    {
      id: "WORD-028",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Intermediate",
      question: "Ketika gambar pertama kali dimasukkan ke dokumen Word, Wrap Text default yang umum adalah?",
      options: [
        { key: "A", text: "Square", rationale: "Salah. Square membuat teks mengalir rapi membungkus kotak pembatas persegi di sekeliling gambar." },
        { key: "B", text: "Tight", rationale: "Salah. Tight membuat teks mengalir sangat rapat mengikuti kontur lekukan bentuk asli gambar transparan." },
        { key: "C", text: "In Front of Text", rationale: "Salah. In Front of Text menempatkan gambar melayang bebas di atas teks naskah dokumen." },
        { key: "D", text: "Behind Text", rationale: "Salah. Behind Text menempatkan gambar melayang di bawah teks naskah seperti watermark latar belakang." },
        { key: "E", text: "In Line with Text", rationale: "Benar. Nilai bawaan (default) gambar di Word adalah In Line with Text, diperlakukan sejajar sebagai karakter teks." }
      ],
      answer: "E",
      explanation: "Secara default gambar diperlakukan sebagai satu karakter teks besar sejajar dengan teks lainnya (In Line with Text).",
      tags: ["Wrap Text", "In Line with Text"]
    },
    {
      id: "WORD-029",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Basic",
      question: "Jika gambar harus berada di atas tulisan, Wrap Text yang tepat adalah?",
      options: [
        { key: "A", text: "In Line with Text", rationale: "Salah. In Line with Text meletakkan gambar sejajar di dalam baris kalimat teks naskah." },
        { key: "B", text: "Square", rationale: "Salah. Square membuat teks mengelilingi batas sisi luar kotak gambar secara teratur." },
        { key: "C", text: "Behind Text", rationale: "Salah. Behind Text menempatkan gambar di lapisan belakang sehingga tertimpa tulisan naskah." },
        { key: "D", text: "In Front of Text", rationale: "Benar. In Front of Text membuat gambar berada melayang di lapisan paling atas menutupi tulisan di bawahnya." },
        { key: "E", text: "Tight", rationale: "Salah. Tight mengalirkan teks naskah rapat mengikuti kontur objek tanpa menimpa tulisan." }
      ],
      answer: "D",
      explanation: "Pilihan 'In Front of Text' menempatkan gambar melayang di atas teks dokumen tanpa mempengaruhi aliran tata letak teks di bawahnya.",
      tags: ["Wrap Text", "In Front of Text"]
    },
    {
      id: "WORD-030",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Intermediate",
      question: "Untuk menghapus latar belakang putih dari sebuah gambar tanda tangan digunakan?",
      options: [
        { key: "A", text: "Remove Background", rationale: "Benar. Remove Background secara otomatis mendeteksi dan mengisolasi latar belakang foto agar menjadi transparan." },
        { key: "B", text: "Crop", rationale: "Salah. Crop memotong area bingkai luar gambar, tidak mampu menghapus latar belakang putih di sela tanda tangan." },
        { key: "C", text: "Correction", rationale: "Salah. Correction mengatur kecerahan dan ketajaman gambar, bukan menghapus latar belakang gambar." },
        { key: "D", text: "Recolor", rationale: "Salah. Recolor memberi filter perubahan nuansa warna menyeluruh pada gambar, bukan menghapus background." },
        { key: "E", text: "Transparency Lock", rationale: "Salah. Transparency Lock bukan nama fitur standar pengolahan gambar di Microsoft Word." }
      ],
      answer: "A",
      explanation: "Fitur Remove Background secara otomatis mendeteksi dan menghapus latar belakang gambar sehingga tanda tangan menjadi transparan.",
      tags: ["Remove Background", "Picture"]
    },
    {
      id: "WORD-031",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Basic",
      question: "Jika gambar harus berada di belakang teks gunakan?",
      options: [
        { key: "A", text: "In Front of Text", rationale: "Salah. In Front of Text meletakkan gambar di atas teks naskah sehingga tulisan tertutupi oleh gambar." },
        { key: "B", text: "Behind Text", rationale: "Benar. Behind Text menempatkan objek gambar di lapisan belakang teks naskah, cocok untuk gambar latar halaman." },
        { key: "C", text: "Square", rationale: "Salah. Square mengatur teks naskah mengalir di sisi luar kotak persegi pembatas objek gambar." },
        { key: "D", text: "Tight", rationale: "Salah. Tight mengatur teks naskah mengalir rapat mengikuti lekukan bentuk gambar tanpa berada di belakangnya." },
        { key: "E", text: "Inline", rationale: "Salah. Inline (In Line with Text) menempatkan gambar sejajar dengan teks dalam baris yang sama." }
      ],
      answer: "B",
      explanation: "Opsi 'Behind Text' memposisikan gambar di lapisan belakang, sering digunakan untuk efek watermark gambar latar belakang halaman.",
      tags: ["Wrap Text", "Behind Text"]
    },
    {
      id: "WORD-032",
      app: "word",
      lesson: "Word 6: Illustrations & Visuals",
      difficulty: "Basic",
      question: "Fitur yang digunakan untuk menunjukkan informasi dan ide secara visual menggunakan berbagai layout adalah?",
      options: [
        { key: "A", text: "SmartArt", rationale: "Benar. SmartArt menyediakan beragam pilihan layout diagram grafis untuk memvisualisasikan ide dan proses." },
        { key: "B", text: "WordArt", rationale: "Salah. WordArt digunakan untuk memformat teks dekoratif artistik, bukan diagram tata letak konsep." },
        { key: "C", text: "Footnote", rationale: "Salah. Footnote menyisipkan catatan kaki di bagian dasar halaman, bukan visualisasi ide." },
        { key: "D", text: "Caption", rationale: "Salah. Caption memberikan judul penjelas bernomor pada objek gambar atau tabel naskah." },
        { key: "E", text: "Citation", rationale: "Salah. Citation menyisipkan kutipan sumber rujukan kepustakaan ke dalam kalimat naskah." }
      ],
      answer: "A",
      explanation: "SmartArt menyediakan beragam tata letak diagramatis (proses, siklus, relasi, piramida) untuk menyajikan ide secara terstruktur.",
      tags: ["SmartArt", "Visuals"]
    },
    {
      id: "WORD-033",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Basic",
      question: "Header digunakan untuk menempatkan informasi pada?",
      options: [
        { key: "A", text: "Bagian atas halaman", rationale: "Benar. Header adalah area khusus di margin atas halaman yang memuat informasi pengenal yang berulang teratur." },
        { key: "B", text: "Bagian bawah halaman", rationale: "Salah. Bagian bawah halaman adalah area Footer, bukan Header dokumen." },
        { key: "C", text: "Tengah halaman", rationale: "Salah. Area tengah halaman adalah badan dokumen utama untuk penulisan isi naskah." },
        { key: "D", text: "Sisi kiri halaman", rationale: "Salah. Sisi kiri halaman adalah area margin kiri yang menentukan batas pengetikan awal baris." },
        { key: "E", text: "Hanya halaman terakhir", rationale: "Salah. Header secara default muncul di seluruh halaman dokumen, tidak hanya pada halaman terakhir." }
      ],
      answer: "A",
      explanation: "Header adalah area margin atas dokumen yang otomatis berulang di setiap halaman untuk memuat judul bab atau nomor halaman.",
      tags: ["Header", "Page Layout"]
    },
    {
      id: "WORD-034",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Basic",
      question: "Footer digunakan untuk menempatkan informasi pada?",
      options: [
        { key: "A", text: "Bagian atas halaman", rationale: "Salah. Bagian atas halaman adalah area Header dokumen, bukan Footer." },
        { key: "B", text: "Bagian bawah halaman", rationale: "Benar. Footer adalah area di margin bawah halaman yang digunakan untuk informasi berulang seperti nomor halaman." },
        { key: "C", text: "Hanya halaman judul", rationale: "Salah. Halaman judul umumnya justru tidak menampilkan footer jika Different First Page diaktifkan." },
        { key: "D", text: "Sisi kanan dokumen", rationale: "Salah. Sisi kanan dokumen adalah margin kanan untuk batas akhir pengetikan kalimat." },
        { key: "E", text: "Outline", rationale: "Salah. Outline adalah mode tampilan struktur heading naskah, bukan margin bawah halaman." }
      ],
      answer: "B",
      explanation: "Footer adalah area margin bawah dokumen yang digunakan untuk informasi berulang seperti nomor halaman atau nama pengarang.",
      tags: ["Footer", "Page Layout"]
    },
    {
      id: "WORD-035",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Intermediate",
      question: "Untuk membuat halaman pertama tidak menggunakan header/footer yang sama dengan halaman berikutnya, gunakan?",
      options: [
        { key: "A", text: "Different First Page", rationale: "Benar. Opsi Different First Page memisahkan header/footer halaman pertama dari halaman-halaman berikutnya." },
        { key: "B", text: "Different Last Page", rationale: "Salah. Different Last Page bukan opsi bawaan standar pengaturan Header & Footer di Microsoft Word." },
        { key: "C", text: "Separate Header", rationale: "Salah. Separate Header bukan nama opsi fitur resmi pengaturan Header & Footer di Microsoft Word." },
        { key: "D", text: "First Page Break", rationale: "Salah. First Page Break bukan perintah pemisah header yang tersedia di Microsoft Word." },
        { key: "E", text: "Header Lock", rationale: "Salah. Header Lock bukan opsi yang ada dalam ribbon Header & Footer Tools Microsoft Word." }
      ],
      answer: "A",
      explanation: "Opsi 'Different First Page' (Halaman Pertama Berbeda) memungkinkan halaman depan/sampul tidak menampilkan header atau footer.",
      tags: ["Different First Page", "Header", "Footer"]
    },
    {
      id: "WORD-036",
      app: "word",
      lesson: "Word 3: Layout, Breaks & Sections",
      difficulty: "Intermediate",
      question: "Agar header section baru tidak mengikuti section sebelumnya, nonaktifkan?",
      options: [
        { key: "A", text: "Link to Previous", rationale: "Benar. Menonaktifkan tombol Link to Previous memutuskan tautan header section saat ini dari section terdahulu." },
        { key: "B", text: "Previous Page", rationale: "Salah. Previous Page adalah tombol navigasi lompat ke halaman sebelumnya, bukan pemutus tautan header." },
        { key: "C", text: "Next Header", rationale: "Salah. Next Header adalah tombol navigasi berpindah ke header berikutnya, bukan pemutus tautan antar-section." },
        { key: "D", text: "Previous Section", rationale: "Salah. Previous Section adalah tombol navigasi antar bagian dokumen, bukan pemutus rantai format header." },
        { key: "E", text: "Same Style", rationale: "Salah. Same Style bukan perintah untuk memutus keterkaitan format antar section di Word." }
      ],
      answer: "A",
      explanation: "Menonaktifkan tombol 'Link to Previous' pada Header & Footer Tools memutuskan keterkaitan isi header section aktif dari section terdahulu.",
      tags: ["Link to Previous", "Section Header"]
    },
    {
      id: "WORD-037",
      app: "word",
      lesson: "Word 5: References & Citations",
      difficulty: "Basic",
      question: "Agar daftar isi otomatis dapat mengenali judul bab, judul harus menggunakan?",
      options: [
        { key: "A", text: "Bold", rationale: "Salah. Format Bold saja tidak dikenali oleh algoritma pemindai Table of Contents otomatis." },
        { key: "B", text: "Heading Styles", rationale: "Benar. Fitur Table of Contents otomatis memindai teks yang menggunakan gaya Heading Styles (Heading 1, 2, dst)." },
        { key: "C", text: "Underline", rationale: "Salah. Format garis bawah (Underline) tidak mengindikasikan struktur bab untuk daftar isi otomatis." },
        { key: "D", text: "WordArt", rationale: "Salah. WordArt adalah objek teks artistik mandiri yang diabaikan oleh pemindai daftar isi otomatis." },
        { key: "E", text: "Text Box", rationale: "Salah. Text Box adalah kotak teks melayang bebas yang tidak dipindai oleh fitur Table of Contents standar." }
      ],
      answer: "B",
      explanation: "Fitur Table of Contents otomatis memindai teks yang diformat dengan gaya Heading Styles (seperti Heading 1, Heading 2, Heading 3).",
      tags: ["Table of Contents", "Heading styles"]
    },
    {
      id: "WORD-038",
      app: "word",
      lesson: "Word 5: References & Citations",
      difficulty: "Basic",
      question: "Jika isi dokumen berubah dan halaman pada Table of Contents berubah, gunakan?",
      options: [
        { key: "A", text: "Update Table", rationale: "Benar. Tombol Update Table menyinkronkan ulang nomor halaman atau seluruh struktur daftar isi secara otomatis." },
        { key: "B", text: "Refresh Document", rationale: "Salah. Refresh Document bukan tombol resmi untuk memperbarui isi daftar isi di tab References." },
        { key: "C", text: "Rebuild Page", rationale: "Salah. Rebuild Page bukan nama fitur atau tombol perintah pembaruan di Microsoft Word." },
        { key: "D", text: "Update Header", rationale: "Salah. Update Header hanya memperbarui isi margin atas dokumen, bukan nomor halaman daftar isi." },
        { key: "E", text: "Update Style Only", rationale: "Salah. Update Style Only bukan opsi pembaruan otomatis untuk menyegarkan isi Table of Contents." }
      ],
      answer: "A",
      explanation: "Tombol 'Update Table' memperbarui nomor halaman atau seluruh struktur daftar isi yang disesuaikan dengan perubahan dokumen terbaru.",
      tags: ["Table of Contents", "Update Table"]
    },
    {
      id: "WORD-039",
      app: "word",
      lesson: "Word 5: References & Citations",
      difficulty: "Basic",
      question: "Untuk membuat daftar pustaka otomatis dari citation yang sudah dimasukkan digunakan?",
      options: [
        { key: "A", text: "Bibliography", rationale: "Benar. Menu References > Bibliography menyusun daftar pustaka lengkap secara otomatis dari sumber yang dicatat." },
        { key: "B", text: "Caption", rationale: "Salah. Caption memberikan judul keterangan pada objek ilustrasi, bagan, atau tabel." },
        { key: "C", text: "Table of Figures", rationale: "Salah. Table of Figures menghasilkan daftar gambar dan ilustrasi dokumen, bukan daftar pustaka rujukan." },
        { key: "D", text: "Footnote", rationale: "Salah. Footnote adalah catatan penjelasan di dasar halaman, bukan daftar referensi bibliografi akhir." },
        { key: "E", text: "Page Number", rationale: "Salah. Page Number menyisipkan penomoran halaman pada header atau footer dokumen naskah." }
      ],
      answer: "A",
      explanation: "Opsi Bibliography (References > Bibliography) menyusun daftar pustaka lengkap secara otomatis dari semua referensi sumber yang telah dimasukkan.",
      tags: ["Bibliography", "Manage Sources"]
    },
    {
      id: "WORD-040",
      app: "word",
      lesson: "Word 7: Mail Merge & Mass Documents",
      difficulty: "Intermediate",
      question: "Anda mempunyai daftar nama pegawai pada Excel dan ingin membuat banyak memo dengan nama berbeda secara otomatis. Fitur yang tepat adalah?",
      options: [
        { key: "A", text: "Table of Contents", rationale: "Salah. Table of Contents menyusun daftar isi dokumen dari heading, bukan mencetak surat personal massal." },
        { key: "B", text: "Mail Merge", rationale: "Benar. Mail Merge menggabungkan template naskah dokumen dengan sumber data luar (Excel) untuk mencetak dokumen massal." },
        { key: "C", text: "SmartArt", rationale: "Salah. SmartArt menyajikan diagram visual konsep dan proses, tidak berkaitan dengan surat massal." },
        { key: "D", text: "Citation", rationale: "Salah. Citation menyisipkan kutipan sumber pustaka ke dalam teks naskah karya ilmiah." },
        { key: "E", text: "WordArt", rationale: "Salah. WordArt memberikan efek dekoratif visual pada huruf, bukan pemrosesan dokumen surat massal." }
      ],
      answer: "B",
      explanation: "Mail Merge (Surat Masal) menghubungkan dokumen template surat/memo dengan daftar sumber data luar (seperti file Excel) untuk mencetak atau menghasilkan banyak dokumen secara personal.",
      tags: ["Mail Merge", "Select Recipients"]
    }
  ];
