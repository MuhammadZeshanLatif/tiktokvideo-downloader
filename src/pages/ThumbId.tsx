import { Link } from 'react-router-dom';
import { Downloader, type DownloaderText } from '../components/Downloader';
import { thumbFaqsId as faqs } from '../data/toolFaqs';

const t: DownloaderText = {
  cardTitle: '',
  cardSubtitle: '',
  placeholder: 'https://www.tiktok.com/@user/video/...',
  pasteButton: 'Tempel Link TikTok',
  mp4Label: 'MP4 (Video)',
  mp3Label: 'MP3 (Audio)',
  downloadButton: 'Download',
  processing: 'Memproses...',
  resultsTitle: 'Hasil Download',
  resultsSubtitle: 'Lihat preview gambarnya, lalu download di bawah ini.',
  previewNote: 'Preview dan download gambar cover video.',
  downloadVideo: 'Download Video',
  downloadAudio: 'Download Audio',
  downloadingPrefix: 'Mengunduh',
  noLinksForFormat: (format) => `${format} tidak ditemukan. Coba link TikTok lain.`,
  invalidUrl: 'Masukkan link TikTok yang valid',
  fetchFailed: 'Gagal mengambil link download TikTok.',
  noLinksFound: 'Tidak ada link download yang ditemukan. Coba link TikTok lain.',
  ready: 'Gambar sudah siap.',
  defaultTitle: 'Foto TikTok',
  downloadThumbnail: 'Download Gambar',
  noThumbnail: 'Gambar tidak ditemukan untuk link TikTok ini.',
};

const useCases = [
  {
    title: 'Menyimpan sebelum videonya hilang',
    body: 'Kreator sering menghapus lalu mengunggah ulang videonya. Kalau video itu bagian dari riset, tren yang kamu ikuti, atau tutorial yang ingin kamu cari lagi, gambar covernya adalah penanda visual paling cepat.',
  },
  {
    title: 'Mengumpulkan referensi desain',
    body: 'Editor dan desainer mengumpulkan cover untuk mempelajari cara sebuah niche menampilkan dirinya: wajah, warna, dan teks seperti apa yang terus muncul di feed.',
  },
  {
    title: 'Mempelajari cover yang bikin orang berhenti scroll',
    body: 'Cover adalah satu-satunya hal yang dilihat penonton sebelum memutuskan menonton. Mengumpulkan cover dari video yang performanya bagus adalah cara murah untuk memahami sebuah niche.',
  },
  {
    title: 'Bukti laporan atau klaim',
    body: 'Kalau kamu melaporkan konten yang dicuri atau mendokumentasikan sesuatu, gambar yang sudah tersimpan menjadi catatan visual yang tidak bergantung pada postingannya tetap online.',
  },
];

