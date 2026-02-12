import { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, 
  faCheckCircle, 
  faBolt, 
  faMobileAlt, 
  faShieldAlt,
  faLink,
  faCopy,
  faPaste,
  faPlay,
  faPause,
  faMusic,
  faVideo,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Home() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp4');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoControl, setShowVideoControl] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoControlTimer = useRef<number | null>(null);
  const [downloadData, setDownloadData] = useState<{
    status: string;
    title: string | null;
    thumbnail: string | null;
    downloads: { text: string; url: string }[];
  } | null>(null);

  const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

  const downloadOptions = useMemo(() => {
    if (!downloadData?.downloads?.length) {
      return [];
    }

    const isMp3 = (text: string) => /mp3|audio/i.test(text);
    const filtered =
      format === 'mp3'
        ? downloadData.downloads.filter((item) => isMp3(item.text))
        : downloadData.downloads.filter((item) => !isMp3(item.text));

    return filtered.length ? filtered : downloadData.downloads;
  }, [downloadData, format]);

  const videoLink = useMemo(() => {
    if (!downloadData?.downloads?.length) {
      return '';
    }

    const videoCandidates = downloadData.downloads.filter((item) =>
      /mp4|video/i.test(item.text || '')
    );
    const noWatermark = videoCandidates.find((item) => /no\s*watermark/i.test(item.text || ''));

    return (noWatermark || videoCandidates[0] || downloadData.downloads[0])?.url || '';
  }, [downloadData]);

  const audioLink = useMemo(() => {
    if (!downloadData?.downloads?.length) {
      return '';
    }

    return (
      downloadData.downloads.find((item) => /mp3|audio/i.test(item.text || ''))?.url || ''
    );
  }, [downloadData]);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setMessage('Please enter a valid TikTok URL');
      return;
    }
    
    if (!url.includes('tiktok.com')) {
      setMessage('Please enter a valid TikTok URL');
      return;
    }

    setIsLoading(true);
    setMessage('');
    setDownloadData(null);

    try {
      const requestUrl = `${apiBase}/api/tiktok/download?url=${encodeURIComponent(url)}`;
      const response = await fetch(requestUrl);
      const payload = await response.json();

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || 'Failed to fetch TikTok download links.');
      }

      setDownloadData(payload.data);
      if (!payload.data?.downloads?.length) {
        setMessage('No download links were found. Try a different TikTok URL.');
      } else {
        setMessage('Download links are ready.');
      }
    } catch (error) {
      const messageText =
        error instanceof Error ? error.message : 'Unable to fetch TikTok download links.';
      setMessage(`Error: ${messageText}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileDownload = async (
    fileUrl: string,
    label: string,
    typeOverride?: "video" | "audio"
  ) => {
    try {
      if (!fileUrl) {
        return;
      }

      setIsDownloading(true);
      setDownloadLabel(label);

      const type =
        typeOverride ||
        (/mp3|audio/i.test(label) ? "audio" : "video");
      const baseName = downloadData?.title || "tiktok-download";
      const requestUrl = `${apiBase}/api/tiktok/download-file?url=${encodeURIComponent(
        fileUrl
      )}&type=${encodeURIComponent(type)}&filename=${encodeURIComponent(baseName)}`;

      const response = await fetch(requestUrl);
      if (!response.ok) {
        let errorMessage = "Failed to download file.";
        try {
          const payload = await response.json();
          errorMessage = payload?.error || errorMessage;
        } catch {
          // ignore JSON parse errors
        }
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = baseName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      const messageText =
        error instanceof Error ? error.message : "Unable to download the file.";
      setMessage(`Error: ${messageText}`);
    } finally {
      setIsDownloading(false);
      setDownloadLabel('');
    }
  };

  useEffect(() => {
    return () => {
      if (videoControlTimer.current) {
        window.clearTimeout(videoControlTimer.current);
      }
    };
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setShowVideoControl(true);
    if (videoControlTimer.current) {
      window.clearTimeout(videoControlTimer.current);
    }
    videoControlTimer.current = window.setTimeout(() => {
      setShowVideoControl(false);
    }, 1500);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    setShowVideoControl(true);
    if (videoControlTimer.current) {
      window.clearTimeout(videoControlTimer.current);
      videoControlTimer.current = null;
    }
  };

  const scrollToDownload = () => {
    document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="download-section" className="hero-gradient text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Download TikTok Videos <span className="tiktok-text">Without Watermark</span>
              </h1>
              <p className="lead mb-4 text-white-50">
                Free and Unlimited TikTok Video Downloads in MP4 or MP3 format, without any watermark. 
                Save your favorite TikTok videos in high quality with our fast and reliable downloader.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button onClick={scrollToDownload} className="btn btn-tiktok btn-lg px-4 py-2">
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download Now
                </button>
                <Link to="/faq" className="btn btn-outline-light btn-lg px-4 py-2">
                  <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                  Learn More
                </Link>
              </div>
              <div className="mt-4 d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                  <span className="small">No Watermark</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                  <span className="small">HD Quality</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                  <span className="small">Free Forever</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="bg-white text-dark rounded-4 shadow-lg p-4 p-lg-5 text-start">
                <h3 className="fw-bold mb-2">Paste TikTok URL</h3>
                <p className="text-muted mb-4">
                  Get instant download links for video or audio.
                </p>
                <form onSubmit={handleDownload}>
                  <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text bg-white border-end-0">
                      <FontAwesomeIcon icon={faLink} className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Paste TikTok URL here (e.g., https://www.tiktok.com/@user/video/...)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      aria-label="TikTok video URL"
                    />
                  </div>

                  <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="format"
                        id="formatMp4"
                        value="mp4"
                        checked={format === 'mp4'}
                        onChange={(e) => setFormat(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="formatMp4">
                        <FontAwesomeIcon icon={faVideo} className="me-1 text-primary" />
                        MP4 (Video)
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="format"
                        id="formatMp3"
                        value="mp3"
                        checked={format === 'mp3'}
                        onChange={(e) => setFormat(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="formatMp3">
                        <FontAwesomeIcon icon={faMusic} className="me-1 text-success" />
                        MP3 (Audio)
                      </label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-tiktok btn-lg" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faDownload} className="me-2" />
                          Download {format.toUpperCase()}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(message || downloadData) && (
        <section className="download-section py-5 bg-white">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
                  <h2 className="text-center mb-2 fw-bold">Download Results</h2>
                  <p className="text-center text-muted mb-4">
                    Preview your video or audio and use the download links below.
                  </p>

                  {message && (
                    <div className={`alert ${message.toLowerCase().includes('error') || message.includes('valid') ? 'alert-warning' : 'alert-info'} mt-3`} role="alert">
                      {message}
                    </div>
                  )}

                  {downloadData && (
                    <div className="mt-4">
                      <div className="mb-3">
                        <div className="fw-semibold">
                          {downloadData.title || 'TikTok Download'}
                        </div>
                        <div className="text-muted small">
                          Preview and download your video or audio.
                        </div>
                      </div>

                      {videoLink ? (
                        <div className="position-relative mb-3">
                          <video
                            ref={videoRef}
                            className="w-100 rounded-3 shadow-sm"
                            controls
                            src={videoLink}
                            poster={downloadData.thumbnail || undefined}
                            onPlay={handleVideoPlay}
                            onPause={handleVideoPause}
                            onEnded={handleVideoPause}
                            style={{
                              maxHeight: '600px',
                              opacity: isVideoPlaying ? 1 : 0.7,
                              transition: 'opacity 200ms ease'
                            }}
                          />
                          {showVideoControl && (
                            <button
                              type="button"
                              className="btn btn-light rounded-circle shadow position-absolute top-50 start-50 translate-middle"
                              onClick={toggleVideoPlayback}
                              aria-label={isVideoPlaying ? 'Pause preview' : 'Play preview'}
                              style={{ width: '56px', height: '56px' }}
                            >
                              <FontAwesomeIcon icon={isVideoPlaying ? faPause : faPlay} />
                            </button>
                          )}
                        </div>
                      ) : (
                        downloadData.thumbnail && (
                          <div className="mb-3">
                            <img
                              src={downloadData.thumbnail}
                              alt={downloadData.title || 'TikTok thumbnail'}
                              className="img-fluid rounded-3 w-100"
                              style={{ maxHeight: '600px', objectFit: 'cover' }}
                            />
                          </div>
                        )
                      )}

                      {audioLink && (
                        <div className="mb-3">
                          <audio className="w-100" controls src={audioLink} />
                        </div>
                      )}
                      <div className="d-grid gap-2">
                        {downloadOptions.map((item) => (
                          <button
                            key={`${item.url}-${item.text}`}
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() =>
                              handleFileDownload(
                                item.url,
                                item.text || `Download ${format.toUpperCase()}`
                              )
                            }
                            disabled={isDownloading}
                          >
                            {item.text || `Download ${format.toUpperCase()}`}
                          </button>
                        ))}
                      </div>
                      {(videoLink || audioLink) && (
                        <div className="d-flex flex-wrap gap-2 mt-3">
                          {videoLink && (
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => handleFileDownload(videoLink, "Download Video", "video")}
                              disabled={isDownloading}
                            >
                              Download Video
                            </button>
                          )}
                          {audioLink && (
                            <button
                              type="button"
                              className="btn btn-outline-dark"
                              onClick={() => handleFileDownload(audioLink, "Download Audio", "audio")}
                              disabled={isDownloading}
                            >
                              Download Audio
                            </button>
                          )}
                        </div>
                      )}
                      {isDownloading && (
                        <div className="d-flex align-items-center gap-2 mt-3 text-muted small">
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Downloading {downloadLabel || "file"}...
                        </div>
                      )}
                      {downloadOptions.length === 0 && (
                        <div className="alert alert-warning mt-3 mb-0" role="alert">
                          No {format.toUpperCase()} links found. Try switching formats.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Download Highlights Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Download Smarter</h2>
            <p className="text-muted">Cleaner downloads, faster processing, and simple controls.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle bg-danger bg-opacity-10 p-3">
                    <FontAwesomeIcon icon={faVideo} className="text-danger fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">Video Preview</h5>
                </div>
                <p className="text-muted mb-0">
                  Preview the video before you download, so you get the exact clip you want.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3">
                    <FontAwesomeIcon icon={faMusic} className="text-success fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">Audio Only</h5>
                </div>
                <p className="text-muted mb-0">
                  Download MP3 audio instantly for re-use in edits, reels, or podcasts.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle bg-warning bg-opacity-10 p-3">
                    <FontAwesomeIcon icon={faBolt} className="text-warning fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">Fast Links</h5>
                </div>
                <p className="text-muted mb-0">
                  Get download links in seconds with optimized processing for HD files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">How to Download TikTok Videos</h2>
            <p className="text-muted">Follow these simple steps to download TikTok videos without watermark</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="step-number mx-auto mb-3">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <h5 className="fw-bold">Step 1</h5>
                <p className="text-muted">Find the TikTok video you want to download</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="step-number mx-auto mb-3">
                  <FontAwesomeIcon icon={faCopy} />
                </div>
                <h5 className="fw-bold">Step 2</h5>
                <p className="text-muted">Copy the video URL from TikTok</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="step-number mx-auto mb-3">
                  <FontAwesomeIcon icon={faPaste} />
                </div>
                <h5 className="fw-bold">Step 3</h5>
                <p className="text-muted">Paste the URL here to download in MP4 or MP3 format</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="step-number mx-auto mb-3">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <h5 className="fw-bold">Step 4</h5>
                <p className="text-muted">Hit "Download" and get your media file</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Why Choose Our TikTok Downloader?</h2>
            <p className="text-muted">Free TikTok downloader with premium features</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card bg-white rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-danger bg-opacity-10 p-3 me-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-danger fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">No Watermark</h5>
                </div>
                <p className="text-muted mb-0">
                  Download TikTok videos without any watermark. Get clean, professional-looking videos every time.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card bg-white rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3 me-3">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-success fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">Free to Use</h5>
                </div>
                <p className="text-muted mb-0">
                  Unlimited downloads with no hidden fees. Our TikTok downloader is completely free forever.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card bg-white rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                    <FontAwesomeIcon icon={faVideo} className="text-primary fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">High Quality</h5>
                </div>
                <p className="text-muted mb-0">
                  Save videos in HD quality. Download TikTok videos in MP4 or convert to MP3 audio format.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card bg-white rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-info bg-opacity-10 p-3 me-3">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-info fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">All Devices</h5>
                </div>
                <p className="text-muted mb-0">
                  Compatible with Android, iOS, and Desktop. Download TikTok videos on any device.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card bg-white rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-warning bg-opacity-10 p-3 me-3">
                    <FontAwesomeIcon icon={faBolt} className="text-warning fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">Fast Download</h5>
                </div>
                <p className="text-muted mb-0">
                  Quick and efficient download speed. Get your TikTok videos in seconds, not minutes.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card bg-white rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-secondary bg-opacity-10 p-3 me-3">
                    <FontAwesomeIcon icon={faMusic} className="text-secondary fs-4" />
                  </div>
                  <h5 className="mb-0 fw-bold">MP3 Support</h5>
                </div>
                <p className="text-muted mb-0">
                  Extract audio from TikTok videos. Download TikTok sounds as MP3 files easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted">Common questions about our TikTok video downloader</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How to download TikTok videos?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Simply copy the TikTok video URL, paste it into our downloader above, select your preferred format (MP4 or MP3), and click Download. Your video will be ready in seconds!
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Can I download TikTok videos in HD?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Our TikTok downloader supports HD quality downloads. You can save TikTok videos in the highest available quality without any compression or quality loss.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Are there any limitations to downloads?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      No limitations! Our service offers unlimited TikTok video downloads. You can download as many videos as you want without any restrictions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Is the service free?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, our TikTok video downloader is completely free to use. There are no hidden fees, subscriptions, or registration required. Just paste the URL and download!
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link to="/faq" className="btn btn-outline-dark">
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-3">Ready to Download TikTok Videos?</h2>
          <p className="lead text-white-50 mb-4">
            Start downloading TikTok videos without watermark in HD quality. It's free and unlimited!
          </p>
          <button onClick={scrollToDownload} className="btn btn-tiktok btn-lg px-5">
            <FontAwesomeIcon icon={faDownload} className="me-2" />
            Start Downloading Now
          </button>
        </div>
      </section>
    </>
  );
}
