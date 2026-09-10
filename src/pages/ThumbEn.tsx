import { Link } from 'react-router-dom';
import { Downloader, type DownloaderText } from '../components/Downloader';
import { thumbFaqsEn as faqs } from '../data/toolFaqs';

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

const useCases = [
  {
    title: 'Saving a reference before a video disappears',
    body: 'Creators delete and re-upload constantly. If a video is part of research, a trend you are tracking, or a tutorial you want to find again, the cover image is the fastest visual bookmark.',
  },
  {
    title: 'Building a moodboard',
    body: 'Editors and designers collect covers to study how a niche presents itself: which faces, colours, and text overlays keep showing up in a feed.',
  },
  {
    title: 'Studying what makes people tap',
    body: 'The cover is the only thing a viewer sees before deciding to watch. Collecting the covers of videos that performed well is a cheap way to learn a niche.',
  },
  {
    title: 'Filing a report or a claim',
    body: 'If you are reporting stolen content or documenting something, a saved cover gives you a dated visual record that does not depend on the post staying online.',
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
                    Save the thumbnail or cover image of any public TikTok video. Copy the video
                    link, paste it into the box, and download the cover as a JPG file in the largest
                    size TikTok makes available.
                  </p>
                  <p className="mb-0 text-white-50">
                    A cover image is the still frame a viewer sees before tapping play. Because it is
                    stored against a specific video rather than an account, a direct TikTok video
                    link is what this tool needs.
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

          {/* What a thumbnail is */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">What Is a TikTok Thumbnail?</h2>
              <p className="text-muted">
                A TikTok thumbnail, also called the cover image, is the single still picture that
                represents a video before it plays. You see it on a creator&apos;s profile grid, in
                search results, and for a fraction of a second as a video loads in your feed.
              </p>
              <p className="text-muted">
                Creators set it in one of two ways. Most pick a frame from inside the video using
                TikTok&apos;s cover selector. Others upload a separate image made in a design app,
                which is why some covers carry text, borders, or a layout that never appears in the
                video itself.
              </p>
              <p className="text-muted mb-0">
                Either way, TikTok stores that image as its own file, separate from the video. This
                downloader reads that file and hands it to you as a JPG. Nothing is re-encoded and no
                frame is extracted from the video, so what you save is exactly what TikTok serves.
              </p>
            </div>
          </section>

          {/* Use cases */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Why People Download TikTok Thumbnails</h2>
              <p className="text-muted mb-4">
                Saving a cover is rarely about the picture on its own. These are the reasons that
                come up most often.
              </p>
              <div className="row g-4">
                {useCases.map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                      <h3 className="h5 fw-bold">{item.title}</h3>
                      <p className="text-muted mb-0">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Which tool to use */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Thumbnail, Photo Post, or Profile Picture?</h2>
              <p className="text-muted mb-4">
                Three different TikTok images get called &quot;the picture&quot;, and each one needs
                a different kind of link. This is the quickest way to tell them apart.
              </p>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Where it appears</th>
                      <th scope="col">What you paste</th>
                      <th scope="col">Tool</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Thumbnail / cover</td>
                      <td>Before a video plays, and on the profile grid</td>
                      <td>A video link</td>
                      <td>This page</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Photo post image</td>
                      <td>Inside a photo or slideshow post</td>
                      <td>A post link</td>
                      <td>
                        <Link to="/">TikTok downloader</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Profile picture</td>
                      <td>The round avatar on an account</td>
                      <td>A username or profile link</td>
                      <td>
                        <Link to="/profile">Profile picture downloader</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted mb-0">
                If you paste a video link here and get an error, check that the video is public and
                that the link opens normally in a browser. Shortened share links usually work, but a
                link copied from inside the TikTok app while logged into a private account will not.
              </p>
            </div>
          </section>

          {/* Quality */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">What Quality Should You Expect?</h2>
              <p className="text-muted">
                This is where most people are surprised, so it is worth being direct: a TikTok cover
                image is usually smaller than the video it belongs to. TikTok generates covers at a
                size meant for feed previews, not for printing or full-screen display.
              </p>
              <p className="text-muted">
                The tool always requests the largest version TikTok exposes for that video. If the
                saved file still looks modest, that is the ceiling of the source, not a limitation
                added here. No downloader can return detail that TikTok never stored.
              </p>
              <p className="text-muted mb-0">
                Covers uploaded by the creator as a custom image tend to be sharper than covers
                auto-selected from a video frame, because the creator supplied a clean file rather
                than a compressed still pulled out of a moving clip.
              </p>
            </div>
          </section>

          {/* How To */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3 text-center">How to Download a TikTok Thumbnail</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <div className="step-number mb-3">1</div>
                    <h3 className="h5 fw-bold">Copy the TikTok Video Link</h3>
                    <p className="text-muted mb-0">
                      Open TikTok, find the video, tap the Share button, and choose Copy Link. On
                      desktop you can copy the address straight from the browser bar.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <div className="step-number mb-3">2</div>
                    <h3 className="h5 fw-bold">Paste the Link in the Downloader</h3>
                    <p className="text-muted mb-0">
                      Paste it into the box above and press Download. The link has to point at a
                      public video that is still online.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <div className="step-number mb-3">3</div>
                    <h3 className="h5 fw-bold">Save the Cover Image</h3>
                    <p className="text-muted mb-0">
                      Check the preview, then click Download Image. The cover is saved to your
                      device as a JPG file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Devices */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Download TikTok Covers on iPhone, Android, and PC</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <h3 className="h5 fw-bold">On iPhone or iPad</h3>
                    <p className="text-muted mb-0">
                      Copy the link in the TikTok app, open this page in Safari, and paste it. When
                      the image appears, either use the download button or press and hold the
                      preview and choose Add to Photos.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <h3 className="h5 fw-bold">On Android</h3>
                    <p className="text-muted mb-0">
                      Copy the link, open this page in Chrome, and paste it. The saved JPG lands in
                      your Downloads folder and normally shows up in Gallery or Google Photos soon
                      after.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                    <h3 className="h5 fw-bold">On PC or Mac</h3>
                    <p className="text-muted mb-0">
                      Copy the video address from the browser bar, paste it here, and download. This
                      is the easiest route when you want to drop the cover straight into a document
                      or an editor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">If the Thumbnail Does Not Load</h2>
              <p className="text-muted mb-4">
                Most failures come down to the link rather than the tool. Work through these in
                order.
              </p>
              <ul className="text-muted">
                <li className="mb-2">
                  <strong>Check the video is public.</strong> Private videos, friends-only videos,
                  and deleted posts cannot be read by any third-party tool.
                </li>
                <li className="mb-2">
                  <strong>Open the link yourself first.</strong> Paste it into a new browser tab. If
                  TikTok does not load the video for you, it will not load for the downloader either.
                </li>
                <li className="mb-2">
                  <strong>Make sure it is a video link, not a profile link.</strong> A
                  tiktok.com/@username address points at an account. You need the longer address that
                  includes /video/ and a number.
                </li>
                <li className="mb-2">
                  <strong>Watch for a truncated paste.</strong> Long links sometimes get cut off when
                  copied between apps. Compare the end of what you pasted against the original.
                </li>
                <li className="mb-0">
                  <strong>Try again in a minute.</strong> TikTok occasionally rate-limits requests.
                  A short wait usually clears it.
                </li>
              </ul>
            </div>
          </section>

          {/* No app */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">No App, No APK, No Sign-Up</h2>
              <p className="text-muted">
                This tool runs entirely in your browser. There is nothing to install, no permission
                to grant, and no account to create. That matters for a task this small: installing an
                app to save one image asks far more of you than the job is worth, and those apps
                routinely request access to storage, contacts, or your TikTok login.
              </p>
              <p className="text-muted mb-0">
                Your TikTok credentials are never involved here. The tool only reads what a public
                video link already exposes, which is the same information anyone could see by opening
                the video.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section className="py-5 bg-white">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Is This Thumbnail Downloader Safe?</h2>
              <p className="text-muted">
                We do not ask for a login, so there are no TikTok credentials to lose. The links you
                paste are used to fulfil that one request and are not kept as a browsing history tied
                to you. Nothing is installed on your device.
              </p>
              <p className="text-muted mb-0">
                Read the <Link to="/privacy-policy">privacy policy</Link> for the specifics of what
                is and is not collected, including how analytics and advertising cookies work on this
                site.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="py-5 bg-light">
            <div className="container py-4">
              <h2 className="fw-bold mb-3">Responsible Use and Copyright</h2>
              <p className="text-muted">
                A cover image is part of someone&apos;s work. Saving one to study, to keep a
                reference, or to file a report is ordinary use. Republishing it as your own cover,
                putting it on merchandise, or using it in an advert is not, and doing so without
                permission can infringe the creator&apos;s rights.
              </p>
              <p className="text-muted mb-0">
                Covers also frequently show identifiable people. Treat those images the way you would
                want a photo of yourself treated. The{' '}
                <Link to="/terms-conditions">terms and conditions</Link> set out what is allowed
                here.
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
                      <Link to="/profile">TikTok Profile Picture Downloader</Link>
                    </h3>
                    <p className="text-muted mb-0">
                      Save an account&apos;s avatar using a username or profile link.
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
                            aria-expanded={index === 0}
                            aria-controls={`faqThumbEn${index}`}
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
    </Downloader>
  );
}
