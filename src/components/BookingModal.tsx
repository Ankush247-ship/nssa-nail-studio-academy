import React, { useState } from 'react';
import { useModalA11y } from '../hooks/useModalA11y';
import { Language, BookingFormData } from '../types';
import { translations } from '../translations';
import { salonServices, studioBranches } from '../data/content';
import { X, Calendar, Clock, MapPin, Phone, User, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  currentLang: Language;
  initialServiceId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ currentLang, initialServiceId, onClose }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;
  useModalA11y(onClose);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    city: 'Mumbai',
    branch: studioBranches[0].id,
    serviceId: initialServiceId || salonServices[0].id,
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const serviceObj = salonServices.find((s) => s.id === formData.serviceId);
    const branchObj = studioBranches.find((b) => b.id === formData.branch);

    const message = `✨ *VIP SALON APPOINTMENT REQUEST* ✨\n\n*Client Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Studio:* ${branchObj ? t(branchObj.areaKey) : formData.branch}\n*Service:* ${serviceObj ? t(serviceObj.titleKey) : formData.serviceId}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Notes:* ${formData.notes || 'None'}`;

    const whatsappNumber = branchObj ? branchObj.whatsapp : '919820012345';

    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="relative w-full max-w-lg glass-card rounded-3xl border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
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
              Appointment Request Submitted!
            </h3>
            <p className="text-xs text-[#b0a5b5] max-w-sm mx-auto">
              {t('modal.success_msg')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                Luxury Salon Concierge
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-white" id="booking-modal-title">
                {t('modal.book_title')}
              </h3>
            </div>

            {/* Name & Phone */}
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

              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Phone Number (WhatsApp)</label>
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

              {/* City & Studio Branch */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Select City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => {
                      const newCity = e.target.value;
                      const branchInCity = studioBranches.find((b) => b.city === newCity);
                      setFormData({
                        ...formData,
                        city: newCity,
                        branch: branchInCity ? branchInCity.id : studioBranches[0].id
                      });
                    }}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Guwahati">Guwahati</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Studio Branch</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    {studioBranches
                      .filter((b) => b.city === formData.city)
                      .map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {t(branch.areaKey)}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Select Service</label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                >
                  {salonServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {t(service.titleKey)} — ₹{service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Bridal nail art details, length preference, etc."
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
              {t('modal.submit')}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
