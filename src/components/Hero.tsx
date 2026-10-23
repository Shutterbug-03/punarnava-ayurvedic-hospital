'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Star, Award, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import SplineMotionBackground from './SplineMotionBackground';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const { t, isHindi } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 border-b border-[#E8E1D3]">
      {/* Subtle Living Ambient Layer */}
      <SplineMotionBackground intensity="subtle" theme="light" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Subtle Origin Stamp */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134533]/8 text-[#0D3325] text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59138]"></span>
              <span>{t.hero.tagline}</span>
            </div>

            {/* Headline: Under 2 lines with confident editorial presence */}
            <h1 className="text-2xl sm:text-4xl lg:text-[52px] font-serif font-bold text-[#092119] tracking-[-0.02em] leading-[1.18] sm:leading-[1.12] max-w-2xl">
              {t.hero.headline}
            </h1>

            {/* Sub-headline: High-contrast legible body text */}
            <p className="text-sm sm:text-base lg:text-lg text-[#14241E]/85 leading-relaxed max-w-xl font-sans">
              {t.hero.subheadline}
            </p>

            {/* Key Clinical Truths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#14241E] font-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#134533]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#134533]" />
                </div>
                <span>{isHindi ? "शून्य जनरल एनेस्थीसिया · सुरक्षित लोकल विधि" : "Zero General Anaesthesia · Safe Local Procedure"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#134533]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#134533]" />
                </div>
                <span>{isHindi ? "गुदा मार्ग की मांसपेशियों को 0% नुकसान" : "100% Sphincter Muscle Preservation"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#134533]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#134533]" />
                </div>
                <span>{isHindi ? "3 से 5 दिनों में सामान्य काम पर वापसी" : "Back to Normal Routine in 3–5 Days"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#134533]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#134533]" />
                </div>
                <span>{isHindi ? "आईसीएमआर एवं आयुष मंत्रालय द्वारा प्रमाणित" : "ICMR & Ministry of AYUSH Endorsed"}</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#C59138] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#ksharsutra"
                className="px-6 py-3.5 bg-white border border-[#E8E1D3] hover:border-[#0D3325] text-[#14241E] rounded-full font-semibold text-xs sm:text-sm transition-all text-center hover:bg-[#FAF7F2]"
              >
                {t.hero.secondaryCta}
              </a>

              <a
                href="tel:+918009708080"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs text-[#0D3325] font-bold hover:text-[#C59138] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59138]" />
                <span>+91-8009708080</span>
              </a>
            </div>

            {/* Subtle Reassurance Metrics */}
            <div className="pt-4 border-t border-[#E8E1D3] flex flex-wrap items-center gap-6 text-xs text-[#4B6358]">
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-[#C59138]" />
                <span>{t.hero.badgeExperience}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#134533]" />
                <span>{t.hero.badgeSuccess}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-[#C59138]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C59138]" />
                  ))}
                </div>
                <span className="font-bold text-[#14241E] ml-1">4.2★</span>
                <span className="text-[#799186]">(91+ Verified Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Visual Sanctuary Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Hospital Sanctuary Image */}
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-white group">
                <Image
                  src="/img/clinical/panchakarma-droni.jpg"
                  alt="Punarnava Ayurvedic Hospital Classical Droni Suite"
                  width={680}
                  height={420}
                  className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                
                {/* Overlay Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C59138] text-[#092119] mb-1.5 shadow-2xs">
                    {isHindi ? "कानपुर का प्रतिष्ठित चिकित्सालय" : "Ayurvedic Surgery Centre · Kanpur"}
                  </span>
                  <p className="font-serif text-base font-bold leading-snug text-white drop-shadow-sm">
                    {isHindi
                      ? "शास्त्रीय पंचकर्म एवं विशेष क्षारसूत्र चिकित्सा केंद्र"
                      : "Classical Panchakarma & Advanced Ksharsutra Centre"}
                  </p>
                  <p className="text-[11px] text-white/80 mt-0.5">
                    68, Lakhanpur, Vikas Nagar, G.T. Road, Kanpur
                  </p>
                </div>
              </div>

              {/* Floating Credential Pill 1: Dr. B.S. Katiyar */}
              <div className="absolute top-2 left-2 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md border border-[#E8E1D3] rounded-2xl p-2 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-3 max-w-[190px] sm:max-w-[240px] z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#0D3325] shrink-0 border border-[#C59138]">
                  <Image
                    src="/img/doctors/dr-bs-katiyar-avatar.jpg"
                    alt="Dr. B.S. Katiyar (MD, PGCKS)"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0D3325]">
                    Dr. B.S. Katiyar
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#4B6358] leading-tight font-medium">
                    MD Ayurveda, PGCKS
                  </div>
                </div>
              </div>

              {/* Floating Credential Pill 2: 98.4% Recovery */}
              <div className="absolute top-2 right-2 sm:top-auto sm:-bottom-5 sm:-right-4 bg-[#0D3325] text-white border border-[#C59138]/40 rounded-2xl p-2 sm:p-3.5 shadow-xl flex items-center gap-2 sm:gap-3 z-10">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#C59138]/20 border border-[#C59138] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C59138]" />
                </div>
                <div>
                  <div className="text-sm sm:text-lg font-bold font-serif text-[#C59138] leading-none">
                    98.4%
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/80 mt-0.5 font-medium">
                    {isHindi ? "स्थाई रोगमुक्ति" : "Permanent Cure"}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
