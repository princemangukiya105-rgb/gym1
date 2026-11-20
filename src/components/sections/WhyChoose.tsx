import React from 'react';
import { Target, Compass, Sparkles, Dumbbell, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface WhyChooseProps {
  onOpenFreeTrial: () => void;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ onOpenFreeTrial }) => {
  const reasons = [
    {
      num: '01',
      title: 'Professional Training Environment',
      description: 'A focused, clutter-free gym floor where equipment is maintained and members train with purpose. No chaotic overcrowding or unattended machines.',
      icon: <Dumbbell className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '02',
      title: 'Individual Goal Alignment',
      description: 'We prioritize your specific physical objectives—whether that is building compound strength, rehabilitating posture, or athletic conditioning.',
      icon: <Target className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '03',
      title: 'Structured Workout Guidance',
      description: 'Never guess what exercise to do next. We emphasize progressive overload, periodized volume, and strict kinematic form for injury-free development.',
      icon: <Compass className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '04',
      title: 'Supportive & Disciplined Atmosphere',
      description: 'Surround yourself with members and trainers who respect the craft of lifting. Positive energy, zero intimidation, and mutual encouragement.',
      icon: <Sparkles className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '05',
      title: 'Consistency & Real-World Progress',
      description: 'We don’t offer crash diets or magic fitness pills. We build habitual consistency, measurable strength increases, and resilient physical health.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-lime" />
    }
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="03 // THE UPLIFT ADVANTAGE"
          title="WHY TRAIN AT"
          highlight="UPLIFT FITNESS?"
          subtitle="Choosing a gym is an investment in your health and daily energy. Here is why members choose our Borivali West studio for their fitness journey."
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="gym-card p-6 sm:p-8 rounded-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-brand-lime/30 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-display font-black text-2xl sm:text-3xl text-stroke-lime opacity-40">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold uppercase text-white tracking-wide mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-brand-lime">
                <Check className="w-3.5 h-3.5" />
                <span>Uplift Studio Standard</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Conversion Hook */}
          <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-br from-[#151922] to-[#0A0D12] border border-brand-lime/40 flex flex-col justify-between shadow-[0_0_25px_rgba(212,255,0,0.1)]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lime block mb-2">
                // EXPERIENCE IT FIRST-HAND
              </span>
              <h3 className="text-2xl font-display font-black uppercase text-white leading-tight mb-3">
                SEE THE STUDIO IN PERSON
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tour the facility in LIC Colony, Borivali West, test the equipment, and speak with our training staff with no pressure.
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                fullWidth
                onClick={onOpenFreeTrial}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                SCHEDULE STUDIO TOUR
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
