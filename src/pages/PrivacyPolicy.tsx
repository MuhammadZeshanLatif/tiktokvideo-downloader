import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import type { Lang } from '../App';

// Fixed date: rendering new Date() here made the page claim it was updated today on
// every single visit, and desynced the prerendered HTML from the hydrated client.
const LAST_UPDATED = '2026-08-01';

type Block = { p: string } | { ul: string[] };
type Section = { h2: string; blocks: Block[] };

const copy: Record<Lang, {
  h1: string;
  lead: string;
  lastUpdated: string;
  contactLead: string;
  contactLink: string;
  contactHref: string;
  contactTail: string;
  disclaimerLabel: string;
  disclaimer: string;
  sections: Section[];
}> = {
  en: {
    h1: 'Privacy Policy',
    lead: 'Your privacy is important to us. Learn how we handle your data.',
    lastUpdated: 'Last Updated:',
    contactLead: 'If you have any questions about this Privacy Policy or our data practices, please contact us through our ',
    contactLink: 'contact page',
    contactHref: '/contact',
    contactTail: '.',
    disclaimerLabel: 'Disclaimer:',
    disclaimer:
      'Our service is not affiliated with TikTok or ByteDance. TikTok is a trademark of ByteDance Ltd. We simply provide a tool to download publicly available content for personal use.',
    sections: [
      {
        h2: '1. Introduction',
        blocks: [
          {
            p: 'Welcome to All TikTok Downloader ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of any information you provide while using our service. This Privacy Policy explains how we collect, use, and protect your information when you use our TikTok downloading service.',
          },
        ],
      },
      {
        h2: '2. Information We Collect',
        blocks: [
          { p: 'Our service is designed with your privacy in mind. We collect minimal information:' },
          {
            ul: [
              'Video URLs: when you paste a TikTok URL to download a video, we process that URL to provide our service. We do not store these URLs after the download is complete.',
              'Usage data: we may collect anonymous usage statistics such as page views, download counts, and general geographic location at country level to improve our service.',
              'Contact information: if you contact us through our contact form, we collect your name, email address, and message content so we can respond to your inquiry.',
            ],
          },
        ],
      },
      {
        h2: '3. How We Use Your Information',
        blocks: [
          { p: 'We use the information we collect to:' },
          {
            ul: [
              'Provide and maintain our TikTok downloading service',
              'Improve and optimize our service',
              'Respond to your inquiries and support requests',
              'Monitor and analyze usage patterns',
              'Prevent fraudulent or abusive use of our service',
            ],
          },
        ],
      },
      {
        h2: '4. Cookies and Tracking Technologies',
        blocks: [
          { p: 'We use cookies and similar tracking technologies to improve your experience on our website. These may include:' },
          {
            ul: [
              'Essential cookies: required for the basic functionality of our website.',
              'Analytics cookies: help us understand how visitors interact with our website.',
              'Advertising cookies: may be used by our advertising partners to show relevant advertisements.',
            ],
          },
          { p: 'You can control cookies through your browser settings. Disabling cookies may affect how parts of our service work.' },
        ],
      },
      {
        h2: '5. Data Security',
        blocks: [
          {
            p: 'We use appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.',
          },
        ],
      },
      {
        h2: '6. Third-Party Services',
        blocks: [
          {
            p: 'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties, and we encourage you to review their privacy policies.',
          },
          { p: 'We may use third-party services such as:' },
          {
            ul: [
              'Analytics providers for website statistics',
              'Advertising networks such as Google AdSense',
              'Content delivery networks (CDNs)',
            ],
          },
        ],
      },
      {
        h2: "7. Children's Privacy",
        blocks: [
          {
            p: 'Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.',
          },
        ],
      },
      {
        h2: '8. Your Rights',
        blocks: [
          { p: 'Depending on where you live, you may have the following rights:' },
          {
            ul: [
              'The right to access your personal information',
              'The right to correct inaccurate information',
              'The right to delete your personal information',
              'The right to object to processing',
              'The right to data portability',
            ],
          },
        ],
      },
      {
        h2: '9. Changes to This Privacy Policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy from time to time. We will post the new version on this page and update the "Last Updated" date above. We encourage you to review this page periodically.',
          },
        ],
      },
    ],
  },
  id: {
    h1: 'Kebijakan Privasi',
    lead: 'Privasi kamu penting bagi kami. Pelajari cara kami menangani data kamu.',
    lastUpdated: 'Terakhir Diperbarui:',
    contactLead: 'Jika kamu punya pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani data, silakan hubungi kami melalui ',
    contactLink: 'halaman kontak',
    contactHref: '/id/contact',
    contactTail: '.',
    disclaimerLabel: 'Penafian:',
    disclaimer:
      'Layanan ini tidak berafiliasi dengan TikTok maupun ByteDance. TikTok adalah merek dagang milik ByteDance Ltd. Kami hanya menyediakan tool untuk menyimpan konten publik untuk keperluan pribadi.',
    sections: [
      {
        h2: '1. Pendahuluan',
        blocks: [
          {
            p: 'Selamat datang di All TikTok Downloader ("kami"). Kami berkomitmen melindungi privasi kamu dan menjaga keamanan informasi apa pun yang kamu berikan saat menggunakan layanan ini. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi kamu.',
          },
        ],
      },
      {
        h2: '2. Informasi yang Kami Kumpulkan',
        blocks: [
          { p: 'Layanan ini dirancang dengan mengutamakan privasi. Kami hanya mengumpulkan informasi seminimal mungkin:' },
          {
            ul: [
              'Link video: saat kamu menempel link TikTok untuk mendownload video, kami memproses link tersebut untuk menjalankan layanan. Kami tidak menyimpan link itu setelah proses download selesai.',
              'Data penggunaan: kami dapat mengumpulkan statistik anonim seperti jumlah kunjungan halaman, jumlah download, dan lokasi umum setingkat negara untuk meningkatkan layanan.',
              'Informasi kontak: jika kamu menghubungi kami lewat formulir kontak, kami mengumpulkan nama, alamat email, dan isi pesan agar dapat membalas pertanyaan kamu.',
            ],
          },
        ],
      },
      {
        h2: '3. Cara Kami Menggunakan Informasi Kamu',
        blocks: [
          { p: 'Informasi yang kami kumpulkan digunakan untuk:' },
          {
            ul: [
              'Menyediakan dan memelihara layanan download TikTok ini',
              'Meningkatkan dan mengoptimalkan layanan',
              'Membalas pertanyaan dan permintaan dukungan kamu',
              'Memantau dan menganalisis pola penggunaan',
              'Mencegah penyalahgunaan atau penggunaan layanan secara curang',
            ],
          },
        ],
      },
      {
        h2: '4. Cookie dan Teknologi Pelacakan',
        blocks: [
          { p: 'Kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman kamu di situs ini, antara lain:' },
          {
            ul: [
              'Cookie esensial: dibutuhkan agar fungsi dasar situs dapat berjalan.',
              'Cookie analitik: membantu kami memahami cara pengunjung menggunakan situs.',
              'Cookie iklan: dapat digunakan mitra iklan kami untuk menampilkan iklan yang relevan.',
            ],
          },
          { p: 'Kamu bisa mengatur cookie lewat pengaturan browser. Menonaktifkan cookie dapat memengaruhi sebagian fungsi layanan.' },
        ],
      },
      {
        h2: '5. Keamanan Data',
        blocks: [
          {
            p: 'Kami menerapkan langkah teknis dan organisasi yang memadai untuk melindungi informasi kamu dari akses, perubahan, pengungkapan, atau penghapusan tanpa izin. Namun, tidak ada metode pengiriman data melalui Internet yang sepenuhnya aman, sehingga kami tidak dapat menjamin keamanan mutlak.',
          },
        ],
      },
      {
        h2: '6. Layanan Pihak Ketiga',
        blocks: [
          {
            p: 'Situs kami dapat memuat tautan ke situs atau layanan pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi pihak ketiga tersebut, dan kami menyarankan kamu membaca kebijakan privasi mereka.',
          },
          { p: 'Kami dapat menggunakan layanan pihak ketiga seperti:' },
          {
            ul: [
              'Penyedia analitik untuk statistik situs',
              'Jaringan iklan seperti Google AdSense',
              'Jaringan pengiriman konten (CDN)',
            ],
          },
        ],
      },
      {
        h2: '7. Privasi Anak',
        blocks: [
          {
            p: 'Layanan ini tidak ditujukan untuk anak di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan data pribadi anak di bawah 13 tahun. Jika kamu orang tua atau wali dan meyakini anak kamu telah memberikan data pribadi kepada kami, silakan hubungi kami.',
          },
        ],
      },
      {
        h2: '8. Hak Kamu',
        blocks: [
          { p: 'Tergantung tempat tinggal kamu, kamu mungkin memiliki hak berikut:' },
          {
            ul: [
              'Hak untuk mengakses data pribadi kamu',
              'Hak untuk memperbaiki data yang tidak akurat',
              'Hak untuk menghapus data pribadi kamu',
              'Hak untuk menolak pemrosesan data',
              'Hak atas portabilitas data',
            ],
          },
        ],
      },
      {
        h2: '9. Perubahan Kebijakan Privasi Ini',
        blocks: [
          {
            p: 'Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Versi terbaru akan kami tampilkan di halaman ini beserta tanggal "Terakhir Diperbarui" di atas. Kami menyarankan kamu meninjau halaman ini secara berkala.',
          },
        ],
      },
    ],
  },
};

export function PrivacyPolicy({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang];
  const contactHeading = lang === 'id' ? '10. Hubungi Kami' : '10. Contact Us';

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faShieldAlt} className="mb-3" style={{ fontSize: '48px' }} />
            <h1 className="display-5 fw-bold mb-3">{t.h1}</h1>
            <p className="lead text-white-50">{t.lead}</p>
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
                  <strong>{t.lastUpdated}</strong>{' '}
                  <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>
                </p>

                {t.sections.map((section) => (
                  <div key={section.h2}>
                    <h2 className="fw-bold mt-4 mb-3 h4">{section.h2}</h2>
                    {section.blocks.map((block, i) =>
                      'p' in block ? (
                        <p key={i}>{block.p}</p>
                      ) : (
                        <ul key={i}>
                          {block.ul.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                ))}

                <h2 className="fw-bold mt-4 mb-3 h4">{contactHeading}</h2>
                <p>
                  {t.contactLead}
                  <Link to={t.contactHref}>{t.contactLink}</Link>
                  {t.contactTail}
                </p>

                <div className="alert alert-info mt-4">
                  <strong>{t.disclaimerLabel}</strong> {t.disclaimer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
