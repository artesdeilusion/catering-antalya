import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Okul Yemeklerinde Sağlıklı Menü Nasıl Hazırlanır?",
    excerpt: "Okul çağındaki çocukların beslenmesi, hem gelişimleri hem de akademik başarıları için kritik öneme sahiptir. Antalya'da birçok okul ve yemekhane catering hizmeti alırken, en çok önem verdikleri konu 'sağlıklı ve dengeli menü planlaması' oluyor.",
    content: `
      <p>Okul çağındaki çocukların beslenmesi, hem gelişimleri hem de akademik başarıları için kritik öneme sahiptir. Antalya'da birçok okul ve yemekhane catering hizmeti alırken, en çok önem verdikleri konu "sağlıklı ve dengeli menü planlaması" oluyor. Peki sağlıklı bir okul menüsü nasıl hazırlanmalı? İşte adım adım rehber:</p>
      
      <h2>🥦 1. Dengeli Beslenme Temeli</h2>
      <p>Okul yemeklerinde menü hazırlarken protein, karbonhidrat, yağ, vitamin ve mineral dengesi gözetilmelidir.</p>
      
      <h3>Protein</h3>
      <p>Tavuk, kırmızı et, balık, baklagiller</p>
      
      <h3>Karbonhidrat</h3>
      <p>Tam tahıllar, bulgur, makarna, pirinç</p>
      
      <h3>Sebze & Meyve</h3>
      <p>Her öğünde en az bir porsiyon</p>
      
      <h3>Süt ürünleri</h3>
      <p>Yoğurt, ayran, peynir</p>
      
      <p>👉 Bu denge sağlandığında öğrencilerin hem enerji ihtiyacı karşılanır hem de sağlıklı büyüme desteklenir.</p>
      
      <h2>🥗 2. Taze ve Katkısız Ürün Kullanımı</h2>
      <ul>
        <li>Günlük sebze ve meyveler tercih edilmeli</li>
        <li>İşlenmiş gıdalardan (hazır soslar, kızartmalar) uzak durulmalı</li>
        <li>Şekerli içecekler yerine su ve ayran sunulmalı</li>
      </ul>
      <p>👉 Çocukların bağışıklığını korumak için taze, katkısız ve güvenilir ürünler şarttır.</p>
      
      <h2>🍲 3. Menüde Çeşitlilik</h2>
      <p>Aynı yemekleri sık tekrar etmek hem öğrencilerin ilgisini azaltır hem de besin çeşitliliğini düşürür.</p>
      
      <h3>Örnek Haftalık Menü</h3>
      <ul>
        <li><strong>Pazartesi:</strong> Kuru fasulye + pilav + cacık</li>
        <li><strong>Salı:</strong> Tavuk sote + bulgur pilavı + salata</li>
        <li><strong>Çarşamba:</strong> Balık ızgara + makarna + yoğurt</li>
        <li><strong>Perşembe:</strong> Etli türlü + pirinç pilavı + ayran</li>
        <li><strong>Cuma:</strong> Sebze graten + köfte + meyve</li>
      </ul>
      <p>👉 Haftalık rotasyon sistemi öğrencilerin her gün farklı bir lezzetle tanışmasını sağlar.</p>
      
      <h2>🧑‍🍳 4. Porsiyon Kontrolü</h2>
      <p>Çocukların yaş gruplarına göre porsiyon miktarı ayarlanmalıdır.</p>
      <ul>
        <li><strong>İlkokul:</strong> Daha küçük porsiyonlar</li>
        <li><strong>Ortaokul & lise:</strong> Daha büyük enerji ihtiyacına uygun porsiyonlar</li>
      </ul>
      <p>👉 Böylece hem israf önlenir hem de öğrencilerin ihtiyacına göre dengeli beslenme sağlanır.</p>
      
      <h2>🧼 5. Hijyen ve Gıda Güvenliği</h2>
      <p>Okul yemeklerinde en kritik noktalardan biri hijyendir.</p>
      <ul>
        <li>Yemekler günlük hazırlanmalı</li>
        <li>Soğuk zincir korunmalı</li>
        <li>Servis personeli hijyen kurallarına uymalı</li>
        <li>Mutfağın düzenli denetlenmesi sağlanmalı</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Okul yemeklerinde sağlıklı menü oluşturmak; dengeli beslenme, taze ürün, çeşitlilik, porsiyon kontrolü ve hijyen unsurlarının birleşimiyle mümkündür. Antalya'daki okullar için Likya Catering olarak, öğrencilerin sağlığına önem veren günlük ve aylık menü çözümleri sunuyoruz.</p>
      
      <p>👉 Okulunuz için sağlıklı yemek planı arıyorsanız bizimle iletişime geçin, size özel menüleri birlikte oluşturalım!</p>
    `,
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
    content: `
      <p>Kurumsal etkinlikler, şirketlerin çalışanlarını motive ettiği, iş ortaklarını ağırladığı veya önemli başarılarını kutladığı özel zamanlardır. Antalya gibi turizm ve iş hayatının iç içe geçtiği bir şehirde, bu etkinliklerde catering hizmeti almak hem profesyonel hem de pratik bir çözümdür. Peki davetli sayısı 30, 50 veya 100 kişi olduğunda menü planlaması nasıl yapılmalı? İşte detaylı rehberimiz.</p>
      
      <h2>👥 30 Kişilik Kurumsal Etkinlikler</h2>
      <p>Küçük ölçekli toplantılar, yönetim kurulu buluşmaları veya VIP davetler genellikle 30 kişilik olur. Bu tür etkinliklerde:</p>
      <ul>
        <li>Kişiye özel sunum ön plana çıkar. Daha şık tabak servisleri yapılabilir.</li>
        <li>Menü seçimi: Hafif başlangıç, tek ana yemek ve özenli tatlı sunumu.</li>
      </ul>
      
      <h3>Önerilen menü:</h3>
      <ul>
        <li><strong>Başlangıç:</strong> Mevsim salatası veya zeytinyağlı tabak</li>
        <li><strong>Ana Yemek:</strong> Izgara tavuk/dana bonfile + garnitür</li>
        <li><strong>Tatlı:</strong> Cheesecake veya sufle</li>
      </ul>
      <p><strong>Avantaj:</strong> Küçük grup olduğu için daha kaliteli malzemelerle gurme bir deneyim yaratmak mümkün.</p>
      <p>👉 30 kişilik etkinliklerde misafir memnuniyeti detaylı servis ile sağlanır.</p>
      
      <h2>👥 50 Kişilik Kurumsal Etkinlikler</h2>
      <p>Orta ölçekli lansmanlar, eğitim seminerleri veya şirket içi ödül törenleri 50 kişilik organizasyonlarla yapılır.</p>
      <ul>
        <li>Menüde çeşitlilik önemlidir. Misafirlerin farklı damak zevklerine hitap edecek 2 ana yemek seçeneği sunulabilir.</li>
      </ul>
      
      <h3>Önerilen menü:</h3>
      <ul>
        <li><strong>Başlangıç:</strong> Çorba + salata çeşitleri</li>
        <li><strong>Ana Yemek:</strong> Izgara köfte veya tavuk şiş + yan ürünler</li>
        <li><strong>Tatlı:</strong> Meyve tabağı + 1 sütlü tatlı</li>
      </ul>
      <p><strong>Sunum şekli:</strong> Açık büfe veya servis personeli ile tabak dağıtımı.</p>
      <p><strong>Ekstra:</strong> Çay-kahve köşesi veya içecek barı planlanabilir.</p>
      <p>👉 50 kişilik etkinlikler için dengeli menü + hızlı servis önceliklidir.</p>
      
      <h2>👥 100 Kişilik Kurumsal Etkinlikler</h2>
      <p>Büyük toplantılar, şirket piknikleri, bayi toplantıları ve tanıtım organizasyonları genellikle 100 kişilik veya daha fazla olur.</p>
      <ul>
        <li>Menü planlaması açık büfe tarzında yapılır.</li>
        <li>Çeşitlilik artırılmalı: Et + tavuk + sebze seçenekleri bir arada olmalı.</li>
      </ul>
      
      <h3>Önerilen menü:</h3>
      <ul>
        <li><strong>Başlangıç:</strong> Çorba + 2 çeşit salata + mezeler</li>
        <li><strong>Ana Yemek:</strong> Dana yahni, tavuk şiş, sebze graten</li>
        <li><strong>Yan Ürün:</strong> Pilav + makarna</li>
        <li><strong>Tatlı:</strong> 2–3 çeşit tatlı (sütlü, şerbetli, meyve)</li>
      </ul>
      <p><strong>Servis düzeni:</strong> En az 5–6 personel ile kesintisiz servis sağlanmalı.</p>
      <p><strong>Lojistik:</strong> Taşıma ve ekipman planlaması önceden yapılmalı.</p>
      <p>👉 100 kişilik etkinliklerde organizasyonun akışı cateringin başarısını belirler.</p>
      
      <h2>🎯 Menü Planlamasında Dikkat Edilmesi Gerekenler</h2>
      <ul>
        <li><strong>Bütçe:</strong> Kişi başı maliyet kişi sayısına göre değişir, büyük gruplarda fiyat avantajı olur.</li>
        <li><strong>Beslenme tercihleri:</strong> Vegan, vejetaryen veya glütensiz opsiyonlar mutlaka eklenmeli.</li>
        <li><strong>Zamanlama:</strong> Kurumsal etkinliklerde servis akışının toplantı programına uygun olması gerekir.</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Kurumsal etkinliklerde doğru catering seçimi, yalnızca yemek servisi değil, aynı zamanda profesyonel bir imaj demektir. Antalya'da düzenlediğiniz 30, 50 veya 100 kişilik tüm organizasyonlarda Likya Catering, deneyimli ekibi ve özenle hazırlanmış menüleriyle yanınızda.</p>
    `,
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
    content: `
      <p>Düğün planlamak heyecan verici ama aynı zamanda detaylı bir süreçtir. Mekân seçimi, davetli listesi, dekorasyon derken en kritik konulardan biri de düğün menüsü olur. Misafirlerinize unutulmaz bir yemek deneyimi sunmak için doğru catering paketini seçmek büyük fark yaratır.</p>
      
      <p>Antalya'da 2025 düğün trendlerine göre en çok tercih edilen 5 menü paketini senin için derledik:</p>
      
      <h2>1. Klasik Türk Mutfağı Menüsü</h2>
      <ul>
        <li>Çorba (mercimek veya yayla)</li>
        <li>Ana Yemek: Etli yahni veya tavuk tandır</li>
        <li>Pilav & garnitür</li>
        <li>Mevsim salatası</li>
        <li>Tatlı: Baklava veya sütlü tatlı</li>
      </ul>
      <p>👉 Geleneksel düğünlerde hâlâ en çok tercih edilen seçenek. Özellikle kalabalık düğünlerde herkesin damak tadına hitap ediyor.</p>
      
      <h2>2. Akdeniz Esintisi Menüsü</h2>
      <ul>
        <li>Zeytinyağlılar (enginar, yaprak sarma)</li>
        <li>Izgara balık veya deniz ürünleri</li>
        <li>Mezeler & salatalar</li>
        <li>Zeytinyağlı tatlı (revani, incir tatlısı)</li>
      </ul>
      <p>👉 Antalya sahil düğünlerinde öne çıkıyor. Hafif ve ferah menü isteyen çiftler için ideal.</p>
      
      <h2>3. Kokteyl & Kanape Menüsü</h2>
      <ul>
        <li>Atıştırmalık mini sandviçler</li>
        <li>Kanepeler (peynir, füme et, sebze çeşitleri)</li>
        <li>Mini tatlılar ve meyve tabakları</li>
        <li>İçecek barı</li>
      </ul>
      <p>👉 Daha modern, ayakta servis edilen düğünlerde popüler. Özellikle yaz düğünlerinde sosyal ve dinamik bir ortam yaratıyor.</p>
      
      <h2>4. Vegan & Vejetaryen Menü</h2>
      <ul>
        <li>Nohut veya mercimek köftesi</li>
        <li>Sebze graten</li>
        <li>Glütensiz makarna veya bulgur pilavı</li>
        <li>Zeytinyağlı sebze tabakları</li>
        <li>Vegan tatlı alternatifleri</li>
      </ul>
      <p>👉 Son yıllarda Antalya'da da yükselen trend: sağlıklı ve çevre dostu düğün menüleri.</p>
      
      <h2>5. Gurme Menü</h2>
      <ul>
        <li>Başlangıç: Somon carpaccio veya peynir tabağı</li>
        <li>Ana Yemek: Dana bonfile veya deniz mahsulleri tabağı</li>
        <li>Ara sıcak: Ravioli veya risotto</li>
        <li>Tatlı: Cheesecake veya özel pastalar</li>
      </ul>
      <p>👉 Özel bir izlenim bırakmak isteyen çiftler için lüks bir seçenek. 5 yıldızlı otel düğünlerinde tercih ediliyor.</p>
      
      <h2>Sonuç</h2>
      <p>Düğün menüsü seçerken davetli sayınızı, etkinlik tarzınızı ve bütçenizi göz önünde bulundurmalısınız. Antalya'da düğün catering seçenekleri geniştir; ister geleneksel ister modern bir menü arayın, Likya Catering sizin için doğru paketi hazırlar.</p>
      
      <p>👉 Hemen bizimle iletişime geçin ve düğününüz için en uygun menüyü birlikte planlayalım!</p>
    `,
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
    content: `
      <p>Catering hizmeti almak isteyenlerin en çok merak ettiği sorulardan biri şudur: "Kişi başı fiyat nasıl belirleniyor ve toplam maliyet neye göre hesaplanıyor?"</p>
      
      <p>Antalya'da düğün, kurumsal toplantı veya özel davet için catering planlarken bütçenizi doğru yönetmek önemlidir. İşte 2025 yılında catering fiyatlarını etkileyen temel faktörler:</p>
      
      <h2>1. Kişi Sayısı</h2>
      <p>En belirleyici unsur davete katılacak kişi sayısıdır.</p>
      <ul>
        <li>30–50 kişilik butik davetlerde kişi başı fiyat genellikle biraz daha yüksek olur.</li>
        <li>200–300 kişilik organizasyonlarda ise ölçek avantajı sayesinde kişi başı maliyet düşer.</li>
      </ul>
      
      <h2>2. Menü Tercihi</h2>
      <p>Seçtiğiniz menü türü maliyeti doğrudan etkiler:</p>
      
      <h3>Standart Menü</h3>
      <p>Çorba + Ana Yemek + Pilav/Makarna + Salata + Tatlı</p>
      
      <h3>Kokteyl Menü</h3>
      <p>Soğuk sandviç, kanepe, içecek, tatlı atıştırmalıklar</p>
      
      <h3>Gurme Menü</h3>
      <p>Deniz ürünleri, et özel sunumları, canlı istasyonlu menüler</p>
      
      <p>Örneğin, "Antalya düğün catering" aramalarında sık tercih edilen kapsamlı gurme menü fiyatları kişi başı 800–1.200 ₺ bandında olabilir.</p>
      
      <h2>3. Etkinlik Türü ve Süresi</h2>
      
      <h3>Düğün & Nişan</h3>
      <p>Şık sunum, ekstra servis personeli, masa-sandalye süslemeleri gerekir.</p>
      
      <h3>Kurumsal Toplantı</h3>
      <p>Daha çok pratik sunum ve tabldot menüler tercih edilir.</p>
      
      <h3>Okul & Yemekhane</h3>
      <p>Günlük veya aylık sözleşmeli fiyatlandırma yapılır.</p>
      
      <h2>4. Lokasyon ve Lojistik</h2>
      <p>Etkinliğin yapılacağı yer de fiyatları etkiler.</p>
      <ul>
        <li>Antalya şehir merkezinde ulaşım kolayken, Kemer, Belek veya Kaş gibi bölgelerde ekstra lojistik maliyet olabilir.</li>
        <li>Açık hava organizasyonlarında ekipman kiralama da fiyata yansır.</li>
      </ul>
      
      <h2>5. Ek Hizmetler</h2>
      <ul>
        <li>Masa, sandalye, çadır, dekorasyon</li>
        <li>Canlı istasyon (şefin anında servis yaptığı köşeler)</li>
        <li>Profesyonel servis ekibi</li>
        <li>Fotoğraf & video çekim desteği</li>
      </ul>
      <p>Bu ekstra hizmetler kişi başı fiyatın üzerine eklenebilir.</p>
      
      <h2>Ortalama Fiyatlar (2025 Antalya)</h2>
      <ul>
        <li><strong>Kurumsal Catering:</strong> kişi başı 350–500 ₺</li>
        <li><strong>Düğün & Nişan:</strong> kişi başı 600–1.200 ₺</li>
        <li><strong>Okul Yemekleri:</strong> aylık tabldot sözleşmeleri 180–250 ₺ / kişi (öğrenci sayısına göre değişir)</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Catering fiyatları; kişi sayısı, menü seçimi, lokasyon ve ek hizmetlere göre şekillenir. Likya Catering olarak biz, Antalya'da her bütçeye uygun menü alternatifleri sunuyoruz.</p>
    `,
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
    content: `
      <p>Antalya'nın muhteşem doğası ve tarihi dokusu, düğün organizasyonları için eşsiz bir atmosfer yaratır. 2025 yılında Antalya'da düzenlenen düğünlerde en çok tercih edilen menü seçeneklerini sizin için derledik. Geleneksel Türk mutfağından modern fusion lezzetlere kadar her zevke uygun seçenekler bulacaksınız.</p>
      
      <h2>🏛️ 1. Klasik Türk Mutfağı Menüsü</h2>
      <p>Geleneksel düğünlerde hâlâ en çok tercih edilen seçenek. Özellikle kalabalık düğünlerde herkesin damak tadına hitap ediyor.</p>
      
      <h3>Menü İçeriği:</h3>
      <ul>
        <li><strong>Çorba:</strong> Mercimek çorbası veya yayla çorbası</li>
        <li><strong>Ana Yemek:</strong> Etli yahni, tavuk tandır veya kuzu kapama</li>
        <li><strong>Pilav & Garnitür:</strong> Bulgur pilavı, pirinç pilavı, patates kızartması</li>
        <li><strong>Salata:</strong> Mevsim salatası, çoban salatası</li>
        <li><strong>Tatlı:</strong> Baklava, kadayıf veya sütlü tatlılar</li>
      </ul>
      
      <p>👉 <strong>Avantajları:</strong> Her yaştan misafirin beğeneceği, maliyet dostu, hazırlık süreci kolay</p>
      <p>👉 <strong>Fiyat Aralığı:</strong> Kişi başı 450-650 ₺</p>
      
      <h2>🌊 2. Akdeniz Esintisi Menüsü</h2>
      <p>Antalya sahil düğünlerinde öne çıkan, hafif ve ferah menü seçeneği. Özellikle yaz düğünlerinde tercih ediliyor.</p>
      
      <h3>Menü İçeriği:</h3>
      <ul>
        <li><strong>Zeytinyağlılar:</strong> Enginar, yaprak sarma, kabak dolması</li>
        <li><strong>Deniz Ürünleri:</strong> Izgara levrek, çupra, karides</li>
        <li><strong>Mezeler:</strong> Humus, babaganuş, tzatziki</li>
        <li><strong>Salatalar:</strong> Akdeniz salatası, roka salatası</li>
        <li><strong>Tatlı:</strong> Revani, incir tatlısı, zeytinyağlı kek</li>
      </ul>
      
      <p>👉 <strong>Avantajları:</strong> Sağlıklı, hafif, yaz aylarında ideal</p>
      <p>👉 <strong>Fiyat Aralığı:</strong> Kişi başı 550-750 ₺</p>
      
      <h2>🍽️ 3. Modern Fusion Menüsü</h2>
      <p>Geleneksel lezzetleri modern sunum teknikleriyle birleştiren, genç çiftlerin tercih ettiği menü konsepti.</p>
      
      <h3>Menü İçeriği:</h3>
      <ul>
        <li><strong>Başlangıç:</strong> Somon carpaccio, peynir tabağı</li>
        <li><strong>Ana Yemek:</strong> Dana bonfile, tavuk şinitzel, sebze graten</li>
        <li><strong>Yan Ürünler:</strong> Risotto, gnocchi, quinoa salatası</li>
        <li><strong>Tatlı:</strong> Cheesecake, tiramisu, profiterol</li>
      </ul>
      
      <p>👉 <strong>Avantajları:</strong> Instagram'a uygun sunum, farklı damak zevklerine hitap</p>
      <p>👉 <strong>Fiyat Aralığı:</strong> Kişi başı 700-950 ₺</p>
      
      <h2>🌱 4. Vegan & Vejetaryen Menü</h2>
      <p>Son yıllarda Antalya'da da yükselen trend: sağlıklı ve çevre dostu düğün menüleri.</p>
      
      <h3>Menü İçeriği:</h3>
      <ul>
        <li><strong>Ana Yemek:</strong> Nohut köftesi, mercimek köftesi, sebze graten</li>
        <li><strong>Yan Ürünler:</strong> Glütensiz makarna, bulgur pilavı, quinoa</li>
        <li><strong>Salatalar:</strong> Zeytinyağlı sebze tabakları, yeşil salata</li>
        <li><strong>Tatlı:</strong> Vegan cheesecake, hurma tatlısı, vegan brownie</li>
      </ul>
      
      <p>👉 <strong>Avantajları:</strong> Sağlıklı, çevre dostu, farklı beslenme tercihlerine uygun</p>
      <p>👉 <strong>Fiyat Aralığı:</strong> Kişi başı 400-600 ₺</p>
      
      <h2>🥂 5. Kokteyl & Kanape Menüsü</h2>
      <p>Daha modern, ayakta servis edilen düğünlerde popüler. Özellikle yaz düğünlerinde sosyal ve dinamik bir ortam yaratıyor.</p>
      
      <h3>Menü İçeriği:</h3>
      <ul>
        <li><strong>Atıştırmalıklar:</strong> Mini sandviçler, kanepeler</li>
        <li><strong>Mezeler:</strong> Peynir tabağı, füme et, sebze çeşitleri</li>
        <li><strong>Tatlılar:</strong> Mini tatlılar, meyve tabakları</li>
        <li><strong>İçecekler:</strong> Kokteyl barı, şarap seçenekleri</li>
      </ul>
      
      <p>👉 <strong>Avantajları:</strong> Sosyal etkileşim, esnek servis, modern atmosfer</p>
      <p>👉 <strong>Fiyat Aralığı:</strong> Kişi başı 300-500 ₺</p>
      
      <h2>🎯 Menü Seçiminde Dikkat Edilmesi Gerekenler</h2>
      
      <h3>1. Davetli Profili</h3>
      <p>Yaş grupları, beslenme tercihleri ve kültürel geçmiş göz önünde bulundurulmalı.</p>
      
      <h3>2. Mevsim</h3>
      <p>Yaz aylarında hafif menüler, kış aylarında daha doyurucu seçenekler tercih edilmeli.</p>
      
      <h3>3. Düğün Saati</h3>
      <p>Öğle düğünlerinde daha hafif, akşam düğünlerinde daha kapsamlı menüler uygun olur.</p>
      
      <h3>4. Bütçe</h3>
      <p>Toplam düğün bütçesinin %30-40'ı catering için ayrılabilir.</p>
      
      <h2>📌 Sonuç</h2>
      <p>Antalya'da düğün menüsü seçerken, hem geleneksel hem de modern seçenekler arasından size en uygun olanı bulabilirsiniz. Likya Catering olarak, her zevke ve bütçeye uygun menü alternatifleri sunuyoruz.</p>
      
      <p>👉 Düğününüz için en uygun menüyü birlikte planlamak isterseniz, uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>İş dünyasında başarılı toplantılar, sadece güçlü sunumlar ve etkili iletişimle değil, aynı zamanda katılımcıların ihtiyaçlarını karşılayan profesyonel catering hizmetleriyle de şekillenir. Antalya'da düzenlenen kurumsal toplantılarda verimliliği artırmak için catering çözümlerinin nasıl planlanması gerektiğini detaylı olarak ele alıyoruz.</p>
      
      <h2>☕ Kahve Molası Catering'i</h2>
      <p>Toplantıların vazgeçilmez parçası olan kahve molaları, katılımcıların enerjisini yenilemesi ve sosyal etkileşimi artırması açısından kritik öneme sahiptir.</p>
      
      <h3>Kahve Molası Menü Seçenekleri:</h3>
      <ul>
        <li><strong>İçecekler:</strong> Türk kahvesi, filtre kahve, çay çeşitleri, meyve suları</li>
        <li><strong>Atıştırmalıklar:</strong> Kurabiye, kek, börek, sandviç</li>
        <li><strong>Sağlıklı Seçenekler:</strong> Kuru meyve, fındık, granola bar</li>
      </ul>
      
      <p>👉 <strong>Önerilen Süre:</strong> 15-20 dakika, günde 2-3 kez</p>
      <p>👉 <strong>Kişi Başı Maliyet:</strong> 25-40 ₺</p>
      
      <h2>🍽️ Öğle Yemeği Catering'i</h2>
      <p>Uzun süren toplantılarda öğle yemeği, katılımcıların enerjisini koruması ve toplantıya odaklanması için gereklidir.</p>
      
      <h3>Öğle Yemeği Menü Alternatifleri:</h3>
      
      <h4>Hafif Menü (2-3 saatlik toplantılar için):</h4>
      <ul>
        <li>Çorba + salata + sandviç</li>
        <li>Mevsim meyveleri</li>
        <li>Su ve ayran</li>
      </ul>
      
      <h4>Standart Menü (Yarım günlük toplantılar için):</h4>
      <ul>
        <li>Çorba + ana yemek + pilav/makarna + salata</li>
        <li>Tatlı veya meyve</li>
        <li>İçecek seçenekleri</li>
      </ul>
      
      <h4>Gurme Menü (Önemli toplantılar için):</h4>
      <ul>
        <li>Başlangıç + ana yemek + tatlı</li>
        <li>Şarap seçenekleri (isteğe bağlı)</li>
        <li>Özel sunum</li>
      </ul>
      
      <p>👉 <strong>Kişi Başı Maliyet:</strong> 80-200 ₺ (menü seçimine göre)</p>
      
      <h2>📋 Toplantı Türüne Göre Catering Planlaması</h2>
      
      <h3>1. Yönetim Kurulu Toplantıları</h3>
      <ul>
        <li><strong>Süre:</strong> 2-4 saat</li>
        <li><strong>Katılımcı:</strong> 5-15 kişi</li>
        <li><strong>Önerilen Menü:</strong> Kahve molası + hafif öğle yemeği</li>
        <li><strong>Sunum:</strong> Bireysel tabak servisi</li>
      </ul>
      
      <h3>2. Eğitim Seminerleri</h3>
      <ul>
        <li><strong>Süre:</strong> 6-8 saat</li>
        <li><strong>Katılımcı:</strong> 20-50 kişi</li>
        <li><strong>Önerilen Menü:</strong> Kahve molası + standart öğle yemeği + ikindi molası</li>
        <li><strong>Sunum:</strong> Açık büfe veya tabldot</li>
      </ul>
      
      <h3>3. Lansman ve Tanıtım Etkinlikleri</h3>
      <ul>
        <li><strong>Süre:</strong> 2-3 saat</li>
        <li><strong>Katılımcı:</strong> 50-200 kişi</li>
        <li><strong>Önerilen Menü:</strong> Kokteyl menü + içecek barı</li>
        <li><strong>Sunum:</strong> Ayakta servis, kanape tarzı</li>
      </ul>
      
      <h3>4. Çalışan Motivasyon Etkinlikleri</h3>
      <ul>
        <li><strong>Süre:</strong> 4-6 saat</li>
        <li><strong>Katılımcı:</strong> 30-100 kişi</li>
        <li><strong>Önerilen Menü:</strong> Standart menü + özel tatlılar</li>
        <li><strong>Sunum:</strong> Açık büfe, sosyal atmosfer</li>
      </ul>
      
      <h2>⏰ Zamanlama ve Servis Planlaması</h2>
      
      <h3>Sabah Toplantıları (09:00-12:00):</h3>
      <ul>
        <li>09:00 - Kahve ve atıştırmalık servisi</li>
        <li>10:30 - Kahve molası</li>
        <li>12:00 - Hafif öğle yemeği (isteğe bağlı)</li>
      </ul>
      
      <h3>Öğleden Sonra Toplantıları (13:00-17:00):</h3>
      <ul>
        <li>13:00 - Öğle yemeği</li>
        <li>15:00 - Kahve molası</li>
        <li>16:30 - İkindi atıştırmalığı</li>
      </ul>
      
      <h3>Tam Gün Toplantıları (09:00-17:00):</h3>
      <ul>
        <li>09:00 - Kahve servisi</li>
        <li>10:30 - Kahve molası</li>
        <li>12:30 - Öğle yemeği</li>
        <li>15:00 - Kahve molası</li>
        <li>16:30 - İkindi atıştırmalığı</li>
      </ul>
      
      <h2>🎯 Verimliliği Artıran Catering İpuçları</h2>
      
      <h3>1. Beslenme Dengesi</h3>
      <p>Toplantı süresince katılımcıların enerjisini korumak için protein, karbonhidrat ve vitamin dengesi sağlanmalıdır.</p>
      
      <h3>2. Porsiyon Kontrolü</h3>
      <p>Çok ağır yemekler uyku getirebilir, çok hafif yemekler ise açlık hissi yaratabilir. Dengeli porsiyonlar tercih edilmelidir.</p>
      
      <h3>3. Hijyen ve Güvenlik</h3>
      <p>Toplu yemek servisinde hijyen kurallarına uyulması, katılımcıların sağlığı için kritik öneme sahiptir.</p>
      
      <h3>4. Esnek Menü Seçenekleri</h3>
      <p>Farklı beslenme tercihleri (vegan, vejetaryen, glütensiz) için alternatif seçenekler sunulmalıdır.</p>
      
      <h2>💰 Bütçe Optimizasyonu</h2>
      
      <h3>Maliyet Tasarrufu İpuçları:</h3>
      <ul>
        <li>Düzenli toplantılar için aylık paket sözleşmeleri</li>
        <li>Yerel ve mevsimsel ürünlerin tercih edilmesi</li>
        <li>Gereksiz ekstra hizmetlerden kaçınma</li>
        <li>Toplantı süresine uygun menü seçimi</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Kurumsal toplantılarda doğru catering planlaması, sadece katılımcıların fiziksel ihtiyaçlarını karşılamakla kalmaz, aynı zamanda toplantının verimliliğini ve başarısını da artırır. Antalya'da düzenlediğiniz tüm kurumsal etkinliklerde Likya Catering, profesyonel ekibi ve esnek menü seçenekleriyle yanınızda.</p>
      
      <p>👉 Toplantınız için en uygun catering çözümünü planlamak isterseniz, uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>Antalya'da catering hizmeti almak, özellikle düğün, kurumsal etkinlik veya özel davetler için kritik bir karardır. Doğru firma seçimi, etkinliğinizin başarısını doğrudan etkiler. İşte catering firması seçerken mutlaka değerlendirmeniz gereken 7 temel kriter:</p>
      
      <h2>🧼 1. Hijyen Standartları ve Gıda Güvenliği</h2>
      <p>En kritik kriter hijyen ve gıda güvenliğidir. Bu konuda asla taviz verilmemelidir.</p>
      
      <h3>Kontrol Edilmesi Gerekenler:</h3>
      <ul>
        <li><strong>Belgeler:</strong> HACCP sertifikası, gıda güvenliği belgeleri</li>
        <li><strong>Mutfağın Durumu:</strong> Temizlik, düzen, ekipman kalitesi</li>
        <li><strong>Personel Hijyeni:</strong> Çalışanların sağlık belgeleri, hijyen eğitimi</li>
        <li><strong>Soğuk Zincir:</strong> Gıdaların uygun sıcaklıkta saklanması</li>
      </ul>
      
      <p>👉 <strong>Önemli:</strong> Mutfağı ziyaret edin, belgeleri inceleyin ve personelin hijyen kurallarına uyup uymadığını gözlemleyin.</p>
      
      <h2>⭐ 2. Referanslar ve Deneyim</h2>
      <p>Firmanın geçmiş performansı, gelecekteki hizmet kalitesinin en iyi göstergesidir.</p>
      
      <h3>Araştırılması Gerekenler:</h3>
      <ul>
        <li><strong>Referans Listesi:</strong> Önceki müşterilerle iletişim kurun</li>
        <li><strong>Deneyim Süresi:</strong> Sektörde ne kadar süredir hizmet veriyor</li>
        <li><strong>Etkinlik Türü:</strong> Benzer etkinliklerde deneyimi var mı</li>
        <li><strong>Online Yorumlar:</strong> Google, sosyal medya ve sektör platformlarındaki değerlendirmeler</li>
      </ul>
      
      <p>👉 <strong>Öneri:</strong> En az 3-5 referansla konuşun ve detaylı bilgi alın.</p>
      
      <h2>💰 3. Fiyat Şeffaflığı ve Maliyet Analizi</h2>
      <p>Şeffaf fiyatlandırma, güvenilir bir firmanın temel özelliklerinden biridir.</p>
      
      <h3>Fiyatlandırmada Dikkat Edilmesi Gerekenler:</h3>
      <ul>
        <li><strong>Detaylı Fatura:</strong> Her kalemin ayrı ayrı belirtilmesi</li>
        <li><strong>Gizli Maliyetler:</strong> Ekstra ücretlerin önceden belirtilmesi</li>
        <li><strong>Karşılaştırma:</strong> En az 3 farklı firmadan teklif alınması</li>
        <li><strong>Ödeme Koşulları:</strong> Peşin, taksitli veya vadeli ödeme seçenekleri</li>
      </ul>
      
      <p>👉 <strong>Uyarı:</strong> En ucuz seçenek her zaman en iyi seçenek değildir. Kalite-fiyat dengesini değerlendirin.</p>
      
      <h2>🍽️ 4. Menü Çeşitliliği ve Kalitesi</h2>
      <p>Menü seçenekleri, etkinliğinizin başarısını doğrudan etkiler.</p>
      
      <h3>Menü Değerlendirme Kriterleri:</h3>
      <ul>
        <li><strong>Çeşitlilik:</strong> Farklı damak zevklerine hitap eden seçenekler</li>
        <li><strong>Kalite:</strong> Taze, mevsimsel ve kaliteli malzemeler</li>
        <li><strong>Özelleştirme:</strong> Özel isteklerin karşılanabilmesi</li>
        <li><strong>Beslenme Tercihleri:</strong> Vegan, vejetaryen, glütensiz seçenekler</li>
        <li><strong>Tadım:</strong> Menü tadımı yapabilme imkanı</li>
      </ul>
      
      <p>👉 <strong>Önemli:</strong> Mutlaka menü tadımı yapın ve malzeme kalitesini kontrol edin.</p>
      
      <h2>👥 5. Servis Kalitesi ve Personel Profesyonelliği</h2>
      <p>Servis personeli, etkinliğinizin atmosferini belirleyen en önemli unsurlardan biridir.</p>
      
      <h3>Servis Kalitesi Kriterleri:</h3>
      <ul>
        <li><strong>Personel Sayısı:</strong> Misafir sayısına uygun servis ekibi</li>
        <li><strong>Deneyim:</strong> Servis personelinin deneyim seviyesi</li>
        <li><strong>Görünüm:</strong> Temiz, düzenli ve profesyonel kıyafet</li>
        <li><strong>Davranış:</strong> Nazik, yardımsever ve profesyonel yaklaşım</li>
        <li><strong>Dil Bilgisi:</strong> Gerekirse yabancı dil desteği</li>
      </ul>
      
      <p>👉 <strong>Kontrol:</strong> Servis personeliyle önceden tanışın ve referanslarını sorun.</p>
      
      <h2>🚚 6. Lojistik ve Organizasyon Yeteneği</h2>
      <p>Etkinlik günü her şeyin sorunsuz ilerlemesi için lojistik planlama kritik öneme sahiptir.</p>
      
      <h3>Lojistik Değerlendirme Noktaları:</h3>
      <ul>
        <li><strong>Ulaşım:</strong> Etkinlik yerine ulaşım planlaması</li>
        <li><strong>Ekipman:</strong> Gerekli ekipmanların sağlanması</li>
        <li><strong>Kurulum:</strong> Hızlı ve düzenli kurulum</li>
        <li><strong>Zaman Yönetimi:</strong> Servis zamanlamasının doğru planlanması</li>
        <li><strong>Yedek Planlar:</strong> Olası aksilikler için alternatif çözümler</li>
      </ul>
      
      <p>👉 <strong>Önemli:</strong> Detaylı organizasyon planı isteyin ve her aşamayı kontrol edin.</p>
      
      <h2>📞 7. İletişim ve Müşteri Hizmetleri</h2>
      <p>Etkinlik öncesi, sırası ve sonrasında etkili iletişim, sorunsuz bir süreç için gereklidir.</p>
      
      <h3>İletişim Kalitesi Kriterleri:</h3>
      <ul>
        <li><strong>Erişilebilirlik:</strong> 7/24 iletişim imkanı</li>
        <li><strong>Yanıt Süresi:</strong> Sorulara hızlı ve detaylı yanıt</li>
        <li><strong>Şeffaflık:</strong> Süreç hakkında düzenli bilgilendirme</li>
        <li><strong>Esneklik:</strong> Son dakika değişikliklere uyum sağlama</li>
        <li><strong>Problem Çözme:</strong> Sorunlara hızlı ve etkili çözüm üretme</li>
      </ul>
      
      <p>👉 <strong>Test:</strong> İletişim kalitesini test etmek için farklı zamanlarda arayın ve sorular sorun.</p>
      
      <h2>📋 Kontrol Listesi</h2>
      <p>Firma seçimi yaparken kullanabileceğiniz pratik kontrol listesi:</p>
      
      <h3>Etkinlik Öncesi:</h3>
      <ul>
        <li>☐ Hijyen belgeleri kontrol edildi</li>
        <li>☐ Mutfak ziyaret edildi</li>
        <li>☐ Referanslarla konuşuldu</li>
        <li>☐ Detaylı fiyat teklifi alındı</li>
        <li>☐ Menü tadımı yapıldı</li>
        <li>☐ Servis personeli tanışıldı</li>
        <li>☐ Organizasyon planı detaylandırıldı</li>
        <li>☐ İletişim kanalları test edildi</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Antalya'da catering hizmeti alırken bu 7 kritere dikkat ederek, etkinliğinizin başarısını garanti altına alabilirsiniz. Likya Catering olarak, tüm bu kriterleri karşılayan profesyonel hizmet anlayışımızla Antalya'da güvenilir catering çözümleri sunuyoruz.</p>
      
      <p>👉 Etkinliğiniz için en uygun catering firmasını seçmek isterseniz, uzman ekibimizle iletişime geçin ve tüm sorularınızı yanıtlayalım!</p>
    `,
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
    content: `
      <p>Catering hizmeti alırken bütçe yönetimi, hem kaliteli hizmet almak hem de maliyetleri kontrol altında tutmak için kritik öneme sahiptir. Antalya'da düzenlediğiniz etkinliklerde bütçenizi verimli kullanmanın yollarını ve kaliteden ödün vermeden tasarruf etmenin ipuçlarını detaylı olarak ele alıyoruz.</p>
      
      <h2>💰 Bütçe Planlamasının Temel Prensipleri</h2>
      <p>Etkili bütçe yönetimi, etkinliğinizin başarısını doğrudan etkiler. İşte dikkat edilmesi gereken temel prensipler:</p>
      
      <h3>1. Toplam Bütçenin Belirlenmesi</h3>
      <ul>
        <li><strong>Etkinlik Türü:</strong> Düğün, kurumsal toplantı, özel davet</li>
        <li><strong>Davetli Sayısı:</strong> Kişi başı maliyet hesaplaması</li>
        <li><strong>Etkinlik Süresi:</strong> Tek öğün vs. tam gün hizmet</li>
        <li><strong>Lokasyon:</strong> Ulaşım ve lojistik maliyetleri</li>
      </ul>
      
      <h3>2. Bütçe Dağılımı</h3>
      <p>Genel olarak catering bütçesi şu şekilde dağıtılabilir:</p>
      <ul>
        <li><strong>%60-70:</strong> Yemek ve içecek maliyetleri</li>
        <li><strong>%15-20:</strong> Servis ve personel</li>
        <li><strong>%10-15:</strong> Lojistik ve ekipman</li>
        <li><strong>%5-10:</strong> Yedek bütçe (beklenmeyen giderler için)</li>
      </ul>
      
      <h2>🍽️ Menü Planlamasında Tasarruf Yöntemleri</h2>
      
      <h3>1. Mevsimsel Ürün Kullanımı</h3>
      <p>Mevsimsel ürünler hem daha taze hem de daha ekonomiktir.</p>
      
      <h4>Mevsimsel Menü Örnekleri:</h4>
      <ul>
        <li><strong>Yaz:</strong> Domates, salatalık, patlıcan, kabak, taze otlar</li>
        <li><strong>Kış:</strong> Lahana, havuç, karnabahar, pırasa, turp</li>
        <li><strong>İlkbahar:</strong> Enginar, bezelye, taze fasulye, kuşkonmaz</li>
        <li><strong>Sonbahar:</strong> Balkabağı, mantar, elma, armut</li>
      </ul>
      
      <p>👉 <strong>Tasarruf:</strong> Mevsimsel ürünler %20-30 daha ekonomik olabilir.</p>
      
      <h3>2. Akıllı Protein Seçimi</h3>
      <p>Protein kaynaklarının seçimi, maliyetin en büyük kısmını oluşturur.</p>
      
      <h4>Ekonomik Protein Alternatifleri:</h4>
      <ul>
        <li><strong>Baklagiller:</strong> Nohut, mercimek, fasulye (kişi başı 5-8 ₺)</li>
        <li><strong>Tavuk:</strong> But, kanat (kişi başı 15-25 ₺)</li>
        <li><strong>Balık:</strong> Hamsi, sardalya, çupra (kişi başı 20-35 ₺)</li>
        <li><strong>Kırmızı Et:</strong> Kıyma, kuşbaşı (kişi başı 25-40 ₺)</li>
      </ul>
      
      <h3>3. Porsiyon Optimizasyonu</h3>
      <p>Doğru porsiyon hesaplaması hem israfı önler hem de maliyeti düşürür.</p>
      
      <h4>Önerilen Porsiyon Miktarları:</h4>
      <ul>
        <li><strong>Et/Tavuk:</strong> 150-200 gr (kişi başı)</li>
        <li><strong>Pilav/Makarna:</strong> 100-150 gr (kişi başı)</li>
        <li><strong>Salata:</strong> 80-100 gr (kişi başı)</li>
        <li><strong>Çorba:</strong> 200-250 ml (kişi başı)</li>
      </ul>
      
      <h2>📊 Kişi Sayısına Göre Maliyet Optimizasyonu</h2>
      
      <h3>30-50 Kişilik Etkinlikler</h3>
      <ul>
        <li><strong>Ölçek Avantajı:</strong> Sınırlı, kişi başı maliyet yüksek</li>
        <li><strong>Önerilen Strateji:</strong> Kaliteli ama basit menü</li>
        <li><strong>Kişi Başı Hedef:</strong> 200-350 ₺</li>
      </ul>
      
      <h3>50-100 Kişilik Etkinlikler</h3>
      <ul>
        <li><strong>Ölçek Avantajı:</strong> Orta düzeyde</li>
        <li><strong>Önerilen Strateji:</strong> Çeşitlilik ve kalite dengesi</li>
        <li><strong>Kişi Başı Hedef:</strong> 150-280 ₺</li>
      </ul>
      
      <h3>100+ Kişilik Etkinlikler</h3>
      <ul>
        <li><strong>Ölçek Avantajı:</strong> Yüksek, toplu alım avantajı</li>
        <li><strong>Önerilen Strateji:</strong> Açık büfe, çeşitli seçenekler</li>
        <li><strong>Kişi Başı Hedef:</strong> 120-220 ₺</li>
      </ul>
      
      <h2>🎯 Etkinlik Türüne Göre Bütçe Stratejileri</h2>
      
      <h3>Düğün Catering'i</h3>
      <ul>
        <li><strong>Bütçe Oranı:</strong> Toplam düğün bütçesinin %30-40'ı</li>
        <li><strong>Tasarruf İpuçları:</strong> Mevsimsel menü, yerel ürünler</li>
        <li><strong>Öncelik:</strong> Kalite ve sunum</li>
      </ul>
      
      <h3>Kurumsal Etkinlikler</h3>
      <ul>
        <li><strong>Bütçe Oranı:</strong> Etkinlik bütçesinin %25-35'i</li>
        <li><strong>Tasarruf İpuçları:</strong> Paket menüler, toplu sözleşmeler</li>
        <li><strong>Öncelik:</strong> Verimlilik ve pratiklik</li>
      </ul>
      
      <h3>Özel Davetler</h3>
      <ul>
        <li><strong>Bütçe Oranı:</strong> Esnek, etkinlik önemine göre</li>
        <li><strong>Tasarruf İpuçları:</strong> Ev yapımı alternatifler</li>
        <li><strong>Öncelik:</strong> Kişiselleştirme</li>
      </ul>
      
      <h2>💡 Pratik Tasarruf İpuçları</h2>
      
      <h3>1. Menü Karışımı</h3>
      <ul>
        <li>Pahalı ve ucuz yemekleri karıştırın</li>
        <li>Bir ana yemek + çeşitli yan ürünler</li>
        <li>Ev yapımı tatlılar tercih edin</li>
      </ul>
      
      <h3>2. İçecek Stratejisi</h3>
      <ul>
        <li>Su, çay, kahve dahil paketler</li>
        <li>Alkollü içecekler için BYOB (Bring Your Own Bottle)</li>
        <li>Mevsimsel içecekler (yazın ayran, kışın sıcak içecekler)</li>
      </ul>
      
      <h3>3. Servis Optimizasyonu</h3>
      <ul>
        <li>Açık büfe yerine tabldot (daha ekonomik)</li>
        <li>Self-servis içecek köşeleri</li>
        <li>Minimal dekorasyon</li>
      </ul>
      
      <h3>4. Zamanlama Avantajları</h3>
      <ul>
        <li>Hafta içi etkinlikler (hafta sonuna göre %15-20 daha ucuz)</li>
        <li>Off-season dönemler (yaz düğünleri vs. kış düğünleri)</li>
        <li>Erken rezervasyon indirimleri</li>
      </ul>
      
      <h2>📋 Bütçe Kontrol Listesi</h2>
      
      <h3>Etkinlik Öncesi:</h3>
      <ul>
        <li>☐ Toplam bütçe belirlendi</li>
        <li>☐ Kişi başı maliyet hesaplandı</li>
        <li>☐ En az 3 farklı firmadan teklif alındı</li>
        <li>☐ Menü seçenekleri karşılaştırıldı</li>
        <li>☐ Gizli maliyetler sorgulandı</li>
        <li>☐ Ödeme planı belirlendi</li>
      </ul>
      
      <h3>Etkinlik Sırası:</h3>
      <ul>
        <li>☐ Porsiyon kontrolü yapıldı</li>
        <li>☐ İsraf önlendi</li>
        <li>☐ Ekstra siparişler kontrol edildi</li>
      </ul>
      
      <h3>Etkinlik Sonrası:</h3>
      <ul>
        <li>☐ Fatura detayları kontrol edildi</li>
        <li>☐ Maliyet analizi yapıldı</li>
        <li>☐ Gelecek etkinlikler için notlar alındı</li>
      </ul>
      
      <h2>🚫 Kaçınılması Gereken Hatalar</h2>
      
      <h3>1. Aşırı Menü Çeşitliliği</h3>
      <p>Çok fazla seçenek hem maliyeti artırır hem de israfa neden olur.</p>
      
      <h3>2. Son Dakika Değişiklikleri</h3>
      <p>Planlanan menüden sapmalar ek maliyetlere neden olur.</p>
      
      <h3>3. Gizli Maliyetleri Göz Ardı Etme</h3>
      <p>Servis, ulaşım, ekipman gibi ek maliyetleri unutmayın.</p>
      
      <h3>4. Kalite-Fiyat Dengesini Kaçırma</h3>
      <p>En ucuz seçenek her zaman en iyi değildir.</p>
      
      <h2>📌 Sonuç</h2>
      <p>Catering'de bütçe yönetimi, dikkatli planlama ve akıllı seçimlerle mümkündür. Kaliteden ödün vermeden maliyetleri optimize etmek, etkinliğinizin hem başarılı hem de ekonomik olmasını sağlar. Likya Catering olarak, her bütçeye uygun çözümler sunarak müşterilerimizin ihtiyaçlarını karşılıyoruz.</p>
      
      <p>👉 Bütçenize uygun en iyi catering çözümünü bulmak için uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>2025 yılı catering sektöründe Akdeniz mutfağının modern yorumları ve sürdürülebilir gastronomi anlayışı öne çıkıyor. Antalya'nın eşsiz coğrafi konumu ve zengin mutfak kültürü, bu trendlerin en güzel örneklerini sunuyor. İşte 2025'te catering dünyasında öne çıkan trendler ve Akdeniz esintili yenilikçi yaklaşımlar.</p>
      
      <h2>🌊 Akdeniz Mutfağının Modern Yorumları</h2>
      <p>Geleneksel Akdeniz lezzetleri, modern sunum teknikleri ve yaratıcı kombinasyonlarla yeniden yorumlanıyor.</p>
      
      <h3>1. Farm-to-Table (Çiftlikten Sofraya) Konsepti</h3>
      <p>Yerel üreticilerden taze malzemeler kullanarak, gıda millesini minimize eden yaklaşım.</p>
      
      <h4>Öne Çıkan Özellikler:</h4>
      <ul>
        <li><strong>Yerel Sebze ve Meyveler:</strong> Antalya'nın bereketli topraklarından</li>
        <li><strong>Organik Üretim:</strong> Kimyasal gübre ve pestisit kullanımı olmadan</li>
        <li><strong>Mevsimsel Menüler:</strong> Her mevsimin en taze ürünleri</li>
        <li><strong>Şeffaf Tedarik Zinciri:</strong> Üretici bilgilerinin menüde yer alması</li>
      </ul>
      
      <p>👉 <strong>Örnek Menü:</strong> Yerel domates, taze fesleğen, organik zeytinyağı ile hazırlanan caprese salatası</p>
      
      <h3>2. Plant-Based (Bitki Tabanlı) Akdeniz Lezzetleri</h3>
      <p>Geleneksel Akdeniz mutfağının bitki ağırlıklı yorumları, hem sağlıklı hem de lezzetli alternatifler sunuyor.</p>
      
      <h4>Popüler Seçenekler:</h4>
      <ul>
        <li><strong>Vegan Dolma:</strong> Bulgur ve sebze karışımı ile</li>
        <li><strong>Zeytinyağlı Enginar:</strong> Taze enginar ve limon ile</li>
        <li><strong>Humus Çeşitleri:</strong> Nohut, kırmızı mercimek, edamame</li>
        <li><strong>Sebze Graten:</strong> Patlıcan, kabak, domates katmanları</li>
      </ul>
      
      <h3>3. Fusion Akdeniz Mutfağı</h3>
      <p>Akdeniz lezzetlerinin dünya mutfaklarıyla harmanlanması.</p>
      
      <h4>Yaratıcı Kombinasyonlar:</h4>
      <ul>
        <li><strong>Akdeniz Sushi:</strong> Deniz ürünleri ve taze otlarla</li>
        <li><strong>Mediterranean Tacos:</strong> Zeytinyağlı sebzeler ve tzatziki</li>
        <li><strong>Akdeniz Ramen:</strong> Deniz ürünleri ve taze sebzelerle</li>
        <li><strong>Mediterranean Bowl:</strong> Quinoa, humus, taze sebzeler</li>
      </ul>
      
      <h2>🍃 Sürdürülebilir Gastronomi Trendleri</h2>
      <p>Çevre dostu yaklaşımlar ve sıfır atık prensipleri catering sektöründe öne çıkıyor.</p>
      
      <h3>1. Zero Waste (Sıfır Atık) Menüleri</h3>
      <p>Gıda israfını minimize eden yaratıcı yaklaşımlar.</p>
      
      <h4>Uygulama Örnekleri:</h4>
      <ul>
        <li><strong>Sebze Kabukları:</strong> Çorba ve sos yapımında kullanım</li>
        <li><strong>Ekmek Artıkları:</strong> Puding ve tatlı yapımında</li>
        <li><strong>Balık Kafaları:</strong> Balık suyu ve sos yapımında</li>
        <li><strong>Meyve Çekirdekleri:</strong> Aromatik çay ve infüzyonlarda</li>
      </ul>
      
      <h3>2. Biyobozunur Servis Malzemeleri</h3>
      <p>Plastik kullanımını azaltan çevre dostu alternatifler.</p>
      
      <h4>Kullanılan Malzemeler:</h4>
      <ul>
        <li><strong>Bambu Tabaklar:</strong> Dayanıklı ve doğal</li>
        <li><strong>Mısır Nişastası Çatal-Bıçak:</strong> Biyobozunur</li>
        <li><strong>Yaprak Tabaklar:</strong> Tamamen doğal</li>
        <li><strong>Cam Bardaklar:</strong> Yeniden kullanılabilir</li>
      </ul>
      
      <h2>🥘 Teknolojik Yenilikler</h2>
      <p>Teknoloji, catering hizmetlerinin kalitesini ve verimliliğini artırıyor.</p>
      
      <h3>1. Canlı İstasyonlar (Live Cooking Stations)</h3>
      <p>Misafirlerin önünde hazırlanan taze yemekler.</p>
      
      <h4>Popüler İstasyonlar:</h4>
      <ul>
        <li><strong>Pasta İstasyonu:</strong> Taze makarna ve soslar</li>
        <li><strong>Izgara İstasyonu:</strong> Taze balık ve etler</li>
        <li><strong>Salata İstasyonu:</strong> Kişiye özel salata hazırlama</li>
        <li><strong>Cocktail İstasyonu:</strong> Taze meyve ve otlarla kokteyller</li>
      </ul>
      
      <h3>2. QR Kod Menüler</h3>
      <p>Dijital menüler ve kişiselleştirilmiş öneriler.</p>
      
      <h4>Avantajları:</h4>
      <ul>
        <li>Anında menü güncellemeleri</li>
        <li>Beslenme bilgileri ve alerjen uyarıları</li>
        <li>Çoklu dil desteği</li>
        <li>Kişiselleştirilmiş öneriler</li>
      </ul>
      
      <h2>🍷 İçecek Trendleri</h2>
      <p>Alkolsüz içecekler ve yaratıcı kokteyller öne çıkıyor.</p>
      
      <h3>1. Mocktail (Alkolsüz Kokteyl) Kültürü</h3>
      <p>Sağlıklı ve lezzetli alkolsüz içecek alternatifleri.</p>
      
      <h4>Popüler Mocktail'ler:</h4>
      <ul>
        <li><strong>Mediterranean Breeze:</strong> Taze nane, limon, soda</li>
        <li><strong>Sunset Spritz:</strong> Nar suyu, taze otlar, soda</li>
        <li><strong>Herb Garden:</strong> Fesleğen, salatalık, limon</li>
        <li><strong>Citrus Burst:</strong> Portakal, greyfurt, taze otlar</li>
      </ul>
      
      <h3>2. Yerel İçecekler</h3>
      <p>Antalya'nın geleneksel içeceklerinin modern yorumları.</p>
      
      <h4>Öne Çıkan Seçenekler:</h4>
      <ul>
        <li><strong>Nar Şerbeti:</strong> Taze nar ile hazırlanan</li>
        <li><strong>Demirhindi:</strong> Geleneksel tatlı-ekşi içecek</li>
        <li><strong>Şalgam Suyu:</strong> Fermente sebze suyu</li>
        <li><strong>Ayran Çeşitleri:</strong> Taze otlarla aromalandırılmış</li>
      </ul>
      
      <h2>🎨 Sunum ve Dekorasyon Trendleri</h2>
      <p>Görsel çekicilik ve Instagram'a uygun sunumlar öne çıkıyor.</p>
      
      <h3>1. Minimalist Sunum</h3>
      <p>Sade ama etkileyici tabak sunumları.</p>
      
      <h4>Özellikler:</h4>
      <ul>
        <li>Beyaz ve doğal renkler</li>
        <li>Asimetrik düzenlemeler</li>
        <li>Yenilebilir çiçekler ve otlar</li>
        <li>Negatif alan kullanımı</li>
      </ul>
      
      <h3>2. Doğal Dekorasyon</h3>
      <p>Çevre dostu ve doğal malzemelerle dekorasyon.</p>
      
      <h4>Kullanılan Malzemeler:</h4>
      <ul>
        <li>Bambu ve rattan eşyalar</li>
        <li>Taze otlar ve çiçekler</li>
        <li>Doğal taş ve ahşap</li>
        <li>Yeniden kullanılabilir kumaşlar</li>
      </ul>
      
      <h2>🌍 Global Etkiler ve Yerel Uyarlamalar</h2>
      <p>Dünya mutfaklarından esinlenen ama yerel malzemelerle uyarlanan lezzetler.</p>
      
      <h3>1. Middle Eastern Fusion</h3>
      <ul>
        <li>Humus ve falafel çeşitleri</li>
        <li>Za'atar ve sumak aromaları</li>
        <li>Pita ve lavash ekmekleri</li>
      </ul>
      
      <h3>2. Asian-Mediterranean</h3>
      <ul>
        <li>Miso ve zeytinyağı kombinasyonları</li>
        <li>Wasabi ve taze otlar</li>
        <li>Noodle ve Akdeniz sebzeleri</li>
      </ul>
      
      <h2>📊 2025 Trend Öngörüleri</h2>
      
      <h3>Yükselen Trendler:</h3>
      <ul>
        <li><strong>Fermente Gıdalar:</strong> Kombucha, kimchi, kefir</li>
        <li><strong>Adaptojenler:</strong> Ashwagandha, reishi mantarı</li>
        <li><strong>Functional Foods:</strong> Probiyotik, prebiyotik içerikli</li>
        <li><strong>Hyperlocal:</strong> 50 km yarıçapındaki ürünler</li>
      </ul>
      
      <h3>Devam Eden Trendler:</h3>
      <ul>
        <li>Plant-based beslenme</li>
        <li>Sürdürülebilir paketleme</li>
        <li>Kişiselleştirilmiş menüler</li>
        <li>Teknoloji entegrasyonu</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>2025 yılı catering trendleri, sürdürülebilirlik, sağlık ve lezzet odaklı yaklaşımları birleştiriyor. Akdeniz mutfağının zenginliği, modern teknikler ve çevre dostu uygulamalarla harmanlanarak, misafirlere unutulmaz deneyimler sunuyor. Likya Catering olarak, bu trendleri takip ederek Antalya'nın eşsiz lezzetlerini modern bir yaklaşımla sunuyoruz.</p>
      
      <p>👉 2025 trendlerini etkinliğinizde deneyimlemek isterseniz, uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>Akdeniz diyeti, dünya çapında en sağlıklı beslenme modellerinden biri olarak kabul edilir. Antalya'nın bereketli toprakları ve Akdeniz'in eşsiz lezzetleri, bu sağlıklı beslenme tarzının en güzel örneklerini sunar. Bu yazıda Akdeniz diyetinin faydalarını, nasıl uygulanacağını ve catering menülerinde nasıl yer alabileceğini detaylı olarak ele alıyoruz.</p>
      
      <h2>🌿 Akdeniz Diyeti Nedir?</h2>
      <p>Akdeniz diyeti, geleneksel olarak Yunanistan, İtalya, İspanya ve Türkiye'nin Akdeniz kıyılarında yaşayan insanların beslenme alışkanlıklarından esinlenen bir beslenme modelidir.</p>
      
      <h3>Temel Bileşenler:</h3>
      <ul>
        <li><strong>Zeytinyağı:</strong> Ana yağ kaynağı</li>
        <li><strong>Taze Sebze ve Meyveler:</strong> Günlük beslenmenin temeli</li>
        <li><strong>Tam Tahıllar:</strong> Bulgur, makarna, ekmek</li>
        <li><strong>Baklagiller:</strong> Nohut, mercimek, fasulye</li>
        <li><strong>Balık ve Deniz Ürünleri:</strong> Haftada 2-3 kez</li>
        <li><strong>Az Miktarda Et:</strong> Özellikle kırmızı et</li>
        <li><strong>Süt Ürünleri:</strong> Yoğurt, peynir (orta miktarda)</li>
        <li><strong>Kuruyemiş ve Tohumlar:</strong> Ceviz, badem, fındık</li>
      </ul>
      
      <h2>💚 Sağlığa Faydaları</h2>
      
      <h3>1. Kalp Sağlığı</h3>
      <p>Akdeniz diyeti, kalp hastalıkları riskini önemli ölçüde azaltır.</p>
      
      <h4>Faydaları:</h4>
      <ul>
        <li>Kötü kolesterol (LDL) seviyesini düşürür</li>
        <li>İyi kolesterol (HDL) seviyesini artırır</li>
        <li>Kan basıncını düzenler</li>
        <li>Kalp krizi riskini %30'a kadar azaltır</li>
      </ul>
      
      <h3>2. Beyin Sağlığı</h3>
      <p>Akdeniz diyeti, bilişsel fonksiyonları korur ve Alzheimer riskini azaltır.</p>
      
      <h4>Faydaları:</h4>
      <ul>
        <li>Hafıza ve konsantrasyonu güçlendirir</li>
        <li>Demans riskini %40'a kadar azaltır</li>
        <li>Beyin hücrelerini korur</li>
        <li>Nörolojik yaşlanmayı yavaşlatır</li>
      </ul>
      
      <h3>3. Kilo Yönetimi</h3>
      <p>Sağlıklı kilo verme ve koruma için ideal bir beslenme modelidir.</p>
      
      <h4>Faydaları:</h4>
      <ul>
        <li>Metabolizmayı hızlandırır</li>
        <li>Tokluk hissini artırır</li>
        <li>Kan şekeri seviyelerini düzenler</li>
        <li>Yağ yakımını destekler</li>
      </ul>
      
      <h3>4. Kanser Önleme</h3>
      <p>Antioksidan açısından zengin besinler kanser riskini azaltır.</p>
      
      <h4>Faydaları:</h4>
      <ul>
        <li>Meme kanseri riskini %15 azaltır</li>
        <li>Kolon kanseri riskini %25 azaltır</li>
        <li>Prostat kanseri riskini %20 azaltır</li>
        <li>Genel kanser riskini %12 azaltır</li>
      </ul>
      
      <h2>🍽️ Günlük Hayatta Uygulama</h2>
      
      <h3>Kahvaltı Önerileri</h3>
      <ul>
        <li><strong>Tam tahıl ekmeği</strong> + zeytinyağı + domates</li>
        <li><strong>Yoğurt</strong> + taze meyve + ceviz</li>
        <li><strong>Omlet</strong> + taze otlar + peynir</li>
        <li><strong>Meyve salatası</strong> + badem + bal</li>
      </ul>
      
      <h3>Öğle Yemeği Önerileri</h3>
      <ul>
        <li><strong>Bulgur pilavı</strong> + sebze yemeği + salata</li>
        <li><strong>Balık ızgara</strong> + zeytinyağlı sebzeler</li>
        <li><strong>Mercimek köftesi</strong> + yeşil salata</li>
        <li><strong>Makarna</strong> + taze sebzeler + zeytinyağı</li>
      </ul>
      
      <h3>Akşam Yemeği Önerileri</h3>
      <ul>
        <li><strong>Zeytinyağlı dolma</strong> + yoğurt</li>
        <li><strong>Sebze graten</strong> + tam tahıl ekmek</li>
        <li><strong>Nohut yemeği</strong> + pilav + salata</li>
        <li><strong>Izgara sebzeler</strong> + humus + pita</li>
      </ul>
      
      <h2>🥗 Catering Menülerinde Akdeniz Diyeti</h2>
      
      <h3>1. Sağlıklı Başlangıçlar</h3>
      <ul>
        <li><strong>Caprese Salatası:</strong> Domates, mozzarella, fesleğen, zeytinyağı</li>
        <li><strong>Humus Tabağı:</strong> Nohut püresi, zeytinyağı, tahin</li>
        <li><strong>Zeytinyağlı Enginar:</strong> Taze enginar, limon, taze otlar</li>
        <li><strong>Mevsim Salatası:</strong> Karışık yeşillikler, zeytin, domates</li>
      </ul>
      
      <h3>2. Ana Yemek Seçenekleri</h3>
      <ul>
        <li><strong>Izgara Levrek:</strong> Taze balık, limon, taze otlar</li>
        <li><strong>Sebze Graten:</strong> Patlıcan, kabak, domates katmanları</li>
        <li><strong>Bulgur Pilavı:</strong> Tam tahıl bulgur, sebzeler</li>
        <li><strong>Zeytinyağlı Fasulye:</strong> Taze fasulye, domates, soğan</li>
      </ul>
      
      <h3>3. Sağlıklı Tatlılar</h3>
      <ul>
        <li><strong>Meyve Salatası:</strong> Mevsim meyveleri, bal, ceviz</li>
        <li><strong>Yoğurt Parfe:</strong> Yoğurt, meyve, granola</li>
        <li><strong>İncir Tatlısı:</strong> Taze incir, bal, ceviz</li>
        <li><strong>Revani:</strong> Şerbetli tatlı, fıstık</li>
      </ul>
      
      <h2>📊 Besin Değerleri ve Kalori Bilgileri</h2>
      
      <h3>Günlük Besin İhtiyaçları (2000 kalori):</h3>
      <ul>
        <li><strong>Karbonhidrat:</strong> %45-50 (225-250g)</li>
        <li><strong>Protein:</strong> %15-20 (75-100g)</li>
        <li><strong>Yağ:</strong> %30-35 (65-80g)</li>
        <li><strong>Lif:</strong> 25-35g</li>
        <li><strong>Su:</strong> 2-3 litre</li>
      </ul>
      
      <h3>Önemli Vitamin ve Mineraller:</h3>
      <ul>
        <li><strong>Omega-3:</strong> Balık, ceviz, keten tohumu</li>
        <li><strong>Antioksidanlar:</strong> Sebze, meyve, zeytinyağı</li>
        <li><strong>Folik Asit:</strong> Yeşil yapraklı sebzeler</li>
        <li><strong>Kalsiyum:</strong> Süt ürünleri, susam</li>
        <li><strong>Demir:</strong> Baklagiller, koyu yeşil sebzeler</li>
      </ul>
      
      <h2>🍷 İçecek Seçenekleri</h2>
      
      <h3>Sağlıklı İçecekler:</h3>
      <ul>
        <li><strong>Su:</strong> Günlük 2-3 litre</li>
        <li><strong>Yeşil Çay:</strong> Antioksidan açısından zengin</li>
        <li><strong>Ayran:</strong> Probiyotik içerikli</li>
        <li><strong>Taze Meyve Suları:</strong> Vitamin açısından zengin</li>
        <li><strong>Şarap:</strong> Günde 1-2 kadeh (kırmızı şarap tercih edilir)</li>
      </ul>
      
      <h2>🏃‍♀️ Yaşam Tarzı Önerileri</h2>
      
      <h3>1. Fiziksel Aktivite</h3>
      <ul>
        <li>Günde en az 30 dakika yürüyüş</li>
        <li>Haftada 2-3 kez kuvvet antrenmanı</li>
        <li>Yüzme, bisiklet gibi kardiyovasküler aktiviteler</li>
        <li>Yoga, pilates gibi esneklik egzersizleri</li>
      </ul>
      
      <h3>2. Stres Yönetimi</h3>
      <ul>
        <li>Meditasyon ve nefes egzersizleri</li>
        <li>Doğada zaman geçirme</li>
        <li>Hobiler ve yaratıcı aktiviteler</li>
        <li>Kaliteli uyku (7-8 saat)</li>
      </ul>
      
      <h3>3. Sosyal Bağlantılar</h3>
      <ul>
        <li>Aile ve arkadaşlarla düzenli buluşmalar</li>
        <li>Yemekleri birlikte yeme</li>
        <li>Sosyal aktivitelere katılım</li>
        <li>Topluluk etkinliklerine katılım</li>
      </ul>
      
      <h2>⚠️ Dikkat Edilmesi Gerekenler</h2>
      
      <h3>1. Porsiyon Kontrolü</h3>
      <p>Sağlıklı besinler de olsa, aşırı tüketimden kaçınılmalıdır.</p>
      
      <h3>2. Tuz Kullanımı</h3>
      <p>Günlük tuz tüketimi 5-6 gramı geçmemelidir.</p>
      
      <h3>3. İşlenmiş Gıdalar</h3>
      <p>Hazır gıdalar ve işlenmiş ürünlerden kaçınılmalıdır.</p>
      
      <h3>4. Kişisel İhtiyaçlar</h3>
      <p>Beslenme planı kişinin yaşı, cinsiyeti ve sağlık durumuna göre ayarlanmalıdır.</p>
      
      <h2>📌 Sonuç</h2>
      <p>Akdeniz diyeti, sadece bir beslenme modeli değil, aynı zamanda sağlıklı bir yaşam tarzıdır. Antalya'nın zengin mutfak kültürü, bu sağlıklı beslenme tarzının en güzel örneklerini sunar. Likya Catering olarak, Akdeniz diyetinin prensiplerini catering menülerimize entegre ederek, misafirlerimize hem lezzetli hem de sağlıklı seçenekler sunuyoruz.</p>
      
      <p>👉 Sağlıklı beslenme odaklı etkinlik menüleri için uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>Kurumsal catering, sadece çalışanların beslenme ihtiyaçlarını karşılamakla kalmaz, aynı zamanda şirket kültürünü güçlendiren, verimliliği artıran ve maliyetleri optimize eden stratejik bir yatırımdır. Antalya'da faaliyet gösteren şirketler için kurumsal catering'de verimliliği artıran 6 temel stratejiyi detaylı olarak ele alıyoruz.</p>
      
      <h2>📊 1. Veri Odaklı Menü Planlaması</h2>
      <p>Çalışan tercihlerini analiz ederek, hem memnuniyeti hem de maliyet verimliliğini artıran menüler oluşturmak.</p>
      
      <h3>Uygulama Yöntemleri:</h3>
      <ul>
        <li><strong>Anket ve Geri Bildirim:</strong> Düzenli çalışan anketleri</li>
        <li><strong>Tüketim Analizi:</strong> Hangi yemeklerin daha çok tercih edildiğini takip</li>
        <li><strong>Mevsimsel Adaptasyon:</strong> Mevsimlere göre menü çeşitliliği</li>
        <li><strong>Beslenme Tercihleri:</strong> Vegan, vejetaryen, glütensiz seçenekler</li>
      </ul>
      
      <h4>Örnek Veri Toplama:</h4>
      <ul>
        <li>Haftalık tüketim raporları</li>
        <li>Çalışan memnuniyet skorları</li>
        <li>İsraf oranları</li>
        <li>Maliyet analizi</li>
      </ul>
      
      <p>👉 <strong>Sonuç:</strong> Veri odaklı planlama ile %25 daha verimli menü oluşturma</p>
      
      <h2>⏰ 2. Zaman Yönetimi ve Operasyonel Verimlilik</h2>
      <p>Yemek servis süreçlerini optimize ederek, çalışanların zaman kaybını minimize etmek.</p>
      
      <h3>Optimizasyon Stratejileri:</h3>
      
      <h4>A. Önceden Hazırlık (Prep Work):</h4>
      <ul>
        <li>Sabah erken saatlerde hazırlık</li>
        <li>Önceden pişirilmiş yemekler</li>
        <li>Hızlı servis için düzenleme</li>
        <li>Soğuk zincir korunması</li>
      </ul>
      
      <h4>B. Servis Süreçleri:</h4>
      <ul>
        <li>Self-servis istasyonları</li>
        <li>Hızlı ödeme sistemleri</li>
        <li>Çoklu servis noktaları</li>
        <li>Peak saat planlaması</li>
      </ul>
      
      <h4>C. Zaman Çizelgesi:</h4>
      <ul>
        <li><strong>11:30-12:00:</strong> Hazırlık ve kurulum</li>
        <li><strong>12:00-13:00:</strong> Ana servis saati</li>
        <li><strong>13:00-13:30:</strong> Temizlik ve toparlama</li>
        <li><strong>13:30-14:00:</strong> Raporlama ve analiz</li>
      </ul>
      
      <p>👉 <strong>Sonuç:</strong> Servis süresini %40 azaltma ve çalışan memnuniyetini artırma</p>
      
      <h2>💰 3. Maliyet Optimizasyonu ve Bütçe Yönetimi</h2>
      <p>Kaliteli hizmet sunarken maliyetleri kontrol altında tutmak.</p>
      
      <h3>Maliyet Azaltma Stratejileri:</h3>
      
      <h4>A. Tedarik Zinciri Optimizasyonu:</h4>
      <ul>
        <li>Yerel tedarikçilerle anlaşmalar</li>
        <li>Toplu alım avantajları</li>
        <li>Mevsimsel ürün kullanımı</li>
        <li>Uzun vadeli sözleşmeler</li>
      </ul>
      
      <h4>B. İsraf Önleme:</h4>
      <ul>
        <li>Porsiyon kontrolü</li>
        <li>Artık yemek değerlendirme</li>
        <li>Dinamik menü planlaması</li>
        <li>Çalışan eğitimi</li>
      </ul>
      
      <h4>C. Bütçe Dağılımı:</h4>
      <ul>
        <li><strong>%60:</strong> Malzeme maliyetleri</li>
        <li><strong>%20:</strong> Personel maliyetleri</li>
        <li><strong>%15:</strong> Operasyonel maliyetler</li>
        <li><strong>%5:</strong> Yedek bütçe</li>
      </ul>
      
      <p>👉 <strong>Sonuç:</strong> %15-20 maliyet tasarrufu sağlama</p>
      
      <h2>👥 4. Çalışan Memnuniyeti ve Motivasyon</h2>
      <p>Kaliteli yemek hizmeti ile çalışan motivasyonunu ve bağlılığını artırmak.</p>
      
      <h3>Memnuniyet Artırma Stratejileri:</h3>
      
      <h4>A. Menü Çeşitliliği:</h4>
      <ul>
        <li>Günlük değişen menüler</li>
        <li>Farklı mutfak kültürleri</li>
        <li>Özel günler için özel menüler</li>
        <li>Sağlıklı seçenekler</li>
      </ul>
      
      <h4>B. Kişiselleştirme:</h4>
      <ul>
        <li>Beslenme tercihlerine göre seçenekler</li>
        <li>Alerji ve intolerans desteği</li>
        <li>Özel isteklerin karşılanması</li>
        <li>Feedback sistemleri</li>
      </ul>
      
      <h4>C. Sosyal Etkileşim:</h4>
      <ul>
        <li>Yemek saatlerinde sosyal ortam</li>
        <li>Takım yemekleri</li>
        <li>Özel etkinlikler</li>
        <li>Çalışan tanışma fırsatları</li>
      </ul>
      
      <h4>D. Memnuniyet Ölçümü:</h4>
      <ul>
        <li>Haftalık anketler</li>
        <li>Online feedback sistemleri</li>
        <li>Odak grup toplantıları</li>
        <li>Net Promoter Score (NPS)</li>
      </ul>
      
      <p>👉 <strong>Sonuç:</strong> Çalışan memnuniyetinde %30 artış</p>
      
      <h2>🌱 5. Sürdürülebilirlik ve Çevre Dostu Uygulamalar</h2>
      <p>Çevre dostu yaklaşımlarla hem sosyal sorumluluk hem de maliyet avantajı sağlamak.</p>
      
      <h3>Sürdürülebilirlik Stratejileri:</h3>
      
      <h4>A. Gıda Sürdürülebilirliği:</h4>
      <ul>
        <li>Yerel ve organik ürünler</li>
        <li>Mevsimsel menü planlaması</li>
        <li>Gıda israfını minimize etme</li>
        <li>Composting uygulamaları</li>
      </ul>
      
      <h4>B. Paketleme ve Servis:</h4>
      <ul>
        <li>Biyobozunur malzemeler</li>
        <li>Yeniden kullanılabilir ekipmanlar</li>
        <li>Plastik kullanımını azaltma</li>
        <li>Geri dönüşüm programları</li>
      </ul>
      
      <h4>C. Enerji Verimliliği:</h4>
      <ul>
        <li>Enerji tasarruflu ekipmanlar</li>
        <li>LED aydınlatma</li>
        <li>Su tasarrufu</li>
        <li>Karbon ayak izi azaltma</li>
      </ul>
      
      <h4>D. Sosyal Sorumluluk:</h4>
      <ul>
        <li>Yerel üreticileri destekleme</li>
        <li>Adil ticaret uygulamaları</li>
        <li>Toplumsal fayda projeleri</li>
        <li>Şeffaf tedarik zinciri</li>
      </ul>
      
      <p>👉 <strong>Sonuç:</strong> %25 çevresel etki azaltma ve marka değeri artışı</p>
      
      <h2>📱 6. Teknoloji Entegrasyonu ve Dijitalleşme</h2>
      <p>Modern teknolojilerle catering süreçlerini optimize etmek.</p>
      
      <h3>Teknoloji Çözümleri:</h3>
      
      <h4>A. Dijital Menü Sistemleri:</h4>
      <ul>
        <li>QR kod menüler</li>
        <li>Mobil uygulama entegrasyonu</li>
        <li>Online sipariş sistemleri</li>
        <li>Gerçek zamanlı menü güncellemeleri</li>
      </ul>
      
      <h4>B. Ödeme Sistemleri:</h4>
      <ul>
        <li>NFC ödeme</li>
        <li>Mobil cüzdan entegrasyonu</li>
        <li>Kurumsal kart sistemleri</li>
        <li>Otomatik faturalandırma</li>
      </ul>
      
      <h4>C. Veri Analizi:</h4>
      <ul>
        <li>Yapay zeka destekli menü planlama</li>
        <li>Predictive analytics</li>
        <li>Gerçek zamanlı raporlama</li>
        <li>Müşteri davranış analizi</li>
      </ul>
      
      <h4>D. Operasyonel Yönetim:</h4>
      <ul>
        <li>Stok yönetim sistemleri</li>
        <li>Personel planlama yazılımları</li>
        <li>Kalite kontrol sistemleri</li>
        <li>Müşteri ilişkileri yönetimi (CRM)</li>
      </ul>
      
      <h4>E. İletişim ve Feedback:</h4>
      <ul>
        <li>WhatsApp Business entegrasyonu</li>
        <li>Otomatik bildirimler</li>
        <li>Online feedback formları</li>
        <li>Sosyal medya entegrasyonu</li>
      </ul>
      
      <p>👉 <strong>Sonuç:</strong> %35 operasyonel verimlilik artışı</p>
      
      <h2>📊 Başarı Metrikleri ve KPI'lar</h2>
      
      <h3>Operasyonel Metrikler:</h3>
      <ul>
        <li><strong>Servis Süresi:</strong> Ortalama 5 dakika altında</li>
        <li><strong>Müşteri Memnuniyeti:</strong> %90 ve üzeri</li>
        <li><strong>İsraf Oranı:</strong> %5'in altında</li>
        <li><strong>Maliyet Kontrolü:</strong> Bütçe içinde kalma</li>
      </ul>
      
      <h3>Finansal Metrikler:</h3>
      <ul>
        <li><strong>Kişi Başı Maliyet:</strong> Hedef bütçe içinde</li>
        <li><strong>ROI:</strong> Yatırım geri dönüş oranı</li>
        <li><strong>Maliyet Tasarrufu:</strong> Yıllık %15-20</li>
        <li><strong>Gelir Artışı:</strong> Çalışan bağlılığı etkisi</li>
      </ul>
      
      <h3>Kalite Metrikleri:</h3>
      <ul>
        <li><strong>Hijyen Skorları:</strong> %100 uyumluluk</li>
        <li><strong>Beslenme Kalitesi:</strong> Uzman onayı</li>
        <li><strong>Tedarikçi Performansı:</strong> Düzenli değerlendirme</li>
        <li><strong>Süreç İyileştirme:</strong> Sürekli optimizasyon</li>
      </ul>
      
      <h2>📋 Uygulama Planı</h2>
      
      <h3>1. Aşama - Hazırlık (1-2 ay):</h3>
      <ul>
        <li>Mevcut durum analizi</li>
        <li>Hedef belirleme</li>
        <li>Ekip oluşturma</li>
        <li>Bütçe planlaması</li>
      </ul>
      
      <h3>2. Aşama - Pilot Uygulama (2-3 ay):</h3>
      <ul>
        <li>Küçük ölçekli test</li>
        <li>Feedback toplama</li>
        <li>Süreç iyileştirme</li>
        <li>Eğitim programları</li>
      </ul>
      
      <h3>3. Aşama - Tam Uygulama (3-6 ay):</h3>
      <ul>
        <li>Tüm departmanlara yaygınlaştırma</li>
        <li>Sürekli izleme</li>
        <li>Performans değerlendirme</li>
        <li>Optimizasyon</li>
      </ul>
      
      <h3>4. Aşama - Sürekli İyileştirme (Devam eden):</h3>
      <ul>
        <li>Düzenli analiz</li>
        <li>Yeni trend takibi</li>
        <li>Teknoloji güncellemeleri</li>
        <li>Müşteri geri bildirimleri</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Kurumsal catering'de verimliliği artırmak, sadece yemek servisi değil, aynı zamanda stratejik bir yatırımdır. Bu 6 strateji ile hem çalışan memnuniyetini artırabilir, hem maliyetleri optimize edebilir, hem de şirket kültürünü güçlendirebilirsiniz. Likya Catering olarak, bu stratejileri uygulayarak Antalya'daki şirketlere en verimli catering çözümlerini sunuyoruz.</p>
      
      <p>👉 Kurumsal catering verimliliğinizi artırmak için uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>Antalya'nın eşsiz doğası, açık hava etkinlikleri için mükemmel bir ortam sunar. Sahil kenarında düğünler, dağlarda kurumsal etkinlikler veya parklarda özel davetler - her biri için özel catering planlaması gereklidir. Bu yazıda açık hava etkinliklerinde başarılı catering organizasyonu için gerekli tüm detayları ele alıyoruz.</p>
      
      <h2>🌤️ Hava Koşullarına Göre Planlama</h2>
      <p>Açık hava etkinliklerinde en kritik faktör hava durumudur. Her mevsim için farklı stratejiler geliştirmek gerekir.</p>
      
      <h3>Yaz Ayları (Haziran-Eylül):</h3>
      <ul>
        <li><strong>Sıcaklık Kontrolü:</strong> Soğuk içecekler, dondurma, meyve</li>
        <li><strong>Gölge Alanlar:</strong> Çadır ve şemsiye düzenlemeleri</li>
        <li><strong>Hızlı Bozulan Gıdalar:</strong> Soğuk zincir korunması</li>
        <li><strong>Su Tüketimi:</strong> Artan su ihtiyacı planlaması</li>
      </ul>
      
      <h3>Kış Ayları (Aralık-Şubat):</h3>
      <ul>
        <li><strong>Sıcak İçecekler:</strong> Çay, kahve, sıcak çikolata</li>
        <li><strong>Isıtıcı Sistemler:</strong> Yemeklerin sıcak kalması</li>
        <li><strong>Kapalı Alanlar:</strong> Alternatif mekan planlaması</li>
        <li><strong>Rüzgar Koruması:</strong> Yemek servis alanlarının korunması</li>
      </ul>
      
      <h2>🏖️ Lokasyon Türlerine Göre Catering</h2>
      
      <h3>1. Sahil Kenarı Etkinlikleri</h3>
      <ul>
        <li><strong>Deniz Ürünleri:</strong> Taze balık, karides, midye</li>
        <li><strong>Hafif Menüler:</strong> Salatalar, meze tabakları</li>
        <li><strong>Rüzgar Koruması:</strong> Ağır tabaklar, sabit masa düzenleri</li>
        <li><strong>Su Temini:</strong> Tuzlu hava etkisi göz önünde bulundurma</li>
      </ul>
      
      <h3>2. Dağ ve Doğa Etkinlikleri</h3>
      <ul>
        <li><strong>Enerji Verici Yemekler:</strong> Karbonhidrat ağırlıklı menüler</li>
        <li><strong>Taşınabilir Ekipmanlar:</strong> Hafif ve dayanıklı malzemeler</li>
        <li><strong>Su Kaynakları:</strong> Temiz su temini planlaması</li>
        <li><strong>Atık Yönetimi:</strong> Çevre dostu paketleme</li>
      </ul>
      
      <h3>3. Park ve Bahçe Etkinlikleri</h3>
      <ul>
        <li><strong>Çeşitli Menüler:</strong> Her yaş grubuna uygun seçenekler</li>
        <li><strong>Oyun Alanları:</strong> Çocuk dostu menüler</li>
        <li><strong>Doğal Gölgeler:</strong> Ağaç altı servis alanları</li>
        <li><strong>Park Kuralları:</strong> Yerel yönetmeliklere uyum</li>
      </ul>
      
      <h2>🚚 Lojistik ve Ekipman Planlaması</h2>
      
      <h3>Gerekli Ekipmanlar:</h3>
      <ul>
        <li><strong>Mutfak Ekipmanları:</strong> Portatif ocaklar, soğutucular</li>
        <li><strong>Servis Malzemeleri:</strong> Tabak, çatal, bıçak, bardak</li>
        <li><strong>Masa ve Sandalyeler:</strong> Dayanıklı ve hafif modeller</li>
        <li><strong>Çadır ve Şemsiyeler:</strong> Hava koşullarına göre</li>
        <li><strong>Elektrik ve Su:</strong> Jeneratör, su tankı</li>
      </ul>
      
      <h3>Ulaşım Planlaması:</h3>
      <ul>
        <li><strong>Araç Seçimi:</strong> Yol durumuna uygun araçlar</li>
        <li><strong>Yükleme Sırası:</strong> Öncelikli malzemeler</li>
        <li><strong>Yedek Planlar:</strong> Alternatif ulaşım yolları</li>
        <li><strong>Zaman Planlaması:</strong> Erken varış ve kurulum</li>
      </ul>
      
      <h2>🍽️ Menü Seçimi ve Hazırlık</h2>
      
      <h3>Açık Hava İçin İdeal Menüler:</h3>
      
      <h4>Kokteyl Menü:</h4>
      <ul>
        <li>Kanepeler ve atıştırmalıklar</li>
        <li>Soğuk mezeler</li>
        <li>Mini sandviçler</li>
        <li>Meyve tabakları</li>
      </ul>
      
      <h4>Barbekü Menü:</h4>
      <ul>
        <li>Izgara et ve tavuk</li>
        <li>Sebze şişleri</li>
        <li>Patates salatası</li>
        <li>Taze ekmek</li>
      </ul>
      
      <h4>Picnic Menü:</h4>
      <ul>
        <li>Sandviç çeşitleri</li>
        <li>Salata tabakları</li>
        <li>Meyve ve kuruyemiş</li>
        <li>Soğuk içecekler</li>
      </ul>
      
      <h2>⚠️ Güvenlik ve Hijyen</h2>
      
      <h3>Gıda Güvenliği:</h3>
      <ul>
        <li><strong>Soğuk Zincir:</strong> Soğutucu ve buz kullanımı</li>
        <li><strong>Hijyen Standartları:</strong> El yıkama istasyonları</li>
        <li><strong>Atık Yönetimi:</strong> Çöp toplama ve bertaraf</li>
        <li><strong>Personel Sağlığı:</strong> Sağlık belgeleri ve eğitim</li>
      </ul>
      
      <h3>Güvenlik Önlemleri:</h3>
      <ul>
        <li><strong>İlk Yardım:</strong> Sağlık personeli ve malzemeleri</li>
        <li><strong>Yangın Güvenliği:</strong> Yangın söndürücüler</li>
        <li><strong>Elektrik Güvenliği:</strong> Güvenli kablolama</li>
        <li><strong>Hava Durumu:</strong> Ani değişimlere hazırlık</li>
      </ul>
      
      <h2>📱 Teknoloji ve İletişim</h2>
      
      <h3>Gerekli Teknolojiler:</h3>
      <ul>
        <li><strong>İletişim:</strong> Walkie-talkie, cep telefonu</li>
        <li><strong>Elektrik:</strong> Jeneratör, uzatma kabloları</li>
        <li><strong>Işıklandırma:</strong> LED ışıklar, projektörler</li>
        <li><strong>Ses Sistemi:</strong> Mikrofon, hoparlör</li>
      </ul>
      
      <h2>💰 Bütçe Planlaması</h2>
      
      <h3>Ek Maliyetler:</h3>
      <ul>
        <li><strong>Ekipman Kiralama:</strong> %20-30 ek maliyet</li>
        <li><strong>Ulaşım:</strong> Yakıt ve araç kiralama</li>
        <li><strong>Personel:</strong> Ekstra çalışma saatleri</li>
        <li><strong>Güvenlik:</strong> İlk yardım ve güvenlik önlemleri</li>
      </ul>
      
      <h2>📋 Kontrol Listesi</h2>
      
      <h3>Etkinlik Öncesi:</h3>
      <ul>
        <li>☐ Hava durumu kontrol edildi</li>
        <li>☐ Lokasyon ziyaret edildi</li>
        <li>☐ Ekipman listesi hazırlandı</li>
        <li>☐ Menü seçimi yapıldı</li>
        <li>☐ Ulaşım planlandı</li>
        <li>☐ Yedek planlar hazırlandı</li>
      </ul>
      
      <h3>Etkinlik Günü:</h3>
      <ul>
        <li>☐ Erken varış yapıldı</li>
        <li>☐ Ekipman kuruldu</li>
        <li>☐ Hijyen kontrolleri yapıldı</li>
        <li>☐ Personel görevlendirildi</li>
        <li>☐ Güvenlik önlemleri alındı</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Açık hava etkinliklerinde başarılı catering organizasyonu, detaylı planlama ve esnek yaklaşım gerektirir. Antalya'nın doğal güzelliklerini en iyi şekilde değerlendirerek, misafirlerinize unutulmaz deneyimler sunabilirsiniz. Likya Catering olarak, açık hava etkinlikleriniz için profesyonel çözümler sunuyoruz.</p>
      
      <p>👉 Açık hava etkinliğiniz için en uygun catering çözümünü planlamak isterseniz, uzman ekibimizle iletişime geçin!</p>
    `,
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
    content: `
      <p>Antalya'da düğün catering fiyatları, birçok faktöre bağlı olarak değişiklik gösterir. Doğru bütçe planlaması yapabilmek için bu faktörleri iyi anlamak ve etkinlik öncesi detaylı bir analiz yapmak gerekir. Bu yazıda düğün catering fiyatlarını etkileyen 5 temel faktörü detaylı olarak ele alıyoruz.</p>
      
      <h2>👥 1. Davetli Sayısı ve Ölçek</h2>
      <p>Davetli sayısı, catering fiyatlarını etkileyen en önemli faktördür. Ölçek ekonomisi prensiplerine göre fiyatlandırma yapılır.</p>
      
      <h3>Fiyat Etkisi:</h3>
      <ul>
        <li><strong>50 kişi altı:</strong> Kişi başı +%20-30 ek maliyet</li>
        <li><strong>50-100 kişi:</strong> Standart fiyatlandırma</li>
        <li><strong>100-200 kişi:</strong> %5-10 indirim</li>
        <li><strong>200+ kişi:</strong> %10-15 indirim</li>
      </ul>
      
      <h3>Ölçek Avantajları:</h3>
      <ul>
        <li>Toplu malzeme alımı</li>
        <li>Personel verimliliği</li>
        <li>Ekipman kullanım optimizasyonu</li>
        <li>Lojistik maliyet dağılımı</li>
      </ul>
      
      <h2>🍽️ 2. Menü Seçimi ve Kalitesi</h2>
      <p>Seçilen menü türü ve kullanılan malzemelerin kalitesi, fiyatı doğrudan etkiler.</p>
      
      <h3>Menü Türleri ve Fiyat Aralıkları:</h3>
      
      <h4>Standart Menü (Kişi başı 400-600 ₺):</h4>
      <ul>
        <li>Çorba + ana yemek + pilav + salata + tatlı</li>
        <li>Geleneksel Türk mutfağı</li>
        <li>Yerel malzemeler</li>
        <li>Basit sunum</li>
      </ul>
      
      <h4>Gurme Menü (Kişi başı 700-1000 ₺):</h4>
      <ul>
        <li>Özel malzemeler ve teknikler</li>
        <li>Deniz ürünleri ve et çeşitleri</li>
        <li>Profesyonel sunum</li>
        <li>Canlı istasyonlar</li>
      </ul>
      
      <h4>Lüks Menü (Kişi başı 1000+ ₺):</h4>
      <ul>
        <li>İthal malzemeler</li>
        <li>Özel şef hizmeti</li>
        <li>Kişiye özel menüler</li>
        <li>Premium içecekler</li>
      </ul>
      
      <h2>📍 3. Lokasyon ve Ulaşım</h2>
      <p>Düğün mekanının konumu ve ulaşım zorluğu, ek maliyetlere neden olabilir.</p>
      
      <h3>Lokasyon Türleri:</h3>
      
      <h4>Şehir Merkezi (Ek maliyet: 0%):</h4>
      <ul>
        <li>Kolay ulaşım</li>
        <li>Altyapı mevcut</li>
        <li>Personel ulaşımı kolay</li>
        <li>Ekipman taşıma maliyeti düşük</li>
      </ul>
      
      <h4>İlçe Merkezleri (Ek maliyet: %5-10):</h4>
      <ul>
        <li>Orta mesafe ulaşım</li>
        <li>Yakıt maliyeti</li>
        <li>Personel ulaşım ücreti</li>
        <li>Ekipman taşıma</li>
      </ul>
      
      <h4>Uzak Lokasyonlar (Ek maliyet: %15-25):</h4>
      <ul>
        <li>Kaş, Kalkan, Kemer gibi bölgeler</li>
        <li>Yüksek yakıt maliyeti</li>
        <li>Personel konaklama</li>
        <li>Ekipman kiralama</li>
        <li>Altyapı eksiklikleri</li>
      </ul>
      
      <h2>👨‍🍳 4. Servis Ekibi ve Personel</h2>
      <p>Servis kalitesi ve personel sayısı, fiyatlandırmada önemli rol oynar.</p>
      
      <h3>Personel Gereksinimleri:</h3>
      
      <h4>Standart Servis (50-100 kişi için):</h4>
      <ul>
        <li>1 şef + 2 yardımcı</li>
        <li>3-4 servis personeli</li>
        <li>1 temizlik personeli</li>
        <li>Toplam: 6-7 kişi</li>
      </ul>
      
      <h4>Premium Servis (100+ kişi için):</h4>
      <ul>
        <li>1 baş şef + 2 şef</li>
        <li>6-8 servis personeli</li>
        <li>2 temizlik personeli</li>
        <li>1 koordinatör</li>
        <li>Toplam: 10-12 kişi</li>
      </ul>
      
      <h3>Personel Maliyetleri:</h3>
      <ul>
        <li><strong>Şef:</strong> 800-1500 ₺/gün</li>
        <li><strong>Servis Personeli:</strong> 300-500 ₺/gün</li>
        <li><strong>Yardımcı Personel:</strong> 250-400 ₺/gün</li>
        <li><strong>Ulaşım ve Yemek:</strong> Kişi başı 50-100 ₺</li>
      </ul>
      
      <h2>🎨 5. Dekorasyon ve Ek Hizmetler</h2>
      <p>Dekorasyon ve ek hizmetler, toplam maliyeti önemli ölçüde artırabilir.</p>
      
      <h3>Dekorasyon Seçenekleri:</h3>
      
      <h4>Minimal Dekorasyon (Kişi başı 50-100 ₺):</h4>
      <ul>
        <li>Basit masa düzeni</li>
        <li>Temel çiçek süslemeleri</li>
        <li>Standart masa örtüleri</li>
        <li>Basit ışıklandırma</li>
      </ul>
      
      <h4>Orta Seviye Dekorasyon (Kişi başı 100-200 ₺):</h4>
      <ul>
        <li>Özel masa düzenleri</li>
        <li>Çiçek aranjmanları</li>
        <li>Özel masa örtüleri</li>
        <li>LED ışıklandırma</li>
        <li>Dekoratif objeler</li>
      </ul>
      
      <h4>Lüks Dekorasyon (Kişi başı 200+ ₺):</h4>
      <ul>
        <li>Özel tasarım dekorasyon</li>
        <li>Canlı çiçek aranjmanları</li>
        <li>Premium masa düzenleri</li>
        <li>Profesyonel ışıklandırma</li>
        <li>Özel dekoratif objeler</li>
      </ul>
      
      <h3>Ek Hizmetler:</h3>
      <ul>
        <li><strong>Canlı Müzik:</strong> 2000-5000 ₺</li>
        <li><strong>Fotoğraf/Video:</strong> 3000-8000 ₺</li>
        <li><strong>Çiçek Aranjmanı:</strong> 1000-3000 ₺</li>
        <li><strong>Özel Pasta:</strong> 500-2000 ₺</li>
        <li><strong>İçecek Barı:</strong> 50-150 ₺/kişi</li>
      </ul>
      
      <h2>💰 Toplam Maliyet Hesaplama</h2>
      
      <h3>Örnek Hesaplama (100 kişilik düğün):</h3>
      
      <h4>Standart Paket:</h4>
      <ul>
        <li>Menü: 100 × 500 ₺ = 50.000 ₺</li>
        <li>Personel: 7.000 ₺</li>
        <li>Lojistik: 3.000 ₺</li>
        <li>Dekorasyon: 8.000 ₺</li>
        <li><strong>Toplam: 68.000 ₺</strong></li>
      </ul>
      
      <h4>Premium Paket:</h4>
      <ul>
        <li>Menü: 100 × 800 ₺ = 80.000 ₺</li>
        <li>Personel: 12.000 ₺</li>
        <li>Lojistik: 5.000 ₺</li>
        <li>Dekorasyon: 15.000 ₺</li>
        <li><strong>Toplam: 112.000 ₺</strong></li>
      </ul>
      
      <h2>💡 Tasarruf İpuçları</h2>
      
      <h3>Maliyet Azaltma Stratejileri:</h3>
      <ul>
        <li><strong>Mevsimsel Menü:</strong> %15-20 tasarruf</li>
        <li><strong>Hafta İçi Düğün:</strong> %10-15 indirim</li>
        <li><strong>Erken Rezervasyon:</strong> %5-10 indirim</li>
        <li><strong>Paket Hizmetler:</strong> %10-20 tasarruf</li>
        <li><strong>Yerel Malzemeler:</strong> %10-15 tasarruf</li>
      </ul>
      
      <h2>📋 Kontrol Listesi</h2>
      
      <h3>Fiyat Karşılaştırması:</h3>
      <ul>
        <li>☐ En az 3 farklı firmadan teklif alındı</li>
        <li>☐ Detaylı fiyat listesi incelendi</li>
        <li>☐ Gizli maliyetler sorgulandı</li>
        <li>☐ Ek hizmetler fiyatlandırıldı</li>
        <li>☐ Ödeme koşulları belirlendi</li>
        <li>☐ Yedek bütçe ayrıldı</li>
      </ul>
      
      <h2>📌 Sonuç</h2>
      <p>Düğün catering fiyatları, birçok faktöre bağlı olarak değişir. Doğru planlama ve detaylı analiz ile hem kaliteli hizmet alabilir hem de bütçenizi optimize edebilirsiniz. Likya Catering olarak, şeffaf fiyatlandırma ve kaliteli hizmet anlayışımızla Antalya'da düğün catering çözümleri sunuyoruz.</p>
      
      <p>👉 Düğününüz için en uygun fiyat ve kalite dengesini bulmak isterseniz, uzman ekibimizle iletişime geçin!</p>
    `,
    author: "Şef Antonio",
    date: "2024-12-20",
    category: "Düğün & Etkinlik",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/14457553/pexels-photo-14457553.jpeg",
    slug: "antalya-dugun-catering-fiyatlarini-etkileyen-faktorler"
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-title text-likya-primary mb-4">Blog Yazısı Bulunamadı</h1>
          <p className="text-likya-text-dark mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link href="/blog" className="bg-likya-primary text-white px-6 py-3 rounded-lg hover:bg-likya-secondary transition-colors">
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${post.image}")`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-likya-primary text-white px-4 py-2 rounded-full text-sm font-body mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl sm:text-6xl font-title text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-likya-primary hover:text-likya-secondary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Tüm Blog Yazılarına Dön
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
