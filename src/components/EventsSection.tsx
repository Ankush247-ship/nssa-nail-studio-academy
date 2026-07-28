import React from 'react';
import { Language } from '../types';
import { Sparkles, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

interface EventsSectionProps {
  currentLang: Language;
  onOpenAdmission: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ currentLang, onOpenAdmission }) => {
  const events = [
    {
      id: 'exhibition-bhi',
      title: 'StyleSpeak HBS - Hair & Beauty Show India (8th Edition)',
      badge: 'FEATURED EXHIBITOR',
      date: '13th - 14th April 2026',
      location: 'Stall No. F32, Hall No. 3, Bombay Exhibition Centre, Goregaon, Mumbai',
      image: '/event-hbs-invite.jpg',
      description: 'NSSA by Uma Goswami exhibiting at India\'s leading beauty expo — live nail art demonstrations, the 30-Day Basic to Advance Nail Course at ₹15,000 with EMI facility, and attractive discounts on nail products at our stall.'
    },
    {
      id: 'masterclass-3d',
      title: 'Advanced 3D Sculpting & Russian E-File Masterclass',
      badge: 'SPECIAL WORKSHOP',
      date: 'Special Weekend Edition',
      location: 'Andheri East & Guwahati Academies',
      image: '/event-hbs-team.jpg',
      description: 'Intensive 2-day hands-on workshop focusing on Russian cuticle precision, speed extensions, and 3D floral encapsulation for practicing beauty technicians.'
    },
    {
      id: 'graduation-ceremony',
      title: 'Annual Academy Convocation & Excellence Awards',
      badge: 'GRADUATION CEREMONY',
      date: 'Annual Celebration',
      location: 'Grand Ballroom, Mumbai',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      description: 'Awarding Government Authorised Diplomas to certified nail artists, recognizing top performers, and launching top alumni into luxury salon careers.'
    }
  ];

  return (
    <section id="events" className="py-24 bg-[#0d0b0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#161217] text-xs font-semibold text-[#d4af37]">
            <Calendar className="w-4 h-4" />
            <span>Exhibitions & Special Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            Beauty Exhibitions & Masterclass Events
          </h2>
          <p className="text-sm sm:text-base text-[#b0a5b5] leading-relaxed">
            See Nail Style Studio Academy in action at major national beauty expos, masterclasses, and graduation ceremonies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="glass-card rounded-3xl overflow-hidden border border-[#d4af37]/30 flex flex-col justify-between group hover:border-[#d4af37] transition-all"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#d4af37] text-[#0d0b0d] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                    {evt.badge}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif-luxury font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {evt.title}
                  </h3>

                  <div className="space-y-2 text-xs text-[#c0b5a8]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#b0a5b5] leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenAdmission}
                  className="w-full py-3 rounded-full border border-[#d4af37]/40 bg-[#161217] text-xs font-bold text-[#f7e7ce] hover:bg-[#d4af37] hover:text-[#0d0b0d] transition-all flex items-center justify-center gap-2"
                >
                  <span>Enquire For Workshop</span>
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
