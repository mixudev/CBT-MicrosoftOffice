/**
 * Microsoft Office 2019 Practice Lab - Master Question Bank
 * Total: 120 Soal Original (40 Excel, 40 PowerPoint, 40 Word)
 * Berdasarkan Modul Mahasiswa Office 2016 + Standar Ujian MOS Office 2019
 */

const QUESTION_BANK = {
  excel: [
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
  ],

  powerpoint: [
    {
      id: "POWERPOINT-001",
      app: "powerpoint",
      lesson: "PowerPoint 1: Workspace & Views",
      difficulty: "Basic",
      question: "Panel yang menampilkan thumbnail slide dan membantu berpindah antar slide adalah?",
      options: [
        { key: "A", text: "Notes Pane" },
        { key: "B", text: "Slides/Outline Pane" },
        { key: "C", text: "Status Pane" },
        { key: "D", text: "Chart Pane" },
        { key: "E", text: "Review Pane" }
      ],
      answer: "B",
      explanation: "Slides/Outline Pane di sisi kiri layar Normal View menampilkan thumbnail slide agar presenter dapat bernavigasi dan menata slide dengan cepat.",
      tags: ["Workspace", "Slides/Outline Pane"]
    },
    {
      id: "POWERPOINT-002",
      app: "powerpoint",
      lesson: "PowerPoint 1: Workspace & Views",
      difficulty: "Basic",
      question: "View yang digunakan untuk melihat presentasi dalam bentuk struktur slide dan outline adalah?",
      options: [
        { key: "A", text: "Slide Sorter" },
        { key: "B", text: "Outline View" },
        { key: "C", text: "Reading View" },
        { key: "D", text: "Notes Page" },
        { key: "E", text: "Slide Show" }
      ],
      answer: "B",
      explanation: "Outline View menampilkan teks judul dan isi poin utama dari setiap slide dalam bentuk hierarki teks terstruktur.",
      tags: ["Workspace", "Outline View"]
    },
    {
      id: "POWERPOINT-003",
      app: "powerpoint",
      lesson: "PowerPoint 1: Workspace & Views",
      difficulty: "Basic",
      question: "View yang paling sesuai untuk mengurutkan slide dengan cepat adalah?",
      options: [
        { key: "A", text: "Normal" },
        { key: "B", text: "Slide Sorter" },
        { key: "C", text: "Notes Page" },
        { key: "D", text: "Outline" },
        { key: "E", text: "Presenter View" }
      ],
      answer: "B",
      explanation: "Slide Sorter menyajikan seluruh slide dalam format kisi-kisi thumbnail mini sehingga memudahkan reorganisasi urutan melalui drag-and-drop.",
      tags: ["Slide Sorter", "Views"]
    },
    {
      id: "POWERPOINT-004",
      app: "powerpoint",
      lesson: "PowerPoint 2: Slide Master & Themes",
      difficulty: "Intermediate",
      question: "Fitur yang digunakan untuk membuat dan mengatur tema/layout secara terpusat adalah?",
      options: [
        { key: "A", text: "Slide Master" },
        { key: "B", text: "Slide Sorter" },
        { key: "C", text: "Notes Master" },
        { key: "D", text: "Chart Master" },
        { key: "E", text: "Review Master" }
      ],
      answer: "A",
      explanation: "Slide Master adalah template induk hierarki teratas yang mengontrol font, warna, latar belakang, dan tata letak seluruh slide dalam presentasi.",
      tags: ["Slide Master", "Themes"]
    },
    {
      id: "POWERPOINT-005",
      app: "powerpoint",
      lesson: "PowerPoint 2: Slide Master & Themes",
      difficulty: "Basic",
      question: "Perubahan pada Slide Master akan berdampak terutama pada?",
      options: [
        { key: "A", text: "Hanya file PDF" },
        { key: "B", text: "Semua slide yang menggunakan layout/master tersebut" },
        { key: "C", text: "Hanya slide terakhir" },
        { key: "D", text: "Hanya speaker notes" },
        { key: "E", text: "Hanya slide yang tersembunyi" }
      ],
      answer: "B",
      explanation: "Mengubah elemen atau format di Slide Master secara otomatis diterapkan ke semua slide dalam presentasi yang mengacu pada master atau layout tersebut.",
      tags: ["Slide Master", "Consistency"]
    },
    {
      id: "POWERPOINT-006",
      app: "powerpoint",
      lesson: "PowerPoint 2: Slide Master & Themes",
      difficulty: "Basic",
      question: "Contoh layout yang dapat ditemukan dalam Slide Master adalah?",
      options: [
        { key: "A", text: "Two Content" },
        { key: "B", text: "Formula Layout" },
        { key: "C", text: "Database Layout" },
        { key: "D", text: "Pivot Layout" },
        { key: "E", text: "Spreadsheet Layout" }
      ],
      answer: "A",
      explanation: "Two Content adalah salah satu tata letak standar PowerPoint untuk membandingkan dua blok konten/teks secara berdampingan.",
      tags: ["Slide Layout", "Slide Master"]
    },
    {
      id: "POWERPOINT-007",
      app: "powerpoint",
      lesson: "PowerPoint 2: Slide Master & Themes",
      difficulty: "Basic",
      question: "Untuk membuat kelompok warna tema presentasi dapat digunakan?",
      options: [
        { key: "A", text: "Theme Colors" },
        { key: "B", text: "Formula Colors" },
        { key: "C", text: "Chart Colors Only" },
        { key: "D", text: "Grid Colors" },
        { key: "E", text: "Print Colors" }
      ],
      answer: "A",
      explanation: "Theme Colors pada tab Design memungkinkan presenter memilih atau mengkustomisasi palet warna terpadu yang berlaku untuk teks, bentuk, dan grafik.",
      tags: ["Theme Colors", "Themes"]
    },
    {
      id: "POWERPOINT-008",
      app: "powerpoint",
      lesson: "PowerPoint 3: Objects & Formatting",
      difficulty: "Basic",
      question: "Jika gambar ditempatkan di atas teks dan harus berada di belakang teks, gunakan?",
      options: [
        { key: "A", text: "Bring to Front" },
        { key: "B", text: "Send to Back" },
        { key: "C", text: "Crop" },
        { key: "D", text: "Group" },
        { key: "E", text: "Align" }
      ],
      answer: "B",
      explanation: "Send to Back (Kirim ke Belakang) memindahkan objek yang dipilih ke lapisan urutan tumpukan paling bawah di belakang objek lainnya.",
      tags: ["Send to Back", "Object Order"]
    },
    {
      id: "POWERPOINT-009",
      app: "powerpoint",
      lesson: "PowerPoint 3: Objects & Formatting",
      difficulty: "Basic",
      question: "Untuk memberikan warna isi pada sebuah shape gunakan?",
      options: [
        { key: "A", text: "Shape Fill" },
        { key: "B", text: "Shape Outline" },
        { key: "C", text: "Shape Weight" },
        { key: "D", text: "Shape Crop" },
        { key: "E", text: "Shape View" }
      ],
      answer: "A",
      explanation: "Shape Fill memberi warna solid, gradien, tekstur, atau gambar ke dalam bagian dalam bentuk (shape).",
      tags: ["Shape", "Shape Fill"]
    },
    {
      id: "POWERPOINT-010",
      app: "powerpoint",
      lesson: "PowerPoint 3: Objects & Formatting",
      difficulty: "Basic",
      question: "Untuk mengubah ketebalan garis pada shape gunakan?",
      options: [
        { key: "A", text: "Weight" },
        { key: "B", text: "Dashes" },
        { key: "C", text: "Arrows" },
        { key: "D", text: "Crop" },
        { key: "E", text: "Recolor" }
      ],
      answer: "A",
      explanation: "Pilihan Weight pada opsi Shape Outline digunakan untuk menentukan ukuran ketebalan garis tepi bentuk (misal 1 pt, 2.25 pt, 6 pt).",
      tags: ["Shape Outline", "Weight"]
    },
    {
      id: "POWERPOINT-011",
      app: "powerpoint",
      lesson: "PowerPoint 3: Objects & Formatting",
      difficulty: "Basic",
      question: "Jika beberapa objek ingin diperlakukan sebagai satu kesatuan, gunakan?",
      options: [
        { key: "A", text: "Merge" },
        { key: "B", text: "Group" },
        { key: "C", text: "Combine Slide" },
        { key: "D", text: "Join View" },
        { key: "E", text: "Link" }
      ],
      answer: "B",
      explanation: "Fitur Group (Ctrl + G) menggabungkan beberapa bentuk atau objek individual menjadi satu objek tunggal agar dapat digerakkan atau diformat bersama.",
      tags: ["Group", "Objects"]
    },
    {
      id: "POWERPOINT-012",
      app: "powerpoint",
      lesson: "PowerPoint 1: Workspace & Views",
      difficulty: "Basic",
      question: "View yang paling sesuai untuk membuat kerangka/rancangan presentasi adalah?",
      options: [
        { key: "A", text: "Outline View" },
        { key: "B", text: "Slide Show" },
        { key: "C", text: "Notes Page" },
        { key: "D", text: "Reading View" },
        { key: "E", text: "Handout Master" }
      ],
      answer: "A",
      explanation: "Outline View sangat efisien untuk perancangan kerangka naskah karena fokus pada susunan teks judul dan daftar poin tanpa terganggu tata letak visual.",
      tags: ["Outline View", "Planning"]
    },
    {
      id: "POWERPOINT-013",
      app: "powerpoint",
      lesson: "PowerPoint 1: Workspace & Views",
      difficulty: "Intermediate",
      question: "Shortcut yang dapat membuat slide baru dari Outline dengan cepat adalah?",
      options: [
        { key: "A", text: "Ctrl + N" },
        { key: "B", text: "Ctrl + Enter" },
        { key: "C", text: "Ctrl + Shift + N" },
        { key: "D", text: "Alt + Enter" },
        { key: "E", text: "Shift + Enter" }
      ],
      answer: "B",
      explanation: "Ketika bekerja di dalam Outline atau placeholder teks, menekan tombol Ctrl + Enter pada akhir teks judul atau placeholder akan otomatis membuat slide baru.",
      tags: ["Ctrl+Enter", "Shortcuts"]
    },
    {
      id: "POWERPOINT-014",
      app: "powerpoint",
      lesson: "PowerPoint 1: Workspace & Views",
      difficulty: "Basic",
      question: "Untuk membuat teks menjadi sub-level pada outline, shortcut yang digunakan adalah?",
      options: [
        { key: "A", text: "Tab" },
        { key: "B", text: "Ctrl + Tab" },
        { key: "C", text: "Shift + Enter" },
        { key: "D", text: "Alt + Tab" },
        { key: "E", text: "Ctrl + Shift" }
      ],
      answer: "A",
      explanation: "Menekan tombol Tab (Demote) menurunkan level poin ke tingkat sub-level (sub-poin), sedangkan Shift + Tab (Promote) menaikkan level poin.",
      tags: ["Outline", "Indentation"]
    },
    {
      id: "POWERPOINT-015",
      app: "powerpoint",
      lesson: "PowerPoint 3: Typography & Text",
      difficulty: "Basic",
      question: "Fitur untuk mengatur jarak antar karakter dalam teks adalah?",
      options: [
        { key: "A", text: "Character Spacing" },
        { key: "B", text: "Paragraph Spacing" },
        { key: "C", text: "Line Spacing" },
        { key: "D", text: "Word Wrap" },
        { key: "E", text: "Text Alignment" }
      ],
      answer: "A",
      explanation: "Character Spacing (Font > Character Spacing) mengatur kerapatan horizontal antar huruf (Very Tight, Tight, Normal, Loose, Very Loose).",
      tags: ["Character Spacing", "Typography"]
    },
    {
      id: "POWERPOINT-016",
      app: "powerpoint",
      lesson: "PowerPoint 3: Typography & Text",
      difficulty: "Basic",
      question: "Jika teks ingin diubah menjadi huruf kapital semua dengan cepat, gunakan?",
      options: [
        { key: "A", text: "Change Case" },
        { key: "B", text: "Text Transform" },
        { key: "C", text: "Font Style" },
        { key: "D", text: "Upper Font" },
        { key: "E", text: "Character Scale" }
      ],
      answer: "A",
      explanation: "Tombol Change Case (Aa) menyediakan opsi UPPERCASE untuk mengubah teks yang dipilih menjadi huruf kapital tanpa mengetik ulang.",
      tags: ["Change Case", "Formatting"]
    },
    {
      id: "POWERPOINT-017",
      app: "powerpoint",
      lesson: "PowerPoint 3: Typography & Text",
      difficulty: "Intermediate",
      question: "Manakah yang termasuk efek teks?",
      options: [
        { key: "A", text: "Bevel" },
        { key: "B", text: "Table" },
        { key: "C", text: "Crop" },
        { key: "D", text: "Pivot" },
        { key: "E", text: "Filter" }
      ],
      answer: "A",
      explanation: "Bevel adalah salah satu variasi Text Effects (di samping Shadow, Reflection, Glow, 3D Rotation, dan Transform) yang memberikan kesan timbul pada huruf.",
      tags: ["Text Effects", "Bevel"]
    },
    {
      id: "POWERPOINT-018",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Untuk membuat tabel langsung di dalam slide digunakan?",
      options: [
        { key: "A", text: "Insert > Table" },
        { key: "B", text: "Review > Table" },
        { key: "C", text: "View > Table" },
        { key: "D", text: "Design > Grid" },
        { key: "E", text: "Slide Show > Table" }
      ],
      answer: "A",
      explanation: "Perintah membuat tabel terdapat pada tab ribbon Insert > Table.",
      tags: ["Table", "Ribbon"]
    },
    {
      id: "POWERPOINT-019",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Untuk memasukkan gambar dari file komputer gunakan?",
      options: [
        { key: "A", text: "Insert > Picture" },
        { key: "B", text: "Review > Picture" },
        { key: "C", text: "Design > Picture" },
        { key: "D", text: "View > Picture" },
        { key: "E", text: "Notes > Picture" }
      ],
      answer: "A",
      explanation: "Untuk menyisipkan gambar lokal dari penyimpanan perangkat, akses tab Insert > Pictures (atau Pictures > This Device).",
      tags: ["Picture", "Insert"]
    },
    {
      id: "POWERPOINT-020",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Jika hanya sebagian area gambar yang ingin ditampilkan, gunakan?",
      options: [
        { key: "A", text: "Crop" },
        { key: "B", text: "Recolor" },
        { key: "C", text: "Correction" },
        { key: "D", text: "Reset" },
        { key: "E", text: "Transparent Color" }
      ],
      answer: "A",
      explanation: "Fitur Crop (Pangkas) membuang bagian luar gambar yang tidak diinginkan sehingga hanya area spesifik yang tampil pada slide.",
      tags: ["Crop", "Picture Tools"]
    },
    {
      id: "POWERPOINT-021",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Correction pada gambar digunakan antara lain untuk mengatur?",
      options: [
        { key: "A", text: "Brightness/Contrast" },
        { key: "B", text: "Slide Timing" },
        { key: "C", text: "Chart Axis" },
        { key: "D", text: "Animation Order" },
        { key: "E", text: "Table Border" }
      ],
      answer: "A",
      explanation: "Opsi Corrections pada Picture Tools digunakan untuk mengatur ketajaman (Sharpen/Soften) serta kecerahan dan kontras gambar (Brightness/Contrast).",
      tags: ["Correction", "Picture Tools"]
    },
    {
      id: "POWERPOINT-022",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Fitur Color dapat digunakan untuk melakukan?",
      options: [
        { key: "A", text: "Recolor" },
        { key: "B", text: "Group" },
        { key: "C", text: "Animate" },
        { key: "D", text: "Crop Text" },
        { key: "E", text: "Merge Slides" }
      ],
      answer: "A",
      explanation: "Menu Color pada Picture Format menyediakan fasilitas Color Saturation, Color Tone, serta Recolor (seperti grayscale, sepia, atau tint warna tema).",
      tags: ["Recolor", "Color"]
    },
    {
      id: "POWERPOINT-023",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Intermediate",
      question: "Jika satu warna tertentu pada gambar ingin dibuat transparan, gunakan?",
      options: [
        { key: "A", text: "Set Transparent Color" },
        { key: "B", text: "Remove Animation" },
        { key: "C", text: "Crop Color" },
        { key: "D", text: "Transparent Border" },
        { key: "E", text: "Color Lock" }
      ],
      answer: "A",
      explanation: "Tool Set Transparent Color (di bawah menu Color) memungkinkan kita mengklik satu warna piksel tertentu pada gambar untuk menjadikannya tembus pandang.",
      tags: ["Set Transparent Color", "Picture"]
    },
    {
      id: "POWERPOINT-024",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Intermediate",
      question: "Pada Remove Background, untuk menunjukkan bagian gambar yang harus dihapus gunakan?",
      options: [
        { key: "A", text: "Mark Areas to Remove" },
        { key: "B", text: "Mark Areas to Keep" },
        { key: "C", text: "Remove Marker" },
        { key: "D", text: "Delete Picture" },
        { key: "E", text: "Crop Selection" }
      ],
      answer: "A",
      explanation: "Dalam tool Remove Background, 'Mark Areas to Remove' digunakan untuk menandai bagian gambar yang ingin dihapus dengan warna ungu (magenta).",
      tags: ["Remove Background", "Mark Areas to Remove"]
    },
    {
      id: "POWERPOINT-025",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Galeri yang menyediakan gaya visual siap pakai untuk gambar disebut?",
      options: [
        { key: "A", text: "Picture Styles" },
        { key: "B", text: "Shape Styles" },
        { key: "C", text: "Chart Themes" },
        { key: "D", text: "Slide Styles" },
        { key: "E", text: "Image Themes" }
      ],
      answer: "A",
      explanation: "Picture Styles menyediakan kumpulan preset bingkai, bayangan, sudut melengkung, dan efek 3D instan untuk gambar.",
      tags: ["Picture Styles", "Formatting"]
    },
    {
      id: "POWERPOINT-026",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Intermediate",
      question: "Efek yang digunakan untuk membuat gambar terlihat berputar dalam perspektif 3D adalah?",
      options: [
        { key: "A", text: "Reflection" },
        { key: "B", text: "Glow" },
        { key: "C", text: "3D Rotation" },
        { key: "D", text: "Bevel" },
        { key: "E", text: "Soft Edges" }
      ],
      answer: "C",
      explanation: "3D Rotation pada Picture Effects memutar objek sepanjang sumbu X, Y, dan Z untuk menciptakan efek sudut pandang tiga dimensi.",
      tags: ["3D Rotation", "Picture Effects"]
    },
    {
      id: "POWERPOINT-027",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Fitur yang digunakan untuk menggambarkan hubungan, proses, hierarki, atau ide secara visual adalah?",
      options: [
        { key: "A", text: "SmartArt" },
        { key: "B", text: "WordArt" },
        { key: "C", text: "Table" },
        { key: "D", text: "Notes" },
        { key: "E", text: "Outline" }
      ],
      answer: "A",
      explanation: "SmartArt Graphics adalah representasi visual diagramatik untuk mengkomunikasikan informasi, alur proses, dan struktur organisasi.",
      tags: ["SmartArt", "Visuals"]
    },
    {
      id: "POWERPOINT-028",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Jenis SmartArt yang tepat untuk struktur organisasi adalah?",
      options: [
        { key: "A", text: "Cycle" },
        { key: "B", text: "Process" },
        { key: "C", text: "Hierarchy" },
        { key: "D", text: "Matrix" },
        { key: "E", text: "List" }
      ],
      answer: "C",
      explanation: "Kategori Hierarchy (termasuk Organization Chart) dirancang khusus untuk memetakan hubungan tingkatan struktur vertikal dan horizontal.",
      tags: ["SmartArt", "Hierarchy"]
    },
    {
      id: "POWERPOINT-029",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Untuk menampilkan angka penjualan dalam bentuk visual, fitur yang digunakan adalah?",
      options: [
        { key: "A", text: "Chart" },
        { key: "B", text: "SmartArt" },
        { key: "C", text: "Text Box" },
        { key: "D", text: "WordArt" },
        { key: "E", text: "Notes" }
      ],
      answer: "A",
      explanation: "Chart (Grafik) adalah alat utama untuk menampilkan data numerik kuantitatif seperti angka penjualan secara grafis.",
      tags: ["Chart", "Visuals"]
    },
    {
      id: "POWERPOINT-030",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Ketika chart dibuat langsung di PowerPoint, data chart biasanya diedit melalui?",
      options: [
        { key: "A", text: "Worksheet/data sheet" },
        { key: "B", text: "Notes Pane" },
        { key: "C", text: "Slide Master" },
        { key: "D", text: "Outline Pane" },
        { key: "E", text: "Animation Pane" }
      ],
      answer: "A",
      explanation: "PowerPoint membuka jendela mini spreadsheet Excel (worksheet/data sheet) untuk menginput dan memodifikasi data angka grafik.",
      tags: ["Chart Data", "Worksheet"]
    },
    {
      id: "POWERPOINT-031",
      app: "powerpoint",
      lesson: "PowerPoint 4: Media, Tables & SmartArt",
      difficulty: "Basic",
      question: "Untuk menampilkan Data Labels pada chart digunakan?",
      options: [
        { key: "A", text: "Add Chart Element" },
        { key: "B", text: "Slide Master" },
        { key: "C", text: "Change Case" },
        { key: "D", text: "Review" },
        { key: "E", text: "Notes" }
      ],
      answer: "A",
      explanation: "Tombol 'Add Chart Element' pada tab Chart Design digunakan untuk menyisipkan elemen grafik seperti Data Labels, Axis Titles, Error Bars, dan Legend.",
      tags: ["Add Chart Element", "Chart"]
    },
    {
      id: "POWERPOINT-032",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Intermediate",
      question: "Fitur yang digunakan untuk memotong durasi video tanpa aplikasi editing video eksternal adalah?",
      options: [
        { key: "A", text: "Trim Video" },
        { key: "B", text: "Crop Video" },
        { key: "C", text: "Cut Slide" },
        { key: "D", text: "Video Cropper" },
        { key: "E", text: "Reduce Media" }
      ],
      answer: "A",
      explanation: "Fitur Trim Video (pada Video Tools > Playback) memotong titik awal (Start Time) dan titik akhir (End Time) klip video langsung di PowerPoint.",
      tags: ["Video", "Trim Video"]
    },
    {
      id: "POWERPOINT-033",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Intermediate",
      question: "Untuk menandai titik tertentu pada timeline video agar mudah dilompat kembali gunakan?",
      options: [
        { key: "A", text: "Bookmark" },
        { key: "B", text: "Loop" },
        { key: "C", text: "Rewind" },
        { key: "D", text: "Playhead" },
        { key: "E", text: "Anchor Text" }
      ],
      answer: "A",
      explanation: "Bookmark pada video timeline menandai momen penting dalam video yang dapat dijadikan acuan navigasi atau pemicu animasi (trigger).",
      tags: ["Bookmark", "Video"]
    },
    {
      id: "POWERPOINT-034",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Intermediate",
      question: "Jika audio harus tetap dimainkan ketika presentasi berpindah slide, gunakan?",
      options: [
        { key: "A", text: "Play Across Slides" },
        { key: "B", text: "Play One Slide" },
        { key: "C", text: "Stop Across Slides" },
        { key: "D", text: "Continue Animation" },
        { key: "E", text: "Rewind Slide" }
      ],
      answer: "A",
      explanation: "Opsi Play Across Slides pada tab Audio Tools > Playback menjaga file musik atau narasi terus berputar saat presenter beralih dari satu slide ke slide berikutnya.",
      tags: ["Audio", "Play Across Slides"]
    },
    {
      id: "POWERPOINT-035",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Basic",
      question: "Jika audio harus berulang sampai presentasi dihentikan, gunakan?",
      options: [
        { key: "A", text: "Hide During Show" },
        { key: "B", text: "Loop Until Stopped" },
        { key: "C", text: "Rewind After Playing" },
        { key: "D", text: "Play On Click" },
        { key: "E", text: "Trim Audio" }
      ],
      answer: "B",
      explanation: "Centang opsi 'Loop until Stopped' agar audio yang telah selesai otomatis diputar ulang dari awal secara berkesinambungan.",
      tags: ["Audio", "Loop Until Stopped"]
    },
    {
      id: "POWERPOINT-036",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Basic",
      question: "Manakah yang termasuk kategori animation?",
      options: [
        { key: "A", text: "Entrance" },
        { key: "B", text: "Theme" },
        { key: "C", text: "Layout" },
        { key: "D", text: "Review" },
        { key: "E", text: "Handout" }
      ],
      answer: "A",
      explanation: "Empat kelompok efek animasi objek pada PowerPoint adalah Entrance (Masuk), Emphasis (Penekanan), Exit (Keluar), dan Motion Paths (Jalur Gerak).",
      tags: ["Animation", "Entrance"]
    },
    {
      id: "POWERPOINT-037",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Intermediate",
      question: "Untuk membuat animasi berjalan setelah animasi sebelumnya selesai, gunakan?",
      options: [
        { key: "A", text: "Start On Click" },
        { key: "B", text: "With Previous" },
        { key: "C", text: "After Previous" },
        { key: "D", text: "Delay Only" },
        { key: "E", text: "Trigger Off" }
      ],
      answer: "C",
      explanation: "Pengaturan timing 'After Previous' memulai efek animasi secara otomatis seketika setelah animasi yang mendahuluinya rampung dieksekusi.",
      tags: ["Animation", "After Previous"]
    },
    {
      id: "POWERPOINT-038",
      app: "powerpoint",
      lesson: "PowerPoint 5: Video, Audio & Animation",
      difficulty: "Basic",
      question: "Jika transisi slide ingin berjalan otomatis berdasarkan waktu, gunakan pengaturan?",
      options: [
        { key: "A", text: "Advance Slide - By Time" },
        { key: "B", text: "Start - With Previous" },
        { key: "C", text: "Animate Text" },
        { key: "D", text: "Slide Sorter" },
        { key: "E", text: "Apply Theme" }
      ],
      answer: "A",
      explanation: "Pada tab Transitions, kelompok 'Advance Slide' memungkinkan pengaturan pergantian slide otomatis setelah durasi waktu tertentu (After: mm:ss).",
      tags: ["Transition", "Advance Slide"]
    },
    {
      id: "POWERPOINT-039",
      app: "powerpoint",
      lesson: "PowerPoint 6: Delivery & Export",
      difficulty: "Basic",
      question: "Fitur yang memungkinkan presenter melihat notes pada laptop sementara audiens melihat slide adalah?",
      options: [
        { key: "A", text: "Presenter View" },
        { key: "B", text: "Reading View" },
        { key: "C", text: "Outline View" },
        { key: "D", text: "Slide Sorter" },
        { key: "E", text: "Normal View" }
      ],
      answer: "A",
      explanation: "Presenter View menampilkan slide saat ini, slide berikutnya, catatan pembicara (speaker notes), serta timer pada layar pribadi pembicara saat proyektor terhubung.",
      tags: ["Presenter View", "Delivery"]
    },
    {
      id: "POWERPOINT-040",
      app: "powerpoint",
      lesson: "PowerPoint 6: Delivery & Export",
      difficulty: "Basic",
      question: "Untuk membuat presentasi menjadi file PDF, JPG, atau video, gunakan fitur?",
      options: [
        { key: "A", text: "Export / Save As" },
        { key: "B", text: "Slide Master" },
        { key: "C", text: "Review" },
        { key: "D", text: "Outline" },
        { key: "E", text: "Animation Pane" }
      ],
      answer: "A",
      explanation: "Menu File > Export (atau Save As) memungkinkan konversi presentasi ke dokumen PDF/XPS, video MP4/WMV, animasi GIF, atau format gambar slide JPG/PNG.",
      tags: ["Export", "Publish"]
    }
  ],

  word: [
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
  ]
};

// Global export for vanilla browser usage and module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK };
}
