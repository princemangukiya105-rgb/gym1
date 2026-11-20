import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { FAQ_DATA } from '../../data/faqData';
import { getWhatsAppUrl } from '../../config/gymInfo';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-location');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090A0C] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="08 // QUESTIONS & ANSWERS"
          title="FREQUENTLY ASKED"
          highlight="QUESTIONS."
          subtitle="Everything you need to know about our Borivali West studio, equipment access, trial visits, and personal training options."
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-lime/80 px-2 py-0.5 rounded bg-white/5 border border-white/5">
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

        {/* Quick Help Card */}
        <div className="mt-12 p-6 rounded-sm bg-[#12141A] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-white uppercase text-base">
              Have another question not answered here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Speak directly with our gym manager on WhatsApp for immediate answers.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Hi Uplift Fitness Studio, I have a specific question about your gym.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#25D366] text-black font-bold uppercase text-xs tracking-wider hover:bg-[#20BD5A] transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>ASK ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
