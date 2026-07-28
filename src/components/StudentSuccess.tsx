import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Briefcase, TrendingUp, Building2, Award, CheckCircle2, Star, Quote } from 'lucide-react';

interface StudentSuccessProps {
  currentLang: Language;
}

export const StudentSuccess: React.FC<StudentSuccessProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const hiringPartners = [
    { name: 'Lakme Salon Chain', locations: 'Pan India' },
    { name: 'Enrich Salons', locations: 'Mumbai & Pune' },
    { name: 'Lookwell Luxury Salon', locations: 'Mumbai & Goa' },
    { name: 'Urban Company Luxury Beauty', locations: 'Tier 1 Cities' },
    { name: 'Studio 9 Nail Lounge', locations: 'Guwahati & Northeast' }
  ];

  const alumniSuccessStories = [
    {
      name: 'Riniki Kalita',
      course: 'Basic to Advance Nail Course',
      location: 'Guwahati Branch Alumni',
      outcome: 'Launched Her Own Studio - Earning ₹75,000/Month',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
      workImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
      quote: 'I had zero nail art experience before joining. The 30-day practical training gave me complete confidence. Within 60 days of graduation, I opened my studio in Guwahati!'
    },
    {
      name: 'Simran Grover',
      course: 'Advanced Nail Extensions Certification',
      location: 'Mumbai Andheri Branch Alumni',
      outcome: 'Senior Artist at Lakme Salon - Starting Package ₹42,000/Mo',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400',
      workImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600',
      quote: 'The placement team arranged 3 interviews for me before my final exam! I was recruited directly into Lakme Salon as a Senior Extensions Artist.'
    }
  ];

  return (
    <section className="py-20 bg-[#0d0b0d] relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217] text-xs font-semibold text-[#d4af37]">
            <TrendingUp className="w-4 h-4" />
            <span>Alumni Career Success Cell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            {t('success.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#b0a5b5] leading-relaxed">
            {t('success.subtitle')}
          </p>
        </div>

        {/* Career Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-3xl text-center space-y-2 border border-[#d4af37]/20">
            <div className="text-3xl font-serif-luxury font-bold text-gold-gradient">
              ₹35,000 - ₹55,000
            </div>
            <div className="text-xs text-[#e0d8ce] font-semibold">Average Graduate Starting Package</div>
            <div className="text-[11px] text-[#a095a5]">Placed at luxury salon chains within 30 days of course completion.</div>
          </div>

          <div className="glass-card p-6 rounded-3xl text-center space-y-2 border border-[#d4af37]/20">
            <div className="text-3xl font-serif-luxury font-bold text-gold-gradient">
              320+ Studio Launches
            </div>
            <div className="text-xs text-[#e0d8ce] font-semibold">Alumni Entrepreneurship Rate</div>
            <div className="text-[11px] text-[#a095a5]">Over 320 students opened their own nail salons earning ₹1 Lakh+/month.</div>
          </div>

          <div className="glass-card p-6 rounded-3xl text-center space-y-2 border border-[#d4af37]/20">
            <div className="text-3xl font-serif-luxury font-bold text-gold-gradient">
              100% Guaranteed
            </div>
            <div className="text-xs text-[#e0d8ce] font-semibold">Interview Assistance</div>
            <div className="text-[11px] text-[#a095a5]">Unlimited mock interviews, portfolio creation & direct employer referrals.</div>
          </div>
        </div>

        {/* Featured Alumni Stories Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {alumniSuccessStories.map((story, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-[#d4af37]/30 flex flex-col justify-between space-y-6 group hover:border-[#d4af37] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {story.name}
                    </h3>
                    <div className="text-xs text-[#d4af37] font-semibold">{story.course}</div>
                    <div className="text-[11px] text-[#a095a5]">{story.location}</div>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-bold text-[#f7e7ce] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{story.outcome}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5b8] italic leading-relaxed relative pl-4 border-l-2 border-[#d4af37]">
                  "{story.quote}"
                </p>
              </div>

              {/* Student Work Preview */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-[#d4af37]/20">
                <img
                  src={story.workImage}
                  alt={`${story.name} Student Work`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                    {story.name}'s Practical Exam Portfolio Work
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Pill Grid */}
        <div className="mt-12 pt-8 border-t border-[#d4af37]/15">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-6">
            Official Hiring Partners & Placement Recruiters
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-2xl bg-[#161217] border border-[#d4af37]/20 flex items-center gap-3 hover:border-[#d4af37] transition-colors"
              >
                <Building2 className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <div className="text-xs font-bold text-white">{partner.name}</div>
                  <div className="text-[10px] text-[#a095a5]">{partner.locations}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

