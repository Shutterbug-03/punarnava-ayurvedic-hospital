'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Sparkles, Check } from 'lucide-react';

export default function HospitalFacilities() {
  const { t, isHindi } = useLanguage();

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{t.facilitiesSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {t.facilitiesSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {t.facilitiesSection.subtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.facilitiesSection.items.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row group"
            >
              <div className="relative sm:w-1/2 h-56 sm:h-auto overflow-hidden bg-[#F4EFE6]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#C59138] uppercase tracking-wider block mb-1">
                    {isHindi ? "प्रमाणित व्यवस्था" : "Hospital Ward"}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#0D3325] mb-2 leading-snug">
                    {facility.title}
                  </h4>
                  <p className="text-xs text-[#4B6358] leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D3] flex items-center gap-2 text-[11px] text-[#144835] font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#C59138]" />
                  <span>{isHindi ? "जीवाणुरहित एवं पूर्ण स्वच्छ" : "Sterile & Hygienic Standards"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Real Infrastructure Gallery Banner */}
        <div className="bg-[#0D3325] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#C59138]/30">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-semibold text-[#E8BC6E] uppercase tracking-wider">
              {isHindi ? "सुविधाएं एवं परामर्श" : "Visiting Punarnava Hospital"}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {isHindi
                ? "कानपुर एवं आसपास के जिलों के मरीजों हेतु विशेष व्यवस्था"
                : "Dedicated Care for Outstation Patients"}
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              {isHindi
                ? "लखनऊ, उन्नाव, फतेहपुर, कन्नौज, इटावा एवं दिल्ली से आने वाले मरीजों हेतु डे-केयर विश्राम, त्वरित नाड़ी परीक्षा एवं उसी दिन डिस्चार्ज की सुविधा।"
                : "Day-care resting rooms, fast-track pulse diagnosis, and same-day discharge protocols for patients traveling from across Uttar Pradesh."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=Punarnava+Ayurvedic+Hospital+Kanpur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-[#0D3325] hover:bg-[#FAF7F2] rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              {isHindi ? "गूगल मैप पर लोकेशन देखें" : "View on Google Maps"}
            </a>
            <a
              href="tel:+918009708080"
              className="px-5 py-2.5 bg-[#C59138] hover:bg-[#D4A347] text-[#092119] rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              {isHindi ? "ओपीडी सहायता कॉल" : "Call OPD: +91-8009708080"}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
