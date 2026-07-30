/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Reveal } from './components/Reveal';
import { LanguageBottomSheet } from './components/LanguageBottomSheet';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EnquiryForm } from './components/EnquiryForm';
import { AuthenticShowcase } from './components/AuthenticShowcase';
import { AcademyCourses } from './components/AcademyCourses';
import { CourseJourney } from './components/CourseJourney';
import { MasterTrainers } from './components/MasterTrainers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StudentSuccess } from './components/StudentSuccess';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { BookingModal } from './components/BookingModal';
import { AdmissionModal } from './components/AdmissionModal';
import { BrochureModal } from './components/BrochureModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('nss_lang');
    return (saved as Language) || 'en';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [selectedAdmissionCourseId, setSelectedAdmissionCourseId] = useState<string | undefined>();

  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  const [languageSheetOpen, setLanguageSheetOpen] = useState(false);

  useEffect(() => {
    const hasChosenLanguage = localStorage.getItem('nss_lang_chosen');
    if (!hasChosenLanguage) {
      setLanguageSheetOpen(true);
    }
  }, []);

  // Mouse Glow Cursor Tracker
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('nss_lang', lang);
    localStorage.setItem('nss_lang_chosen', '1');
  };

  const handleOpenCourseEnrollment = (courseId: string) => {
    setSelectedAdmissionCourseId(courseId);
    setAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#10201e] font-sans relative selection:bg-[#d4af37] selection:text-[#0d0b0d]">

      {/* Luxury Ambient Glow Cursor on Desktop */}
      <div
        className="luxury-cursor-glow hidden lg:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Header & Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenLanguageSheet={() => setLanguageSheetOpen(true)}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAdmission={() => {
          setSelectedAdmissionCourseId(undefined);
          setAdmissionModalOpen(true);
        }}
      />

      {/* Main Content Sections — course lead-generation focused */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenAdmission={() => {
            setSelectedAdmissionCourseId(undefined);
            setAdmissionModalOpen(true);
          }}
        />

        {/* 2. Enquiry Form — placed immediately after the Hero for maximum conversion */}
        <EnquiryForm currentLang={currentLang} />

        {/* 3. Real Student Work & Certificate Showcase */}
        <Reveal as="section"><AuthenticShowcase currentLang={currentLang} /></Reveal>

        {/* 4. Career Benefits & Academy Courses */}
        <Reveal as="section">
          <AcademyCourses
            currentLang={currentLang}
            onSelectCourseToEnroll={handleOpenCourseEnrollment}
            onOpenBrochureModal={() => setBrochureModalOpen(true)}
          />
        </Reveal>

        {/* 5. 5-Step Learning Roadmap */}
        <Reveal as="section"><CourseJourney currentLang={currentLang} /></Reveal>

        {/* 6. Meet the Founder — Uma Goswami */}
        <Reveal as="section"><MasterTrainers currentLang={currentLang} /></Reveal>

        {/* 7. Why Choose Us Highlights */}
        <Reveal as="section"><WhyChooseUs currentLang={currentLang} /></Reveal>

        {/* 8. Student Placement & Career Success */}
        <Reveal as="section"><StudentSuccess currentLang={currentLang} /></Reveal>

        {/* 9. Testimonials & FAQ */}
        <Reveal as="section"><TestimonialsFAQ currentLang={currentLang} /></Reveal>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Sticky Mobile Navigation Bar */}
      <StickyMobileBar
        currentLang={currentLang}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAdmission={() => {
          setSelectedAdmissionCourseId(undefined);
          setAdmissionModalOpen(true);
        }}
      />

      {/* Floating Desktop WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      {bookingModalOpen && (
        <BookingModal
          currentLang={currentLang}
          onClose={() => setBookingModalOpen(false)}
        />
      )}

      {admissionModalOpen && (
        <AdmissionModal
          currentLang={currentLang}
          initialCourseId={selectedAdmissionCourseId}
          onClose={() => setAdmissionModalOpen(false)}
        />
      )}

      {brochureModalOpen && (
        <BrochureModal
          currentLang={currentLang}
          onClose={() => setBrochureModalOpen(false)}
        />
      )}

      {languageSheetOpen && (
        <LanguageBottomSheet
          currentLang={currentLang}
          onSelect={(lang) => {
            handleLanguageChange(lang);
            setLanguageSheetOpen(false);
          }}
          onClose={() => {
            // Dismissing without an explicit choice still counts as "seen" so it won't nag again
            localStorage.setItem('nss_lang_chosen', '1');
            setLanguageSheetOpen(false);
          }}
        />
      )}

    </div>
  );
}
