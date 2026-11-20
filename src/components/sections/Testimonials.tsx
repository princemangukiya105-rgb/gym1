import React from 'react';
import { Quote, Star, ShieldAlert } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { TestimonialItem } from '../../types';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0C0E12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="07 // MEMBER FEEDBACK"
          title="TRAINING DISCIPLINE."
          highlight="PROVEN RESULTS."
          subtitle="Read honest perspectives from fitness enthusiasts training in our Borivali West facility."
        />

        {/* Owner Editable Notice Pill */}
        <div className="mb-10 p-3 rounded-sm bg-white/5 border border-white/10 text-xs text-slate-400 flex items-center justify-between gap-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-brand-lime shrink-0" />
            <span>
              <strong>Owner Notice:</strong> Sample member feedback displayed for layout preview. Studio management can update this with verified reviews directly in <code className="text-brand-lime">testimonialsData.ts</code>.
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="gym-card rounded-sm p-6 sm:p-8 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Quote Icon & Focus Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2.5 py-1 rounded-sm border border-brand-lime/30">
                    {t.focus}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Milestone Footer */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="p-3 bg-white/5 rounded-sm">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Reported Milestone:
                  </span>
                  <span className="text-xs font-semibold text-white mt-0.5 block">
                    {t.achievement}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="font-display font-bold text-white uppercase text-sm">
                      {t.name}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {t.location}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-brand-lime">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
