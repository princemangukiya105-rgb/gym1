import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Sparkles, Dumbbell, ShieldCheck, Check, X, ArrowRight, Clock } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

interface WhyUpliftPageProps {
  onOpenFreeTrial: () => void;
}

export const WhyUpliftPage: React.FC<WhyUpliftPageProps> = ({ onOpenFreeTrial }) => {
  const pillars = [
    {
      num: '01',
      title: 'Professional, Clutter-Free Environment',
      description: 'You will never encounter broken cables, misplaced dumbbells scattered across walkways, or crowded equipment hogging. Our floor in LIC Colony is maintained to professional standards.',
      icon: <Dumbbell className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '02',
      title: 'Biomechanical Training Guidance',
      description: 'Bad form leads to wear and tear on shoulders, knees, and lower backs. Our coaches continuously monitor posture, bar paths, and foot placement to ensure you lift heavier with zero pain.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '03',
      title: 'Individualized Progression Pathways',
      description: 'No two bodies possess identical femur lengths, shoulder mobility, or metabolic rates. We match exercise variations to your structure rather than forcing arbitrary workouts.',
      icon: <Target className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '04',
      title: 'Disciplined, Respectful Culture',
      description: 'Train among individuals who take their physical health seriously. No intimidation, no vanity influencers blocking stations—just genuine focus and mutual respect.',
      icon: <Sparkles className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '05',
      title: 'Habitual Consistency Over Quick Fixes',
      description: 'We do not sell 14-day detox teas or miraculous fat-melters. We build daily adherence, compound strength, and resilient cardiovascular stamina that lasts for years.',
      icon: <Compass className="w-6 h-6 text-brand-lime" />
    },
    {
      num: '06',
      title: 'Convenient Borivali West Access',
      description: 'Situated right opposite Karnataka Bank in LIC Colony, Borivali West, with morning hours starting from 6:00 AM and closing at 10:00 PM for total schedule flexibility.',
      icon: <Clock className="w-6 h-6 text-brand-lime" />
    }
  ];

  const comparison = [
    {
      feature: 'Workout Supervision & Form Correction',
      uplift: 'Active biomechanical cues & safety supervision',
      generic: 'Trainers glued to phones, help only for paid PT'
    },
    {
      feature: 'Floor Organization & Equipment State',
      uplift: 'Organized dumbbells, maintained cables & racks',
      generic: 'Missing plates, broken pulleys, scattered weights'
    },
    {
      feature: 'Atmosphere & Training Vibe',
      uplift: 'Focused, disciplined, distraction-free strength floor',
      generic: 'Chaotic overcrowding, socializing, long wait times'
    },
    {
      feature: 'Approach to Progress',
      uplift: 'Structured progressive overload & periodization',
      generic: 'Random workouts without record keeping or goals'
    },
    {
      feature: 'Contract Transparency & Pressure',
      uplift: 'Clear pricing, zero pushy aggressive sales scripts',
      generic: 'High-pressure annual renewals and hidden fees'
    }
  ];

  return (
    <>
      <SEO
        title="Why Choose Uplift | Uplift Fitness Studio Borivali West"
        description="Discover why members in Borivali West choose Uplift Fitness Studio over generic commercial gyms. Focused environment, biomechanical form guidance, and real strength progression."
        canonicalPath="/why-uplift"
      />

      {/* Page Hero */}
      <PageHero
        kicker="THE UPLIFT DIFFERENCE • BORIVALI WEST"
        title="WHY TRAIN AT"
        highlight="UPLIFT FITNESS STUDIO?"
        subtitle="Choosing where to invest your workout hours matters. Here is how our training environment and philosophy set you up for lasting physical progress."
        breadcrumbs={[{ label: 'Why Uplift' }]}
        bgImage="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 1. Core Pillars */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="THE ADVANTAGES"
            title="SIX REASONS TO"
            highlight="ELEVATE YOUR STANDARD."
            subtitle="Explore the principles that make training at Uplift in LIC Colony both rewarding and effective."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="gym-card p-8 rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-brand-lime/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-display font-black text-3xl text-stroke-lime opacity-35">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold uppercase text-white tracking-wide mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-brand-lime">
                  <Check className="w-3.5 h-3.5" />
                  <span>The Uplift Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Honest Side-by-Side Comparison */}
      <section className="py-20 lg:py-28 bg-[#0C0E12] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="DIRECT COMPARISON"
            title="UPLIFT STUDIO VS."
            highlight="TYPICAL GYMS."
            subtitle="See the real operational differences between an intentional strength studio and a commercial chain gym."
          />

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-left border-collapse border border-white/10 rounded-sm overflow-hidden min-w-[560px]">
              <thead>
                <tr className="bg-[#14171E] border-b border-white/10">
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/3">
                    Feature / Experience
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-extrabold uppercase tracking-wider text-brand-lime bg-brand-lime/10 border-l border-r border-brand-lime/30 w-1/3">
                    ⚡ Uplift Fitness Studio
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/3">
                    Typical Commercial Gym
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-200 bg-brand-lime/5 border-l border-r border-brand-lime/20 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                        <span>{row.uplift}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Member Perspectives */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="MEMBER VOICES"
            title="EXPERIENCES FROM"
            highlight="BORIVALI WEST."
            subtitle="Authentic reflections from individuals who train consistently at our studio."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="gym-card p-6 sm:p-8 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30 inline-block mb-3">
                    {t.focus}
                  </span>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h4 className="font-display font-bold text-white uppercase text-sm">
                    {t.name}
                  </h4>
                  <span className="text-xs text-slate-400">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final Persuasive CTA */}
      <section className="py-20 lg:py-24 bg-[#08090A] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            STOP SETTLING FOR <span className="text-brand-lime">MEDIOCRE WORKOUTS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Experience what happens when you train in an environment designed strictly for progress. Schedule your free studio pass today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenFreeTrial}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              BOOK FREE STUDIO TRIAL
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                VISIT STUDIO IN BORIVALI WEST
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
