import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import type { Lang } from '../App';

// Fixed for the same reason as the privacy page: a live new Date() claimed the terms
// were rewritten today on every visit.
const LAST_UPDATED = '2026-08-01';

type Block = { p: string } | { ul: string[] };
type Section = { h2: string; blocks: Block[] };

const copy: Record<Lang, {
  h1: string;
  lead: string;
  lastUpdated: string;
  contactHeading: string;
  contactLead: string;
  contactLink: string;
  contactHref: string;
  contactTail: string;
  noticeLabel: string;
  notice: string;
  sections: Section[];
}> = {
  en: {
    h1: 'Terms and Conditions',
    lead: 'Please read these terms carefully before using our service',
    lastUpdated: 'Last Updated:',
    contactHeading: '13. Contact Information',
    contactLead: 'If you have any questions about these Terms and Conditions, please contact us through our ',
    contactLink: 'contact page',
    contactHref: '/contact',
    contactTail: '.',
    noticeLabel: 'Important Notice:',
    notice:
      'By using All TikTok Downloader, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please stop using the service.',
    sections: [
      {
        h2: '1. Acceptance of Terms',
        blocks: [
          {
            p: 'By accessing or using All TikTok Downloader ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Service.',
          },
        ],
      },
      {
        h2: '2. Description of Service',
        blocks: [
          {
            p: 'All TikTok Downloader provides a free online tool that lets users download publicly available TikTok content in various formats, including MP4 video, MP3 audio, thumbnails, and profile pictures. The Service is provided "as is" and "as available" without warranties of any kind.',
          },
        ],
      },
      {
        h2: '3. User Responsibilities',
        blocks: [
          { p: 'By using our Service, you agree to:' },
          {
            ul: [
              'Respect copyright: only download content you have the right to download. Do not download or distribute copyrighted material without proper authorization.',
              'Personal use only: downloaded content should be for personal, non-commercial use unless you have explicit permission from the creator.',
              'No misuse: do not use the Service for any illegal purpose or in violation of applicable laws.',
              'No automated access: do not use bots, scrapers, or automated tools against the Service.',
              'Credit creators: when sharing downloaded content, credit the original creator wherever possible.',
            ],
          },
        ],
      },
      {
        h2: '4. Intellectual Property',
        blocks: [
          {
            p: 'Content downloaded through our Service belongs to the original creators on TikTok. We do not claim ownership of any third-party content. Our Service only provides a technical means to download publicly available content.',
          },
          {
            p: 'The All TikTok Downloader website, including its design and code, is our intellectual property and is protected by copyright law.',
          },
        ],
      },
      {
        h2: '5. Copyright and DMCA',
        blocks: [
          {
            p: 'We respect intellectual property rights and expect our users to do the same. If you believe your copyrighted work has been infringed through our Service, please contact us with the following information:',
          },
          {
            ul: [
              'A description of the copyrighted work',
              'The URL where the infringing content was accessed',
              'Your contact information',
              'A statement that you have a good faith belief the use is not authorized',
              'A statement, under penalty of perjury, that the information is accurate',
            ],
          },
        ],
      },
      {
        h2: '6. Disclaimer of Warranties',
        blocks: [
          {
            p: 'The Service is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
          },
          { p: 'We do not guarantee that:' },
          {
            ul: [
              'The Service will be uninterrupted or error-free',
              'Every download will succeed',
              'The Service will meet your specific requirements',
              'Downloaded content quality will meet your expectations',
            ],
          },
        ],
      },
      {
        h2: '7. Limitation of Liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or related to your use of the Service.',
          },
        ],
      },
      {
        h2: '8. Indemnification',
        blocks: [
          {
            p: 'You agree to indemnify and hold harmless All TikTok Downloader and its operators from any claims, damages, losses, liabilities, and expenses, including legal fees, arising from your use of the Service or your violation of these Terms.',
          },
        ],
      },
      {
        h2: '9. Third-Party Services',
        blocks: [
          {
            p: 'Our Service is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. TikTok is a trademark of ByteDance Ltd. We are an independent third-party service.',
          },
        ],
      },
      {
        h2: '10. Modifications to Service',
        blocks: [
          {
            p: 'We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We may also update these Terms at any time. Continued use of the Service after changes means you accept the new terms.',
          },
        ],
      },
      {
        h2: '11. Governing Law',
        blocks: [
          {
            p: 'These Terms shall be governed by and construed in accordance with applicable law. Any dispute arising from these Terms or from use of the Service shall be resolved through appropriate legal channels.',
          },
        ],
      },
      {
        h2: '12. Severability',
        blocks: [
          {
            p: 'If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or removed to the minimum extent necessary, and the remaining provisions shall remain in full force.',
          },
        ],
      },
    ],
  },
  id: {
    h1: 'Syarat dan Ketentuan',
    lead: 'Mohon baca syarat berikut dengan saksama sebelum menggunakan layanan ini',
    lastUpdated: 'Terakhir Diperbarui:',
    contactHeading: '13. Informasi Kontak',
    contactLead: 'Jika kamu punya pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami melalui ',
    contactLink: 'halaman kontak',
    contactHref: '/id/contact',
    contactTail: '.',
    noticeLabel: 'Pemberitahuan Penting:',
    notice:
      'Dengan menggunakan All TikTok Downloader, kamu menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini. Jika kamu tidak menyetujui sebagian isinya, mohon hentikan penggunaan layanan ini.',
    sections: [
      {
        h2: '1. Persetujuan atas Syarat',
        blocks: [
          {
            p: 'Dengan mengakses atau menggunakan All TikTok Downloader ("Layanan"), kamu setuju terikat pada Syarat dan Ketentuan ini. Jika kamu tidak menyetujuinya, mohon jangan gunakan Layanan ini.',
          },
        ],
      },
      {
        h2: '2. Deskripsi Layanan',
        blocks: [
          {
            p: 'All TikTok Downloader adalah tool online gratis yang memungkinkan pengguna menyimpan konten TikTok publik dalam berbagai format, termasuk video MP4, audio MP3, thumbnail, dan foto profil. Layanan ini disediakan "sebagaimana adanya" tanpa jaminan apa pun.',
          },
        ],
      },
      {
        h2: '3. Tanggung Jawab Pengguna',
        blocks: [
          { p: 'Dengan menggunakan Layanan ini, kamu setuju untuk:' },
          {
            ul: [
              'Menghormati hak cipta: hanya download konten yang memang berhak kamu simpan. Jangan mendownload atau menyebarkan materi berhak cipta tanpa izin.',
              'Penggunaan pribadi: konten yang didownload sebaiknya untuk keperluan pribadi dan non-komersial, kecuali kamu punya izin tegas dari kreatornya.',
              'Tidak menyalahgunakan: jangan gunakan Layanan untuk tujuan ilegal atau melanggar hukum yang berlaku.',
              'Tidak mengakses secara otomatis: jangan gunakan bot, scraper, atau tool otomatis terhadap Layanan ini.',
              'Mencantumkan kreator: saat membagikan konten yang didownload, cantumkan kreator aslinya sebisa mungkin.',
            ],
          },
        ],
      },
      {
        h2: '4. Kekayaan Intelektual',
        blocks: [
          {
            p: 'Konten yang didownload melalui Layanan ini adalah milik kreator aslinya di TikTok. Kami tidak mengklaim kepemilikan atas konten pihak ketiga mana pun. Layanan ini hanya menyediakan sarana teknis untuk menyimpan konten yang bersifat publik.',
          },
          {
            p: 'Situs All TikTok Downloader, termasuk desain dan kodenya, adalah kekayaan intelektual kami dan dilindungi undang-undang hak cipta.',
          },
        ],
      },
      {
        h2: '5. Hak Cipta dan DMCA',
        blocks: [
          {
            p: 'Kami menghormati hak kekayaan intelektual dan mengharapkan hal yang sama dari pengguna. Jika kamu meyakini karya berhak cipta milikmu dilanggar melalui Layanan ini, silakan hubungi kami dengan menyertakan:',
          },
          {
            ul: [
              'Deskripsi karya berhak cipta tersebut',
              'URL tempat konten yang diduga melanggar diakses',
              'Informasi kontak kamu',
              'Pernyataan bahwa kamu meyakini dengan itikad baik bahwa penggunaan tersebut tidak diizinkan',
              'Pernyataan, di bawah sumpah, bahwa informasi yang kamu berikan akurat',
            ],
          },
        ],
      },
      {
        h2: '6. Penafian Jaminan',
        blocks: [
          {
            p: 'Layanan disediakan "sebagaimana adanya" tanpa jaminan apa pun, baik tersurat maupun tersirat, termasuk jaminan atas kelayakan jual, kesesuaian untuk tujuan tertentu, atau tidak adanya pelanggaran.',
          },
          { p: 'Kami tidak menjamin bahwa:' },
          {
            ul: [
              'Layanan akan berjalan tanpa gangguan atau tanpa kesalahan',
              'Setiap proses download akan selalu berhasil',
              'Layanan akan memenuhi kebutuhan spesifik kamu',
              'Kualitas konten yang didownload akan sesuai harapan kamu',
            ],
          },
        ],
      },
      {
        h2: '7. Batasan Tanggung Jawab',
        blocks: [
          {
            p: 'Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, termasuk kehilangan keuntungan, data, atau penggunaan, yang timbul dari atau berkaitan dengan penggunaan Layanan ini.',
          },
        ],
      },
      {
        h2: '8. Ganti Rugi',
        blocks: [
          {
            p: 'Kamu setuju untuk membebaskan All TikTok Downloader beserta pengelolanya dari segala klaim, kerugian, kewajiban, dan biaya, termasuk biaya hukum, yang timbul dari penggunaan Layanan oleh kamu atau pelanggaran kamu atas Syarat ini.',
          },
        ],
      },
      {
        h2: '9. Layanan Pihak Ketiga',
        blocks: [
          {
            p: 'Layanan ini tidak berafiliasi, tidak didukung, dan tidak disponsori oleh TikTok maupun ByteDance. TikTok adalah merek dagang milik ByteDance Ltd. Kami adalah layanan pihak ketiga yang independen.',
          },
        ],
      },
      {
        h2: '10. Perubahan Layanan',
        blocks: [
          {
            p: 'Kami berhak mengubah, menghentikan sementara, atau menutup Layanan kapan saja tanpa pemberitahuan. Kami juga dapat memperbarui Syarat ini sewaktu-waktu. Penggunaan Layanan setelah perubahan berarti kamu menerima syarat yang baru.',
          },
        ],
      },
      {
        h2: '11. Hukum yang Berlaku',
        blocks: [
          {
            p: 'Syarat ini diatur dan ditafsirkan berdasarkan hukum yang berlaku. Setiap sengketa yang timbul dari Syarat ini atau dari penggunaan Layanan akan diselesaikan melalui jalur hukum yang sesuai.',
          },
        ],
      },
      {
        h2: '12. Keterpisahan',
        blocks: [
          {
            p: 'Jika ada ketentuan dalam Syarat ini yang dinyatakan tidak berlaku atau tidak dapat dilaksanakan, ketentuan tersebut akan dibatasi atau dihapus seminimal mungkin, dan ketentuan lainnya tetap berlaku sepenuhnya.',
          },
        ],
      },
    ],
  },
};

export function TermsConditions({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-5">
        <div className="container py-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faFileContract} className="mb-3" style={{ fontSize: '48px' }} />
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

                <h2 className="fw-bold mt-4 mb-3 h4">{t.contactHeading}</h2>
                <p>
                  {t.contactLead}
                  <Link to={t.contactHref}>{t.contactLink}</Link>
                  {t.contactTail}
                </p>

                <div className="alert alert-warning mt-4">
                  <strong>{t.noticeLabel}</strong> {t.notice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
