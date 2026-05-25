function page() {
  return (
    <>
    <h1>About Me</h1>
    {/* Paragraf 1: Cerita Naik Gunung */}
        <p 
        style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '1.25rem', color: '#374151' }}
        >
          Sebagai anak perempuan pertama, saya dibekali dengan satu modal utama: rasa ingin tahu yang teramat tinggi, 
          yang sering kali berwujud menjadi sifat keras kepala. Ibu saya adalah orang pertama yang tahu tabiat ini. 
          Beliau pernah melarang saya mendaki gunung. Katanya, <em>"Jangan, di sana susah."</em> Tapi dasar saya, 
          larangan itu justru terdengar seperti tantangan. Saya tetap berangkat. Dan ya, semesta langsung membuktikan 
          ucapan Ibu. Di tengah hutan yang dingin, lelah, dan tanpa kasur empuk, saya hanya bisa membatin: 
          <strong> "Tahu begini, mending saya tidur di rumah."</strong>
        </p>
        
        {/* Paragraf 2: Cerita Merantau */}
        <p 
        style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '1.25rem', color: '#374151' }}
        >
          Pelajaran kedua datang saat saya memutuskan untuk merantau. Ibu kembali berpesan bahwa hidup di tanah 
          orang itu tidak enak, rawan dijahatin, dan penuh perjuangan. Lagi-lagi, ucapan beliau terbukti benar. 
          Kehidupan rantau ternyata tidak pernah semudah yang ada di kepala. Ada kalanya rasa rindu rumah datang 
          menyerang tanpa permisi, membuat kamar kos terasa begitu asing.
        </p>
        
        {/* Paragraf 3: Cerita Pemerintah & Mimpi */}
        <p 
        style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '1.25rem', color: '#374151' }}
        >
          Namun, di atas semua drama kehidupan pribadi itu, ada satu hal lagi yang konstan membuat saya lelah mental: 
          sistem pemerintahan di Indonesia. Menatap realitas dan carut-marut kebijakan di negara ini sering kali 
          membuat rasa geram saya memuncak. Meski begitu, saya tidak boleh menyerah. Masih banyak mimpi yang belum diraih. 
          Target saya sekarang ingin kerja di luar negeri, ganti kewarganegaraan, dan bahagia—walaupun lagi-lagi 
          Ibu melarang saya. Entah ada apa di sana, tapi saya masih saja ingin mencobanya.
        </p>
        
        {/* Paragraf 4: Kotak Pesan Khusus Cretivox */}
        <div className="mt-6 border-2 border-dashed border-red-400 bg-amber-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-red-600 mb-2">📌 Surat Terbuka Untuk Cretivox:</h3>
          <p 
          style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '1.25rem', color: '#374151' }}
          >
            "Eh Cretivox, hargai saya buat web ini. Parah banget saya udah ngoding dari nol 3 hari gak tidur! 
            Kalian harus terima saya, gak tahu apa pun alasannya. Saya bisa kerja kok. Saya capek banget nganggur 
            udah ada 6 bulanan, cari kerja susah banget sumpah gak bohong. Kalian nyuruh saya joget kicau mania 
            kan kemaren? Udah saya turutin! Sekarang kalian nurutin saya deh, terima saya. Kalau saya gak bisa kerja, 
            getok aja kepalanya. Sumpah saya niat banget ini kerja!"
          </p>
        </div>
    </>
  )
}

export default page