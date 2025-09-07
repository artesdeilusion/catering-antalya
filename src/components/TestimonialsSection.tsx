'use client';

import { useState } from 'react';
// import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  event: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    role: "Event Manager",
    company: "TechCorp",
    content: "Likya Catering ile çalışmak gerçekten harika bir deneyimdi. 500 kişilik teknoloji konferansımızda mükemmel hizmet aldık. Yemekler lezzetli, sunumlar etkileyici ve personel çok profesyoneldi.",
    rating: 5,
    image: "/api/placeholder/100/100/FF6B35/FFFFFF?text=AY",
    event: "Teknoloji Konferansı"
  },
  {
    id: 2,
    name: "Mehmet Demir",
    role: "CEO",
    company: "Demir Holding",
    content: "Düğünümüzde Likya Catering&apos;i tercih ettik ve kesinlikle doğru karar verdik. Menü planlamasından sunuma kadar her şey mükemmeldi. Misafirlerimiz hala yemeklerden bahsediyor!",
    rating: 5,
    image: "/api/placeholder/100/100/00CED1/FFFFFF?text=MD",
    event: "Düğün Töreni"
  },
  {
    id: 3,
    name: "Fatma Kaya",
    role: "Marketing Director",
    company: "Global Brands",
    content: "Kurumsal etkinliğimizde Likya Catering&apos;in sunduğu hizmet kalitesi beklentilerimizin çok üzerindeydi. Özellikle diyet kısıtlamaları olan misafirlerimiz için hazırladıkları özel menüler çok takdir edildi.",
    rating: 5,
    image: "/api/placeholder/100/100/FF69B4/FFFFFF?text=FK",
    event: "Kurumsal Etkinlik"
  },
  {
    id: 4,
    name: "Ali Özkan",
    role: "Wedding Planner",
    company: "Dream Events",
    content: "Birçok düğün organizasyonunda Likya Catering ile çalıştım ve her seferinde mükemmel sonuçlar aldım. Yaratıcı menü seçenekleri ve profesyonel yaklaşımları ile fark yaratıyorlar.",
    rating: 5,
    image: "/api/placeholder/100/100/9ACD32/FFFFFF?text=AÖ",
    event: "Düğün Organizasyonu"
  },
  {
    id: 5,
    name: "Zeynep Arslan",
    role: "HR Manager",
    company: "Innovation Labs",
    content: "Şirket yılbaşı partimizde Likya Cateringi tercih ettik. Hem yemek kalitesi hem de servis hızı açısından çok memnun kaldık. Özellikle canlı pişirme istasyonları büyük ilgi gördü.",
    rating: 5,
    image: "/api/placeholder/100/100/9370DB/FFFFFF?text=ZA",
    event: "Yılbaşı Partisi"
  },
  {
    id: 6,
    name: "Can Yıldız",
    role: "Event Coordinator",
    company: "Art Gallery",
    content: "Sanat galerimizin açılışında Likya Catering'in sunduğu hizmet gerçekten etkileyiciydi. Yemekler sadece lezzetli değil, aynı zamanda görsel olarak da sanat eserleri gibiydi.",
    rating: 5,
    image: "/api/placeholder/100/100/FF8C00/FFFFFF?text=CY",
    event: "Galeri Açılışı"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="pb-12  ">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
         
        </div>
        {/* Featured Testimonial Carousel */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
         
          <div className="relative">
            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                {testimonials[activeIndex].content}
              </blockquote>

              <div className="inline-block bg-likya-accent-gold text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {testimonials[activeIndex].event}
              </div>

              <div className="flex items-center justify-center">
               
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-800">{testimonials[activeIndex].name}</div>
                  <div className="text-slate-600">{testimonials[activeIndex].role}</div>
                  <div className="text-slate-500">{testimonials[activeIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
                aria-label="Önceki yorum"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-likya-accent-gold' : 'bg-slate-300'
                    }`}
                    aria-label={`Yorum ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
                aria-label="Sonraki yorum"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
