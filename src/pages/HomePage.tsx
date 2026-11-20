import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, ShieldCheck, Clock, Award, ChevronRight, MessageSquare } from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { PROGRAMS_DATA } from '../data/programsData';
import { FACILITIES_DATA } from '../data/facilitiesData';
import { GALLERY_DATA } from '../data/galleryData';
import { FAQ_DATA } from '../data/faqData';
import { getWhatsAppUrl } from '../config/gymInfo';

interface HomePageProps {
  onOpenFreeTrial: (program?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenFreeTrial }) => {
  return (
    <>
      <SEO
        title="Uplift Fitness Studio | Strength & Personal Training in Borivali West, Mumbai"
        description="Borivali West's premier fitness destination in LIC Colony. Specializing in progressive strength training, 1-on-1 personal coaching, functional fitness & conditioning. Book your free trial."
        canonicalPath="/"
      />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="Strength training gym with iron plates and barbells at Uplift Fitness Studio Borivali West"
            className="w-full h-full object-cover object-center filter brightness-40 contrast-125 scale-105 transform motion-safe:animate-pulse-subtle"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/80 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090A]/50 to-[#08090A]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 pb-12 w-full">
          {/* Main Headline */}
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

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto sm:max-w-none">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenFreeTrial()}
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(212,255,0,0.4)]"
            >
              START YOUR JOURNEY
            </Button>

            <Link to="/training" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                className="text-slate-200 border-white/20 hover:border-brand-lime"
              >
                EXPLORE TRAINING
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-lime mb-1">
                <Dumbbell className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Heavy Iron Floor</span>
              </div>
              <p className="text-[12px] text-slate-400">Power racks & Olympic plates</p>
            </div>

            <div className="p-3.5 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-lime mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Form Precision</span>
              </div>
              <p className="text-[12px] text-slate-400">Injury-free progressive overload</p>
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
              <p className="text-[12px] text-slate-400">Real workouts, measurable gains</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="01 // THE UPLIFT PHILOSOPHY"
            title="MORE THAN A WORKOUT."
            highlight="A STRONGER YOU."
            subtitle="At Uplift Fitness Studio in LIC Colony, Borivali West, we reject crowded, unguided gym floors. We built an intentional training sanctuary where serious intent meets structured guidance."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                  alt="Barbell deadlift and strength training at Uplift Fitness"
                  className="w-full h-[360px] sm:h-[420px] object-cover filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-black/75 backdrop-blur-md border border-white/10">
                  <span className="text-brand-lime text-xs font-bold uppercase tracking-wider block">
                    Borivali West Facility
                  </span>
                  <p className="text-white text-sm font-semibold mt-0.5">
                    Shop No. 5, Naya Oriental Bldg, Opp. Karnataka Bank
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Too many people join a gym only to wander from machine to machine without a plan, clear progression, or feedback on form. Results stall and motivation fades.
                </p>
                <p>
                  <strong className="text-white">Uplift Fitness Studio is structured differently.</strong> Whether you are lifting weights for the first time or chasing a personal deadlift record, our coaching staff provides the framework, technical corrections, and accountability you need to consistently progress.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link to="/about">
                  <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                    OUR COMPLETE STORY
                  </Button>
                </Link>
                <Link to="/contact" className="text-xs text-slate-400 hover:text-brand-lime transition-colors">
                  Visit Studio in Borivali West →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TRAINING PROGRAMS PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#0C0E12] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="02 // TRAINING DISCIPLINES"
            title="STRUCTURED PROGRAMS."
            highlight="MEASURABLE RESULTS."
            subtitle="Explore our specialized training streams designed to challenge your physical limits, optimize body composition, and elevate your daily strength."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS_DATA.map((program) => (
              <div key={program.id} className="gym-card rounded-sm overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.imageUrl}
                      alt={program.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-black/80 text-[10px] font-bold text-brand-lime px-2.5 py-0.5 rounded border border-white/10 uppercase tracking-wider">
                      {program.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="font-display font-extrabold text-lg uppercase text-white group-hover:text-brand-lime transition-colors leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenFreeTrial(program.title)}
                    className="w-full py-2.5 px-3 rounded-sm bg-white/5 hover:bg-brand-lime hover:text-black border border-white/10 hover:border-brand-lime text-xs font-bold uppercase tracking-wider text-slate-200 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>ENQUIRE FOR THIS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/training">
              <Button variant="secondary" icon={<ArrowRight className="w-4 h-4 text-brand-lime" />}>
                VIEW FULL PROGRAM DETAILS & SCHEDULE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FACILITIES PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="03 // GYM ENVIRONMENT"
            title="PURPOSE-BUILT"
            highlight="FACILITIES."
            subtitle="Take a look at our training zones, heavy-duty racks, cable crossover stations, and dedicated free weight areas in Borivali West."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITIES_DATA.slice(0, 3).map((facility) => (
              <div key={facility.id} className="gym-card rounded-sm overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.imageUrl}
                    alt={facility.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-black/80 px-2.5 py-0.5 rounded text-[10px] font-bold text-brand-lime uppercase tracking-wider border border-white/10">
                    {facility.categoryLabel}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-lg uppercase text-white group-hover:text-brand-lime transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/facilities">
              <Button variant="secondary" icon={<ArrowRight className="w-4 h-4 text-brand-lime" />}>
                EXPLORE ALL EQUIPMENT & AMENITIES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. GALLERY PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#0C0E12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="04 // VISUAL ATMOSPHERE"
            title="THE UPLIFT"
            highlight="COMMUNITY."
            subtitle="Get a preview of our training atmosphere, equipment, and members putting in the work."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_DATA.slice(0, 4).map((item) => (
              <div key={item.id} className="relative h-60 rounded-sm overflow-hidden border border-white/10 group">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold uppercase text-white tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/gallery">
              <Button variant="secondary" icon={<ArrowRight className="w-4 h-4 text-brand-lime" />}>
                VIEW COMPLETE PHOTO GALLERY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="05 // COMMON QUESTIONS"
            title="FREQUENTLY ASKED"
            highlight="QUESTIONS."
            subtitle="Quick answers to frequently asked questions about our studio location, timings, and memberships."
          />

          <div className="space-y-3">
            {FAQ_DATA.slice(0, 3).map((faq) => (
              <div key={faq.id} className="p-5 rounded-sm bg-[#12141A] border border-white/5">
                <h3 className="font-display font-bold text-white uppercase text-base mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/faq">
              <Button variant="secondary" icon={<ChevronRight className="w-4 h-4 text-brand-lime" />}>
                VIEW ALL FAQS & ANSWERS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION BANNER */}
      <section className="relative py-20 lg:py-24 bg-black overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-lime block mb-3">
            // BORIVALI WEST'S PREMIER FITNESS STUDIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight leading-tight">
            YOUR NEXT LEVEL <span className="text-brand-lime">STARTS HERE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Take the first step towards a stronger, healthier and more confident you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenFreeTrial()}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              ENQUIRE NOW
            </Button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-sm bg-[#25D366] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#20BD5A] transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP US DIRECTLY</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
