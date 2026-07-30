import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Award, ShieldCheck, Sparkles, Users, Building2, Cpu, Store, UserCheck, Briefcase } from 'lucide-react';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang]?.[key] || translations['en']?.[key] || key;

  const features = [
    { icon: Award, titleKey: 'why.feature1.title', descKey: 'why.feature1.desc' },
    { icon: ShieldCheck, titleKey: 'why.feature2.title', descKey: 'why.feature2.desc' },
    { icon: Sparkles, titleKey: 'why.feature3.title', descKey: 'why.feature3.desc' },
    { icon: Users, titleKey: 'why.feature4.title', descKey: 'why.feature4.desc' },
    { icon: Building2, titleKey: 'why.feature5.title', descKey: 'why.feature5.desc' },
    { icon: Cpu, titleKey: 'why.feature6.title', descKey: 'why.feature6.desc' },
    { icon: Store, titleKey: 'why.feature7.title', descKey: 'why.feature7.desc' },
    { icon: UserCheck, titleKey: 'why.feature8.title', descKey: 'why.feature8.desc' },
    { icon: Briefcase, titleKey: 'why.feature9.title', descKey: 'why.feature9.desc' }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <Sparkles className="w-4 h-4" />
            <span>{t('why.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            {t('why.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors">
                  <Icon className="w-6 h-6 text-[#d4af37] group-hover:text-[#0d0b0d] transition-colors" />
                </div>
                <h3 className="text-xl font-serif-luxury font-bold text-[#10201e] mb-3 group-hover:text-[#d4af37] transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-[#4a5c59] leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
