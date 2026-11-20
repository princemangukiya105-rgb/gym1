import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  kicker?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker = 'UPLIFT FITNESS STUDIO • BORIVALI WEST',
  title,
  highlight,
  subtitle,
  breadcrumbs,
  bgImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop',
}) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#08090A] border-b border-white/10">
      
      {/* Background with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Gym background"
          className="w-full h-full object-cover object-center filter brightness-25 contrast-125 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/85 to-black/70" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-brand-lime transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-brand-lime transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-lime font-semibold" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-bold tracking-widest uppercase mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>{kicker}</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase text-white tracking-tight leading-[1.05] max-w-4xl">
          {title}{' '}
          {highlight && <span className="text-brand-lime">{highlight}</span>}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>

      </div>
    </section>
  );
};