export function ThumbId() {
  return (
    <Downloader t={t} lockFormat="thumbnail">
      {({ Form, Results }) => (
        <>
          {/* Hero Section */}
          <section id="download-section" className="hero-gradient text-white py-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">
                    Download Foto TikTok —{' '}
                    <span className="tiktok-text">Simpan Cover Video Kualitas HD</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Download foto atau gambar cover dari video TikTok publik mana pun. Salin link
                    videonya, tempel di kotak ini, lalu simpan gambarnya sebagai file JPG dalam
                    ukuran terbesar yang disediakan TikTok.
                  </p>
                  <p className="mb-0 text-white-50">
                    Gambar cover adalah foto diam yang dilihat penonton sebelum menekan play. Karena
                    gambar itu tersimpan pada video tertentu dan bukan pada akun, tool ini
                    membutuhkan link video TikTok secara langsung.
                  </p>
                </div>
                <div className="col-lg-6">
                  {Form}
                  <p className="text-center text-white-50 small mt-3 mb-0">
                    Gratis • Tanpa Login • Tanpa Aplikasi • Bisa di Android, iPhone, dan PC
                  </p>
                </div>
              </div>
            </div>
          </section>

          {Results}

          {/* What it is */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Apa Itu Foto Cover TikTok?</h2>
              <p className="text-muted">
                Foto cover, atau yang sering disebut thumbnail, adalah satu gambar diam yang mewakili
                sebuah video sebelum diputar. Gambar ini muncul di grid profil kreator, di hasil
                pencarian, dan sepersekian detik saat video sedang dimuat di feed kamu.
              </p>
              <p className="text-muted">
                Kreator menentukannya dengan dua cara. Kebanyakan memilih satu frame dari dalam
                videonya lewat fitur pemilih cover milik TikTok. Sebagian lagi mengunggah gambar
                terpisah yang dibuat di aplikasi desain, dan itulah sebabnya beberapa cover memuat
                teks atau tata letak yang tidak pernah muncul di videonya.
              </p>
              <p className="text-muted mb-0">
                Apa pun caranya, TikTok menyimpan gambar itu sebagai file tersendiri, terpisah dari
                videonya. Tool ini membaca file tersebut dan memberikannya kepada kamu sebagai JPG.
                Tidak ada proses encode ulang dan tidak ada frame yang diambil paksa dari video, jadi
                yang kamu simpan persis seperti yang disajikan TikTok.
              </p>
            </div>
          </section>

          {/* Use cases */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kenapa Orang Download Foto TikTok</h2>
              <p className="text-muted mb-4">
                Menyimpan cover jarang soal gambarnya semata. Ini alasan yang paling sering muncul.
              </p>
              <div className="row g-4">
                {useCases.map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                      <h3 className="h5 fw-bold">{item.title}</h3>
                      <p className="text-muted mb-0">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Which tool */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Cover Video, Postingan Foto, atau Foto Profil?</h2>
              <p className="text-muted mb-4">
                Ada tiga gambar TikTok yang sama-sama disebut &quot;foto&quot;, dan masing-masing
                butuh jenis link yang berbeda. Ini cara tercepat membedakannya.
              </p>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Gambar</th>
                      <th scope="col">Muncul di mana</th>
                      <th scope="col">Yang kamu tempel</th>
                      <th scope="col">Tool</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Cover video</td>
                      <td>Sebelum video diputar, dan di grid profil</td>
                      <td>Link video</td>
                      <td>Halaman ini</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Gambar postingan foto</td>
                      <td>Di dalam postingan foto atau slideshow</td>
                      <td>Link postingan</td>
                      <td>
                        <Link to="/id">TikTok downloader</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Foto profil</td>
                      <td>Avatar bulat pada sebuah akun</td>
                      <td>Username atau link profil</td>
                      <td>
                        <Link to="/id/profile">Download foto profil</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-0">
                Kalau kamu menempel link video di sini lalu muncul error, pastikan videonya publik
                dan linknya bisa dibuka biasa di browser. Link share yang dipendekkan umumnya bisa,
                tapi link yang disalin dari dalam aplikasi saat login di akun privat tidak akan
                jalan.
              </p>
            </div>
          </section>

          {/* Quality */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kualitas Gambarnya Seperti Apa?</h2>
              <p className="text-muted">
                Bagian ini yang paling sering mengejutkan, jadi kami sampaikan terus terang: gambar
                cover TikTok biasanya lebih kecil daripada videonya. TikTok membuat cover dengan
                ukuran yang ditujukan untuk preview di feed, bukan untuk dicetak atau ditampilkan
                layar penuh.
              </p>
              <p className="text-muted">
                Tool ini selalu meminta versi terbesar yang disediakan TikTok untuk video tersebut.
                Kalau hasilnya tetap terasa kecil, itu batas dari sumbernya, bukan batasan yang
                ditambahkan di sini. Tidak ada downloader yang bisa mengembalikan detail yang memang
                tidak pernah disimpan TikTok.
              </p>
              <p className="text-muted mb-0">
                Cover yang diunggah sendiri oleh kreator sebagai gambar khusus umumnya lebih tajam
                daripada cover yang diambil otomatis dari frame video, karena kreator menyediakan
                file bersih, bukan potongan gambar terkompresi dari klip yang bergerak.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">Cara Download Foto TikTok</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Salin Link Video TikTok</h3>
                    <p className="text-muted mb-0">
                      Buka TikTok, cari videonya, ketuk tombol Share, lalu pilih Copy Link. Di
                      desktop kamu bisa langsung menyalin alamatnya dari kolom browser.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Tempel Link di Downloader</h3>
                    <p className="text-muted mb-0">
                      Tempel di kotak yang ada di atas lalu tekan Download. Linknya harus mengarah ke
                      video publik yang masih aktif.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Simpan Gambarnya</h3>
                    <p className="text-muted mb-0">
                      Periksa previewnya, lalu ketuk Download Gambar. Cover akan tersimpan di
                      perangkat kamu sebagai file JPG.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Devices */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Download Foto TikTok di Android, iPhone, dan PC</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <h3 className="h5 fw-bold">Di Android</h3>
                    <p className="text-muted mb-0">
                      Salin linknya, buka halaman ini di Chrome, lalu tempel. File JPG akan masuk ke
                      folder Download dan biasanya muncul di Galeri atau Google Photos tak lama
                      kemudian.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <h3 className="h5 fw-bold">Di iPhone atau iPad</h3>
                    <p className="text-muted mb-0">
                      Salin link di aplikasi TikTok, buka halaman ini di Safari, lalu tempel. Saat
                      gambarnya muncul, gunakan tombol download atau tekan lama previewnya lalu pilih
                      Add to Photos.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <h3 className="h5 fw-bold">Di PC atau Laptop</h3>
                    <p className="text-muted mb-0">
                      Salin alamat videonya dari kolom browser, tempel di sini, lalu download. Ini
                      cara paling praktis kalau gambarnya mau langsung dipakai di dokumen atau
                      aplikasi editing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kalau Gambarnya Tidak Muncul</h2>
              <p className="text-muted mb-4">
                Sebagian besar kegagalan berasal dari linknya, bukan dari toolnya. Coba periksa
                berurutan.
              </p>
              <ul className="text-muted">
                <li className="mb-2">
                  <strong>Pastikan videonya publik.</strong> Video privat, video khusus teman, dan
                  postingan yang sudah dihapus tidak bisa dibaca tool pihak ketiga mana pun.
                </li>
                <li className="mb-2">
                  <strong>Buka dulu linknya sendiri.</strong> Tempel di tab browser baru. Kalau
                  TikTok tidak memuat videonya untuk kamu, tool ini juga tidak akan bisa.
                </li>
                <li className="mb-2">
                  <strong>Pastikan itu link video, bukan link profil.</strong> Alamat
                  tiktok.com/@username menunjuk ke akun. Yang kamu butuhkan adalah alamat panjang
                  yang memuat /video/ dan sederet angka.
                </li>
                <li className="mb-2">
                  <strong>Cek link yang terpotong.</strong> Link panjang kadang terpotong saat
                  disalin antar aplikasi. Bandingkan bagian akhirnya dengan link aslinya.
                </li>
                <li className="mb-0">
                  <strong>Coba lagi satu menit kemudian.</strong> TikTok sesekali membatasi jumlah
                  permintaan. Menunggu sebentar biasanya sudah cukup.
                </li>
              </ul>
            </div>
          </section>

          {/* No app */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Tanpa Aplikasi, Tanpa APK, Tanpa Daftar</h2>
              <p className="text-muted">
                Tool ini berjalan sepenuhnya di browser kamu. Tidak ada yang perlu diinstall, tidak
                ada izin yang perlu diberikan, dan tidak ada akun yang perlu dibuat. Untuk pekerjaan
                sekecil ini hal tersebut penting: memasang aplikasi hanya demi menyimpan satu gambar
                meminta jauh lebih banyak daripada nilai pekerjaannya, dan aplikasi semacam itu
                sering meminta akses ke penyimpanan, kontak, atau bahkan login TikTok kamu.
              </p>
              <p className="text-muted mb-0">
                Data login TikTok kamu sama sekali tidak terlibat di sini. Tool ini hanya membaca apa
                yang memang sudah terbuka dari sebuah link video publik, yaitu informasi yang sama
                yang bisa dilihat siapa pun saat membuka videonya.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Apakah Tool Ini Aman?</h2>
              <p className="text-muted">
                Kami tidak meminta login, jadi tidak ada data akun TikTok yang bisa hilang. Link yang
                kamu tempel dipakai untuk memproses permintaan itu saja dan tidak disimpan sebagai
                riwayat yang terhubung ke diri kamu. Tidak ada apa pun yang dipasang di perangkat.
              </p>
              <p className="text-muted mb-0">
                Baca <Link to="/id/privacy-policy">kebijakan privasi</Link> untuk rincian data apa
                yang dikumpulkan dan tidak, termasuk cara kerja cookie analitik dan iklan di situs
                ini.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Penggunaan yang Bertanggung Jawab dan Hak Cipta</h2>
              <p className="text-muted">
                Gambar cover adalah bagian dari karya seseorang. Menyimpannya untuk dipelajari, untuk
                referensi, atau sebagai bukti laporan adalah penggunaan yang wajar.
                Mempublikasikannya ulang sebagai cover milik kamu, mencetaknya di merchandise, atau
                memakainya di iklan bukan, dan melakukannya tanpa izin bisa melanggar hak kreatornya.
              </p>
              <p className="text-muted mb-0">
                Cover juga sering menampilkan wajah orang yang bisa dikenali. Perlakukan gambar
                seperti itu sebagaimana kamu ingin foto dirimu sendiri diperlakukan.{' '}
                <Link to="/id/terms-conditions">Syarat dan ketentuan</Link> menjelaskan apa yang
                diizinkan di sini.
              </p>
            </div>
          </section>

          {/* Other tools */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Tool TikTok Lain di Situs Ini</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">
                      <Link to="/id">Download Video TikTok</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Simpan video utuh sebagai MP4, dengan atau tanpa watermark.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">
                      <Link to="/id/mp3">Download MP3 TikTok</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Ambil audionya dari video TikTok lalu simpan sebagai file MP3.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">
                      <Link to="/id/profile">Download Foto Profil TikTok</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Simpan avatar sebuah akun lewat username atau link profilnya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <div className="text-center mb-5">
                <h2 className="fw-bold mb-3">Pertanyaan yang Sering Diajukan</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="accordion faq-accordion" id="faqAccordionThumbId">
                    {faqs.map((faq, index) => (
                      <div
                        className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm"
                        key={faq.q}
                      >
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faqThumbId${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`faqThumbId${index}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`faqThumbId${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordionThumbId"
                        >
                          <div className="accordion-body">{faq.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-4 bg-white">
            <div className="container">
              <h2 className="h5 fw-bold mb-2">Penafian</h2>
              <p className="text-muted small mb-0">
                Tool ini tidak berafiliasi dengan TikTok maupun ByteDance. TikTok adalah merek dagang
                milik ByteDance Ltd. Mohon hormati hak kreator dan gunakan konten yang kamu download
                secara bertanggung jawab.
              </p>
            </div>
          </section>
        </>
      )}
    </Downloader>
  );
}
