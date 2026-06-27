import { Link } from 'react-router-dom';
import { Downloader, type DownloaderText } from '../components/Downloader';
import { CheckListItem, StepFlow, YesMark } from '../components/ui/StatusIcons';

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
  resultsSubtitle: 'Lihat preview audio, lalu gunakan link download di bawah ini.',
  previewNote: 'Preview dan download audio kamu.',
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

const checklist = [
  'Download MP3 TikTok Gratis',
  'Tanpa Login atau Registrasi',
  'Tidak Perlu Instal Aplikasi',
  'Mendukung Android, iPhone, iPad, Windows & Mac',
  'Audio Berkualitas Tinggi',
  'Proses Download Cepat',
  'Gratis Tanpa Batas',
  'Mudah Digunakan Langsung dari Browser',
];

const faqs = [
  {
    q: 'Apakah TikTok MP3 Downloader ini gratis?',
    a: 'Ya. Anda dapat menggunakan layanan ini secara gratis tanpa biaya berlangganan maupun biaya tersembunyi.',
  },
  {
    q: 'Apakah saya perlu membuat akun?',
    a: 'Tidak. Anda tidak perlu login atau membuat akun sebelum mengunduh audio TikTok.',
  },
  {
    q: 'Apakah saya harus menginstal aplikasi?',
    a: 'Tidak. Seluruh proses dilakukan langsung melalui browser sehingga tidak memerlukan aplikasi tambahan.',
  },
  {
    q: 'Apakah layanan ini mendukung Android?',
    a: 'Ya. TikTok MP3 Downloader dapat digunakan dengan baik pada perangkat Android menggunakan browser modern.',
  },
  {
    q: 'Apakah layanan ini mendukung iPhone?',
    a: 'Ya. Pengguna iPhone maupun iPad juga dapat menggunakan layanan ini untuk mengunduh file MP3 dari video TikTok.',
  },
  {
    q: 'Apakah saya bisa menggunakannya di PC atau Laptop?',
    a: 'Tentu. Anda dapat menggunakan Windows, Mac maupun Linux selama memiliki browser dan koneksi internet.',
  },
  {
    q: 'Mengapa file MP3 tidak bisa diunduh?',
    a: 'Ada beberapa kemungkinan penyebabnya, seperti tautan video yang salah, video telah dihapus, video bersifat privat, atau audio asli sudah tidak tersedia di TikTok. Pastikan Anda menggunakan URL video yang benar dan video masih dapat diakses secara publik.',
  },
  {
    q: 'Apakah ada batas jumlah download?',
    a: 'Tidak. Anda dapat menggunakan TikTok MP3 Downloader untuk mengunduh audio TikTok sebanyak yang Anda butuhkan selama layanan tersedia.',
  },
  {
    q: 'Di mana file MP3 disimpan setelah diunduh?',
    a: 'Secara umum, file akan tersimpan di folder Download pada browser atau perangkat yang Anda gunakan. Jika tidak menemukannya, periksa riwayat unduhan browser Anda.',
  },
  {
    q: 'Apakah kualitas audio tetap jernih?',
    a: 'Ya. File audio yang diunduh akan mengikuti kualitas audio yang tersedia dari sumber video TikTok. Jika audio asli memiliki kualitas yang baik, hasil unduhan juga akan tetap jernih.',
  },
  {
    q: 'Bisakah file MP3 dijadikan nada dering?',
    a: 'Ya. Setelah file berhasil diunduh, Anda dapat menggunakannya sebagai nada dering telepon, nada dering WhatsApp, alarm, atau untuk kebutuhan pribadi lainnya.',
  },
  {
    q: 'Apakah TikTok MP3 Downloader aman digunakan?',
    a: 'Ya. Anda tidak perlu menginstal aplikasi ataupun membuat akun. Seluruh proses dilakukan langsung melalui browser sehingga lebih praktis dan mudah digunakan. Tetap gunakan layanan ini secara bertanggung jawab dan hormati hak cipta pemilik konten.',
  },
  {
    q: 'Apakah saya bisa mengunduh audio dari video TikTok privat?',
    a: 'Tidak. Layanan hanya dapat memproses video TikTok yang dapat diakses secara publik. Video privat tidak dapat diunduh.',
  },
  {
    q: 'Apakah saya bisa menggunakan layanan ini di semua browser?',
    a: 'Ya. TikTok MP3 Downloader mendukung browser modern seperti Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, Opera, dan browser populer lainnya.',
  },
];

