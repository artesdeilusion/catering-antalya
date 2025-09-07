import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yemek Teslimatı",
  description: "Evinize veya ofisinize teslim edilen taze, lezzetli Akdeniz yemekleri. Sağlıklı, pratik ve lezzetli.",
  keywords: ["yemek teslimatı", "ofis yemek servisi", "ev yemek servisi", "sağlıklı yemek teslimatı"],
  openGraph: {
    title: "Yemek Teslimatı - Likya Catering",
    description: "Taze, lezzetli Akdeniz yemekleri evinize veya ofisinize teslim ediyoruz.",
    images: [
      {
        url: '/catering_services/healthy_meals.jpg',
        width: 1200,
        height: 630,
        alt: 'Yemek Teslimat Hizmeti',
      },
    ],
  },
};

export default function FoodDeliveryPage() {
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
            Food Delivery
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Fresh, delicious Mediterranean meals delivered to your home or office.
          </p>
          <Link
            href="/contact"
            className="bg-likya-primary text-white px-8 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
          >
            Order Now
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-title text-likya-primary mb-6">Fresh Mediterranean Meals Delivered</h2>
          <p className="text-lg text-likya-text-dark mb-8 font-body">
            Enjoy the authentic flavors of the Mediterranean without leaving your home or office.
          </p>
          <Link
            href="/contact"
            className="bg-likya-primary text-white px-8 py-3 rounded-lg hover:bg-likya-secondary transition-colors duration-200 font-body"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
}
