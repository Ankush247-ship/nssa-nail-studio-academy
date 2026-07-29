import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { useModalA11y } from '../hooks/useModalA11y';
>>>>>>> dc318a4e2fed61e23bfee9cb40bcb5ac77ac8174
import { Language, FranchiseFormData } from '../types';
import { translations } from '../translations';
import { X, Building2, Phone, Mail, User, CheckCircle2 } from 'lucide-react';

interface FranchiseModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({ currentLang, onClose }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;
<<<<<<< HEAD
=======
  useModalA11y(onClose);
>>>>>>> dc318a4e2fed61e23bfee9cb40bcb5ac77ac8174

  const [formData, setFormData] = useState<FranchiseFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    investmentBudget: '₹20 Lakhs - ₹30 Lakhs',
    propertyAvailable: true,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `💼 *FRANCHISE PARTNER APPLICATION* 💼\n\n*Investor Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Target City:* ${formData.city}\n*Budget:* ${formData.investmentBudget}\n*Property Available:* ${formData.propertyAvailable ? 'Yes' : 'No'}\n*Message:* ${formData.notes || 'None'}`;

    setTimeout(() => {
      window.open(`https://wa.me/919820012345?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
<<<<<<< HEAD
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
=======
      <div role="dialog" aria-modal="true" aria-labelledby="franchise-modal-title" className="relative w-full max-w-lg glass-card rounded-3xl border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          aria-label="Close"
>>>>>>> dc318a4e2fed61e23bfee9cb40bcb5ac77ac8174
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
              Franchise Enquiry Received!
            </h3>
            <p className="text-xs text-[#b0a5b5] max-w-sm mx-auto">
              Our Franchise Expansion Director will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                Pan-India Studio Partnership
              </span>
<<<<<<< HEAD
              <h3 className="text-2xl font-serif-luxury font-bold text-white">
=======
              <h3 className="text-2xl font-serif-luxury font-bold text-white" id="franchise-modal-title">
>>>>>>> dc318a4e2fed61e23bfee9cb40bcb5ac77ac8174
                {t('modal.franchise_title')}
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Applicant Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="investor@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Proposed City</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune, Kolkata, Guwahati"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Investment Budget</label>
                  <select
                    value={formData.investmentBudget}
                    onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="₹18 Lakhs - ₹25 Lakhs">₹18 Lakhs - ₹25 Lakhs</option>
                    <option value="₹25 Lakhs - ₹35 Lakhs">₹25 Lakhs - ₹35 Lakhs</option>
                    <option value="Above ₹35 Lakhs">Above ₹35 Lakhs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Additional Details (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Location preference, business experience..."
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
              Submit Franchise Plan Request
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
