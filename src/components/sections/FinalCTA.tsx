import React from 'react';
import { ArrowRight, MessageSquare, Flame } from 'lucide-react';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../config/gymInfo';

interface FinalCTAProps {
  onOpenFreeTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenFreeTrial }) => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-black">
      {/* Background with Dark Cinematic Strength Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
          alt="Heavy strength training barbell in dark atmospheric gym"
          className="w-full h-full object-cover object-center filter brightness-25 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/15 border border-brand-lime/30 text-brand-lime text-xs font-bold uppercase tracking-widest mb-6">
          <Flame className="w-4 h-4 fill-current" />
          <span>BEGIN YOUR TRANSFORMATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase text-white tracking-tight leading-[0.95]">
          YOUR NEXT LEVEL <br />
          <span className="text-brand-lime">STARTS HERE.</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards a stronger, healthier and more confident you.
        </p>

        {/* Conversion Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto sm:max-w-none">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenFreeTrial}
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-[0_0_35px_rgba(212,255,0,0.4)]"
          >
            ENQUIRE NOW
          </Button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-sm bg-[#25D366] text-black font-extrabold text-base tracking-wider uppercase hover:bg-[#20BD5A] transition-all shadow-[0_0_25px_rgba(37,211,102,0.35)]"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>CONTACT US ON WHATSAPP</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Uplift Fitness Studio • Shop No. 5, Naya Oriental Building, LIC Colony, Borivali West, Mumbai 400103
        </p>

      </div>
    </section>
  );
};
