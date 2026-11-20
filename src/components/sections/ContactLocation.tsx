import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Clock, Send, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { GYM_CONFIG, getWhatsAppUrl } from '../../config/gymInfo';
import { LeadFormData } from '../../types';

export const ContactLocation: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    program: 'Strength & Hypertrophy Training',
    preferredTime: 'Morning (6:00 AM - 10:00 AM)',
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
    // Demo flow simulation
    setTimeout(() => {
      setFormStatus('success');
    }, 800);
  };

  const handleWhatsAppFromForm = () => {
    const text = `Hi Uplift Fitness Studio,\n\nI am submitting a gym membership enquiry:\nName: ${formData.fullName || 'Prospective Member'}\nPhone: ${formData.phone || 'Sent via WhatsApp'}\nProgram: ${formData.program}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message || 'I would like to enquire about membership packages.'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      program: 'Strength & Hypertrophy Training',
      preferredTime: 'Morning (6:00 AM - 10:00 AM)',
      message: '',
      freeTrialConsent: true,
    });
    setFormStatus('idle');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="09 // STUDIO LOCATION & ENQUIRY"
          title="VISIT US IN"
          highlight="BORIVALI WEST."
          subtitle="Drop by our studio in LIC Colony or send an enquiry below. Our coaching staff is available Monday through Saturday to answer questions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols): Location, Hours & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
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
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] text-slate-400">
                  Opp. Karnataka Bank
                </span>
              </div>
            </div>

            {/* Timings Card */}
            <div className="gym-card p-6 sm:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg uppercase">
                    Operating Schedule
                  </h3>
                  <span className="text-xs text-slate-400">
                    6 Days Continuous + Sunday Morning
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

            {/* Direct Connect Buttons */}
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

          {/* Right Column (7 Cols): Contact Form & Google Map Embed */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Lead Capture Form */}
            <div className="gym-card p-6 sm:p-10 rounded-sm">
              
              {formStatus === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-lime/15 border-2 border-brand-lime rounded-full flex items-center justify-center mx-auto text-brand-lime">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                    Enquiry Submitted Successfully!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your request for <strong className="text-brand-lime">{formData.program}</strong>. Our team in Borivali West will contact you via phone or WhatsApp shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      variant="whatsapp"
                      onClick={handleWhatsAppFromForm}
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      SEND COPY VIA WHATSAPP
                    </Button>
                    <Button variant="secondary" onClick={resetForm}>
                      SEND ANOTHER ENQUIRY
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-lime block mb-1">
                      // DIRECT STUDIO ENQUIRY
                    </span>
                    <h3 className="text-2xl font-display font-black uppercase text-white">
                      SEND US A MESSAGE
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Ask about gym membership, trial sessions, or 1-on-1 personal training packages.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-[#181B22] border ${
                          formErrors.fullName ? 'border-red-500' : 'border-white/10'
                        } focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors`}
                      />
                      {formErrors.fullName && <p className="text-xs text-red-400 mt-1">{formErrors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98200 12345"
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
                    {/* Preferred Program */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Training Program
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
                        <option value="General Membership Enquiry">General Membership Enquiry</option>
                      </select>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Preferred Training Time
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
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Message / Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your fitness history, specific questions, or schedule preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span>
                      We respect your privacy. Your contact details are strictly used to schedule your studio visit. No spam or third-party sharing.
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
                      {formStatus === 'submitting' ? 'SUBMITTING ENQUIRY...' : 'SUBMIT ENQUIRY'}
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

            {/* Google Maps Embed Container */}
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
  );
};
