import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Flame, Dumbbell, Zap, HeartPulse } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { PROGRAMS_DATA } from '../../data/programsData';
import { ProgramItem } from '../../types';

interface ProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
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
    <section id="training" className="py-20 lg:py-28 bg-[#0C0E12] relative overflow-hidden">
      
      {/* Decorative gradient glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="02 // TRAINING DISCIPLINES"
          title="FOCUSED PROGRAMS."
          highlight="MEASURABLE RESULTS."
          subtitle="Explore our specialized training streams designed to challenge your physical limits, optimize body composition, and elevate your daily strength."
        />

        {/* Owner Editable Proposal Notice as per Prompt Guidelines */}
        <div className="mb-10 p-3.5 rounded-sm bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs text-slate-400 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-brand-lime shrink-0" />
            <span>
              <strong>Note:</strong> Service categories reflect core studio capabilities and can be customized upon your initial consultation with our coaches.
            </span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {PROGRAMS_DATA.map((program: ProgramItem) => (
            <div
              key={program.id}
              className="gym-card rounded-sm overflow-hidden flex flex-col justify-between group"
            >
              {/* Image & Header */}
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={program.imageUrl}
                    alt={program.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/50 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                    {getProgramIcon(program.id)}
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {program.category}
                    </span>
                  </div>

                  {/* Intensity Pill */}
                  <div className="absolute top-4 right-4 bg-brand-lime text-black font-extrabold text-[11px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {program.intensity}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight group-hover:text-brand-lime transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-xs sm:text-sm font-semibold text-brand-lime tracking-wide">
                    {program.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Key Outcomes Checklist */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Target Focus & Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="p-6 sm:p-8 pt-0">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => onSelectProgram(program.title)}
                  icon={<ArrowRight className="w-4 h-4 text-brand-lime" />}
                  className="group-hover:border-brand-lime group-hover:bg-brand-lime/10"
                >
                  ENQUIRE FOR THIS PROGRAM
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
