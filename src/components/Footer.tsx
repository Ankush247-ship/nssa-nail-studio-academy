import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Award, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  return (
    <footer className="bg-[#f7fdfc] border-t border-[#d4af37]/20 pt-16 pb-24 md:pb-12 text-[#6b7d7a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/15">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] p-0.5">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/logo-nssa.jpg" alt="NSSA Logo" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              <div>
                <span className="font-serif-luxury text-lg font-bold text-[#10201e] block">
                  NSSA
                </span>
                <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-semibold block -mt-1">
                  Nail Style Studio Academy
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#4a5c59]">
              {t('footer.about')}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d4af37]">
              <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Govt. Authorised & Internationally Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#10201e] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#courses" className="hover:text-[#d4af37] transition-colors">{t('nav.academy_courses')}</a></li>
              <li><a href="#showcase" className="hover:text-[#d4af37] transition-colors">{t('nav.real_gallery')}</a></li>
              <li><a href="#trainers" className="hover:text-[#d4af37] transition-colors">{t('nav.trainers')}</a></li>
              <li><a href="#reviews" className="hover:text-[#d4af37] transition-colors">{t('nav.reviews')}</a></li>
              <li><a href="#faq" className="hover:text-[#d4af37] transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          {/* Academy Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#10201e] uppercase tracking-wider">Academy Locations</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Mumbai: Andheri East & Andheri West</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Guwahati: G.S. Road (Christian Basti)</span>
              </div>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#10201e] uppercase tracking-wider">Connect With Us</h4>
            <div className="text-xs space-y-1">
              <div>Phone: +91 98200 12345</div>
              <div>Email: info@nailstylestudio.com</div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Follow us on Instagram" className="w-8 h-8 rounded-full bg-white border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:border-[#d4af37]">
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Follow us on Facebook" className="w-8 h-8 rounded-full bg-white border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:border-[#d4af37]">
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Subscribe on YouTube" className="w-8 h-8 rounded-full bg-white border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:border-[#d4af37]">
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 text-center text-xs text-[#6b7d7a]">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
