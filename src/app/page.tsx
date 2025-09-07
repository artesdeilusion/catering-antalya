import Image from "next/image";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anasayfa",
  description: "Likya Catering - Profesyonel catering hizmetleri. Düğün, kurumsal etkinlik, özel davet ve organizasyonlarınız için kaliteli yemek servisi.",
  keywords: ["catering", "düğün catering", "kurumsal catering", "özel etkinlik", "yemek servisi", "likya catering"],
  openGraph: {
    title: "Likya Catering - Profesyonel Catering Hizmetleri",
    description: "Düğün, kurumsal etkinlik ve özel organizasyonlarınız için profesyonel catering hizmetleri.",
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

export default function Home() {
  return (
    <div className="font-sans pt-16">
      {/* Hero Section */}
      <HeroSection />
           
      {/* Scroll Animation Section */}
      <ScrollAnimationSection /> 
      
      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
