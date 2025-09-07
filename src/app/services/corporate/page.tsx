import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurumsal Catering",
  description: "İş toplantıları, konferanslar ve kurumsal etkinlikler için profesyonel kurumsal catering hizmetleri. Müşterilerinizi etkileyip ekibinizi motive edin.",
  keywords: ["kurumsal catering", "iş toplantısı catering", "konferans catering", "şirket etkinliği catering"],
  openGraph: {
    title: "Kurumsal Catering - Likya Catering",
    description: "İş toplantıları, konferanslar ve kurumsal etkinlikler için profesyonel catering hizmetleri.",
    images: [
      {
        url: '/catering_services/corporate_catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Kurumsal Catering Hizmetleri',
      },
    ],
  },
};

const corporateServices = [
  {
    title: "Business Breakfasts",
    description: "Start your workday with nutritious and delicious Mediterranean breakfast options.",
    items: [
      "Fresh fruit platters",
      "Mediterranean yogurt parfaits",
      "Assorted pastries and breads",
      "Coffee and tea service",
      "Fresh juices and smoothies"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  },
  {
    title: "Lunch Meetings",
    description: "Keep your team focused and energized with our professional lunch catering.",
    items: [
      "Mediterranean salad bars",
      "Grilled chicken and fish options",
      "Vegetarian and vegan choices",
      "Fresh bread and spreads",
      "Beverage service"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  },
  {
    title: "Conference Catering",
    description: "Comprehensive catering solutions for multi-day conferences and large events.",
    items: [
      "Multi-course meal service",
      "Coffee breaks and refreshments",
      "Dietary restriction accommodations",
      "Professional serving staff",
      "Equipment and setup included"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  },
  {
    title: "Client Entertainment",
    description: "Impress your clients with sophisticated dining experiences that showcase your attention to detail.",
    items: [
      "Executive dining menus",
      "Wine and beverage pairing",
      "Private dining room service",
      "Custom menu development",
      "Professional presentation"
    ],
    image: "https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
  }
];

const testimonials = [
  {
    name: "Jennifer Martinez",
    company: "TechCorp Inc.",
    role: "VP of Operations",
    content: "Likya Catering has transformed our corporate events. The Mediterranean menu is always a hit with our team and clients alike.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Global Solutions",
    role: "Event Manager",
    content: "Professional service, delicious food, and attention to detail. They make our conferences memorable for all the right reasons.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    company: "Innovation Labs",
    role: "HR Director",
    content: "Our team loves the healthy Mediterranean options. It's refreshing to have catering that's both delicious and nutritious.",
    rating: 5
  }
];

export default function CorporateCateringPage() {
  return (
    <div className="min-h-screen pt-16">
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
            Corporate Catering
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Professional catering services that impress clients, motivate teams, and elevate your business events.
          </p>
          <Link
            href="/contact"
            className="bg-likya-primary text-white px-8 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-title text-likya-primary mb-6">Elevate Your Business Events</h2>
              <p className="text-lg text-likya-text-dark mb-6 font-body leading-relaxed">
                From intimate boardroom meetings to large-scale conferences, our corporate catering services are designed to enhance your business events with exceptional Mediterranean cuisine and professional service.
              </p>
              <p className="text-lg text-likya-text-dark mb-6 font-body leading-relaxed">
                We understand that your business events are opportunities to impress clients, motivate employees, and build relationships. That&apos;s why we focus on quality, presentation, and service that reflects your company&apos;s standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body">Professional service</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body">Dietary accommodations</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body">Flexible scheduling</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
                alt="Corporate catering setup"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-likya-accent-gold text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-title">500+</div>
                <div className="text-sm font-body">Corporate Events</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
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

      {/* Testimonials */}
      <section className="py-16 px-4 bg-likya-neutral/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">What Our Corporate Clients Say</h2>
            <p className="text-lg text-likya-text-dark font-body">
              Trusted by leading companies for their corporate catering needs.
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
                  <div className="text-sm text-gray-600 font-body">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title text-likya-primary mb-4">Pricing &amp; Packages</h2>
            <p className="text-lg text-likya-text-dark font-body">
              Flexible pricing options to fit your budget and event requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-title text-likya-primary mb-4">Basic Package</h3>
              <div className="text-3xl font-title text-likya-accent-gold mb-4">$15-25</div>
              <div className="text-sm text-gray-600 mb-6 font-body">per person</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Buffet-style service
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2-3 menu options
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic setup included
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-likya-primary">
              <h3 className="text-2xl font-title text-likya-primary mb-4">Professional Package</h3>
              <div className="text-3xl font-title text-likya-accent-gold mb-4">$25-40</div>
              <div className="text-sm text-gray-600 mb-6 font-body">per person</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Plated or buffet service
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  4-5 menu options
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional serving staff
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full setup and cleanup
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-title text-likya-primary mb-4">Executive Package</h3>
              <div className="text-3xl font-title text-likya-accent-gold mb-4">$40-60</div>
              <div className="text-sm text-gray-600 mb-6 font-body">per person</div>
              <ul className="space-y-2 mb-6 text-left">
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
                  Custom menu development
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium ingredients
                </li>
                <li className="flex items-center gap-2 text-likya-text-dark font-body">
                  <svg className="w-4 h-4 text-likya-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Event coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-likya-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-title mb-6">Ready to Elevate Your Corporate Events?</h2>
          <p className="text-xl mb-8 font-body">
            Contact us today to discuss your corporate catering needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-likya-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-body font-medium"
            >
              Get a Quote
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
