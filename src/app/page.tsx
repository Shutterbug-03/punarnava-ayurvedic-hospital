'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import KsharsutraSection from '../components/KsharsutraSection';
import PanchakarmaSection from '../components/PanchakarmaSection';
import TherapiesGallery from '../components/TherapiesGallery';
import DoctorsSection from '../components/DoctorsSection';
import HospitalFacilities from '../components/HospitalFacilities';
import DoshaChecker from '../components/DoshaChecker';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import AboutUsBlaze from '../components/AboutUsBlaze';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState('');

  const handleOpenConsultation = (therapyTitle?: string) => {
    if (therapyTitle) {
      setSelectedDept(therapyTitle);
    }
    setIsModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsModalOpen(false);
    setSelectedDept('');
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#14241E]">
      {/* Top Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Hero with Spline Motion Canvas */}
      <Hero onOpenConsultation={() => handleOpenConsultation()} />

      {/* Trust & Verified Metrics Bar */}
      <TrustBar />

      {/* About Punarnava Hospital & Clinical Experience Section */}
      <AboutUsBlaze onOpenConsultation={(dept) => handleOpenConsultation(dept)} />

      {/* Ksharsutra Surgery for Piles, Fissure & Fistula */}
      <KsharsutraSection onOpenConsultation={() => handleOpenConsultation('Ksharsutra Surgery')} />

      {/* Five-Fold Classical Panchakarma Rejuvenation */}
      <PanchakarmaSection onOpenConsultation={() => handleOpenConsultation('Panchakarma Detox')} />

      {/* Specialized Clinical Therapies Gallery */}
      <TherapiesGallery onOpenConsultation={(title) => handleOpenConsultation(title)} />

      {/* Senior Doctors Showcase */}
      <DoctorsSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Hospital Infrastructure & Facilities */}
      <HospitalFacilities />

      {/* Interactive Symptom to Therapy Guide */}
      <DoshaChecker onOpenConsultation={(therapy) => handleOpenConsultation(therapy)} />

      {/* Verified Patient Outcomes & Reviews */}
      <TestimonialsSection />

      {/* Clinical FAQ Accordion */}
      <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Footer & Emergency Help */}
      <Footer />

      {/* Free Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseConsultation}
        defaultDepartment={selectedDept}
      />
    </main>
  );
}
