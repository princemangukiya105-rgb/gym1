import { ProgramItem } from '../types';

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'strength-training',
    title: 'Strength & Hypertrophy Training',
    category: 'Hypertrophy & Iron',
    tagline: 'Progressive overload for maximum muscle density, joint integrity and metabolic rate.',
    description: 'Designed for individuals seeking real physical power and athletic muscle definition. Our strength floor combines Olympic barbells, calibrated plates, heavy dumbbells, and dedicated squat racks under structured biomechanical guidance.',
    outcomes: [
      'Compound lifts (Squats, Deadlifts, Presses)',
      'Progressive overload tracking & periodization',
      'Improved joint stability and bone mineral density',
      'Enhanced metabolic baseline & posture correction'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Barbell deadlift and heavy strength training at Uplift Fitness Studio Borivali West',
    isOwnerProposal: true,
    intensity: 'High'
  },
  {
    id: 'personal-training',
    title: '1-on-1 Personal Training',
    category: 'Dedicated Mentorship',
    tagline: 'Precision programming, individual accountability and form perfection every session.',
    description: 'Work directly with dedicated fitness coaches who tailor every set, rep, and recovery phase to your exact anatomical structure, current mobility, and personal fitness targets.',
    outcomes: [
      'Personalized biometric & mobility assessment',
      'Real-time kinematic form correction to prevent injury',
      'Custom nutritional and protein guidance',
      'Accelerated results with high accountability'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Personal trainer assisting member with dumbbell press technique in Borivali West',
    isOwnerProposal: true,
    intensity: 'Custom / All Levels'
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness & Athletic Conditioning',
    category: 'Athletic Performance',
    tagline: 'Dynamic movement patterns, core rotational power and real-world stamina.',
    description: 'Break free from rigid machines. Develop three-dimensional athleticism through kettlebell complexes, battle ropes, plyometrics, sled work, and functional movement chains.',
    outcomes: [
      'Multi-planar core strength and balance',
      'High-velocity calorie expenditure and conditioning',
      'Functional movement patterns for everyday vitality',
      'Enhanced cardiovascular endurance and speed'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Functional training and kettlebell conditioning workout at Uplift Fitness',
    isOwnerProposal: true,
    intensity: 'Moderate to High'
  },
  {
    id: 'general-conditioning',
    title: 'General Fitness, Fat Loss & Conditioning',
    category: 'Lifestyle & Body Recomposition',
    tagline: 'Sustainable transformation protocols for active working professionals and beginners.',
    description: 'Whether you are re-entering physical fitness after a hiatus or aiming for lean body recomposition, this program builds sustainable daily momentum with guided resistance and steady cardio routines.',
    outcomes: [
      'Targeted body fat reduction and lean muscle toning',
      'Increased daily energy, stamina and stress resilience',
      'Cardiovascular conditioning and blood pressure regulation',
      'Beginner-friendly progressive ramp-up'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Cardio conditioning and general fitness workout space in Borivali West',
    isOwnerProposal: true,
    intensity: 'Moderate to High'
  }
];
