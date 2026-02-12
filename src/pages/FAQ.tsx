import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function FAQ() {
  const faqs = [
    {
      question: "How to download TikTok videos?",
      answer: "Downloading TikTok videos is simple: 1) Open TikTok and find the video you want to download. 2) Tap the Share button and copy the link. 3) Paste the URL into our TikTok downloader. 4) Select MP4 or MP3 format. 5) Click Download and save your video!"
    },
    {
      question: "Can I download TikTok videos in HD?",
      answer: "Yes! Our TikTok video downloader supports HD quality downloads. We save videos in the highest available quality, typically 1080p or 720p depending on the original video quality uploaded to TikTok."
    },
    {
      question: "Are there any limitations to downloads?",
      answer: "No, there are no limitations! Our TikTok downloader offers unlimited free downloads. You can download as many TikTok videos as you want, whenever you want, without any daily or monthly limits."
    },
    {
      question: "Is the TikTok downloader service free?",
      answer: "Yes, our TikTok video downloader is 100% free to use. There are no hidden fees, no premium plans, and no registration required. Just paste the URL and download immediately."
    },
    {
      question: "Can I download TikTok videos without watermark?",
      answer: "Absolutely! Our tool specifically removes the TikTok watermark from videos. You get clean, watermark-free videos that you can use for personal projects, compilations, or sharing."
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes! Our TikTok downloader is fully responsive and works on all devices including Android phones, iPhones, iPads, and desktop computers. No app installation is required."
    },
    {
      question: "Can I convert TikTok videos to MP3?",
      answer: "Yes, you can easily convert TikTok videos to MP3 audio format. Simply paste the video URL, select MP3 as your download format, and get the audio file. Perfect for saving TikTok sounds and music!"
    },
    {
      question: "Is it safe to use this TikTok downloader?",
      answer: "Yes, our service is completely safe. We don't store any personal information, don't require login, and don't install any software on your device. Your privacy is our priority."
    },
    {
      question: "Why isn't my download working?",
      answer: "If your download isn't working, check these: 1) Make sure the URL is correct and complete. 2) The video might be private or deleted. 3) Try refreshing the page and pasting the URL again. 4) Contact us if the issue persists."
    },
    {
      question: "Can I download private TikTok videos?",
      answer: "No, our downloader can only download public TikTok videos. Private videos require the owner's permission and cannot be accessed by third-party tools."
    },
    {
      question: "How long does it take to download a video?",
      answer: "Downloads are typically instant! Most TikTok videos are downloaded within 5-10 seconds, depending on your internet connection speed and the video length."
    },
    {
      question: "Is downloading TikTok videos legal?",
      answer: "Downloading TikTok videos for personal use is generally acceptable. However, you should respect copyright and not redistribute or use content commercially without the creator's permission."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="mb-3" style={{ fontSize: '48px' }} />
            <h1 className="display-5 fw-bold mb-3">Frequently Asked Questions</h1>
            <p className="lead text-white-50">
              Find answers to common questions about our TikTok video downloader
            </p>
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
                  <div key={index} className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#faqItem${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={`faqItem${index}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqFullAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Still Have Questions */}
              <div className="text-center mt-5 p-5 bg-light rounded-4">
                <h3 className="fw-bold mb-3">Still Have Questions?</h3>
                <p className="text-muted mb-4">
                  Can't find the answer you're looking for? Feel free to reach out to our support team.
                </p>
                <Link to="/contact" className="btn btn-tiktok">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
