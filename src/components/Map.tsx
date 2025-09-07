'use client';

interface MapProps {
  className?: string;
}

export default function Map({ className = '' }: MapProps) {
  const handleOpenInMaps = () => {
    window.open('https://www.google.com/maps/place/Sui%C3%A7ecek,+Girne+Cd.+No%3A201,+07130+Konyaalt%C4%B1%2FAntalya/@36.8697069,30.5572773,17z/data=!3m1!4b1!4m6!3m5!1s0x14c3936c23e37209:0xc7da86652622a19e!8m2!3d36.8697069!4d30.5594522!16s%2Fg%2F11c0q8q8q8', '_blank');
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=36.8697069,30.5594522', '_blank');
  };

  return (
    <div className={`w-full h-full min-h-[350px] relative ${className}`}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.6853161786078!2d30.557277286897595!3d36.86970694137081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3936c23e37209%3A0xc7da86652622a19e!2sSui%C3%A7ecek%2C%20Girne%20Cd.%20No%3A201%2C%2007130%20Konyaalt%C4%B1%2FAntalya!5e0!3m2!1sen!2str!4v1757243847084!5m2!1sen!2str" 
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '350px' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-lg w-full"
      />
      
      {/* Map Action Buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={handleOpenInMaps}
          className="bg-white hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Haritada Gör
        </button>
        
        <button
          onClick={handleGetDirections}
          className="bg-likya-primary hover:bg-likya-primary-dark text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Yol Tarifi Al
        </button>
      </div>
    </div>
  );
}
