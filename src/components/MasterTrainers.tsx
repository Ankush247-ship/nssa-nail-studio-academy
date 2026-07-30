import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { masterTrainers } from '../data/content';
import { Award, CheckCircle2, Sparkles, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

interface MasterTrainersProps {
  currentLang: Language;
}

export const MasterTrainers: React.FC<MasterTrainersProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;
  const founder = masterTrainers[0];

  return (
    <section id="trainers" className="py-24 bg-white relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span>{t('trainers.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
              {t('trainers.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed">
              {t('trainers.subtitle')}
            </p>
          </div>
        </Reveal>

        {/* Founder Spotlight Card */}
        <Reveal delay={0.1}>
          <div className="mt-14 max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden border border-[#d4af37]/30 grid grid-cols-1 md:grid-cols-12">

            {/* Portrait */}
            <div className="md:col-span-5 relative min-h-[280px] md:min-h-full">
              <img
                src={founder.image}
                alt={`${founder.name}, ${t(founder.roleKey)} at NSSA - India's Trusted Nail Educator`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/0" aria-hidden="true" />
            </div>

            {/* Details */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-center">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#10201e]">
                  {founder.name}
                </h3>
                <div className="text-sm font-semibold text-[#d4af37]">
                  {t(founder.roleKey)}
                </div>
                <div className="text-xs text-[#6b7d7a]">
                  {founder.experienceYears}+ Years Industry Experience
                </div>
              </div>

              <p className="text-sm text-[#4a5c59] leading-relaxed">
                {t(founder.specializationKey)}
              </p>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-white border border-[#d4af37]/15 relative">
                <Quote className="w-6 h-6 text-[#d4af37]/20 absolute top-3 right-3" aria-hidden="true" />
                <p className="text-xs italic text-[#4a5c59] leading-relaxed">
                  {t(founder.quoteKey)}
                </p>
              </div>

              {/* Certifications List */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block">
                  Accreditation & Credentials:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#4a5c59]">
                  {founder.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" aria-hidden="true" />
                      <span>{t(cert)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#0a6b62]">
                <Sparkles className="w-4 h-4 text-[#d4af37]" aria-hidden="true" />
                <span>{t('trainers.single_face_note')}</span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
