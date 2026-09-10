import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Downloader, type DownloaderText } from '../components/Downloader';
import { homeFaqsId as faqs } from '../data/faqs';

const t: DownloaderText = {
  cardTitle: '',
  cardSubtitle: '',
  placeholder: 'https://www.tiktok.com/@user/video/...',
  pasteButton: 'Paste TikTok Link',
  mp4Label: 'MP4 (Video)',
  mp3Label: 'MP3 (Audio)',
  downloadButton: 'Download',
  processing: 'Memproses...',
  resultsTitle: 'Hasil Download',
  resultsSubtitle: 'Lihat preview video, lalu gunakan tombol download di bawah ini.',
  previewNote: 'Preview dan download video kamu.',
  downloadVideo: 'Download Video',
  downloadAudio: 'Download Audio',
  downloadingPrefix: 'Mengunduh',
  noLinksForFormat: (format) => `Link ${format} tidak ditemukan. Coba link TikTok lain.`,
  invalidUrl: 'Masukkan link TikTok yang valid',
  fetchFailed: 'Gagal mengambil link download TikTok.',
  noLinksFound: 'Tidak ada link download yang ditemukan. Coba link TikTok lain.',
  ready: 'Link download sudah siap.',
  defaultTitle: 'Download TikTok',
};

const features = [
  'Download video without watermark',
  'Download video with watermark',
  'Download MP4 HD',
  'Convert TikTok to MP3 audio',
  'Download TikTok sound, audio, dan music',
  'Download TikTok photo atau slide',
  'Download TikTok story jika link publik tersedia',
  'Download TikTok profile picture jika fitur tersedia',
  'Download TikTok thumbnail atau cover image',
  'Bisa digunakan di Android, iPhone, iPad, dan PC',
  'Tidak perlu APK',
  'Tidak perlu login TikTok',
];

