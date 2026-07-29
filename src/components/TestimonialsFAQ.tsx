import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { testimonials, faqItems } from '../data/content';
import { Star, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

interface TestimonialsFAQProps {
  currentLang: Language;
}

export const TestimonialsFAQ: React.FC<TestimonialsFAQProps> = ({ currentLang }) => {
  const [faqTab, setFaqTab] = useState<'all' | 'salon' | 'academy' | 'franchise'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  const filteredFaqs = faqTab === 'all'
    ? faqItems
    : faqItems.filter((f) => f.category === faqTab);

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <Star className="w-4 h-4 fill-current" />
            <span>2,500+ Verified 5-Star Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            Loved by Brides, Clients & Master Alumni
          </h2>
        </div>

        {/* Reviews Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-card p-6 rounded-3xl border border-[#d4af37]/20 flex flex-col justify-between space-y-4 glass-card-hover"
            >
              <div className="space-y-3">
                {/* Stars & Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#d4af37]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {test.verified && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#4a5c59] italic leading-relaxed">
                  "{test.reviewKey}"
                </p>

                {/* Result Image Preview if available */}
                {test.resultImage && (
                  <div className="relative h-32 rounded-xl overflow-hidden border border-[#d4af37]/30 my-2">
                    <img
                      src={test.resultImage}
                      alt={`${test.name} Result`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded-full text-[9px] font-bold text-[#d4af37]">
                      Real Result
                    </div>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#d4af37]/15 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#d4af37]"
                />
                <div>
                  <div className="text-xs font-bold text-[#10201e]">{test.name}</div>
                  <div className="text-[10px] text-[#d4af37]">{test.roleKey} ({test.location})</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-12 border-t border-[#d4af37]/20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#10201e]">
              {t('faq.title')}
            </h2>
          </div>

          {/* FAQ Category Pills */}
          <div className="mt-8 flex justify-center gap-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'salon', label: t('faq.cat_salon') },
              { id: 'academy', label: t('faq.cat_academy') },
              { id: 'franchise', label: t('faq.cat_franchise') }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFaqTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  faqTab === tab.id
                    ? 'bg-[#d4af37] text-[#0d0b0d]'
                    : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl border border-[#d4af37]/20 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#10201e] hover:text-[#d4af37] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#d4af37] shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#d4af37] shrink-0" aria-hidden="true" />
                    )}
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${index}`} className="px-5 pb-5 text-xs text-[#4a5c59] leading-relaxed border-t border-[#d4af37]/10 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
