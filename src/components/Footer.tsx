import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { CheckListItem } from './ui/StatusIcons';
import { buildLocalizedPath, SITE_NAME } from '../seo';
import type { Lang, Section } from '../App';

const copy = {
  en: {
    tagline:
      'Free TikTok downloader. Save TikTok videos without watermark in MP4 or MP3 format. Fast, free, and unlimited downloads.',
    quickLinks: 'Quick Links',
    home: 'Home',
    faq: 'FAQ',
    contact: 'Contact Us',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    features: 'Features',
    feature1: 'Download TikTok videos without watermark',
    feature2: 'High-quality MP4 and MP3 downloads',
    feature3: 'Free and unlimited downloads',
    feature4: 'Works on all devices',
    rights: 'All rights reserved.',
    notAffiliated:
      'This service is not affiliated with TikTok. Use responsibly and respect copyright.',
  },
  id: {
    tagline:
      'TikTok downloader gratis. Simpan video TikTok tanpa watermark dalam format MP4 atau MP3. Cepat, gratis, dan tanpa batas.',
    quickLinks: 'Tautan Cepat',
    home: 'Beranda',
    faq: 'FAQ',
    contact: 'Hubungi Kami',
    legal: 'Legal',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
    features: 'Fitur',
    feature1: 'Download video TikTok tanpa watermark',
    feature2: 'Download MP4 dan MP3 kualitas tinggi',
    feature3: 'Gratis dan tanpa batas',
    feature4: 'Bisa dipakai di semua perangkat',
    rights: 'Seluruh hak cipta dilindungi.',
    notAffiliated:
      'Layanan ini tidak berafiliasi dengan TikTok. Gunakan secara bertanggung jawab dan hormati hak cipta.',
  },
} as const;

export function Footer({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang];
  // Every footer link stays inside the visitor's own language cluster; these used to
  // be hardcoded to the English routes.
  const href = (section: Section) => buildLocalizedPath(lang, section);

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
            <p className="text-white-50 mb-3">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
            <h2 className="mb-3 fw-bold h5">{t.quickLinks}</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={href('home')} className="text-white-50 text-decoration-none hover-white">
                  {t.home}
                </Link>
              </li>
              <li className="mb-2">
                <Link to={href('faq')} className="text-white-50 text-decoration-none hover-white">
                  {t.faq}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={href('contact')}
                  className="text-white-50 text-decoration-none hover-white"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
            <h2 className="mb-3 fw-bold h5">{t.legal}</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to={href('privacy-policy')}
                  className="text-white-50 text-decoration-none hover-white"
                >
                  {t.privacy}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={href('terms-conditions')}
                  className="text-white-50 text-decoration-none hover-white"
                >
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-lg-4 col-md-4">
            <h2 className="mb-3 fw-bold h5">{t.features}</h2>
            <ul className="list-unstyled text-white-50">
              <CheckListItem className="mb-2 text-white-50">{t.feature1}</CheckListItem>
              <CheckListItem className="mb-2 text-white-50">{t.feature2}</CheckListItem>
              <CheckListItem className="mb-2 text-white-50">{t.feature3}</CheckListItem>
              <CheckListItem className="mb-2 text-white-50">{t.feature4}</CheckListItem>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              &copy; {new Date().getFullYear()} {SITE_NAME}. {t.rights}
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white-50 mb-0 small">{t.notAffiliated}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
