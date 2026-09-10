import type { Faq } from './faqs';

// FAQ sets for the thumbnail and profile picture tools. Kept next to the page copy
// so the rendered accordion and the FAQPage schema can never drift apart.

export const thumbFaqsEn: Faq[] = [
  {
    q: 'Can I download a TikTok thumbnail?',
    a: 'Yes. Paste a public TikTok video link and the tool reads the cover image attached to that video, then lets you save it. You do not need the creator’s permission to view a public cover, but you should still respect their rights when you reuse it.',
  },
  {
    q: 'What is a TikTok thumbnail exactly?',
    a: 'It is the still image TikTok shows before a video starts playing. Creators either pick a frame from the video or upload a custom cover. Either way, that image is what this tool saves.',
  },
  {
    q: 'What image format and size do I get?',
    a: 'The cover is saved as a JPG file in the largest size TikTok makes available for that video. Because it comes straight from TikTok, the resolution depends on what the creator uploaded.',
  },
  {
    q: 'Why does my thumbnail look smaller than the video?',
    a: 'TikTok stores cover images separately from the video file, and covers are often served at a lower resolution than the clip itself. The tool saves the largest version TikTok exposes, so a small cover means TikTok has no bigger one.',
  },
  {
    q: 'Do I need a video link or a profile link?',
    a: 'A direct video link. The tool has to open a specific video to read its cover. If you want the round avatar from an account instead, use the TikTok profile picture downloader.',
  },
  {
    q: 'Can I download the thumbnail of a private video?',
    a: 'No. Private and deleted videos are not reachable by any third-party tool. Only public videos work.',
  },
  {
    q: 'Does this work with TikTok photo posts and slideshows?',
    a: 'Photo posts behave differently from video posts. Paste the link and the tool will show whatever images it can read from that post. If nothing appears, the post is either private or in a format TikTok does not expose.',
  },
  {
    q: 'Do I need to install an app or APK?',
    a: 'No. This runs in your browser on Android, iPhone, iPad, Windows, and Mac. There is no app, no APK, and no extension to install.',
  },
  {
    q: 'Is the TikTok thumbnail downloader free?',
    a: 'Yes, it is free with no sign-up, no account, and no download limit. Paste a public link and save the cover image.',
  },
  {
    q: 'Can I use a downloaded thumbnail in my own video?',
    a: 'That depends on the creator. The cover image belongs to whoever made the video, so reusing it publicly or commercially needs their permission. Saving it for personal reference is a different matter from republishing it.',
  },
];

export const thumbFaqsId: Faq[] = [
  {
    q: 'Bisakah download foto TikTok dari link video?',
    a: 'Bisa. Tempel link video TikTok yang bersifat publik, lalu tool akan membaca gambar cover dari video tersebut dan kamu bisa menyimpannya. Tetap hormati hak kreator saat menggunakannya kembali.',
  },
  {
    q: 'Apa itu cover atau thumbnail TikTok?',
    a: 'Cover adalah gambar diam yang muncul sebelum video TikTok diputar. Kreator bisa memilih satu frame dari videonya atau mengunggah gambar cover sendiri. Gambar itulah yang disimpan tool ini.',
  },
  {
    q: 'Format dan ukuran gambarnya apa?',
    a: 'Gambar disimpan sebagai file JPG dengan ukuran terbesar yang disediakan TikTok untuk video tersebut. Karena diambil langsung dari TikTok, resolusinya bergantung pada yang diunggah kreator.',
  },
  {
    q: 'Kenapa hasil fotonya lebih kecil dari videonya?',
    a: 'TikTok menyimpan gambar cover terpisah dari file videonya, dan cover sering disajikan dengan resolusi lebih rendah. Tool ini mengambil versi terbesar yang tersedia, jadi kalau kecil berarti memang tidak ada versi yang lebih besar.',
  },
  {
    q: 'Perlu link video atau link profil?',
    a: 'Perlu link video. Tool harus membuka video tertentu untuk membaca covernya. Kalau kamu mau foto profil bulat milik sebuah akun, gunakan halaman download foto profil TikTok.',
  },
  {
    q: 'Bisakah download foto dari video yang privat?',
    a: 'Tidak bisa. Video privat maupun yang sudah dihapus tidak dapat diakses tool pihak ketiga mana pun. Hanya video publik yang bisa diproses.',
  },
  {
    q: 'Apakah bisa untuk postingan foto dan slideshow TikTok?',
    a: 'Postingan foto berbeda formatnya dengan postingan video. Tempel linknya dan tool akan menampilkan gambar yang bisa dibaca dari postingan tersebut. Kalau tidak ada yang muncul, postingan itu privat atau formatnya tidak dibuka TikTok.',
  },
  {
    q: 'Apakah perlu install aplikasi atau APK?',
    a: 'Tidak. Tool ini berjalan langsung di browser pada Android, iPhone, iPad, Windows, dan Mac. Tanpa aplikasi, tanpa APK, dan tanpa ekstensi.',
  },
  {
    q: 'Apakah download foto TikTok ini gratis?',
    a: 'Ya, gratis sepenuhnya. Tidak perlu daftar, tidak perlu akun, dan tidak ada batas jumlah download.',
  },
  {
    q: 'Boleh dipakai untuk konten saya sendiri?',
    a: 'Itu tergantung izin kreatornya. Gambar cover adalah milik pembuat videonya, jadi memakainya ulang secara publik atau komersial memerlukan izin. Menyimpannya untuk keperluan pribadi berbeda dengan mempublikasikannya kembali.',
  },
];

