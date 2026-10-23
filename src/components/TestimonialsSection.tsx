'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import {
  Star,
  CheckCircle,
  ShieldCheck,
  Phone,
  Sparkle,
  MessageSquareQuote,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialsSectionProps {
  onOpenConsultation?: () => void;
}

interface TagChip {
  image: string;
  labelEn: string;
  labelHi: string;
}

const ROW_1_TAGS: TagChip[] = [
  {
    image: '/img/kshar_sutra.jpg',
    labelEn: '20+ Years Clinical Heritage',
    labelHi: '20+ वर्षों की चिकित्सकीय प्रतिष्ठा',
  },
  {
    image: '/img/infra/infra3.jpg',
    labelEn: 'Zero General Anaesthesia',
    labelHi: 'शून्य जनरल एनेस्थीसिया · लोकल विधि',
  },
  {
    image: '/img/fistula.jpg',
    labelEn: 'Permanent Fistula Cure (<2% Recurrence)',
    labelHi: 'भगंदर का स्थाई उपचार (<2% रिकरेंस)',
  },
  {
    image: '/img/basti.jpg',
    labelEn: 'Classical Panchakarma Detox',
    labelHi: 'शास्त्रीय पंचकर्म विषमुक्ति',
  },
  {
    image: '/img/infra/infra1.jpg',
    labelEn: '4.2★ Google Rating (91+ Verified)',
    labelHi: '4.2★ गूगल रेटिंग (91+ संतुष्ट मरीज)',
  },
];

const ROW_2_TAGS: TagChip[] = [
  {
    image: '/img/piles.jpg',
    labelEn: 'Walk Home Same Day (Day-Care)',
    labelHi: 'उसी दिन घर वापसी · डे-केयर प्रक्रिया',
  },
  {
    image: '/img/infra/infra6.jpg',
    labelEn: 'In-House Authentic Herbal Pharmacy',
    labelHi: 'प्रमाणित इन-हाउस आयुर्वेदिक औषधालय',
  },
  {
    image: '/img/gallery/nadi-pariksha.jpg',
    labelEn: 'Classical Nadi Pariksha Diagnosis',
    labelHi: 'प्रामाणिक नाड़ी परीक्षा निदान',
  },
  {
    image: '/img/infra/infra2.jpg',
    labelEn: 'Ayurvedic PCOS & Infertility Care',
    labelHi: 'स्त्री रोग, पीसीओडी एवं मातृत्व क्लिनिक',
  },
  {
    image: '/img/fissure.jpg',
    labelEn: '100% Sphincter Muscle Preservation',
    labelHi: 'गुदा मांसपेशियों को शून्य नुकसान',
  },
];

