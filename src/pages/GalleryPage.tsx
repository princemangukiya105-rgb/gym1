import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldAlert, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onOpenFreeTrial: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenFreeTrial }) => {
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
    <>
      <SEO
        title="Photo Gallery | Uplift Fitness Studio Borivali West"
        description="Browse photos of training equipment, barbell racks, coaching sessions, and workout atmosphere at Uplift Fitness Studio in LIC Colony, Borivali West."
        canonicalPath="/gallery"
      />

      {/* Page Hero */}
      <PageHero
        kicker="VISUAL ATMOSPHERE • BORIVALI WEST"
        title="THE UPLIFT"
        highlight="GALLERY."
        subtitle="Experience the energy, discipline, and iron environment of Uplift Fitness Studio through our photography collection."
        breadcrumbs={[{ label: 'Gallery' }]}
        bgImage="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="PHOTO COLLECTION"
            title="SNAPSHOTS OF"
            highlight="DISCIPLINE."
            subtitle="Filter through strength stations, functional conditioning, and 1-on-1 coaching moments."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-lime text-black font-extrabold shadow-lime-sm'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredItems.map((item: GalleryItem, index: number) => {
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold text-brand-lime uppercase tracking-wider border border-white/10">
                    {item.category}
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-brand-lime" />
                  </div>

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

          {/* Owner Transparency Notice */}
          <div className="mt-12 p-4 rounded-sm bg-white/5 border border-white/10 text-xs text-slate-400 text-center max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-brand-lime shrink-0" />
            <span>
              <strong>Client Demo Notice:</strong> High-resolution curated fitness imagery shown for preview. Studio owner can easily swap these with original gym floor photography in <code className="text-brand-lime">galleryData.ts</code>.
            </span>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

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

          <button
            onClick={() =>
              setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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

      {/* Conversion Banner */}
      <section className="py-20 lg:py-24 bg-[#0C0E12] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            BE PART OF THE <span className="text-brand-lime">ATMOSPHERE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Book your 1-day studio pass to experience the lighting, energy, and iron floor in person.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenFreeTrial}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              BOOK FREE STUDIO TRIAL
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                GET DIRECTIONS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