export const profileFaqsEn: Faq[] = [
  {
    q: 'Can I download a TikTok profile picture?',
    a: 'Yes. Enter a public TikTok username or profile link and the tool fetches that account’s avatar in the largest size TikTok serves, then lets you save it.',
  },
  {
    q: 'Do I enter a username or a video link?',
    a: 'A username or profile link, such as @username or the tiktok.com/@username address. A video link points at one clip, not at the account, so it will not return an avatar. Use the thumbnail downloader for video covers.',
  },
  {
    q: 'Do I need the @ symbol?',
    a: 'No. Both @username and username work, and pasting the full profile URL works too. The tool strips whatever wrapper it finds and looks up the account.',
  },
  {
    q: 'What size is the downloaded avatar?',
    a: 'TikTok serves avatars at several sizes and the tool requests the largest one available. That is usually a few hundred pixels square, because TikTok itself does not store a huge original.',
  },
  {
    q: 'Why is the profile picture blurry when I enlarge it?',
    a: 'TikTok avatars are displayed small, so they are stored small. No downloader can produce more detail than TikTok holds. If the saved image looks soft when blown up, that is the limit of the source file.',
  },
  {
    q: 'Can I download the profile picture of a private account?',
    a: 'Usually yes, because TikTok shows avatars on private profiles even when the videos are hidden. If the account is banned, deleted, or region-blocked, the lookup will fail.',
  },
  {
    q: 'Will the account owner know I saved their picture?',
    a: 'No. The lookup happens between this tool and TikTok. Nothing is posted to the account, and the owner gets no view or download notification.',
  },
  {
    q: 'Do I need to install an app?',
    a: 'No. This works in any modern browser on Android, iPhone, iPad, Windows, and Mac, with no app, APK, or extension.',
  },
  {
    q: 'Is the profile picture downloader free?',
    a: 'Yes. There is no charge, no account, and no limit on how many avatars you look up.',
  },
  {
    q: 'Can I use someone’s avatar as my own?',
    a: 'You should not. A profile picture usually shows a real person or a brand’s artwork, and reusing it as your own identity can mislead people and infringe the owner’s rights.',
  },
];

export const profileFaqsId: Faq[] = [
  {
    q: 'Bisakah download foto profil TikTok?',
    a: 'Bisa. Masukkan username atau link profil TikTok yang publik, lalu tool akan mengambil foto profil akun tersebut dalam ukuran terbesar yang disediakan TikTok dan kamu bisa menyimpannya.',
  },
  {
    q: 'Harus masukkan username atau link video?',
    a: 'Masukkan username atau link profil, misalnya @username atau alamat tiktok.com/@username. Link video menunjuk ke satu klip, bukan ke akunnya, jadi tidak akan menghasilkan foto profil. Untuk cover video, gunakan halaman download foto TikTok.',
  },
  {
    q: 'Apakah tanda @ wajib ditulis?',
    a: 'Tidak. Baik @username maupun username saja bisa dipakai, dan menempel link profil lengkap juga bisa. Tool akan membaca bagian usernamenya secara otomatis.',
  },
  {
    q: 'Berapa ukuran foto profil yang didapat?',
    a: 'TikTok menyediakan foto profil dalam beberapa ukuran, dan tool ini meminta yang paling besar. Biasanya beberapa ratus piksel persegi, karena TikTok memang tidak menyimpan versi yang sangat besar.',
  },
  {
    q: 'Kenapa foto profilnya pecah saat diperbesar?',
    a: 'Foto profil TikTok ditampilkan kecil sehingga disimpannya juga kecil. Tidak ada downloader yang bisa menghasilkan detail lebih banyak daripada yang disimpan TikTok. Kalau hasilnya buram saat diperbesar, itu batas dari file aslinya.',
  },
  {
    q: 'Bisakah download foto profil akun yang privat?',
    a: 'Umumnya bisa, karena TikTok tetap menampilkan foto profil pada akun privat meski videonya disembunyikan. Kalau akunnya diblokir, dihapus, atau dibatasi wilayah, pencariannya akan gagal.',
  },
  {
    q: 'Apakah pemilik akun tahu kalau fotonya disimpan?',
    a: 'Tidak. Proses pencarian terjadi antara tool ini dan TikTok. Tidak ada apa pun yang dikirim ke akun tersebut, dan pemiliknya tidak mendapat notifikasi.',
  },
  {
    q: 'Apakah perlu install aplikasi?',
    a: 'Tidak. Tool ini berjalan di browser mana pun pada Android, iPhone, iPad, Windows, dan Mac, tanpa aplikasi, APK, atau ekstensi.',
  },
  {
    q: 'Apakah gratis?',
    a: 'Ya, gratis. Tidak ada biaya, tidak perlu akun, dan tidak ada batas berapa kali kamu mencari foto profil.',
  },
  {
    q: 'Boleh memakai foto profil orang lain sebagai milik saya?',
    a: 'Sebaiknya jangan. Foto profil biasanya menampilkan wajah seseorang atau karya milik sebuah brand, dan memakainya sebagai identitas sendiri bisa menyesatkan orang lain sekaligus melanggar hak pemiliknya.',
  },
];
