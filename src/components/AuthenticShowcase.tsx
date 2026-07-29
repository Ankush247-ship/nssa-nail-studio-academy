import React, { useState } from 'react';
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
<<<<<<< HEAD
    },
    {
      title: 'Golden Vine 3D Floral Nail Art with Enamel Flowers',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-gold-vine.jpg',
      tag: 'Client Nails'
    },
    {
      title: 'Icy Blue Glitter Ombre with Gold Foil & Crystal Accent',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-blue-glitter-gold.jpg',
      tag: 'Client Nails'
    },
    {
      title: 'Lavender Shimmer Gel with Chrome Swirl Detailing',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/nail-art-purple-glitter.jpg',
      tag: 'Client Nails'
    },
    {
      title: 'Master Craft Winter Theme - Hand Painted Snowscape Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/art-winter-theme.jpg',
      tag: 'Master Craft Art'
    },
    {
      title: 'Master Advance In-Built Pressed Flower Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/art-master-advance.jpg',
      tag: 'Master Advance'
    },
    {
      title: '3D & 5D Sculpted Floral and Butterfly Nail Art',
      location: 'NSSA by Uma Goswami - Andheri East',
      image: '/art-3d-5d-flowers.jpg',
      tag: '3D & 5D Art'
=======
>>>>>>> dc318a4e2fed61e23bfee9cb40bcb5ac77ac8174
    }
  ];

  const studentClasses: GalleryItem[] = [
    {
<<<<<<< HEAD
      title: 'Live Nail Extension & Sculpting Practical Session',
      location: 'Andheri East Academy Batch',
      image: '/certificate-1.jpg',
      tag: 'Live Practical Session'
    },
    {
      title: 'NSSA Team & Students - Studio Celebration Day',
      location: 'Andheri East Studio',
      image: '/team-group-photo.jpg',
      tag: 'Our NSSA Family'
    },
    {
      title: 'Diploma Certificate Handover - Basic to Advance Batch',
      location: 'Andheri East Academy',
      image: '/certificate-2.jpg',
      tag: 'Certified Alumni'
=======
      title: 'E-File Cuticle Prep & Russian Manicure Practice',
      location: 'Guwahati Academy Batch',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
      tag: 'Live Practical Session'
    },
    {
      title: 'Master Educator Guiding Apex C-Curve Building',
      location: 'Mumbai Academy Batch',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
      tag: '1-on-1 Mentorship'
    },
    {
      title: '3D Gel Flower Sculpting & Airbrushing Workshop',
      location: 'Academy Batch',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
      tag: 'Advanced Artistry'
>>>>>>> dc318a4e2fed61e23bfee9cb40bcb5ac77ac8174
    },
    {
      title: 'Student Graduation Ceremony & Free Kit Handover',
      location: 'Certified Alumni',
      image: '/graduation-certificate-1.jpg',
      tag: 'Diploma Handover'
    }
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
    <section id="showcase" className="py-20 bg-[#0d0b0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217] text-xs font-semibold text-[#d4af37]">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Gallery & Real Work Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            {t('showcase.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#b0a5b5] leading-relaxed">
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
                : 'bg-[#161217] text-[#e0d8ce] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_salon')}
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'students'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-[#161217] text-[#e0d8ce] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_students')}
          </button>

          <button
            onClick={() => setActiveTab('studios')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'studios'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-[#161217] text-[#e0d8ce] border border-[#d4af37]/20 hover:border-[#d4af37]'
            }`}
          >
            {t('showcase.tab_studios')}
          </button>

          <button
            onClick={() => setActiveTab('before_after')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'before_after'
                ? 'bg-[#d4af37] text-[#0d0b0d] shadow-lg shadow-[#d4af37]/20'
                : 'bg-[#161217] text-[#e0d8ce] border border-[#d4af37]/20 hover:border-[#d4af37]'
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
                  <div className="absolute top-4 left-4 bg-[#0d0b0d]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">
                    ✨ {salonWork[0].tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 bg-[#161217] space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {salonWork[0].title}
                  </h3>
                  <p className="text-xs text-[#b0a5b5] flex items-center gap-1.5">
                    <span className="text-[#d4af37]">📍</span> {salonWork[0].location}
                  </p>
                </div>
              </div>

              {/* Side Staggered Cards */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {salonWork.slice(1).map((item, index) => (
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
                      <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#d4af37] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#a095a5]">
                        📍 {item.location}
                      </p>
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
                    <div className="absolute top-3 left-3 bg-[#0d0b0d]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#d4af37] border border-[#d4af37]/30">
                      🎓 {item.tag}
                    </div>
                  </div>
                  <div className="p-5 space-y-1 bg-[#161217]">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#a095a5]">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
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
                    <div className="absolute bottom-4 left-4 bg-[#0d0b0d]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d4af37]/30">
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-[#d4af37]">Mumbai & Guwahati Flagship Studios</div>
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
                  Interactive Transformation
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mt-1">
                  Severely Bitten Nails Rebuilt into Royal Extension Sculpting
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

              <div className="mt-4 text-center text-xs text-[#b0a5b5] flex items-center justify-center gap-2">
                <Sliders className="w-4 h-4 text-[#d4af37]" />
                <span>Drag the handle left or right to compare before & after transformation</span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#161217] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl">
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
            <div className="p-6 bg-[#0d0b0d] border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                  {activeLightbox.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {activeLightbox.title}
                </h3>
                <p className="text-xs text-[#a095a5] mt-1">
                  📍 {activeLightbox.location}
                </p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-6 py-2.5 rounded-full bg-[#d4af37] text-xs font-bold text-[#0d0b0d] hover:brightness-110"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

