import React from 'react';
import { ArrowRight, MapPin, Dumbbell, ShieldCheck, Clock, Award } from 'lucide-react';
import { Button } from '../common/Button';

interface HeroProps {
  onOpenFreeTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreeTrial }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-0">
      
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Atmospheric strength training gym with barbells and plates at Uplift Fitness Studio Borivali West"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125 scale-105 transform motion-safe:animate-pulse-subtle transition-all duration-1000"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multi-layered dark vignette and radial gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/80 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090A]/50 to-[#08090A]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 pb-12 w-full">
        
        {/* Location & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-lime/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 animate-fade-in shadow-lg">
          <MapPin className="w-4 h-4 text-brand-lime animate-bounce" />
          <span>LIC Colony, Borivali West, Mumbai</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mx-0.5" />
          <span className="text-brand-lime font-bold">Open Daily from 6:00 AM</span>
        </div>

        {/* Main Bold Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white leading-[0.95] max-w-5xl mx-auto drop-shadow-2xl">
          BUILD STRENGTH. <br />
          <span className="text-brand-lime inline-block mt-2 relative">
            ELEVATE YOURSELF.
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-lime/40 blur-[1px]" />
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
          Your fitness journey deserves the right environment, expert guidance and a commitment to progress.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto sm:max-w-none">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenFreeTrial}
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-[0_0_30px_rgba(212,255,0,0.4)]"
          >
            BOOK A FREE TRIAL
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('training')}
            className="w-full sm:w-auto text-slate-200 border-white/20 hover:border-brand-lime"
          >
            EXPLORE OUR TRAINING
          </Button>
        </div>

        {/* Key Feature Trust Indicators */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          
          <div className="p-3.5 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-brand-lime mb-1">
              <Dumbbell className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Heavy Iron Floor</span>
            </div>
            <p className="text-[12px] text-slate-400">Power racks, barbells & dumbbells</p>
          </div>

          <div className="p-3.5 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-brand-lime mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Form Precision</span>
            </div>
            <p className="text-[12px] text-slate-400">Biomechanical injury prevention</p>
          </div>

          <div className="p-3.5 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-brand-lime mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">6 AM – 10 PM</span>
            </div>
            <p className="text-[12px] text-slate-400">Flexible training schedule</p>
          </div>

          <div className="p-3.5 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-brand-lime mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Zero Gimmicks</span>
            </div>
            <p className="text-[12px] text-slate-400">Grounded in progressive overload</p>
          </div>

        </div>

      </div>

      {/* Visually Appealing Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 hover:text-brand-lime transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll to introduction section"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] mb-1.5 opacity-70 group-hover:opacity-100">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-brand-lime flex items-start justify-center p-1 transition-colors">
          <div className="w-1.5 h-2 bg-brand-lime rounded-full animate-bounce mt-0.5" />
        </div>
      </button>

    </section>
  );
};
