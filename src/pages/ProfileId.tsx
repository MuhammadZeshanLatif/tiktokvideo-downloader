import { Link } from 'react-router-dom';
import { ProfileDownloader, type ProfileText } from '../components/ProfileDownloader';
import { profileFaqsId as faqs } from '../data/toolFaqs';

const t: ProfileText = {
  placeholder: '@username atau link profil',
  pasteButton: 'Tempel Link TikTok',
  fetchButton: 'Ambil Foto Profil',
  processing: 'Memproses...',
  resultsTitle: 'Hasil Download',
  resultsSubtitle: 'Lihat preview foto profilnya, lalu download di bawah ini.',
  downloadButton: 'Download Foto Profil',
  downloadingPrefix: 'Mengunduh',
  invalidInput: 'Masukkan username atau link profil TikTok yang valid',
  notFound: 'Profil tidak ditemukan. Periksa username atau link profil, lalu coba lagi.',
  ready: 'Foto profil sudah siap.',
};

const inputFormats = [
  { label: '@username', example: '@tiktok', works: true },
  { label: 'Username saja', example: 'tiktok', works: true },
  { label: 'Link profil lengkap', example: 'tiktok.com/@tiktok', works: true },
  { label: 'Link video', example: 'tiktok.com/@tiktok/video/123…', works: false },
];

