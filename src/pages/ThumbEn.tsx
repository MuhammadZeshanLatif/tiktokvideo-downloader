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
  resultsSubtitle: 'Preview the cover image and download it below.',
  previewNote: 'Preview and download the video cover image.',
  downloadVideo: 'Download Video',
  downloadAudio: 'Download Audio',
  downloadingPrefix: 'Downloading',
  noLinksForFormat: (format) => `No ${format} found. Try a different TikTok URL.`,
  invalidUrl: 'Please enter a valid TikTok URL',
  fetchFailed: 'Failed to fetch TikTok download links.',
  noLinksFound: 'No download links were found. Try a different TikTok URL.',
  ready: 'Cover image is ready.',
  defaultTitle: 'TikTok Thumbnail',
  downloadThumbnail: 'Download Image',
  noThumbnail: 'No thumbnail was found for this TikTok link.',
};

const faqs = [
  {
    q: 'Can I download TikTok thumbnails?',
    a: 'Yes, if thumbnail download is supported, you can use a TikTok video link to save the video cover image or preview image.',
  },
  {
    q: 'What image format is the thumbnail saved as?',
    a: 'The cover image is saved as a JPG image file that you can open on any phone, tablet, or computer.',
  },
  {
    q: 'Do I need to install an app?',
    a: 'No. This is a browser-based tool, so you do not need to install an app, APK, software, or extension.',
  },
  {
    q: 'Is the thumbnail downloader free?',
    a: 'Yes, the tool is free to use. Paste a public TikTok video link and download the cover image without payment or login.',
  },
];

export function ThumbEn() {
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
                    <span className="tiktok-text">Download Video Cover Image</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Save the thumbnail or cover image of any public TikTok video in a fast and simple
                    way. Copy the TikTok video link, paste it into the downloader, then download the
                    cover image as a JPG file.
                  </p>
                  <p className="mb-0 text-white-50">
                    A thumbnail or cover image is useful when you want to save the preview image from
                    a TikTok video. For thumbnails, a direct TikTok video link works best because the
                    tool needs to read the video cover image.
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

          {/* Details */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Download TikTok Video Thumbnail and Cover Image</h2>
              <p className="text-muted">
                Every public TikTok video has a cover image that is shown before the video plays.
                With this TikTok Thumbnail Downloader you can save that cover image to your device in
                the best available quality.
              </p>
              <p className="text-muted mb-0">
                This is helpful for saving a video preview, keeping a reference image, or reusing a
                cover for your own notes. Paste the TikTok video link, then download the thumbnail as
                a JPG image.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">How to Download a TikTok Thumbnail</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Copy the TikTok Video Link</h3>
                    <p className="text-muted mb-0">
                      Open TikTok, find the video, tap the Share button, and choose Copy Link.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Paste the Link in the Downloader</h3>
                    <p className="text-muted mb-0">
                      Paste the TikTok video link into the box above. Make sure the link is public
                      and active.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Download the Cover Image</h3>
                    <p className="text-muted mb-0">
                      Preview the cover image, then click Download Image to save the thumbnail as a
                      JPG file.
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
                  <div className="accordion faq-accordion" id="faqAccordionThumbEn">
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
                            data-bs-target={`#faqThumbEn${index}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`faqThumbEn${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordionThumbEn"
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
