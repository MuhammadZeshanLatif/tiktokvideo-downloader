import { Link } from 'react-router-dom';
import { ProfileDownloader, type ProfileText } from '../components/ProfileDownloader';
import { profileFaqsEn as faqs } from '../data/toolFaqs';

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

const inputFormats = [
  { label: '@username', example: '@tiktok', works: true },
  { label: 'Username on its own', example: 'tiktok', works: true },
  { label: 'Full profile link', example: 'tiktok.com/@tiktok', works: true },
  { label: 'A video link', example: 'tiktok.com/@tiktok/video/123…', works: false },
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
                    Save any public TikTok profile picture at full size. Enter the username or paste
                    the profile link, then download the avatar in the largest resolution TikTok
                    serves.
                  </p>
                  <p className="mb-0 text-white-50">
                    A profile picture belongs to an account rather than to a single video, which is
                    why this tool asks for a username instead of a video link. TikTok only ever shows
                    avatars at thumbnail size, so downloading is the practical way to see one
                    properly.
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

          {/* Why */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Why You Cannot Just Save a TikTok Avatar</h2>
              <p className="text-muted">
                TikTok never displays a profile picture at full size. In the app it is a small
                circle, and long-pressing it does nothing useful. Taking a screenshot gives you a
                cropped, compressed circle with whatever happened to be behind it, at whatever
                resolution your screen uses.
              </p>
              <p className="text-muted">
                Behind that circle, TikTok does store a larger square version of the image. This tool
                looks up the account, asks TikTok for the biggest version it publishes, and hands you
                that original uncropped file.
              </p>
              <p className="text-muted mb-0">
                That is the entire job. Nothing is upscaled, sharpened, or reconstructed, because
                inventing detail would mean inventing pixels that were never in the picture.
              </p>
            </div>
          </section>

          {/* What to enter */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">What to Enter</h2>
              <p className="text-muted mb-4">
                The tool is forgiving about format. The one thing it cannot use is a link to a single
                video, because that points at a clip rather than at the account.
              </p>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Input</th>
                      <th scope="col">Example</th>
                      <th scope="col">Works here?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inputFormats.map((row) => (
                      <tr key={row.label}>
                        <td className="fw-semibold">{row.label}</td>
                        <td className="text-muted">{row.example}</td>
                        <td>{row.works ? 'Yes' : 'No — use the thumbnail downloader'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-0">
                Got a video link instead? The{' '}
                <Link to="/thumbnail">TikTok thumbnail downloader</Link> saves the cover image from a
                specific video.
              </p>
            </div>
          </section>

          {/* Quality expectations */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">How Big Is a TikTok Profile Picture?</h2>
              <p className="text-muted">
                Smaller than most people expect. TikTok only ever needs the avatar at the size of a
                small circle, so it does not keep a print-resolution original. The largest version it
                publishes is typically a few hundred pixels square.
              </p>
              <p className="text-muted">
                This matters if you plan to enlarge it. A TikTok avatar will not stay sharp blown up
                to poster size, and any tool promising an HD or 4K version of an avatar is either
                upscaling it with software or showing you a different image entirely.
              </p>
              <p className="text-muted mb-0">
                What you get here is the genuine file at its real size, which is the most that
                honestly exists.
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
                    <h3 className="h5 fw-bold">Find the Username</h3>
                    <p className="text-muted mb-0">
                      Open the account on TikTok and copy the @username shown under the avatar, or
                      copy the profile link from the Share menu.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Enter It Above</h3>
                    <p className="text-muted mb-0">
                      Type or paste it into the box and press Get Profile Picture. The @ symbol is
                      optional.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Save the Avatar</h3>
                    <p className="text-muted mb-0">
                      Check the preview to confirm it is the right account, then click Download
                      Profile Picture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Devices */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Save TikTok Avatars on iPhone, Android, and Desktop</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">On iPhone or iPad</h3>
                    <p className="text-muted mb-0">
                      Copy the username in the TikTok app, switch to Safari, and paste it here. Once
                      the avatar appears you can download it, or press and hold the image and choose
                      Add to Photos.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">On Android</h3>
                    <p className="text-muted mb-0">
                      Paste the username in Chrome and download. The image lands in your Downloads
                      folder and usually appears in Gallery or Google Photos shortly after.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">On PC or Mac</h3>
                    <p className="text-muted mb-0">
                      Paste the profile address straight from the browser bar. This is the easiest
                      route if the avatar is going into a document, a slide, or a design file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">If the Profile Is Not Found</h2>
              <ul className="text-muted">
                <li className="mb-2">
                  <strong>Check the spelling.</strong> TikTok usernames often contain dots,
                  underscores, or repeated letters that are easy to mistype. Copy and paste rather
                  than typing by hand.
                </li>
                <li className="mb-2">
                  <strong>Make sure it is a username, not a display name.</strong> The display name
                  is the larger text on a profile and can contain spaces and emoji. The username is
                  the one starting with @.
                </li>
                <li className="mb-2">
                  <strong>The account may have been renamed.</strong> Usernames can be changed, and
                  an old one stops resolving as soon as it is released.
                </li>
                <li className="mb-2">
                  <strong>The account may be banned or deleted.</strong> Nothing can be fetched from
                  an account TikTok has removed.
                </li>
                <li className="mb-0">
                  <strong>Wait a moment and retry.</strong> Occasional lookup failures clear on their
                  own after a short pause.
                </li>
              </ul>
              <p className="text-muted mb-0 mt-3">
                Private accounts usually still work, because TikTok keeps avatars visible even when
                the videos behind them are hidden.
              </p>
            </div>
          </section>

          {/* Responsible use */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Using Someone Else&apos;s Picture Responsibly</h2>
              <p className="text-muted">
                A profile picture is different from other content on TikTok. It is usually a photo of
                a real person, and it functions as their identity on the platform. That deserves more
                care than a video cover does.
              </p>
              <p className="text-muted">
                Viewing an avatar properly, saving a brand logo for a reference deck, or keeping a
                copy of your own picture are all reasonable. Setting someone else&apos;s face as your
                own avatar, building a fake account around it, or editing it into something they
                never posted is not, and in many places that carries real legal consequences beyond
                TikTok&apos;s own rules.
              </p>
              <p className="text-muted mb-0">
                The account owner is never notified when you use this tool, which is exactly why the
                responsibility for using it well sits with you. Our{' '}
                <Link to="/terms-conditions">terms and conditions</Link> cover what is permitted.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Is This Downloader Safe to Use?</h2>
              <p className="text-muted">
                There is no login, so no TikTok credentials are ever involved. Nothing is installed,
                no extension is required, and the usernames you look up are used to complete that one
                request rather than being kept as a profile of you.
              </p>
              <p className="text-muted mb-0">
                The <Link to="/privacy-policy">privacy policy</Link> sets out exactly what is
                collected, including how analytics and advertising cookies behave on this site.
              </p>
            </div>
          </section>

          {/* Other tools */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Other TikTok Tools on This Site</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">
                      <Link to="/">TikTok Video Downloader</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Save the full video as MP4, with or without the watermark.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">
                      <Link to="/mp3">TikTok MP3 Downloader</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Pull the audio out of a TikTok video and save it as an MP3.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h3 className="h5 fw-bold">
                      <Link to="/thumbnail">TikTok Thumbnail Downloader</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Save the cover image of a specific video using its link.
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
                            aria-expanded={index === 0}
                            aria-controls={`faqProfileEn${index}`}
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
          <section className="py-4 bg-white">
            <div className="container">
              <h2 className="h5 fw-bold mb-2">Disclaimer</h2>
              <p className="text-muted small mb-0">
                This tool is not affiliated with TikTok or ByteDance. TikTok is a trademark of
                ByteDance Ltd. Please respect creator rights and use downloaded content responsibly.
              </p>
            </div>
          </section>
        </>
      )}
    </ProfileDownloader>
  );
}
