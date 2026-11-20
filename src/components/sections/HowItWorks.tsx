import React from 'react';
import { MessageSquare, MapPin, Dumbbell, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface HowItWorksProps {
  onOpenFreeTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenFreeTrial }) => {
  const steps = [
    {
      step: '01',
      title: 'Get In Touch',
      subtitle: 'Schedule Your Visit',
      description: 'Fill out our quick online enquiry form or drop us a direct WhatsApp message. Our team will coordinate a convenient slot for you.',
      icon: <MessageSquare className="w-6 h-6 text-brand-lime" />,
    },
    {
      step: '02',
      title: 'Visit The Studio',
      subtitle: 'Tour & Consultation',
      description: 'Drop by our studio opposite Karnataka Bank in LIC Colony, Borivali West. Check out the equipment, discuss your goals, and test the facility.',
      icon: <MapPin className="w-6 h-6 text-brand-lime" />,
    },
    {
      step: '03',
      title: 'Start Your Journey',
      subtitle: 'Commit To Progress',
      description: 'Select your membership or 1-on-1 coaching plan. Begin executing your structured workouts with coach guidance and form correction.',
      icon: <Dumbbell className="w-6 h-6 text-brand-lime" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0C0E12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="06 // SIMPLE 3-STEP ONBOARDING"
          title="HOW TO GET"
          highlight="STARTED."
          subtitle="Starting at Uplift is straightforward and frictionless. No aggressive sales pitches—just an honest evaluation of your goals."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-lime/20 via-brand-lime/50 to-brand-lime/20 -translate-y-12 z-0" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="gym-card rounded-sm p-8 relative flex flex-col items-center text-center z-10 group"
            >
              {/* Step Number Badge */}
              <div className="w-14 h-14 rounded-full bg-[#181B22] border-2 border-brand-lime/40 group-hover:border-brand-lime group-hover:shadow-lime-sm flex items-center justify-center font-display font-black text-brand-lime text-lg transition-all duration-300 mb-6">
                {item.step}
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime mb-1">
                {item.subtitle}
              </span>

              <h3 className="text-2xl font-display font-black uppercase text-white tracking-wide mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenFreeTrial}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            START YOUR JOURNEY
          </Button>
          <p className="text-xs text-slate-400 mt-3">
            Complimentary studio pass subject to owner confirmation.
          </p>
        </div>

      </div>
    </section>
  );
};
