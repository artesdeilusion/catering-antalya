'use client';

import { useState } from 'react';
import ContactDialog from './ContactDialog';

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="relative py-16 flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute  inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg")'
        }}
      >
       </div>
      
      {/* Shadow/Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-5"></div>
     
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl  sm:text-6xl font-title text-white mb-6 leading-tight">
        Akdeniz Lezzeti,
          <span className="block  ">Antalya’da Sofranızda</span>
        </h1>
        
        {/* Description */}
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
        Kurumsal etkinliklerden düğünlere, okul yemeklerinden özel davetlere… Likya Catering sofralarınıza Akdeniz’in tazeliğini ve şıklığını getiriyor. </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-white text-black px-5 py-2   rounded-lg   hover:bg-gray-200 border-1 border-white hover:border-gray-200    "
          >
            Teklif Alın
          </button>
          <a 
            href="/contact"
            className="border-1 border-white text-white px-5 py-2 rounded-lg   hover:bg-white  hover:text-black      "
          >
            İletişime Geçin
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 font-body">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Premium Lezzet</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Taze Malzemeler</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>  Uzman Hizmet</span>
          </div>
        </div>
      </div>
      
      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </section>
  );
}
