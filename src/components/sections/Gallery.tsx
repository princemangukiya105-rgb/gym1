import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GALLERY_DATA } from '../../data/galleryData';
import { GalleryItem } from '../../types';

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strength', 'Equipment', 'Coaching', 'Atmosphere'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item: GalleryItem) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="05 // VISUAL ATMOSPHERE"
          title="THE TRAINING"
          highlight="EXPERIENCE."
          subtitle="Glimpse inside the daily discipline, iron equipment, and high-energy atmosphere at Uplift Fitness Studio, Borivali West."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-lime text-black'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item: GalleryItem, index: number) => {
            // Apply varied column/row spans for editorial feel
            const isWide = index === 0 || index === 5;
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative rounded-sm overflow-hidden group cursor-pointer border border-white/10 bg-[#111317] ${
                  isWide ? 'sm:col-span-2' : ''
                } h-64 sm:h-72 lg:h-80`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750 ease-out filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold text-brand-lime uppercase tracking-wider border border-white/10">
                  {item.category}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-brand-lime" />
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-display font-bold text-sm sm:text-base uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={() =>
              setSelectedImageIndex(
                (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={() =>
              setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image & Caption */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[selectedImageIndex].imageUrl}
              alt={filteredItems[selectedImageIndex].imageAlt}
              className="max-h-[70vh] w-auto object-contain rounded-sm border border-white/10 shadow-2xl"
            />
            
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block">
                {filteredItems[selectedImageIndex].category} • {selectedImageIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="text-xl font-display font-bold uppercase text-white mt-1">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-1">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
