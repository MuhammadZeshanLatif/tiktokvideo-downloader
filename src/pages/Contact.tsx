import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import type { Lang } from '../App';

const copy = {
  en: {
    h1: 'Contact Us',
    lead: 'Get in touch with our TikTok downloader support team',
    formTitle: 'Send Us a Message',
    thanksTitle: 'Thank You!',
    thanksBody: "Your message has been received. We'll get back to you as soon as possible.",
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email',
    messageLabel: 'Your Message',
    messagePlaceholder: 'How can we help you?',
    sending: 'Sending...',
    send: 'Send Message',
    infoTitle: 'Get in Touch',
    infoBody:
      "Have questions about our TikTok video downloader? Need help with a download? We're here to help. Fill out the form and we'll respond as quickly as possible.",
    responseTitle: 'Response Time',
    responseBody: 'We typically respond to all inquiries within 24-48 hours during business days.',
    noteLabel: 'Note:',
    noteBody:
      'For copyright inquiries or DMCA takedown requests, please include relevant documentation in your message.',
  },
  id: {
    h1: 'Hubungi Kami',
    lead: 'Hubungi tim dukungan TikTok downloader kami',
    formTitle: 'Kirim Pesan',
    thanksTitle: 'Terima Kasih!',
    thanksBody: 'Pesan kamu sudah kami terima. Kami akan membalas secepat mungkin.',
    nameLabel: 'Nama Kamu',
    namePlaceholder: 'Masukkan nama kamu',
    emailLabel: 'Alamat Email',
    emailPlaceholder: 'Masukkan email kamu',
    messageLabel: 'Pesan Kamu',
    messagePlaceholder: 'Ada yang bisa kami bantu?',
    sending: 'Mengirim...',
    send: 'Kirim Pesan',
    infoTitle: 'Hubungi Kami',
    infoBody:
      'Punya pertanyaan seputar TikTok downloader ini? Butuh bantuan saat download? Isi formulir di samping dan kami akan membalas secepat mungkin.',
    responseTitle: 'Waktu Respons',
    responseBody: 'Kami biasanya membalas semua pertanyaan dalam 24-48 jam pada hari kerja.',
    noteLabel: 'Catatan:',
    noteBody:
      'Untuk pertanyaan hak cipta atau permintaan penghapusan DMCA, mohon sertakan dokumen pendukung di dalam pesan kamu.',
  },
} as const;

export function Contact({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO(before launch): this does not deliver anything yet. Point it at a real
    // endpoint or a mailto handoff — see the note in the SEO handover.
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faEnvelope} className="mb-3" style={{ fontSize: '48px' }} />
            <h1 className="display-5 fw-bold mb-3">{t.h1}</h1>
            <p className="lead text-white-50">{t.lead}</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-4">
                {/* Contact Form */}
                <div className="col-md-7">
                  <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
                    <h2 className="fw-bold mb-4">{t.formTitle}</h2>

                    {submitted ? (
                      <div className="alert alert-success" role="alert">
                        <h3 className="alert-heading h4">{t.thanksTitle}</h3>
                        <p className="mb-0">{t.thanksBody}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label fw-semibold">
                            <FontAwesomeIcon icon={faUser} className="me-2 text-muted" />
                            {t.nameLabel}
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="name"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.namePlaceholder}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label fw-semibold">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-muted" />
                            {t.emailLabel}
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.emailPlaceholder}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="form-label fw-semibold">
                            <FontAwesomeIcon icon={faComment} className="me-2 text-muted" />
                            {t.messageLabel}
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t.messagePlaceholder}
                            required
                          ></textarea>
                        </div>
                        <div className="d-grid">
                          <button type="submit" className="btn btn-tiktok btn-lg" disabled={isLoading}>
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                {t.sending}
                              </>
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                {t.send}
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="col-md-5">
                  <div className="bg-light rounded-4 p-4 h-100">
                    <h2 className="fw-bold mb-4 h3">{t.infoTitle}</h2>
                    <p className="text-muted mb-4">{t.infoBody}</p>

                    <h3 className="fw-bold mb-3 h5">{t.responseTitle}</h3>
                    <p className="text-muted mb-4">{t.responseBody}</p>

                    <hr className="my-4" />

                    <div className="small text-muted">
                      <p className="mb-2">
                        <strong>{t.noteLabel}</strong> {t.noteBody}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
