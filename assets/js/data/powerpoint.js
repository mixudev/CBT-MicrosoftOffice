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
        { key: "A", text: "Notes Pane", rationale: "Salah. Notes Pane digunakan untuk mengetik speaker notes di bawah slide, bukan thumbnail." },
        { key: "B", text: "Slides/Outline Pane", rationale: "Benar. Slides/Outline Pane menampilkan thumbnail slide untuk navigasi cepat dan penataan urutan." },
        { key: "C", text: "Status Pane", rationale: "Salah. Status bar di bagian bawah menampilkan nomor slide, bahasa, dan shortcut view, bukan thumbnail." },
        { key: "D", text: "Chart Pane", rationale: "Salah. Chart Pane bukan panel navigasi standar PowerPoint; grafik diedit di area slide langsung." },
        { key: "E", text: "Review Pane", rationale: "Salah. Review Pane digunakan untuk komentar dan perbandingan revisi naskah presentasi." }
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
        { key: "A", text: "Slide Sorter", rationale: "Salah. Slide Sorter menampilkan kisi thumbnail slide visual, bukan teks struktur outline." },
        { key: "B", text: "Outline View", rationale: "Benar. Outline View menampilkan judul dan poin utama tiap slide dalam bentuk hierarki teks berurutan." },
        { key: "C", text: "Reading View", rationale: "Salah. Reading View menampilkan presentasi hampir full screen dalam jendela untuk membaca santai." },
        { key: "D", text: "Notes Page", rationale: "Salah. Notes Page menampilkan slide beserta catatan pembicara di bawahnya untuk keperluan cetak." },
        { key: "E", text: "Slide Show", rationale: "Salah. Slide Show menampilkan presentasi layar penuh kepada audiens dengan efek transisi aktif." }
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
        { key: "A", text: "Normal", rationale: "Salah. Normal View fokus pada pengeditan konten satu slide individual, bukan pengurutan massal." },
        { key: "B", text: "Slide Sorter", rationale: "Benar. Slide Sorter menampilkan semua slide dalam kisi-kisi thumbnail mini untuk reorganisasi drag-and-drop." },
        { key: "C", text: "Notes Page", rationale: "Salah. Notes Page digunakan untuk memeriksa catatan presenter per slide dalam format cetak." },
        { key: "D", text: "Outline", rationale: "Salah. Outline fokus pada susunan teks naskah, bukan pengaturan tata letak visual seluruh slide." },
        { key: "E", text: "Presenter View", rationale: "Salah. Presenter View digunakan saat membawakan presentasi di depan audiens dengan dua layar." }
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
        { key: "A", text: "Slide Master", rationale: "Benar. Slide Master adalah template hierarki tertinggi yang mengontrol tema, font, dan layout semua slide." },
        { key: "B", text: "Slide Sorter", rationale: "Salah. Slide Sorter adalah mode tampilan untuk mengatur urutan slide, bukan mengelola template tema." },
        { key: "C", text: "Notes Master", rationale: "Salah. Notes Master mengatur tata letak cetak catatan pembicara, bukan slide utama." },
        { key: "D", text: "Chart Master", rationale: "Salah. PowerPoint tidak memiliki fitur bernama Chart Master; grafik diatur melalui Chart Styles." },
        { key: "E", text: "Review Master", rationale: "Salah. Review Master bukan fitur standar yang ada di dalam aplikasi Microsoft PowerPoint." }
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
        { key: "A", text: "Hanya file PDF", rationale: "Salah. Perubahan Slide Master berdampak pada file presentasi PPTX, bukan saat ekspor PDF saja." },
        { key: "B", text: "Semua slide yang menggunakan layout/master tersebut", rationale: "Benar. Modifikasi Slide Master otomatis diterapkan ke seluruh slide yang terikat master tersebut." },
        { key: "C", text: "Hanya slide terakhir", rationale: "Salah. Slide Master bersifat global bagi semua slide, bukan hanya slide posisi terakhir." },
        { key: "D", text: "Hanya speaker notes", rationale: "Salah. Speaker notes diatur oleh Notes Master, bukan oleh Slide Master utama." },
        { key: "E", text: "Hanya slide yang tersembunyi", rationale: "Salah. Slide Master mempengaruhi seluruh slide, baik yang tersembunyi maupun yang ditampilkan." }
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
        { key: "A", text: "Two Content", rationale: "Benar. Two Content adalah layout standar Slide Master untuk membandingkan dua blok konten." },
        { key: "B", text: "Formula Layout", rationale: "Salah. Formula Layout bukan nama tata letak slide yang ada di PowerPoint." },
        { key: "C", text: "Database Layout", rationale: "Salah. Database Layout bukan nama tata letak slide bawaan Microsoft PowerPoint." },
        { key: "D", text: "Pivot Layout", rationale: "Salah. Pivot Layout adalah istilah tata letak laporan Pivot Table di Excel, bukan slide PowerPoint." },
        { key: "E", text: "Spreadsheet Layout", rationale: "Salah. Spreadsheet Layout bukan nama tata letak slide resmi di PowerPoint." }
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
        { key: "A", text: "Theme Colors", rationale: "Benar. Theme Colors pada tab Design memungkinkan pemilihan atau penyesuaian palet warna terpadu presentasi." },
        { key: "B", text: "Formula Colors", rationale: "Salah. Formula Colors bukan fitur pewarnaan tema di PowerPoint." },
        { key: "C", text: "Chart Colors Only", rationale: "Salah. Chart Colors hanya mengatur warna seri grafik, bukan seluruh tema presentasi." },
        { key: "D", text: "Grid Colors", rationale: "Salah. Grid Colors hanya mengatur warna garis bantu panduan, bukan tema desain slide." },
        { key: "E", text: "Print Colors", rationale: "Salah. Print Colors bukan nama fitur untuk menentukan palet warna tema presentasi." }
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
        { key: "A", text: "Bring to Front", rationale: "Salah. Bring to Front membawa gambar ke lapisan paling atas, menutupi teks." },
        { key: "B", text: "Send to Back", rationale: "Benar. Send to Back memindahkan gambar ke lapisan terbawah sehingga teks tampil di atasnya." },
        { key: "C", text: "Crop", rationale: "Salah. Crop memotong bagian luar gambar, tidak mengubah urutan tumpukan lapisan objek." },
        { key: "D", text: "Group", rationale: "Salah. Group menggabungkan beberapa objek menjadi satu kesatuan, tidak mengatur urutan tumpukan." },
        { key: "E", text: "Align", rationale: "Salah. Align mengatur perataan posisi relatif objek (kiri, tengah, kanan), bukan urutan lapisan." }
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
        { key: "A", text: "Shape Fill", rationale: "Benar. Shape Fill memberikan warna solid, gradien, tekstur, atau gambar ke dalam area bentuk (shape)." },
        { key: "B", text: "Shape Outline", rationale: "Salah. Shape Outline digunakan untuk mewarnai garis tepi batas luar bentuk, bukan bagian dalam." },
        { key: "C", text: "Shape Weight", rationale: "Salah. Weight menentukan ketebalan garis tepi outline, bukan mengisi warna isi bidang." },
        { key: "D", text: "Shape Crop", rationale: "Salah. Shape Crop bukan tombol untuk memberi warna latar atau isi shape." },
        { key: "E", text: "Shape View", rationale: "Salah. Shape View bukan perintah atau fitur pewarnaan bentuk di PowerPoint." }
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
        { key: "A", text: "Weight", rationale: "Benar. Weight pada menu Shape Outline menentukan ukuran ketebalan garis tepi bentuk dalam satuan poin (pt)." },
        { key: "B", text: "Dashes", rationale: "Salah. Dashes menentukan corak putus-putus garis tepi, bukan mengatur ketebalan garis." },
        { key: "C", text: "Arrows", rationale: "Salah. Arrows menambahkan mata panah di ujung garis shape, bukan mengatur ketebalan garis." },
        { key: "D", text: "Crop", rationale: "Salah. Crop memotong area gambar yang tidak diinginkan, tidak berkaitan dengan garis tepi shape." },
        { key: "E", text: "Recolor", rationale: "Salah. Recolor mengubah filter warna gambar bitmap, bukan ketebalan garis bentuk vektor." }
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
        { key: "A", text: "Merge", rationale: "Salah. Merge biasanya digunakan untuk menggabungkan sel tabel atau shape via Merge Shapes, bukan mengelompokkan objek." },
        { key: "B", text: "Group", rationale: "Benar. Fitur Group (Ctrl+G) menyatukan beberapa objek terpisah menjadi satu kesatuan yang mudah dikelola." },
        { key: "C", text: "Combine Slide", rationale: "Salah. Combine Slide bukan perintah yang ada di PowerPoint untuk menyatukan objek." },
        { key: "D", text: "Join View", rationale: "Salah. Join View bukan fitur yang ada di Microsoft PowerPoint." },
        { key: "E", text: "Link", rationale: "Salah. Link (Hyperlink) membuat tautan navigasi ke slide atau URL, bukan menyatukan bentuk." }
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
        { key: "A", text: "Outline View", rationale: "Benar. Outline View fokus pada penyusunan kerangka naskah, hierarki teks judul, dan poin-poin utama presentasi." },
        { key: "B", text: "Slide Show", rationale: "Salah. Slide Show menampilkan presentasi final layar penuh, bukan untuk menyusun rancangan." },
        { key: "C", text: "Notes Page", rationale: "Salah. Notes Page ditujukan untuk melihat atau mencetak slide bersama catatan pembicara." },
        { key: "D", text: "Reading View", rationale: "Salah. Reading View digunakan untuk membaca slide seperti tampilan slide show dalam window." },
        { key: "E", text: "Handout Master", rationale: "Salah. Handout Master mengatur tata letak cetak dokumen handout untuk audiens." }
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
        { key: "A", text: "Ctrl + N", rationale: "Salah. Ctrl + N membuat file presentasi baru yang masih kosong sama sekali." },
        { key: "B", text: "Ctrl + Enter", rationale: "Benar. Ctrl + Enter pada akhir teks outline atau placeholder otomatis membuat slide baru." },
        { key: "C", text: "Ctrl + Shift + N", rationale: "Salah. Shortcut ini bukan kombinasi standar untuk membuat slide baru di PowerPoint." },
        { key: "D", text: "Alt + Enter", rationale: "Salah. Alt + Enter bukan shortcut untuk membuat slide baru dari outline." },
        { key: "E", text: "Shift + Enter", rationale: "Salah. Shift + Enter membuat line break (baris baru) di dalam satu paragraf yang sama." }
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
        { key: "A", text: "Tab", rationale: "Benar. Menekan tombol Tab (Demote) menurunkan tingkat teks menjadi sub-level (sub-poin)." },
        { key: "B", text: "Ctrl + Tab", rationale: "Salah. Ctrl + Tab berpindah antar jendela atau dokumen yang terbuka, bukan indentasi." },
        { key: "C", text: "Shift + Enter", rationale: "Salah. Shift + Enter membuat jeda baris baru tanpa bullet baru di paragraf yang sama." },
        { key: "D", text: "Alt + Tab", rationale: "Salah. Alt + Tab berpindah antar aplikasi aktif di sistem operasi Windows." },
        { key: "E", text: "Ctrl + Shift", rationale: "Salah. Kombinasi tombol ini saja tidak melakukan tindakan demote pada outline." }
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
        { key: "A", text: "Character Spacing", rationale: "Benar. Character Spacing mengatur kerapatan jarak horizontal antar karakter huruf (Tight, Loose, dll)." },
        { key: "B", text: "Paragraph Spacing", rationale: "Salah. Paragraph Spacing mengatur jarak vertikal sebelum dan sesudah suatu paragraf." },
        { key: "C", text: "Line Spacing", rationale: "Salah. Line Spacing mengatur jarak vertikal antar baris teks dalam satu paragraf." },
        { key: "D", text: "Word Wrap", rationale: "Salah. Word Wrap memindahkan kata ke baris bawah saat batas lebar kotak teks tercapai." },
        { key: "E", text: "Text Alignment", rationale: "Salah. Text Alignment mengatur perataan teks (kiri, tengah, kanan, rata kiri-kanan)." }
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
        { key: "A", text: "Change Case", rationale: "Benar. Change Case (Aa) menyediakan opsi UPPERCASE untuk mengubah teks menjadi huruf kapital." },
        { key: "B", text: "Text Transform", rationale: "Salah. Text Transform mengubah bentuk teks secara artistik, bukan mengatur kapitalisasi huruf." },
        { key: "C", text: "Font Style", rationale: "Salah. Font Style mengatur gaya seperti bold, italic, atau underline, bukan huruf kapital." },
        { key: "D", text: "Upper Font", rationale: "Salah. Upper Font bukan nama fitur standar PowerPoint untuk mengubah kapitalisasi teks." },
        { key: "E", text: "Character Scale", rationale: "Salah. Character Scale mengubah ukuran horizontal karakter, bukan case atau kapitalisasi." }
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
        { key: "A", text: "Bevel", rationale: "Benar. Bevel adalah Text Effect yang memberi kesan timbul atau relief pada karakter teks." },
        { key: "B", text: "Table", rationale: "Salah. Table menyusun data dalam baris dan kolom, bukan memberikan efek visual pada teks." },
        { key: "C", text: "Crop", rationale: "Salah. Crop memotong area gambar atau objek, bukan menerapkan efek pada karakter teks." },
        { key: "D", text: "Pivot", rationale: "Salah. Pivot berhubungan dengan ringkasan data Excel, bukan efek teks PowerPoint." },
        { key: "E", text: "Filter", rationale: "Salah. Filter menyaring data atau memilih efek gambar, bukan efek timbul pada teks." }
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
        { key: "A", text: "Insert > Table", rationale: "Benar. Perintah Insert > Table menyisipkan tabel baru langsung ke dalam slide." },
        { key: "B", text: "Review > Table", rationale: "Salah. Review berisi pemeriksaan, komentar, dan proteksi; bukan perintah menyisipkan tabel." },
        { key: "C", text: "View > Table", rationale: "Salah. View mengatur mode tampilan, zoom, dan grid, bukan memasukkan tabel." },
        { key: "D", text: "Design > Grid", rationale: "Salah. Design mengatur tema dan format, sedangkan Grid bukan perintah tabel PowerPoint." },
        { key: "E", text: "Slide Show > Table", rationale: "Salah. Slide Show berisi pengaturan penyajian, bukan penyisipan objek tabel." }
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
        { key: "A", text: "Insert > Picture", rationale: "Benar. Insert > Pictures (This Device) memasukkan gambar lokal dari penyimpanan komputer ke slide." },
        { key: "B", text: "Review > Picture", rationale: "Salah. Review digunakan untuk komentar, pemeriksaan, dan perbandingan, bukan menyisipkan gambar." },
        { key: "C", text: "Design > Picture", rationale: "Salah. Design mengatur tema, varian, dan format slide, bukan mengambil file gambar." },
        { key: "D", text: "View > Picture", rationale: "Salah. View mengatur tampilan presentasi, bukan memasukkan objek gambar ke slide." },
        { key: "E", text: "Notes > Picture", rationale: "Salah. Notes mengelola catatan pembicara; gambar pada slide dimasukkan lewat Insert." }
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
        { key: "A", text: "Crop", rationale: "Benar. Crop memangkas bagian luar gambar sehingga hanya area yang diperlukan terlihat pada slide." },
        { key: "B", text: "Recolor", rationale: "Salah. Recolor mengubah nuansa atau filter warna gambar, bukan menghapus area gambar." },
        { key: "C", text: "Correction", rationale: "Salah. Correction mengatur kecerahan, kontras, dan ketajaman gambar." },
        { key: "D", text: "Reset", rationale: "Salah. Reset Picture mengembalikan gambar ke format atau ukuran awal, bukan memangkasnya." },
        { key: "E", text: "Transparent Color", rationale: "Salah. Transparent Color menjadikan satu warna transparan, bukan membatasi area tampilan gambar." }
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
        { key: "A", text: "Brightness/Contrast", rationale: "Benar. Corrections mengatur kecerahan (Brightness), kontras (Contrast), dan ketajaman (Sharpen/Soften) gambar." },
        { key: "B", text: "Slide Timing", rationale: "Salah. Slide Timing mengatur durasi tampilan slide otomatis, bukan koreksi kecerahan gambar." },
        { key: "C", text: "Chart Axis", rationale: "Salah. Chart Axis mengatur skala sumbu grafik, bukan koreksi visual gambar bitmap." },
        { key: "D", text: "Animation Order", rationale: "Salah. Animation Order mengatur urutan efek animasi objek, bukan koreksi gambar." },
        { key: "E", text: "Table Border", rationale: "Salah. Table Border mengatur garis tepi tabel, tidak berkaitan dengan koreksi gambar." }
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
        { key: "A", text: "Recolor", rationale: "Benar. Menu Color menyediakan Color Saturation, Color Tone, dan Recolor untuk mengubah nuansa warna gambar." },
        { key: "B", text: "Group", rationale: "Salah. Group menggabungkan beberapa objek menjadi satu kesatuan, bukan mengubah warna gambar." },
        { key: "C", text: "Animate", rationale: "Salah. Animate memberikan efek gerak pada objek, bukan mengubah warna gambar." },
        { key: "D", text: "Crop Text", rationale: "Salah. Crop Text bukan fitur yang ada; Crop memotong gambar, bukan teks." },
        { key: "E", text: "Merge Slides", rationale: "Salah. Merge Slides bukan perintah standar PowerPoint untuk menggabungkan atau mewarnai slide." }
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
        { key: "A", text: "Set Transparent Color", rationale: "Benar. Set Transparent Color memilih satu warna piksel pada gambar untuk dijadikan transparan (tembus pandang)." },
        { key: "B", text: "Remove Animation", rationale: "Salah. Remove Animation menghapus efek animasi objek, bukan membuat warna gambar transparan." },
        { key: "C", text: "Crop Color", rationale: "Salah. Crop Color bukan fitur PowerPoint; Crop hanya memotong area gambar." },
        { key: "D", text: "Transparent Border", rationale: "Salah. Transparent Border bukan nama fitur untuk membuat warna gambar transparan." },
        { key: "E", text: "Color Lock", rationale: "Salah. Color Lock bukan fitur standar PowerPoint untuk transparansi warna gambar." }
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
        { key: "A", text: "Mark Areas to Remove", rationale: "Benar. Mark Areas to Remove menandai bagian gambar yang ingin dihapus dengan warna ungu (magenta)." },
        { key: "B", text: "Mark Areas to Keep", rationale: "Salah. Mark Areas to Keep menandai bagian yang ingin dipertahankan (tetap terlihat), bukan dihapus." },
        { key: "C", text: "Remove Marker", rationale: "Salah. Remove Marker bukan nama fitur yang ada dalam tool Remove Background." },
        { key: "D", text: "Delete Picture", rationale: "Salah. Delete Picture menghapus seluruh gambar dari slide, bukan hanya background tertentu." },
        { key: "E", text: "Crop Selection", rationale: "Salah. Crop Selection memangkas area gambar, berbeda dengan penghapusan background otomatis." }
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
        { key: "A", text: "Picture Styles", rationale: "Benar. Picture Styles menyediakan preset bingkai, bayangan, sudut melengkung, dan efek 3D instan." },
        { key: "B", text: "Shape Styles", rationale: "Salah. Shape Styles memberikan gaya visual untuk bentuk vektor, bukan gambar bitmap." },
        { key: "C", text: "Chart Themes", rationale: "Salah. Chart Themes mengatur tema visual grafik data, bukan gaya gambar foto." },
        { key: "D", text: "Slide Styles", rationale: "Salah. Slide Styles bukan nama galeri gaya yang ada di PowerPoint." },
        { key: "E", text: "Image Themes", rationale: "Salah. Image Themes bukan istilah resmi untuk galeri gaya gambar di PowerPoint." }
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
        { key: "A", text: "Reflection", rationale: "Salah. Reflection memberikan efek bayangan cermin di bawah objek, bukan rotasi 3D." },
        { key: "B", text: "Glow", rationale: "Salah. Glow memberikan efek cahaya bersinar di sekeliling tepi objek." },
        { key: "C", text: "3D Rotation", rationale: "Benar. 3D Rotation memutar objek sepanjang sumbu X, Y, Z untuk perspektif tiga dimensi." },
        { key: "D", text: "Bevel", rationale: "Salah. Bevel memberikan kesan timbul atau relief pada tepi objek, bukan rotasi perspektif." },
        { key: "E", text: "Soft Edges", rationale: "Salah. Soft Edges membuat tepi objek menjadi lembut dan blur, bukan rotasi 3D." }
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
        { key: "A", text: "SmartArt", rationale: "Benar. SmartArt Graphics adalah representasi visual diagram untuk proses, hierarki, dan hubungan konsep." },
        { key: "B", text: "WordArt", rationale: "Salah. WordArt adalah teks dekoratif dengan efek artistik, bukan diagram visual informasi." },
        { key: "C", text: "Table", rationale: "Salah. Table menyusun data dalam baris dan kolom terstruktur, bukan visualisasi diagram konsep." },
        { key: "D", text: "Notes", rationale: "Salah. Notes adalah catatan pembicara untuk slide, bukan alat visualisasi diagram." },
        { key: "E", text: "Outline", rationale: "Salah. Outline menampilkan hierarki teks judul slide, bukan diagram visual konsep." }
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
        { key: "A", text: "Cycle", rationale: "Salah. Cycle menampilkan proses berulang atau siklus berkelanjutan." },
        { key: "B", text: "Process", rationale: "Salah. Process menampilkan alur langkah-langkah berurutan dari awal hingga akhir." },
        { key: "C", text: "Hierarchy", rationale: "Benar. Hierarchy (termasuk Organization Chart) dirancang untuk memetakan struktur organisasi vertikal dan horizontal." },
        { key: "D", text: "Matrix", rationale: "Salah. Matrix menampilkan hubungan antar empat kuadran atau elemen kategori." },
        { key: "E", text: "List", rationale: "Salah. List menampilkan daftar informasi berurutan atau berkelompok sederhana." }
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
        { key: "A", text: "Chart", rationale: "Benar. Chart (grafik) menampilkan data numerik kuantitatif seperti angka penjualan secara visual." },
        { key: "B", text: "SmartArt", rationale: "Salah. SmartArt menampilkan konsep, proses, atau hubungan kualitatif, bukan data numerik murni." },
        { key: "C", text: "Text Box", rationale: "Salah. Text Box menampilkan teks bebas pada slide, bukan visualisasi data numerik." },
        { key: "D", text: "WordArt", rationale: "Salah. WordArt adalah teks dekoratif artistik, bukan alat visualisasi data angka." },
        { key: "E", text: "Notes", rationale: "Salah. Notes adalah catatan pembicara tersembunyi, bukan tampilan visual data penjualan." }
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
        { key: "A", text: "Worksheet/data sheet", rationale: "Benar. PowerPoint membuka jendela mini spreadsheet Excel untuk menginput dan mengubah data angka grafik." },
        { key: "B", text: "Notes Pane", rationale: "Salah. Notes Pane digunakan untuk menulis catatan pembicara, bukan data chart numerik." },
        { key: "C", text: "Slide Master", rationale: "Salah. Slide Master mengatur tema dan layout slide, bukan data chart individual." },
        { key: "D", text: "Outline Pane", rationale: "Salah. Outline Pane menampilkan hierarki teks judul slide, bukan data numerik chart." },
        { key: "E", text: "Animation Pane", rationale: "Salah. Animation Pane mengelola efek animasi objek, bukan data isian chart." }
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
        { key: "A", text: "Add Chart Element", rationale: "Benar. Add Chart Element pada Chart Design menyisipkan elemen seperti Data Labels, Axis Titles, Legend, dll." },
        { key: "B", text: "Slide Master", rationale: "Salah. Slide Master mengatur tema dan layout slide, bukan elemen individual chart." },
        { key: "C", text: "Change Case", rationale: "Salah. Change Case mengubah kapitalisasi teks, bukan menambah elemen chart." },
        { key: "D", text: "Review", rationale: "Salah. Review berisi pemeriksaan dan komentar, bukan penambahan elemen chart." },
        { key: "E", text: "Notes", rationale: "Salah. Notes adalah catatan pembicara, bukan fitur penambahan elemen chart." }
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
        { key: "A", text: "Trim Video", rationale: "Benar. Trim Video pada Video Tools > Playback memotong titik awal dan akhir durasi video." },
        { key: "B", text: "Crop Video", rationale: "Salah. Crop Video memangkas area visual bingkai video, bukan durasi waktu." },
        { key: "C", text: "Cut Slide", rationale: "Salah. Cut Slide memotong dan memindahkan slide, bukan memotong durasi video." },
        { key: "D", text: "Video Cropper", rationale: "Salah. Video Cropper bukan nama fitur resmi untuk memotong durasi video." },
        { key: "E", text: "Reduce Media", rationale: "Salah. Reduce Media mengompresi ukuran file video, bukan memotong durasi." }
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
        { key: "A", text: "Bookmark", rationale: "Benar. Bookmark menandai momen penting pada timeline video sebagai acuan navigasi atau trigger animasi." },
        { key: "B", text: "Loop", rationale: "Salah. Loop mengatur video untuk diputar ulang otomatis setelah selesai." },
        { key: "C", text: "Rewind", rationale: "Salah. Rewind mengembalikan video ke awal setelah selesai diputar." },
        { key: "D", text: "Playhead", rationale: "Salah. Playhead adalah penanda posisi saat ini pada timeline, bukan marker tersimpan." },
        { key: "E", text: "Anchor Text", rationale: "Salah. Anchor Text adalah kotak teks terkunci posisi, bukan marker video timeline." }
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
        { key: "A", text: "Play Across Slides", rationale: "Benar. Play Across Slides menjaga audio terus berputar saat berpindah ke slide berikutnya." },
        { key: "B", text: "Play One Slide", rationale: "Salah. Play One Slide membatasi audio hanya dimainkan pada satu slide saja." },
        { key: "C", text: "Stop Across Slides", rationale: "Salah. Stop Across Slides bukan nama opsi yang ada pada Audio Tools Playback." },
        { key: "D", text: "Continue Animation", rationale: "Salah. Continue Animation mengatur kelanjutan animasi objek, bukan audio lintas slide." },
        { key: "E", text: "Rewind Slide", rationale: "Salah. Rewind Slide bukan opsi untuk mengatur pemutaran audio lintas slide." }
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
        { key: "A", text: "Hide During Show", rationale: "Salah. Hide During Show menyembunyikan ikon audio saat presentasi, bukan mengatur loop." },
        { key: "B", text: "Loop Until Stopped", rationale: "Benar. Loop until Stopped memutar audio berulang otomatis hingga presenter menghentikannya." },
        { key: "C", text: "Rewind After Playing", rationale: "Salah. Rewind After Playing mengembalikan audio ke awal setelah selesai, bukan loop otomatis." },
        { key: "D", text: "Play On Click", rationale: "Salah. Play On Click memulai audio saat diklik, bukan mengatur loop berkelanjutan." },
        { key: "E", text: "Trim Audio", rationale: "Salah. Trim Audio memotong durasi audio, bukan mengatur pengulangan otomatis." }
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
        { key: "A", text: "Entrance", rationale: "Benar. Entrance adalah kategori animasi yang menampilkan objek masuk ke slide dengan efek tertentu." },
        { key: "B", text: "Theme", rationale: "Salah. Theme mengatur warna dan font desain slide, bukan kategori animasi objek." },
        { key: "C", text: "Layout", rationale: "Salah. Layout mengatur tata letak placeholder slide, bukan kategori animasi." },
        { key: "D", text: "Review", rationale: "Salah. Review berisi pemeriksaan dan komentar, bukan kategori animasi objek." },
        { key: "E", text: "Handout", rationale: "Salah. Handout mengatur tata letak cetak materi audiens, bukan kategori animasi." }
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
        { key: "A", text: "Start On Click", rationale: "Salah. Start On Click memulai animasi saat presenter mengklik mouse atau menekan tombol." },
        { key: "B", text: "With Previous", rationale: "Salah. With Previous memulai animasi bersamaan dengan animasi sebelumnya." },
        { key: "C", text: "After Previous", rationale: "Benar. After Previous memulai animasi otomatis setelah animasi sebelumnya selesai dieksekusi." },
        { key: "D", text: "Delay Only", rationale: "Salah. Delay Only menambahkan jeda waktu sebelum animasi, bukan menunggu animasi sebelumnya." },
        { key: "E", text: "Trigger Off", rationale: "Salah. Trigger Off bukan nama opsi timing animasi standar di PowerPoint." }
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
        { key: "A", text: "Advance Slide - By Time", rationale: "Benar. Advance Slide - By Time (After: mm:ss) mengatur pergantian slide otomatis setelah durasi tertentu." },
        { key: "B", text: "Start - With Previous", rationale: "Salah. Start - With Previous adalah timing animasi objek, bukan perpindahan slide otomatis." },
        { key: "C", text: "Animate Text", rationale: "Salah. Animate Text mengatur cara teks muncul dengan animasi, bukan transisi slide otomatis." },
        { key: "D", text: "Slide Sorter", rationale: "Salah. Slide Sorter adalah mode tampilan untuk mengatur urutan slide." },
        { key: "E", text: "Apply Theme", rationale: "Salah. Apply Theme mengatur desain visual slide, bukan perpindahan otomatis berdasarkan waktu." }
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
        { key: "A", text: "Presenter View", rationale: "Benar. Presenter View menampilkan notes, timer, dan slide berikutnya pada layar pribadi presenter." },
        { key: "B", text: "Reading View", rationale: "Salah. Reading View menampilkan presentasi hampir full screen dalam window, bukan untuk presenter." },
        { key: "C", text: "Outline View", rationale: "Salah. Outline View menampilkan hierarki teks judul, bukan catatan saat menyajikan." },
        { key: "D", text: "Slide Sorter", rationale: "Salah. Slide Sorter menampilkan kisi thumbnail untuk mengatur urutan slide." },
        { key: "E", text: "Normal View", rationale: "Salah. Normal View adalah mode pengeditan standar dengan tiga panel." }
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
        { key: "A", text: "Export / Save As", rationale: "Benar. File > Export (atau Save As) mengonversi presentasi ke PDF/XPS, video MP4/WMV, GIF, atau gambar JPG/PNG." },
        { key: "B", text: "Slide Master", rationale: "Salah. Slide Master mengatur tema dan layout slide, bukan mengekspor file ke format lain." },
        { key: "C", text: "Review", rationale: "Salah. Review berisi pemeriksaan, komentar, dan perbandingan, bukan ekspor file." },
        { key: "D", text: "Outline", rationale: "Salah. Outline menampilkan hierarki teks judul, bukan fitur ekspor ke format file lain." },
        { key: "E", text: "Animation Pane", rationale: "Salah. Animation Pane mengelola efek animasi objek, bukan mengekspor presentasi." }
      ],
      answer: "A",
      explanation: "Menu File > Export (atau Save As) memungkinkan konversi presentasi ke dokumen PDF/XPS, video MP4/WMV, animasi GIF, atau format gambar slide JPG/PNG.",
      tags: ["Export", "Publish"]
    }
  ];
