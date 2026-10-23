'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Sparkle, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HospitalFacilities() {
  const { t, isHindi } = useLanguage();

  return (
    <section
      id="facilities"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header Group matching AboutUsBlaze style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-11 h-11 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="flex items-center justify-center"
              >
                <Building2 size={18} className="text-[#C59138]" />
              </motion.div>
            </div>
            <div className="px-4 py-2 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <span className="text-sm font-semibold text-[#0D3325]">
                {t.facilitiesSection.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {t.facilitiesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.facilitiesSection.subtitle}
          </p>
        </div>

        {/* 2. Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {t.facilitiesSection.items.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-[32px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group hover:-translate-y-1"
            >
              <div className="relative sm:w-1/2 h-64 sm:h-auto overflow-hidden bg-[#F4EFE6]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#C59138] uppercase tracking-wider block mb-1.5">
                    {isHindi ? 'प्रमाणित चिकित्सालय सुविधा' : 'Certified Infrastructure'}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#0D3325] mb-2 leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                    {facility.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E1D3] flex items-center gap-2 text-xs text-[#134533] font-semibold">
                  <Check className="w-4 h-4 text-[#C59138]" />
                  <span>{isHindi ? 'जीवाणुरहित एवं आयुष मानक' : 'NABH & AYUSH Sterile Standards'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Assurance Stamp Pill */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E1D3] shadow-xs text-xs font-semibold text-[#0D3325]">
            <ShieldCheck className="w-4 h-4 text-[#C59138]" />
            <span>
              {isHindi
                ? 'उत्तर प्रदेश शासन एवं आयुष मेडिकल काउंसिल द्वारा पंजीकृत चिकित्सालय'
                : 'Registered Ayurvedic Hospital under UP State AYUSH Medical Council'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
