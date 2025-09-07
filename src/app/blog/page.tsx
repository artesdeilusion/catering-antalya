import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Catering, yemek servisi ve etkinlik organizasyonu hakkında faydalı bilgiler, ipuçları ve haberler.",
  keywords: ["catering blog", "yemek servisi ipuçları", "etkinlik organizasyonu", "catering haberleri"],
  openGraph: {
    title: "Blog - Likya Catering",
    description: "Catering ve etkinlik organizasyonu hakkında faydalı bilgiler ve ipuçları.",
    images: [
      {
        url: '/catering_services/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Likya Catering Blog',
      },
    ],
  },
};

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Okul Yemeklerinde Sağlıklı Menü Nasıl Hazırlanır?",
    excerpt: "Okul çağındaki çocukların beslenmesi, hem gelişimleri hem de akademik başarıları için kritik öneme sahiptir. Antalya'da birçok okul ve yemekhane catering hizmeti alırken, en çok önem verdikleri konu 'sağlıklı ve dengeli menü planlaması' oluyor.",
    author: "Likya Catering",
    date: "2025-01-28",
    category: "Sağlık & Beslenme",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    slug: "okul-yemeklerinde-saglikli-menu-nasil-hazirlanir"
  },
  {
    id: 2,
    title: "Kurumsal Etkinliklerde Catering: 30–50–100 Kişilik Menü Planı",
    excerpt: "Kurumsal etkinlikler, şirketlerin çalışanlarını motive ettiği, iş ortaklarını ağırladığı veya önemli başarılarını kutladığı özel zamanlardır. Antalya gibi turizm ve iş hayatının iç içe geçtiği bir şehirde, bu etkinliklerde catering hizmeti almak hem profesyonel hem de pratik bir çözümdür.",
    author: "Likya Catering",
    date: "2025-01-25",
    category: "Kurumsal Etkinlikler",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
    slug: "kurumsal-etkinliklerde-catering-menu-plani"
  },
  {
    id: 3,
    title: "Düğün Menü Seçimi: Antalya'da En Çok Tercih Edilen 5 Catering Paketi",
    excerpt: "Düğün planlamak heyecan verici ama aynı zamanda detaylı bir süreçtir. Mekân seçimi, davetli listesi, dekorasyon derken en kritik konulardan biri de düğün menüsü olur. Misafirlerinize unutulmaz bir yemek deneyimi sunmak için doğru catering paketini seçmek büyük fark yaratır.",
    author: "Likya Catering",
    date: "2025-01-22",
    category: "Düğün & Etkinlik",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    slug: "dugun-menu-secimi-antalya-catering-paketleri"
  },
  {
    id: 4,
    title: "Catering Fiyatları Nasıl Hesaplanır? (Antalya 2025 Rehberi)",
    excerpt: "Catering hizmeti almak isteyenlerin en çok merak ettiği sorulardan biri: Kişi başı fiyat nasıl belirleniyor ve toplam maliyet neye göre hesaplanıyor? Antalya'da düğün, kurumsal toplantı veya özel davet için catering planlarken bütçenizi doğru yönetmek önemlidir.",
    author: "Likya Catering",
    date: "2025-01-20",
    category: "Fiyatlandırma",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg",
    slug: "catering-fiyatlari-nasil-hesaplanir-antalya-2025"
  },
  {
    id: 5,
    title: "Antalya'da En Popüler Düğün Menüleri 2025",
    excerpt: "Antalya'nın en güzel düğün mekanlarında servis edilen popüler menüleri keşfedin. Geleneksel Türk mutfağından modern fusion lezzetlere kadar her zevke uygun seçenekler sunuyoruz.",
    author: "Şef Mehmet",
    date: "2025-01-18",
    category: "Düğün & Etkinlik",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/33630408/pexels-photo-33630408.jpeg",
    slug: "antalya-populer-dugun-menuleri-2025"
  },
  {
    id: 6,
    title: "Kurumsal Toplantılar İçin Pratik Catering Çözümleri",
    excerpt: "İş toplantılarınızı unutulmaz kılmak için profesyonel catering hizmetleri. Kahve molalarından öğle yemeklerine kadar her detayı planlayarak verimliliğinizi artırın.",
    author: "Likya Catering",
    date: "2025-01-15",
    category: "Kurumsal Etkinlikler",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg",
    slug: "kurumsal-toplantilar-catering-cozumleri"
  },
  {
    id: 7,
    title: "Antalya'da Catering Hizmeti Alırken Dikkat Edilmesi Gereken 7 Kriter",
    excerpt: "Firma seçerken bakılması gereken temel noktalar: hijyen standartları, referanslar, fiyat şeffaflığı, menü çeşitliliği ve servis kalitesi. Doğru tercih için bu kriterleri mutlaka değerlendirin.",
    author: "Şef Maria",
    date: "2025-01-15",
    category: "Catering Rehberi",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/7245469/pexels-photo-7245469.jpeg",
    slug: "antalya-catering-hizmeti-secerken-dikkat-edilecek-kriterler"
  },
  {
    id: 8,
    title: "Catering'de Bütçeyi Verimli Kullanmanın Yolları",
    excerpt: "Kaliteden ödün vermeden kişi başı maliyeti düşürmenin yolları, menü planlaması ipuçları ve bütçe dostu catering seçenekleri hakkında detaylı rehber.",
    author: "Şef Ayşe",
    date: "2025-01-12",
    category: "Fiyatlandırma",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/321588/pexels-photo-321588.jpeg",
    slug: "cateringde-butceyi-verimli-kullanmanin-yollari"
  },
  {
    id: 9,
    title: "Catering Hizmetlerinde Trendler: 2025 Akdeniz Esintisi",
    excerpt: "2025 yılında catering sektöründe öne çıkan trendler, Akdeniz mutfağının modern yorumları ve misafirlerinizi etkileyecek yenilikçi menü konseptleri.",
    author: "Likya Catering",
    date: "2025-01-10",
    category: "Trendler & Yenilikler",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/33522539/pexels-photo-33522539.jpeg",
    slug: "catering-hizmetlerinde-trendler-2025-akdeniz-esintisi"
  },
  {
    id: 10,
    title: "Sağlıklı Beslenme: Akdeniz Diyetinin Faydaları",
    excerpt: "Akdeniz diyetinin sağlığa faydalarını ve günlük hayatta nasıl uygulayacağınızı keşfedin. Uzman diyetisyenlerden öneriler ve catering menülerinde sağlıklı seçenekler.",
    author: "Dyt. Elif Yılmaz",
    date: "2025-01-08",
    category: "Sağlık & Beslenme",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
    slug: "saglikli-beslenme-akdeniz-diyeti-faydalari"
  },
   
  {
    id: 11,
    title: "Kurumsal Catering'de Verimliliği Artıran 6 Strateji",
    excerpt: "Düzenli yemek hizmetinin çalışan motivasyonu, zaman yönetimi ve maliyet optimizasyonuna katkısı. Kurumsal catering'de başarılı olmanın püf noktaları.",
    author: "Likya Catering",
    date: "2024-12-28",
    category: "Kurumsal Etkinlikler",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/32441077/pexels-photo-32441077.jpeg",
    slug: "kurumsal-cateringde-verimliligi-artiran-stratejiler"
  },
  {
    id: 12,
    title: "Antalya'da Açık Hava Etkinlikleri İçin Catering İpuçları",
    excerpt: "Antalya'nın muhteşem doğasında düzenlenecek açık hava etkinlikleri için catering planlaması. Hava koşulları ve lojistik detayları ile başarılı bir etkinlik organizasyonu.",
    author: "Likya Catering",
    date: "2025-01-05",
    category: "Açık Hava Etkinlikleri",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/31800800/pexels-photo-31800800.jpeg",
    slug: "antalya-acik-hava-etkinlikleri-catering-ipuclari"
  },
  {
    id: 13,
    title: "Antalya'da Düğün Catering Fiyatlarını Etkileyen 5 Faktör",
    excerpt: "Davetli sayısı, menü seçimi, lokasyon, servis ekibi ve dekorasyonun fiyat üzerindeki etkileri. Düğün catering bütçenizi doğru planlamak için bilmeniz gerekenler.",
    author: "Şef Antonio",
    date: "2024-12-20",
    category: "Düğün & Etkinlik",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/14457553/pexels-photo-14457553.jpeg",
    slug: "antalya-dugun-catering-fiyatlarini-etkileyen-faktorler"
  },
];