export function Mp3Id() {
  return (
    <Downloader t={t} lockFormat="mp3">
      {({ Form, Results }) => (
        <>
          {/* Hero Section */}
          <section id="download-section" className="hero-gradient text-white py-5">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h1 className="display-5 fw-bold mb-4 text-center">
                    Download TikTok MP3 Gratis Tanpa Aplikasi
                  </h1>
                  <div className="mb-4">{Form}</div>
                  <div className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Kenapa Menggunakan TikTok MP3 Downloader Ini?</h2>
                    <ul className="list-unstyled mb-0">
                      {checklist.map((item) => (
                        <CheckListItem key={item} className="mb-2 text-white-50">
                          {item}
                        </CheckListItem>
                      ))}
                    </ul>
                  </div>
                  <p className="lead mb-3 text-white-50">
                    Pernah menemukan lagu atau sound TikTok yang ingin disimpan, tetapi tidak tahu
                    cara mengunduhnya sebagai file MP3? Banyak pengguna ingin mendengarkan audio
                    TikTok secara offline, menjadikannya nada dering, atau menggunakannya sebagai
                    referensi konten, namun TikTok tidak menyediakan fitur download audio secara
                    langsung.
                  </p>
                  <p className="mb-3 text-white-50">
                    Dengan TikTok MP3 Downloader, Anda dapat mengubah video TikTok menjadi file MP3
                    hanya dalam beberapa detik. Cukup salin tautan video TikTok, tempelkan ke kolom
                    download di atas, lalu klik tombol Download. Layanan ini gratis, tidak memerlukan
                    login, tidak perlu menginstal aplikasi tambahan, serta dapat digunakan di Android,
                    iPhone, iPad, Windows, Mac, maupun perangkat lain melalui browser favorit Anda.
                  </p>
                  <p className="mb-0 text-white-50">
                    Audio diambil langsung dari sumber audio asli TikTok, bukan hasil konversi ulang
                    dari file MP4. Dengan cara ini kualitas suara tetap jernih dan proses download
                    menjadi lebih cepat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {Results}

          {/* Cara Download MP3 TikTok */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Cara Download MP3 TikTok</h2>
              <p className="text-muted mb-3">
                Mengunduh audio TikTok sangat mudah dan hanya membutuhkan beberapa langkah sederhana.
              </p>
              <p className="text-muted mb-4">
                Cara download lagu TikTok jadi MP3 hanya membutuhkan beberapa langkah sederhana.
                Proses ini dapat dilakukan melalui Android, iPhone, tablet maupun komputer tanpa
                menginstal aplikasi tambahan.
              </p>
              <h3 className="h5 fw-bold mb-2">Langkah 1 – Salin Tautan Video TikTok</h3>
              <p className="text-muted mb-4">
                Buka aplikasi TikTok atau situs web TikTok kemudian cari video yang ingin Anda simpan
                audionya. Tekan tombol Bagikan lalu pilih Salin Tautan untuk menyalin URL video ke
                clipboard perangkat Anda.
              </p>
              <h3 className="h5 fw-bold mb-2">Langkah 2 – Tempelkan Link ke Kolom Download</h3>
              <p className="text-muted mb-4">
                Kembali ke halaman TikTok MP3 Downloader ini lalu tempelkan URL yang sudah disalin ke
                dalam kolom input yang tersedia di bagian atas halaman.
              </p>
              <h3 className="h5 fw-bold mb-2">Langkah 3 – Klik Tombol Download MP3</h3>
              <p className="text-muted mb-4">
                Tekan tombol Download, tunggu beberapa saat hingga proses selesai, kemudian pilih opsi
                Download MP3 untuk menyimpan file audio ke perangkat Anda.
              </p>
              <h3 className="h5 fw-bold mb-3">Ringkasan Langkah</h3>
              <StepFlow
                steps={[
                  'Salin Link TikTok',
                  'Tempel Link',
                  'Klik Download',
                  'Simpan File MP3',
                ]}
              />
            </div>
          </section>

          {/* Fitur TikTok MP3 Downloader */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Fitur TikTok MP3 Downloader</h2>
              <p className="text-muted mb-3">
                TikTok MP3 Downloader dirancang agar proses download menjadi cepat, sederhana, dan
                dapat digunakan oleh siapa saja tanpa memerlukan pengetahuan teknis.
              </p>
              <p className="text-muted mb-4">
                Berbeda dengan banyak konverter TikTok ke MP3 lainnya, tool ini dirancang agar proses
                download tetap sederhana tanpa mengurangi kualitas audio yang tersedia dari video
                TikTok.
              </p>
              <div className="table-responsive mb-5">
                <table className="table table-bordered bg-white align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Fitur</th>
                      <th>Penjelasan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gratis Digunakan</td>
                      <td>Download MP3 tanpa biaya.</td>
                    </tr>
                    <tr>
                      <td>Tanpa Login</td>
                      <td>Tidak perlu membuat akun TikTok maupun akun baru.</td>
                    </tr>
                    <tr>
                      <td>Tanpa Aplikasi</td>
                      <td>Semua proses dilakukan langsung melalui browser.</td>
                    </tr>
                    <tr>
                      <td>Download Cepat</td>
                      <td>File diproses hanya dalam beberapa detik.</td>
                    </tr>
                    <tr>
                      <td>Audio Berkualitas Tinggi</td>
                      <td>Menghasilkan kualitas audio yang tetap jernih sesuai sumber.</td>
                    </tr>
                    <tr>
                      <td>Semua Perangkat</td>
                      <td>Mendukung Android, iPhone, iPad, Windows, Mac, dan Linux.</td>
                    </tr>
                    <tr>
                      <td>Browser Modern</td>
                      <td>Berfungsi di Chrome, Safari, Firefox, Edge, Opera, dan browser lainnya.</td>
                    </tr>
                    <tr>
                      <td>Unlimited Download</td>
                      <td>Download sebanyak yang Anda inginkan tanpa batas harian.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="h5 fw-bold mb-2">Gratis Digunakan</h3>
              <p className="text-muted mb-4">
                Anda tidak perlu berpindah aplikasi atau membuat akun hanya untuk menyimpan satu lagu
                TikTok. Cukup salin tautan, tempelkan ke kolom download, dan file MP3 siap diunduh
                dalam beberapa detik.
              </p>
              <h3 className="h5 fw-bold mb-2">Tanpa Login atau Registrasi</h3>
              <p className="text-muted mb-4">
                Tidak perlu membuat akun ataupun masuk menggunakan akun TikTok. Anda hanya perlu
                menyalin tautan video dan memulai proses download.
              </p>
              <h3 className="h5 fw-bold mb-2">Tidak Perlu Instal Aplikasi</h3>
              <p className="text-muted mb-4">
                Seluruh proses dilakukan secara online melalui browser sehingga Anda tidak perlu
                menginstal software, aplikasi, ataupun ekstensi tambahan.
              </p>
              <h3 className="h5 fw-bold mb-2">Download Cepat</h3>
              <p className="text-muted mb-4">
                Server akan memproses tautan video TikTok dalam waktu singkat sehingga file MP3 dapat
                segera diunduh, tergantung pada kecepatan koneksi internet yang digunakan.
              </p>
              <h3 className="h5 fw-bold mb-2">Audio Berkualitas Tinggi</h3>
              <p className="text-muted mb-4">
                Berbeda dengan banyak konverter TikTok ke MP3 lainnya, tool ini dirancang agar proses
                download tetap sederhana tanpa mengurangi kualitas audio yang tersedia dari video
                TikTok.
              </p>
              <h3 className="h5 fw-bold mb-2">Kompatibel dengan Semua Perangkat</h3>
              <p className="text-muted mb-0">
                Layanan ini dapat digunakan melalui smartphone, tablet, laptop, maupun komputer desktop
                tanpa memandang sistem operasi yang digunakan.
              </p>
            </div>
          </section>

          {/* Mengapa Memilih TikTok MP3 Downloader Kami */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Mengapa Memilih TikTok MP3 Downloader Kami</h2>
              <p className="text-muted mb-3">
                Ada banyak layanan download TikTok MP3 yang tersedia di internet, namun tidak semuanya
                menawarkan pengalaman yang mudah dan nyaman. TikTok MP3 Downloader ini dibuat dengan
                fokus pada kecepatan, kemudahan penggunaan, dan kompatibilitas di berbagai perangkat
                sehingga siapa pun dapat menggunakannya tanpa kesulitan.
              </p>
              <p className="text-muted mb-3">
                Anda cukup membuka halaman ini melalui browser, menyalin tautan video TikTok, lalu
                mengunduh file MP3 hanya dalam beberapa klik. Tidak diperlukan instalasi aplikasi,
                tidak ada proses registrasi yang memakan waktu, dan seluruh proses dapat dilakukan
                langsung secara online.
              </p>
              <p className="text-muted mb-0">
                Selain itu, layanan ini dapat digunakan kapan saja selama Anda memiliki koneksi
                internet. Antarmuka yang sederhana membuat proses download menjadi lebih cepat baik di
                perangkat Android, iPhone, iPad, Windows, maupun Mac. Kami juga terus melakukan
                pembaruan agar layanan tetap kompatibel dengan perubahan yang dilakukan oleh TikTok
                sehingga pengguna mendapatkan pengalaman download yang stabil dan mudah digunakan.
              </p>
            </div>
          </section>

          {/* Perangkat yang Didukung */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Perangkat yang Didukung</h2>
              <p className="text-muted mb-4">
                TikTok MP3 Downloader dirancang agar dapat digunakan di hampir semua perangkat modern
                tanpa perlu menginstal aplikasi tambahan. Selama perangkat Anda memiliki browser dan
                koneksi internet yang stabil, proses download dapat dilakukan dengan mudah.
              </p>
              <div className="table-responsive mb-4">
                <table className="table table-bordered bg-white align-middle text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>Perangkat / Browser</th>
                      <th>Didukung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Android</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>iPhone</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>iPad</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Windows PC</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Mac</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Linux</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Tablet</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Google Chrome</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Safari</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Mozilla Firefox</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Microsoft Edge</td><td className="text-center"><YesMark /></td></tr>
                    <tr><td>Opera</td><td className="text-center"><YesMark /></td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-4">
                Baik menggunakan smartphone maupun komputer, seluruh proses download dilakukan
                langsung melalui browser sehingga Anda tidak perlu memasang aplikasi tambahan di
                perangkat.
              </p>
              <h3 className="h5 fw-bold mb-2">Android</h3>
              <p className="text-muted mb-4">
                Pengguna Android cukup membuka browser seperti Chrome atau Firefox, lalu gunakan TikTok
                MP3 Downloader untuk mengunduh audio favorit tanpa perlu memasang aplikasi tambahan.
              </p>
              <h3 className="h5 fw-bold mb-2">iPhone &amp; iPad</h3>
              <p className="text-muted mb-4">
                Layanan ini juga dapat digunakan pada perangkat iPhone maupun iPad. Untuk pengalaman
                terbaik, gunakan browser yang mendukung proses penyimpanan file di perangkat iOS.
              </p>
              <h3 className="h5 fw-bold mb-2">Windows &amp; Mac</h3>
              <p className="text-muted mb-4">
                Baik menggunakan laptop maupun komputer desktop, Anda dapat mengakses layanan ini
                langsung melalui browser tanpa instalasi software tambahan.
              </p>
              <h3 className="h5 fw-bold mb-2">Tablet &amp; Perangkat Lain</h3>
              <p className="text-muted mb-0">
                Selain smartphone dan komputer, layanan ini juga dapat digunakan melalui tablet maupun
                perangkat lain yang memiliki browser modern.
              </p>
            </div>
          </section>

          {/* Format Link TikTok yang Didukung */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Format Link TikTok yang Didukung</h2>
              <p className="text-muted mb-3">
                TikTok MP3 Downloader mendukung berbagai format URL resmi TikTok sehingga Anda dapat
                menyalin tautan dari aplikasi maupun browser.
              </p>
              <p className="text-muted mb-2">Contoh format link yang didukung:</p>
              <p className="text-muted mb-3">
                Tool ini mendukung berbagai jenis URL resmi TikTok, baik yang berasal dari aplikasi
                maupun browser desktop. Pastikan Anda menyalin tautan video secara lengkap agar proses
                download berjalan dengan lancar.
              </p>
              <ul className="text-muted mb-4">
                <li>https://www.tiktok.com/@username/video/123456789</li>
                <li>https://vm.tiktok.com/XXXXXXXX/</li>
                <li>https://vt.tiktok.com/XXXXXXXX/</li>
                <li>https://m.tiktok.com/v/123456789.html</li>
              </ul>
              <p className="text-muted mb-0">
                Pastikan Anda menyalin URL asli dari video TikTok agar proses download berjalan dengan
                baik.
              </p>
            </div>
          </section>

          {/* Mengapa Download MP3 TikTok Bisa Gagal? */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Mengapa Download MP3 TikTok Bisa Gagal?</h2>
              <p className="text-muted mb-3">
                Dalam beberapa kondisi tertentu, proses download mungkin tidak berhasil. Hal tersebut
                biasanya bukan disebabkan oleh layanan, melainkan karena kondisi video atau tautan yang
                digunakan.
              </p>
              <p className="text-muted mb-2">Beberapa penyebab umum antara lain:</p>
              <ul className="text-muted mb-4">
                <li>Link TikTok tidak valid.</li>
                <li>Video sudah dihapus oleh pemiliknya.</li>
                <li>Video bersifat privat.</li>
                <li>Audio asli sudah tidak tersedia.</li>
                <li>Gangguan koneksi internet.</li>
                <li>TikTok sedang melakukan pembaruan sistem.</li>
              </ul>
              <p className="text-muted mb-0">
                Apabila proses download gagal, coba salin kembali tautan video dan ulangi proses
                beberapa saat kemudian.
              </p>
            </div>
          </section>

          {/* Kapan Sebaiknya Menggunakan TikTok MP3 Downloader? */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kapan Sebaiknya Menggunakan TikTok MP3 Downloader?</h2>
              <p className="text-muted mb-3">
                TikTok MP3 Downloader dapat digunakan dalam berbagai situasi.
              </p>
              <ul className="text-muted mb-4">
                <li>Menyimpan lagu TikTok favorit.</li>
                <li>Download sound viral.</li>
                <li>Mendengarkan musik secara offline.</li>
                <li>Menggunakan audio sebagai nada dering.</li>
                <li>Menyimpan referensi audio untuk proses editing video.</li>
                <li>Mengoleksi musik TikTok favorit.</li>
              </ul>
              <h3 className="h5 fw-bold mb-3">Solusi Masalah Umum</h3>
              <div className="table-responsive">
                <table className="table table-bordered bg-white align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Masalah</th>
                      <th>Solusi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Link tidak valid</td>
                      <td>Salin kembali URL video dari TikTok.</td>
                    </tr>
                    <tr>
                      <td>Video privat</td>
                      <td>Gunakan video yang dapat diakses publik.</td>
                    </tr>
                    <tr>
                      <td>Audio tidak tersedia</td>
                      <td>Coba gunakan video lain yang memiliki audio asli.</td>
                    </tr>
                    <tr>
                      <td>Download gagal</td>
                      <td>Muat ulang halaman lalu coba kembali.</td>
                    </tr>
                    <tr>
                      <td>Proses terlalu lama</td>
                      <td>Periksa koneksi internet Anda.</td>
                    </tr>
                    <tr>
                      <td>File tidak tersimpan</td>
                      <td>Periksa folder Download pada perangkat Anda.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Privasi dan Keamanan */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Privasi dan Keamanan</h2>
              <p className="text-muted mb-3">
                Privasi pengguna merupakan salah satu prioritas utama. Oleh karena itu, Anda tidak
                perlu membuat akun ataupun memberikan informasi pribadi untuk menggunakan layanan ini.
              </p>
              <p className="text-muted mb-3">
                Seluruh proses dilakukan secara online melalui browser sehingga Anda dapat mengakses
                layanan dengan lebih praktis tanpa instalasi aplikasi tambahan.
              </p>
              <p className="text-muted mb-4">
                Kami juga menyarankan agar layanan ini digunakan secara bertanggung jawab serta
                menghormati hak cipta dan ketentuan penggunaan yang berlaku pada platform TikTok.
              </p>
              <h3 className="h5 fw-bold mb-3">Ringkasan Privasi</h3>
              <ul className="list-unstyled text-muted mb-0">
                <CheckListItem>Tidak perlu login</CheckListItem>
                <CheckListItem>Tidak meminta data pribadi</CheckListItem>
                <CheckListItem>Tidak perlu instal aplikasi</CheckListItem>
                <CheckListItem>Mudah digunakan melalui browser</CheckListItem>
                <CheckListItem className="mb-0">
                  Gunakan hanya untuk konten yang memiliki izin untuk diunduh
                </CheckListItem>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-5">Pertanyaan yang Sering Diajukan (FAQ)</h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="accordion faq-accordion" id="faqAccordionMp3Id">
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
                            data-bs-target={`#faqMp3Id${index}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`faqMp3Id${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordionMp3Id"
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

          {/* Kualitas Audio MP3 */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kualitas Audio MP3</h2>
              <p className="text-muted mb-4">
                Kualitas file MP3 mengikuti kualitas audio yang tersedia pada video TikTok. Apabila
                video menggunakan audio berkualitas tinggi, hasil download juga akan tetap jernih. Tool
                ini memproses audio secara efisien sehingga Anda dapat menikmati file MP3 dengan
                kualitas terbaik yang tersedia.
              </p>
              <div className="table-responsive mb-4">
                <table className="table table-bordered bg-white align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>MP3</th>
                      <th>MP4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hanya berisi audio</td>
                      <td>Berisi video dan audio</td>
                    </tr>
                    <tr>
                      <td>Ukuran file lebih kecil</td>
                      <td>Ukuran file lebih besar</td>
                    </tr>
                    <tr>
                      <td>Cocok untuk musik, podcast, dan nada dering</td>
                      <td>Cocok untuk menonton video</td>
                    </tr>
                    <tr>
                      <td>Lebih hemat ruang penyimpanan</td>
                      <td>Membutuhkan ruang penyimpanan lebih besar</td>
                    </tr>
                    <tr>
                      <td>Mudah diputar di hampir semua perangkat</td>
                      <td>Mendukung tampilan video</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-0">
                Jika tujuan Anda hanya ingin menyimpan lagu, musik, atau sound TikTok, maka format MP3
                merupakan pilihan yang paling praktis.
              </p>
            </div>
          </section>

          {/* Alat TikTok Lainnya */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Alat TikTok Lainnya</h2>
              <p className="text-muted mb-4">
                Selain mengunduh audio TikTok dalam format MP3, Anda juga dapat menggunakan berbagai
                alat lain untuk memenuhi kebutuhan download konten TikTok.
              </p>
              <ul className="text-muted mb-4">
                <li>
                  <Link to="/id">TikTok Video Downloader</Link>
                </li>
                <li>TikTok Downloader Tanpa Watermark</li>
                <li>TikTok Story Downloader</li>
                <li>TikTok Slide Photo Downloader</li>
                <li>TikTok Photo Downloader</li>
                <li>TikTok Profile Picture Downloader</li>
                <li>TikTok Thumbnail Downloader</li>
                <li>TikTok Caption Downloader</li>
              </ul>
              <p className="text-muted mb-0">
                Seluruh alat tersebut dirancang untuk mempermudah proses download konten TikTok secara
                cepat melalui browser tanpa perlu menginstal aplikasi tambahan.
              </p>
            </div>
          </section>

          {/* Catatan Penting */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Catatan Penting</h2>
              <p className="text-muted mb-3">
                TikTok MP3 Downloader merupakan alat yang membantu pengguna mengunduh audio dari video
                TikTok yang dapat diakses secara publik. Layanan ini tidak berafiliasi dengan TikTok
                maupun ByteDance Ltd.
              </p>
              <p className="text-muted mb-0">
                Kami mendorong setiap pengguna untuk menghormati hak cipta, hak kekayaan intelektual,
                serta ketentuan penggunaan TikTok. Pastikan Anda hanya mengunduh dan menggunakan konten
                yang memang memiliki izin atau diperbolehkan oleh pemiliknya.
              </p>
            </div>
          </section>

          {/* Mengapa Menggunakan TikTok MP3 Downloader Ini? */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Mengapa Menggunakan TikTok MP3 Downloader Ini?</h2>
              <p className="text-muted mb-3">
                Jika Anda mencari cara yang cepat, mudah, dan gratis untuk mengunduh lagu, musik, atau
                sound TikTok ke format MP3, layanan ini dapat menjadi solusi yang praktis. Anda tidak
                perlu membuat akun, tidak perlu menginstal aplikasi, dan seluruh proses dapat dilakukan
                langsung melalui browser dalam beberapa langkah sederhana.
              </p>
              <p className="text-muted mb-0">
                Dengan dukungan untuk Android, iPhone, iPad, Windows, Mac, Linux, serta berbagai browser
                modern, TikTok MP3 Downloader membantu Anda menyimpan audio favorit dengan lebih mudah
                kapan pun dibutuhkan.
              </p>
            </div>
          </section>

          {/* Kesimpulan */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kesimpulan</h2>
              <p className="text-muted mb-0">
                Menyimpan audio TikTok kini tidak lagi rumit. Cukup salin tautan video, tempelkan ke
                kolom download di atas, lalu unduh file MP3 hanya dalam beberapa detik. Baik untuk
                mendengarkan musik secara offline, mengumpulkan sound favorit, atau menjadikannya nada
                dering, layanan ini memberikan cara yang cepat dan praktis tanpa perlu instalasi
                aplikasi ataupun proses registrasi.
              </p>
            </div>
          </section>
        </>
      )}
    </Downloader>
  );
}
