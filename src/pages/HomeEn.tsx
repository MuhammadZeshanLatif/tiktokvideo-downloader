import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
  resultsSubtitle: 'Preview your video and use the download button below.',
  previewNote: 'Preview and download your video.',
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

const features = [
  'Download TikTok videos without watermark',
  'Download TikTok videos with watermark',
  'Save TikTok videos as MP4',
  'Download TikTok MP3 audio if supported',
  'Save TikTok sound, audio, and music if available',
  'Download TikTok photos or slideshows if supported',
  'Download public TikTok stories when available',
  'Save TikTok profile pictures if supported',
  'Download TikTok thumbnails or cover images if available',
  'Works on iPhone, Android, iPad, PC, and Mac',
  'No app install required',
  'No TikTok login required',
];

const faqs = [
  {
    q: 'What is a TikTok Downloader?',
    a: 'A TikTok Downloader is an online tool that helps you save TikTok videos, audio, photos, stories, profile pictures, or thumbnails from public TikTok links.',
  },
  {
    q: 'Can I download TikTok videos without watermark?',
    a: 'Yes, if the option is available, you can download TikTok videos without watermark and save a cleaner MP4 file without the moving TikTok logo.',
  },
  {
    q: 'Can I download TikTok videos with watermark?',
    a: 'Yes, use the with watermark option if you want to keep the TikTok logo and creator username on the video.',
  },
  {
    q: 'Can I convert TikTok videos to MP3?',
    a: 'Yes, if MP3 is supported, you can extract audio from a TikTok video and save it as an MP3 file.',
  },
  {
    q: 'Can I download TikTok sound, audio, or music?',
    a: 'Yes, the MP3 or audio feature can help you save TikTok sounds, music, voiceovers, or original audio from public videos when available.',
  },
  {
    q: 'Can I download TikTok photos or slideshows?',
    a: 'Yes, if the TikTok post contains photos or a slideshow and the feature is supported, you can save the images from the public link.',
  },
  {
    q: 'Can I download TikTok stories?',
    a: 'Public TikTok stories may be downloaded if they are still active and the link is available. Expired or private stories may not work.',
  },
  {
    q: 'Can I download TikTok profile pictures?',
    a: 'Yes, if the profile picture feature is supported, you may be able to save a TikTok profile image using a username or profile link.',
  },
  {
    q: 'Can I download TikTok thumbnails?',
    a: 'Yes, if thumbnail download is supported, you can use a TikTok video link to save the video cover image or preview image.',
  },
  {
    q: 'Does this TikTok downloader work on iPhone?',
    a: 'Yes, it works in Safari or other mobile browsers. Downloaded files may appear in the Files app or Photos depending on your device settings.',
  },
  {
    q: 'Does this TikTok downloader work on PC?',
    a: 'Yes, you can use it on PC or laptop through a browser such as Chrome, Edge, Firefox, or Safari.',
  },
  {
    q: 'Do I need to install an app?',
    a: 'No. This is a browser-based TikTok Downloader, so you do not need to install an app, APK, software, or extension.',
  },
  {
    q: 'Is this TikTok downloader free?',
    a: 'Yes, the tool is free to use if your website offers it that way. Users can paste a public TikTok link and download available formats without payment.',
  },
  {
    q: 'Is login required?',
    a: 'No. You do not need to log in to TikTok or share your TikTok password to use the downloader.',
  },
  {
    q: 'Can I download private TikTok videos?',
    a: 'No. This tool is meant for public TikTok links only. Private videos, deleted videos, and restricted content cannot be processed.',
  },
  {
    q: 'Can I download TikTok videos by username?',
    a: 'For a specific video, a direct video link is more accurate than a username. A username may help with profile-related features, such as profile picture download, if supported.',
  },
  {
    q: 'Where are downloaded TikTok videos saved?',
    a: 'On Android and PC, files usually go to the Downloads folder. On iPhone or iPad, files may appear in the Files app or Photos depending on the browser.',
  },
  {
    q: 'Is it legal to download TikTok videos?',
    a: 'Download content only for personal use, study, backup, or reference. If you want to repost, edit, share, or use someone else’s content commercially, get permission from the creator and respect copyright rules.',
  },
];

