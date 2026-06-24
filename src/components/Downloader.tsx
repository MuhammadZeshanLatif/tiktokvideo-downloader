import { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faLink,
  faPaste,
  faPlay,
  faPause,
  faMusic,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

export type DownloaderText = {
  cardTitle: string;
  cardSubtitle: string;
  placeholder: string;
  pasteButton: string;
  mp4Label: string;
  mp3Label: string;
  downloadButton: string;
  processing: string;
  resultsTitle: string;
  resultsSubtitle: string;
  previewNote: string;
  downloadVideo: string;
  downloadAudio: string;
  downloadingPrefix: string;
  noLinksForFormat: (format: string) => string;
  invalidUrl: string;
  fetchFailed: string;
  noLinksFound: string;
  ready: string;
  defaultTitle: string;
};

type DownloadData = {
  status: string;
  title: string | null;
  thumbnail: string | null;
  downloads: { text: string; url: string }[];
};

function useDownloaderLogic(t: DownloaderText) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState('');
  const [downloadData, setDownloadData] = useState<DownloadData | null>(null);

  const rawApiBase = (
    import.meta.env.VITE_API_BASE_URL ||
    'https://tiktokvideo-downloader-backend.vercel.app'
  ).replace(/\/$/, '');
  const apiBase = rawApiBase.endsWith('/api/tiktok')
    ? rawApiBase
    : `${rawApiBase}/api/tiktok`;
  const apiDownloadFileBase = rawApiBase.endsWith('/api/tiktok')
    ? `${rawApiBase}/download-file`
    : `${rawApiBase}/api/tiktok/download-file`;

  const buildDownloadUrls = (targetUrl: string) => {
    const encodedUrl = encodeURIComponent(targetUrl);
    return {
      primary: `${apiBase}?url=${encodedUrl}`,
      legacy: `${apiBase}/download?url=${encodedUrl}`,
    };
  };

  const downloadDirectly = (fileUrl: string, filename: string) => {
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = filename;
    anchor.rel = 'noopener noreferrer';
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
      }
    } catch {
      // Clipboard access can be blocked; user can paste manually.
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setMessage(t.invalidUrl);
      return;
    }

    if (!url.includes('tiktok.com')) {
      setMessage(t.invalidUrl);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setDownloadData(null);

    try {
      const { primary, legacy } = buildDownloadUrls(url);
      const request = async (requestUrl: string) => {
        const response = await fetch(requestUrl);
        let payload: any = null;
        try {
          payload = await response.json();
        } catch {
          payload = null;
        }
        return { response, payload };
      };

      let result = await request(primary);
      if (!result.response.ok || !result.payload?.success) {
        result = await request(legacy);
      }

      if (!result.response.ok || !result.payload?.success) {
        throw new Error(result.payload?.error || t.fetchFailed);
      }

      setDownloadData(result.payload.data);
      if (!result.payload.data?.downloads?.length) {
        setMessage(t.noLinksFound);
      } else {
        setMessage(t.ready);
      }
    } catch (error) {
      const messageText = error instanceof Error ? error.message : t.fetchFailed;
      setMessage(`Error: ${messageText}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileDownload = async (
    fileUrl: string,
    label: string,
    typeOverride?: 'video' | 'audio'
  ) => {
    try {
      if (!fileUrl) {
        return;
      }

      setIsDownloading(true);
      setDownloadLabel(label);

      const type = typeOverride || (/mp3|audio/i.test(label) ? 'audio' : 'video');
      const baseName = downloadData?.title || 'tiktok-download';
      const requestUrl = `${apiDownloadFileBase}?url=${encodeURIComponent(
        fileUrl
      )}&type=${encodeURIComponent(type)}&filename=${encodeURIComponent(baseName)}`;

      const response = await fetch(requestUrl);
      if (!response.ok) {
        if (response.status === 404 || response.status === 405) {
          downloadDirectly(fileUrl, baseName);
          return;
        }
        let errorMessage = t.fetchFailed;
        try {
          const payload = await response.json();
          errorMessage = payload?.error || errorMessage;
        } catch {
          // ignore JSON parse errors
        }
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = baseName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const messageText = error instanceof Error ? error.message : t.fetchFailed;
      setMessage(`Error: ${messageText}`);
    } finally {
      setIsDownloading(false);
      setDownloadLabel('');
    }
  };

  return {
    url,
    setUrl,
    isLoading,
    message,
    isDownloading,
    downloadLabel,
    downloadData,
    handlePaste,
    handleDownload,
    handleFileDownload,
  };
}

function DownloaderForm({
  t,
  lockFormat,
  format,
  setFormat,
  logic,
}: {
  t: DownloaderText;
  lockFormat?: 'mp4' | 'mp3';
  format: 'mp4' | 'mp3';
  setFormat: (f: 'mp4' | 'mp3') => void;
  logic: ReturnType<typeof useDownloaderLogic>;
}) {
  const { url, setUrl, isLoading, handlePaste, handleDownload } = logic;

  return (
    <div className="bg-white text-dark rounded-4 shadow-lg p-4 p-lg-5 text-start">
      {t.cardTitle && <h3 className="fw-bold mb-2">{t.cardTitle}</h3>}
      {t.cardSubtitle && <p className="text-muted mb-4">{t.cardSubtitle}</p>}
      <form onSubmit={handleDownload}>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text bg-white border-end-0">
            <FontAwesomeIcon icon={faLink} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 border-end-0"
            placeholder={t.placeholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-label={t.placeholder}
          />
          <button type="button" className="btn btn-outline-secondary" onClick={handlePaste}>
            <FontAwesomeIcon icon={faPaste} className="me-1" />
            {t.pasteButton}
          </button>
        </div>

        {!lockFormat && (
          <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-4">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="format"
                id="formatMp4"
                value="mp4"
                checked={format === 'mp4'}
                onChange={(e) => setFormat(e.target.value as 'mp4' | 'mp3')}
              />
              <label className="form-check-label" htmlFor="formatMp4">
                <FontAwesomeIcon icon={faVideo} className="me-1 text-primary" />
                {t.mp4Label}
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
                onChange={(e) => setFormat(e.target.value as 'mp4' | 'mp3')}
              />
              <label className="form-check-label" htmlFor="formatMp3">
                <FontAwesomeIcon icon={faMusic} className="me-1 text-success" />
                {t.mp3Label}
              </label>
            </div>
          </div>
        )}

        <div className="d-grid">
          <button type="submit" className="btn btn-tiktok btn-lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {t.processing}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                {t.downloadButton}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function DownloadResults({
  t,
  format,
  logic,
}: {
  t: DownloaderText;
  format: 'mp4' | 'mp3';
  logic: ReturnType<typeof useDownloaderLogic>;
}) {
  const { message, downloadData, isDownloading, downloadLabel, handleFileDownload } = logic;
  const resultsRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoControl, setShowVideoControl] = useState(true);
  const videoControlTimer = useRef<number | null>(null);

  const isMp3Mode = format === 'mp3';

  const downloadOptions = useMemo(() => {
    if (!downloadData?.downloads?.length) {
      return [];
    }

    const isMp3 = (text: string) => /mp3|audio/i.test(text);
    return isMp3Mode
      ? downloadData.downloads.filter((item) => isMp3(item.text))
      : downloadData.downloads.filter((item) => !isMp3(item.text));
  }, [downloadData, isMp3Mode]);

  const videoLink = useMemo(() => {
    if (!downloadData?.downloads?.length || isMp3Mode) {
      return '';
    }

    const videoCandidates = downloadData.downloads.filter((item) =>
      /mp4|video/i.test(item.text || '')
    );
    const noWatermark = videoCandidates.find((item) => /no\s*watermark/i.test(item.text || ''));

    return (noWatermark || videoCandidates[0])?.url || '';
  }, [downloadData, isMp3Mode]);

  const audioLink = useMemo(() => {
    if (!downloadData?.downloads?.length || !isMp3Mode) {
      return '';
    }

    return (
      downloadData.downloads.find((item) => /mp3|audio/i.test(item.text || ''))?.url || ''
    );
  }, [downloadData, isMp3Mode]);

  useEffect(() => {
    return () => {
      if (videoControlTimer.current) {
        window.clearTimeout(videoControlTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (message || downloadData) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [message, downloadData]);

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

  if (!message && !downloadData) {
    return null;
  }

  return (
    <section
      ref={resultsRef}
      id="download-results"
      className="download-results-section py-5"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7 text-center">
            <h2 className="fw-bold mb-2">{t.resultsTitle}</h2>
            <p className="text-muted mb-4">{t.resultsSubtitle}</p>

            {message && (
              <div
                className={`alert ${
                  message.toLowerCase().includes('error') || message === t.invalidUrl
                    ? 'alert-warning'
                    : 'alert-info'
                }`}
                role="alert"
              >
                {message}
              </div>
            )}

            {downloadData && (
              <div className="download-results-card bg-white rounded-4 shadow-sm p-4 p-md-5">
                <h3 className="h5 fw-semibold mb-1">
                  {downloadData.title || t.defaultTitle}
                </h3>
                <p className="text-muted small mb-4">{t.previewNote}</p>

                {isMp3Mode ? (
                  <>
                    {downloadData.thumbnail && (
                      <div className="mb-4 d-flex justify-content-center">
                        <img
                          src={downloadData.thumbnail}
                          alt={downloadData.title || t.defaultTitle}
                          className="rounded-3 shadow-sm audio-cover-img"
                        />
                      </div>
                    )}

                    {audioLink ? (
                      <div className="audio-player-wrapper mb-4">
                        <FontAwesomeIcon icon={faMusic} className="audio-player-icon text-success" />
                        <audio className="audio-player-large w-100" controls src={audioLink} />
                      </div>
                    ) : (
                      <div className="alert alert-warning" role="alert">
                        {t.noLinksForFormat('MP3')}
                      </div>
                    )}

                    {audioLink && (
                      <button
                        type="button"
                        className="btn btn-tiktok btn-lg px-5"
                        onClick={() => handleFileDownload(audioLink, t.downloadAudio, 'audio')}
                        disabled={isDownloading}
                      >
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        {t.downloadAudio}
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {videoLink ? (
                      <div className="position-relative mb-4 mx-auto video-preview-wrap">
                        <video
                          ref={videoRef}
                          className="rounded-3 shadow"
                          controls
                          src={videoLink}
                          poster={downloadData.thumbnail || undefined}
                          onPlay={handleVideoPlay}
                          onPause={handleVideoPause}
                          onEnded={handleVideoPause}
                          style={{
                            maxHeight: '520px',
                            width: '100%',
                            opacity: isVideoPlaying ? 1 : 0.85,
                            transition: 'opacity 200ms ease',
                          }}
                        />
                        {showVideoControl && (
                          <button
                            type="button"
                            className="btn btn-light rounded-circle shadow position-absolute top-50 start-50 translate-middle"
                            onClick={toggleVideoPlayback}
                            aria-label={isVideoPlaying ? 'Pause' : 'Play'}
                            style={{ width: '56px', height: '56px' }}
                          >
                            <FontAwesomeIcon icon={isVideoPlaying ? faPause : faPlay} />
                          </button>
                        )}
                      </div>
                    ) : downloadData.thumbnail ? (
                      <div className="mb-4 d-flex justify-content-center">
                        <img
                          src={downloadData.thumbnail}
                          alt={downloadData.title || t.defaultTitle}
                          className="rounded-3 shadow-sm"
                          style={{ maxHeight: '420px', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                    ) : null}

                    {downloadOptions.length > 0 && (
                      <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                        {downloadOptions.map((item) => (
                          <button
                            key={`${item.url}-${item.text}`}
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() =>
                              handleFileDownload(item.url, item.text || t.downloadButton)
                            }
                            disabled={isDownloading}
                          >
                            {item.text || t.downloadButton}
                          </button>
                        ))}
                      </div>
                    )}

                    {videoLink && (
                      <button
                        type="button"
                        className="btn btn-tiktok btn-lg px-5"
                        onClick={() => handleFileDownload(videoLink, t.downloadVideo, 'video')}
                        disabled={isDownloading}
                      >
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        {t.downloadVideo}
                      </button>
                    )}

                    {downloadOptions.length === 0 && !videoLink && (
                      <div className="alert alert-warning mb-0" role="alert">
                        {t.noLinksForFormat('MP4')}
                      </div>
                    )}
                  </>
                )}

                {isDownloading && (
                  <div className="d-flex align-items-center justify-content-center gap-2 mt-4 text-muted small">
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {t.downloadingPrefix} {downloadLabel || 'file'}...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Downloader({
  t,
  lockFormat,
  children,
}: {
  t: DownloaderText;
  lockFormat?: 'mp4' | 'mp3';
  children: (parts: {
    Form: React.ReactNode;
    Results: React.ReactNode;
    hasResults: boolean;
  }) => React.ReactNode;
}) {
  const [format, setFormat] = useState<'mp4' | 'mp3'>(lockFormat ?? 'mp4');
  const logic = useDownloaderLogic(t);

  const effectiveFormat = lockFormat ?? format;
  const hasResults = !!(logic.message || logic.downloadData);

  const Form = (
    <DownloaderForm
      t={t}
      lockFormat={lockFormat}
      format={effectiveFormat}
      setFormat={setFormat}
      logic={logic}
    />
  );

  const Results = (
    <DownloadResults t={t} format={effectiveFormat} logic={logic} />
  );

  return <>{children({ Form, Results, hasResults })}</>;
}
