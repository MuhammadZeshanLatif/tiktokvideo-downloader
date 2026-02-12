import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

export function TermsConditions() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faFileContract} className="mb-3" style={{ fontSize: '48px' }} />
            <h1 className="display-5 fw-bold mb-3">Terms and Conditions</h1>
            <p className="lead text-white-50">
              Please read these terms carefully before using our service
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

                <h2 className="fw-bold mt-4 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using TikTok Video Downloader ("the Service"), you agree to be bound by 
                  these Terms and Conditions. If you do not agree to these terms, please do not use our Service.
                </p>

                <h2 className="fw-bold mt-4 mb-3">2. Description of Service</h2>
                <p>
                  TikTok Video Downloader provides a free online tool that allows users to download publicly 
                  available TikTok videos in various formats (MP4, MP3) without watermarks. The Service is 
                  provided "as is" and "as available" without warranties of any kind.
                </p>

                <h2 className="fw-bold mt-4 mb-3">3. User Responsibilities</h2>
                <p>By using our Service, you agree to:</p>
                <ul>
                  <li>
                    <strong>Respect Copyright:</strong> Only download content you have the right to download. 
                    Do not download or distribute copyrighted material without proper authorization.
                  </li>
                  <li>
                    <strong>Personal Use Only:</strong> Downloaded content should be for personal, 
                    non-commercial use unless you have explicit permission from the content creator.
                  </li>
                  <li>
                    <strong>No Misuse:</strong> Do not use the Service for any illegal purposes or in 
                    violation of any applicable laws or regulations.
                  </li>
                  <li>
                    <strong>No Automated Access:</strong> Do not use bots, scrapers, or automated tools 
                    to access the Service.
                  </li>
                  <li>
                    <strong>Credit Creators:</strong> When sharing downloaded content, give proper credit 
                    to the original creator whenever possible.
                  </li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">4. Intellectual Property</h2>
                <p>
                  The content downloaded through our Service belongs to the original creators on TikTok. 
                  We do not claim ownership of any third-party content. Our Service simply provides a 
                  technical means to download publicly available content.
                </p>
                <p>
                  The TikTok Video Downloader website, including its design, logos, and code, is our 
                  intellectual property and is protected by copyright laws.
                </p>

                <h2 className="fw-bold mt-4 mb-3">5. Copyright and DMCA</h2>
                <p>
                  We respect intellectual property rights and expect our users to do the same. If you 
                  believe that your copyrighted work has been infringed through our Service, please 
                  contact us with the following information:
                </p>
                <ul>
                  <li>A description of the copyrighted work</li>
                  <li>The URL where the infringing content was accessed</li>
                  <li>Your contact information</li>
                  <li>A statement that you have a good faith belief that the use is not authorized</li>
                  <li>A statement under penalty of perjury that the information is accurate</li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">6. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                  INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                  OR NON-INFRINGEMENT.
                </p>
                <p>We do not guarantee that:</p>
                <ul>
                  <li>The Service will be uninterrupted or error-free</li>
                  <li>Downloads will always be successful</li>
                  <li>The Service will meet your specific requirements</li>
                  <li>Downloaded content quality will meet your expectations</li>
                </ul>

                <h2 className="fw-bold mt-4 mb-3">7. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
                  DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
                </p>

                <h2 className="fw-bold mt-4 mb-3">8. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless TikTok Video Downloader and its operators from 
                  any claims, damages, losses, liabilities, and expenses (including legal fees) arising 
                  from your use of the Service or violation of these Terms.
                </p>

                <h2 className="fw-bold mt-4 mb-3">9. Third-Party Services</h2>
                <p>
                  Our Service is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. 
                  TikTok is a trademark of ByteDance Ltd. We are an independent third-party service.
                </p>

                <h2 className="fw-bold mt-4 mb-3">10. Modifications to Service</h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue the Service at any time without 
                  notice. We may also update these Terms and Conditions at any time. Your continued use of 
                  the Service after changes constitutes acceptance of the new terms.
                </p>

                <h2 className="fw-bold mt-4 mb-3">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with applicable laws. Any 
                  disputes arising from these Terms or the use of the Service shall be resolved through 
                  appropriate legal channels.
                </p>

                <h2 className="fw-bold mt-4 mb-3">12. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
                  shall remain in full force and effect.
                </p>

                <h2 className="fw-bold mt-4 mb-3">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us through 
                  our <a href="#/contact">contact page</a>.
                </p>

                <div className="alert alert-warning mt-4">
                  <strong>Important Notice:</strong> By using our TikTok Video Downloader service, you 
                  acknowledge that you have read, understood, and agree to be bound by these Terms and 
                  Conditions. If you do not agree with any part of these terms, please discontinue use 
                  of our service immediately.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
