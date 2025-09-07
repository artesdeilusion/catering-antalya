import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Likya Catering'in hikayesi, misyonu ve catering hizmetlerindeki mükemmellik taahhüdü hakkında bilgi edinin.",
  keywords: ["likya catering hakkında", "catering şirketi", "profesyonel catering", "yemek servisi deneyimi"],
  openGraph: {
    title: "Hakkımızda - Likya Catering",
    description: "Likya Catering'in hikayesi ve catering hizmetlerindeki mükemmellik taahhüdü.",
    images: [
      {
        url: '/catering_services/corporate_catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Likya Catering Hakkında',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-30 flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img 
              src="/catering_services/logo_white.svg" 
              alt="Likya Catering Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            15 yılı aşkın deneyimimizle, her türlü etkinliğinizde profesyonel catering hizmeti sunuyoruz.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-title text-likya-primary mb-6">Hikayemiz</h2>
              <p className="text-lg text-likya-text-dark mb-6 leading-relaxed font-body">
                2008 yılında kurulan Likya Catering, kaliteli ve lezzetli yemeklerle müşterilerimizin özel anlarını unutulmaz kılmak için yola çıktı. 
                Antalya&apos;nın Likya bölgesinden ilham alan ismimiz, bu bölgenin zengin mutfak kültürünü modern catering hizmetleriyle buluşturuyor.
              </p>
              <p className="text-lg text-likya-text-dark mb-6 leading-relaxed font-body">
                Bugün, düğünlerden kurumsal etkinliklere, özel günlerden toplantılara kadar geniş bir yelpazede hizmet veriyoruz. 
                Her projede mükemmellik arayışımız ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde öncü konumdayız.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
                alt="Likya Catering Team" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center h-full">
              <div className="bg-likya-primary text-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
                <h3 className="text-2xl font-title mb-4">Misyonumuz</h3>
                <p className="text-lg leading-relaxed font-body">
                  Her etkinlikte müşterilerimizin hayallerini gerçeğe dönüştürmek, 
                  kaliteli ve lezzetli yemeklerle unutulmaz anlar yaşatmak.
                </p>
              </div>
            </div>
            <div className="text-center h-full">
              <div className="bg-likya-secondary text-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
                <h3 className="text-2xl font-title mb-4">Vizyonumuz</h3>
                <p className="text-lg leading-relaxed font-body">
                  Türkiye&apos;nin en güvenilir ve kaliteli catering firması olmak, 
                  sektörde standartları belirleyen öncü marka haline gelmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-title text-likya-primary mb-4">Değerlerimiz</h2>
            <p className="text-lg text-likya-text-dark max-w-3xl mx-auto font-body">
              İşimizi yaparken rehber aldığımız temel değerler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-likya-primary/10 p-6 rounded-lg mb-4">
                <svg className="w-12 h-12 text-likya-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-title text-likya-primary mb-2">Kalite</h3>
                <p className="text-likya-text-dark font-body">
                  En taze malzemeler ve profesyonel mutfak ekibimizle her zaman en yüksek kaliteyi sunuyoruz.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-likya-primary/10 p-6 rounded-lg mb-4">
                <svg className="w-12 h-12 text-likya-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-title text-likya-primary mb-2">Zamanında Teslimat</h3>
                <p className="text-likya-text-dark font-body">
                  Etkinliklerinizin zamanlamasına uygun olarak her zaman zamanında teslimat yapıyoruz.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-likya-primary/10 p-6 rounded-lg mb-4">
                <svg className="w-12 h-12 text-likya-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="text-xl font-title text-likya-primary mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-likya-text-dark font-body">
                  Müşterilerimizin memnuniyeti bizim için en önemli önceliktir ve her detayda bunu gösteriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      <Footer />
    </div>
  );
}
