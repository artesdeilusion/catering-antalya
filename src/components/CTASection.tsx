'use client';

import { useState } from 'react';
import ContactDialog from './ContactDialog';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  reversed?: boolean;
}

export default function CTASection({
  title = "Etkinliğinizi Unutulmaz Kılmaya Hazır mısınız?",
  description = "Profesyonel catering hizmetimizle düğünden kurumsal etkinliklere, okul yemeklerinden özel davetlere kadar her türlü organizasyonunuzda yanınızdayız. Akdeniz lezzetlerini sofranıza taşıyoruz.",
  buttonText = "Hemen Teklif Alın",
  buttonLink = "/contact",
  imageSrc = "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg",
  imageAlt = "Likya Catering - Profesyonel Catering Hizmeti",
  backgroundColor = "bg-likya-bg-neutral",
  reversed = false
}: CTASectionProps) {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  const gridOrder = reversed ? "sm:grid-cols-2" : "sm:grid-cols-2";
  const contentOrder = reversed ? "order-2" : "order-1";
  const imageOrder = reversed ? "order-1" : "order-2";

  const openContactDialog = () => {
    setIsContactDialogOpen(true);
  };

  const closeContactDialog = () => {
    setIsContactDialogOpen(false);
  };

  return (
    <section className={` overflow-hidden ${backgroundColor} sm:grid ${gridOrder} border-t border-gray-200  sm:items-center`}>
      <div className={`  mx-auto max-w-screen-lg px-4 lg:px-4 py-16   xl:px-24 ${contentOrder}`}>
        <div className="text-cente   ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-4xl  font-bold text-likya-primary   font-title">
            {title}
          </h2>

          <p className="hidden  text-likya-text-dark md:mt-4 md:block font-body">
            {description}
          </p>

          <div className="mt-4 md:mt-8">
            <button
              onClick={openContactDialog}
              className="inline-block rounded-lg bg-likya-primary px-5 py-2 text-white transition hover:bg-likya-secondary transform hover:scale-105"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <img
        alt={imageAlt}
        src={imageSrc}
        className={`h-full w-full object-cover   sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px] ${imageOrder}`}
      />
      
      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isContactDialogOpen} 
        onClose={closeContactDialog} 
      />
    </section>
  );
}
