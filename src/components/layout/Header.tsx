import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppUrl } from '../../config/gymInfo';
import { Button } from '../common/Button';

interface HeaderProps {
  onOpenFreeTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenFreeTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Training', path: '/training' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Why Uplift', path: '/why-uplift' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-[#08090A] border-b border-white/10 shadow-xl ${
        isScrolled ? 'py-3 shadow-2xl' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Uplift Fitness Studio Homepage"
          >
            <div className="w-10 h-10 rounded-sm bg-black border border-brand-lime/40 flex items-center justify-center relative overflow-hidden group-hover:border-brand-lime transition-colors">
              <div className="absolute inset-0 bg-brand-lime/10 group-hover:bg-brand-lime/20 transition-colors" />
              <div className="relative font-display font-extrabold text-brand-lime text-xl tracking-tighter flex items-center">
                <span>U</span>
                <span className="text-white text-xs -translate-y-1">▲</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-wider text-white uppercase leading-none group-hover:text-brand-lime transition-colors">
                UPLIFT
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-brand-lime mt-1">
                FITNESS STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (8 Working Routes) */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors relative py-1.5 group ${
                    isActive
                      ? 'text-brand-lime'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-brand-lime transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href={`tel:${GYM_CONFIG.contact.phone.replace(/\s+/g, '')}`}
              className="text-slate-300 hover:text-white hidden xl:flex items-center gap-1.5 text-xs font-bold tracking-wider"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-brand-lime" />
              <span>{GYM_CONFIG.contact.displayPhone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenFreeTrial}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="text-xs px-3.5 py-2"
            >
              FREE TRIAL
            </Button>
          </div>

          {/* Mobile Hamburger Toggle & Quick Action */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenFreeTrial}
              className="text-xs px-3 py-1.5 font-bold"
            >
              FREE TRIAL
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-lime"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-lime" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[70px] bottom-0 bg-[#08090A] z-50 lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-white/10 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-lime mb-3 tracking-widest uppercase pb-2 border-b border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>LIC Colony, Borivali West, Mumbai</span>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-display font-bold uppercase tracking-wider py-2.5 px-3 rounded-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-brand-lime/15 text-brand-lime border border-brand-lime/30'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Action Section */}
          <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreeTrial();
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              BOOK A FREE TRIAL
            </Button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-sm bg-[#25D366] text-black font-bold uppercase tracking-wider text-sm hover:bg-[#20BD5A] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <div className="text-center pt-2 text-xs text-slate-400">
              <p>Mon - Sat: 6:00 AM – 10:00 PM | Sun: 8:00 AM – 1:00 PM</p>
              <a
                href={`tel:${GYM_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                className="mt-1 inline-block text-brand-lime font-bold"
              >
                Call: {GYM_CONFIG.contact.displayPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
