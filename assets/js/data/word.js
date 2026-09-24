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
        { key: "A", text: "Home" },
        { key: "B", text: "Data" },
        { key: "C", text: "Mailings" },
        { key: "D", text: "Formulas" },
        { key: "E", text: "References" }
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
        { key: "A", text: "Draft" },
        { key: "B", text: "Print Layout" },
        { key: "C", text: "Web Layout" },
        { key: "D", text: "Outline" },
        { key: "E", text: "Reading" }
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
        { key: "A", text: "File > New" },
        { key: "B", text: "Review > New" },
        { key: "C", text: "View > New" },
        { key: "D", text: "References > New" },
        { key: "E", text: "Mailings > New" }
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
        { key: "A", text: "Printer" },
        { key: "B", text: "Internet" },
        { key: "C", text: "Scanner" },
        { key: "D", text: "Database" },
        { key: "E", text: "Outlook" }
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
        { key: "A", text: "Outline View" },
        { key: "B", text: "Print Preview" },
        { key: "C", text: "Web Layout" },
        { key: "D", text: "Table View" },
        { key: "E", text: "Header View" }
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
        { key: "A", text: "Normal" },
        { key: "B", text: "Heading 1" },
        { key: "C", text: "Subtitle" },
        { key: "D", text: "Caption" },
        { key: "E", text: "Footer" }
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
        { key: "A", text: "Mengubah warna teks" },
        { key: "B", text: "Memindahkan posisi item dalam outline" },
        { key: "C", text: "Menghapus halaman" },
        { key: "D", text: "Mengubah font" },
        { key: "E", text: "Membuat table" }
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
        { key: "A", text: "Cover Page" },
        { key: "B", text: "Page Number" },
        { key: "C", text: "Header" },
        { key: "D", text: "Footnote" },
        { key: "E", text: "Section Break" }
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
        { key: "A", text: "Page Break" },
        { key: "B", text: "Section Break" },
        { key: "C", text: "Column Break" },
        { key: "D", text: "Line Break" },
        { key: "E", text: "Wrap Text" }
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
        { key: "A", text: "Page Break" },
        { key: "B", text: "Section Break" },
        { key: "C", text: "WordArt" },
        { key: "D", text: "Drop Cap" },
        { key: "E", text: "Caption" }
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
        { key: "A", text: "Semua hidden files" },
        { key: "B", text: "Tanda format seperti paragraph marks dan spasi" },
        { key: "C", text: "Semua gambar" },
        { key: "D", text: "Semua chart" },
        { key: "E", text: "Semua hyperlink" }
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
        { key: "A", text: "Margins" },
        { key: "B", text: "Orientation" },
        { key: "C", text: "Columns" },
        { key: "D", text: "Size" },
        { key: "E", text: "Breaks" }
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
        { key: "A", text: "Drop Cap" },
        { key: "B", text: "WordArt" },
        { key: "C", text: "Initial Font" },
        { key: "D", text: "Large Character" },
        { key: "E", text: "Grow Font" }
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
        { key: "A", text: "Align Left" },
        { key: "B", text: "Center" },
        { key: "C", text: "Align Right" },
        { key: "D", text: "Justify" },
        { key: "E", text: "Distributed" }
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
        { key: "A", text: "Subscript" },
        { key: "B", text: "Superscript" },
        { key: "C", text: "Drop Cap" },
        { key: "D", text: "Small Caps" },
        { key: "E", text: "Italic" }
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
        { key: "A", text: "Superscript" },
        { key: "B", text: "Subscript" },
        { key: "C", text: "Drop Cap" },
        { key: "D", text: "Underline" },
        { key: "E", text: "All Caps" }
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
        { key: "A", text: "Bullets" },
        { key: "B", text: "Numbering" },
        { key: "C", text: "Multilevel List" },
        { key: "D", text: "Caption" },
        { key: "E", text: "Styles" }
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
        { key: "A", text: "Bullets" },
        { key: "B", text: "Numbering" },
        { key: "C", text: "SmartArt" },
        { key: "D", text: "List Picture" },
        { key: "E", text: "Caption" }
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
        { key: "A", text: "Multilevel List" },
        { key: "B", text: "Single List" },
        { key: "C", text: "Page Number" },
        { key: "D", text: "Footnote" },
        { key: "E", text: "Columns" }
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
        { key: "A", text: "Define New Bullet" },
        { key: "B", text: "New Picture Style" },
        { key: "C", text: "Insert Picture List" },
        { key: "D", text: "Picture Caption" },
        { key: "E", text: "Custom Icon" }
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
        { key: "A", text: "Font Spacing" },
        { key: "B", text: "Line and Paragraph Spacing" },
        { key: "C", text: "Character Spacing" },
        { key: "D", text: "Page Size" },
        { key: "E", text: "Margins" }
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
        { key: "A", text: "Header" },
        { key: "B", text: "Footer" },
        { key: "C", text: "Footnote" },
        { key: "D", text: "Caption" },
        { key: "E", text: "Citation" }
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
        { key: "A", text: "Citation" },
        { key: "B", text: "Footer" },
        { key: "C", text: "Drop Cap" },
        { key: "D", text: "Caption" },
        { key: "E", text: "Bookmark" }
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
        { key: "A", text: "Insert > Chart" },
        { key: "B", text: "Review > Chart" },
        { key: "C", text: "View > Chart" },
        { key: "D", text: "References > Chart" },
        { key: "E", text: "Mailings > Chart" }
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
        { key: "A", text: "Point Explosion" },
        { key: "B", text: "3D Rotation" },
        { key: "C", text: "Caption" },
        { key: "D", text: "Wrap Text" },
        { key: "E", text: "Recolor" }
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
        { key: "A", text: "Table" },
        { key: "B", text: "WordArt" },
        { key: "C", text: "SmartArt" },
        { key: "D", text: "Footnote" },
        { key: "E", text: "Caption" }
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
        { key: "A", text: "SmartArt" },
        { key: "B", text: "WordArt" },
        { key: "C", text: "Picture" },
        { key: "D", text: "Caption" },
        { key: "E", text: "Bibliography" }
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
        { key: "A", text: "Square" },
        { key: "B", text: "Tight" },
        { key: "C", text: "In Front of Text" },
        { key: "D", text: "Behind Text" },
        { key: "E", text: "In Line with Text" }
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
        { key: "A", text: "In Line with Text" },
        { key: "B", text: "Square" },
        { key: "C", text: "Behind Text" },
        { key: "D", text: "In Front of Text" },
        { key: "E", text: "Tight" }
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
        { key: "A", text: "Remove Background" },
        { key: "B", text: "Crop" },
        { key: "C", text: "Correction" },
        { key: "D", text: "Recolor" },
        { key: "E", text: "Transparency Lock" }
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
        { key: "A", text: "In Front of Text" },
        { key: "B", text: "Behind Text" },
        { key: "C", text: "Square" },
        { key: "D", text: "Tight" },
        { key: "E", text: "Inline" }
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
        { key: "A", text: "SmartArt" },
        { key: "B", text: "WordArt" },
        { key: "C", text: "Footnote" },
        { key: "D", text: "Caption" },
        { key: "E", text: "Citation" }
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
        { key: "A", text: "Bagian atas halaman" },
        { key: "B", text: "Bagian bawah halaman" },
        { key: "C", text: "Tengah halaman" },
        { key: "D", text: "Sisi kiri halaman" },
        { key: "E", text: "Hanya halaman terakhir" }
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
        { key: "A", text: "Bagian atas halaman" },
        { key: "B", text: "Bagian bawah halaman" },
        { key: "C", text: "Hanya halaman judul" },
        { key: "D", text: "Sisi kanan dokumen" },
        { key: "E", text: "Outline" }
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
        { key: "A", text: "Different First Page" },
        { key: "B", text: "Different Last Page" },
        { key: "C", text: "Separate Header" },
        { key: "D", text: "First Page Break" },
        { key: "E", text: "Header Lock" }
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
        { key: "A", text: "Link to Previous" },
        { key: "B", text: "Previous Page" },
        { key: "C", text: "Next Header" },
        { key: "D", text: "Previous Section" },
        { key: "E", text: "Same Style" }
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
        { key: "A", text: "Bold" },
        { key: "B", text: "Heading Styles" },
        { key: "C", text: "Underline" },
        { key: "D", text: "WordArt" },
        { key: "E", text: "Text Box" }
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
        { key: "A", text: "Update Table" },
        { key: "B", text: "Refresh Document" },
        { key: "C", text: "Rebuild Page" },
        { key: "D", text: "Update Header" },
        { key: "E", text: "Update Style Only" }
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
        { key: "A", text: "Bibliography" },
        { key: "B", text: "Caption" },
        { key: "C", text: "Table of Figures" },
        { key: "D", text: "Footnote" },
        { key: "E", text: "Page Number" }
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
        { key: "A", text: "Table of Contents" },
        { key: "B", text: "Mail Merge" },
        { key: "C", text: "SmartArt" },
        { key: "D", text: "Citation" },
        { key: "E", text: "WordArt" }
      ],
      answer: "B",
      explanation: "Mail Merge (Surat Masal) menghubungkan dokumen template surat/memo dengan daftar sumber data luar (seperti file Excel) untuk mencetak atau menghasilkan banyak dokumen secara personal.",
      tags: ["Mail Merge", "Select Recipients"]
    }
  ];
