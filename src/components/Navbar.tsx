import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Sparkles, Globe, Menu, X, Calendar, GraduationCap, Phone, MapPin, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenAdmission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
  onOpenAdmission
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🚩' },
    { code: 'as', name: 'অসমীয়া', flag: '🦏' }
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Urgent Announcement Banner */}
      <div className="bg-gradient-to-r from-[#1c141d] via-[#2a1e2d] to-[#1c141d] border-b border-[#d4af37]/20 py-1.5 px-4 text-xs text-[#f7e7ce] text-center flex items-center justify-center gap-2 overflow-hidden">
        <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse shrink-0" />
        <span className="font-medium tracking-wide truncate">{t('announcement.ticker')}</span>
      </div>

      {/* Main Glass Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d0b0d]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0d0b0d]/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] p-0.5 shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src="/logo-nssa.jpg" alt="NSSA Logo" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div>
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide text-white block group-hover:text-[#d4af37] transition-colors">
                NAIL STYLE STUDIO
              </span>
              <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-semibold block -mt-1">
                ACADEMY & SALON
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#e0d8ce]">
            <a href="#services" className="hover:text-[#d4af37] transition-colors">
              {t('nav.salon_services')}
            </a>
            <a href="#courses" className="hover:text-[#d4af37] transition-colors">
              {t('nav.academy_courses')}
            </a>
            <a href="#showcase" className="hover:text-[#d4af37] transition-colors">
              {t('nav.real_gallery')}
            </a>
            <a href="#trainers" className="hover:text-[#d4af37] transition-colors">
              {t('nav.trainers')}
            </a>
            <a href="#franchise" className="hover:text-[#d4af37] transition-colors">
              {t('nav.franchise')}
            </a>
            <a href="#reviews" className="hover:text-[#d4af37] transition-colors">
              {t('nav.reviews')}
            </a>
            <a href="#locations" className="hover:text-[#d4af37] transition-colors">
              {t('nav.studio_tour')}
            </a>
          </div>

          {/* Action Area: Language Switcher & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Multi-Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217]/80 text-xs font-medium text-[#f7e7ce] hover:border-[#d4af37] transition-all"
                aria-label="Select Language"
              >
                <span>{currentLangObj.flag}</span>
                <span>{currentLangObj.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#161217] border border-[#d4af37]/30 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#d4af37]/10 transition-colors ${
                        currentLang === lang.code ? 'text-[#d4af37] font-bold bg-[#d4af37]/15' : 'text-[#e0d8ce]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      {currentLang === lang.code && <span className="text-[#d4af37]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Salon Button */}
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full border border-[#d4af37]/40 bg-[#161217] text-xs font-semibold text-[#f7e7ce] hover:bg-[#d4af37]/20 transition-all flex items-center gap-1.5 shadow-md hover:shadow-[#d4af37]/20"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{t('nav.book_salon')}</span>
            </button>

            {/* Join Academy Primary Gold CTA */}
            <button
              onClick={onOpenAdmission}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all flex items-center gap-1.5 shadow-lg shadow-[#d4af37]/20 active:scale-95"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t('nav.join_academy')}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Quick Language Pill */}
            <button
              onClick={() => {
                const langCodes: Language[] = ['en', 'hi', 'mr', 'as'];
                const nextIdx = (langCodes.indexOf(currentLang) + 1) % langCodes.length;
                onLanguageChange(langCodes[nextIdx]);
              }}
              className="sm:hidden px-2.5 py-1 rounded-full border border-[#d4af37]/40 bg-[#161217] text-[11px] font-semibold text-[#d4af37] flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLangObj.code.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f7e7ce] hover:text-[#d4af37] transition-colors"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-[#0d0b0d]/95 backdrop-blur-xl border-b border-[#d4af37]/30 p-6 shadow-2xl flex flex-col gap-4 animate-slideDown z-40">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.salon_services')}
          </a>
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.academy_courses')}
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.real_gallery')}
          </a>
          <a
            href="#trainers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.trainers')}
          </a>
          <a
            href="#franchise"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.franchise')}
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.reviews')}
          </a>
          <a
            href="#locations"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#e0d8ce] hover:text-[#d4af37]"
          >
            {t('nav.studio_tour')}
          </a>

          {/* Language Selector Mobile Grid */}
          <div className="pt-2 border-t border-[#d4af37]/20">
            <span className="text-xs text-[#a095a5] uppercase tracking-wider mb-2 block">Choose Language</span>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onLanguageChange(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg border text-xs flex items-center gap-2 ${
                    currentLang === l.code
                      ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37] font-bold'
                      : 'border-[#d4af37]/20 bg-[#161217] text-[#e0d8ce]'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl border border-[#d4af37]/40 bg-[#161217] text-xs font-bold text-[#f7e7ce] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>{t('nav.book_salon')}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t('nav.join_academy')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
