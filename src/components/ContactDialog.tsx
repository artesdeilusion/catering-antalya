'use client';

import { useState } from 'react';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
    company: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isTurkishPhone = (value: string): boolean => {
    const cleaned = value.replace(/[^\d+]/g, '');
    const trMobile = /^(?:\+90|90|0)?5\d{2}\d{3}\d{2}\d{2}$/;
    const trLandline = /^(?:\+90|90|0)?\d{3}\d{3}\d{2}\d{2}$/;
    return trMobile.test(cleaned) || trLandline.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Ad soyad gereklidir';
    if (!formData.email.trim()) newErrors.email = 'E-posta gereklidir';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Geçerli e-posta girin';
    if (!formData.eventType) newErrors.eventType = 'Etkinlik türü gereklidir';
    if (!formData.phone.trim()) newErrors.phone = 'Telefon gereklidir';
    else if (!isTurkishPhone(formData.phone)) newErrors.phone = 'Geçerli TR telefon giriniz (+90 5XX XXX XX XX)';
    if (!formData.eventDate) newErrors.eventDate = 'Etkinlik tarihi gereklidir';
    if (!formData.guestCount) newErrors.guestCount = 'Misafir sayısı gereklidir';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          budget: '',
          message: formData.message,
          company: formData.company
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        onClose();
        setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '', message: '', company: '' });
      } else {
        setErrors(prev => ({ ...prev, submit: data.error || 'Gönderim hatası' }));
      }
    } catch (err) {
      setErrors(prev => ({ ...prev, submit: 'Bağlantı hatası' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Contact Dialog */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}>
          {/* Header */}
          <div className="sticky top-0 bg-white rounded-t-2xl px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-likya-primary font-title">Teklif Alın</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-2 font-body">Etkinliğiniz için özel teklif alın</p>
          </div>

          {/* Form - unified fields and order */}
          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Ad Soyad *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg font-body ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    placeholder="Adınız ve soyadınız"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-body">E-posta *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg font-body ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Etkinlik Türü *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg font-body ${errors.eventType ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  >
                    <option value="">Etkinlik türü seçin</option>
                    <option value="Kurumsal Şirket Yemekleri">Kurumsal Şirket Yemekleri</option>
                    <option value="Kurumsal Etkinlik">Kurumsal Etkinlik</option>
                    <option value="Açılış Töreni">Açılış Töreni</option>
                    <option value="Konferans/Seminer">Konferans/Seminer</option>
                    <option value="Okul Catering">Okul Catering</option>
                    <option value="Okul Piknik">Okul Piknik</option>
                    <option value="Düğün">Düğün</option>
                    <option value="Nişan">Nişan</option>
                    <option value="Doğum Günü">Doğum Günü</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                  {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Telefon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg font-body ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    placeholder="+90 5XX XXX XX XX"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Etkinlik Tarihi *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg font-body ${errors.eventDate ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  />
                  {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Misafir Sayısı *</label>
                  <input
                    type="number"
                    name="guestCount"
                    min="1"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg font-body ${errors.guestCount ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    placeholder="Örn: 50"
                  />
                  {errors.guestCount && <p className="text-red-500 text-xs mt-1">{errors.guestCount}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Mesajınız</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body"
                  placeholder="Etkinliğiniz hakkında detayları paylaşın..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Şirket</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body"
                  placeholder="Şirket adı (opsiyonel)"
                />
              </div>

              {errors.submit && <p className="text-red-600 text-sm">{errors.submit}</p>}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-likya-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-likya-secondary transition-colors duration-200 font-body disabled:opacity-60"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Teklif Gönder'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 font-body"
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
