import React from 'react';
import { CheckCircle2, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface TrustIntroProps {
  onOpenFreeTrial: () => void;
}

export const TrustIntro: React.FC<TrustIntroProps> = ({ onOpenFreeTrial }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="01 // THE UPLIFT PHILOSOPHY"
          title="MORE THAN A WORKOUT."
          highlight="A STRONGER YOU."
          subtitle="At Uplift Fitness Studio, we reject mindless exercise routines and crowded, unguided gym floors. We built an intentional training sanctuary in LIC Colony, Borivali West where serious intent meets structured guidance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Layered Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image: Strength & Form */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                  alt="Athlete setting up for barbell deadlift at Uplift Fitness Studio Borivali"
                  className="w-full h-[380px] sm:h-[460px] object-cover filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-black/75 backdrop-blur-md border border-white/10">
                  <span className="text-brand-lime text-xs font-bold uppercase tracking-wider block">
                    Borivali West Facility
                  </span>
                  <p className="text-white text-sm font-semibold mt-0.5">
                    Purpose-built for strength, hypertrophy, and functional movement.
                  </p>
                </div>
              </div>

              {/* Accent Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-brand-lime text-black p-4 sm:p-5 rounded-sm shadow-2xl font-display font-black text-center border-2 border-black transform rotate-2">
                <span className="text-xs uppercase tracking-widest block font-bold">FOCUS ON</span>
                <span className="text-xl sm:text-2xl block tracking-tight">PROGRESS</span>
              </div>

            </div>
          </div>

          {/* Right Column: Values & Differentiators */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Too many people join a gym only to wander from machine to machine without a plan, clear progression, or feedback on form. Results stall, motivation fades, and injuries occur.
              </p>
              <p>
                <strong className="text-white">Uplift Fitness Studio is structured differently.</strong> Whether you are lifting weights for the first time or chasing a personal deadlift record, our coaching staff in Borivali West provides the framework, technical corrections, and accountability you need to consistently progress.
              </p>
            </div>

            {/* Core Value Pillars Grid (Accurate, honest trust indicators without fabricated awards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-sm bg-white/5 border border-white/5 hover:border-brand-lime/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                  Purposeful Training
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Every workout is tied to an objective: building strength, improving mobility, or shedding body fat.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-white/5 border border-white/5 hover:border-brand-lime/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                  Biomechanical Safety
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Strict form guidance to protect your joints, improve spine posture, and lift with confidence.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-white/5 border border-white/5 hover:border-brand-lime/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                  Quality Equipment
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Calibrated barbell plates, solid power racks, smooth cable stations and heavy dumbbells.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-white/5 border border-white/5 hover:border-brand-lime/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                  Respectful Culture
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  A disciplined, supportive environment free from vanity distractions and crowded chaos.
                </p>
              </div>

            </div>

            {/* Action Call */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                onClick={onOpenFreeTrial}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                EXPERIENCE THE STUDIO
              </Button>
              <span className="text-xs text-slate-400 italic">
                Located opposite Karnataka Bank, LIC Colony.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
