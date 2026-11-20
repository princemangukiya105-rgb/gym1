import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Instagram, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppUrl } from '../../config/gymInfo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050607] border-t border-white/10 text-slate-400 relative overflow-hidden pb-16 sm:pb-0">
      {/* Subtle top lime glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-lime/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 focus:outline-none">
              <div className="w-9 h-9 rounded-sm bg-black border border-brand-lime flex items-center justify-center font-display font-black text-brand-lime text-lg">
                U▲
              </div>
              <div>
                <span className="font-display font-black text-xl text-white uppercase tracking-wider block">
                  UPLIFT
                </span>
                <span className="text-[10px] font-bold text-brand-lime tracking-[0.2em] uppercase block">
                  FITNESS STUDIO
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Borivali West's premier strength training and personal fitness studio. Designed for purposeful workouts, progressive overload, and lasting physical transformation.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={GYM_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-lime hover:border-brand-lime/50 transition-colors"
                aria-label="Follow Uplift Fitness Studio on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <a
                href={`tel:${GYM_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-lime hover:border-brand-lime/50 transition-colors"
                aria-label="Call Uplift Fitness Studio"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (All 8 pages) */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              Studio Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Training Programs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Facilities & Equipment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Photo Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/why-uplift" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Why Uplift</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Frequently Asked Questions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-lime transition-colors flex items-center justify-between group">
                  <span>Contact & Location</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Schedule */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-lime" />
              Operating Hours
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-sm bg-white/5 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                  Monday – Saturday
                </span>
                <span className="text-white font-bold text-base mt-0.5 block">
                  6:00 AM – 10:00 PM
                </span>
                <span className="text-[11px] text-brand-lime mt-1 block font-medium">
                  Continuous training access
                </span>
              </div>

              <div className="p-3.5 rounded-sm bg-white/5 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                  Sunday Morning Session
                </span>
                <span className="text-white font-bold text-base mt-0.5 block">
                  8:00 AM – 1:00 PM
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Evening closed for maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Verified Location & Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-lime" />
              Studio Location
            </h3>
            <address className="not-italic text-sm space-y-3 leading-relaxed">
              <p className="text-slate-300">
                <strong className="text-white block font-semibold">Uplift Fitness Studio</strong>
                Shop No. 5, Naya Oriental Building,<br />
                Opposite Karnataka Bank,<br />
                LIC Colony, Borivali West,<br />
                Mumbai, Maharashtra – 400103
              </p>

              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${GYM_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-brand-lime transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-lime" />
                  <span>{GYM_CONFIG.contact.displayPhone}</span>
                </a>
                
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: {GYM_CONFIG.contact.whatsappDisplay}</span>
                </a>
              </div>

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-lime hover:underline uppercase tracking-wider"
              >
                <span>View Map & Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </address>
          </div>

        </div>

        {/* Local SEO Keywords Pills */}
        <div className="py-6 border-t border-b border-white/5 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">Popular Searches in Borivali West:</p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              'Gym in Borivali West',
              'Fitness Studio in Borivali West',
              'Personal Training Borivali',
              'Strength Training Borivali West',
              'Fitness Centre near LIC Colony',
              'Weight Training Gym Mumbai 400103',
              'Bodybuilding & Conditioning Borivali',
              'Best Gym in LIC Colony Mumbai'
            ].map((keyword) => (
              <span key={keyword} className="bg-white/5 px-2.5 py-1 rounded text-slate-400 border border-white/5">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Owner Transparency Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0" />
            <span>
              Official business presence for Uplift Fitness Studio. All proposed programs and sample testimonials are subject to final studio owner confirmation.
            </span>
          </div>

          <div className="shrink-0 text-center md:text-right">
            <p>© {currentYear} Uplift Fitness Studio. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