export function ProfileId() {
  return (
    <ProfileDownloader t={t}>
      {({ Form, Results }) => (
        <>
          {/* Hero Section */}
          <section id="download-section" className="hero-gradient text-white py-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">
                    Download Foto Profil TikTok —{' '}
                    <span className="tiktok-text">Simpan Avatar Ukuran Penuh</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Simpan foto profil TikTok publik mana pun dalam ukuran penuh. Masukkan
                    usernamenya atau tempel link profilnya, lalu download avatarnya dalam resolusi
                    terbesar yang disediakan TikTok.
                  </p>
                  <p className="mb-0 text-white-50">
                    Foto profil melekat pada akun, bukan pada satu video, itulah sebabnya tool ini
                    meminta username dan bukan link video. TikTok hanya menampilkan avatar dalam
                    ukuran kecil, jadi mendownloadnya adalah cara paling praktis untuk melihatnya
                    dengan jelas.
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

          {/* Why */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kenapa Foto Profil TikTok Susah Disimpan Langsung</h2>
              <p className="text-muted">
                TikTok tidak pernah menampilkan foto profil dalam ukuran penuh. Di aplikasi bentuknya
                hanya lingkaran kecil, dan menekannya lama pun tidak menghasilkan apa-apa. Screenshot
                hanya memberi kamu lingkaran yang terpotong dan terkompresi beserta latar belakang
                seadanya, dengan resolusi mengikuti layar kamu.
              </p>
              <p className="text-muted">
                Padahal di balik lingkaran itu TikTok menyimpan versi persegi yang lebih besar. Tool
                ini mencari akunnya, meminta versi terbesar yang dipublikasikan TikTok, lalu
                memberikan file aslinya kepada kamu tanpa dipotong.
              </p>
              <p className="text-muted mb-0">
                Hanya itu pekerjaannya. Tidak ada proses upscale, penajaman, atau rekonstruksi, karena
                menambah detail berarti mengarang piksel yang memang tidak pernah ada di gambarnya.
              </p>
            </div>
          </section>

          {/* What to enter */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Apa yang Harus Dimasukkan</h2>
              <p className="text-muted mb-4">
                Tool ini fleksibel soal format. Satu-satunya yang tidak bisa dipakai adalah link ke
                satu video, karena link itu menunjuk ke klipnya, bukan ke akunnya.
              </p>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Input</th>
                      <th scope="col">Contoh</th>
                      <th scope="col">Bisa dipakai?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inputFormats.map((row) => (
                      <tr key={row.label}>
                        <td className="fw-semibold">{row.label}</td>
                        <td className="text-muted">{row.example}</td>
                        <td>{row.works ? 'Bisa' : 'Tidak — pakai halaman download foto TikTok'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-0">
                Punyanya link video? Halaman{' '}
                <Link to="/id/thumbnail">download foto TikTok</Link> menyimpan gambar cover dari
                video tertentu.
              </p>
            </div>
          </section>

          {/* Quality */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Seberapa Besar Foto Profil TikTok?</h2>
              <p className="text-muted">
                Lebih kecil daripada yang dibayangkan kebanyakan orang. TikTok hanya membutuhkan
                avatar seukuran lingkaran kecil, jadi mereka tidak menyimpan versi beresolusi cetak.
                Versi terbesar yang dipublikasikan umumnya beberapa ratus piksel persegi.
              </p>
              <p className="text-muted">
                Ini penting kalau kamu berniat memperbesarnya. Avatar TikTok tidak akan tetap tajam
                saat dibesarkan seukuran poster, dan tool mana pun yang menjanjikan versi HD atau 4K
                dari sebuah avatar sebenarnya sedang meng-upscale dengan software atau menampilkan
                gambar yang berbeda sama sekali.
              </p>
              <p className="text-muted mb-0">
                Yang kamu dapat di sini adalah file aslinya pada ukuran sebenarnya, dan itulah
                maksimal yang benar-benar ada.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">Cara Download Foto Profil TikTok</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Cari Usernamenya</h3>
                    <p className="text-muted mb-0">
                      Buka akunnya di TikTok lalu salin @username yang tertulis di bawah avatar, atau
                      salin link profilnya lewat menu Share.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Masukkan di Kotak Atas</h3>
                    <p className="text-muted mb-0">
                      Ketik atau tempel di kotak yang ada di atas lalu tekan Ambil Foto Profil. Tanda
                      @ boleh ditulis, boleh juga tidak.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Simpan Avatarnya</h3>
                    <p className="text-muted mb-0">
                      Periksa previewnya untuk memastikan akunnya benar, lalu ketuk Download Foto
                      Profil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Devices */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">
                Simpan Foto Profil TikTok di Android, iPhone, dan PC
              </h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">Di Android</h3>
                    <p className="text-muted mb-0">
                      Tempel usernamenya di Chrome lalu download. Gambarnya masuk ke folder Download
                      dan biasanya muncul di Galeri atau Google Photos tak lama kemudian.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">Di iPhone atau iPad</h3>
                    <p className="text-muted mb-0">
                      Salin usernamenya di aplikasi TikTok, pindah ke Safari, lalu tempel di sini.
                      Saat avatarnya muncul kamu bisa mendownloadnya atau menekan lama gambarnya lalu
                      pilih Add to Photos.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">Di PC atau Laptop</h3>
                    <p className="text-muted mb-0">
                      Tempel alamat profilnya langsung dari kolom browser. Ini cara paling mudah
                      kalau avatarnya mau dipakai di dokumen, slide, atau file desain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Kalau Profilnya Tidak Ditemukan</h2>
              <ul className="text-muted">
                <li className="mb-2">
                  <strong>Periksa ejaannya.</strong> Username TikTok sering memuat titik, garis
                  bawah, atau huruf berulang yang mudah salah ketik. Lebih aman salin dan tempel
                  daripada mengetik manual.
                </li>
                <li className="mb-2">
                  <strong>Pastikan itu username, bukan nama tampilan.</strong> Nama tampilan adalah
                  teks besar di profil dan bisa memuat spasi serta emoji. Username adalah yang diawali
                  tanda @.
                </li>
                <li className="mb-2">
                  <strong>Akunnya mungkin sudah ganti nama.</strong> Username bisa diubah, dan yang
                  lama langsung tidak berlaku begitu dilepas.
                </li>
                <li className="mb-2">
                  <strong>Akunnya mungkin diblokir atau dihapus.</strong> Tidak ada yang bisa diambil
                  dari akun yang sudah dihapus TikTok.
                </li>
                <li className="mb-0">
                  <strong>Tunggu sebentar lalu coba lagi.</strong> Kegagalan sesekali biasanya hilang
                  sendiri setelah jeda singkat.
                </li>
              </ul>
              <p className="text-muted mb-0 mt-3">
                Akun privat umumnya tetap bisa, karena TikTok membiarkan avatarnya terlihat meski
                video di dalamnya disembunyikan.
              </p>
            </div>
          </section>

          {/* Responsible use */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Memakai Foto Orang Lain Secara Bertanggung Jawab</h2>
              <p className="text-muted">
                Foto profil berbeda dari konten TikTok lainnya. Biasanya itu foto orang sungguhan,
                dan berfungsi sebagai identitas mereka di platform. Hal itu perlu diperlakukan lebih
                hati-hati daripada sekadar cover video.
              </p>
              <p className="text-muted">
                Melihat avatar dengan jelas, menyimpan logo brand untuk bahan presentasi, atau
                menyimpan salinan foto milik kamu sendiri adalah hal yang wajar. Memasang wajah orang
                lain sebagai avatar kamu, membuat akun palsu dengannya, atau mengeditnya menjadi
                sesuatu yang tidak pernah mereka unggah bukan hal yang wajar, dan di banyak tempat itu
                membawa konsekuensi hukum yang nyata di luar aturan TikTok sendiri.
              </p>
              <p className="text-muted mb-0">
                Pemilik akun tidak pernah diberi tahu saat kamu memakai tool ini, dan justru karena
                itulah tanggung jawab penggunaannya ada di tangan kamu.{' '}
                <Link to="/id/terms-conditions">Syarat dan ketentuan</Link> kami menjelaskan apa yang
                diizinkan.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Apakah Tool Ini Aman Dipakai?</h2>
              <p className="text-muted">
                Tidak ada login, jadi tidak ada data akun TikTok yang terlibat sama sekali. Tidak ada
                yang diinstall, tidak perlu ekstensi, dan username yang kamu cari dipakai untuk
                menyelesaikan permintaan itu saja, bukan disimpan sebagai profil tentang kamu.
              </p>
              <p className="text-muted mb-0">
                <Link to="/id/privacy-policy">Kebijakan privasi</Link> menjelaskan secara rinci data
                apa saja yang dikumpulkan, termasuk cara kerja cookie analitik dan iklan di situs ini.
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
                      <Link to="/id/thumbnail">Download Foto TikTok</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Simpan gambar cover dari sebuah video lewat linknya.
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
                  <div className="accordion faq-accordion" id="faqAccordionProfileId">
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
                            data-bs-target={`#faqProfileId${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`faqProfileId${index}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`faqProfileId${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordionProfileId"
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
    </ProfileDownloader>
  );
}
