'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Award, Clock, Phone, CheckCircle2, Calendar, Stethoscope } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenConsultation: () => void;
}

export default function DoctorsSection({ onOpenConsultation }: DoctorsSectionProps) {
  const { t, isHindi } = useLanguage();

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{t.doctorsSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {t.doctorsSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {t.doctorsSection.subtitle}
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Profile Top Banner */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0D3325] to-[#134533] text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#C59138] bg-white shrink-0 shadow-md">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#C59138] text-[#092119] mb-1">
                      {doc.experience}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#FAF7F2]">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#E8BC6E] font-medium mt-0.5">
                      {doc.qualification}
                    </p>
                    <p className="text-xs text-white/80 mt-1">
                      {doc.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Details & Specialities */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#14241E] uppercase tracking-wider mb-2">
                    {isHindi ? "चिकित्सकीय परिचय" : "Physician Background"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                    {doc.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#14241E] uppercase tracking-wider mb-2.5">
                    {isHindi ? "विशिष्ट विशेषज्ञताएं" : "Key Areas of Expertise"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doc.specialities.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#14241E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#144835] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* OPD Timings Strip */}
                <div className="pt-4 border-t border-[#E8E1D3] space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#4B6358]">
                    <Clock className="w-4 h-4 text-[#C59138] shrink-0" />
                    <span>
                      <strong className="text-[#0D3325]">{isHindi ? "ओपीडी समय:" : "OPD Schedule:"}</strong>{" "}
                      {doc.opdHours}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                    <a
                      href={`tel:${doc.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#0D3325] text-[#0D3325] hover:bg-[#EDF4F0] rounded-xl text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C59138]" />
                      <span>{doc.phone}</span>
                    </a>

                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-xl text-xs font-semibold transition-all shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C59138]" />
                      <span>{isHindi ? "परामर्श अपॉइंटमेंट बुक करें" : "Book Free OPD Slot"}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
