import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, User, Phone, Dumbbell, ShieldCheck, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/gymInfo';
import { Button } from '../common/Button';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: preselectedProgram || 'Strength & Hypertrophy Training',
    preferredTime: 'Morning (6:00 AM - 10:00 AM)',
    goals: '',
  });

  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    // Simulate API lead transmission
    setTimeout(() => {
      setStatus('submitted');
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Uplift Fitness Studio, I would like to book a Free Studio Trial.\n\nName: ${formData.name || 'Interested Member'}\nPhone: ${formData.phone || 'Provided via WhatsApp'}\nProgram: ${formData.program}\nPreferred Time: ${formData.preferredTime}\nGoal: ${formData.goals || 'Fitness & Strength'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0F1115] border border-white/10 rounded-sm shadow-2xl p-6 sm:p-8 animate-fade-in text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-md bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'submitted' ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-brand-lime/10 border-2 border-brand-lime rounded-full flex items-center justify-center mx-auto text-brand-lime animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-extrabold uppercase text-white">
              Trial Request Received!
            </h3>

            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our training coordinator at LIC Colony, Borivali West will contact you shortly to confirm your scheduled slot.
            </p>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-xs text-slate-400 text-left space-y-1.5 my-4">
              <p><strong className="text-white">Location:</strong> Shop No. 5, Naya Oriental Building, Opp. Karnataka Bank, LIC Colony, Borivali West</p>
              <p><strong className="text-white">Program:</strong> {formData.program}</p>
              <p><strong className="text-white">Preferred Slot:</strong> {formData.preferredTime}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="whatsapp"
                fullWidth
                onClick={handleWhatsAppDirect}
                icon={<MessageSquare className="w-4 h-4" />}
              >
                CONFIRM VIA WHATSAPP
              </Button>
              <Button variant="secondary" fullWidth onClick={onClose}>
                CLOSE WINDOW
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brand-lime/15 border border-brand-lime/30 text-brand-lime text-xs font-bold tracking-wider uppercase mb-2">
                <span>⚡ Free Studio Pass</span>
                <span className="text-slate-400">• Borivali West</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">
                BOOK YOUR <span className="text-brand-lime">FREE TRIAL</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Experience our training floor, consult with coaches, and test the equipment before committing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-[#181B22] border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } focus:border-brand-lime rounded-sm pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#181B22] border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } focus:border-brand-lime rounded-sm pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Preferred Program */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Interested Training Program
                </label>
                <div className="relative">
                  <Dumbbell className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Strength & Hypertrophy Training">Strength & Hypertrophy Training</option>
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                    <option value="Functional Fitness & Conditioning">Functional Fitness & Conditioning</option>
                    <option value="General Fitness, Fat Loss & Conditioning">General Fitness, Fat Loss & Conditioning</option>
                    <option value="General Studio Enquiry">General Studio Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#181B22] border border-white/10 focus:border-brand-lime rounded-sm pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM – 10:00 AM)</option>
                    <option value="Mid-Day (11:00 AM - 4:00 PM)">Mid-Day (11:00 AM – 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 10:00 PM)">Evening (5:00 PM – 10:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3 bg-white/5 border border-white/5 rounded text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                <span>
                  Free trial pass is subject to slot availability and owner confirmation. No spam; your data is strictly handled for studio scheduling.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="md"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'SCHEDULING PASS...' : 'CONFIRM FREE TRIAL PASS'}
                </Button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 rounded-sm bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Instant Schedule on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
