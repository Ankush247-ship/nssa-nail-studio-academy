import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { studioBranches } from '../data/content';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Star } from 'lucide-react';

interface StudioLocationsProps {
  currentLang: Language;
}

export const StudioLocations: React.FC<StudioLocationsProps> = ({ currentLang }) => {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Mumbai' | 'Guwahati'>('All');

  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const filteredBranches = selectedCity === 'All'
    ? studioBranches
    : studioBranches.filter((b) => b.city === selectedCity);

  return (
    <section id="locations" className="py-24 bg-white relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <MapPin className="w-4 h-4" />
            <span>Luxury Studios & Academies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            {t('locations.title')}
          </h2>
        </div>

        {/* City Filter Pills */}
        <div className="mt-8 flex justify-center gap-3">
          {['All', 'Mumbai', 'Guwahati'].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCity === city
                  ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                  : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
              }`}
            >
              {city === 'All' ? 'All Studios' : city}
            </button>
          ))}
        </div>

        {/* Branches Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="glass-card rounded-3xl overflow-hidden border border-[#d4af37]/25 flex flex-col justify-between group glass-card-hover"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={t(branch.areaKey)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">
                    {branch.city} Flagship Studio & Academy
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0a6b62] flex items-center gap-1 border border-[#d4af37]/30">
                    <Star className="w-3.5 h-3.5 text-[#d4af37] fill-current" />
                    <span>{branch.googleRating}★ ({branch.reviewCount}+ Reviews)</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif-luxury font-bold text-[#10201e]">
                    {t(branch.areaKey)}
                  </h3>

                  <p className="text-xs text-[#4a5c59] leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{branch.addressKey}</span>
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#4a5c59]">
                    <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{t(branch.timingKey)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#4a5c59]">
                    <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 rounded-full border border-[#d4af37]/40 bg-white text-xs font-bold text-[#0a6b62] hover:bg-[#d4af37]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Studio</span>
                </a>

                <a
                  href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(
                    `Hello Nail Style Studio ${branch.city}! I would like to enquire about salon booking and academy courses.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
