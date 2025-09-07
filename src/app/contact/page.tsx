import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Map from "@/components/Map";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Catering ihtiyaçlarınız için bizimle iletişime geçin. Etkinliğinizi mükemmel hale getirmek için buradayız.",
  keywords: ["likya catering iletişim", "catering teklifi", "etkinlik catering", "yemek servisi iletişim"],
  openGraph: {
    title: "İletişim - Likya Catering",
    description: "Catering ihtiyaçlarınız için bizimle iletişime geçin. Etkinliğinizi mükemmel hale getirmek için buradayız.",
    images: [
      {
        url: '/catering_services/meeting_catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Likya Catering İletişim',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/28235471/pexels-photo-28235471.jpeg")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-title text-white mb-6 leading-tight">
          Teklif Alın
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
          Etkinliğiniz için özel teklif almak için formu doldurun. 24 saat içinde size ulaşacağız.          </p>
        </div>
      </section>

      {/* Contact Information */}
      <ContactForm />

      {/* Map Section */}
      <section className="pb-10 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-title text-likya-primary mb-4">
              Konumumuz
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Antalya Konyaaltı&apos;daki merkezimizde sizleri ağırlamaktan mutluluk duyarız. 
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <Map className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px]" />
            </div>
            
            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-title text-likya-primary mb-4">
                  Adres Bilgileri
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Adres</h4>
                      <p className="text-slate-600">Girne Caddesi No:201</p>
                      <p className="text-slate-600">Konyaaltı, Antalya 07130</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Çalışma Saatleri</h4>
                      <p className="text-slate-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p className="text-slate-600">Cumartesi: 10:00 - 16:00</p>
                      <p className="text-slate-600">Pazar: Kapalı</p>
                    </div>
                  </div>
                  
                 
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-title text-likya-primary mb-4">
                  Ulaşım
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>Konyaaltı merkeze 10 dakika yürüme mesafesi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>Girne Caddesi üzerinde otobüs durakları</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>Otopark imkanı mevcuttur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>Engelli erişimi uygun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
      
    </div>
  );
}
