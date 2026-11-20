import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Dumbbell, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';

interface AboutPageProps {
  onOpenFreeTrial: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenFreeTrial }) => {
  return (
    <>
      <SEO
        title="About Us | Uplift Fitness Studio Borivali West"
        description="Learn about the philosophy and training culture at Uplift Fitness Studio in LIC Colony, Borivali West, Mumbai. A dedicated sanctuary for strength, movement, and physical transformation."
        canonicalPath="/about"
      />

      {/* Page Hero */}
      <PageHero
        kicker="THE UPLIFT STORY • BORIVALI WEST"
        title="BUILT ON DISCIPLINE."
        highlight="COMMITTED TO PROGRESS."
        subtitle="A dedicated fitness environment in LIC Colony, Borivali West where serious training, sound biomechanics, and genuine coach guidance come together."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 1. STUDIO INTRODUCTION & MISSION */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Uplift Fitness Studio floor in Borivali West"
                  className="w-full h-[400px] sm:h-[480px] object-cover filter contrast-115 brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-black/80 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-lime block">
                    Our Location in Borivali West
                  </span>
                  <p className="text-white text-sm font-semibold mt-0.5">
                    Shop No. 5, Naya Oriental Building, Opposite Karnataka Bank, LIC Colony
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase text-white tracking-tight leading-tight">
                WE DO NOT BELIEVE IN <span className="text-brand-lime">SHORTCUTS.</span>
              </h2>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Uplift Fitness Studio was established with a singular objective: to provide individuals in Borivali West with a focused, professional fitness environment designed for measurable physical adaptation.
                </p>
                <p>
                  In a fitness landscape flooded with overcrowded commercial clubs, broken machines, and distracting trends, Uplift provides clarity. Here, every dumbbell, barbell, and cable station is positioned with purpose.
                </p>
                <p>
                  Whether your goal is developing dense muscular strength, reducing body fat, or simply moving through daily life with energy and zero joint pain, we provide the platform and encouragement to make it happen.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/training">
                  <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                    EXPLORE TRAINING
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary">
                    VISIT THE STUDIO
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS OF OUR FITNESS PHILOSOPHY */}
      <section className="py-20 lg:py-28 bg-[#0C0E12] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="CORE PRINCIPLES"
            title="OUR TRAINING"
            highlight="PHILOSOPHY."
            subtitle="The fundamental pillars that govern every workout, coaching cue, and program structure at Uplift."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="gym-card p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-6">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl uppercase text-white tracking-wide mb-3">
                  Progressive Overload
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Real physical transformation requires asking slightly more of your muscles over time. By tracking loads, volume, and mechanical tempo, we ensure consistent progression without plateaus.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-brand-lime font-bold uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Science-Backed Adaptation</span>
              </div>
            </div>

            <div className="gym-card p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl uppercase text-white tracking-wide mb-3">
                  Biomechanical Integrity
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lifting heavy is pointless if done with compromised technique. We obsess over joint alignment, spine neutrality, and kinetic pathways to protect your body and ensure longevity in lifting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-brand-lime font-bold uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Injury Prevention First</span>
              </div>
            </div>

            <div className="gym-card p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl uppercase text-white tracking-wide mb-3">
                  Daily Consistency
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Sporadic intensity will never beat consistent discipline. We encourage an accessible, sustainable training rhythm that effortlessly integrates into your Mumbai work-life routine.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-brand-lime font-bold uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sustainable Lifestyle</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR STRUCTURED APPROACH TO YOUR SUCCESS */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="THE METHODOLOGY"
            title="HOW WE GUIDE"
            highlight="EVERY MEMBER."
            subtitle="No matter your starting fitness level, our structured 4-stage process ensures you are set up for continuous progress."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-sm bg-[#121419] border border-white/10 space-y-3">
              <span className="text-brand-lime font-display font-black text-2xl block">01</span>
              <h4 className="font-display font-bold text-white uppercase text-lg">Initial Intake & Form Audit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We review your workout background, existing joint aches, schedule flexibility, and movement mobility to set a clear baseline.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#121419] border border-white/10 space-y-3">
              <span className="text-brand-lime font-display font-black text-2xl block">02</span>
              <h4 className="font-display font-bold text-white uppercase text-lg">Targeted Exercise Selection</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exercises are selected to match your unique bone levers and muscle insertions, avoiding one-size-fits-all routines.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#121419] border border-white/10 space-y-3">
              <span className="text-brand-lime font-display font-black text-2xl block">03</span>
              <h4 className="font-display font-bold text-white uppercase text-lg">Kinematic Form Guidance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trainers actively correct knee tracking, hip hinges, and shoulder retraction to maximize muscle tension and safeguard joints.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#121419] border border-white/10 space-y-3">
              <span className="text-brand-lime font-display font-black text-2xl block">04</span>
              <h4 className="font-display font-bold text-white uppercase text-lg">Measurable Milestones</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regular reviews of workout volume, stamina benchmarks, and body recomposition to celebrate real-world improvements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-20 lg:py-24 bg-[#08090A] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-lime block mb-2">
            // EXPERIENCE THE ENVIRONMENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            READY TO TRAIN IN A <span className="text-brand-lime">BETTER SPACE?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Visit Uplift Fitness Studio in LIC Colony, Borivali West. Meet our coaching staff and inspect the equipment for yourself.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenFreeTrial}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              BOOK A FREE STUDIO TOUR
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
