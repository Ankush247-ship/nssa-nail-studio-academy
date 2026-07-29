import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Building2, Calculator, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface FranchiseSectionProps {
  currentLang: Language;
  onOpenFranchiseModal: () => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({ currentLang, onOpenFranchiseModal }) => {
  const [studioSqFt, setStudioSqFt] = useState<number>(600);

  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  // ROI Calculator Math:
  // Avg revenue per sq ft/mo approx ₹1,200 (including high margin extensions & academy courses)
  // Net profit margin ~ 40-45%
  const monthlyRevenue = studioSqFt * 1150;
  const netProfit = Math.round(monthlyRevenue * 0.42);

  return (
    <section id="franchise" className="py-24 bg-white relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <Building2 className="w-4 h-4" />
            <span>Pan-India Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            {t('franchise.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed">
            {t('franchise.subtitle')}
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-3xl text-center space-y-1 border border-[#d4af37]/20">
            <div className="text-3xl font-serif-luxury font-bold text-gold-gradient">
              {t('franchise.stat_roi')}
            </div>
            <div className="text-xs text-[#4a5c59]">{t('franchise.stat_roi_label')}</div>
          </div>

          <div className="glass-card p-6 rounded-3xl text-center space-y-1 border border-[#d4af37]/20">
            <div className="text-3xl font-serif-luxury font-bold text-gold-gradient">
              {t('franchise.stat_margin')}
            </div>
            <div className="text-xs text-[#4a5c59]">{t('franchise.stat_margin_label')}</div>
          </div>

          <div className="glass-card p-6 rounded-3xl text-center space-y-1 border border-[#d4af37]/20">
            <div className="text-3xl font-serif-luxury font-bold text-gold-gradient">
              Dual Revenue
            </div>
            <div className="text-xs text-[#4a5c59]">Salon Bookings + Academy Fees</div>
          </div>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="mt-14 max-w-4xl mx-auto glass-card p-8 sm:p-10 rounded-3xl border border-[#d4af37]/30 relative">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-[#d4af37]" />
            <h3 className="text-2xl font-serif-luxury font-bold text-[#10201e]">
              {t('franchise.calc_title')}
            </h3>
          </div>

          <div className="space-y-6">
            {/* Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 text-xs font-bold text-[#10201e]">
                <span>{t('franchise.calc_sqft')}</span>
                <span className="text-sm text-[#d4af37] font-extrabold">{studioSqFt} Sq. Ft.</span>
              </div>
              <input
                type="range"
                min="400"
                max="1500"
                step="50"
                value={studioSqFt}
                onChange={(e) => setStudioSqFt(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#6b7d7a] mt-1">
                <span>400 Sq. Ft. (Boutique Studio)</span>
                <span>800 Sq. Ft. (Standard Studio)</span>
                <span>1500 Sq. Ft. (Flagship Academy)</span>
              </div>
            </div>

            {/* Calculated Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#d4af37]/20">
                <div className="text-xs text-[#6b7d7a] mb-1">{t('franchise.calc_est_monthly')}</div>
                <div className="text-2xl sm:text-3xl font-bold text-[#10201e]">
                  ₹{monthlyRevenue.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#d4af37]/30">
                <div className="text-xs text-[#d4af37] font-bold mb-1">{t('franchise.calc_est_profit')}</div>
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient">
                  ₹{netProfit.toLocaleString('en-IN')} / mo
                </div>
              </div>
            </div>

            {/* Franchise Key Perks */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4a5c59]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Turnkey Studio Interior Design & Fitout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Staff Recruitment & Master Training Provided</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Centralized Digital Marketing & Client Bookings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Exclusive Supply Chain for Imported Products</span>
              </div>
            </div>

            {/* Apply Button */}
            <div className="pt-4 text-center">
              <button
                onClick={onOpenFranchiseModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-xs font-bold text-[#0d0b0d] hover:brightness-110 transition-all shadow-xl shadow-[#d4af37]/20 inline-flex items-center justify-center gap-2"
              >
                <span>{t('franchise.cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
