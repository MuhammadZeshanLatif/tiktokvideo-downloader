import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGlobe, faVideo } from '@fortawesome/free-solid-svg-icons';
import type { Lang, Page, Section } from '../App';
import { buildLocalizedPath } from '../seo';

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
];

export function Navigator({ lang, section = 'home' }: { lang: Lang; section?: Section }) {
  const page: Page = section === 'mp3' ? 'mp3' : 'home';
  const homeHref = buildLocalizedPath(lang, 'home');
  const mp3Href = buildLocalizedPath(lang, 'mp3');
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const pageLinks = (
    <>
      <Link
        className={`nav-link nav-pill-link d-inline-flex align-items-center gap-2 ${
          page === 'home' ? 'active' : ''
        }`}
        to={homeHref}
      >
        <FontAwesomeIcon icon={faVideo} className="small" />
        TikTok MP4 Downloader
      </Link>
      <Link
        className={`nav-link nav-pill-link d-inline-flex align-items-center gap-2 ${
          page === 'mp3' ? 'active' : ''
        }`}
        to={mp3Href}
      >
        <FontAwesomeIcon icon={faMusic} className="small" />
        TikTok MP3 Downloader
      </Link>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand navbar-brand-custom d-flex align-items-center gap-2" to={homeHref}>
          <FontAwesomeIcon icon={faMusic} className="text-danger" />
          <span className="tiktok-text">TikTok</span>
          <span className="text-white">Downloader</span>
        </Link>

        <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
          <div className="navbar-page-links d-flex align-items-center justify-content-center gap-2">
            {pageLinks}
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 ms-auto order-lg-last">
          <div className="dropdown">
            <button
              className="btn btn-sm btn-outline-light dropdown-toggle d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Change language"
            >
              <FontAwesomeIcon icon={faGlobe} />
              <span className="text-uppercase">{current.label}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <Link
                    className={`dropdown-item ${l.code === lang ? 'active' : ''}`}
                    to={buildLocalizedPath(l.code, section)}
                  >
                    <span className="text-uppercase">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-lg-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0">
            <li className="nav-item d-lg-none">
              <div className="d-flex flex-column gap-2 mb-2">{pageLinks}</div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terms-conditions">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
