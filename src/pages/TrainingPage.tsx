import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, UserCheck, Flame, ArrowRight, AlertCircle, Dumbbell, Zap, HeartPulse } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { PROGRAMS_DATA } from '../data/programsData';
import { ProgramItem } from '../types';

interface TrainingPageProps {
  onOpenFreeTrial: (programTitle?: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenFreeTrial }) => {
  const getSuitability = (id: string): string[] => {
    switch (id) {
      case 'strength-training':
        return [
          'Individuals aiming to increase compound lifting power (Squats, Deadlifts, Bench Press)',
          'Lifters looking to build dense, sculpted muscle mass and core integrity',
          'Anyone experiencing muscle loss or looking to improve bone mineral density'
        ];
      case 'personal-training':
        return [
          'Beginners seeking 100% focused form supervision and injury prevention',
          'Busy professionals wanting efficient, structured, appointment-based workouts',
          'Lifters stuck at a strength or fat-loss plateau who need accountable programming'
        ];
      case 'functional-fitness':
        return [
          'Athletes and active sports enthusiasts desiring agility, stamina, and core rotational power',
          'Individuals who dislike monotonous static machine lifting and prefer dynamic movement',
          'Anyone wanting real-world mobility, balance, and quick cardiovascular conditioning'
        ];
      default:
        return [
          'Individuals returning to fitness after a sedentary stretch or work hiatus',
          'Anyone targeting sustainable, healthy fat loss without starvation diets',
          'Working professionals looking for daily stress relief, increased stamina, and vitality'
        ];
    }
  };

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'strength-training':
        return <Dumbbell className="w-5 h-5 text-brand-lime" />;
      case 'personal-training':
        return <Flame className="w-5 h-5 text-brand-lime" />;
      case 'functional-fitness':
        return <Zap className="w-5 h-5 text-brand-lime" />;
      default:
        return <HeartPulse className="w-5 h-5 text-brand-lime" />;
    }
  };

  return (
    <>
      <SEO
        title="Training Programs | Uplift Fitness Studio Borivali West"
        description="Explore strength training, 1-on-1 personal coaching, functional fitness, and fat loss conditioning programs at Uplift Fitness Studio in LIC Colony, Borivali West."
        canonicalPath="/training"
      />

      {/* Page Hero */}
      <PageHero
        kicker="TRAINING DISCIPLINES • BORIVALI WEST"
        title="SPECIALIZED PROGRAMS."
        highlight="ENGINEERED FOR PROGRESS."
        subtitle="Every discipline is built on biomechanical science, progressive overload, and attentive coach supervision."
        breadcrumbs={[{ label: 'Training Programs' }]}
        bgImage="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Intro & Owner Notice */}
      <section className="py-12 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            At Uplift Fitness Studio, we do not believe in random workouts. Our training programs are structured around periodized progression, ensuring your time on the gym floor translates into real, lasting strength.
          </p>

          <div className="mt-6 p-3.5 rounded-sm bg-white/5 border border-white/10 text-xs text-slate-400 inline-flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-brand-lime shrink-0" />
            <span>
              <strong>Note:</strong> Program recommendations are customized after your initial movement screening with our training staff.
            </span>
          </div>
        </div>
      </section>

      {/* Deep-Dive Program Cards */}
      <section className="py-20 lg:py-28 bg-[#0C0E12] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PROGRAMS_DATA.map((program: ProgramItem, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.id}
                className="gym-card rounded-sm overflow-hidden border border-white/10 p-6 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column (5 Cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-sm overflow-hidden h-72 sm:h-96 border border-white/10 group">
                      <img
                        src={program.imageUrl}
                        alt={program.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-brand-lime uppercase tracking-wider border border-white/10 flex items-center gap-1.5">
                        {getProgramIcon(program.id)}
                        <span>{program.category}</span>
                      </div>

                      <div className="absolute top-4 right-4 bg-brand-lime text-black px-2.5 py-1 rounded text-[11px] font-extrabold uppercase tracking-wider">
                        {program.intensity}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs uppercase font-semibold text-slate-300">Target Discipline</span>
                        <h4 className="font-display font-black text-xl uppercase tracking-tight text-white mt-0.5">
                          {program.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 Cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-lime block mb-1">
                        PROGRAM OVERVIEW
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">
                        {program.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-lime mt-1">
                        {program.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Who it suits */}
                    <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                        <UserCheck className="w-3.5 h-3.5 text-brand-lime" />
                        <span>Who This Program Is Best Suited For:</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                        {getSuitability(program.id).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-lime">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Deliverables */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Deliverables & Physical Adaptations:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <Button
                        variant="primary"
                        onClick={() => onOpenFreeTrial(program.title)}
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        ENQUIRE FOR THIS PROGRAM
                      </Button>
                      <Link to="/contact" className="text-xs text-slate-400 hover:text-brand-lime transition-colors">
                        Ask about coach availability →
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 lg:py-24 bg-[#090A0C] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
            NOT SURE WHICH PROGRAM FITS YOUR GOALS?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Schedule a free studio tour and movement assessment with our Borivali West coaches. We will evaluate your movement mechanics and guide you to the right split.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenFreeTrial('Movement Screening & Consultation')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              BOOK MOVEMENT SCREENING
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                CONTACT STUDIO
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
