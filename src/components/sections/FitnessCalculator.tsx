import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface FitnessCalculatorProps {
  onOpenFreeTrial: () => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onOpenFreeTrial }) => {
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('172');
  const [goal, setGoal] = useState<'strength' | 'fatloss' | 'conditioning'>('strength');

  const weightNum = parseFloat(weight) || 70;
  const heightNum = (parseFloat(height) || 172) / 100;
  const bmi = (weightNum / (heightNum * heightNum)).toFixed(1);

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-sky-400' };
    if (val < 25) return { text: 'Normal Weight', color: 'text-brand-lime' };
    if (val < 30) return { text: 'Overweight', color: 'text-amber-400' };
    return { text: 'Higher BMI', color: 'text-rose-400' };
  };

  const bmiCategory = getBmiCategory(parseFloat(bmi));

  const getRecommendation = () => {
    switch (goal) {
      case 'strength':
        return {
          title: 'Strength & Hypertrophy Focus',
          description: 'Focus on compound barbell movements (squats, bench, deadlifts) with progressive overload and optimal protein intake.',
          program: 'Strength Training Program'
        };
      case 'fatloss':
        return {
          title: 'Body Recomposition & Caloric Deficit',
          description: 'Combine progressive resistance training with steady functional conditioning to preserve lean muscle while burning adipose tissue.',
          program: 'General Fitness, Fat Loss & Conditioning'
        };
      case 'conditioning':
        return {
          title: 'Athletic Conditioning & Functional Endurance',
          description: 'High-density circuits, kettlebell complexes, and core rotational power to build stamina and heart health.',
          program: 'Functional Fitness & Conditioning'
        };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-20 lg:py-28 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          kicker="INTERACTIVE FITNESS ESTIMATOR"
          title="BENCHMARK YOUR"
          highlight="METRICS."
          subtitle="Use our calculator to estimate your baseline and discover the optimal training pathway for your current physique."
        />

        <div className="max-w-4xl mx-auto gym-card rounded-sm p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Calculator className="w-5 h-5 text-brand-lime" />
                <h3 className="font-display font-bold uppercase text-white tracking-wide text-lg">
                  Input Your Stats
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="35"
                    max="180"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    min="120"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Primary Fitness Objective
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('strength')}
                    className={`py-2 px-2 text-xs font-bold uppercase rounded-sm border transition-colors cursor-pointer ${
                      goal === 'strength'
                        ? 'bg-brand-lime text-black border-brand-lime'
                        : 'bg-[#181B22] text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    Strength
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('fatloss')}
                    className={`py-2 px-2 text-xs font-bold uppercase rounded-sm border transition-colors cursor-pointer ${
                      goal === 'fatloss'
                        ? 'bg-brand-lime text-black border-brand-lime'
                        : 'bg-[#181B22] text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    Fat Loss
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('conditioning')}
                    className={`py-2 px-2 text-xs font-bold uppercase rounded-sm border transition-colors cursor-pointer ${
                      goal === 'conditioning'
                        ? 'bg-brand-lime text-black border-brand-lime'
                        : 'bg-[#181B22] text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    Agility
                  </button>
                </div>
              </div>
            </div>

            {/* Results & Personalized Recommendation */}
            <div className="p-6 rounded-sm bg-[#161920] border border-brand-lime/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Calculated BMI
                  </span>
                  <span className={`text-xs font-bold uppercase ${bmiCategory.color}`}>
                    {bmiCategory.text}
                  </span>
                </div>

                <div className="text-4xl font-display font-black text-white mb-4">
                  {bmi} <span className="text-sm font-normal text-slate-400">kg/m²</span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-lime block mb-1">
                    Recommended Studio Focus
                  </span>
                  <h4 className="font-display font-bold text-white text-lg uppercase">
                    {rec.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={onOpenFreeTrial}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  DISCUSS THIS WITH A COACH
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
