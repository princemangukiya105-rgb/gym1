import React from 'react';
import { Zap, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/gymInfo';

interface StickyMobileCTAProps {
  onOpenFreeTrial: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenFreeTrial }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0B0E]/95 backdrop-blur-lg border-t border-white/10 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onOpenFreeTrial}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-sm bg-brand-lime text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(212,255,0,0.3)] active:scale-95 transition-transform"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>FREE TRIAL PASS</span>
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-sm bg-[#25D366] text-black font-extrabold text-xs tracking-wider uppercase active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