export function HomeEn() {
  return (
    <Downloader t={t} lockFormat="mp4">
      {({ Form, Results }) => (
        <>
          {/* Hero Section */}
          <section id="download-section" className="hero-gradient text-white py-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">
                    TikTok Downloader — Download TikTok Videos{' '}
                    <span className="tiktok-text">Without Watermark</span>
                  </h1>
                  <p className="lead mb-3 text-white-50">
                    Save TikTok videos without watermark in a fast and simple way. Copy the TikTok
                    video link, paste it into the downloader, then download the MP4 video you need,
                    such as a no-watermark video, with-watermark video, photo, story, profile
                    picture, or thumbnail if the feature is available.
                  </p>
                  <p className="mb-0 text-white-50">
                    Many people just want to save a funny clip, a tutorial, or a photo slideshow
                    without installing another app or logging in. This TikTok
                    Downloader is built for users on iPhone, Android, iPad, PC, and Mac who want a clean
                    browser-based tool that works with public TikTok links.
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

          {/* Main Features */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Main Features of This TikTok Downloader</h2>
          </div>
          <div className="row g-3">
            {features.map((feature) => (
              <div className="col-md-6 col-lg-4" key={feature}>
                <div className="d-flex align-items-start gap-2 bg-light rounded-3 p-3 h-100">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success mt-1" />
                  <span>{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Without Watermark */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download TikTok Video Without Watermark</h2>
          <p className="text-muted">
            With this TikTok Downloader, you can save TikTok videos without watermark or moving
            TikTok logos. The downloaded video looks cleaner because the TikTok logo and creator
            username do not cover the video.
          </p>
          <p className="text-muted mb-0">
            This option is useful when you want to save videos for personal viewing, offline
            watching, study notes, editing references, or private collections. After the link is
            processed, choose the no watermark option to download the TikTok video as an MP4 file in
            the best available quality.
          </p>
        </div>
      </section>

      {/* With Watermark */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download TikTok Video With Watermark</h2>
          <p className="text-muted">
            Not every user wants to remove the watermark. Sometimes you may want to keep the TikTok
            logo and creator username visible so the original source stays clear.
          </p>
          <p className="text-muted mb-0">
            Use the with watermark option when creator credit matters. This is helpful when you are
            saving a video for reference, keeping the original TikTok branding, or sharing content
            only after getting proper permission from the creator.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Without Watermark vs With Watermark</h2>
          <p className="text-muted mb-4">
            Choose without watermark if you want a clean video. Choose with watermark if you want to
            keep the TikTok logo and creator username visible.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered bg-white align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Option</th>
                  <th>Best For</th>
                  <th>TikTok Logo</th>
                  <th>Creator Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Without Watermark</td>
                  <td>Clean video saving, editing reference, offline watching</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>With Watermark</td>
                  <td>Keeping creator credit and original TikTok branding</td>
                  <td>Yes</td>
                  <td>Usually yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MP4 */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download TikTok MP4 Videos in the Best Available Quality</h2>
          <p className="text-muted">
            If you want to save a TikTok as a regular video file, choose MP4. MP4 works on most
            devices, including iPhone, Android, Windows, Mac, tablets, and smart TVs.
          </p>
          <p className="text-muted mb-0">
            The tool will try to download the best available quality from the original TikTok link.
            The final result depends on the quality of the video that was uploaded to TikTok.
          </p>
        </div>
      </section>

      {/* MP3 */}
      <section className="py-5 bg-light">
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

      {/* Available Formats */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Available Download Formats</h2>
          <p className="text-muted mb-4">
            Use one TikTok Downloader to save videos, audio, photos, stories, profile pictures, and
            thumbnails from public TikTok links when these formats are supported.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Format</th>
                  <th>What It Saves</th>
                  <th>Best Use</th>
                  <th>File Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MP4 Video</td>
                  <td>TikTok video</td>
                  <td>Offline watching or personal reference</td>
                  <td>.mp4</td>
                </tr>
                <tr>
                  <td>MP3 Audio</td>
                  <td>Sound, music, voiceover, or audio</td>
                  <td>Saving audio only</td>
                  <td>.mp3</td>
                </tr>
                <tr>
                  <td>Photo</td>
                  <td>TikTok image or slideshow photo</td>
                  <td>Saving images from photo posts</td>
                  <td>.jpg / .png</td>
                </tr>
                <tr>
                  <td>Story</td>
                  <td>Public active TikTok story</td>
                  <td>Saving temporary content before it expires</td>
                  <td>.mp4</td>
                </tr>
                <tr>
                  <td>Profile Picture</td>
                  <td>TikTok avatar or profile image</td>
                  <td>Viewing a profile photo more clearly</td>
                  <td>.jpg / .png</td>
                </tr>
                <tr>
                  <td>Thumbnail</td>
                  <td>Video cover or preview image</td>
                  <td>Saving the TikTok video cover image</td>
                  <td>.jpg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">TikTok Photo and Slideshow Downloader</h2>
          <p className="text-muted">
            TikTok is not only for videos. Many creators now post photos, slideshows, and
            carousel-style content. A TikTok photo downloader can help you save images from public
            TikTok photo posts when the feature is supported.
          </p>
          <p className="text-muted mb-0">
            This is helpful for saving visual ideas, educational slides, memes, image collections,
            or photo posts you want to view later without opening TikTok again.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download TikTok Story</h2>
          <p className="text-muted">
            TikTok stories can disappear after a short time, so users often want to save them before
            they are gone.
          </p>
          <p className="text-muted mb-0">
            If a TikTok story is public, still active, and the link is available, the downloader may
            help you save it when this feature is supported. Private stories, expired stories, or
            broken links may not work.
          </p>
        </div>
      </section>

      {/* Profile Picture and Thumbnail */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Download TikTok Profile Picture and Thumbnail</h2>
          <p className="text-muted">
            If supported, you can use this tool to save a TikTok profile picture or video thumbnail
            from a public link or profile.
          </p>
          <p className="text-muted">
            A profile picture is useful when you want to view a TikTok avatar more clearly. A
            thumbnail or cover image is useful when you want to save the preview image from a TikTok
            video.
          </p>
          <p className="text-muted mb-0">
            For profile pictures, a username or profile link may be needed if the feature is
            available. For thumbnails, a direct TikTok video link usually works better because the
            tool needs to read the video cover image.
          </p>
        </div>
      </section>

      {/* Username */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">TikTok Video Download With Username</h2>
          <p className="text-muted">
            Some users search for a way to download TikTok videos with a username. For a specific
            video, a direct TikTok video link is usually more accurate than a username.
          </p>
          <p className="text-muted mb-0">
            A username may help with profile-related features, such as profile picture download, if
            supported. For video downloads, copy the video link from TikTok and paste it into the
            downloader.
          </p>
        </div>
      </section>

      {/* How To */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3 text-center">How to Download TikTok Videos Online</h2>
          <p className="text-muted text-center mb-5">
            Using this TikTok Downloader is simple. You do not need to create an account, install
            software, or add a browser extension.
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">1</div>
                <h3 className="h5 fw-bold">Step 1: Copy the TikTok Video Link</h3>
                <p className="text-muted mb-0">
                  Open TikTok and find the video, photo, story, or audio you want to save. Tap the
                  Share button and choose Copy Link.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">2</div>
                <h3 className="h5 fw-bold">Step 2: Paste the URL Into the Downloader</h3>
                <p className="text-muted mb-0">
                  Paste the TikTok link into the downloader box. Make sure the link is public,
                  active, and copied correctly.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">3</div>
                <h3 className="h5 fw-bold">Step 3: Choose MP4, MP3, or Watermark Option</h3>
                <p className="text-muted mb-0">
                  After the link is processed, choose the format you need. You may see options such
                  as video without watermark, video with watermark, MP4, MP3, photo, story, profile
                  picture, or thumbnail depending on what the tool supports.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="step-number mb-3">4</div>
                <h3 className="h5 fw-bold">Step 4: Save the File to Your Device</h3>
                <p className="text-muted mb-0">
                  Click the download button and wait for the file to save. On PC and Android, files
                  usually go to the Downloads folder. On iPhone or iPad, files may appear in the
                  Files app or Photos, depending on your browser settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">TikTok Downloader for iPhone, Android, and PC</h2>
          <p className="text-muted mb-4">
            This TikTok Downloader works directly in your browser, so you can use it on phones,
            tablets, laptops, and desktop computers.
          </p>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Download TikTok Videos on iPhone or iPad</h3>
                <p className="text-muted mb-0">
                  On iPhone or iPad, open TikTok, copy the video link, then paste it into the
                  downloader using Safari or another browser. After downloading, check the Files app
                  or Photos app.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Download TikTok Videos on Android</h3>
                <p className="text-muted mb-0">
                  On Android, copy the TikTok link from the app, paste it into the downloader, choose
                  a format, and save the file. Most downloads appear in the Downloads folder or File
                  Manager.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <h3 className="h5 fw-bold">Download TikTok Videos on PC or Mac</h3>
                <p className="text-muted mb-0">
                  On PC or Mac, open the downloader in Chrome, Edge, Firefox, or Safari. Paste the
                  TikTok URL, choose your download option, and save the file to your computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device support table */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Works on iPhone, Android, and PC</h2>
          <p className="text-muted mb-4">
            This TikTok Downloader works directly in your browser, so you do not need to install an
            app, APK, software, or browser extension.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered bg-white align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Device</th>
                  <th>Browser</th>
                  <th>How to Download</th>
                  <th>Where Files Usually Save</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>iPhone / iPad</td>
                  <td>Safari, Chrome</td>
                  <td>Paste the TikTok link, choose a format, then download</td>
                  <td>Files / Photos</td>
                </tr>
                <tr>
                  <td>Android</td>
                  <td>Chrome, Firefox, Samsung Internet</td>
                  <td>Paste the TikTok link, choose a format, then download</td>
                  <td>Downloads / File Manager</td>
                </tr>
                <tr>
                  <td>PC / Mac</td>
                  <td>Chrome, Edge, Firefox, Safari</td>
                  <td>Paste the TikTok URL, choose an option, then save the file</td>
                  <td>Downloads folder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* No App / APK */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Do You Need a TikTok Downloader App or APK?</h2>
          <p className="text-muted">
            No, you do not need to install a TikTok downloader app, APK file, browser extension, or
            extra software to use this tool.
          </p>
          <p className="text-muted">
            A browser-based downloader is easier for most users because it saves space on your device
            and avoids unnecessary app installs. You only need a public TikTok link and an internet
            connection.
          </p>
          <h3 className="h5 fw-bold mt-4">No App or APK Needed</h3>
          <p className="text-muted">
            Use this TikTok Downloader directly in your browser. No APK, no app install, no browser
            extension, no extra software, and no TikTok login required.
          </p>
          <p className="text-muted mb-0">
            Copy a public TikTok link, paste it into the downloader, choose your format, and save the
            file to your device when the download option is available.
          </p>
        </div>
      </section>

      {/* Free / No Login */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Free TikTok Downloader With No Login</h2>
          <p className="text-muted">
            This TikTok Downloader is made to be simple and easy to use. You do not need to create an
            account, sign in to TikTok, or enter your TikTok password.
          </p>
          <p className="text-muted mb-0">
            Just paste a public TikTok link, choose your format, and download the file if it is
            available. This makes the process faster and safer for users who only want to save public
            TikTok content.
          </p>
        </div>
      </section>

      {/* Safe */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Is This TikTok Downloader Safe?</h2>
          <p className="text-muted">
            This tool does not ask for your TikTok password or require you to log in. You only need
            to paste the public TikTok link you want to process.
          </p>
          <p className="text-muted mb-0">
            For privacy and responsible use, only use the downloader for public content. Private
            videos, deleted videos, expired stories, or broken links may not work.
          </p>
        </div>
      </section>

      {/* Responsible Use */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Responsible Use and Copyright</h2>
          <p className="text-muted">
            Use downloaded files for personal viewing, study, backup, or reference. If you want to
            repost, share, edit, or use someone else’s TikTok content for business, make sure you
            have permission from the creator.
          </p>
          <p className="text-muted mb-0">
            Respect creator rights and give proper credit when needed. This tool is meant to help
            users save public TikTok content responsibly, not to misuse someone else’s work.
          </p>
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
              <div className="accordion faq-accordion" id="faqAccordionEn">
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
                        data-bs-target={`#faqEn${index}`}
                      >
                        {faq.q}
                      </button>
                    </h3>
                    <div
                      id={`faqEn${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqAccordionEn"
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

      {/* Closing */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-3">Download TikTok Videos Faster and Easier</h2>
          <p className="lead text-white-50 mb-0 mx-auto" style={{ maxWidth: '900px' }}>
            This TikTok Downloader is built to make saving public TikTok content simple, clear, and
            less frustrating. From videos without watermark and MP3 audio to photos, stories, profile
            pictures, thumbnails, and device support, the best page is the one that helps users get
            what they need quickly while staying honest about privacy, quality, and creator rights.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-light">
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
