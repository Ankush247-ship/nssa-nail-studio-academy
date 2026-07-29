import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Star, Award, CheckCircle2, Calendar, GraduationCap, MapPin, Sparkles, ArrowRight, Flame, Users, Check } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenAdmission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking, onOpenAdmission }) => {
  const t = (key: string) => translations[currentLang][key] || translations['en'][key] || key;

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#0d0b0d]">
      {/* Background Glows & Ambient Particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#d4af37]/15 via-[#e8a7a1]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Urgency Announcement Pill */}
        <Reveal from="down" distance={12} className="mb-8 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/40 bg-[#1c141d] backdrop-blur-md text-xs font-semibold text-[#f7e7ce] shadow-lg shadow-[#d4af37]/10">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]" />
            </span>
            <Flame className="w-4 h-4 text-[#d4af37]" aria-hidden="true" />
            <span>August Academy Batch: Only 4 Seats Left for Guwahati & Mumbai!</span>
            <span className="hidden sm:inline text-[#d4af37] font-bold">Free ₹15k Kit Included</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Brand Founder Tagline Badge */}
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c141d] border border-[#d4af37]/40 text-xs font-semibold text-[#d4af37]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>By Uma Goswami – Nail Spa & Academy</span>
              </div>
            </Reveal>

            {/* Main Title */}
            <Reveal delay={0.12}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.1]">
                <span className="block text-gold-gradient">
                  Become a Certified Professional Nail Artist
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-[#d0c5b8] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Government Authorised Training Centre with Internationally Certified Trainers. Learn from industry experts and build a successful beauty career.
              </p>
            </Reveal>

            {/* Trust Badges Grid */}
            <Reveal delay={0.28}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs text-[#e0d8ce]">
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>Govt Authorised Centre</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <Award className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>Int'l Certified Trainer</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>100% Practical Training</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>Starter Kit Included</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <Star className="w-4 h-4 text-[#d4af37] fill-current shrink-0" aria-hidden="true" />
                  <span>4.7 Google Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>186+ Google Reviews</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>EMI Available</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161217]/90 border border-[#d4af37]/25 px-3 py-2 rounded-xl">
                  <Award className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                  <span>Franchise Available</span>
                </div>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.35}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenBooking}
                  className="btn-luxury w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-sm font-bold text-[#0d0b0d] hover:brightness-110 flex items-center justify-center gap-3 shadow-xl shadow-[#d4af37]/25 active:scale-95 group"
                >
                  <Calendar className="w-5 h-5 text-[#0d0b0d]" aria-hidden="true" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 text-[#0d0b0d] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>

                <button
                  onClick={onOpenAdmission}
                  className="btn-luxury w-full sm:w-auto px-8 py-4 rounded-full border border-[#d4af37]/60 bg-[#161217] text-sm font-semibold text-[#f7e7ce] hover:bg-[#d4af37]/20 flex items-center justify-center gap-3 shadow-lg hover:border-[#d4af37]"
                >
                  <GraduationCap className="w-5 h-5 text-[#d4af37]" aria-hidden="true" />
                  <span>Join Academy</span>
                </button>
              </div>
            </Reveal>

            {/* Google Rating Trust Bar & Live Student Avatars */}
            <Reveal delay={0.42}>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 bg-[#161217]/90 px-3.5 py-1.5 rounded-full border border-[#d4af37]/20">
                  <div className="flex text-[#d4af37]" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#c0b5a8] font-bold">
                    4.9★ Google Rated (2,800+ Client Reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#d4af37]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Graduate now working as a professional nail artist" loading="lazy" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#d4af37]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" alt="Graduate now working as a professional nail artist" loading="lazy" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#d4af37]" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100" alt="Graduate now working as a professional nail artist" loading="lazy" />
                  </div>
                  <span className="text-xs text-[#b0a5b5]">
                    <strong className="text-white font-semibold">1,200+</strong> Graduates Employed
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Multi-Image Collage Layout */}
          <Reveal from="right" delay={0.15} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4af37] via-[#e8a7a1] to-[#aa7c11] rounded-3xl blur-xl opacity-25" aria-hidden="true" />
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#161217] shadow-2xl group">
                <img
                  src="/studio-front.jpg"
                  alt="Nail Style Studio & Academy - Andheri East Studio Front"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Top Location Tag */}
                <div className="absolute top-4 left-4 bg-[#0d0b0d]/85 backdrop-blur-md border border-[#d4af37]/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-[#f7e7ce] shadow-xl">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
                  <span>Mumbai & Guwahati Studios</span>
                </div>

                {/* Floating Overlay Card: Kit Badge */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 bg-[#161217]/95 backdrop-blur-xl border border-[#d4af37]/40 p-4 rounded-2xl shadow-2xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-[#d4af37] font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" aria-hidden="true" /> Guaranteed Academy Perk
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Free ₹15,000 Professional Toolkit
                      </div>
                      <div className="text-[11px] text-[#b0a5b5] mt-0.5">
                        UV/LED Lamp, E-File Drill & 40+ Tools Included
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-[#d4af37]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Image Thumbnail Card (Classroom Practical Session) */}
              <div className="hidden sm:flex absolute -bottom-8 -left-8 bg-[#161217] border border-[#d4af37]/40 p-2.5 rounded-2xl shadow-2xl items-center gap-3 max-w-xs z-20 hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=200"
                  alt="Live Practical Training"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#d4af37]/30"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider block">100% Practical Training</span>
                  <h4 className="text-xs font-bold text-white leading-tight">Live Student Practice Sessions</h4>
                  <p className="text-[10px] text-[#a095a5] mt-0.5">Real client models provided in class</p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>

        {/* Bottom Metrics Bar */}
        <RevealGroup className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-6 gap-4 p-6 rounded-3xl glass-card border border-[#d4af37]/20 divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/15" stagger={0.06}>
          <RevealItem className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
              5,000+
            </div>
            <div className="text-xs text-[#b8ada0] mt-1 font-semibold">Students Trained</div>
          </RevealItem>
          <RevealItem className="text-center p-2 pt-4 md:pt-2">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
              10,000+
            </div>
            <div className="text-xs text-[#b8ada0] mt-1 font-semibold">Happy Clients</div>
          </RevealItem>
          <RevealItem className="text-center p-2 pt-4 md:pt-2">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
              4.7★
            </div>
            <div className="text-xs text-[#b8ada0] mt-1 font-semibold">186+ Google Reviews</div>
          </RevealItem>
          <RevealItem className="text-center p-2 pt-4 md:pt-2">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
              2 Cities
            </div>
            <div className="text-xs text-[#b8ada0] mt-1 font-semibold">Mumbai & Guwahati</div>
          </RevealItem>
          <RevealItem className="text-center p-2 pt-4 md:pt-2">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
              15+ Years
            </div>
            <div className="text-xs text-[#b8ada0] mt-1 font-semibold">Industry Experience</div>
          </RevealItem>
          <RevealItem className="text-center p-2 pt-4 md:pt-2">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient">
              98%
            </div>
            <div className="text-xs text-[#b8ada0] mt-1 font-semibold">Student Satisfaction</div>
          </RevealItem>
        </RevealGroup>

      </div>
    </section>
  );
};

