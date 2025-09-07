# E-posta Bildirimi Kurulum Rehberi

Bu rehber, Likya Catering web sitesindeki teklif formundan gelen talepleri e-posta ile alabilmeniz için gerekli kurulum adımlarını içerir.

## 🚀 Hızlı Kurulum

### 1. .env.local Dosyası Oluşturun

Proje ana dizininde `.env.local` dosyası oluşturun ve aşağıdaki içeriği ekleyin:

```env
# E-posta Konfigürasyonu
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
MAIL_TO=info@likyacatering.com
```

### 2. Gmail Uygulama Şifresi Oluşturun

Gmail kullanıyorsanız, "Uygulama Şifresi" oluşturmanız gerekiyor:

1. [Google Hesap Ayarları](https://myaccount.google.com/) sayfasına gidin
2. Sol menüden "Güvenlik" seçin
3. "2 Adımlı Doğrulama"yı etkinleştirin (eğer etkin değilse)
4. "Uygulama Şifreleri" bölümüne gidin
5. "Uygulama Seç" > "Diğer (Özel ad)" > "Likya Catering" yazın
6. Oluşturulan 16 haneli şifreyi kopyalayın
7. Bu şifreyi `.env.local` dosyasındaki `EMAIL_PASS` alanına yapıştırın

### 3. Diğer E-posta Sağlayıcıları

#### Outlook/Hotmail
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yandex Mail
```env
EMAIL_USER=your-email@yandex.com
EMAIL_PASS=your-password
SMTP_HOST=smtp.yandex.com
SMTP_PORT=465
SMTP_SECURE=true
```

#### Kurumsal SMTP
```env
EMAIL_USER=your-email@company.com
EMAIL_PASS=your-password
SMTP_HOST=mail.company.com
SMTP_PORT=587
SMTP_SECURE=false
```

## 📧 E-posta Şablonu

Form gönderildiğinde alacağınız e-posta şu bilgileri içerecek:

- **Müşteri Bilgileri**: Ad soyad, e-posta, telefon, şirket
- **Etkinlik Detayları**: Etkinlik türü, tarih, misafir sayısı, bütçe
- **Ek Bilgiler**: Müşterinin yazdığı mesaj
- **Hızlı Yanıt**: Müşterinin e-posta adresine tıklayarak direkt yanıt verebilirsiniz

## 🧪 Test Etme

### 1. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

### 2. Formu Test Edin
- Web sitesine gidin
- "Teklif Alın" formunu doldurun
- "Teklif Al" butonuna tıklayın
- E-posta adresinizi kontrol edin

### 3. cURL ile Test
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test Müşteri",
    "email":"test@example.com",
    "phone":"+90 555 555 55 55",
    "company":"Test Şirket",
    "eventType":"Düğün",
    "eventDate":"2025-09-01",
    "guestCount":"100-200 kişi",
    "budget":"25-50k",
    "message":"Test mesajı"
  }'
```

## 🔧 Sorun Giderme

### E-posta Gelmiyor
1. `.env.local` dosyasının doğru konumda olduğunu kontrol edin
2. E-posta ve şifre bilgilerinin doğru olduğunu kontrol edin
3. Gmail kullanıyorsanız "Uygulama Şifresi" kullandığınızdan emin olun
4. Spam klasörünü kontrol edin

### SMTP Hatası
1. SMTP ayarlarının doğru olduğunu kontrol edin
2. Port numarasının doğru olduğunu kontrol edin
3. Güvenlik ayarlarının (SSL/TLS) doğru olduğunu kontrol edin

### Form Gönderilmiyor
1. Tarayıcı konsolunu açın (F12)
2. Network sekmesinde API çağrısını kontrol edin
3. Hata mesajlarını kontrol edin

## 📱 Mobil Uyumluluk

E-posta şablonu mobil cihazlarda da düzgün görünecek şekilde tasarlanmıştır. Responsive tasarım sayesinde telefon ve tabletlerde de okunabilir.

## 🔒 Güvenlik

- E-posta şifreleri `.env.local` dosyasında güvenli şekilde saklanır
- Bu dosya git'e gönderilmez (`.gitignore`'da)
- API endpoint'i sadece POST isteklerini kabul eder
- Sunucu tarafında form validasyonu yapılır

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- Konsol hatalarını kontrol edin
- E-posta ayarlarınızı tekrar gözden geçirin
- Gerekirse e-posta sağlayıcınızın SMTP ayarlarını kontrol edin
