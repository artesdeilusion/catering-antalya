import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Düğün Catering",
  description: "Özel gününüz için zarif düğün catering hizmetleri. Samimi törenlerden büyük resepsiyonlara kadar unutulmaz yemek deneyimleri yaratıyoruz.",
  keywords: ["düğün catering", "nikah catering", "düğün yemeği", "resepsiyon catering"],
  openGraph: {
    title: "Düğün Catering - Likya Catering",
    description: "Özel gününüz için zarif düğün catering hizmetleri ve unutulmaz yemek deneyimleri.",
    images: [
      {
        url: '/catering_services/wedding_catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Düğün Catering Hizmetleri',
      },
    ],
  },
};

const weddingServices = [
  {
    title: "Wedding Ceremony Catering",
    description: "Light refreshments and beverages for your ceremony and cocktail hour.",
    items: [
      "Champagne and signature cocktails",
      "Mediterranean appetizers",
      "Fresh fruit and cheese displays",
      "Non-alcoholic beverage options",
      "Elegant presentation and service"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  },
  {
    title: "Reception Dinner Service",
    description: "Sophisticated plated or buffet service for your wedding reception.",
    items: [
      "Multi-course Mediterranean menu",
      "Plated or buffet service options",
      "Dietary restriction accommodations",
      "Professional serving staff",
      "Elegant table settings"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  },
  {
    title: "Wedding Cake & Desserts",
    description: "Custom wedding cakes and Mediterranean-inspired desserts.",
    items: [
      "Custom wedding cake design",
      "Mediterranean dessert platters",
      "Baklava and pastries",
      "Gluten-free options available",
      "Cake cutting and service"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  },
  {
    title: "Bar & Beverage Service",
    description: "Full-service bar with Mediterranean-inspired cocktails and wine pairings.",
    items: [
      "Full bar service",
      "Mediterranean wine selection",
      "Signature cocktail creation",
      "Non-alcoholic options",
      "Professional bartenders"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  }
];

const testimonials = [
  {
    name: "Maria & James",
    date: "June 2023",
    content: "Our wedding catering was absolutely perfect! The Mediterranean menu was a huge hit with our guests, and the service was impeccable.",
    rating: 5
  },
  {
    name: "Sophia & Michael",
    date: "September 2023",
    content: "Likya Catering made our special day even more memorable. The food was delicious and the presentation was stunning.",
    rating: 5
  },
  {
    name: "Elena & David",
    date: "August 2023",
    content: "From the tasting to the wedding day, everything was perfect. Our guests are still talking about the amazing food!",
    rating: 5
  }
];

export default function WeddingCateringPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-title text-white mb-6 leading-tight">
            Wedding Catering
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Create an unforgettable wedding experience with our elegant Mediterranean catering services.
          </p>
          <Link
            href="/contact"
            className="bg-likya-primary text-white px-8 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
          >
            Plan Your Wedding
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-title text-likya-primary mb-6">Your Perfect Wedding Day</h2>
              <p className="text-lg text-likya-text-dark mb-6 font-body leading-relaxed">
                Your wedding day is one of the most important days of your life, and we&apos;re here to make it perfect. Our Mediterranean-inspired wedding catering combines elegance, tradition, and exceptional taste to create a memorable dining experience for you and your guests.
              </p>
              <p className="text-lg text-likya-text-dark mb-6 font-body leading-relaxed">
                From intimate ceremonies to grand receptions, we work closely with you to create a customized menu that reflects your personal tastes and cultural heritage. Our experienced team handles every detail, from initial consultation to the final cleanup.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body">Custom menu development</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body">Wedding day coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body">Professional service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
                alt="Wedding catering setup"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-likya-accent-gold text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-title">200+</div>
                <div className="text-sm font-body">Happy Couples</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {weddingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-title text-likya-primary mb-3">{service.title}</h3>
                  <p className="text-likya-text-dark mb-4 font-body">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-likya-text-dark font-body">
                        <svg className="w-4 h-4 text-likya-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Planning Process */}
      <section className="py-16 px-4 bg-likya-neutral/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">Our Wedding Planning Process</h2>
            <p className="text-lg text-likya-text-dark font-body">
              We guide you through every step to ensure your wedding catering is perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-title text-2xl">1</span>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">Initial Consultation</h3>
              <p className="text-likya-text-dark font-body">
                We discuss your vision, guest count, budget, and dietary requirements to create a personalized plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-title text-2xl">2</span>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">Menu Tasting</h3>
              <p className="text-likya-text-dark font-body">
                Sample our Mediterranean dishes and work with our chefs to customize your perfect wedding menu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-title text-2xl">3</span>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">Final Planning</h3>
              <p className="text-likya-text-dark font-body">
                We finalize all details, coordinate with your venue, and prepare for your special day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-title text-2xl">4</span>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">Wedding Day</h3>
              <p className="text-likya-text-dark font-body">
                Our professional team executes your perfect wedding catering experience with elegance and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">What Our Wedding Couples Say</h2>
            <p className="text-lg text-likya-text-dark font-body">
              Real stories from couples who chose Likya Catering for their special day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-likya-text-dark mb-4 font-body italic">{testimonial.content}</p>
                <div>
                  <div className="font-title text-likya-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-body">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 px-4 bg-likya-neutral/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">Wedding Catering Packages</h2>
            <p className="text-lg text-likya-text-dark font-body">
              Comprehensive packages designed for every wedding style and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-title text-likya-primary mb-4">Intimate Wedding</h3>
              <div className="text-3xl font-title text-likya-accent-gold mb-4">$45-65</div>
              <div className="text-sm text-gray-600 mb-6 font-body">per person</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 50 guests
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Buffet or plated service
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic bar service
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-likya-primary">
              <h3 className="text-2xl font-title text-likya-primary mb-4">Classic Wedding</h3>
              <div className="text-3xl font-title text-likya-accent-gold mb-4">$65-85</div>
              <div className="text-sm text-gray-600 mb-6 font-body">per person</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 150 guests
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Plated service
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full bar service
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wedding cake included
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-title text-likya-primary mb-4">Luxury Wedding</h3>
              <div className="text-3xl font-title text-likya-accent-gold mb-4">$85-120</div>
              <div className="text-sm text-gray-600 mb-6 font-body">per person</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited guests
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom menu development
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium wine selection
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wedding coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-likya-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-title mb-6">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-xl mb-8 font-body">
            Let's create the perfect Mediterranean dining experience for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-likya-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-body font-medium"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-likya-primary transition-colors duration-200 font-body font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
