export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  outcomes: string[];
  imageUrl: string;
  imageAlt: string;
  isOwnerProposal: boolean; // Indicates proposed service requiring owner confirmation
  intensity: 'High' | 'Moderate to High' | 'Custom / All Levels';
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'functional' | 'amenity';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Strength' | 'Coaching' | 'Equipment' | 'Atmosphere';
  imageUrl: string;
  imageAlt: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  focus: string;
  quote: string;
  achievement: string;
  isSampleReview: boolean; // Clearly indicates placeholder review for owner verification
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Training' | 'Visiting' | 'Membership';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  program: string;
  preferredTime: string;
  message?: string;
  freeTrialConsent: boolean;
}
