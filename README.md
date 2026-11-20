# Uplift Fitness Studio - Multi-Page Business Website

A premium, production-quality multi-page business website built for **Uplift Fitness Studio**, Borivali West's premier strength training and personal conditioning facility located in LIC Colony, Mumbai.

Built with **React 18 + TypeScript**, **React Router v6**, **Tailwind CSS**, and **Lucide React**. Designed as a commercial-grade ₹20,000 client presentation demo.

---

## 📍 Business Information
- **Business Name:** Uplift Fitness Studio
- **Address:** Shop No. 5, Naya Oriental Building, Opposite Karnataka Bank, LIC Colony, Borivali West, Mumbai, Maharashtra 400103
- **Primary Landmark:** Opposite Karnataka Bank
- **Phone / WhatsApp:** [+91 73049 61615](tel:+917304961615)
- **Instagram:** [@uplift_fitness_borivali](https://www.instagram.com/uplift_fitness_borivali/)
- **Operating Hours:**
  - **Monday to Saturday:** 6:00 AM – 10:00 PM
  - **Sunday:** 8:00 AM – 1:00 PM

---

## 🌐 8 Dedicated Working Routes

Each page is an independent, reloadable route with its own unique layout, meaningful content, H1 hierarchy, and dynamic SEO metadata:

| Route | Page | Purpose & Key Features |
| :--- | :--- | :--- |
| **`/`** | **Home** | High-conversion landing page. Full-screen cinematic hero ("BUILD STRENGTH. ELEVATE YOURSELF."), location indicators, philosophy teaser, featured program previews, facilities teaser, interactive Fitness Calculator, gallery teaser, FAQ preview, and final enquiry CTA. |
| **`/about`** | **About Us** | Brand-story page. The Uplift origin in LIC Colony, 3-pillar fitness philosophy (Progressive Overload, Biomechanical Integrity, Daily Consistency), 4-step coaching methodology, and studio tour invitation. |
| **`/training`** | **Training Programs** | Comprehensive disciplines page. 4 deep-dive programs (Strength & Hypertrophy, 1-on-1 Personal Coaching, Functional Fitness, General Conditioning) with "Who It Suits" breakdowns, key deliverables, intensity indicators, and dedicated 1-click enquiry triggers. |
| **`/facilities`** | **Facilities & Equipment** | Equipment showcase with interactive category filter tabs (All, Free Weights & Iron, Functional Turf & PT, Amenities). Specifications for power racks, Olympic barbells, dumbbells, cables, and locker hygiene. |
| **`/gallery`** | **Photo Gallery** | Visual atmosphere page with dynamic aspect ratios, category filtering, and full-screen **Lightbox Modal** with Next/Previous navigation and keyboard ESC support. |
| **`/why-uplift`** | **Why Choose Uplift** | Persuasive decision page. 6 core advantages over commercial gyms, side-by-side comparison matrix, authentic member reflections, and consultation booking. |
| **`/faq`** | **FAQ** | Comprehensive interactive accordion covering location, programs, personal training, membership queries, beginner guidance, and hours. Conversational AEO/GEO answers and WhatsApp direct support card. |
| **`/contact`** | **Contact & Location** | Verified address, Google Maps embed, operating hours, direct phone and WhatsApp links, and a validated **Lead Capture Form** with direct WhatsApp forwarding. |

---

## ⚡ Technical Highlights

1. **Client-Side Routing with Instant Scroll-to-Top**:
   - `react-router-dom` with HTML5 History API.
   - `ScrollToTop.tsx` component guarantees page loads at `(0, 0)` on every transition.
   - Catch-all fallback route (`*`) gracefully handles any unexpected URL.

2. **Dynamic SEO & Metadata (`SEO.tsx`)**:
   - Dynamically updates `document.title`, `<meta name="description">`, canonical URL, and Open Graph tags on route changes.
   - Verified local keywords for Borivali West and LIC Colony.
   - Full XML sitemap (`/sitemap.xml`) indexing all 8 routes.

3. **High-Conversion Architecture (CRO)**:
   - Sticky header with active route indicators and "FREE TRIAL" button.
   - Full-screen mobile navigation drawer that auto-closes on route change.
   - Persistent floating WhatsApp launcher with live status badge.
   - Sticky mobile bottom CTA bar with 1-tap "Free Trial Pass" and "WhatsApp" buttons.
   - Interactive Free Trial Modal accessible from any button on any page.

---

## 🛠️ Central Configuration Guide

All business details, phone numbers, WhatsApp text, address, and social links are centrally configured in:
👉 [`src/config/gymInfo.ts`](file:///c:/Users/Prince/Desktop/Gym/src/config/gymInfo.ts)

To modify:
1. **Phone or WhatsApp Number:** Edit `GYM_CONFIG.contact.phone` and `GYM_CONFIG.contact.whatsappNumber`.
2. **Timings:** Edit `GYM_CONFIG.timings`.
3. **Programs:** Edit [`src/data/programsData.ts`](file:///c:/Users/Prince/Desktop/Gym/src/data/programsData.ts).
4. **Facilities:** Edit [`src/data/facilitiesData.ts`](file:///c:/Users/Prince/Desktop/Gym/src/data/facilitiesData.ts).
5. **Gallery:** Edit [`src/data/galleryData.ts`](file:///c:/Users/Prince/Desktop/Gym/src/data/galleryData.ts).
6. **FAQs:** Edit [`src/data/faqData.ts`](file:///c:/Users/Prince/Desktop/Gym/src/data/faqData.ts).
7. **Testimonials:** Edit [`src/data/testimonialsData.ts`](file:///c:/Users/Prince/Desktop/Gym/src/data/testimonialsData.ts).

---

## 📦 Scripts
- `npm run dev` - Start development server
- `npm run build` - Compile TypeScript and create production bundle
- `npm run preview` - Preview production build locally on port 3000
