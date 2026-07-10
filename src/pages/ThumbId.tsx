import { Downloader, type DownloaderText } from '../components/Downloader';

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
  resultsSubtitle: 'Lihat preview cover image, lalu download di bawah ini.',
  previewNote: 'Preview dan download cover image video.',
  downloadVideo: 'Download Video',
  downloadAudio: 'Download Audio',
  downloadingPrefix: 'Mengunduh',
  noLinksForFormat: (format) => `${format} tidak ditemukan. Coba link TikTok lain.`,
  invalidUrl: 'Masukkan link TikTok yang valid',
  fetchFailed: 'Gagal mengambil link download TikTok.',
  noLinksFound: 'Tidak ada link download yang ditemukan. Coba link TikTok lain.',
  ready: 'Cover image sudah siap.',
  defaultTitle: 'Thumbnail TikTok',
  downloadThumbnail: 'Download Image',
  noThumbnail: 'Thumbnail tidak ditemukan untuk link TikTok ini.',
};

const faqs = [
  {
    q: 'Apakah saya bisa download thumbnail TikTok?',
    a: 'Ya, jika fitur tersedia, kamu bisa menggunakan link video TikTok untuk menyimpan cover atau preview image dari video tersebut.',
  },
  {
    q: 'Thumbnail disimpan dalam format apa?',
    a: 'Cover image disimpan sebagai file gambar JPG yang bisa dibuka di HP, tablet, maupun komputer.',
  },
  {
    q: 'Apakah saya perlu menginstal aplikasi?',
    a: 'Tidak. Tool ini berjalan langsung di browser, jadi tidak perlu APK, aplikasi, software, atau ekstensi tambahan.',
  },
  {
    q: 'Apakah thumbnail downloader ini gratis?',
    a: 'Ya, tool ini gratis digunakan. Tempel link video TikTok publik, lalu download cover image tanpa biaya dan tanpa login.',
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
                    TikTok Thumbnail Downloader —{' '}
                    <span className="tiktok-text">Download Cover Video TikTok</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Simpan thumbnail atau cover image dari video TikTok publik dengan cepat dan mudah.
                    Salin link video TikTok, tempel di kotak downloader, lalu download cover image
                    sebagai file JPG.
                  </p>
                  <p className="mb-0 text-white-50">
                    Thumbnail berguna untuk menyimpan cover atau preview dari video TikTok. Untuk
                    thumbnail, gunakan link video TikTok agar tool bisa mengambil cover image dari
                    video tersebut.
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
              <h2 className="fw-bold mb-3">Download Thumbnail dan Cover Image Video TikTok</h2>
              <p className="text-muted">
                Setiap video TikTok publik memiliki cover image yang muncul sebelum video diputar.
                Dengan TikTok Thumbnail Downloader ini, kamu bisa menyimpan cover image tersebut ke
                perangkat dalam kualitas terbaik yang tersedia.
              </p>
              <p className="text-muted mb-0">
                Fitur ini cocok untuk menyimpan preview video, menyimpan gambar referensi, atau
                menggunakan cover untuk catatan pribadi. Tempel link video TikTok, lalu download
                thumbnail sebagai file JPG.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">Cara Download Thumbnail TikTok</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Salin Link Video TikTok</h3>
                    <p className="text-muted mb-0">
                      Buka TikTok, pilih video, tekan tombol Share, lalu pilih Copy Link.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Tempel Link di Downloader</h3>
                    <p className="text-muted mb-0">
                      Tempel link video TikTok ke kotak di atas. Pastikan link bersifat publik dan
                      masih aktif.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Download Cover Image</h3>
                    <p className="text-muted mb-0">
                      Lihat preview cover image, lalu klik Download Image untuk menyimpan thumbnail
                      sebagai file JPG.
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
    </Downloader>
  );
}
