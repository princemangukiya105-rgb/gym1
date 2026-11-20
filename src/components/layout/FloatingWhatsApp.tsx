import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/gymInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex flex-col items-end">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 bg-[#121418] text-white text-xs px-3.5 py-2 rounded-md shadow-2xl border border-white/10 animate-fade-in relative">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
          <span className="font-semibold text-slate-200">Enquire instantly on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#121418] border-b border-r border-white/10 transform rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Uplift Fitness Studio on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all duration-300 relative group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none group-hover:hidden" />
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
