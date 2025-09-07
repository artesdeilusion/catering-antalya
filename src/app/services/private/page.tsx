import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Özel Etkinlikler",
  description: "Kişiselleştirilmiş hizmet ve özel Akdeniz menüleri ile samimi toplantılar ve kutlamalar.",
  keywords: ["özel etkinlik catering", "özel parti catering", "doğum günü catering", "aile toplantısı catering"],
  openGraph: {
    title: "Özel Etkinlikler - Likya Catering",
    description: "Samimi toplantılar ve kutlamalar için kişiselleştirilmiş catering hizmetleri.",
    images: [
      {
        url: '/catering_services/birthday_catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Özel Etkinlik Catering',
      },
    ],
  },
};

export default function PrivateEventsPage() {
  return (
    <div className="min-h-screen">
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
            Private Events
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Intimate gatherings and celebrations with personalized service and custom Mediterranean menus.
          </p>
          <Link
            href="/contact"
            className="bg-likya-primary text-white px-8 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
          >
            Plan Your Event
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-title text-likya-primary mb-6">Personalized Celebrations</h2>
          <p className="text-lg text-likya-text-dark mb-8 font-body">
            Every private event is unique, and we believe in creating personalized experiences that reflect your vision and preferences.
          </p>
          <Link
            href="/contact"
            className="bg-likya-primary text-white px-8 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
