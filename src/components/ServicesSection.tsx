'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'corporate',
    title: 'Kurumsal',
    subtitle: 'Şirket yemekleri, toplantı, piknik',
    services: [
      {
        id: 'corporate-meals',
        title: 'Şirket Yemekleri',
        description: 'Günlük taze ve sağlıklı kurumsal yemek hizmeti. Çalışanlarınızın performansını artıracak lezzetli menüler.',
        image: '/catering_services/corporate_catering.jpg',
        features: ['Günlük taze üretim', 'Sağlıklı menü seçenekleri', 'Özel diyet programları', 'Esnek sipariş sistemi']
      },
      {
        id: 'meetings',
        title: 'Toplantı Catering',
        description: 'Profesyonel toplantılarınız için özel catering hizmeti. Kahve molasından tam öğün servisine kadar.',
        image: '/catering_services/meeting_catering.jpg',
        features: ['Kahve ve çay servisi', 'Hafif atıştırmalıklar', 'Öğle yemeği menüleri', 'Özel sunum tabakları']
      },
      {
        id: 'picnics',
        title: 'Şirket Piknikleri',
        description: 'Takım bütünlüğünü güçlendiren şirket piknikleri. Açık havada unutulmaz lezzet deneyimleri.',
        image: '/catering_services/picnic_catering.webp',
        features: ['Açık hava organizasyonu', 'Mangal ve ızgara menüleri', 'Eğlence aktiviteleri', 'Portatif mutfak kurulumu']
      }
    ]
  },
  {
    id: 'education',
    title: 'Okul & Eğitim',
    subtitle: 'Günlük yemek üretimi, sağlıklı menüler',
    services: [
      {
        id: 'daily-meals',
        title: 'Günlük Yemek Üretimi',
        description: 'Öğrencilerin gelişimi için özel olarak hazırlanmış günlük yemek programları.',
        image: '/catering_services/school_meals.jpg',
        features: ['Beslenme uzmanı onaylı', 'Yaş grubuna uygun', 'Günlük kalori hesaplaması', 'Alerji dostu seçenekler']
      },
      {
        id: 'healthy-menus',
        title: 'Sağlıklı Menüler',
        description: 'Çocukların sağlıklı büyümesi için özenle hazırlanmış besleyici menüler.',
        image: '/catering_services/healthy_meals.jpg',
        features: ['Organik malzemeler', 'Dengeli beslenme', 'Mevsimsel ürünler', 'Şeker ve tuz kontrolü']
      }
    ]
  },
  {
    id: 'events',
    title: 'Özel Etkinlikler',
    subtitle: 'Düğün, nişan, doğum günü',
    services: [
      {
        id: 'weddings',
        title: 'Düğün Catering',
        description: 'Hayatınızın en özel günü için unutulmaz lezzet deneyimi. Profesyonel düğün catering hizmeti.',
        image: '/catering_services/wedding_catering.jpg',
        features: ['Özel menü tasarımı', 'Profesyonel servis', 'Dekorasyon desteği', 'Misafir sayısına uygun']
      },
      {
        id: 'engagements',
        title: 'Nişan Organizasyonu',
        description: 'Nişan töreniniz için özel catering ve organizasyon hizmeti.',
        image: '/catering_services/engagement_catering.avif',
        features: ['Özel nişan menüleri', 'Kokteyl servisi', 'Tatlı ve pasta seçenekleri', 'Mekan koordinasyonu']
      },
      {
        id: 'birthdays',
        title: 'Doğum Günü Partileri',
        description: 'Çocuk ve yetişkin doğum günü partileri için özel catering hizmeti.',
        image: '/catering_services/birthday_catering.jpg',
        features: ['Tema partileri', 'Özel pasta tasarımı', 'Çocuk menüleri', 'Eğlence paketleri']
      },
     
    ]
  }
];

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('corporate');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    date: '',
    message: ''
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote form submission
    console.log('Quote form submitted:', quoteForm);
    alert('Teklif talebiniz alındı. En kısa sürede size dönüş yapacağız.');
  };

  const currentCategory = serviceCategories.find(cat => cat.id === selectedCategory);

  const scrollDesktopCarousel = (direction: 'left' | 'right') => {
    const el = desktopCarouselRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.8);
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const scrollMobileCarousel = (direction: 'left' | 'right') => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.9);
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="pt-12 bg-likya-bg-neutral">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center sm:mb-16 mb-8">
          <h2 className="text-4xl md:text-5xl font-title text-likya-primary mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg font-body text-likya-text-dark max-w-3xl mx-auto">
            Profesyonel catering hizmetlerimizle her türlü etkinliğinizde yanınızdayız
          </p>
        </div>

        {/* Category Tabs (Mobile/Tablet) */}
          <div className="flex justify-center mb-12 lg:hidden">
          <div className="flex bg-white rounded-lg shadow-sm border border-likya-primary/10 p-1">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedService(null);
                }}
                className={`relative px-6 py-3 rounded-md font-body transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'text-likya-primary bg-likya-primary/10'
                    : 'text-likya-text-dark hover:text-likya-primary hover:bg-likya-primary/5'
                }`}
              >
                <div className="text-center">
                  <div className="font-medium text-sm">{category.title}</div>
                </div>
                {selectedCategory === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-likya-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="relative lg:hidden mb-16">
          <div
            ref={mobileCarouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 pr-1 snap-x snap-mandatory"
          >
            {currentCategory?.services.map((service) => (
                              <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl transition-all transform hover:border-2 flex-shrink-0 w-72 sm:w-80 h-96 cursor-pointer"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="aspect-[4/3] relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    />
                    <div className="absolute inset-0 flex text-white text-left items-end justify-start p-6">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="text-left relative z-10">
                        <div className="text-sm font-medium mb-2 drop-shadow-lg">
                          {service.title}
                        </div>
                        <div className="text-xs leading-relaxed drop-shadow-lg">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Mobile nav buttons */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-1">
            <button
              type="button"
              aria-label="Önceki"
              onClick={() => scrollMobileCarousel('left')}
              className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full bg-white/90 shadow border border-likya-primary/20"
            >
              <svg className="w-5 h-5 text-likya-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Sonraki"
              onClick={() => scrollMobileCarousel('right')}
              className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full bg-white/90 shadow border border-likya-primary/20"
            >
              <svg className="w-5 h-5 text-likya-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Layout: Left Sidebar + Right Horizontal Carousel */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Categories */}
          <aside className="lg:col-span-3 xl:col-span-3">
            <div className="sticky top-24 space-y-3">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedService(null);
                  }}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 font-body ${
                    selectedCategory === category.id
                      ? 'bg-gradient-likya bg-likya-primary text-white border-likya-primary shadow-lg'
                      : 'bg-white text-likya-text-dark border-likya-primary/20 hover:bg-likya-primary/5 hover:border-likya-primary/40'
                  }`}
                >
                  <div className="font-semibold mb-1">{category.title}</div>
                  <div className="text-sm opacity-75">{category.subtitle}</div>
                </button>
              ))}
            </div>
          </aside>

          {/* Right Content: Horizontal Carousel */}
          <div className="lg:col-span-9 xl:col-span-9 relative">
            <div className="relative">
              <div
                ref={desktopCarouselRef}
                className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pr-2 snap-x snap-mandatory"
              >
                {currentCategory?.services.map((service) => (
                  <div
                    key={service.id}
                    className="group relative overflow-hidden rounded-2xl transition-all transform hover:border-2 flex-shrink-0 w-80 h-96 cursor-pointer"
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="aspect-[4/3] relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                      />
                      <div className="absolute inset-0 flex text-white text-left items-end justify-start p-6">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="text-left relative z-10">
                          <div className="text-sm font-medium mb-2 drop-shadow-lg">
                            {service.title}
                          </div>
                          <div className="text-xs leading-relaxed drop-shadow-lg">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev/Next Buttons */}
              <button
                type="button"
                aria-label="Önceki"
                onClick={() => scrollDesktopCarousel('left')}
                className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white border border-likya-primary/20"
              >
                <svg className="w-6 h-6 text-likya-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Sonraki"
                onClick={() => scrollDesktopCarousel('right')}
                className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white border border-likya-primary/20"
              >
                <svg className="w-6 h-6 text-likya-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quote Form Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-title text-likya-primary">
                    Teklif Talebi
                  </h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-likya-text-dark hover:text-likya-primary transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        required
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        required
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                        Etkinlik Türü
                      </label>
                      <select
                        value={quoteForm.eventType}
                        onChange={(e) => setQuoteForm({...quoteForm, eventType: e.target.value})}
                        className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      >
                        <option value="">Seçiniz</option>
                        <option value="corporate-meals">Kurumsal Şirket Yemekleri</option>
                        <option value="corporate-event">Kurumsal Etkinlik</option>
                        <option value="opening-ceremony">Açılış Töreni</option>
                        <option value="conference-seminar">Konferans/Seminer</option>
                        <option value="school-catering">Okul Catering</option>
                        <option value="school-picnic">Okul Piknik</option>
                        <option value="wedding">Düğün</option>
                        <option value="engagement">Nişan</option>
                        <option value="birthday">Doğum Günü</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                        Misafir Sayısı
                      </label>
                      <input
                        type="number"
                        value={quoteForm.guestCount}
                        onChange={(e) => setQuoteForm({...quoteForm, guestCount: e.target.value})}
                        className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                        Tarih
                      </label>
                      <input
                        type="date"
                        value={quoteForm.date}
                        onChange={(e) => setQuoteForm({...quoteForm, date: e.target.value})}
                        className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-likya-text-dark font-body mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      rows={4}
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                      className="w-full px-4 py-3 border border-likya-primary/20 rounded-lg focus:ring-2 focus:ring-likya-accent-orange focus:border-transparent font-body transition-all duration-300"
                      placeholder="Etkinliğiniz hakkında detayları paylaşın..."
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-likya-accent-orange hover:bg-likya-accent-gold text-white font-body font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Teklif Gönder
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 border border-likya-primary/20 text-likya-text-dark font-body rounded-lg hover:bg-likya-primary/5 transition-colors duration-300"
                    >
                      İptal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
