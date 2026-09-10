import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faqPageEn, faqPageId } from '../data/faqs';
import type { Lang } from '../App';

const copy = {
  en: {
    h1: 'Frequently Asked Questions',
    lead: 'Find answers to common questions about our TikTok video downloader',
    stillTitle: 'Still Have Questions?',
    stillBody: "Can't find the answer you're looking for? Feel free to reach out to our support team.",
    cta: 'Contact Us',
    contactHref: '/contact',
  },
  id: {
    h1: 'Pertanyaan yang Sering Diajukan',
    lead: 'Temukan jawaban untuk pertanyaan umum seputar TikTok downloader kami',
    stillTitle: 'Masih Ada Pertanyaan?',
    stillBody:
      'Tidak menemukan jawaban yang kamu cari? Jangan ragu menghubungi tim dukungan kami.',
    cta: 'Hubungi Kami',
    contactHref: '/id/contact',
  },
} as const;

export function FAQ({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang];
  const faqs = lang === 'id' ? faqPageId : faqPageEn;

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="mb-3" style={{ fontSize: '48px' }} />
            <h1 className="display-5 fw-bold mb-3">{t.h1}</h1>
            <p className="lead text-white-50">{t.lead}</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="faqFullAccordion">
                {faqs.map((faq, index) => (
                  <div key={faq.q} className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqItem${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`faqItem${index}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`faqItem${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqFullAccordion"
                    >
                      <div className="accordion-body">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Still Have Questions */}
              <div className="text-center mt-5 p-5 bg-light rounded-4">
                <h3 className="fw-bold mb-3">{t.stillTitle}</h3>
                <p className="text-muted mb-4">{t.stillBody}</p>
                <Link to={t.contactHref} className="btn btn-tiktok">
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
