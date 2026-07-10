import { ProfileDownloader, type ProfileText } from '../components/ProfileDownloader';

const t: ProfileText = {
  placeholder: '@username or profile link',
  pasteButton: 'Paste TikTok Link',
  fetchButton: 'Get Profile Picture',
  processing: 'Processing...',
  resultsTitle: 'Download Results',
  resultsSubtitle: 'Preview the profile picture and download it below.',
  downloadButton: 'Download Profile Picture',
  downloadingPrefix: 'Downloading',
  invalidInput: 'Please enter a valid TikTok username or profile link',
  notFound: 'Profile not found. Check the username or profile link and try again.',
  ready: 'Profile picture is ready.',
};

const faqs = [
  {
    q: 'Can I download a TikTok profile picture?',
    a: 'Yes. Enter a TikTok username or profile link, and you can save the profile picture in the largest available size.',
  },
  {
    q: 'Do I need the video link or the profile?',
    a: 'For a profile picture, use the username or profile link (for example @username). A direct video link is used for video, audio, or thumbnail downloads instead.',
  },
  {
    q: 'What image format is the profile picture saved as?',
    a: 'The profile picture is saved as an image file that you can open on any phone, tablet, or computer.',
  },
  {
    q: 'Is the profile picture downloader free?',
    a: 'Yes, the tool is free to use. Enter a public TikTok username or profile link and download the profile picture without payment or login.',
  },
];

export function ProfileEn() {
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
                    <span className="tiktok-text">Save TikTok Avatar in HD</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Save a TikTok profile picture in full size in a fast and simple way. Enter the
                    TikTok username or profile link, then download the avatar to your device.
                  </p>
                  <p className="mb-0 text-white-50">
                    A profile picture is useful when you want to view a TikTok avatar more clearly.
                    For profile pictures, a username or profile link is used because the tool needs
                    to read the account avatar, not a single video.
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
              <h2 className="fw-bold mb-3">Download TikTok Profile Picture in Full Size</h2>
              <p className="text-muted">
                TikTok shows profile pictures in a small size inside the app. With this TikTok
                Profile Picture Downloader you can view and save the avatar in the largest available
                size directly from your browser.
              </p>
              <p className="text-muted mb-0">
                Just enter a public TikTok username or profile link, preview the profile picture,
                then download it to your device.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">How to Download a TikTok Profile Picture</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Copy the Username or Profile Link</h3>
                    <p className="text-muted mb-0">
                      Open TikTok and copy the username (for example @username) or the profile link.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Paste It in the Downloader</h3>
                    <p className="text-muted mb-0">
                      Paste the username or profile link into the box above and click Get Profile
                      Picture.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Download the Profile Picture</h3>
                    <p className="text-muted mb-0">
                      Preview the avatar, then click Download Profile Picture to save it to your
                      device.
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
                  <div className="accordion faq-accordion" id="faqAccordionProfileEn">
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
                            data-bs-target={`#faqProfileEn${index}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`faqProfileEn${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordionProfileEn"
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