export function HomeId() {
  return (
    <Downloader t={t} lockFormat="mp4">
      {({ Form, Results }) => (
        <>
          {/* Hero Section */}
          <section id="download-section" className="hero-gradient text-white py-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">
                    TikTok Downloader — Download Video TikTok{' '}
                    <span className="tiktok-text">Tanpa Watermark HD</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Download video TikTok tanpa watermark dengan cepat, gratis, dan mudah. Cukup salin
                    link video TikTok, tempel di kotak downloader, lalu download video MP4 yang kamu
                    butuhkan seperti video tanpa watermark, video dengan watermark, foto, story,
                    profile picture, atau thumbnail jika tersedia.
                  </p>
                  <p className="mb-0 text-white-50">
                    Kadang kita hanya ingin menyimpan video lucu, tutorial, atau slideshow foto dari
                    TikTok tanpa ribet install aplikasi tambahan. Tool ini dibuat untuk
                    pengguna Android, iPhone, iPad, dan PC yang ingin download konten TikTok langsung dari
                    browser tanpa login dan tanpa APK.
                  </p>
                </div>
                <div className="col-lg-6">
                  {Form}
                  <p className="text-center text-white-50 small mt-3 mb-0">
                    Gratis • Tanpa Login • Tanpa APK • Support Android, iPhone, dan PC
                  </p>
                </div>
              </div>
            </div>
          </section>

          {Results}

          {/* Fitur Utama */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Fitur Utama TikTok Downloader</h2>
          </div>
          <div className="row g-3">
            {features.map((feature) => (
              <div className="col-md-6 col-lg-4" key={feature}>
                <div className="d-flex align-items-start gap-2 bg-light rounded-3 p-3 h-100">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success mt-1" />
                  <span>{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Without Watermark */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Video TikTok Tanpa Watermark Kualitas HD</h2>
          <p className="text-muted">
            Dengan TikTok Downloader ini, kamu bisa menyimpan video TikTok tanpa watermark atau tanpa
            tanda air. Video yang diunduh terlihat lebih bersih karena logo TikTok dan username yang
            bergerak tidak muncul di atas video.
          </p>
          <p className="text-muted mb-0">
            Fitur ini cocok untuk menyimpan video pribadi, referensi editing, materi belajar, atau
            konten yang ingin kamu tonton lagi secara offline. Setelah link diproses, pilih opsi
            download without watermark untuk menyimpan video dalam format MP4 dengan kualitas terbaik
            yang tersedia.
          </p>
        </div>
      </section>

      {/* With Watermark */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Video TikTok Dengan Watermark</h2>
          <p className="text-muted">
            Tidak semua pengguna ingin menghapus watermark. Beberapa orang tetap ingin menyimpan
            video dengan watermark karena ingin mempertahankan logo TikTok dan username kreator asli.
          </p>
          <p className="text-muted mb-0">
            Gunakan opsi download with watermark jika kamu ingin video tetap menampilkan identitas
            kreator. Ini berguna saat kamu ingin menyimpan video sebagai referensi, membagikan ulang
            dengan kredit yang jelas, atau tetap menjaga tanda asli dari konten TikTok tersebut.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Tanpa Watermark vs Dengan Watermark</h2>
          <p className="text-muted mb-4">
            Pilih download tanpa watermark jika kamu ingin video bersih tanpa logo TikTok. Pilih
            download dengan watermark jika kamu ingin tetap menyimpan logo TikTok dan username
            kreator.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered bg-white align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Fitur / Perbedaan</th>
                  <th>Without Watermark</th>
                  <th>With Watermark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Logo TikTok</td>
                  <td>Tidak ada</td>
                  <td>Ada</td>
                </tr>
                <tr>
                  <td>Username Kreator</td>
                  <td>Tidak ada</td>
                  <td>Biasanya ada</td>
                </tr>
                <tr>
                  <td>Tampilan Video</td>
                  <td>Lebih bersih dan rapi</td>
                  <td>Menampilkan identitas kreator</td>
                </tr>
                <tr>
                  <td>Cocok Untuk</td>
                  <td>Koleksi pribadi, editing, atau tontonan offline</td>
                  <td>Referensi, repost dengan izin, atau menjaga kredit kreator</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MP4 HD */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Video TikTok HD Format MP4</h2>
          <p className="text-muted">
            Jika kamu ingin menyimpan video TikTok sebagai file video biasa, pilih format MP4. Format
            ini mudah diputar di hampir semua perangkat, termasuk Android, iPhone, Windows, Mac, dan
            tablet.
          </p>
          <p className="text-muted mb-0">
            Tool ini akan mencoba mengambil kualitas terbaik yang tersedia dari link video TikTok
            tersebut. Hasil akhir tetap tergantung pada kualitas video asli yang diunggah di TikTok.
          </p>
        </div>
      </section>

      {/* MP3 */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download MP3 TikTok, Sound, Audio, dan Musik</h2>
          <p className="text-muted">
            Selain video, kamu juga bisa mengambil audio dari TikTok. Pilih opsi MP3 jika kamu hanya
            ingin menyimpan sound, musik, voiceover, atau lagu TikTok tanpa videonya.
          </p>
          <p className="text-muted mb-0">
            Fitur ini cocok untuk pengguna yang suka menyimpan original sound, background music, atau
            audio viral dari TikTok. Cukup paste link video, lalu pilih format audio untuk mengubah
            video TikTok menjadi MP3 jika opsi tersedia.
          </p>
        </div>
      </section>

      {/* Format Tersedia */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Format Download yang Tersedia</h2>
          <p className="text-muted mb-4">
            Gunakan satu TikTok Downloader untuk menyimpan video, audio, foto, story, profile
            picture, dan thumbnail dari link publik TikTok jika fitur tersedia di tool.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Format</th>
                  <th>Apa yang Disimpan</th>
                  <th>Cocok Untuk</th>
                  <th>File Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MP4 Video</td>
                  <td>Video TikTok</td>
                  <td>Menonton offline</td>
                  <td>.mp4</td>
                </tr>
                <tr>
                  <td>MP3 Audio</td>
                  <td>Sound, audio, atau musik TikTok</td>
                  <td>Menyimpan lagu atau original sound</td>
                  <td>.mp3</td>
                </tr>
                <tr>
                  <td>Photo</td>
                  <td>Foto atau slide TikTok</td>
                  <td>Menyimpan gambar atau slideshow</td>
                  <td>.jpg / .png</td>
                </tr>
                <tr>
                  <td>Story</td>
                  <td>Story TikTok publik</td>
                  <td>Menyimpan story sebelum hilang</td>
                  <td>.mp4</td>
                </tr>
                <tr>
                  <td>Profile Picture</td>
                  <td>Foto profil TikTok</td>
                  <td>Melihat avatar dalam ukuran lebih jelas</td>
                  <td>.jpg / .png</td>
                </tr>
                <tr>
                  <td>Thumbnail</td>
                  <td>Cover atau preview video TikTok</td>
                  <td>Menyimpan cover image video</td>
                  <td>.jpg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Foto TikTok</h2>
          <p className="text-muted">
            TikTok sekarang bukan hanya video. Banyak pengguna juga membagikan foto, slide, dan
            slideshow. Dengan TikTok Photo Downloader, kamu bisa menyimpan foto TikTok dari postingan
            slide dengan lebih mudah jika fitur tersedia.
          </p>
          <p className="text-muted mb-0">
            Jika postingan berisi beberapa foto, kamu bisa memilih file yang ingin disimpan. Ini
            cocok untuk menyimpan gambar inspirasi, foto edukasi, meme, atau slideshow yang ingin
            dilihat lagi tanpa membuka aplikasi TikTok.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Story TikTok</h2>
          <p className="text-muted">
            TikTok Story biasanya hanya tampil dalam waktu terbatas, jadi banyak pengguna ingin
            menyimpannya sebelum hilang.
          </p>
          <p className="text-muted mb-0">
            Jika story masih aktif dan link publiknya tersedia, fitur story downloader dapat membantu
            kamu menyimpan story TikTok ke perangkat.
          </p>
        </div>
      </section>

      {/* Profile Picture and Thumbnail */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Foto Profil dan Thumbnail TikTok</h2>
          <p className="text-muted">
            Jika fitur tersedia, kamu bisa menyimpan profile picture TikTok atau thumbnail video dari
            link publik.
          </p>
          <p className="text-muted">
            Profile picture biasanya dipakai untuk melihat foto profil dalam ukuran lebih jelas,
            sedangkan thumbnail berguna untuk menyimpan cover atau preview dari video TikTok.
          </p>
          <p className="text-muted mb-0">
            Untuk profile picture, gunakan username atau link profil jika tool mendukungnya. Untuk
            thumbnail, gunakan link video TikTok agar tool bisa mengambil cover image dari video
            tersebut.
          </p>
        </div>
      </section>

      {/* Username */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download Video TikTok Lewat Username</h2>
          <p className="text-muted">
            Sebagian pengguna mencari cara download video TikTok dengan username. Namun, untuk hasil
            paling akurat, video biasanya lebih mudah diproses menggunakan link video langsung, bukan
            hanya username.
          </p>
          <p className="text-muted mb-0">
            Username bisa berguna untuk fitur seperti profile picture atau pencarian profil. Tapi
            untuk download video tertentu, salin link video dari tombol share di TikTok, lalu paste
            link tersebut ke downloader.
          </p>
        </div>
      </section>

      {/* How To */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3 text-center">Cara Download Video TikTok</h2>
          <p className="text-muted text-center mb-5">
            Menggunakan TikTok Downloader ini sangat mudah. Kamu tidak perlu membuat akun, login,
            atau install aplikasi tambahan.
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">1</div>
                <h3 className="h5 fw-bold">Langkah 1: Salin Link Video TikTok</h3>
                <p className="text-muted mb-0">
                  Buka aplikasi TikTok atau website TikTok. Pilih video, story, foto, atau konten
                  yang ingin kamu simpan. Tekan tombol Share, lalu pilih Copy Link.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">2</div>
                <h3 className="h5 fw-bold">Langkah 2: Tempel Link di Downloader</h3>
                <p className="text-muted mb-0">
                  Tempel link TikTok ke kotak downloader di halaman ini. Pastikan link yang kamu
                  paste adalah link publik dan masih aktif.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">3</div>
                <h3 className="h5 fw-bold">Langkah 3: Pilih Opsi MP4, MP3, Foto, Story, atau Watermark</h3>
                <p className="text-muted mb-0">
                  Setelah link diproses, pilih format yang kamu butuhkan. Kamu bisa memilih video
                  without watermark, video with watermark, MP3/audio, photo, story, profile picture,
                  atau thumbnail jika tersedia.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">4</div>
                <h3 className="h5 fw-bold">Langkah 4: Simpan File ke Perangkat Kamu</h3>
                <p className="text-muted mb-0">
                  Klik tombol download dan tunggu sampai file tersimpan. Di Android dan PC, file
                  biasanya masuk ke folder Downloads. Di iPhone, file bisa tersimpan di Files atau
                  Photos, tergantung browser dan pengaturan perangkat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">TikTok Downloader untuk Android, iPhone, dan PC</h2>
          <p className="text-muted mb-4">
            Tool ini berjalan langsung dari browser, jadi kamu bisa menggunakannya di banyak
            perangkat tanpa install aplikasi tambahan.
          </p>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Download Video TikTok di Android</h3>
                <p className="text-muted mb-0">
                  Di Android, buka TikTok, salin link video, lalu paste link di downloader. Setelah
                  download selesai, file biasanya ada di folder Downloads atau File Manager.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Download Video TikTok di iPhone atau iPad</h3>
                <p className="text-muted mb-0">
                  Di iPhone atau iPad, gunakan Safari atau browser lain. Setelah file diunduh, kamu
                  bisa menemukannya di aplikasi Files. Beberapa file juga bisa dipindahkan ke Photos.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Download Video TikTok di PC atau Laptop</h3>
                <p className="text-muted mb-0">
                  Di PC, kamu hanya perlu browser seperti Chrome, Edge, Firefox, atau Safari. Tidak
                  perlu software tambahan. Paste link TikTok, pilih format, lalu simpan file ke
                  komputer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device support table */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Didukung di Android, iPhone, dan PC</h2>
          <p className="text-muted mb-4">
            Tool ini bekerja langsung dari browser, jadi kamu tidak perlu install aplikasi, software,
            atau ekstensi tambahan.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered bg-white align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Perangkat</th>
                  <th>Browser</th>
                  <th>Cara Download</th>
                  <th>Lokasi File Tersimpan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Android</td>
                  <td>Chrome, Firefox, Samsung Internet</td>
                  <td>Paste link, pilih format, klik download</td>
                  <td>Downloads / File Manager</td>
                </tr>
                <tr>
                  <td>iPhone / iPad</td>
                  <td>Safari, Chrome</td>
                  <td>Paste link, pilih format, klik download</td>
                  <td>Files / Photos</td>
                </tr>
                <tr>
                  <td>PC / Laptop</td>
                  <td>Chrome, Edge, Firefox, Safari</td>
                  <td>Paste link, pilih format, klik download</td>
                  <td>Downloads Folder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* No APK */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Apakah Perlu APK atau Aplikasi TikTok Downloader?</h2>
          <p className="text-muted">
            Tidak. Kamu tidak perlu download APK atau install TikTok video download app untuk
            menggunakan tool ini. Semuanya bisa dilakukan langsung dari browser.
          </p>
          <p className="text-muted">
            Ini lebih praktis karena kamu tidak perlu memenuhi memori HP dengan aplikasi tambahan.
            Kamu juga tidak perlu login ke akun TikTok atau memberikan password.
          </p>
          <h3 className="h5 fw-bold mt-4">Tidak Perlu APK atau Aplikasi</h3>
          <p className="text-muted">
            Kamu tidak perlu menginstall APK, aplikasi tambahan, software, atau ekstensi browser.
            TikTok Downloader ini bisa digunakan langsung dari browser di Android, iPhone, iPad, PC,
            atau laptop.
          </p>
          <p className="text-muted mb-0">
            Cukup salin link TikTok, tempel di kotak downloader, pilih format, lalu simpan file ke
            perangkat kamu. Tidak perlu login dan tidak perlu memasukkan password TikTok.
          </p>
        </div>
      </section>

      {/* Free / No Login */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">TikTok Downloader Gratis Tanpa Login</h2>
          <p className="text-muted">
            TikTok Downloader ini bisa digunakan gratis. Kamu tidak perlu daftar akun, tidak perlu
            login, dan tidak perlu memasukkan password TikTok.
          </p>
          <p className="text-muted mb-0">
            Cukup gunakan link video publik. Ini membuat proses download lebih cepat dan lebih aman
            untuk pengguna yang hanya ingin menyimpan video, audio, foto, atau story dari TikTok.
          </p>
        </div>
      </section>

      {/* Safe */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Apakah TikTok Downloader Ini Aman?</h2>
          <p className="text-muted">
            Tool ini tidak meminta password TikTok dan tidak membutuhkan login. Kamu hanya perlu
            menempelkan link konten TikTok yang ingin diunduh.
          </p>
          <p className="text-muted mb-0">
            Untuk menjaga privasi dan penggunaan yang benar, gunakan tool ini hanya untuk konten
            publik. Video private, video yang sudah dihapus, atau link yang tidak bisa diakses
            mungkin tidak dapat diproses.
          </p>
        </div>
      </section>

      {/* Responsible Use */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Penggunaan yang Bertanggung Jawab dan Hak Cipta</h2>
          <p className="text-muted">
            Gunakan file yang kamu download untuk kebutuhan pribadi, referensi, atau belajar. Jika
            ingin repost, membagikan ulang, atau memakai konten untuk bisnis, pastikan kamu punya
            izin dari kreator dan tetap menghormati hak cipta.
          </p>
          <p className="text-muted mb-0">
            Tool ini dibuat untuk membantu pengguna menyimpan konten TikTok dari link publik. Jangan
            gunakan konten orang lain untuk tujuan komersial tanpa izin.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion faq-accordion" id="faqAccordionId">
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
                        data-bs-target={`#faqId${index}`}
                      >
                        {faq.q}
                      </button>
                    </h3>
                    <div
                      id={`faqId${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqAccordionId"
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

      {/* Closing */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-3">Download Video TikTok Lebih Cepat dan Mudah</h2>
          <p className="lead text-white-50 mb-0 mx-auto" style={{ maxWidth: '900px' }}>
            TikTok Downloader ini dibuat untuk satu hal: membantu kamu menyimpan konten TikTok dengan
            cara yang cepat, jelas, dan tidak ribet. Dari video without watermark HD, video with
            watermark, MP3/audio/music, photo, story, profile picture, sampai thumbnail, semuanya
            bisa diarahkan dari satu halaman tanpa APK, tanpa login, dan tanpa install aplikasi
            tambahan.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-light">
        <div className="container">
          <h2 className="h5 fw-bold mb-2">Penafian</h2>
          <p className="text-muted small mb-0">
            This tool is not affiliated with TikTok. Please respect creator rights and use downloaded
            content responsibly.
          </p>
        </div>
      </section>
        </>
      )}
    </Downloader>
  );
}
