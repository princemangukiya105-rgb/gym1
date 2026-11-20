import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldAlert, ArrowRight, MapPin } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { FACILITIES_DATA } from '../data/facilitiesData';
import { FacilityItem } from '../types';

interface FacilitiesPageProps {
  onOpenFreeTrial: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onOpenFreeTrial }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'strength' | 'functional' | 'amenity'>('all');

  const filtered = activeCategory === 'all'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((item: FacilityItem) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Gym Facilities & Equipment | Uplift Fitness Studio Borivali West"
        description="Inspect our strength equipment, heavy dumbbells, power racks, cable crossover stations, functional turf, and clean amenities in LIC Colony, Borivali West."
        canonicalPath="/facilities"
      />

      {/* Page Hero */}
      <PageHero
        kicker="STUDIO AMENITIES • BORIVALI WEST"
        title="PURPOSE-BUILT ENVIRONMENT."
        highlight="HEAVY-DUTY EQUIPMENT."
        subtitle="Designed for focused, distraction-free training. Calibrated plates, commercial-grade racks, smooth cable pulleys, and functional turf."
        breadcrumbs={[{ label: 'Facilities' }]}
        bgImage="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Intro Overview */}
      <section className="py-12 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The environment in which you train shapes your mindset. Uplift Fitness Studio is carefully organized to prevent overcrowding, reduce wait times between sets, and give you the space needed to execute heavy compound movements safely.
          </p>

          {/* Standards Pills */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3 bg-white/5 rounded-sm border border-white/5">
              <span className="text-[11px] font-bold text-brand-lime uppercase block">Daily Sanitization</span>
              <span className="text-xs text-slate-300">Cleaned & disinfected floor</span>
            </div>
            <div className="p-3 bg-white/5 rounded-sm border border-white/5">
              <span className="text-[11px] font-bold text-brand-lime uppercase block">Climate Control</span>
              <span className="text-xs text-slate-300">Continuous AC air circulation</span>
            </div>
            <div className="p-3 bg-white/5 rounded-sm border border-white/5">
              <span className="text-[11px] font-bold text-brand-lime uppercase block">Shock Absorption</span>
              <span className="text-xs text-slate-300">High-density rubber flooring</span>
            </div>
            <div className="p-3 bg-white/5 rounded-sm border border-white/5">
              <span className="text-[11px] font-bold text-brand-lime uppercase block">Day Lockers</span>
              <span className="text-xs text-slate-300">Secure member storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase Grid with Filters */}
      <section className="py-20 lg:py-28 bg-[#0C0E12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="EQUIPMENT ZONES"
            title="TRAINING ZONES &"
            highlight="SPECIFICATIONS."
            subtitle="Explore our specialized training stations. Every piece of equipment is chosen for mechanical integrity and structural safety."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Equipment & Zones' },
              { id: 'strength', label: 'Free Weights & Iron' },
              { id: 'functional', label: 'Functional Turf & PT' },
              { id: 'amenity', label: 'Hygiene & Amenities' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-brand-lime text-black shadow-lime-sm'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((facility: FacilityItem) => (
              <div
                key={facility.id}
                className="gym-card rounded-sm overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={facility.imageUrl}
                      alt={facility.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-black/85 px-3 py-1 rounded text-xs font-bold text-brand-lime uppercase tracking-wider border border-white/10">
                      {facility.categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-display font-extrabold uppercase text-white tracking-wide group-hover:text-brand-lime transition-colors">
                      {facility.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Features & Station Specs:
                      </span>
                      <ul className="space-y-1.5">
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

                <div className="p-6 pt-2">
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span>LIC Colony, Borivali West</span>
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
              Facility photos demonstrate equipment categories. Prospective members are encouraged to visit the studio in LIC Colony to test the equipment in person.
            </span>
          </div>

        </div>
      </section>

      {/* Visit Invitation CTA */}
      <section className="py-20 lg:py-24 bg-[#090A0C] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lime mb-3">
            <MapPin className="w-4 h-4" />
            <span>LOCATED OPPOSITE KARNATAKA BANK, LIC COLONY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            TOUR THE STUDIO IN PERSON
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Nothing compares to standing on the gym floor. Schedule a complimentary walkthrough and consultation with our coaching staff today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenFreeTrial}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              SCHEDULE STUDIO TOUR
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                GET DIRECTIONS ON MAP
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
