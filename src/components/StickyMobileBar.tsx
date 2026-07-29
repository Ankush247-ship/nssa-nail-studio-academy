import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Calendar, GraduationCap, MessageSquare, Phone } from 'lucide-react';

interface StickyMobileBarProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenAdmission: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ currentLang, onOpenBooking, onOpenAdmission }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0d0b0d]/95 backdrop-blur-xl border-t border-[#d4af37]/30 p-2 px-3 shadow-2xl flex items-center justify-between gap-1.5">
      <button
        onClick={onOpenBooking}
        className="flex-1 py-2 px-2 rounded-xl border border-[#d4af37]/40 bg-[#161217] text-[10px] font-bold text-[#f7e7ce] flex items-center justify-center gap-1 shadow-md active:scale-95"
      >
        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Book Salon</span>
      </button>

      <button
        onClick={onOpenAdmission}
        className="flex-1 py-2 px-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-[10px] font-bold text-[#0d0b0d] flex items-center justify-center gap-1 shadow-lg shadow-[#d4af37]/25 active:scale-95"
      >
        <GraduationCap className="w-3.5 h-3.5" />
        <span>Join Academy</span>
      </button>

      <a
        href="tel:9372233042"
        className="w-9 h-9 rounded-xl bg-[#161217] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 shadow-lg active:scale-95"
        aria-label="Call Now"
      >
        <Phone className="w-4 h-4" />
      </a>

      <a
        href="https://wa.me/919372233042?text=Hello%20Nail%20Style%20Studio%20Academy!%20I%20want%20to%20enquire%20about%20salon%20booking%20/ %20academy%20courses."
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-lg active:scale-95"
        aria-label="Direct WhatsApp Contact"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </div>
  );
};
