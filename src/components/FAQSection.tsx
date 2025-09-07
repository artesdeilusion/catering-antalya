'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Antalya'da catering hizmetiniz hangi bölgeleri kapsıyor?",
    answer: "Likya Catering, başta Muratpaşa, Konyaaltı ve Kepez olmak üzere; Lara, Döşemealtı, Aksu, Serik, Kemer ve çevresindeki tüm bölgelerde hizmet vermektedir. Etkinliğin büyüklüğüne göre Antalya dışına da organizasyon yapılabilmektedir."
  },
  {
    question: "Hangi tür etkinlikler için catering hizmeti veriyorsunuz?",
    answer: "Düğün, nişan ve özel davetler\nKurumsal toplantı, lansman ve piknik organizasyonları\nOkul, yemekhane ve günlük tabldot hizmetleri"
  },
  {
    question: "Menüleri kişiselleştirebiliyor muyuz?",
    answer: "Evet. Menüleri etkinliğinizin konseptine, bütçenize ve misafirlerinizin özel isteklerine (vegan, vejetaryen, glütensiz vb.) göre düzenleyebiliyoruz."
  },
  {
    question: "Catering fiyatları nasıl belirleniyor?",
    answer: "Fiyatlarımız; kişi sayısı, menü tercihi, etkinlik türü ve lokasyona göre değişiklik göstermektedir. Ortalama kişi başı fiyat aralıklarını \"Menüler\" sayfasında görebilir, özel teklif için form doldurabilirsiniz."
  },
  {
    question: "Düğün ve özel etkinliklerde minimum kişi sayısı var mı?",
    answer: "Genellikle minimum 30 kişilik organizasyonlardan başlayarak, 300+ kişilik davetlere kadar hizmet verebiliyoruz. Daha küçük etkinlikler için özel paketler hazırlanabilir."
  },
  {
    question: "Ekipman ve servis elemanı sağlıyor musunuz?",
    answer: "Evet. Masa, sandalye, servis ekipmanı ve profesyonel servis personeli dâhil olmak üzere tam kapsamlı catering hizmeti veriyoruz. İhtiyaca göre sadece yemek veya full paket seçebilirsiniz."
  },
  {
    question: "Hijyen ve gıda güvenliği standartlarınız nelerdir?",
    answer: "Tüm yemeklerimiz günlük hazırlanır, HACCP standartlarına uygun şekilde üretilir ve taşınır. Ürünlerimizde taze, yerel ve güvenilir malzemeler kullanıyoruz."
  },
  {
    question: "Rezervasyonu ne kadar önce yapmalıyım?",
    answer: "Düğün ve büyük etkinlikler için en az 4–6 hafta önce rezervasyon yapmanız önerilir. Kurumsal toplantılar ve küçük davetler için ise 7–10 gün önceden iletişime geçmek yeterlidir."
  },
  {
    question: "Nasıl teklif alabilirim?",
    answer: "Web sitemizdeki 2 adımlı teklif formunu doldurarak veya WhatsApp hattımız üzerinden bizimle iletişime geçerek kolayca fiyat teklifi alabilirsiniz."
  },
  {
    question: "Antalya düğün catering fiyatları 2025 yılında nasıl?",
    answer: "2025 yılı Antalya düğün catering fiyatları kişi başı 450-1200 TL arasında değişmektedir. Fiyat; menü seçimi, davetli sayısı, lokasyon ve ek hizmetlere göre belirlenir. Detaylı fiyat bilgisi için ücretsiz teklif alabilirsiniz."
  },
  {
    question: "Kurumsal catering hizmeti Antalya'da hangi şirketlere veriyorsunuz?",
    answer: "Antalya'da faaliyet gösteren tüm şirketlere kurumsal catering hizmeti veriyoruz. Toplantı, seminer, lansman, çalışan etkinlikleri ve günlük yemek hizmetleri sunuyoruz. Minimum 20 kişilik gruplar için hizmet verebiliyoruz."
  },
  {
    question: "Vegan ve vejetaryen menü seçenekleri var mı?",
    answer: "Evet, vegan ve vejetaryen menü seçeneklerimiz mevcuttur. Akdeniz mutfağından esinlenen sağlıklı ve lezzetli bitki bazlı yemekler sunuyoruz. Glütensiz seçenekler de bulunmaktadır."
  },
  {
    question: "Açık hava etkinlikleri için catering hizmeti veriyor musunuz?",
    answer: "Evet, Antalya'nın doğal güzelliklerinde düzenlenen açık hava etkinlikleri için özel catering hizmeti veriyoruz. Sahil, dağ, park ve bahçe etkinlikleri için uygun ekipman ve menüler sunuyoruz."
  },
  {
    question: "Catering hizmeti için ödeme koşulları nelerdir?",
    answer: "Ödeme koşulları etkinlik büyüklüğüne göre değişir. Genellikle %50 peşin, %50 etkinlik günü ödeme yapılır. Kurumsal müşteriler için vadeli ödeme seçenekleri de mevcuttur."
  },
  {
    question: "HACCP sertifikası ve hijyen belgeleriniz var mı?",
    answer: "Evet, HACCP gıda güvenliği sertifikamız ve tüm hijyen belgelerimiz mevcuttur. Personelimiz düzenli sağlık kontrollerinden geçer ve hijyen eğitimi alır."
  },
  {
    question: "Antalya'da en iyi catering firması hangisi?",
    answer: "Likya Catering, Antalya'da 10+ yıllık deneyimi, HACCP sertifikası, profesyonel ekibi ve kaliteli hizmet anlayışı ile öne çıkan catering firmalarından biridir. Müşteri memnuniyeti odaklı yaklaşımımız ve şeffaf fiyatlandırmamız ile tercih edilmekteyiz."
  },
  {
    question: "Düğün catering menüleri nelerdir?",
    answer: "Düğün catering menülerimiz; klasik Türk mutfağı, Akdeniz esintisi, modern fusion, vegan/vejetaryen ve gurme menü seçenekleri içerir. Her menü çorba, ana yemek, pilav/makarna, salata ve tatlıdan oluşur. Özel isteklerinize göre menüleri kişiselleştirebiliriz."
  },
  {
    question: "Kurumsal catering fiyatları Antalya'da ne kadar?",
    answer: "Antalya'da kurumsal catering fiyatları kişi başı 350-500 TL arasında değişmektedir. Fiyat; menü seçimi, kişi sayısı, etkinlik türü ve ek hizmetlere göre belirlenir. Toplantı, seminer ve çalışan etkinlikleri için özel paketlerimiz mevcuttur."
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-title text-likya-primary mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-lg font-body text-likya-text-dark max-w-3xl mx-auto">
            Antalya'da sunduğumuz catering hizmetleri hakkında en çok merak edilen soruların detaylı cevapları. 
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Schema.org FAQPage JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "name": "Antalya Catering Hizmetleri Hakkında Sık Sorulan Sorular",
              "description": "Likya Catering olarak Antalya'da sunduğumuz düğün, kurumsal ve özel etkinlik catering hizmetleri hakkında en çok merak edilen soruların detaylı cevapları.",
              "mainEntity": faqData.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              })),
              "publisher": {
                "@type": "Organization",
                "name": "Likya Catering",
                "url": "https://likyacatering.com",
                "logo": "https://likyacatering.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Antalya",
                  "addressCountry": "TR"
                }
              }
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Likya Catering",
              "description": "Antalya'da düğün, kurumsal ve özel etkinlik catering hizmetleri",
              "url": "https://likyacatering.com",
              "telephone": "+90 555 123 45 67",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Antalya",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.8969",
                "longitude": "30.7133"
              },
              "openingHours": "Mo-Su 08:00-22:00",
              "priceRange": "$$",
              "servedCuisine": ["Turkish", "Mediterranean", "International"],
              "hasMenu": "https://likyacatering.com/menus",
              "acceptsReservations": true,
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"]
            })
          }}
        />
      </div>
    </section>
  );
}
