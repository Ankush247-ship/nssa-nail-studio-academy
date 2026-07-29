import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';
import { useModalA11y } from '../hooks/useModalA11y';

interface LanguageBottomSheetProps {
  currentLang: Language;
  onSelect: (lang: Language) => void;
  onClose: () => void;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'mr', label: 'मराठी', flag: '🇮🇳' },
  { code: 'as', label: 'অসমীয়া', flag: '🇮🇳' }
];

export const LanguageBottomSheet: React.FC<LanguageBottomSheetProps> = ({
  currentLang,
  onSelect,
  onClose
}) => {
  const [visible, setVisible] = useState(false);
  useModalA11y(onClose);

  useEffect(() => {
    // Trigger enter animation on next frame
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleSelect = (lang: Language) => {
    setVisible(false);
    // Let the exit animation play before unmounting
    setTimeout(() => onSelect(lang), 200);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center sm:justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-sheet-title"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[#10201e]/50 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => handleSelect(currentLang)}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className={`relative w-full sm:max-w-sm bg-white/90 backdrop-blur-2xl border border-[#0e8f83]/20 rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 pb-8 transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Grabber for mobile sheet affordance */}
        <div className="sm:hidden w-10 h-1.5 rounded-full bg-[#0e8f83]/20 mx-auto mb-5" aria-hidden="true" />

        <div className="flex items-center gap-2 justify-center mb-1">
          <Globe className="w-4 h-4 text-[#0e8f83]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0e8f83]">
            Nail Style Studio Academy
          </span>
        </div>
        <h2
          id="language-sheet-title"
          className="text-2xl font-serif-luxury font-bold text-[#10201e] text-center mb-6"
        >
          Choose Your Language
        </h2>

        <div className="space-y-2.5">
          {LANGUAGES.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left transition-all ${
                  isActive
                    ? 'border-[#d4af37] bg-[#fdf8ee] shadow-md'
                    : 'border-[#0e8f83]/15 bg-white hover:border-[#0e8f83]/40 hover:bg-[#f7fdfc]'
                }`}
                aria-pressed={isActive}
              >
                <span className="text-xl" aria-hidden="true">{lang.flag}</span>
                <span className="text-sm font-semibold text-[#10201e] flex-1">{lang.label}</span>
                {isActive && (
                  <span className="text-[#d4af37] text-sm font-bold" aria-hidden="true">✓</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
