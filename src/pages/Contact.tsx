import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
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
            <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
            <p className="lead text-white-50">
              Get in touch with our TikTok downloader support team
            </p>
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
                    <h2 className="fw-bold mb-4">Send Us a Message</h2>
                    
                    {submitted ? (
                      <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Thank You!</h4>
                        <p>Your message has been received. We'll get back to you as soon as possible.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label fw-semibold">
                            <FontAwesomeIcon icon={faUser} className="me-2 text-muted" />
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label fw-semibold">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-muted" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="form-label fw-semibold">
                            <FontAwesomeIcon icon={faComment} className="me-2 text-muted" />
                            Your Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                          ></textarea>
                        </div>
                        <div className="d-grid">
                          <button type="submit" className="btn btn-tiktok btn-lg" disabled={isLoading}>
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                Send Message
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
                    <h3 className="fw-bold mb-4">Get in Touch</h3>
                    <p className="text-muted mb-4">
                      Have questions about our TikTok video downloader? Need help with a download? 
                      We're here to help! Fill out the form and we'll respond as quickly as possible.
                    </p>
                    
                    <h5 className="fw-bold mb-3">Response Time</h5>
                    <p className="text-muted mb-4">
                      We typically respond to all inquiries within 24-48 hours during business days.
                    </p>

                    <h5 className="fw-bold mb-3">Follow Us</h5>
                    <div className="d-flex gap-3">
                      <a href="#" className="social-icon bg-dark">
                        <FontAwesomeIcon icon={faTiktok} />
                      </a>
                      <a href="#" className="social-icon bg-dark">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="#" className="social-icon bg-dark">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>

                    <hr className="my-4" />

                    <div className="small text-muted">
                      <p className="mb-2">
                        <strong>Note:</strong> For copyright inquiries or DMCA takedown requests, 
                        please include relevant documentation in your message.
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
