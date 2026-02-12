import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
  return (
    <footer className="footer-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faMusic} className="text-danger fs-4" />
              <span className="tiktok-text fs-4 fw-bold">TikTok</span>
              <span className="fs-4 fw-bold">Downloader</span>
            </div>
            <p className="text-white-50 mb-3">
              Free TikTok video downloader. Download TikTok videos without watermark in MP4 or MP3 format. Fast, free, and unlimited downloads.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
            <h5 className="mb-3 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-white-50 text-decoration-none hover-white">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none hover-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
            <h5 className="mb-3 fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/privacy-policy" className="text-white-50 text-decoration-none hover-white">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms-conditions" className="text-white-50 text-decoration-none hover-white">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-lg-4 col-md-4">
            <h5 className="mb-3 fw-bold">Features</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">✓ Download TikTok Videos Without Watermark</li>
              <li className="mb-2">✓ High-Quality MP4 & MP3 Downloads</li>
              <li className="mb-2">✓ Free & Unlimited Downloads</li>
              <li className="mb-2">✓ Works on All Devices</li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              © {new Date().getFullYear()} TikTok Video Downloader. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white-50 mb-0 small">
              This service is not affiliated with TikTok. Use responsibly and respect copyright.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
