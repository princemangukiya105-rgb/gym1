import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Clock, Send, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { GYM_CONFIG, getWhatsAppUrl } from '../config/gymInfo';
import { LeadFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData & { preferredContactMethod: 'whatsapp' | 'call' }>({
    fullName: '',
    phone: '',
    email: '',
    program: 'Strength & Hypertrophy Training',
    preferredTime: 'Morning (6:00 AM - 10:00 AM)',
    preferredContactMethod: 'whatsapp',
    message: '',
    freeTrialConsent: true,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Valid 10-digit mobile number is required';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('submitting');
    // Simulated demo submission flow
    setTimeout(() => {
      setFormStatus('success');
    }, 700);
  };

  const handleWhatsAppFromForm = () => {
    const text = `Hi Uplift Fitness Studio,\n\nI am sending an enquiry through your website contact page:\nName: ${formData.fullName || 'Prospective Member'}\nPhone: ${formData.phone || 'Provided via WhatsApp'}\nProgram: ${formData.program}\nPreferred Contact Method: ${formData.preferredContactMethod.toUpperCase()}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message || 'I would like to enquire about membership packages and scheduling a visit.'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      program: 'Strength & Hypertrophy Training',
      preferredTime: 'Morning (6:00 AM - 10:00 AM)',
      preferredContactMethod: 'whatsapp',
      message: '',
      freeTrialConsent: true,
    });
    setFormStatus('idle');
  };

  return (
    <>
      <SEO
        title="Contact & Location | Uplift Fitness Studio Borivali West"
        description="Visit Uplift Fitness Studio in LIC Colony, Borivali West, Mumbai. View Google Maps location, opening hours, WhatsApp contact, and submit a membership enquiry."
        canonicalPath="/contact"
      />

      {/* Page Hero */}
      <PageHero
        kicker="STUDIO LOCATION & ENQUIRIES • BORIVALI WEST"
        title="CONNECT WITH"
        highlight="UPLIFT FITNESS."
        subtitle="We invite you to tour the studio, meet our coaching staff, and discuss your fitness goals in person."
        breadcrumbs={[{ label: 'Contact & Location' }]}
        bgImage="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Main Contact & Location Layout */}
      <section className="py-20 lg:py-28 bg-[#090A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="GET IN TOUCH"
            title="FIND US IN"
            highlight="BORIVALI WEST."
            subtitle="Conveniently situated in LIC Colony opposite Karnataka Bank, easily reachable from S.V. Road, Shimpoli, and Borivali Railway Station."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 Cols): Business Info & Hours */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Studio Address Card */}
              <div className="gym-card p-6 sm:p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg uppercase">
                      Studio Address
                    </h3>
                    <span className="text-xs text-brand-lime font-semibold">
                      LIC Colony, Borivali West
                    </span>
                  </div>
                </div>

                <address className="not-italic text-sm text-slate-300 space-y-1.5 leading-relaxed">
                  <p className="font-bold text-white text-base">
                    {GYM_CONFIG.name}
                  </p>
                  <p>{GYM_CONFIG.location.address}</p>
                  <p className="text-brand-lime font-semibold">
                    Landmark: {GYM_CONFIG.location.landmark}
                  </p>
                  <p>{GYM_CONFIG.location.area}</p>
                  <p>{GYM_CONFIG.location.city}, {GYM_CONFIG.location.state} – {GYM_CONFIG.location.pincode}</p>
                </address>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={GYM_CONFIG.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lime hover:underline uppercase tracking-wider"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] text-slate-400">
                    Opp. Karnataka Bank
                  </span>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="gym-card p-6 sm:p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg uppercase">
                      Operating Hours
                    </h3>
                    <span className="text-xs text-slate-400">
                      Flexible morning to late evening schedule
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-slate-300 font-medium">Monday – Saturday</span>
                    <span className="text-white font-bold bg-white/5 px-2.5 py-1 rounded text-xs">
                      6:00 AM – 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">Sunday</span>
                    <span className="text-brand-lime font-bold bg-brand-lime/10 px-2.5 py-1 rounded text-xs">
                      8:00 AM – 1:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-sm bg-[#25D366] text-black font-extrabold uppercase tracking-wider text-sm hover:bg-[#20BD5A] transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>CHAT ON WHATSAPP (+91 73049 61615)</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${GYM_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-[#181B22] border border-white/10 text-white hover:border-brand-lime hover:text-brand-lime text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-lime" />
                    <span>CALL DIRECT</span>
                  </a>

                  <a
                    href={GYM_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-[#181B22] border border-white/10 text-white hover:border-brand-lime hover:text-brand-lime text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-brand-lime" />
                    <span>INSTAGRAM</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column (7 Cols): Form & Map Embed */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Lead Capture Form */}
              <div className="gym-card p-6 sm:p-10 rounded-sm">
                {formStatus === 'success' ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-lime/15 border-2 border-brand-lime rounded-full flex items-center justify-center mx-auto text-brand-lime">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                      Enquiry Logged (Demo Mode)
                    </h3>

                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry for <strong className="text-brand-lime">{formData.program}</strong> has been prepared. Since this is a live client demonstration website without an attached CRM backend, you can forward this enquiry directly to the studio via WhatsApp with one click below:
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="whatsapp"
                        onClick={handleWhatsAppFromForm}
                        icon={<MessageSquare className="w-4 h-4" />}
                      >
                        FORWARD VIA WHATSAPP
                      </Button>
                      <Button variant="secondary" onClick={resetForm}>
                        SUBMIT ANOTHER ENQUIRY
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-lime block mb-1">
                        // STUDIO LEAD CAPTURE
                      </span>
                      <h3 className="text-2xl font-display font-black uppercase text-white">
                        SEND US AN ENQUIRY
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Leave your details below and our team will get in touch with you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kunal Shah"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full bg-[#181B22] border ${
                            formErrors.fullName ? 'border-red-500' : 'border-white/10'
                          } focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors`}
                        />
                        {formErrors.fullName && <p className="text-xs text-red-400 mt-1">{formErrors.fullName}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                          Mobile / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98201 23456"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-[#181B22] border ${
                            formErrors.phone ? 'border-red-500' : 'border-white/10'
                          } focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors`}
                        />
                        {formErrors.phone && <p className="text-xs text-red-400 mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Program */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                          Interested Training Program
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Strength & Hypertrophy Training">Strength & Hypertrophy Training</option>
                          <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                          <option value="Functional Fitness & Conditioning">Functional Fitness & Conditioning</option>
                          <option value="General Fitness, Fat Loss & Conditioning">General Fitness, Fat Loss & Conditioning</option>
                          <option value="General Studio Pass / Tour">General Studio Pass / Tour</option>
                        </select>
                      </div>

                      {/* Contact Method */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                          Preferred Contact Method
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContactMethod: 'whatsapp' })}
                            className={`py-2 px-2 text-xs font-bold uppercase rounded-sm border transition-colors cursor-pointer ${
                              formData.preferredContactMethod === 'whatsapp'
                                ? 'bg-[#25D366] text-black border-[#25D366]'
                                : 'bg-[#181B22] text-slate-300 border-white/10'
                            }`}
                          >
                            WhatsApp
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContactMethod: 'call' })}
                            className={`py-2 px-2 text-xs font-bold uppercase rounded-sm border transition-colors cursor-pointer ${
                              formData.preferredContactMethod === 'call'
                                ? 'bg-brand-lime text-black border-brand-lime'
                                : 'bg-[#181B22] text-slate-300 border-white/10'
                            }`}
                          >
                            Phone Call
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Preferred Training Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM – 10:00 AM)</option>
                        <option value="Mid-Day (11:00 AM - 4:00 PM)">Mid-Day (11:00 AM – 4:00 PM)</option>
                        <option value="Evening (5:00 PM - 10:00 PM)">Evening (5:00 PM – 10:00 PM)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Message or Special Fitness Inquiries (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your fitness history, specific goals, or schedule preferences..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Privacy Note */}
                    <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                      <span>
                        We respect your privacy. Details provided are used exclusively for scheduling your studio visit. No spam.
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="md"
                        disabled={formStatus === 'submitting'}
                        icon={<Send className="w-4 h-4" />}
                      >
                        {formStatus === 'submitting' ? 'RECORDING ENQUIRY...' : 'SUBMIT ENQUIRY'}
                      </Button>

                      <Button
                        type="button"
                        variant="secondary"
                        onClick={handleWhatsAppFromForm}
                        icon={<MessageSquare className="w-4 h-4 text-brand-lime" />}
                        className="shrink-0"
                      >
                        SEND VIA WHATSAPP
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Google Maps Embed */}
              <div className="gym-card p-2 rounded-sm overflow-hidden h-72 sm:h-80 relative">
                <iframe
                  title="Uplift Fitness Studio Location Map in LIC Colony Borivali West"
                  src={GYM_CONFIG.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-sm"
                />
                <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] text-white flex items-center gap-1.5 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                  <span>Shop No. 5, Naya Oriental Bldg, Opp. Karnataka Bank</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
