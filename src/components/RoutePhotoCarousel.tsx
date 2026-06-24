import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RouteGalleryImage } from '../types';

interface RoutePhotoCarouselProps {
  images: RouteGalleryImage[];
  language: 'es' | 'en';
  alt: string;
}

export default function RoutePhotoCarousel({ images, language, alt }: RoutePhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + images.length) % images.length);
  };

  if (!current) return null;

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={`${current.src}-${index}`}
          src={current.src}
          alt={`${alt} — ${current.caption[language]}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45 }}
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
            aria-label={language === 'es' ? 'Foto anterior' : 'Previous photo'}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
            aria-label={language === 'es' ? 'Foto siguiente' : 'Next photo'}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-neutral-950/90 via-neutral-950/55 to-transparent px-4 pt-3 pb-8">
            <div className="flex items-start justify-between gap-3">
              <p className="text-[11px] font-mono text-stone-100 uppercase tracking-wide leading-snug max-w-[75%]">
                {current.caption[language]}
              </p>
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-black/40 border border-white/15 text-[10px] font-mono text-stone-200">
                {index + 1} / {images.length}
              </span>
            </div>
            <div className="flex gap-1.5 mt-3">
              {images.map((image, dotIndex) => (
                <button
                  key={`${image.src}-${dotIndex}`}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIndex === index ? 'w-6 bg-orange-500' : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`${language === 'es' ? 'Ir a foto' : 'Go to photo'} ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
