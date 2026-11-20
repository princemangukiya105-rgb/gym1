import React, { useState } from 'react';
import { Check, ShieldAlert, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { FACILITIES_DATA } from '../../data/facilitiesData';
import { FacilityItem } from '../../types';

interface FacilitiesProps {
  onOpenFreeTrial: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenFreeTrial }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'strength' | 'functional' | 'amenity'>('all');

  const filteredFacilities = activeTab === 'all'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((item: FacilityItem) => item.category === activeTab);

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0C0E12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="04 // EQUIPMENT & AMENITIES"
          title="BUILT FOR"
          highlight="SERIOUS TRAINING."
          subtitle="Explore our Borivali West training zones. Every station is planned for maximum mechanical utility, safety clearance, and optimal biomechanical training angles."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Equipment & Zones' },
            { id: 'strength', label: 'Free Weights & Iron' },
            { id: 'functional', label: 'Functional Turf & PT' },
            { id: 'amenity', label: 'Hygiene & Amenities' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-lime text-black shadow-lime-sm'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility: FacilityItem) => (
            <div
              key={facility.id}
              className="gym-card rounded-sm overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={facility.imageUrl}
                    alt={facility.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-brand-lime uppercase tracking-wider border border-white/10">
                    {facility.categoryLabel}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-extrabold uppercase text-white tracking-wide group-hover:text-brand-lime transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Equipment Specifications:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {facility.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-3">
                  <span className="italic">Borivali West Location</span>
                  <span className="text-brand-lime font-semibold">Active & Maintained</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Editable Notice */}
        <div className="mt-12 p-4 rounded-sm bg-white/5 border border-white/10 text-xs text-slate-400 text-center max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-brand-lime shrink-0" />
          <span>
            Equipment list showcases standard studio stations. Specific machine configurations can be verified in-person at LIC Colony.
          </span>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Button
            variant="primary"
            onClick={onOpenFreeTrial}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            INSPECT OUR FACILITIES IN PERSON
          </Button>
        </div>

      </div>
    </section>
  );
};
