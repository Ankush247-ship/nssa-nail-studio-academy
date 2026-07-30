import React, { useState } from 'react';
import { useModalA11y } from '../hooks/useModalA11y';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Phone, User, CheckCircle2, Clock } from 'lucide-react';

interface BookingModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ currentLang, onClose }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;
  useModalA11y(onClose);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `📞 *FREE COUNSELLING CALL REQUEST* 📞\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Preferred Time:* ${preferredTime}`;

    setTimeout(() => {
      window.open(`https://wa.me/919820012345?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="relative w-full max-w-md glass-card rounded-3xl border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-[#6b7d7a] hover:text-[#d4af37] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-[#10201e]">
              Counselling Call Requested!
            </h3>
            <p className="text-xs text-[#4a5c59] max-w-sm mx-auto">
              {t('modal.success_msg')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                Free 1-on-1 Career Guidance
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#10201e]" id="booking-modal-title">
                {t('modal.book_title')}
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#10201e] mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#10201e] placeholder-[#94a19e] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#10201e] mb-1">Phone Number (WhatsApp)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#10201e] placeholder-[#94a19e] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#10201e] mb-1">Preferred Call Time</label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#10201e] focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all shadow-lg shadow-[#d4af37]/20"
            >
              {t('modal.submit')}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
