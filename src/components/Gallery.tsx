import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0));
  };

  const handlePrev = () => {
    setSelectedIdx((prev) =>
      prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0
    );
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAFCFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - 1-2 lines */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            Infrastructure
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Hospital Gallery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Take a look inside our sterile surgical theatres and modern recovery facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(index)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs hover:shadow-md cursor-pointer transition-all duration-200 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-emerald-600 transition-colors shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