export default function BlogPage() {
  // Show all blog posts
  const filteredPosts = blogPosts;

  // Get featured post (first post from filtered results)
  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/27259161/pexels-photo-27259161.jpeg")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-title text-white mb-6 leading-tight">
            Blog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Akdeniz mutfağı ipuçları, etkinlik planlama önerileri ve uzman ekibimizden gastronomi içgörüleri keşfedin.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16  ">
        <div className="max-w-screen-xl mx-auto px-4">


          {/* Featured Post - Only show if there are filtered posts */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-4xl font-title text-likya-primary text-center mb-8">Öne Çıkan Yazı</h2>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform  transition-all duration-500">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10">

                    <h2 className="text-4xl md:text-4xl font-title text-likya-primary mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-likya-text-dark mb-8 font-body leading-relaxed text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="text-center flex justify-start">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="bg-likya-primary   text-white px-5 py-2 rounded-lg hover:shadow-lg transform   transition-all duration-300 font-body font-semibold"
                      >
                        Devamını Oku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}



          {/* Blog Posts Grid */}
          {remainingPosts.length > 0 && (
            <div>
              <h2 className="text-4xl font-title text-likya-primary text-center mb-12">Diğer Yazılar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform   transition-all duration-500 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover   transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                                          <div className="p-6">
                        <h3 className="text-xl font-title text-likya-primary mb-3 line-clamp-2 group-hover:text-likya-secondary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-likya-text-dark mb-6 font-body line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="text-center flex justify-start">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-likya-primary hover:text-likya-secondary font-body   flex items-center gap-2 group-hover:gap-3 transition-all duration-300 justify-center"
                          >
                            Devamını Oku
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          
        </div>
      </section>
      <Footer />
    </div>
  );
}
