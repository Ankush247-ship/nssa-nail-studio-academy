import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { masterTrainers } from '../data/content';
import { Award, CheckCircle2, Sparkles, Quote } from 'lucide-react';

interface MasterTrainersProps {
  currentLang: Language;
}

export const MasterTrainers: React.FC<MasterTrainersProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  return (
    <section id="trainers" className="py-24 bg-[#0d0b0d] relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217] text-xs font-semibold text-[#d4af37]">
            <Award className="w-4 h-4" />
            <span>Celebrity Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            {t('trainers.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#b0a5b5] leading-relaxed">
            {t('trainers.subtitle')}
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {masterTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="glass-card rounded-3xl overflow-hidden border border-[#d4af37]/30 group hover:border-[#d4af37] transition-all p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#d4af37] shrink-0">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-2xl font-serif-luxury font-bold text-white">
                      {trainer.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#d4af37]">
                      {t(trainer.roleKey)}
                    </div>
                    <div className="text-xs text-[#a095a5]">
                      {trainer.experienceYears}+ Years Global Industry Experience
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-2xl bg-[#161217] border border-[#d4af37]/15 relative">
                  <Quote className="w-6 h-6 text-[#d4af37]/20 absolute top-3 right-3" />
                  <p className="text-xs italic text-[#d0c5b8] leading-relaxed">
                    {t(trainer.quoteKey)}
                  </p>
                </div>

                {/* Certifications List */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block">
                    Accreditation & Credentials:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-[#c0b5a8]">
                    {trainer.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
