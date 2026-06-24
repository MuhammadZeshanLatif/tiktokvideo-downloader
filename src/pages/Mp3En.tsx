import { Downloader, type DownloaderText } from '../components/Downloader';

const t: DownloaderText = {
  cardTitle: '',
  cardSubtitle: '',
  placeholder: 'https://www.tiktok.com/@user/video/...',
  pasteButton: 'Paste TikTok Link',
  mp4Label: 'MP4 (Video)',
  mp3Label: 'MP3 (Audio)',
  downloadButton: 'Download',
  processing: 'Processing...',
  resultsTitle: 'Download Results',
  resultsSubtitle: 'Preview your audio and use the download links below.',
  previewNote: 'Preview and download your audio.',
  downloadVideo: 'Download Video',
  downloadAudio: 'Download Audio',
  downloadingPrefix: 'Downloading',
  noLinksForFormat: (format) => `No ${format} links found. Try a different TikTok URL.`,
  invalidUrl: 'Please enter a valid TikTok URL',
  fetchFailed: 'Failed to fetch TikTok download links.',
  noLinksFound: 'No download links were found. Try a different TikTok URL.',
  ready: 'Download links are ready.',
  defaultTitle: 'TikTok Download',
};

const faqs = [
  {
    q: 'Can I convert TikTok videos to MP3?',
    a: 'Yes, if MP3 is supported, you can extract audio from a TikTok video and save it as an MP3 file.',
  },
  {
    q: 'Can I download TikTok sound, audio, or music?',
    a: 'Yes, the MP3 or audio feature can help you save TikTok sounds, music, voiceovers, or original audio from public videos when available.',
  },
];

export function Mp3En() {
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
                    TikTok is full of trending sounds, voiceovers, background music, and short audio
                    clips. If you only need the sound, choose the MP3 or audio option when it is
                    available.
                  </p>
                  <p className="mb-0 text-white-50">
                    This feature can help you extract audio from a public TikTok video and save it as an
                    MP3 file if supported. It is useful for saving a favorite sound, music clip,
                    voiceover, or audio reference without downloading the full video.
                  </p>
                </div>
                <div className="col-lg-6">
                  {Form}
                  <p className="text-center text-white-50 small mt-3 mb-0">
                    Free • No Login • No App Needed • Works on iPhone, Android, and PC
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
            TikTok is full of trending sounds, voiceovers, background music, and short audio clips.
            If you only need the sound, choose the MP3 or audio option when it is available.
          </p>
          <p className="text-muted mb-0">
            This feature can help you extract audio from a public TikTok video and save it as an MP3
            file if supported. It is useful for saving a favorite sound, music clip, voiceover, or
            audio reference without downloading the full video.
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
              <div className="accordion faq-accordion" id="faqAccordionMp3En">
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
                        data-bs-target={`#faqMp3En${index}`}
                      >
                        {faq.q}
                      </button>
                    </h3>
                    <div
                      id={`faqMp3En${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqAccordionMp3En"
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
