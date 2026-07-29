import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Compass, Gift, Users, Award, Briefcase, ChevronRight } from 'lucide-react';

interface CourseJourneyProps {
  currentLang: Language;
}

export const CourseJourney: React.FC<CourseJourneyProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const steps = [
    {
      num: '01',
      titleKey: 'journey.step1_title',
      descKey: 'journey.step1_desc',
      icon: Gift
    },
    {
      num: '02',
      titleKey: 'journey.step2_title',
      descKey: 'journey.step2_desc',
      icon: Users
    },
    {
      num: '03',
      titleKey: 'journey.step3_title',
      descKey: 'journey.step3_desc',
      icon: Compass
    },
    {
      num: '04',
      titleKey: 'journey.step4_title',
      descKey: 'journey.step4_desc',
      icon: Award
    },
    {
      num: '05',
      titleKey: 'journey.step5_title',
      descKey: 'journey.step5_desc',
      icon: Briefcase
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <Compass className="w-4 h-4" />
            <span>Structured Learning Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            {t('journey.title')}
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card p-6 rounded-3xl border border-[#d4af37]/20 flex flex-col justify-between relative group hover:border-[#d4af37] transition-all"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif-luxury font-bold text-gold-gradient">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-[#10201e] group-hover:text-[#d4af37] transition-colors">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-xs text-[#4a5c59] leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#d4af37]">
                    <ChevronRight className="w-6 h-6 opacity-60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
