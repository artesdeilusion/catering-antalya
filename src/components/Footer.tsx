'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-likya-primary text-white">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/catering_services/logo_white.svg" 
                  alt="Likya Catering Logo" 
                  className="h-10 w-auto"
                />
               </div>
              <p className=" leading-relaxed">
                15 yılı aşkın deneyimimizle, her türlü etkinliğinizde profesyonel catering hizmeti sunuyoruz.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+902125550123" className="hover:underline">+90 (212) 555 0123</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@likyacatering.com" className="text-white hover:underline">info@likyacatering.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ba%C4%9Fdat%20Caddesi%20No%3A123%2C%20Kad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Bağdat Caddesi No:123, Kadıköy, İstanbul
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li>
                <a href="/blog/dugun-menu-secimi-antalya-catering-paketleri" className="text-white hover:text-gray-300 transition-colors duration-300">
                  Düğün Catering
                </a>
              </li>
              <li>
                <a href="/blog/kurumsal-etkinliklerde-catering-menu-plani" className="text-white hover:text-gray-300 transition-colors duration-300">
                  Kurumsal Etkinlikler
                </a>
              </li>
              <li>
                <a href="/blog/kurumsal-toplantilar-catering-cozumleri" className="text-white hover:text-gray-300 transition-colors duration-300">
                  Konferans & Seminer
                </a>
              </li>
               
             
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">
                  Hakkımızda
                </a>
              </li>
         
              
              <li>
                <a href="/blog" className="text-white hover:text-gray-300 transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300">
                  İletişim
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/likyacatering/" className="text-white hover:text-gray-300 transition-colors duration-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

</div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex  flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white text-sm">
                © {currentYear} Likya Catering. Tüm hakları saklıdır.
              </p>
              
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}
