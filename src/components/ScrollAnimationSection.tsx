'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg',
    alt: 'Abstract Gradient',
    description: 'Vertical gradient transitioning from golden-orange to magenta and deep purple'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    alt: 'Red Berries with Water Droplets',
    description: 'Close-up macro shot of red spheres with glistening water droplets'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/11906267/pexels-photo-11906267.jpeg',
    alt: 'Botanical Still Life',
    description: 'Creative arrangement with cherries, raspberries, flowers, and a metallic green beetle'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg',
    alt: 'Dragonfly Macro',
    description: 'Close-up of iridescent blue-green damselfly with water droplets'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg',
    alt: 'Blurred Figure in Cityscape',
    description: 'Person looking out window at blurred city buildings'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/321588/pexels-photo-321588.jpeg',
    alt: 'Night Street Scene',
    description: 'Dark moody night scene with reddish-orange glow'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/19063539/pexels-photo-19063539.jpeg',
    alt: 'Abstract Gradient 2',
    description: 'Another vertical gradient with warm golden-orange tones'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/2337843/pexels-photo-2337843.jpeg',
    alt: 'Dramatic Eyes Close-up',
    description: 'High-contrast black and white portrait focusing on eyes'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/14048849/pexels-photo-14048849.jpeg',
    alt: 'Red Lipstick Macro',
    description: 'Clean minimalist close-up of dark red lipstick'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/33210360/pexels-photo-33210360.jpeg',
    alt: 'Person with Sports Car',
    description: 'Person in white sweater with gold chain bag in front of white sports car'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/28736731/pexels-photo-28736731.jpeg',
    alt: 'Translucent Flowers Still Life',
    description: 'Still life with translucent glass-like flowers in various colors'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/28736727/pexels-photo-28736727.jpeg',
    alt: 'Figure by Window',
    description: 'Person looking out window at stark landscape with dramatic lighting'
  },
  {
    id: 13,
    src: 'https://images.pexels.com/photos/23388859/pexels-photo-23388859.jpeg',
    alt: 'Mountain Landscape',
    description: 'Majestic mountain peaks with dramatic clouds and golden hour lighting'
  },
  {
    id: 14,
    src: 'https://images.pexels.com/photos/29486066/pexels-photo-29486066.jpeg',
    alt: 'Golden Hour Portrait',
    description: 'Warm golden hour portrait with soft, dreamy lighting and bokeh background'
  },
  {
    id: 15,
    src: 'https://images.pexels.com/photos/29283882/pexels-photo-29283882.jpeg',
    alt: 'Ocean Waves',
    description: 'Dynamic ocean waves crashing against rocks with foam and spray'
  },
  {
    id: 16,
    src: 'https://images.pexels.com/photos/32611700/pexels-photo-32611700.jpeg',
    alt: 'Urban Architecture',
    description: 'Modern urban architecture with geometric lines and glass reflections'
  },
  {
    id: 17,
    src: 'https://images.pexels.com/photos/25916383/pexels-photo-25916383.jpeg',
    alt: 'Abstract Art',
    description: 'Colorful abstract art with flowing brushstrokes and vibrant pigments'
  },
  {
    id: 18,
    src: 'https://images.pexels.com/photos/32689477/pexels-photo-32689477.jpeg',
    alt: 'Nature Close-up',
    description: 'Intimate close-up of natural textures, patterns, and organic forms'
  }
];

export default function ScrollAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section has been scrolled through
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // When section is fully visible, progress goes from 0 to 1
      let progress = 0;
      
      if (sectionTop <= windowHeight && sectionBottom >= 0) {
        // Section is in view
        const visibleHeight = Math.min(windowHeight, sectionBottom) - Math.max(0, sectionTop);
        const totalScrollDistance = windowHeight + sectionHeight;
        const scrolledDistance = windowHeight - sectionTop;
        progress = Math.max(0, Math.min(1, scrolledDistance / totalScrollDistance));
      } else if (sectionTop > windowHeight) {
        // Section is below viewport
        progress = 0;
      } else if (sectionBottom < 0) {
        // Section is above viewport
        progress = 1;
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstRow = images.slice(0, 6);
  const secondRow = images.slice(6, 12);
  const thirdRow = images.slice(12, 18);

  // Calculate transform values based on scroll progress
  const firstRowTransform = `translateX(${(scrollProgress - 0.5) * 30}%)`;
  const secondRowTransform = `translateX(${(0.5 - scrollProgress) * 30}%)`;
  const thirdRowTransform = `translateX(${(scrollProgress - 0.5) * 30}%)`; // Slightly different movement

  return (
    <section 
      ref={sectionRef}
      className="py-16      min-h-screen flex items-center"
    >
      <div className="  mx-auto w-full">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-title text-likya-primary mb-4">
          Sofralarımızdan Kareler
          </h2>
          <p className="text-lg font-body text-likya-text-dark max-w-3xl mx-auto">
          Düğünlerden kurumsal organizasyonlara, her etkinlikte unutulmaz anılar bırakıyoruz. İşte Likya Catering’in bugüne kadar kurduğu sofralardan seçilmiş kareler.
          </p>
        </div>
        <div className="space-y-8  overflow-hidden">
          {/* First Row - Horizontal List */}
          <div 
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: firstRowTransform }}
          >
            {firstRow.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl     transition-all   transform hover:border-2   flex-shrink-0 w-64 h-96"
              >
                <div className="aspect-[4/3]  relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                   <div className="absolute inset-0 flex text-white text-left items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text-left">
                      
                    </div>
                  </div>
                </div>
                 
               </div>
            ))}
          </div>

          {/* Second Row - Horizontal List */}
          <div 
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: secondRowTransform }}
          >
            {secondRow.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl    transition-all   transform hover:border-2   flex-shrink-0 w-64 h-96"
              >
                <div className="aspect-[4/3] relative w-full h-full">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                   <div className="absolute inset-0 flex text-white text-left items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    
                  </div>
                </div>
                 </div>
            ))}
          </div>

          {/* Third Row - Horizontal List */}
          <div 
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: thirdRowTransform }}
          >
            {thirdRow.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl     transition-all   transform hover:border-2   flex-shrink-0 w-64 h-96"
              >
                <div className="aspect-[4/3] relative w-full h-full">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                   <div className="absolute inset-0 flex text-white text-left items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text-left">
                    
                    </div>
                  </div>
                </div>
               </div>
            ))}
          </div>
        </div>
 
      </div>
    </section>
  );
}
