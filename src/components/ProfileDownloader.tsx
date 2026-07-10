import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLink, faPaste, faUser } from '@fortawesome/free-solid-svg-icons';

export type ProfileText = {
  placeholder: string;
  pasteButton: string;
  fetchButton: string;
  processing: string;
  resultsTitle: string;
  resultsSubtitle: string;
  downloadButton: string;
  downloadingPrefix: string;
  invalidInput: string;
  notFound: string;
  ready: string;
};

type ProfileData = {
  username: string;
  nickname: string;
  avatar: string;
};

// TikWM exposes a user-info endpoint with open CORS, so the profile avatar can
// be fetched directly from the browser without a backend change.
const TIKWM_USER_INFO = 'https://www.tikwm.com/api/user/info';

// Accepts "@name", "name", or any tiktok URL/link containing "@name".
function extractUsername(input: string) {
  const trimmed = input.trim();
  if (!trimmed) {
    return '';
  }
  const at = trimmed.match(/@([A-Za-z0-9._]+)/);
  if (at) {
    return at[1];
  }
  const bare = trimmed.replace(/^@/, '');
  return /^[A-Za-z0-9._]+$/.test(bare) ? bare : '';
}

function safeFileName(name: string) {
  return (
    (name || 'tiktok-profile')
      .replace(/[\\/:*?"<>|]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 80) || 'tiktok-profile'
  );
}

function useProfileLogic(t: ProfileText) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setInput(text.trim());
      }
    } catch {
      // Clipboard access can be blocked; user can paste manually.
    }
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = extractUsername(input);
    if (!username) {
      setMessage(t.invalidInput);
      setProfile(null);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setProfile(null);

    try {
      const response = await fetch(
        `${TIKWM_USER_INFO}?unique_id=${encodeURIComponent(username)}`
      );
      const payload = await response.json();
      const user = payload?.data?.user;
      const avatar = user?.avatarLarger || user?.avatarMedium || user?.avatarThumb || '';

      if (payload?.code !== 0 || !avatar) {
        throw new Error(t.notFound);
      }

      setProfile({
        username: user?.uniqueId || username,
        nickname: user?.nickname || username,
        avatar,
      });
      setMessage(t.ready);
    } catch (error) {
      const messageText = error instanceof Error ? error.message : t.notFound;
      setMessage(messageText === t.notFound ? messageText : t.notFound);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadAvatar = async () => {
    if (!profile?.avatar) {
      return;
    }

    setIsDownloading(true);
    const baseName = safeFileName(`${profile.username}-tiktok-profile`);

    try {
      const response = await fetch(profile.avatar);
      if (!response.ok) {
        throw new Error('avatar fetch failed');
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = `${baseName}.webp`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(profile.avatar, '_blank', 'noopener,noreferrer');
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    input,
    setInput,
    isLoading,
    message,
    isDownloading,
    profile,
    handlePaste,
    handleFetch,
    downloadAvatar,
  };
}

function ProfileForm({
  t,
  logic,
}: {
  t: ProfileText;
  logic: ReturnType<typeof useProfileLogic>;
}) {
  const { input, setInput, isLoading, handlePaste, handleFetch } = logic;

  return (
    <div className="bg-white text-dark rounded-4 shadow-lg p-4 p-lg-5 text-start">
      <form onSubmit={handleFetch}>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text bg-white border-end-0">
            <FontAwesomeIcon icon={faLink} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 border-end-0"
            placeholder={t.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label={t.placeholder}
          />
          <button type="button" className="btn btn-outline-secondary" onClick={handlePaste}>
            <FontAwesomeIcon icon={faPaste} className="me-1" />
            {t.pasteButton}
          </button>
        </div>

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
                <FontAwesomeIcon icon={faUser} className="me-2" />
                {t.fetchButton}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function ProfileResults({
  t,
  logic,
}: {
  t: ProfileText;
  logic: ReturnType<typeof useProfileLogic>;
}) {
  const { message, profile, isDownloading, downloadAvatar } = logic;
  const resultsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (message || profile) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [message, profile]);

  if (!message && !profile) {
    return null;
  }

  return (
    <section ref={resultsRef} id="download-results" className="download-results-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7 text-center">
            <h2 className="fw-bold mb-2">{t.resultsTitle}</h2>
            <p className="text-muted mb-4">{t.resultsSubtitle}</p>

            {message && !profile && (
              <div
                className={`alert ${
                  message === t.ready ? 'alert-info' : 'alert-warning'
                }`}
                role="alert"
              >
                {message}
              </div>
            )}

            {profile && (
              <div className="download-results-card bg-white rounded-4 shadow-sm p-4 p-md-5">
                <div className="mb-4 d-flex justify-content-center">
                  <img
                    src={profile.avatar}
                    alt={profile.nickname}
                    className="rounded-circle shadow-sm"
                    style={{
                      width: '180px',
                      height: '180px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <h3 className="h5 fw-semibold mb-1">{profile.nickname}</h3>
                <p className="text-muted small mb-4">@{profile.username}</p>

                <button
                  type="button"
                  className="btn btn-tiktok btn-lg px-5"
                  onClick={downloadAvatar}
                  disabled={isDownloading}
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  {t.downloadButton}
                </button>

                {isDownloading && (
                  <div className="d-flex align-items-center justify-content-center gap-2 mt-4 text-muted small">
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {t.downloadingPrefix}...
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

export function ProfileDownloader({
  t,
  children,
}: {
  t: ProfileText;
  children: (parts: { Form: React.ReactNode; Results: React.ReactNode }) => React.ReactNode;
}) {
  const logic = useProfileLogic(t);

  const Form = <ProfileForm t={t} logic={logic} />;
  const Results = <ProfileResults t={t} logic={logic} />;

  return <>{children({ Form, Results })}</>;
}
