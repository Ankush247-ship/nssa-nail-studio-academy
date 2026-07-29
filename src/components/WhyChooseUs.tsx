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
    {
      icon: Award,
      title: 'Government Authorised Centre',
      description: 'Officially recognized training center aligned with national beauty skill standards and government accreditation.'
    },
    {
      icon: ShieldCheck,
      title: 'International Certification',
      description: 'ISO 9001:2015 accredited diploma valid globally for job applications and opening independent salons.'
    },
    {
      icon: Sparkles,
      title: '100% Practical Classes',
      description: 'Hands-on training from day 1 with high-end imported products, UV lamps, and specialized E-files.'
    },
    {
      icon: Users,
      title: 'Professional Trainers',
      description: 'Learn directly from Founder Uma Goswami and international master educators with 15+ years experience.'
    },
    {
      icon: Building2,
      title: 'Premium Studio',
      description: 'Luxurious Dior-inspired salon & academy environment with hygienic, state-of-the-art workstations.'
    },
    {
      icon: Cpu,
      title: 'Latest Nail Techniques',
      description: 'Master Gel, Acrylic, BIAB, Polygel, 3D Flower Sculpting, Mirror Chrome, Aura Airbrushing & E-File drilling.'
    },
    {
      icon: Store,
      title: 'Franchise Support',
      description: 'Turnkey franchise model with complete interior design, staff hiring, inventory, and marketing guidance.'
    },
    {
      icon: UserCheck,
      title: 'Live Client Practice',
      description: 'Gain real client confidence before graduating with live client model sessions provided by the academy.'
    },
    {
      icon: Briefcase,
      title: 'Placement Assistance',
      description: 'Guaranteed career guidance, interview scheduling at top luxury salons, and business launch mentorship.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0d0b0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217] text-xs font-semibold text-[#d4af37]">
            <Sparkles className="w-4 h-4" />
            <span>Why Nail Style Studio Academy?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            Excellence in Nail Artistry & Education
          </h2>
          <p className="text-sm sm:text-base text-[#b0a5b5] leading-relaxed">
            We don't just teach nail art—we build high-earning beauty entrepreneurs and deliver luxury salon results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#161217] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors">
                  <Icon className="w-6 h-6 text-[#d4af37] group-hover:text-[#0d0b0d] transition-colors" />
                </div>
                <h3 className="text-xl font-serif-luxury font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#b0a5b5] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
