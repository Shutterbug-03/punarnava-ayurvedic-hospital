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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F4EFE6] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E1D3]">
      {/* Living Spline Motion Ambient Layer */}
      <SplineMotionBackground intensity="subtle" theme="light" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Clinical Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134533]/10 border border-[#134533]/20 text-[#0D3325] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#C59138]"></span>
              <span>{t.hero.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3325] tracking-tight leading-[1.18] max-w-2xl">
              {t.hero.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* Key Clinical Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#14241E] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#144835] shrink-0" />
                <span>{isHindi ? "शून्य जनरल एनेस्थीसिया · सुरक्षित लोकल विधि" : "Zero General Anaesthesia · Safe Local Procedure"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#144835] shrink-0" />
                <span>{isHindi ? "गुदा मार्ग की मांसपेशियों को 0% नुकसान" : "100% Sphincter Muscle Preservation"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#144835] shrink-0" />
                <span>{isHindi ? "3 से 5 दिनों में सामान्य काम पर वापसी" : "Back to Normal Routine in 3–5 Days"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#144835] shrink-0" />
                <span>{isHindi ? "आईसीएमआर एवं आयुष मंत्रालय द्वारा प्रमाणित" : "ICMR & Ministry of AYUSH Endorsed"}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59138]"></span>
              </button>

              <a
                href="#ksharsutra"
                className="px-5 py-3.5 bg-white border border-[#E8E1D3] hover:border-[#C59138] text-[#14241E] rounded-xl font-medium text-sm transition-all text-center hover:bg-[#F4EFE6]"
              >
                {t.hero.secondaryCta}
              </a>

              <a
                href="tel:+918009708080"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs text-[#0D3325] font-semibold hover:text-[#C59138] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C59138]" />
                <span>+91-8009708080</span>
              </a>
            </div>

            {/* Subtle Trust Signals Strip */}
            <div className="pt-4 border-t border-[#E8E1D3]/80 flex flex-wrap items-center gap-6 text-xs text-[#4B6358]">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C59138]" />
                <span>{t.hero.badgeExperience}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#144835]" />
                <span>{t.hero.badgeSuccess}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-[#C59138]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C59138]" />
                  ))}
                </div>
                <span className="font-semibold text-[#14241E] ml-1">4.2★</span>
                <span className="text-[#799186]">(91+ Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Visual Sanctuary Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Hospital Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white group">
                <Image
                  src="/img/ayurveda-punarnava.png"
                  alt="Punarnava Ayurvedic Hospital Kanpur"
                  width={680}
                  height={420}
                  className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#C59138] text-[#092119] mb-1">
                    {isHindi ? "कानपुर का प्रतिष्ठित संस्थान" : "Established Hospital in Kanpur"}
                  </span>
                  <p className="font-serif text-sm sm:text-base font-semibold leading-tight text-white drop-shadow-sm">
                    {isHindi
                      ? "शास्त्रीय पंचकर्म एवं विशेष क्षारसूत्र चिकित्सा केंद्र"
                      : "Classical Panchakarma & Advanced Ksharsutra Centre"}
                  </p>
                  <p className="text-[11px] text-white/80">
                    68, Lakhanpur, Vikas Nagar, G.T. Road, Kanpur
                  </p>
                </div>
              </div>

              {/* Floating Credential Pill 1: Dr. B.S. Katiyar */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md border border-[#E8E1D3] rounded-xl p-3 shadow-lg flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#0D3325] shrink-0 border border-[#C59138]/40">
                  <Image
                    src="/img/kshar_sutra.jpg"
                    alt="Ksharsutra Treatment"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0D3325]">
                    Dr. B.S. Katiyar
                  </div>
                  <div className="text-[10px] text-[#4B6358] leading-tight">
                    MD Ayurvedic Medicine, PGCKS (20+ Yrs)
                  </div>
                </div>
              </div>

              {/* Floating Credential Pill 2: 98% Recovery */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-[#0D3325] text-white border border-[#C59138]/30 rounded-xl p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C59138]/20 border border-[#C59138] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C59138]" />
                </div>
                <div>
                  <div className="text-base font-bold font-serif text-[#C59138] leading-none">
                    98.4%
                  </div>
                  <div className="text-[10px] text-white/80 mt-0.5">
                    {isHindi ? "स्थाई रोगमुक्ति दर" : "Permanent Cure Rate"}
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
