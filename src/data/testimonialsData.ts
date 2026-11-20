import { TestimonialItem } from '../types';

/**
 * Testimonials Section Configuration
 * IMPORTANT: In adherence to the prompt guidelines, these represent realistic sample testimonials
 * reflecting member satisfaction in Borivali West. They are clearly identified as sample content
 * in the code and UI for gym owner verification and replacement before launch.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Kunal S.',
    location: 'Borivali West (LIC Colony)',
    focus: 'Strength & Hypertrophy',
    quote: 'The environment here is unlike typical commercial gyms where machines are broken and crowds linger. Uplift has an intense, dedicated atmosphere. The equipment is solid, and you get space to actually execute your sets.',
    achievement: 'Added 20kg to compound lifts with zero joint discomfort.',
    isSampleReview: true
  },
  {
    id: 't-2',
    name: 'Pooja M.',
    location: 'Borivali West',
    focus: 'Personal Coaching & Body Recomp',
    quote: 'As someone who was intimidated by weight rooms, the trainers made me feel comfortable from day one. They corrected my squat posture and gave me realistic advice without pushy sales tactics.',
    achievement: 'Consistent 4-day weekly attendance for 6 months straight.',
    isSampleReview: true
  },
  {
    id: 't-3',
    name: 'Amit V.',
    location: 'Shimpoli / Borivali',
    focus: 'Functional Conditioning',
    quote: 'Great location right opposite Karnataka Bank in LIC Colony. Easy to drop by for a 6:30 AM session before heading to work. Clean studio, well maintained dumbbells and racks.',
    achievement: 'Significantly enhanced core strength and daily stamina.',
    isSampleReview: true
  }
];
