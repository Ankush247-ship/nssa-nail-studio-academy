import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { academyCourses } from '../data/content';
import { User, Phone, GraduationCap, CheckCircle2, ArrowRight, Gift } from 'lucide-react';
import { Reveal } from './Reveal';

interface EnquiryFormProps {
  currentLang: Language;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [courseId, setCourseId] = useState(academyCourses[0].id);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const course = academyCourses.find((c) => c.id === courseId);
    const message = `🎓 *COURSE ENQUIRY - NSSA* 🎓\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested Course:* ${course ? t(course.titleKey) : courseId}`;

    setTimeout(() => {
      window.open(`https://wa.me/919820012345?text=${encodeURIComponent(message)}`, '_blank');
    }, 900);
  };

  return (
    <section id="enquiry" className="relative py-12 sm:py-16 bg-white border-t border-[#d4af37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-card rounded-3xl border border-[#d4af37]/30 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[10px] font-extrabold text-[#8a6a10] uppercase tracking-wider">
                  <Gift className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t('enquiry.badge')}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#10201e]">
                  {t('enquiry.title')}
                </h2>
                <p className="text-xs sm:text-sm text-[#4a5c59] leading-relaxed">
                  {t('enquiry.subtitle')}
                </p>
              </div>

              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[#10201e]">{t('enquiry.success_title')}</h3>
                    <p className="text-xs text-[#4a5c59] max-w-sm mx-auto">{t('modal.success_msg')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <User className="w-4 h-4 text-[#d4af37] absolute left-3 top-3.5" aria-hidden="true" />
                        <input
                          type="text"
                          required
                          placeholder={t('enquiry.name_placeholder')}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-[#d4af37]/25 rounded-xl pl-9 pr-4 py-3 text-sm text-[#10201e] placeholder-[#94a19e] focus:border-[#d4af37] focus:outline-none"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#d4af37] absolute left-3 top-3.5" aria-hidden="true" />
                        <input
                          type="tel"
                          required
                          placeholder={t('enquiry.phone_placeholder')}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-[#d4af37]/25 rounded-xl pl-9 pr-4 py-3 text-sm text-[#10201e] placeholder-[#94a19e] focus:border-[#d4af37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-[#d4af37] absolute left-3 top-3.5 z-10" aria-hidden="true" />
                      <select
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                        aria-label={t('enquiry.course_label')}
                        className="w-full bg-white border border-[#d4af37]/25 rounded-xl pl-9 pr-4 py-3 text-sm text-[#10201e] focus:border-[#d4af37] focus:outline-none appearance-none"
                      >
                        {academyCourses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {t(course.titleKey)} — ₹{course.discountedFee.toLocaleString('en-IN')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-sm font-bold text-[#0d0b0d] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/25 active:scale-95"
                    >
                      <span>{t('enquiry.submit')}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <p className="text-[10px] text-center text-[#6b7d7a]">{t('enquiry.privacy_note')}</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
