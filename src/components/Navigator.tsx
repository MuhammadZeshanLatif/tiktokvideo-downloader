import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGlobe, faVideo } from '@fortawesome/free-solid-svg-icons';
import type { Lang, Page } from '../App';

const LANGUAGES: { code: Lang; label: string; home: string; mp3: string }[] = [
  { code: 'en', label: 'EN', home: '/', mp3: '/mp3/' },
  { code: 'id', label: 'ID', home: '/id/', mp3: '/id/mp3/' },
];

export function Navigator({ lang, page = 'home' }: { lang: Lang; page?: Page }) {
  const homeHref = lang === 'id' ? '/id/' : '/';
  const mp3Href = lang === 'id' ? '/id/mp3/' : '/mp3/';
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand navbar-brand-custom d-flex align-items-center gap-2" href={homeHref}>
          <FontAwesomeIcon icon={faMusic} className="text-danger" />
          <span className="tiktok-text">TikTok</span>
          <span className="text-white">Downloader</span>
        </a>

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
                  <a
                    className={`dropdown-item ${l.code === lang ? 'active' : ''}`}
                    href={page === 'mp3' ? l.mp3 : l.home}
                    hrefLang={l.code}
                    lang={l.code}
                  >
                    <span className="text-uppercase">{l.label}</span>
                  </a>
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
          <ul className="navbar-nav me-lg-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <a
                className={`nav-link nav-pill-link d-inline-flex align-items-center gap-2 ${
                  page === 'home' ? 'active' : ''
                }`}
                href={homeHref}
              >
                <FontAwesomeIcon icon={faVideo} className="small" />
                TikTok MP4 Downloader
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-pill-link d-inline-flex align-items-center gap-2 ${
                  page === 'mp3' ? 'active' : ''
                }`}
                href={mp3Href}
              >
                <FontAwesomeIcon icon={faMusic} className="small" />
                TikTok MP3 Downloader
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <span className="nav-link text-white-50 px-1">|</span>
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
