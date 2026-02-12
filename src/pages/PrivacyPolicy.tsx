import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faShieldAlt} className="mb-3" style={{ fontSize: '48px' }} />
            <h1 className="display-5 fw-bold mb-3">Privacy Policy</h1>
            <p className="lead text-white-50">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
                <p className="text-muted mb-4">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <h2 className="fw-bold mt-4 mb-3">1. Introduction</h2>
                <p>
                  Welcome to TikTok Video Downloader ("we," "our," or "us"). We are committed to protecting your 
                  privacy and ensuring the security of any information you provide while using our service. 
                  This Privacy Policy explains how we collect, use, and protect your information when you use 
                  our TikTok video downloading service.
                </p>

                <h2 className="fw-bold mt-4 mb-3">2. Information We Collect</h2>
                <p>Our service is designed with your privacy in mind. We collect minimal information:</p>
                <ul>
                  <li>
                    <strong>Video URLs:</strong> When you paste a TikTok URL to download a video, we process 
                    this URL to provide our service. We do not store these URLs after the download is complete.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We may collect anonymous usage statistics such as page views, 
                    download counts, and general geographic location (country level) to improve our service.
                  </li>
                  <li>
                    <strong>Contact Information:</strong> If you contact us through our contact form, we collect 
                    your name, email address, and message content to respond to your inquiry.
                  </li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain our TikTok video downloading service</li>
                  <li>Improve and optimize our service</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Monitor and analyze usage patterns</li>
                  <li>Prevent fraudulent or abusive use of our service</li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  These may include:
                </p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for the basic functionality of our website.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> May be used by our advertising partners to show 
                    relevant advertisements.
                  </li>
                </ul>
                <p>
                  You can control cookies through your browser settings. However, disabling cookies may affect 
                  the functionality of our service.
                </p>

                <h2 className="fw-bold mt-4 mb-3">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="fw-bold mt-4 mb-3">6. Third-Party Services</h2>
                <p>
                  Our website may contain links to third-party websites or services. We are not responsible 
                  for the privacy practices of these third parties. We encourage you to review the privacy 
                  policies of any third-party services you use.
                </p>
                <p>
                  We may use third-party services such as:
                </p>
                <ul>
                  <li>Google Analytics for website analytics</li>
                  <li>Google AdSense or similar advertising networks</li>
                  <li>Content delivery networks (CDNs)</li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">7. Children's Privacy</h2>
                <p>
                  Our service is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe 
                  your child has provided us with personal information, please contact us.
                </p>

                <h2 className="fw-bold mt-4 mb-3">8. Your Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to object to processing</li>
                  <li>The right to data portability</li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage 
                  you to review this Privacy Policy periodically.
                </p>

                <h2 className="fw-bold mt-4 mb-3">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us 
                  through our <a href="#/contact">contact page</a>.
                </p>

                <div className="alert alert-info mt-4">
                  <strong>Disclaimer:</strong> Our service is not affiliated with TikTok or ByteDance. 
                  TikTok is a trademark of ByteDance Ltd. We simply provide a tool to download publicly 
                  available content for personal use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
