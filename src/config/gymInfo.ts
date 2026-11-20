/**
 * Central Configuration for Uplift Fitness Studio
 * All business details, contact information, and editable states are maintained here.
 */

export interface GymConfig {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  location: {
    address: string;
    building: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsappNumber: string; // E.164 format without + for wa.me links
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
    email: string;
    instagramUrl: string;
    instagramHandle: string;
  };
  timings: {
    weekday: string;
    sunday: string;
    fullSchedule: { days: string; hours: string }[];
  };
  trialOffer: {
    title: string;
    badge: string;
    description: string;
    requiresOwnerConfirmation: boolean;
  };
}

export const GYM_CONFIG: GymConfig = {
  name: "Uplift Fitness Studio",
  shortName: "Uplift Fitness",
  tagline: "Elevate Your Physical Standard",
  headline: "BUILD STRENGTH. ELEVATE YOURSELF.",
  subheadline: "Your fitness journey deserves the right environment, expert guidance and a commitment to progress.",
  location: {
    address: "Shop No. 5, Naya Oriental Building",
    building: "Naya Oriental Apartments",
    landmark: "Opposite Karnataka Bank",
    area: "LIC Colony, Borivali West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400103",
    fullAddress: "Shop No. 5, Naya Oriental Building, Opposite Karnataka Bank, LIC Colony, Borivali West, Mumbai, Maharashtra 400103",
    // Embed map pointing accurately to LIC Colony Borivali West
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.411684724982!2d72.8465053!3d19.228889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b129188435d5%3A0xe54ef99df7395460!2sLIC%20Colony%2C%20Borivali%20West%2C%20Mumbai%2C%20Maharashtra%20400103!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Uplift+Fitness+Studio+LIC+Colony+Borivali+West+Mumbai+400103"
  },
  contact: {
    phone: "+91 73049 61615",
    displayPhone: "+91 73049 61615",
    whatsappNumber: "917304961615",
    whatsappDisplay: "+91 73049 61615",
    whatsappDefaultMessage: "Hi Uplift Fitness Studio, I'm interested in joining the gym and would like to enquire about membership and a free trial session.",
    email: "enquiry@upliftfitnessstudio.com", // Owner configurable
    instagramUrl: "https://www.instagram.com/uplift_fitness_borivali/",
    instagramHandle: "@uplift_fitness_borivali"
  },
  timings: {
    weekday: "Mon – Sat: 6:00 AM – 10:00 PM",
    sunday: "Sunday: 8:00 AM – 1:00 PM",
    fullSchedule: [
      { days: "Monday – Saturday", hours: "6:00 AM – 10:00 PM" },
      { days: "Sunday", hours: "8:00 AM – 1:00 PM" }
    ]
  },
  trialOffer: {
    title: "1-Day Free Studio Pass & Consultation",
    badge: "Subject to Owner Confirmation",
    description: "Experience the facility, test the equipment, and discuss your fitness goals with our certified coaches before taking a membership decision.",
    requiresOwnerConfirmation: true
  }
};

/**
 * Generates WhatsApp click-to-chat URL with pre-filled message
 */
export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || GYM_CONFIG.contact.whatsappDefaultMessage;
  return `https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
