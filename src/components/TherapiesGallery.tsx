'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Clock, CheckCircle2, Calendar } from 'lucide-react';

interface TherapiesGalleryProps {
  onOpenConsultation: (therapyTitle?: string) => void;
}

export default function TherapiesGallery({ onOpenConsultation }: TherapiesGalleryProps) {
  const { t, isHindi } = useLanguage();

  return (
    <section id="therapies" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{isHindi ? "विशिष्ट आयुर्वेदिक चिकित्सा" : "Specialized Clinical Therapies"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {isHindi
              ? "रोग निवारण एवं कायाकल्प की प्रमुख चिकित्सा पद्धतियां"
              : "Rejuvenation, Pain Management & Metabolic Healing"}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {isHindi
              ? "प्रत्येक चिकित्सा प्रशिक्षित एवं अनुभवी आयुर्वेदिक थेरेपिस्ट द्वारा शुद्ध औषधीय तेलों एवं शास्त्रीय विधि से संपन्न की जाती है।"
              : "Administered by experienced Ayurvedic Panchakarma therapists under the direct supervision of Dr. B.S. Katiyar and Dr. Smita Katiyar."}
          </p>
        </div>

        {/* Grid of Specialized Therapies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.therapiesList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Photo Frame */}
              <div className="relative h-56 w-full bg-[#F4EFE6] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0D3325]/90 text-white backdrop-blur-xs">
                  {item.badge}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white leading-tight drop-shadow-sm">
                      {item.title}
                    </h3>
                    <span className="text-xs text-[#C59138] font-medium font-sans">
                      {item.sanskritName}
                    </span>
                  </div>
                  <span className="text-[11px] text-white/90 bg-black/40 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C59138]" />
                    {item.duration.split(' / ')[0]}
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                  {item.fullDesc}
                </p>

                {/* Benefits Bullet Points */}
                <div className="space-y-1.5 pt-2 border-t border-[#E8E1D3]/70">
                  <span className="text-[11px] font-bold text-[#14241E] uppercase tracking-wider block mb-1">
                    {isHindi ? "प्रमुख लाभ:" : "Proven Clinical Benefits:"}
                  </span>
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#14241E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#144835] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E8E1D3] flex items-center justify-between">
                  <div className="text-[11px] text-[#799186]">
                    <span className="font-semibold text-[#14241E]">
                      {isHindi ? "अनुशंसित अवधि:" : "Duration:"}
                    </span>{" "}
                    {item.duration}
                  </div>
                  <button
                    onClick={() => onOpenConsultation(item.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-lg text-xs font-semibold transition-all shadow-xs"
                  >
                    <Calendar className="w-3 h-3 text-[#C59138]" />
                    <span>{isHindi ? "बुक करें" : "Book"}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
