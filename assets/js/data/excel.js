/**
 * Microsoft Excel 2019 - Question Bank
 * Extracted verbatim from the master question bank.
 * Content is source-of-truth: DO NOT EDIT question, options, answers,
 * explanations, lessons, difficulty, or tags.
 */

const EXCEL_QUESTION_BANK = [
    {
      id: "EXCEL-001",
      app: "excel",
      lesson: "Excel 1: Workspace & Interface",
      difficulty: "Basic",
      question: "Bagian worksheet yang menunjukkan lokasi sel yang sedang aktif disebut?",
      options: [
        { key: "A", text: "Formula Bar", rationale: "Salah. Formula Bar menampilkan isi/formula dari sel aktif, bukan menunjukkan lokasi visualnya." },
        { key: "B", text: "Active Cell Indicator", rationale: "Benar. Active Cell Indicator adalah border tebal yang menunjukkan sel mana yang sedang aktif di worksheet." },
        { key: "C", text: "Name Box", rationale: "Salah. Name Box menampilkan alamat sel aktif dalam bentuk teks (misal A1), bukan indikator visual." },
        { key: "D", text: "Status Bar", rationale: "Salah. Status Bar menampilkan informasi statistik dan mode Excel di bagian bawah window." },
        { key: "E", text: "Sheet Tab", rationale: "Salah. Sheet Tab digunakan untuk berpindah antar worksheet dalam workbook." }
      ],
      answer: "B",
      explanation: "Active Cell Indicator (atau batas sel aktif) menunjukkan sel yang sedang dipilih pada worksheet, sedangkan Name Box menampilkan alamat nama sel tersebut.",
      tags: ["Workspace", "Active Cell", "Interface"]
    },
    {
      id: "EXCEL-002",
      app: "excel",
      lesson: "Excel 1: Workspace & Interface",
      difficulty: "Basic",
      question: "Berapa jumlah maksimum kolom pada worksheet Excel?",
      options: [
        { key: "A", text: "1.048.576", rationale: "Salah. 1.048.576 adalah jumlah maksimum baris Excel, bukan kolom." },
        { key: "B", text: "8.192", rationale: "Salah. Angka ini terlalu kecil untuk jumlah kolom Excel modern." },
        { key: "C", text: "16.384", rationale: "Benar. Excel memiliki 16.384 kolom dari A hingga XFD." },
        { key: "D", text: "65.536", rationale: "Salah. Ini adalah jumlah baris pada Excel versi lama (Excel 2003 dan sebelumnya)." },
        { key: "E", text: "32.768", rationale: "Salah. Angka ini bukan merupakan batasan dimensi worksheet Excel." }
      ],
      answer: "C",
      explanation: "Worksheet Excel modern memiliki 16.384 kolom (dari kolom A hingga XFD) dan 1.048.576 baris.",
      tags: ["Workspace", "Column/Row", "Limits"]
    },
    {
      id: "EXCEL-003",
      app: "excel",
      lesson: "Excel 1: Navigation & Shortcuts",
      difficulty: "Basic",
      question: "Shortcut yang digunakan untuk memindahkan active cell langsung ke A1 adalah?",
      options: [
        { key: "A", text: "Ctrl + End", rationale: "Salah. Ctrl + End memindahkan ke sel terakhir yang berisi data di worksheet, bukan ke A1." },
        { key: "B", text: "Ctrl + Home", rationale: "Benar. Ctrl + Home langsung memindahkan active cell ke sel A1 di worksheet." },
        { key: "C", text: "Shift + Home", rationale: "Salah. Shift + Home menyeleksi dari posisi saat ini hingga kolom A di baris yang sama." },
        { key: "D", text: "Alt + Home", rationale: "Salah. Alt + Home bukan shortcut standar Excel untuk navigasi." },
        { key: "E", text: "Ctrl + Page Up", rationale: "Salah. Ctrl + Page Up berpindah ke worksheet sebelumnya, bukan ke sel A1." }
      ],
      answer: "B",
      explanation: "Kombinasi Ctrl + Home secara instan memindahkan kursor atau sel aktif ke sel teratas paling kiri (sel A1).",
      tags: ["Navigation", "Keyboard shortcut"]
    },
    {
      id: "EXCEL-004",
      app: "excel",
      lesson: "Excel 1: Data Types & Fundamentals",
      difficulty: "Basic",
      question: "Manakah yang bukan tipe data dasar yang dibahas pada modul?",
      options: [
        { key: "A", text: "Numerical Value", rationale: "Salah. Numerical Value adalah tipe data dasar yang dimasukkan ke dalam sel." },
        { key: "B", text: "Alphanumerical Text", rationale: "Salah. Alphanumerical Text adalah tipe data dasar berupa teks yang bisa diinput ke sel." },
        { key: "C", text: "Formula", rationale: "Salah. Formula adalah tipe data dasar berupa perhitungan yang diawali tanda =." },
        { key: "D", text: "Function", rationale: "Salah. Function adalah tipe data dasar berupa fungsi built-in Excel." },
        { key: "E", text: "Chart Object", rationale: "Benar. Chart Object adalah objek grafik visual terpisah, bukan tipe data yang diinput ke sel." }
      ],
      answer: "E",
      explanation: "Tipe data dasar yang dimasukkan ke dalam sel meliputi nilai numerik, teks alfanumerik, formula, dan fungsi. Chart Object adalah objek grafik visual terpisah, bukan tipe data sel.",
      tags: ["Data types", "Fundamentals"]
    },
    {
      id: "EXCEL-005",
      app: "excel",
      lesson: "Excel 2: Formulas & Operators",
      difficulty: "Basic",
      question: "Sebuah formula Excel harus diawali dengan karakter?",
      options: [
        { key: "A", text: "#", rationale: "Salah. Tanda # digunakan dalam error message Excel, bukan untuk memulai formula." },
        { key: "B", text: "$", rationale: "Salah. Tanda $ digunakan untuk absolute reference dalam formula, bukan pembuka formula." },
        { key: "C", text: "=", rationale: "Benar. Semua formula Excel wajib diawali dengan tanda sama dengan (=)." },
        { key: "D", text: "&", rationale: "Salah. Tanda & adalah operator untuk menggabungkan teks, bukan pembuka formula." },
        { key: "E", text: "%", rationale: "Salah. Tanda % digunakan untuk format persentase, bukan untuk memulai formula." }
      ],
      answer: "C",
      explanation: "Semua formula dan perhitungan fungsi dalam Microsoft Excel wajib diawali dengan tanda sama dengan (=).",
      tags: ["Formula", "Syntax"]
    },
    {
      id: "EXCEL-006",
      app: "excel",
      lesson: "Excel 2: Formulas & Operators",
      difficulty: "Intermediate",
      question: "Manakah operator yang memiliki precedence paling tinggi di antara pilihan berikut?",
      options: [
        { key: "A", text: "+", rationale: "Salah. Operator penjumlahan memiliki precedence rendah dalam urutan operasi." },
        { key: "B", text: "-", rationale: "Salah. Operator pengurangan memiliki precedence rendah dalam urutan operasi." },
        { key: "C", text: "*", rationale: "Salah. Operator perkalian memiliki precedence tinggi, namun masih di bawah operator pangkat." },
        { key: "D", text: "/", rationale: "Salah. Operator pembagian memiliki precedence tinggi, namun masih di bawah operator pangkat." },
        { key: "E", text: "^", rationale: "Benar. Operator pangkat (^) memiliki precedence tertinggi di antara operator aritmatika Excel." }
      ],
      answer: "E",
      explanation: "Operator pangkat (caret ^) memiliki tingkat prioritas (precedence) tertinggi dibandingkan perkalian, pembagian, penjumlahan, atau pengurangan.",
      tags: ["Operator", "Precedence"]
    },
    {
      id: "EXCEL-007",
      app: "excel",
      lesson: "Excel 2: Formulas & Operators",
      difficulty: "Basic",
      question: "Tujuan penggunaan tanda kurung pada formula adalah?",
      options: [
        { key: "A", text: "Menghapus referensi sel", rationale: "Salah. Tanda kurung tidak menghapus referensi, melainkan mengatur urutan eksekusi operasi." },
        { key: "B", text: "Menjalankan bagian tertentu lebih dahulu", rationale: "Benar. Tanda kurung memaksa operasi di dalamnya dieksekusi lebih dulu sebelum operator lain." },
        { key: "C", text: "Mengubah angka menjadi text", rationale: "Salah. Tanda kurung tidak mengubah tipe data, hanya mengatur urutan operasi." },
        { key: "D", text: "Membuat chart", rationale: "Salah. Tanda kurung tidak berhubungan dengan pembuatan chart atau objek grafik." },
        { key: "E", text: "Mengunci workbook", rationale: "Salah. Tanda kurung tidak ada kaitannya dengan proteksi atau penguncian workbook." }
      ],
      answer: "B",
      explanation: "Tanda kurung () digunakan untuk mengesampingkan urutan operasi standar (operator precedence) dan memaksa operasi di dalamnya dieksekusi lebih dahulu.",
      tags: ["Parentheses", "Precedence", "Formula"]
    },
    {
      id: "EXCEL-008",
      app: "excel",
      lesson: "Excel 2: Functions & Logic",
      difficulty: "Intermediate",
      question: "Sintaks yang benar untuk SUMIF adalah?",
      options: [
        { key: "A", text: "=SUMIF(criteria,range,sum_range)", rationale: "Salah. Urutan parameter terbalik, seharusnya range dicek dulu baru kriteria." },
        { key: "B", text: "=SUMIF(sum_range,criteria,range)", rationale: "Salah. Sum_range tidak boleh di posisi pertama dalam fungsi SUMIF." },
        { key: "C", text: "=SUMIF(range,criteria,sum_range)", rationale: "Benar. Sintaks resmi SUMIF: range yang diuji, kriteria, lalu range yang dijumlahkan." },
        { key: "D", text: "=SUMIF(range,sum_range,criteria)", rationale: "Salah. Kriteria harus di posisi kedua, bukan sum_range." },
        { key: "E", text: "=SUMIF(criteria,sum_range,range)", rationale: "Salah. Kriteria tidak boleh di posisi pertama tanpa range yang diuji." }
      ],
      answer: "C",
      explanation: "Sintaks resmi fungsi SUMIF adalah =SUMIF(range, criteria, [sum_range]), di mana range adalah rentang yang diuji, criteria adalah syaratnya, dan sum_range adalah rentang yang dijumlahkan.",
      tags: ["SUMIF", "Formula", "Syntax"]
    },
    {
      id: "EXCEL-009",
      app: "excel",
      lesson: "Excel 2: Functions & Logic",
      difficulty: "Intermediate",
      question: "Anda ingin menjumlahkan sales berdasarkan bulan DAN lokasi. Fungsi yang tepat adalah?",
      options: [
        { key: "A", text: "SUM", rationale: "Salah. SUM hanya menjumlahkan tanpa memeriksa kondisi apapun." },
        { key: "B", text: "SUMIF", rationale: "Salah. SUMIF hanya mendukung satu kriteria, tidak bisa untuk bulan DAN lokasi sekaligus." },
        { key: "C", text: "SUMIFS", rationale: "Benar. SUMIFS digunakan untuk menjumlahkan nilai dengan lebih dari satu kriteria (multi-criteria)." },
        { key: "D", text: "COUNTIFS", rationale: "Salah. COUNTIFS menghitung jumlah baris yang memenuhi kriteria, bukan menjumlahkan nilai." },
        { key: "E", text: "AVERAGE", rationale: "Salah. AVERAGE menghitung rata-rata tanpa memeriksa kondisi tertentu." }
      ],
      answer: "C",
      explanation: "SUMIFS digunakan untuk menjumlahkan nilai numerik berdasarkan lebih dari satu kondisi/kriteria (bulan dan lokasi).",
      tags: ["SUMIFS", "Formula", "Multi-criteria"]
    },
    {
      id: "EXCEL-010",
      app: "excel",
      lesson: "Excel 2: Functions & Logic",
      difficulty: "Intermediate",
      question: "Anda ingin menghitung jumlah transaksi berdasarkan bulan DAN partner. Fungsi yang paling tepat adalah?",
      options: [
        { key: "A", text: "COUNT", rationale: "Salah. COUNT menghitung semua sel berisi angka tanpa memeriksa kriteria apapun." },
        { key: "B", text: "COUNTIF", rationale: "Salah. COUNTIF hanya mendukung satu kriteria, tidak bisa untuk bulan DAN partner sekaligus." },
        { key: "C", text: "COUNTIFS", rationale: "Benar. COUNTIFS menghitung jumlah kejadian yang memenuhi beberapa kriteria sekaligus." },
        { key: "D", text: "SUMIFS", rationale: "Salah. SUMIFS menjumlahkan nilai, bukan menghitung frekuensi atau jumlah transaksi." },
        { key: "E", text: "AVERAGEIFS", rationale: "Salah. AVERAGEIFS menghitung rata-rata dengan kriteria, bukan menghitung jumlah transaksi." }
      ],
      answer: "C",
      explanation: "COUNTIFS digunakan untuk menghitung frekuensi atau banyaknya baris/kejadian yang memenuhi beberapa kriteria sekaligus.",
      tags: ["COUNTIFS", "Functions"]
    },
    {
      id: "EXCEL-011",
      app: "excel",
      lesson: "Excel 2: Functions & Logic",
      difficulty: "Basic",
      question: "Fungsi yang digunakan untuk menghitung nilai rata-rata adalah?",
      options: [
        { key: "A", text: "AVG", rationale: "Salah. AVG bukan nama fungsi resmi di Excel (nama fungsi tersebut ada di SQL)." },
        { key: "B", text: "MEAN", rationale: "Salah. MEAN bukan fungsi standar yang ada di Microsoft Excel." },
        { key: "C", text: "AVERAGE", rationale: "Benar. AVERAGE adalah fungsi bawaan Excel untuk menghitung rata-rata aritmatika dari argumen numerik." },
        { key: "D", text: "MID", rationale: "Salah. MID adalah fungsi manipulasi teks untuk mengambil karakter dari tengah string." },
        { key: "E", text: "MEDIAN", rationale: "Salah. MEDIAN menghitung nilai tengah dari kumpulan data, bukan nilai rata-rata aritmatika." }
      ],
      answer: "C",
      explanation: "Fungsi bawaan Excel untuk rata-rata aritmatika adalah AVERAGE, bukan AVG atau MEAN.",
      tags: ["AVERAGE", "Functions"]
    },
    {
      id: "EXCEL-012",
      app: "excel",
      lesson: "Excel 3: Data Management & Ranges",
      difficulty: "Intermediate",
      question: "Fitur yang digunakan untuk memberi nama pada range sehingga dapat dipanggil dalam formula adalah?",
      options: [
        { key: "A", text: "Name Box", rationale: "Benar. Name Box di kiri Formula Bar dapat langsung diketikkan nama untuk membuat Named Range." },
        { key: "B", text: "Formula Bar", rationale: "Salah. Formula Bar digunakan untuk memasukkan atau mengedit rumus dan data sel." },
        { key: "C", text: "Status Bar", rationale: "Salah. Status Bar menampilkan status saat ini serta perhitungan cepat di bagian bawah." },
        { key: "D", text: "Page Layout", rationale: "Salah. Page Layout digunakan untuk mengatur tampilan tata letak halaman dan margin." },
        { key: "E", text: "Format Painter", rationale: "Salah. Format Painter digunakan untuk menyalin format visual sel ke sel lain." }
      ],
      answer: "A",
      explanation: "Name Box (di sebelah kiri Formula Bar) dapat digunakan secara langsung untuk membuat Named Range dengan mengetikkan nama setelah memilih rentang sel.",
      tags: ["Named Range", "Name Box"]
    },
    {
      id: "EXCEL-013",
      app: "excel",
      lesson: "Excel 3: Data Management & Ranges",
      difficulty: "Basic",
      question: "Jika Anda ingin melihat data berdasarkan lokasi, partner, atau bulan tertentu dengan cepat, fitur yang paling sesuai adalah?",
      options: [
        { key: "A", text: "Filter", rationale: "Benar. Fitur AutoFilter menyaring dan menampilkan baris data berdasarkan kriteria tertentu secara instan." },
        { key: "B", text: "Merge", rationale: "Salah. Merge menggabungkan beberapa sel menjadi satu, bukan untuk menyaring data." },
        { key: "C", text: "Goal Seek", rationale: "Salah. Goal Seek digunakan untuk analisis What-If guna mencari nilai input dari target tertentu." },
        { key: "D", text: "Scenario Manager", rationale: "Salah. Scenario Manager digunakan untuk menyimpan berbagai skenario nilai variabel." },
        { key: "E", text: "WordArt", rationale: "Salah. WordArt adalah fitur tipografi artistik visual, bukan pengolahan data." }
      ],
      answer: "A",
      explanation: "Fitur AutoFilter (Data > Filter) menyediakan dropdown pada setiap header untuk menyaring dan menampilkan data berdasarkan kriteria tertentu secara instan.",
      tags: ["Filter", "Data Management"]
    },
    {
      id: "EXCEL-014",
      app: "excel",
      lesson: "Excel 3: Data Management & Ranges",
      difficulty: "Basic",
      question: "Fitur untuk menghapus data duplikat namun mempertahankan satu salinan adalah?",
      options: [
        { key: "A", text: "Clear Data", rationale: "Salah. Clear Data menghapus seluruh konten sel tanpa menyisakan salinan unik." },
        { key: "B", text: "Delete Cells", rationale: "Salah. Delete Cells menghapus sel dan menggeser posisi sel di sekitarnya." },
        { key: "C", text: "Remove Duplicates", rationale: "Benar. Remove Duplicates menghapus baris duplikat dan mempertahankan tepat satu data unik." },
        { key: "D", text: "Remove Formatting", rationale: "Salah. Fitur ini hanya membersihkan format visual tanpa menyentuh data atau duplikat." },
        { key: "E", text: "Unique Filter", rationale: "Salah. Bukan nama tombol fitur standar yang langsung menghapus duplikat secara permanen." }
      ],
      answer: "C",
      explanation: "Remove Duplicates (pada tab Data) menyaring dan menghapus baris-baris data yang kembar dan hanya menyisakan satu nilai unik.",
      tags: ["Remove Duplicates", "Data Cleaning"]
    },
    {
      id: "EXCEL-015",
      app: "excel",
      lesson: "Excel 3: Data Management & Ranges",
      difficulty: "Basic",
      question: "Fitur yang dapat memberikan warna berbeda berdasarkan besar-kecilnya nilai adalah?",
      options: [
        { key: "A", text: "Conditional Formatting", rationale: "Benar. Memberikan warna sel atau font secara otomatis berdasarkan nilai atau aturan tertentu." },
        { key: "B", text: "Pivot Chart", rationale: "Salah. Pivot Chart adalah grafik visual ringkasan, bukan format warna langsung pada sel worksheet." },
        { key: "C", text: "Page Break", rationale: "Salah. Page Break memisahkan halaman cetak, tidak berkaitan dengan warna data." },
        { key: "D", text: "Freeze Pane", rationale: "Salah. Freeze Pane mengunci baris atau kolom agar tetap terlihat saat di-scroll." },
        { key: "E", text: "Goal Seek", rationale: "Salah. Goal Seek adalah alat kalkulasi What-If, bukan alat pemformatan warna sel." }
      ],
      answer: "A",
      explanation: "Conditional Formatting mengubah tampilan visual sel (seperti warna latar atau font) secara otomatis berdasarkan nilai sel atau kriteria tertentu.",
      tags: ["Conditional Formatting", "Styling"]
    },
    {
      id: "EXCEL-016",
      app: "excel",
      lesson: "Excel 2: Formulas & Operators",
      difficulty: "Intermediate",
      question: "Menurut modul, Autosum akan berhenti membaca rangkaian data ketika menemukan?",
      options: [
        { key: "A", text: "Angka negatif", rationale: "Salah. AutoSum tetap membaca dan menjumlahkan angka negatif tanpa berhenti." },
        { key: "B", text: "Text", rationale: "Salah. AutoSum melewati teks namun tidak berhenti membaca rangkaian selanjutnya." },
        { key: "C", text: "Cell kosong", rationale: "Benar. AutoSum secara default berhenti mendeteksi rentang saat menjumpai sel kosong (blank cell)." },
        { key: "D", text: "Formula", rationale: "Salah. AutoSum tetap membaca hasil dari formula sebagai nilai numerik yang dijumlahkan." },
        { key: "E", text: "Cell berformat currency", rationale: "Salah. Format currency tidak mempengaruhi deteksi AutoSum, yang membaca nilai numerik." }
      ],
      answer: "C",
      explanation: "Fitur AutoSum secara default membaca sel berurutan ke atas atau ke samping dan otomatis berhenti mendeteksi saat menjumpai sel kosong (blank cell).",
      tags: ["SUM", "Autosum", "Formulas"]
    },
    {
      id: "EXCEL-017",
      app: "excel",
      lesson: "Excel 3: Data Management & Ranges",
      difficulty: "Basic",
      question: "Keuntungan utama memberi nama range adalah?",
      options: [
        { key: "A", text: "Membuat semua cell menjadi bold", rationale: "Salah. Named Range tidak mempengaruhi format visual sel seperti bold atau italic." },
        { key: "B", text: "Memudahkan penggunaan range dalam formula", rationale: "Benar. Named Range membuat formula lebih mudah dibaca dan dikelola dengan nama deskriptif." },
        { key: "C", text: "Mengubah worksheet menjadi chart", rationale: "Salah. Named Range tidak berhubungan dengan pembuatan chart atau konversi worksheet." },
        { key: "D", text: "Menghapus data duplikat", rationale: "Salah. Named Range tidak memiliki fungsi untuk mendeteksi atau menghapus data duplikat." },
        { key: "E", text: "Mengunci workbook", rationale: "Salah. Named Range tidak berkaitan dengan proteksi atau penguncian workbook." }
      ],
      answer: "B",
      explanation: "Memberikan nama range (Named Range) membuat formula lebih mudah dibaca, dipahami, dan dikelola dibandingkan menggunakan alamat sel absolut seperti $C$4:$C$100.",
      tags: ["Named Range", "Best Practices"]
    },
    {
      id: "EXCEL-018",
      app: "excel",
      lesson: "Excel 2: Functions & Logic",
      difficulty: "Intermediate",
      question: "Fungsi yang digunakan untuk mengambil nilai dari tabel referensi secara vertikal adalah?",
      options: [
        { key: "A", text: "HLOOKUP", rationale: "Salah. HLOOKUP mencari secara horizontal (baris), bukan vertikal pada tabel." },
        { key: "B", text: "LOOKUPTEXT", rationale: "Salah. LOOKUPTEXT bukan nama fungsi standar yang ada di Microsoft Excel." },
        { key: "C", text: "VLOOKUP", rationale: "Benar. VLOOKUP mencari nilai kunci di kolom paling kiri dan mengembalikan nilai dari kolom yang ditentukan." },
        { key: "D", text: "MATCHUP", rationale: "Salah. MATCHUP bukan nama fungsi lookup standar di Excel." },
        { key: "E", text: "INDEXUP", rationale: "Salah. INDEXUP bukan nama fungsi standar; yang benar adalah INDEX dan MATCH." }
      ],
      answer: "C",
      explanation: "VLOOKUP (Vertical Lookup) mencari nilai kunci pada kolom paling kiri tabel referensi dan mengembalikan nilai dari kolom yang ditentukan.",
      tags: ["VLOOKUP", "Lookup Functions"]
    },
    {
      id: "EXCEL-019",
      app: "excel",
      lesson: "Excel 2: Functions & Logic",
      difficulty: "Intermediate",
      question: "Jika tabel referensi tersaji secara horizontal, fungsi lookup yang sesuai adalah?",
      options: [
        { key: "A", text: "VLOOKUP", rationale: "Salah. VLOOKUP digunakan untuk tabel yang disusun secara vertikal (kolom kunci di kiri)." },
        { key: "B", text: "HLOOKUP", rationale: "Benar. HLOOKUP digunakan ketika tabel referensi disusun horizontal (baris kunci di atas)." },
        { key: "C", text: "COUNTIF", rationale: "Salah. COUNTIF menghitung frekuensi berdasarkan kriteria, bukan mencari nilai dari tabel." },
        { key: "D", text: "SUMIF", rationale: "Salah. SUMIF menjumlahkan nilai berdasarkan kriteria, bukan mencari data dari tabel referensi." },
        { key: "E", text: "SUMIFS", rationale: "Salah. SUMIFS menjumlahkan dengan multi-kriteria, bukan fungsi lookup tabel." }
      ],
      answer: "B",
      explanation: "HLOOKUP (Horizontal Lookup) digunakan ketika tabel data referensi disusun secara mendatar (baris kunci berada di baris pertama).",
      tags: ["HLOOKUP", "Lookup Functions"]
    },
    {
      id: "EXCEL-020",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Basic",
      question: "Anda mempunyai ribuan baris transaksi dan sulit menganalisanya secara manual. Fitur yang paling tepat adalah?",
      options: [
        { key: "A", text: "Pivot Table", rationale: "Benar. Pivot Table efektif untuk merangkum, menganalisis, dan menyajikan data besar secara interaktif." },
        { key: "B", text: "WordArt", rationale: "Salah. WordArt adalah fitur tipografi artistik untuk membuat teks dekoratif, bukan analisis data." },
        { key: "C", text: "Goal Seek", rationale: "Salah. Goal Seek digunakan untuk mencari nilai input spesifik dari target hasil, bukan untuk analisis ribuan baris." },
        { key: "D", text: "Text Box", rationale: "Salah. Text Box digunakan untuk menambahkan kotak teks bebas pada worksheet atau chart." },
        { key: "E", text: "Page Break", rationale: "Salah. Page Break mengatur pemisahan halaman cetak, tidak untuk menganalisis data." }
      ],
      answer: "A",
      explanation: "Pivot Table adalah alat analitik interaktif yang sangat efektif untuk merangkum, menganalisis, mengeksplorasi, dan menyajikan data dalam jumlah besar.",
      tags: ["Pivot Table", "Data Analysis"]
    },
    {
      id: "EXCEL-021",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Intermediate",
      question: "Agar Pivot Table bekerja dengan baik, sumber data sebaiknya?",
      options: [
        { key: "A", text: "Memiliki banyak cell kosong", rationale: "Salah. Cell kosong dapat mengganggu struktur data dan membuat hasil Pivot Table tidak akurat." },
        { key: "B", text: "Berbentuk tabular dengan header field", rationale: "Benar. Data harus berformat tabel terstruktur dengan header kolom unik dan tanpa sel kosong di tengah." },
        { key: "C", text: "Hanya terdiri dari formula", rationale: "Salah. Data sumber Pivot Table tidak harus berupa formula; data nilai statis juga valid." },
        { key: "D", text: "Tidak memiliki header", rationale: "Salah. Header field diperlukan agar Pivot Table dapat mengidentifikasi kategori dan field dengan benar." },
        { key: "E", text: "Harus berupa chart", rationale: "Salah. Chart adalah hasil visualisasi; Pivot Table membutuhkan data tabel mentah, bukan chart." }
      ],
      answer: "B",
      explanation: "Data sumber untuk Pivot Table harus berupa format tabular terstruktur di mana setiap kolom memiliki judul field unik (header) dan baris tanpa sel kosong total.",
      tags: ["Pivot Table", "Data Structure"]
    },
    {
      id: "EXCEL-022",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Basic",
      question: "Manakah yang bukan merupakan salah satu drop zone Pivot Table?",
      options: [
        { key: "A", text: "Report Filter", rationale: "Salah. Report Filter adalah drop zone yang valid untuk menyaring seluruh tabel pivot." },
        { key: "B", text: "Column Labels", rationale: "Salah. Column Labels (Columns) adalah drop zone yang valid untuk menampilkan data sebagai kolom." },
        { key: "C", text: "Row Labels", rationale: "Salah. Row Labels (Rows) adalah drop zone yang valid untuk menampilkan data sebagai baris." },
        { key: "D", text: "Values", rationale: "Salah. Values adalah drop zone yang valid untuk menampung data numerik yang dikalkulasi." },
        { key: "E", text: "Formula Bar", rationale: "Benar. Formula Bar adalah bagian interface Excel, bukan drop zone pada Pivot Table Field List." }
      ],
      answer: "E",
      explanation: "Empat area drop zone pada PivotTable Field List adalah Filters (Report Filter), Columns (Column Labels), Rows (Row Labels), dan Values. Formula Bar bukan drop zone.",
      tags: ["Pivot Table", "Drop Zones"]
    },
    {
      id: "EXCEL-023",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Basic",
      question: "Fungsi Report Filter pada Pivot Table digunakan untuk?",
      options: [
        { key: "A", text: "Mengubah warna worksheet", rationale: "Salah. Report Filter tidak memiliki fungsi untuk mengubah warna atau tampilan visual worksheet." },
        { key: "B", text: "Menyaring data berdasarkan field", rationale: "Benar. Report Filter memungkinkan penyaringan seluruh laporan Pivot Table berdasarkan nilai field tertentu." },
        { key: "C", text: "Menambah kolom worksheet", rationale: "Salah. Report Filter tidak menambah struktur kolom pada worksheet." },
        { key: "D", text: "Menghapus formula", rationale: "Salah. Report Filter tidak berkaitan dengan penghapusan atau modifikasi formula pada sel." },
        { key: "E", text: "Membuat workbook baru", rationale: "Salah. Report Filter tidak membuat file workbook baru atau duplikasi workbook." }
      ],
      answer: "B",
      explanation: "Report Filter (Filters area) memungkinkan pengguna menyaring seluruh rangkuman laporan Pivot Table berdasarkan nilai field tertentu.",
      tags: ["Pivot Table", "Report Filter"]
    },
    {
      id: "EXCEL-024",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Intermediate",
      question: "Jika field diletakkan pada Column Labels, data unik field akan ditampilkan pada?",
      options: [
        { key: "A", text: "Bagian bawah worksheet", rationale: "Salah. Bagian bawah worksheet bukan lokasi untuk menampilkan field Column Labels dari Pivot Table." },
        { key: "B", text: "Bagian atas tabel pivot", rationale: "Benar. Field Column Labels disebarkan menjadi kolom-kolom tersendiri di bagian atas (header) tabel pivot." },
        { key: "C", text: "Formula Bar", rationale: "Salah. Formula Bar adalah tempat menampilkan formula sel, bukan tempat field Pivot Table ditampilkan." },
        { key: "D", text: "Status Bar", rationale: "Salah. Status Bar menampilkan informasi statistik di bagian bawah window Excel." },
        { key: "E", text: "Page Layout", rationale: "Salah. Page Layout adalah ribbon tab untuk pengaturan tata letak cetak, bukan area tampilan Pivot Table." }
      ],
      answer: "B",
      explanation: "Menempatkan field ke Column Labels menyebarkan nilai unik field tersebut menjadi kolom-kolom tersendiri di bagian atas tabel pivot.",
      tags: ["Pivot Table", "Column Labels"]
    },
    {
      id: "EXCEL-025",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Basic",
      question: "Area Values pada Pivot Table berfungsi untuk?",
      options: [
        { key: "A", text: "Menyimpan hasil perhitungan nilai", rationale: "Benar. Area Values menampung data numerik yang dihitung (SUM, COUNT, AVERAGE, dll) dalam Pivot Table." },
        { key: "B", text: "Menentukan judul workbook", rationale: "Salah. Area Values tidak berkaitan dengan penetapan judul file workbook." },
        { key: "C", text: "Menentukan ukuran kertas", rationale: "Salah. Ukuran kertas diatur pada Page Layout, bukan pada drop zone Values Pivot Table." },
        { key: "D", text: "Menyimpan komentar", rationale: "Salah. Komentar disimpan pada sel worksheet menggunakan fitur Comment/Note, bukan area Values." },
        { key: "E", text: "Mengatur page break", rationale: "Salah. Page Break diatur melalui Page Layout tab, bukan melalui area Values Pivot Table." }
      ],
      answer: "A",
      explanation: "Drop zone Values menampung data numerik yang akan dihitung dan dikalkulasikan (seperti SUM, COUNT, AVERAGE).",
      tags: ["Pivot Table", "Values"]
    },
    {
      id: "EXCEL-026",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Intermediate",
      question: "Manakah yang termasuk Report Layout Pivot Table?",
      options: [
        { key: "A", text: "Compact, Outline, Tabular", rationale: "Benar. Tiga Report Layout standar Pivot Table Excel adalah Compact Form, Outline Form, dan Tabular Form." },
        { key: "B", text: "Vertical, Horizontal, Diagonal", rationale: "Salah. Ini bukan nama tata letak laporan (Report Layout) yang valid pada Pivot Table." },
        { key: "C", text: "Basic, Advanced, Expert", rationale: "Salah. Ini adalah tingkat kesulitan atau kemampuan, bukan tata letak laporan Pivot Table." },
        { key: "D", text: "Web, Print, Draft", rationale: "Salah. Ini adalah mode tampilan atau cetak worksheet, bukan Report Layout Pivot Table." },
        { key: "E", text: "Normal, Reading, Outline", rationale: "Salah. Normal dan Reading adalah view mode worksheet, bukan Report Layout Pivot Table." }
      ],
      answer: "A",
      explanation: "Tiga tata letak laporan (Report Layout) standar pada Pivot Table Excel adalah Compact Form, Outline Form, dan Tabular Form.",
      tags: ["Pivot Table", "Report Layout"]
    },
    {
      id: "EXCEL-027",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Intermediate",
      question: "Jika subtotal ingin ditampilkan di bagian bawah setiap group pada Pivot Table, gunakan?",
      options: [
        { key: "A", text: "Subtotals - Off", rationale: "Salah. Subtotals Off mematikan subtotal grup sepenuhnya, bukan memindahkannya ke bawah." },
        { key: "B", text: "Subtotals - Top", rationale: "Salah. Subtotals Top menampilkan subtotal di bagian atas grup, kebalikan dari yang diminta." },
        { key: "C", text: "Subtotals - Bottom", rationale: "Benar. Opsi Show all Subtotals at Bottom of Group menempatkan subtotal di bawah setiap grup." },
        { key: "D", text: "Grand Totals - Off", rationale: "Salah. Grand Totals mengatur total keseluruhan tabel, bukan subtotal per grup." },
        { key: "E", text: "Blank Rows - Remove", rationale: "Salah. Blank Rows mengatur baris kosong pemisah, bukan posisi subtotal grup." }
      ],
      answer: "C",
      explanation: "Pada tab Design Pivot Table, opsi Subtotals > Show all Subtotals at Bottom of Group meletakkan baris subtotal di bawah setiap pengelompokan item.",
      tags: ["Pivot Table", "Subtotal"]
    },
    {
      id: "EXCEL-028",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Intermediate",
      question: "Jika ingin mematikan Grand Total untuk baris dan kolom, gunakan?",
      options: [
        { key: "A", text: "Grand Totals - On for Rows", rationale: "Salah. Opsi ini mengaktifkan Grand Totals untuk baris, bukan mematikannya." },
        { key: "B", text: "Grand Totals - On for Columns", rationale: "Salah. Opsi ini mengaktifkan Grand Totals untuk kolom, bukan mematikannya." },
        { key: "C", text: "Grand Totals - Off for Rows and Columns", rationale: "Benar. Opsi ini menyembunyikan total keseluruhan (Grand Totals) untuk baris dan kolom sekaligus." },
        { key: "D", text: "Subtotals - Off", rationale: "Salah. Subtotals Off mematikan subtotal grup, bukan Grand Totals keseluruhan tabel." },
        { key: "E", text: "Blank Rows - Off", rationale: "Salah. Blank Rows mengatur baris kosong pemisah, tidak berkaitan dengan Grand Totals." }
      ],
      answer: "C",
      explanation: "Opsi Grand Totals > Off for Rows and Columns menyembunyikan perhitungan total akhir secara keseluruhan dari tabel pivot.",
      tags: ["Pivot Table", "Grand Total"]
    },
    {
      id: "EXCEL-029",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Basic",
      question: "Fitur Blank Rows digunakan untuk?",
      options: [
        { key: "A", text: "Menghapus seluruh data kosong", rationale: "Salah. Blank Rows tidak menghapus data kosong pada worksheet sumber." },
        { key: "B", text: "Menambahkan atau menghapus baris kosong antar item Pivot Table", rationale: "Benar. Blank Rows memberikan atau menghilangkan pemisah visual berupa baris kosong antar kategori item Pivot Table." },
        { key: "C", text: "Membuat workbook kosong", rationale: "Salah. Blank Rows tidak menciptakan file atau workbook baru." },
        { key: "D", text: "Menghapus worksheet", rationale: "Salah. Blank Rows tidak menghapus atau memodifikasi worksheet secara keseluruhan." },
        { key: "E", text: "Menghapus formula", rationale: "Salah. Blank Rows tidak mempengaruhi formula pada sel worksheet atau dalam Pivot Table." }
      ],
      answer: "B",
      explanation: "Fitur Blank Rows (Insert/Remove Blank Line after Each Item) pada ribbon Design Pivot Table memberikan pemisah visual antar kategori data.",
      tags: ["Pivot Table", "Blank Rows"]
    },
    {
      id: "EXCEL-030",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Advanced",
      question: "Pada Pivot Table, jika Anda membuat field virtual berdasarkan formula dari data sumber, fitur tersebut disebut?",
      options: [
        { key: "A", text: "Calculated Field", rationale: "Benar. Calculated Field membuat field virtual baru di Pivot Table yang dikalkulasi dari field lain pada data sumber." },
        { key: "B", text: "Calculated Item", rationale: "Salah. Calculated Item membuat item baru dalam satu field yang sudah ada, bukan field baru." },
        { key: "C", text: "Formula Item", rationale: "Salah. Formula Item bukan istilah resmi fitur Pivot Table di Excel." },
        { key: "D", text: "Report Field", rationale: "Salah. Report Field bukan nama fitur untuk membuat field virtual berdasarkan formula." },
        { key: "E", text: "Pivot Formula", rationale: "Salah. Pivot Formula bukan istilah resmi untuk fitur kalkulasi field di Pivot Table." }
      ],
      answer: "A",
      explanation: "Calculated Field membuat kolom/field baru di dalam Pivot Table yang dikalkulasikan dari nilai field lain yang sudah ada pada data sumber.",
      tags: ["Pivot Table", "Calculated Field"]
    },
    {
      id: "EXCEL-031",
      app: "excel",
      lesson: "Excel 4: Pivot Tables",
      difficulty: "Advanced",
      question: "Fitur yang digunakan untuk membuat item virtual hasil kalkulasi di dalam field Pivot Table adalah?",
      options: [
        { key: "A", text: "Calculated Field", rationale: "Salah. Calculated Field membuat field/kolom baru, bukan item baru dalam field yang sudah ada." },
        { key: "B", text: "Calculated Item", rationale: "Benar. Calculated Item membuat entri atau item virtual baru dalam field yang sudah ada menggunakan formula." },
        { key: "C", text: "Goal Seek", rationale: "Salah. Goal Seek adalah alat What-If Analysis untuk mencari nilai input dari target tertentu." },
        { key: "D", text: "Scenario Item", rationale: "Salah. Scenario Item bukan istilah resmi fitur Pivot Table; Scenario Manager adalah fitur terpisah." },
        { key: "E", text: "Insert Function", rationale: "Salah. Insert Function adalah dialog untuk memasukkan fungsi Excel standar pada sel worksheet." }
      ],
      answer: "B",
      explanation: "Calculated Item membuat entri atau baris item baru di dalam suatu field yang sudah ada dengan menggunakan formula kalkulasi antar item.",
      tags: ["Pivot Table", "Calculated Item"]
    },
    {
      id: "EXCEL-032",
      app: "excel",
      lesson: "Excel 5: Charts & Visualization",
      difficulty: "Basic",
      question: "Fitur yang merupakan ekstensi visual dari Pivot Table dan digunakan untuk membuat perbandingan visual adalah?",
      options: [
        { key: "A", text: "Conditional Formatting", rationale: "Salah. Conditional Formatting memberikan format warna otomatis pada sel, bukan grafik visual dari Pivot Table." },
        { key: "B", text: "Pivot Chart", rationale: "Benar. Pivot Chart adalah representasi grafis dinamis yang terhubung langsung dengan data Pivot Table." },
        { key: "C", text: "Name Box", rationale: "Salah. Name Box menampilkan alamat sel aktif atau Named Range, bukan fitur visualisasi Pivot Table." },
        { key: "D", text: "Page Layout", rationale: "Salah. Page Layout adalah ribbon tab untuk mengatur tata letak halaman cetak worksheet." },
        { key: "E", text: "Filter", rationale: "Salah. Filter digunakan untuk menyaring baris data tabel, bukan visualisasi grafik dari Pivot Table." }
      ],
      answer: "B",
      explanation: "Pivot Chart adalah representasi grafik grafis yang terhubung langsung dan dinamis dengan data dari Pivot Table terkait.",
      tags: ["Pivot Chart", "Visualization"]
    },
    {
      id: "EXCEL-033",
      app: "excel",
      lesson: "Excel 5: Charts & Visualization",
      difficulty: "Basic",
      question: "Jenis chart yang sesuai untuk melihat tren penjualan dari bulan ke bulan adalah?",
      options: [
        { key: "A", text: "Pie", rationale: "Salah. Pie Chart digunakan untuk menampilkan komposisi proporsi dari keseluruhan, bukan tren waktu." },
        { key: "B", text: "Line", rationale: "Benar. Line Chart sangat ideal untuk memvisualisasikan tren perkembangan data berurutan dari waktu ke waktu." },
        { key: "C", text: "Doughnut", rationale: "Salah. Doughnut Chart mirip Pie Chart, menampilkan proporsi kategori, bukan tren temporal." },
        { key: "D", text: "Scatter", rationale: "Salah. Scatter Chart menampilkan hubungan korelasi antara dua variabel numerik, bukan tren waktu." },
        { key: "E", text: "Radar", rationale: "Salah. Radar Chart membandingkan nilai multi-variabel dalam bentuk spider web, bukan tren waktu." }
      ],
      answer: "B",
      explanation: "Line Chart (Grafik Garis) adalah pilihan visualisasi standar yang paling ideal untuk memantau tren perkembangan data berurutan dari waktu ke waktu.",
      tags: ["Line Chart", "Chart Types"]
    },
    {
      id: "EXCEL-034",
      app: "excel",
      lesson: "Excel 5: Charts & Visualization",
      difficulty: "Intermediate",
      question: "Jika Anda ingin menambahkan series baru bernama “Target” ke chart yang sudah ada, gunakan?",
      options: [
        { key: "A", text: "Change Colors", rationale: "Salah. Change Colors mengubah skema warna chart, tidak menambah series data baru." },
        { key: "B", text: "Quick Layout", rationale: "Salah. Quick Layout mengubah tata letak elemen chart (legend, title), bukan menambah series." },
        { key: "C", text: "Select Data", rationale: "Benar. Select Data membuka dialog Data Source untuk menambah, mengedit, atau menghapus series data chart." },
        { key: "D", text: "Move Chart", rationale: "Salah. Move Chart memindahkan chart ke worksheet lain atau sheet terpisah." },
        { key: "E", text: "Format Painter", rationale: "Salah. Format Painter menyalin format visual, tidak menambah series data chart." }
      ],
      answer: "C",
      explanation: "Tombol 'Select Data' pada Chart Design membuka kotak dialog Data Source di mana kita dapat menambah (Add), mengedit, atau menghapus seri data (Legend Entries/Series).",
      tags: ["Select Data", "Chart"]
    },
    {
      id: "EXCEL-035",
      app: "excel",
      lesson: "Excel 5: Charts & Visualization",
      difficulty: "Intermediate",
      question: "Jika angka pada sumbu Y terlalu besar dan ingin ditampilkan dalam ribuan, gunakan?",
      options: [
        { key: "A", text: "Decimal Places", rationale: "Salah. Decimal Places mengatur jumlah desimal angka, tidak mengubah skala unit tampilan." },
        { key: "B", text: "Display Units", rationale: "Benar. Display Units pada Format Axis mengubah skala angka menjadi Thousands, Millions, atau Billions." },
        { key: "C", text: "Font Size", rationale: "Salah. Font Size hanya mengubah ukuran teks angka, tidak mengubah skala atau unit tampilan." },
        { key: "D", text: "Data Labels", rationale: "Salah. Data Labels menampilkan nilai data langsung pada elemen chart, tidak mengatur skala sumbu." },
        { key: "E", text: "Legend", rationale: "Salah. Legend menampilkan keterangan series chart, tidak mengatur skala atau unit angka sumbu." }
      ],
      answer: "B",
      explanation: "Fitur Display Units pada pengaturan Format Axis sumbu Y memungkinkan pengubahan skala angka menjadi Thousands, Millions, atau Billions agar lebih ringkas.",
      tags: ["Display Units", "Chart Axis"]
    },
    {
      id: "EXCEL-036",
      app: "excel",
      lesson: "Excel 5: Charts & Visualization",
      difficulty: "Basic",
      question: "Fitur yang digunakan untuk memindahkan chart ke worksheet tertentu adalah?",
      options: [
        { key: "A", text: "Move Chart", rationale: "Benar. Move Chart memindahkan chart ke worksheet lain atau menjadikannya sheet chart terpisah." },
        { key: "B", text: "Select Data", rationale: "Salah. Select Data digunakan untuk menambah, mengedit, atau menghapus series data chart." },
        { key: "C", text: "Change Chart Type", rationale: "Salah. Change Chart Type mengubah jenis grafik (bar, line, pie), bukan memindahkan lokasi chart." },
        { key: "D", text: "Chart Styles", rationale: "Salah. Chart Styles mengubah gaya visual dan warna chart, tidak memindahkan chart." },
        { key: "E", text: "Remove Chart", rationale: "Salah. Remove Chart menghapus chart dari worksheet, bukan memindahkannya." }
      ],
      answer: "A",
      explanation: "Move Chart memungkinkan kita memindahkan chart ke worksheet yang sudah ada sebagai objek, atau menjadikannya sheet chart baru tersendiri.",
      tags: ["Move Chart", "Chart Management"]
    },
    {
      id: "EXCEL-037",
      app: "excel",
      lesson: "Excel 1: Workspace & Interface",
      difficulty: "Basic",
      question: "Untuk membuat judul laporan berada di tengah dan menggabungkan beberapa cell menjadi satu, gunakan?",
      options: [
        { key: "A", text: "Wrap Text", rationale: "Salah. Wrap Text membuat teks dalam sel dibungkus menjadi beberapa baris, bukan menggabungkan sel." },
        { key: "B", text: "Merge & Center", rationale: "Benar. Merge & Center menggabungkan beberapa sel menjadi satu dan memusatkan teks di dalamnya." },
        { key: "C", text: "Format as Table", rationale: "Salah. Format as Table memberikan style tabel terstruktur, bukan menggabungkan sel." },
        { key: "D", text: "Freeze Panes", rationale: "Salah. Freeze Panes mengunci baris atau kolom agar tetap terlihat saat di-scroll." },
        { key: "E", text: "Split", rationale: "Salah. Split membagi jendela worksheet menjadi panel terpisah untuk melihat area berbeda." }
      ],
      answer: "B",
      explanation: "Merge & Center menggabungkan beberapa sel yang dipilih menjadi satu sel besar dan memusatkan teks konten di dalamnya.",
      tags: ["Merge & Center", "Formatting"]
    },
    {
      id: "EXCEL-038",
      app: "excel",
      lesson: "Excel 6: What-If Analysis & Scenarios",
      difficulty: "Intermediate",
      question: "Tool yang digunakan untuk mencari nilai input yang diperlukan agar sebuah cell mencapai nilai target tertentu adalah?",
      options: [
        { key: "A", text: "Scenario Manager", rationale: "Salah. Scenario Manager menyimpan dan membandingkan beberapa skenario nilai variabel, bukan mencari nilai input spesifik." },
        { key: "B", text: "Goal Seek", rationale: "Benar. Goal Seek mencari nilai input sel yang tepat agar formula menghasilkan nilai target tertentu." },
        { key: "C", text: "Pivot Table", rationale: "Salah. Pivot Table digunakan untuk merangkum dan menganalisis data besar, bukan untuk analisis What-If." },
        { key: "D", text: "Solver Chart", rationale: "Salah. Solver Chart bukan nama fitur standar Excel; Solver adalah add-in optimasi terpisah." },
        { key: "E", text: "Conditional Formatting", rationale: "Salah. Conditional Formatting memberikan format visual otomatis, bukan analisis What-If nilai input." }
      ],
      answer: "B",
      explanation: "Goal Seek (pada menu What-If Analysis) menentukan nilai input sel yang tepat agar formula menghasilkan nilai target akhir tertentu (Set cell, To value, By changing cell).",
      tags: ["Goal Seek", "What-If Analysis"]
    },
    {
      id: "EXCEL-039",
      app: "excel",
      lesson: "Excel 6: What-If Analysis & Scenarios",
      difficulty: "Intermediate",
      question: "Tool yang digunakan untuk membuat beberapa kemungkinan nilai variabel lalu melihat hasil masing-masing skenario adalah?",
      options: [
        { key: "A", text: "Goal Seek", rationale: "Salah. Goal Seek mencari satu nilai input untuk mencapai target tertentu, tidak menyimpan beberapa skenario." },
        { key: "B", text: "Scenario Manager", rationale: "Benar. Scenario Manager menyimpan dan beralih di antara berbagai skenario nilai input (Best Case, Worst Case, dll)." },
        { key: "C", text: "Filter", rationale: "Salah. Filter menyaring baris data tabel berdasarkan kriteria, bukan membuat skenario nilai variabel." },
        { key: "D", text: "Sort", rationale: "Salah. Sort mengurutkan data berdasarkan nilai kolom tertentu, bukan membuat skenario What-If." },
        { key: "E", text: "Remove Duplicates", rationale: "Salah. Remove Duplicates menghapus baris data duplikat, tidak berkaitan dengan analisis skenario." }
      ],
      answer: "B",
      explanation: "Scenario Manager memungkinkan kita menyimpan dan beralih di antara berbagai kelompok nilai input (skenario seperti Best Case, Worst Case) untuk melihat dampaknya pada formula.",
      tags: ["Scenario Manager", "What-If Analysis"]
    },
    {
      id: "EXCEL-040",
      app: "excel",
      lesson: "Excel 6: What-If Analysis & Scenarios",
      difficulty: "Intermediate",
      question: "Saat Scenario Manager selesai membuat beberapa scenario, hasil ringkasnya dapat dibuat melalui?",
      options: [
        { key: "A", text: "Scenario Summary", rationale: "Benar. Scenario Summary menghasilkan laporan rangkuman yang membandingkan semua skenario variabel dan hasil akhirnya." },
        { key: "B", text: "Chart Summary", rationale: "Salah. Chart Summary bukan nama fitur laporan standar dari Scenario Manager." },
        { key: "C", text: "Data Summary", rationale: "Salah. Data Summary bukan istilah resmi untuk output laporan Scenario Manager." },
        { key: "D", text: "Table Summary", rationale: "Salah. Table Summary bukan nama fitur laporan standar dari Scenario Manager." },
        { key: "E", text: "Formula Summary", rationale: "Salah. Formula Summary bukan istilah resmi untuk output laporan dari Scenario Manager." }
      ],
      answer: "A",
      explanation: "Scenario Summary menghasilkan laporan rangkuman terstruktur dalam worksheet baru yang membandingkan semua skenario variabel beserta sel hasil akhirnya.",
      tags: ["Scenario Summary", "What-If Analysis"]
    }
  ];
