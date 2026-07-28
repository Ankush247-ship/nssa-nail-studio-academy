import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { academyCourses } from '../data/content';
import { GraduationCap, Award, Gift, CheckCircle2, Download, ArrowRight, Sparkles, Calendar, Check, Users } from 'lucide-react';

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

  return (
    <section id="courses" className="py-24 bg-[#0d0b0d] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217] text-xs font-semibold text-[#d4af37]">
            <GraduationCap className="w-4 h-4" />
            <span>Government Authorised Skill Certification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            {t('courses.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#b0a5b5] leading-relaxed">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Free Toolkit Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#211823] via-[#2d1e30] to-[#211823] border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-xs font-extrabold text-[#d4af37]">
                <Gift className="w-3.5 h-3.5" />
                <span>INCLUDED FOR EVERY ENROLLED STUDENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                Complete ₹15,000 International Professional Toolkit
              </h3>
              <p className="text-xs sm:text-sm text-[#c0b5a8] leading-relaxed">
                UV/LED Nail Lamp, Professional E-File Drill, Hard Gels, Acrylic Monomers, Polymer Powders, 3D Sculpting Brushes, Forms, and Rhinestone Kits—yours to keep forever!
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#e0d8ce]">
                <span className="bg-[#0d0b0d]/60 px-3 py-1.5 rounded-lg border border-[#d4af37]/20 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" /> UV/LED 48W Lamp
                </span>
                <span className="bg-[#0d0b0d]/60 px-3 py-1.5 rounded-lg border border-[#d4af37]/20 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" /> Electric E-File Drill
                </span>
                <span className="bg-[#0d0b0d]/60 px-3 py-1.5 rounded-lg border border-[#d4af37]/20 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" /> 40+ Tools & Powders
                </span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4">
              <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
                  alt="Toolkit Included"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">₹15,000 Toolkit Box Preview</span>
                </div>
              </div>
              <button
                onClick={onOpenBrochureModal}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
              >
                <Download className="w-4 h-4" />
                <span>{t('courses.download_syllabus')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-12 grid grid-cols-1 place-items-center gap-8">
          {academyCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group glass-card-hover border border-[#d4af37]/30 relative w-full max-w-xl"
            >
              {/* Card Header & Badge */}
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={t(course.titleKey)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#d4af37] text-[#0d0b0d] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                    {t(course.badgeKey)}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0d0b0d]/85 backdrop-blur-md px-3 py-2 rounded-xl text-xs text-[#f7e7ce] flex items-center justify-between border border-[#d4af37]/20">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{course.durationDays} Days ({course.practicalHours} Hours)</span>
                    </span>
                    <span className="text-[#d4af37] font-bold">Only {course.seatsLeft} Seats Left</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-serif-luxury font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {t(course.titleKey)}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37]">
                    <Award className="w-4 h-4" />
                    <span>{t(course.certificationNameKey)}</span>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="p-4 rounded-2xl bg-[#161217] border border-[#d4af37]/20 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#a095a5] line-through">
                        Original: ₹{course.originalFee.toLocaleString('en-IN')}
                      </div>
                      <div className="text-2xl font-bold text-gold-gradient">
                        ₹{course.discountedFee.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[#d4af37]/20 text-[10px] font-extrabold text-[#d4af37] border border-[#d4af37]">
                      Save ₹{(course.originalFee - course.discountedFee).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Curriculum Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-[#d4af37]/15">
                    <span className="text-xs font-bold text-[#e0d8ce] block uppercase tracking-wider">
                      Practical Curriculum Highlights:
                    </span>
                    {course.curriculumKeys.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#c0b5a8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectCourseToEnroll(course.id)}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 active:scale-95"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{t('courses.enroll_now')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

