import { ProfileDownloader, type ProfileText } from '../components/ProfileDownloader';

const t: ProfileText = {
  placeholder: '@username atau link profil',
  pasteButton: 'Paste TikTok Link',
  fetchButton: 'Ambil Profile Picture',
  processing: 'Memproses...',
  resultsTitle: 'Hasil Download',
  resultsSubtitle: 'Lihat preview profile picture, lalu download di bawah ini.',
  downloadButton: 'Download Profile Picture',
  downloadingPrefix: 'Mengunduh',
  invalidInput: 'Masukkan username atau link profil TikTok yang valid',
  notFound: 'Profil tidak ditemukan. Periksa username atau link profil, lalu coba lagi.',
  ready: 'Profile picture sudah siap.',
};

const faqs = [
  {
    q: 'Apakah saya bisa download profile picture TikTok?',
    a: 'Ya. Masukkan username atau link profil TikTok, lalu kamu bisa menyimpan foto profil dalam ukuran terbesar yang tersedia.',
  },
  {
    q: 'Saya perlu link video atau profil?',
    a: 'Untuk profile picture, gunakan username atau link profil (misalnya @username). Link video langsung dipakai untuk download video, audio, atau thumbnail.',
  },
  {
    q: 'Profile picture disimpan dalam format apa?',
    a: 'Foto profil disimpan sebagai file gambar yang bisa dibuka di HP, tablet, maupun komputer.',
  },
  {
    q: 'Apakah profile picture downloader ini gratis?',
    a: 'Ya, tool ini gratis digunakan. Masukkan username atau link profil TikTok publik, lalu download foto profil tanpa biaya dan tanpa login.',
  },
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
                    TikTok Profile Picture Downloader —{' '}
                    <span className="tiktok-text">Simpan Foto Profil TikTok HD</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Simpan profile picture TikTok dalam ukuran penuh dengan cepat dan mudah. Masukkan
                    username atau link profil TikTok, lalu download avatar ke perangkat kamu.
                  </p>
                  <p className="mb-0 text-white-50">
                    Profile picture berguna untuk melihat avatar TikTok dalam ukuran lebih jelas.
                    Untuk profile picture, gunakan username atau link profil karena tool perlu
                    membaca avatar akun, bukan satu video saja.
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

          {/* Details */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Download Profile Picture TikTok Ukuran Penuh</h2>
              <p className="text-muted">
                TikTok menampilkan foto profil dalam ukuran kecil di dalam aplikasi. Dengan TikTok
                Profile Picture Downloader ini, kamu bisa melihat dan menyimpan avatar dalam ukuran
                terbesar yang tersedia langsung dari browser.
              </p>
              <p className="text-muted mb-0">
                Cukup masukkan username atau link profil TikTok publik, lihat preview profile
                picture, lalu download ke perangkat kamu.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">Cara Download Profile Picture TikTok</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Salin Username atau Link Profil</h3>
                    <p className="text-muted mb-0">
                      Buka TikTok, salin username (misalnya @username) atau link profil.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Tempel di Downloader</h3>
                    <p className="text-muted mb-0">
                      Tempel username atau link profil ke kotak di atas, lalu klik Ambil Profile
                      Picture.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Download Profile Picture</h3>
                    <p className="text-muted mb-0">
                      Lihat preview avatar, lalu klik Download Profile Picture untuk menyimpannya ke
                      perangkat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <div className="text-center mb-5">
                <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
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
          <section className="py-4 bg-light">
            <div className="container">
              <h2 className="h5 fw-bold mb-2">Disclaimer</h2>
              <p className="text-muted small mb-0">
                This tool is not affiliated with TikTok. Please respect creator rights and use
                downloaded content responsibly.
              </p>
            </div>
          </section>
        </>
      )}
    </ProfileDownloader>
  );
}
