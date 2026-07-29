import React, { useState } from 'react';
import { useModalA11y } from '../hooks/useModalA11y';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Download, Phone, User, CheckCircle2, FileText } from 'lucide-react';

interface BrochureModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ currentLang, onClose }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;
  useModalA11y(onClose);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    const message = `📄 *COURSE BROCHURE REQUEST* 📄\n\n*Name:* ${name}\n*Phone:* ${phone}\n\nRequesting complete 2026 Course Syllabus, Fee Breakdown & Free Kit Details PDF.`;

    setTimeout(() => {
      window.open(`https://wa.me/919820012345?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div role="dialog" aria-modal="true" aria-labelledby="brochure-modal-title" className="relative w-full max-w-md glass-card rounded-3xl border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-[#a095a5] hover:text-[#d4af37] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">
              Syllabus Sent to WhatsApp!
            </h3>
            <p className="text-xs text-[#b0a5b5]">
              Redirecting to download your official 2026 Prospectus PDF...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-[#d4af37] mb-2">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-white" id="brochure-modal-title">
                {t('modal.brochure_title')}
              </h3>
              <p className="text-xs text-[#b0a5b5]">
                Get instant access to detailed day-wise curriculum, toolkit breakdown & EMI plans.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e0d8ce] mb-1">WhatsApp Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#161217] border border-[#d4af37]/20 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#807585] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Prospectus PDF</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
