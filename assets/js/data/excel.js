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
        { key: "A", text: "Formula Bar" },
        { key: "B", text: "Active Cell Indicator" },
        { key: "C", text: "Name Box" },
        { key: "D", text: "Status Bar" },
        { key: "E", text: "Sheet Tab" }
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
        { key: "A", text: "1.048.576" },
        { key: "B", text: "8.192" },
        { key: "C", text: "16.384" },
        { key: "D", text: "65.536" },
        { key: "E", text: "32.768" }
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
        { key: "A", text: "Ctrl + End" },
        { key: "B", text: "Ctrl + Home" },
        { key: "C", text: "Shift + Home" },
        { key: "D", text: "Alt + Home" },
        { key: "E", text: "Ctrl + Page Up" }
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
        { key: "A", text: "Numerical Value" },
        { key: "B", text: "Alphanumerical Text" },
        { key: "C", text: "Formula" },
        { key: "D", text: "Function" },
        { key: "E", text: "Chart Object" }
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
        { key: "A", text: "#" },
        { key: "B", text: "$" },
        { key: "C", text: "=" },
        { key: "D", text: "&" },
        { key: "E", text: "%" }
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
        { key: "A", text: "+" },
        { key: "B", text: "-" },
        { key: "C", text: "*" },
        { key: "D", text: "/" },
        { key: "E", text: "^" }
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
        { key: "A", text: "Menghapus referensi sel" },
        { key: "B", text: "Menjalankan bagian tertentu lebih dahulu" },
        { key: "C", text: "Mengubah angka menjadi text" },
        { key: "D", text: "Membuat chart" },
        { key: "E", text: "Mengunci workbook" }
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
        { key: "A", text: "=SUMIF(criteria,range,sum_range)" },
        { key: "B", text: "=SUMIF(sum_range,criteria,range)" },
        { key: "C", text: "=SUMIF(range,criteria,sum_range)" },
        { key: "D", text: "=SUMIF(range,sum_range,criteria)" },
        { key: "E", text: "=SUMIF(criteria,sum_range,range)" }
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
        { key: "A", text: "SUM" },
        { key: "B", text: "SUMIF" },
        { key: "C", text: "SUMIFS" },
        { key: "D", text: "COUNTIFS" },
        { key: "E", text: "AVERAGE" }
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
        { key: "A", text: "COUNT" },
        { key: "B", text: "COUNTIF" },
        { key: "C", text: "COUNTIFS" },
        { key: "D", text: "SUMIFS" },
        { key: "E", text: "AVERAGEIFS" }
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
        { key: "A", text: "AVG" },
        { key: "B", text: "MEAN" },
        { key: "C", text: "AVERAGE" },
        { key: "D", text: "MID" },
        { key: "E", text: "MEDIAN" }
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
        { key: "A", text: "Name Box" },
        { key: "B", text: "Formula Bar" },
        { key: "C", text: "Status Bar" },
        { key: "D", text: "Page Layout" },
        { key: "E", text: "Format Painter" }
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
        { key: "A", text: "Filter" },
        { key: "B", text: "Merge" },
        { key: "C", text: "Goal Seek" },
        { key: "D", text: "Scenario Manager" },
        { key: "E", text: "WordArt" }
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
        { key: "A", text: "Clear Data" },
        { key: "B", text: "Delete Cells" },
        { key: "C", text: "Remove Duplicates" },
        { key: "D", text: "Remove Formatting" },
        { key: "E", text: "Unique Filter" }
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
        { key: "A", text: "Conditional Formatting" },
        { key: "B", text: "Pivot Chart" },
        { key: "C", text: "Page Break" },
        { key: "D", text: "Freeze Pane" },
        { key: "E", text: "Goal Seek" }
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
        { key: "A", text: "Angka negatif" },
        { key: "B", text: "Text" },
        { key: "C", text: "Cell kosong" },
        { key: "D", text: "Formula" },
        { key: "E", text: "Cell berformat currency" }
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
        { key: "A", text: "Membuat semua cell menjadi bold" },
        { key: "B", text: "Memudahkan penggunaan range dalam formula" },
        { key: "C", text: "Mengubah worksheet menjadi chart" },
        { key: "D", text: "Menghapus data duplikat" },
        { key: "E", text: "Mengunci workbook" }
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
        { key: "A", text: "HLOOKUP" },
        { key: "B", text: "LOOKUPTEXT" },
        { key: "C", text: "VLOOKUP" },
        { key: "D", text: "MATCHUP" },
        { key: "E", text: "INDEXUP" }
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
        { key: "A", text: "VLOOKUP" },
        { key: "B", text: "HLOOKUP" },
        { key: "C", text: "COUNTIF" },
        { key: "D", text: "SUMIF" },
        { key: "E", text: "SUMIFS" }
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
        { key: "A", text: "Pivot Table" },
        { key: "B", text: "WordArt" },
        { key: "C", text: "Goal Seek" },
        { key: "D", text: "Text Box" },
        { key: "E", text: "Page Break" }
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
        { key: "A", text: "Memiliki banyak cell kosong" },
        { key: "B", text: "Berbentuk tabular dengan header field" },
        { key: "C", text: "Hanya terdiri dari formula" },
        { key: "D", text: "Tidak memiliki header" },
        { key: "E", text: "Harus berupa chart" }
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
        { key: "A", text: "Report Filter" },
        { key: "B", text: "Column Labels" },
        { key: "C", text: "Row Labels" },
        { key: "D", text: "Values" },
        { key: "E", text: "Formula Bar" }
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
        { key: "A", text: "Mengubah warna worksheet" },
        { key: "B", text: "Menyaring data berdasarkan field" },
        { key: "C", text: "Menambah kolom worksheet" },
        { key: "D", text: "Menghapus formula" },
        { key: "E", text: "Membuat workbook baru" }
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
        { key: "A", text: "Bagian bawah worksheet" },
        { key: "B", text: "Bagian atas tabel pivot" },
        { key: "C", text: "Formula Bar" },
        { key: "D", text: "Status Bar" },
        { key: "E", text: "Page Layout" }
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
        { key: "A", text: "Menyimpan hasil perhitungan nilai" },
        { key: "B", text: "Menentukan judul workbook" },
        { key: "C", text: "Menentukan ukuran kertas" },
        { key: "D", text: "Menyimpan komentar" },
        { key: "E", text: "Mengatur page break" }
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
        { key: "A", text: "Compact, Outline, Tabular" },
        { key: "B", text: "Vertical, Horizontal, Diagonal" },
        { key: "C", text: "Basic, Advanced, Expert" },
        { key: "D", text: "Web, Print, Draft" },
        { key: "E", text: "Normal, Reading, Outline" }
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
        { key: "A", text: "Subtotals - Off" },
        { key: "B", text: "Subtotals - Top" },
        { key: "C", text: "Subtotals - Bottom" },
        { key: "D", text: "Grand Totals - Off" },
        { key: "E", text: "Blank Rows - Remove" }
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
        { key: "A", text: "Grand Totals - On for Rows" },
        { key: "B", text: "Grand Totals - On for Columns" },
        { key: "C", text: "Grand Totals - Off for Rows and Columns" },
        { key: "D", text: "Subtotals - Off" },
        { key: "E", text: "Blank Rows - Off" }
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
        { key: "A", text: "Menghapus seluruh data kosong" },
        { key: "B", text: "Menambahkan atau menghapus baris kosong antar item Pivot Table" },
        { key: "C", text: "Membuat workbook kosong" },
        { key: "D", text: "Menghapus worksheet" },
        { key: "E", text: "Menghapus formula" }
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
        { key: "A", text: "Calculated Field" },
        { key: "B", text: "Calculated Item" },
        { key: "C", text: "Formula Item" },
        { key: "D", text: "Report Field" },
        { key: "E", text: "Pivot Formula" }
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
        { key: "A", text: "Calculated Field" },
        { key: "B", text: "Calculated Item" },
        { key: "C", text: "Goal Seek" },
        { key: "D", text: "Scenario Item" },
        { key: "E", text: "Insert Function" }
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
        { key: "A", text: "Conditional Formatting" },
        { key: "B", text: "Pivot Chart" },
        { key: "C", text: "Name Box" },
        { key: "D", text: "Page Layout" },
        { key: "E", text: "Filter" }
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
        { key: "A", text: "Pie" },
        { key: "B", text: "Line" },
        { key: "C", text: "Doughnut" },
        { key: "D", text: "Scatter" },
        { key: "E", text: "Radar" }
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
        { key: "A", text: "Change Colors" },
        { key: "B", text: "Quick Layout" },
        { key: "C", text: "Select Data" },
        { key: "D", text: "Move Chart" },
        { key: "E", text: "Format Painter" }
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
        { key: "A", text: "Decimal Places" },
        { key: "B", text: "Display Units" },
        { key: "C", text: "Font Size" },
        { key: "D", text: "Data Labels" },
        { key: "E", text: "Legend" }
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
        { key: "A", text: "Move Chart" },
        { key: "B", text: "Select Data" },
        { key: "C", text: "Change Chart Type" },
        { key: "D", text: "Chart Styles" },
        { key: "E", text: "Remove Chart" }
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
        { key: "A", text: "Wrap Text" },
        { key: "B", text: "Merge & Center" },
        { key: "C", text: "Format as Table" },
        { key: "D", text: "Freeze Panes" },
        { key: "E", text: "Split" }
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
        { key: "A", text: "Scenario Manager" },
        { key: "B", text: "Goal Seek" },
        { key: "C", text: "Pivot Table" },
        { key: "D", text: "Solver Chart" },
        { key: "E", text: "Conditional Formatting" }
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
        { key: "A", text: "Goal Seek" },
        { key: "B", text: "Scenario Manager" },
        { key: "C", text: "Filter" },
        { key: "D", text: "Sort" },
        { key: "E", text: "Remove Duplicates" }
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
        { key: "A", text: "Scenario Summary" },
        { key: "B", text: "Chart Summary" },
        { key: "C", text: "Data Summary" },
        { key: "D", text: "Table Summary" },
        { key: "E", text: "Formula Summary" }
      ],
      answer: "A",
      explanation: "Scenario Summary menghasilkan laporan rangkuman terstruktur dalam worksheet baru yang membandingkan semua skenario variabel beserta sel hasil akhirnya.",
      tags: ["Scenario Summary", "What-If Analysis"]
    }
  ];
