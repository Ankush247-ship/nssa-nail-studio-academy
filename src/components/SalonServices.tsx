import React, { useState } from 'react';
import { Language, ServiceCategory, SalonService } from '../types';
import { translations } from '../translations';
import { salonServices } from '../data/content';
import { Sparkles, Clock, CheckCircle2, Calendar, Star } from 'lucide-react';

interface SalonServicesProps {
  currentLang: Language;
  onSelectServiceToBook: (serviceId: string) => void;
}

export const SalonServices: React.FC<SalonServicesProps> = ({ currentLang, onSelectServiceToBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const categories: { id: ServiceCategory; labelKey: string }[] = [
    { id: 'all', labelKey: 'services.cat_all' },
    { id: 'extensions', labelKey: 'services.cat_extensions' },
    { id: 'nail-art', labelKey: 'services.cat_art' },
    { id: 'gel-polish', labelKey: 'services.cat_gel' },
    { id: 'bridal', labelKey: 'services.cat_bridal' },
    { id: 'nail-spa', labelKey: 'services.cat_spa' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? salonServices
    : salonServices.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/25'
                  : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Featured Service Spotlight (Show when 'all' or 'bridal' selected) */}
        {(selectedCategory === 'all' || selectedCategory === 'bridal') && (
          <div className="mt-10 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#fdf8ee] via-[#f7fdfc] to-[#fdf8ee] border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
                  alt="Signature Bridal Couture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#d4af37] text-[#0d0b0d] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                  ROYAL SIGNATURE EXPERIENCE
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#10201e]">
                    3D Royal Bridal Nail Couture
                  </h3>
                  <div className="text-2xl font-serif-luxury font-bold text-gold-gradient">
                    ₹4,999 <span className="text-xs font-sans text-[#6b7d7a]">Onwards</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5c59] leading-relaxed">
                  Hand-sculpted 3D flowers, genuine Swarovski crystals, pearl embellishments, and 24K gold leaf details created exclusively for brides in Mumbai & Guwahati. Includes a complimentary trial session.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs text-[#10201e]">
                  <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl border border-[#d4af37]/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Swarovski Crystals</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl border border-[#d4af37]/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Handmade 3D Flowers</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl border border-[#d4af37]/20 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Free VIP Bridal Trial</span>
                  </div>
                </div>
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onSelectServiceToBook('3d-bridal-couture')}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book VIP Bridal Appointment</span>
                  </button>
                  <span className="text-xs text-[#6b7d7a]">Duration: 120 Mins</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group glass-card-hover border border-[#d4af37]/20"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {service.isPopular && (
                    <div className="absolute top-3 left-3 bg-[#d4af37] text-[#0d0b0d] px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-lg">
                      {t('services.popular')}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0a6b62] flex items-center gap-1 border border-[#d4af37]/30">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{service.durationMinutes} mins</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-serif-luxury font-bold text-[#10201e] group-hover:text-[#d4af37] transition-colors">
                      {t(service.titleKey)}
                    </h3>
                    <div className="text-right shrink-0">
                      <div className="text-xl font-bold text-gold-gradient">
                        ₹{service.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-[#6b7d7a]">Onwards</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#4a5c59] leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Included Features List */}
                  <div className="pt-2 space-y-1.5 border-t border-[#d4af37]/15">
                    {service.featuresKeys.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4a5c59]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectServiceToBook(service.id)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-white via-[#f7fdfc] to-white hover:from-[#d4af37] hover:to-[#aa7c11] text-xs font-bold text-[#0a6b62] hover:text-[#0d0b0d] border border-[#d4af37]/40 hover:border-transparent transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('services.book_now')}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
