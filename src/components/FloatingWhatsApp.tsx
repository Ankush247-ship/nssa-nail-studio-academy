import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919372233042?text=Hello%20Nail%20Style%20Studio%20Academy!%20I%20would%20like%20to%20book%20an%20appointment%20or%20enquire%20about%20academy%20courses."
      target="_blank"
      rel="noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-white border border-[#d4af37]/40 p-2.5 pr-5 rounded-full shadow-2xl hover:scale-105 transition-transform group"
      aria-label="Instant WhatsApp Chat"
    >
      <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:bg-emerald-500 transition-colors">
        <MessageSquare className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[11px] font-bold text-[#10201e] flex items-center gap-1">
          <span>Need Instant Assistance?</span>
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
        </div>
        <div className="text-[10px] text-[#d4af37]">Chat on WhatsApp</div>
      </div>
    </a>
  );
};
