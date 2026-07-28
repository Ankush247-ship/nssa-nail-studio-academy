import React, { useState } from 'react';
import { Language, AdmissionFormData } from '../types';
import { translations } from '../translations';
import { academyCourses, studioBranches } from '../data/content';
import { X, GraduationCap, Phone, Mail, User, CheckCircle2, Gift } from 'lucide-react';

interface AdmissionModalProps {
  currentLang: Language;
  initialCourseId?: string;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ currentLang, initialCourseId, onClose }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const [formData, setFormData] = useState<AdmissionFormData>({
    name: '',
    phone: '',
    email: '',
    city: 'Guwahati',
    courseId: initialCourseId || academyCourses[0].id,
    preferredBatch: '1st & 15th of Next Month',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const courseObj = academyCourses.find((c) => c.id === formData.courseId);

    const message = `🎓 *ACADEMY ADMISSION ENQUIRY* 🎓\n\n*Student Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Preferred Campus:* ${formData.city}\n*Selected Course:* ${courseObj ? t(courseObj.titleKey) : formData.courseId}\n*Preferred Batch:* ${formData.preferredBatch}\n*Notes:* ${formData.notes || 'None'}`;

    setTimeout(() => {
      window.open(`https://wa.me/919820012345?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#a095a5] hover:text-[#d4af37] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">
              Admission Seat Reserved!
            </h3>
            <p className="text-xs text-[#b0a5b5] max-w-sm mx-auto">
              {t('modal.success_msg')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#d4af37] uppercase tracking-wider bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                <Gift className="w-3 h-3" />
                <span>Includes Free ₹15,000 International Kit</span>
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-white pt-1">
                {t('modal.admission_title')}
              </h3>
            </div>

            {/* Inputs */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Phone (WhatsApp)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Campus & Course */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Academy Campus</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="Guwahati (G.S. Road)">Guwahati (G.S. Road Campus)</option>
                    <option value="Mumbai (Andheri West)">Mumbai (Andheri West Campus)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Preferred Batch</label>
                  <select
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="1st of Next Month">1st of Next Month</option>
                    <option value="15th of Next Month">15th of Next Month</option>
                    <option value="Weekend Batch Only">Weekend Batch Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Select Course</label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                >
                  {academyCourses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {t(course.titleKey)} — ₹{course.discountedFee.toLocaleString('en-IN')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Questions / Background (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Do you require hostel facilities, EMI options, etc.?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl p-3 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all shadow-lg shadow-[#d4af37]/20"
            >
              Reserve Seat & Connect on WhatsApp
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
