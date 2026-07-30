import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Language } from '../types';
import { translations } from '../translations';
import { beforeAfterPairs } from '../data/content';
import { Sparkles, Camera, Sliders, CheckCircle2, X, ZoomIn } from 'lucide-react';

interface AuthenticShowcaseProps {
  currentLang: Language;
}

interface GalleryItem {
  title: string;
  location: string;
  image: string;
  tag: string;
}

export const AuthenticShowcase: React.FC<AuthenticShowcaseProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'salon' | 'students' | 'studios' | 'before_after'>('salon');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  // Authentic gallery collections
  const salonWork: GalleryItem[] = [
    {
      title: '3D Rose & Crystal Bridal Nail Art with Gold Pearl Detailing',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-roses-3d.jpg',
      tag: 'Real Client Work'
    },
    {
      title: 'Handpainted Butterfly & Floral 3D Sculpted Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-butterfly-floral.jpg',
      tag: 'Client Nails'
    },
    {
      title: 'Celestial Gold Foil & Crystal Star Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-gold-star.jpg',
      tag: 'Handcrafted Result'
    },
    {
      title: 'Nude Glitter Ombre Gel Overlay',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-glitter-pink.jpg',
      tag: 'Client Nails'
    },
    {
      title: 'Emerald Gold Vine Hand-Painted Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-gold-vine.jpg',
      tag: 'Handcrafted Result'
    },
    {
      title: 'Royal Purple Glitter Ombre Extension Set',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-purple-glitter.jpg',
      tag: 'Client Nails'
    },
    {
      title: 'Blue & Gold Chrome Glitter Statement Nails',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-blue-glitter-gold.jpg',
      tag: 'Real Client Work'
    },
    {
      title: 'Hand-Sculpted 3D & 5D Floral Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/art-3d-5d-flowers.jpg',
      tag: 'Advanced Artistry'
    },
    {
      title: 'Master-Level Advanced Nail Art Showcase',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/art-master-advance.jpg',
      tag: 'Handcrafted Result'
    },
    {
      title: 'Frosted Winter Theme Seasonal Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/art-winter-theme.jpg',
      tag: 'Seasonal Collection'
    }
  ];

  const studentClasses: GalleryItem[] = [
    {
      title: 'NSSA Team & Students - Studio Celebration Day',
      location: 'Andheri East Studio',
      image: '/team-group-photo.jpg',
      tag: 'Our NSSA Family'
    },
    {
      title: 'Diploma Certificate Handover - Basic to Advance Batch',
      location: 'Andheri East Academy',
      image: '/certificate-1.jpg',
      tag: 'Certified Alumni'
    },
    {
      title: 'Government Authorised Nail Artist Certification',
      location: 'Andheri East Academy',
      image: '/certificate-2.jpg',
      tag: 'Certified Alumni'
    },
    {
      title: 'Student Graduation Ceremony & Free Kit Handover',
      location: 'Certified Alumni',
      image: '/graduation-certificate-1.jpg',
      tag: 'Diploma Handover'
    }
  ];

  const certificatesWall: GalleryItem[] = [
    { title: 'Diploma & Achievement Certificate #3', location: 'NSSA Andheri East Academy', image: '/certificate-3.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #4', location: 'NSSA Andheri East Academy', image: '/certificate-4.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #5', location: 'NSSA Andheri East Academy', image: '/certificate-5.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #6', location: 'NSSA Andheri East Academy', image: '/certificate-6.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #7', location: 'NSSA Andheri East Academy', image: '/certificate-7.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #8', location: 'NSSA Andheri East Academy', image: '/certificate-8.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #9', location: 'NSSA Andheri East Academy', image: '/certificate-9.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #10', location: 'NSSA Andheri East Academy', image: '/certificate-10.jpg', tag: 'Certified Alumni' },
    { title: 'Diploma & Achievement Certificate #11', location: 'NSSA Andheri East Academy', image: '/certificate-11.jpg', tag: 'Certified Alumni' }
  ];

  const studioInteriors: GalleryItem[] = [
    {
      title: 'Lokhandwala Andheri West Studio - Main Salon Floor',
      location: 'Mumbai - Lokhandwala',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
      tag: 'Mumbai Flagship'
    },
    {
      title: 'GS Road Christian Basti Studio & Academy Practical Lab',
      location: 'Guwahati - GS Road',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
      tag: 'Guwahati Flagship'
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-white text-xs font-semibold text-[#d4af37]">
            <Camera className="w-3.5 h-3.5" />
            <span>{t('showcase.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#10201e]">
            {t('showcase.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#4a5c59] leading-relaxed">
            {t('showcase.subtitle')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-[#d4af37]/20 pb-4">
          <button
            onClick={() => setActiveTab('salon')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'salon'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_salon')}
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'students'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_students')}
          </button>

          <button
            onClick={() => setActiveTab('studios')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'studios'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_studios')}
          </button>

          <button
            onClick={() => setActiveTab('before_after')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'before_after'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-white text-[#10201e] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_before_after')}
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mt-10">
          {activeTab === 'salon' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Highlighted Main Story Card */}
              <div
                onClick={() => setActiveLightbox(salonWork[0])}
                className="md:col-span-7 glass-card rounded-3xl overflow-hidden group border border-[#d4af37]/30 relative flex flex-col justify-between cursor-pointer hover:border-[#d4af37] transition-all"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={salonWork[0].image}
                    alt={salonWork[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">
                    ✨ {salonWork[0].tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 bg-white space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#10201e] group-hover:text-[#d4af37] transition-colors">
                    {salonWork[0].title}
                  </h3>
                  <p className="text-xs text-[#4a5c59] flex items-center gap-1.5">
                    <span className="text-[#d4af37]">📍</span> {salonWork[0].location}
                  </p>
                </div>
              </div>

              {/* Side Staggered Cards */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {salonWork.slice(1, 4).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLightbox(item)}
                    className="glass-card rounded-2xl overflow-hidden group flex items-center gap-4 p-3 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all cursor-pointer"
                  >
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold text-[#d4af37] tracking-wider uppercase block">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-bold text-[#10201e] leading-snug group-hover:text-[#d4af37] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#6b7d7a]">
                        📍 {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Real Nail Art Gallery Grid */}
              <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
                {salonWork.slice(4).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLightbox(item)}
                    className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-[#d4af37]/20 hover:border-[#d4af37] transition-all"
                  >
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5">
                        <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider block truncate">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentClasses.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveLightbox(item)}
                  className="glass-card rounded-3xl overflow-hidden group glass-card-hover border border-[#d4af37]/20 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#d4af37] border border-[#d4af37]/30">
                      🎓 {item.tag}
                    </div>
                  </div>
                  <div className="p-5 space-y-1 bg-white">
                    <h3 className="text-sm font-bold text-[#10201e] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6b7d7a]">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}

              {/* Certificates & Diplomas Wall */}
              <div className="sm:col-span-2 lg:col-span-4 mt-4">
                <div className="text-center mb-5">
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                    {t('showcase.certificates_wall')}
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
                  {certificatesWall.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveLightbox(item)}
                      className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition-all cursor-pointer group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'studios' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studioInteriors.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveLightbox(item)}
                  className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-[#d4af37]/20 hover:border-[#d4af37]"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d4af37]/30">
                      <div className="text-sm font-bold text-[#10201e]">{item.title}</div>
                      <div className="text-xs text-[#d4af37]">{t('showcase.flagship_studios')}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Before & After Comparison Slider */}
          {activeTab === 'before_after' && (
            <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30">
              <div className="text-center mb-6">
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                  {t('showcase.interactive_transformation')}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#10201e] mt-1">
                  {t('showcase.before_after_heading')}
                </h3>
              </div>

              {/* Slider Image Canvas */}
              <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-[#d4af37]/20">
                {/* Before Image */}
                <img
                  src={beforeAfterPairs[0].beforeImage}
                  alt="Before Nails"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-white tracking-wider">
                  {t('showcase.before')}
                </div>

                {/* After Image Clipped */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#d4af37]"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={beforeAfterPairs[0].afterImage}
                    alt="After Extensions"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-[#d4af37] px-3 py-1 rounded-full text-xs font-bold text-[#0d0b0d] tracking-wider">
                    {t('showcase.after')}
                  </div>
                </div>

                {/* Range Controller Overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

                {/* Handle Bar Visual */}
                <div
                  className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center"
                  style={{ left: `calc(${sliderPos}% - 16px)` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0d0b0d] flex items-center justify-center shadow-2xl font-bold text-xs">
                    ↔
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-[#4a5c59] flex items-center justify-center gap-2">
                <Sliders className="w-4 h-4 text-[#d4af37]" />
                <span>{t('showcase.drag_instruction')}</span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Modal — rendered via portal directly into document.body so it
          is never trapped inside an animated (transform) or overflow-hidden
          ancestor, which would otherwise turn this `fixed` element into
          something confined to that ancestor's box instead of the viewport. */}
      {activeLightbox && createPortal(
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-[60vh] sm:h-[70vh]">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <div className="p-6 bg-white border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                  {activeLightbox.tag}
                </span>
                <h3 className="text-lg font-bold text-[#10201e] mt-0.5">
                  {activeLightbox.title}
                </h3>
                <p className="text-xs text-[#6b7d7a] mt-1">
                  📍 {activeLightbox.location}
                </p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-6 py-2.5 rounded-full bg-[#d4af37] text-xs font-bold text-[#0d0b0d] hover:brightness-110"
              >
                {t('showcase.close_preview')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

