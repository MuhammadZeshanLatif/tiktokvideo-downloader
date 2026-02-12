import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand navbar-brand-custom d-flex align-items-center gap-2" to="/">
          <FontAwesomeIcon icon={faMusic} className="text-danger" />
          <span className="tiktok-text">TikTok</span>
          <span className="text-white">Downloader</span>
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/faq')}`} to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact')}`} to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/privacy-policy')}`} to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/terms-conditions')}`} to="/terms-conditions">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