export default function TestimonialsSection({ onOpenConsultation }: TestimonialsSectionProps) {
  const { t, isHindi } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const row1Repeated = [...ROW_1_TAGS, ...ROW_1_TAGS, ...ROW_1_TAGS, ...ROW_1_TAGS];
  const row2Repeated = [...ROW_2_TAGS, ...ROW_2_TAGS, ...ROW_2_TAGS, ...ROW_2_TAGS];

  const reviewCategories = useMemo(() => [
    { id: 'All', labelEn: 'All Patient Stories', labelHi: 'सभी अनुभव' },
    { id: 'Ksharsutra', labelEn: 'Ksharsutra (Piles & Fistula)', labelHi: 'क्षारसूत्र (बवासीर व भगंदर)' },
    { id: 'Panchakarma', labelEn: 'Panchakarma Detox', labelHi: 'पंचकर्म शोधन' },
    { id: 'Women', labelEn: "Women's Health & Fertility", labelHi: 'स्त्री रोग व निसंतानता' },
  ], []);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    if (activeFilter === 'All') return t.reviews;
    if (activeFilter === 'Ksharsutra') {
      return t.reviews.filter((r) =>
        r.treatment.toLowerCase().includes('ksharsutra') ||
        r.treatment.toLowerCase().includes('fistula') ||
        r.treatment.toLowerCase().includes('piles') ||
        r.treatment.toLowerCase().includes('क्षारसूत्र') ||
        r.treatment.toLowerCase().includes('भगंदर') ||
        r.treatment.toLowerCase().includes('बवासीर')
      );
    }
    if (activeFilter === 'Panchakarma') {
      return t.reviews.filter((r) =>
        r.treatment.toLowerCase().includes('panchakarma') ||
        r.treatment.toLowerCase().includes('detox') ||
        r.treatment.toLowerCase().includes('पंचकर्म')
      );
    }
    if (activeFilter === 'Women') {
      return t.reviews.filter((r) =>
        r.treatment.toLowerCase().includes('pcos') ||
        r.treatment.toLowerCase().includes('fertility') ||
        r.treatment.toLowerCase().includes('uttara') ||
        r.treatment.toLowerCase().includes('स्त्री')
      );
    }
    return t.reviews;
  }, [activeFilter, t.reviews]);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D3] relative overflow-hidden"
    >
      {/* Anchor alias for #reviews */}
      <div id="reviews" className="absolute -top-24"></div>

      {/* Inline styles for opposite-direction marquee keyframes */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header Group matching AboutUsBlaze style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
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
                {t.reviewsSection.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {t.reviewsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.reviewsSection.subtitle}
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-5 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-[#E8E1D3] shadow-xs">
            <div className="flex text-[#C59138]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C59138]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0D3325]">4.2 out of 5.0</span>
            <span className="text-xs text-[#799186]">(91+ Verified Google Reviews)</span>
          </div>
        </div>

        {/* 2. Doctor Host Pill Card */}
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white border border-[#E8E1D3] rounded-full p-2 sm:p-2.5 pr-4 sm:pr-5 shadow-xs">
            <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full overflow-hidden shrink-0 border border-[#C59138]/40">
              <Image
                src="/img/doctors/dr-bs-katiyar-avatar.jpg"
                alt="Dr. B.S. Katiyar"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight text-left">
              <div className="text-xs sm:text-sm font-bold text-[#0D3325]">
                {isHindi ? 'डॉ. बी.एस. कटियार' : 'Dr. B.S. Katiyar'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#4B6358] font-medium">
                {isHindi
                  ? 'मुख्य चिकित्सक एवं क्षारसूत्र सर्जन (MD, PGCKS)'
                  : 'Chief Physician & Ksharsutra Surgeon (MD, PGCKS)'}
              </div>
            </div>
            <a
              href="tel:+918009708080"
              aria-label="Call Hospital OPD"
              className="w-7 sm:w-8 h-7 sm:h-8 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#0D3325] hover:bg-[#0D3325] hover:text-white transition-colors cursor-pointer ml-1 sm:ml-2 border border-[#E8E1D3]"
              title="Call OPD Helpline"
            >
              <Phone size={12} />
            </a>
          </div>

          <div className="max-w-xl mx-auto text-center mt-5">
            <p className="text-sm sm:text-base text-[#4B6358] font-serif italic leading-relaxed px-4">
              {isHindi
                ? '“प्रामाणिक आयुर्वेद एवं क्षारसूत्र शल्यकर्म के 20 से अधिक वर्षों के अनुभव के साथ, हमारा ध्येय प्रत्येक मरीज को असहनीय दर्द और रोग की पुनरावृत्ति से स्थाई मुक्ति दिलाना है — बिना किसी बड़े चीरफाड़ के।”'
                : '“With over two decades of clinical experience in classical Ayurveda and Ksharsutra surgery, we ensure every patient receives permanent healing that goes beyond temporary relief — preserving natural anatomy without conventional surgery.”'}
            </p>
          </div>
        </div>

        {/* 3. Double-Row Clinical Marquee */}
        <div className="flex flex-col gap-3 mb-16">
          {/* Row 1: Marquee Left */}
          <div className="relative flex overflow-hidden group">
            <div
              className="flex whitespace-nowrap min-w-full"
              style={{ animation: 'marquee-left 35s linear infinite' }}
            >
              {row1Repeated.map((chip, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 sm:gap-3.5 bg-white border border-[#E8E1D3] rounded-full pl-2 pr-5 sm:pr-7 py-2 h-12 sm:h-14 mr-3 shrink-0 shadow-2xs hover:border-[#0D3325] transition-colors"
                >
                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-[#FAF7F2] rounded-full flex items-center justify-center overflow-hidden border border-[#E8E1D3] shrink-0">
                    <Image
                      src={chip.image}
                      alt={isHindi ? chip.labelHi : chip.labelEn}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0D3325] tracking-tight">
                    {isHindi ? chip.labelHi : chip.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Marquee Right */}
          <div className="relative flex overflow-hidden group">
            <div
              className="flex whitespace-nowrap min-w-full"
              style={{ animation: 'marquee-right 30s linear infinite' }}
            >
              {row2Repeated.map((chip, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 sm:gap-3.5 bg-white border border-[#E8E1D3] rounded-full pl-2 pr-5 sm:pr-7 py-2 h-12 sm:h-14 mr-3 shrink-0 shadow-2xs hover:border-[#0D3325] transition-colors"
                >
                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-[#FAF7F2] rounded-full flex items-center justify-center overflow-hidden border border-[#E8E1D3] shrink-0">
                    <Image
                      src={chip.image}
                      alt={isHindi ? chip.labelHi : chip.labelEn}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0D3325] tracking-tight">
                    {isHindi ? chip.labelHi : chip.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Filter Tab Bar for Reviews */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {reviewCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            const label = isHindi ? cat.labelHi : cat.labelEn;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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

        {/* 5. Verified Patient Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-[28px] p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-[#C59138]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C59138]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#134533] bg-[#EDF4F0] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#134533]/15">
                    <CheckCircle className="w-3.5 h-3.5 text-[#134533]" />
                    <span>{rev.treatment}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#14241E]/90 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E1D3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D3325] text-[#C59138] font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#0D3325]">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-[#799186]">
                      {rev.city}, Uttar Pradesh · Verified Patient
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-[#C59138] font-semibold bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E8E1D3]">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 6. Bottom Review Action Strip */}
        <div className="bg-white border border-[#E8E1D3] rounded-[28px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#0D3325]/10 flex items-center justify-center shrink-0">
              <MessageSquareQuote className="w-6 h-6 text-[#0D3325]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0D3325]">
                {isHindi ? 'क्या आप भी पुराने दर्द या बवासीर से परेशान हैं?' : 'Suffering from chronic anorectal pain or piles?'}
              </div>
              <p className="text-xs text-[#4B6358] mt-0.5">
                {isHindi
                  ? 'हमारे 15,000+ स्वस्थ मरीजों की तरह आप भी स्थाई उपचार पा सकते हैं।'
                  : 'Join 15,000+ healed patients with natural Ayurvedic Ksharsutra therapy.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-[#0D3325] hover:bg-[#134533] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{isHindi ? 'निःशुल्क परामर्श बुक करें' : 'Book Free Consultation'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
          </button>
        </div>

      </div>
    </section>
  );
}
