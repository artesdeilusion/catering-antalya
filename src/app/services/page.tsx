import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Kurumsal etkinlikler, düğünler, özel partiler ve yemek teslimatı dahil olmak üzere kapsamlı catering hizmetlerimizi keşfedin.",
  keywords: ["catering hizmetleri", "düğün catering", "kurumsal catering", "özel etkinlik catering", "yemek teslimatı"],
  openGraph: {
    title: "Hizmetlerimiz - Likya Catering",
    description: "Düğün, kurumsal etkinlik ve özel organizasyonlar için profesyonel catering hizmetleri.",
    images: [
      {
        url: '/catering_services/wedding_catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Likya Catering Hizmetleri',
      },
    ],
  },
};

const services = [
  {
    title: "Corporate Catering",
    description: "Professional catering services for business meetings, conferences, and corporate events.",
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg",
    features: [
      "Business breakfasts and lunches",
      "Conference and meeting catering",
      "Holiday office parties",
      "Client entertainment events",
      "Custom menu development"
    ],
    href: "/services/corporate",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Wedding Catering",
    description: "Elegant and romantic catering for your special day, from intimate ceremonies to grand receptions.",
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg",
    features: [
      "Wedding ceremony catering",
      "Reception dinner service",
      "Wedding cake and desserts",
      "Bar and beverage service",
      "Wedding day coordination"
    ],
    href: "/services/wedding",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Private Events",
    description: "Intimate gatherings and celebrations with personalized service and custom menus.",
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg",
    features: [
      "Birthday celebrations",
      "Anniversary parties",
      "Family reunions",
      "Holiday gatherings",
      "Intimate dinner parties"
    ],
    href: "/services/private",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
      </svg>
    )
  },
  {
    title: "Food Delivery",
    description: "Fresh, delicious Mediterranean meals delivered to your home or office.",
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg",
    features: [
      "Daily meal delivery",
      "Office lunch delivery",
      "Family meal packages",
      "Dietary restriction options",
      "Contactless delivery"
    ],
    href: "/services/delivery",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            From intimate gatherings to grand celebrations, we provide exceptional Mediterranean catering for every occasion.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">Comprehensive Catering Solutions</h2>
            <p className="text-lg text-likya-text-dark font-body">
              We specialize in creating memorable dining experiences for all types of events and occasions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-likya-accent-gold rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-title text-likya-primary mb-3">{service.title}</h3>
                  <p className="text-likya-text-dark mb-6 font-body leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-title text-likya-primary mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-likya-text-dark font-body">
                          <svg className="w-4 h-4 text-likya-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-block bg-likya-primary text-white px-6 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-likya-neutral/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">Why Choose Likya Catering?</h2>
            <p className="text-lg text-likya-text-dark font-body">
              We go above and beyond to ensure your event is perfect in every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">Quality Guaranteed</h3>
              <p className="text-likya-text-dark font-body">
                We use only the finest, freshest ingredients and maintain the highest standards in food preparation and presentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">On-Time Service</h3>
              <p className="text-likya-text-dark font-body">
                Our professional team ensures punctual delivery and setup, so your event runs smoothly from start to finish.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-likya-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-title text-likya-primary mb-3">Personalized Experience</h3>
              <p className="text-likya-text-dark font-body">
                Every event is unique, and we work closely with you to create a customized experience that exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-likya-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-title mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 font-body">
            Let's discuss your catering needs and create an unforgettable experience for your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-likya-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-body font-medium"
            >
              Get a Quote
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-likya-primary transition-colors duration-200 font-body font-medium"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
