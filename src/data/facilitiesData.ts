import { FacilityItem } from '../types';

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'strength-zone',
    title: 'Heavy Iron & Free Weight Zone',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    description: 'Comprehensive dumbbell collection up to heavy loads, Olympic barbells, bumper plates, incline and flat benches designed for pure compound strength.',
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Free weights and heavy dumbbell racks at Uplift Fitness Borivali West',
    features: ['Olympic Barbells & Bumper Plates', 'Dumbbells Rack (2.5kg to 40kg+)', 'Adjustable Heavy-Duty Benches', 'Rubberized Shock-Absorbing Flooring']
  },
  {
    id: 'power-racks',
    title: 'Power Racks & Squat Cages',
    category: 'strength',
    categoryLabel: 'Power & Racks',
    description: 'Sturdy power cages equipped with safety spotter arms, multi-grip pull-up bars, and plate-loaded stations for high-intensity lifting.',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Power rack and squat platform at gym in LIC Colony Borivali West',
    features: ['Solid Steel Safety Bars', 'Multi-Grip Pull-Up Attachments', 'Olympic Barbell Sleeves', 'Dedicated Deadlift Platform']
  },
  {
    id: 'cable-stations',
    title: 'Cable Crossover & Resistance Machines',
    category: 'strength',
    categoryLabel: 'Cables & Selectorized',
    description: 'Smooth dual-pulley cable machines and isolated selectorized units providing continuous mechanical tension across full ranges of motion.',
    imageUrl: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Dual cable crossover machine for strength training in Borivali West',
    features: ['Dual Adjustable Pulley (DAP)', 'Lat Pulldown & Seated Cable Row', 'Isolated Chest & Leg Machines', 'Smooth Biomechanical Resistance']
  },
  {
    id: 'functional-turf',
    title: 'Functional Turf & Mobility Space',
    category: 'functional',
    categoryLabel: 'Functional Turf',
    description: 'Open workout turf designed for dynamic athletic drills, kettlebell complexes, battle ropes, medicine ball slams, and deep stretching.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Functional turf zone and athletic conditioning floor',
    features: ['Competition Kettlebells', 'Heavy Battle Ropes', 'Plyometric Soft Boxes', 'Foam Rollers & Mobility Bands']
  },
  {
    id: 'personal-coaching-area',
    title: 'Dedicated Personal Training Enclave',
    category: 'functional',
    categoryLabel: 'Personal Training',
    description: 'Focused space allowing personal coaches and clients to conduct 1-on-1 assessments, technique drills, and posture corrections without congestion.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Dedicated personal coaching environment at Uplift Fitness Borivali West',
    features: ['1-on-1 Movement Analysis', 'Heart Rate & Form Tracking', 'Private Stretching & Recovery', 'Targeted Coaching Focus']
  },
  {
    id: 'amenities-hygiene',
    title: 'Hygienic Changing & Secure Lockers',
    category: 'amenity',
    categoryLabel: 'Amenities',
    description: 'Clean, regularly sanitized locker areas, filtered drinking water, and climate-controlled training floor to maximize comfort throughout your workout.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Clean, air-conditioned studio training floor and amenities',
    features: ['Day-Use Member Lockers', 'Climate-Controlled Air Conditioning', 'Continuous Sanitization Schedule', 'Filtered Water Dispenser']
  }
];
