import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { FAQ_DATA } from '../data/faqData';
import { getWhatsAppUrl } from '../config/gymInfo';
import { FaqItem } from '../types';

// Extended complete list of questions for the dedicated FAQ page
const COMPLETE_FAQ_DATA: FaqItem[] = [
  ...FAQ_DATA,
  {
    id: 'faq-beginners',
    question: 'Can absolute beginners join Uplift Fitness Studio?',
    category: 'General',
    answer: 'Yes, absolutely. A significant portion of our members begin with zero barbell experience. Our coaches introduce compound movements through light, progressive sets, ensuring your posture and joint mechanics are solid before increasing loads.'
  },
  {
    id: 'faq-personal-plans',
    question: 'How do personal training sessions work at the studio?',
    category: 'Training',
    answer: 'Personal training is conducted 1-on-1 with a dedicated coach. Sessions include a movement assessment, customized periodized workout splits, real-time kinematic form correction, and ongoing nutrition advice. Slots are booked in advance to avoid crowding.'
  },
  {
    id: 'faq-pricing',
    question: 'What are the gym membership plans and fees?',
    category: 'Membership',
    answer: 'We offer quarterly, half-yearly, and annual membership plans, as well as standalone personal training packages. Because packages vary depending on coaching requirements and seasonal promotions, please contact our studio via WhatsApp or visit our front desk for current fee charts.'
  },
  {
    id: 'faq-locker',
    question: 'Are lockers and water amenities available for members?',
    category: 'Visiting',
    answer: 'Yes. The studio provides secure day-use lockers for your workout belongings, clean changing facilities, and a purified drinking water station. We recommend bringing your own personal sweat towel.'
  }
];

export const FAQPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-location');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Training', 'Visiting', 'Membership'];

  const filteredFaqs = activeCategory === 'All'
    ? COMPLETE_FAQ_DATA
    : COMPLETE_FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <SEO
        title="FAQ | Uplift Fitness Studio Borivali West"
        description="Find direct answers to common questions regarding location, personal training, beginners guidance, timings, and memberships at Uplift Fitness Studio in Borivali West."
        canonicalPath="/faq"
      />

      {/* Page Hero */}
      <PageHero
        kicker="HELP & CLARITY • BORIVALI WEST"
        title="FREQUENTLY ASKED"
        highlight="QUESTIONS."
        subtitle="Clear, honest answers to help you understand our studio, membership structure, personal training options, and visit policies."
        breadcrumbs={[{ label: 'FAQ' }]}
        bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Main FAQ Accordion */}
      <section className="py-20 lg:py-28 bg-[#090A0C] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="DIRECT ANSWERS"
            title="EVERYTHING YOU"
            highlight="NEED TO KNOW."
            subtitle="Browse answers below or filter by topic. Can’t find what you need? Reach out directly via WhatsApp."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-lime text-black font-extrabold shadow-lime-sm'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-sm border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#14171E] border-brand-lime/40 shadow-lg'
                      : 'bg-[#101216] border-white/5 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30">
                        {faq.category}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg uppercase text-white tracking-wide">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-lime bg-brand-lime/15' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Help Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#12141A] border border-brand-lime/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-left space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime block">
                STILL HAVE QUESTIONS?
              </span>
              <h4 className="font-display font-bold text-white uppercase text-xl">
                Chat Directly With Our Borivali Team
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Get immediate responses to membership questions, coach availability, or scheduling queries.
              </p>
            </div>

            <a
              href={getWhatsAppUrl('Hi Uplift Fitness Studio, I checked your FAQ page and have a specific enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#25D366] text-black font-extrabold uppercase text-xs tracking-wider hover:bg-[#20BD5A] transition-colors shrink-0 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP SUPPORT</span>
            </a>
          </div>

        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 lg:py-24 bg-[#0C0E12] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
            READY TO VISIT UPLIFT IN PERSON?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Drop by our studio opposite Karnataka Bank in LIC Colony, Borivali West. We will give you a tour and answer all your questions face-to-face.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                VISIT CONTACT & LOCATION PAGE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
