/**
 * Microsoft PowerPoint 2019 - Question Bank
 * Extracted verbatim from the master question bank.
 * Content is source-of-truth: DO NOT EDIT question, options, answers,
 * explanations, lessons, difficulty, or tags.
 */

const POWERPOINT_QUESTION_BANK = [
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
  ];
