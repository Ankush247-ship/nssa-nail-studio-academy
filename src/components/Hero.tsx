import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Star, Award, CheckCircle2, ShieldCheck, Calendar, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenAdmission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking, onOpenAdmission }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const trustMetrics = [
    { icon: CheckCircle2, key: 'hero.trust_students' },
    { icon: Award, key: 'hero.trust_govt' },
    { icon: ShieldCheck, key: 'hero.trust_international' },
    { icon: Sparkles, key: 'hero.trust_experience' }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center justify-center overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0e8f83]/12 via-[#d4af37]/10 to-transparent rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0e8f83]/8 rounded-full blur-[90px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Badge, Headline, Name, Subtitle, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Trust Badge */}
            <Reveal from="down" distance={12}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#fbf7ea] text-xs font-semibold text-[#8a6a10]">
                <Star className="w-3.5 h-3.5 fill-current text-[#d4af37]" aria-hidden="true" />
                <span>{t('hero.badge')}</span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-serif-luxury font-bold tracking-tight text-[#10201e] leading-[1.12]">
                {t('hero.headline')}
              </h1>
            </Reveal>

            {/* Name & Role */}
            <Reveal delay={0.18}>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
                  {t('hero.name')}
                </div>
                <div className="text-sm sm:text-base font-medium text-[#4a5c59] mt-1">
                  {t('hero.subtitle')}
                </div>
              </div>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.24}>
              <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.32}>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenAdmission}
                  className="btn-luxury w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-sm font-bold text-[#10201e] hover:brightness-110 flex items-center justify-center gap-3 shadow-xl shadow-[#d4af37]/25 active:scale-95 group"
                >
                  <GraduationCap className="w-5 h-5 text-[#10201e]" aria-hidden="true" />
                  <span>{t('hero.cta_primary')}</span>
                  <ArrowRight className="w-4 h-4 text-[#10201e] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="btn-luxury w-full sm:w-auto px-8 py-4 rounded-full border border-[#0e8f83]/50 bg-white text-sm font-semibold text-[#0a6b62] hover:bg-[#0e8f83]/10 flex items-center justify-center gap-3 shadow-lg hover:border-[#0e8f83]"
                >
                  <Calendar className="w-5 h-5 text-[#d4af37]" aria-hidden="true" />
                  <span>{t('hero.cta_secondary')}</span>
                </button>
              </div>
            </Reveal>

            {/* Trust Metrics */}
            <RevealGroup className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#3c4a48]" stagger={0.06}>
              {trustMetrics.map(({ icon: Icon, key }) => (
                <RevealItem key={key} className="flex items-center gap-2 bg-[#f7fdfc] border border-[#0e8f83]/20 px-3 py-2.5 rounded-xl">
                  <Icon className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>{t(key)}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Right Column: Founder Hero Image */}
          <Reveal from="right" delay={0.15} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4af37] via-[#e8a7a1] to-[#aa7c11] rounded-3xl blur-xl opacity-25" aria-hidden="true" />

              {/* Founder Portrait */}
              <div className="relative rounded-3xl overflow-hidden border border-[#0e8f83]/20 bg-white shadow-2xl group">
                <img
                  src="/uma-goswami-founder.jpg"
                  alt="Uma Goswami - Founder, Principal Educator & International Master Nail Trainer at NSSA"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Floating Credential Badge */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 bg-white/95 backdrop-blur-xl border border-[#0e8f83]/25 p-4 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#d4af37]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#10201e]">
                        {t('hero.name')}
                      </div>
                      <div className="text-[11px] text-[#4a5c59] mt-0.5">
                        {t('hero.subtitle')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
