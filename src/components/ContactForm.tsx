'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const eventTypes = [
  'Kurumsal Şirket Yemekleri',
  'Kurumsal Etkinlik',
  'Açılış Töreni',
  'Konferans/Seminer',
  'Okul Catering',
  'Okul Piknik',
  'Düğün',
  'Nişan',
  'Doğum Günü',
  'Diğer'
];

const budgetRanges = [
  '50-100 kişi',
  '100-200 kişi',
  '200-500 kişi',
  '500+ kişi'
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  const isTurkishPhone = (value: string): boolean => {
    const cleaned = value.replace(/[^\d+]/g, '');
    const trMobile = /^(?:\+90|90|0)?5\d{2}\d{3}\d{2}\d{2}$/; // +90 5XX XXX XX XX
    const trLandline = /^(?:\+90|90|0)?\d{3}\d{3}\d{2}\d{2}$/; // e.g., 0XXX XXX XX XX
    return trMobile.test(cleaned) || trLandline.test(cleaned);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad soyad gereklidir';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir';
    } else if (!isTurkishPhone(formData.phone)) {
      newErrors.phone = 'Geçerli bir Türkiye telefon numarası giriniz (+90 5XX XXX XX XX)';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Etkinlik türü seçiniz';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Etkinlik tarihi gereklidir';
    }

    if (!formData.guestCount) {
      newErrors.guestCount = 'Misafir sayısı gereklidir';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const showNotificationWithAnimation = (type: 'success' | 'error', message: string) => {
    setNotificationType(type);
    setSubmitError(type === 'error' ? message : '');
    setShowNotification(true);
    
    // Auto hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setShowNotification(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          budget: '',
          message: ''
        });
        // Success toast disabled per request
      } else {
        console.error('Form submission failed:', result.error);
        showNotificationWithAnimation('error', result.error || 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showNotificationWithAnimation('error', 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animated Notification Component
  const Notification = () => {
    if (!showNotification) return null;

    return (
      <div className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ease-in-out ${
        showNotification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className={`max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden ${
          notificationType === 'success' 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notificationType === 'success' ? (
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className={`text-sm font-medium ${
                  notificationType === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {notificationType === 'success' ? 'Başarılı!' : 'Hata!'}
                </p>
                <p className={`mt-1 text-sm ${
                  notificationType === 'success' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {notificationType === 'success' 
                    ? 'Formunuz başarıyla gönderildi!' 
                    : submitError
                  }
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className={`inline-flex ${
                    notificationType === 'success' ? 'text-green-400 hover:text-green-500' : 'text-red-400 hover:text-red-500'
                  } focus:outline-none`}
                  onClick={() => setShowNotification(false)}
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Success view removed per request; only errors will be notified

  return (
    <section className="py-20  ">
      <div className=" max-w-screen-xl mx-auto px-4">
      
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col">
            <div>
              <h3 className="text-3xl font-title text-likya-primary   mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Telefon</h4>
                    <p className="text-slate-600"><a href="tel:+902125550123" className="hover:underline">+90 (212) 555 0123</a></p>
                    <p className="text-slate-600"><a href="tel:+905325550123" className="hover:underline">+90 (532) 555 0123</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">E-posta</h4>
                    <p className="text-slate-600">info@likyacatering.com</p>
                    <p className="text-slate-600">siparis@likyacatering.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Adres</h4>
                    <p className="text-slate-600">Girne Caddesi No:201</p>
                    <p className="text-slate-600">Konyaaltı, Antalya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Çalışma Saatleri</h4>
                    <p className="text-slate-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-slate-600">Cumartesi: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
              <h4 className="font-semibold text-slate-800 mb-4">Neden Likya Catering?</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  15+ yıllık deneyim
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  1000+ başarılı etkinlik
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Özel menü tasarımı
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Profesyonel ekip
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  7/24 destek
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col">
            <h3 className="text-3xl font-title text-likya-primary   mb-6">
              Etkinlik Detayları
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg form-input transition-all duration-300 ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                    }`}
                    placeholder="Adınız ve soyadınız"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg form-input transition-all duration-300 ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                    }`}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Etkinlik Türü *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg form-input transition-all duration-300 ${
                      errors.eventType ? 'border-red-500 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <option value="">Seçiniz</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg form-input transition-all duration-300 ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                    }`}
                    placeholder="+90 5XX XXX XX XX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Etkinlik Tarihi *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg form-input transition-all duration-300 ${
                      errors.eventDate ? 'border-red-500 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Misafir Sayısı *
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    min="1"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg form-input transition-all duration-300 ${
                      errors.guestCount ? 'border-red-500 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                    }`}
                    placeholder="Örn: 50"
                  />
                  {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg form-input transition-all duration-300 hover:border-slate-400 resize-none"
                  placeholder="Etkinliğiniz hakkında ek bilgiler, özel istekler veya sorularınız..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Şirket
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg form-input transition-all duration-300 hover:border-slate-400"
                  placeholder="Şirket adı (opsiyonel)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-likya-primary hover:bg-likya-primary-dark disabled:bg-slate-400 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="animate-pulse">Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Teklif Al
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        <Notification />
      </div>
    </section>
  );
}
