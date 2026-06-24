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

const faqs = [
  {
    q: 'Can I convert TikTok video to MP3?',
    a: 'Ya, jika opsi MP3 tersedia, kamu bisa mengambil audio dari video TikTok dan menyimpannya sebagai file MP3.',
  },
  {
    q: 'Can I download TikTok sound, audio, or music?',
    a: 'Ya. Gunakan fitur MP3/audio untuk menyimpan sound, musik, voiceover, atau original sound dari TikTok.',
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
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">
                    Download TikTok <span className="tiktok-text">MP3, Sound, Audio, and Music</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Selain video, kamu juga bisa mengambil audio dari TikTok. Pilih opsi MP3 jika kamu
                    hanya ingin menyimpan sound, musik, voiceover, atau lagu TikTok tanpa videonya.
                  </p>
                  <p className="mb-0 text-white-50">
                    Fitur ini cocok untuk pengguna yang suka menyimpan original sound, background music,
                    atau audio viral dari TikTok. Cukup paste link video, lalu pilih format audio untuk
                    mengubah video TikTok menjadi MP3 jika opsi tersedia.
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

          {/* MP3 details */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download TikTok MP3, Sound, Audio, and Music</h2>
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

      {/* FAQ */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
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

      {/* Disclaimer */}
      <section className="py-4 bg-white">
        <div className="container">
          <h2 className="h5 fw-bold mb-2">Disclaimer</h2>
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
