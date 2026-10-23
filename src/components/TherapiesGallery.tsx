'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Sparkle, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TherapiesGalleryProps {
  onOpenConsultation: (therapyTitle?: string) => void;
}

export default function TherapiesGallery({ onOpenConsultation }: TherapiesGalleryProps) {
  const { t, isHindi } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => [
    { id: 'All', labelEn: 'All Therapies', labelHi: 'सम्पूर्ण चिकित्सा' },
    { id: 'Stress & Neuro', labelEn: 'Stress & Neuro Care', labelHi: 'तनाव एवं न्यूरो' },
    { id: 'Spine & Joints', labelEn: 'Spine & Joint Health', labelHi: 'रीढ़ एवं जोड़' },
    { id: 'Women Wellness', labelEn: "Women's Wellness", labelHi: 'मातृत्व एवं स्त्री रोग' },
  ], []);

  // Map each therapy to a filter category
  const categorizedTherapies = useMemo(() => {
    return t.therapiesList.map((item, idx) => {
      let cat = 'Stress & Neuro';
      if (item.title.toLowerCase().includes('basti') || item.title.toLowerCase().includes('swedana') || item.title.toLowerCase().includes('potli')) {
        cat = 'Spine & Joints';
      } else if (item.title.toLowerCase().includes('uttara') || item.title.toLowerCase().includes('gynaec') || item.badge.toLowerCase().includes('fertility')) {
        cat = 'Women Wellness';
      } else if (idx === 0 || idx === 1) {
        cat = 'Stress & Neuro';
      }
      return { ...item, category: cat };
    });
  }, [t.therapiesList]);

  const filtered = selectedCategory === 'All'
    ? categorizedTherapies
    : categorizedTherapies.filter((th) => th.category === selectedCategory);

  return (
    <section
      id="therapies"
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
                <Sparkle size={18} className="text-[#C59138] fill-[#C59138]" />
              </motion.div>
            </div>
            <div className="px-4 py-2 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <span className="text-sm font-semibold text-[#0D3325]">
                {isHindi ? 'विशिष्ट आयुर्वेदिक चिकित्सा' : 'Specialized Clinical Therapies'}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {isHindi
              ? 'रोग निवारण एवं कायाकल्प की प्रमुख चिकित्सा पद्धतियां'
              : 'Rejuvenation, Pain Relief & Classical Healing'}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {isHindi
              ? 'प्रत्येक चिकित्सा प्रशिक्षित एवं अनुभवी आयुर्वेदिक थेरेपिस्ट द्वारा शुद्ध औषधीय तेलों एवं शास्त्रीय विधि से संपन्न की जाती है।'
              : 'Administered by experienced Ayurvedic Panchakarma therapists under the direct supervision of Dr. B.S. Katiyar and Dr. Smita Katiyar.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const label = isHindi ? cat.labelHi : cat.labelEn;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0D3325] text-white shadow-md scale-105'
                      : 'bg-white border border-[#E8E1D3] text-[#14241E] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Grid of Specialized Therapies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Clinical Procedure Photograph */}
                <div className="relative h-48 w-full overflow-hidden bg-[#092119]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092119] via-black/20 to-transparent opacity-90" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {item.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#E8BC6E] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E8BC6E]/30">
                      <Clock className="w-3.5 h-3.5 text-[#C59138]" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-serif tracking-wider text-[#E8BC6E] uppercase block">
                      {item.sanskritName || "शास्त्रीय आयुर्वेदिक प्रक्रिया"}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#FAF7F2] leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* 3-Step Action Micro-Flowchart */}
                <div className="px-6 py-4 bg-gradient-to-b from-[#092119] to-[#0D3325] text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-2 text-[#FAF7F2]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C59138]"></div>
                      <span>
                        {idx === 0
                          ? (isHindi ? '1. आज्ञा चक्र पर औषधीय धारा' : '1. Rhythmic frontal oil stream')
                          : idx === 1
                          ? (isHindi ? '1. कार्टिलेज में औषधीय स्नेहन' : '1. Deep knee joint retention')
                          : idx === 2
                          ? (isHindi ? '1. कटि-रीढ़ की हड्डी पर तैल कुंड' : '1. Lumbar spine pool retention')
                          : (isHindi ? '1. गर्भाशय नलिका शोधन' : '1. Medicated intra-uterine infusion')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FAF7F2]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8BC6E]"></div>
                      <span>
                        {idx === 0
                          ? (isHindi ? '2. अल्फा-तरंगों का उद्दीपन' : '2. Neuro-endocrine reset')
                          : idx === 1
                          ? (isHindi ? '2. सायनोवियल फ्लूइड की वृद्धि' : '2. Synovial fluid replenishment')
                          : idx === 2
                          ? (isHindi ? '2. साइटिका नर्व डिकम्प्रेशन' : '2. Sciatic nerve decompression')
                          : (isHindi ? '2. हार्मोनल असंतुलन निवारण' : '2. Fallopian & ovarian reset')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-[#E8E1D3]/70 pt-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0D3325]">
                      {isHindi ? 'उपयुक्त अवस्थाएं:' : 'Best Suited For:'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.benefits.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#134533] bg-[#EDF4F0] px-2.5 py-1 rounded-full"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#134533]" />
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenConsultation(item.title)}
                  className="w-full py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#0D3325] border border-[#E8E1D3] text-[#0D3325] hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-[#0D3325]"
                >
                  <span>{isHindi ? 'इस चिकित्सा हेतु परामर्श लें' : 'Book This Therapy'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
