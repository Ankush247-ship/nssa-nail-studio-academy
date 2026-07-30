import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { academyCourses } from '../data/content';
import { GraduationCap, Award, CheckCircle2, Download, ArrowRight, Calendar, Sparkles, TrendingUp, Banknote, Building2 } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

interface AcademyCoursesProps {
  currentLang: Language;
  onSelectCourseToEnroll: (courseId: string) => void;
  onOpenBrochureModal: () => void;
}

export const AcademyCourses: React.FC<AcademyCoursesProps> = ({
  currentLang,
  onSelectCourseToEnroll,
  onOpenBrochureModal
}) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const featuredCourse = academyCourses[0];
  const otherCourses = academyCourses.slice(1);

  const careerBenefits = [
    { icon: Sparkles, titleKey: 'benefits.income.title', descKey: 'benefits.income.desc' },
    { icon: Banknote, titleKey: 'benefits.perclient.title', descKey: 'benefits.perclient.desc' },
    { icon: Building2, titleKey: 'benefits.business.title', descKey: 'benefits.business.desc' }
  ];

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              <span>{t('courses.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
              {t('courses.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed">
              {t('courses.subtitle')}
            </p>
          </div>
        </Reveal>

        {/* Career Benefits Section */}
        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6" stagger={0.08}>
          {careerBenefits.map(({ icon: Icon, titleKey, descKey }) => (
            <RevealItem
              key={titleKey}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#fbf7ea] to-white border border-[#d4af37]/30 shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#d4af37]" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-[#10201e] mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5c59] leading-relaxed">
                {t(descKey)}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-3 text-center text-[10px] text-[#8a9895]">{t('benefits.footer_note')}</p>

        {/* Featured Course — Basic to Advance */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-gradient-to-br from-[#fbf7ea] via-white to-[#f7fdfc] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-64 lg:h-auto">
                <img
                  src={featuredCourse.image}
                  alt={t(featuredCourse.titleKey)}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0d0b0d] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                  {t(featuredCourse.badgeKey)}
                </div>
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#10201e]">
                    {t(featuredCourse.titleKey)}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#4a5c59]">
                    <span className="flex items-center gap-1.5 bg-white border border-[#d4af37]/20 px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
                      {featuredCourse.durationDays} {t('courses.days_label')}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white border border-[#d4af37]/20 px-3 py-1.5 rounded-full">
                      <Award className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
                      {t(featuredCourse.certificationNameKey)}
                    </span>
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-gold-gradient">
                  ₹{featuredCourse.discountedFee.toLocaleString('en-IN')}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuredCourse.curriculumKeys.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4a5c59]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{t(item)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onSelectCourseToEnroll(featuredCourse.id)}
                    className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 active:scale-95"
                  >
                    <GraduationCap className="w-4 h-4" aria-hidden="true" />
                    <span>{t('courses.enroll_now')}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={onOpenBrochureModal}
                    className="flex-1 py-3.5 rounded-full border border-[#0e8f83]/40 bg-white text-xs font-bold text-[#0a6b62] hover:bg-[#0e8f83]/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>{t('courses.download_syllabus')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Other Courses Grid */}
        <div className="mt-16">
          <h3 className="text-center text-lg sm:text-xl font-serif-luxury font-bold text-[#10201e] mb-8">
            {t('courses.other_courses_title')}
          </h3>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
            {otherCourses.map((course) => (
              <RevealItem
                key={course.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-[#d4af37]/25 hover:border-[#d4af37] transition-all group"
              >
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={t(course.titleKey)}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#8a6a10] px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-md">
                      {t(course.badgeKey)}
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="text-lg font-serif-luxury font-bold text-[#10201e] group-hover:text-[#d4af37] transition-colors">
                      {t(course.titleKey)}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-[#4a5c59]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
                        {course.durationDays} {t('courses.days_label')}
                      </span>
                      <span className="text-lg font-bold text-gold-gradient">
                        ₹{course.discountedFee.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-[#d4af37]/15">
                      {course.curriculumKeys.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#4a5c59]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{t(item)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectCourseToEnroll(course.id)}
                    className="w-full py-3 rounded-full border border-[#d4af37]/50 bg-white text-xs font-bold text-[#8a6a10] hover:bg-[#d4af37]/10 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>{t('courses.enroll_now')}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

      </div>
    </section>
  );
};
