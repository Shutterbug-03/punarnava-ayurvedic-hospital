'use client';

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialBlazeProps {
  className?: string;
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

export default function TestimonialBlaze({
  className = '',
  onOpenConsultation,
}: TestimonialBlazeProps) {
  const { isHindi } = useLanguage();

  // Exactly 4 copies for seamless translateX(-25%) math
  const row1Repeated = [...ROW_1_TAGS, ...ROW_1_TAGS, ...ROW_1_TAGS, ...ROW_1_TAGS];
  const row2Repeated = [...ROW_2_TAGS, ...ROW_2_TAGS, ...ROW_2_TAGS, ...ROW_2_TAGS];

  return (
    <section
      className={`w-full bg-[#f9f9f9] py-16 md:py-[120px] overflow-hidden selection:bg-black selection:text-white border-b border-[#E8E1D3] ${className}`}
    >
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

      {/* Inner Top Content (Host Card + Doctor Quote) */}
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* 1. Host pill card (top center) */}
        <div className="flex flex-col items-center mb-[28px]">
          <div className="inline-flex items-center gap-[12px] bg-white border border-[#e8e8e8] rounded-[50px] p-[8px] sm:p-[10px] pr-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="w-[36px] sm:w-[44px] h-[36px] sm:h-[44px] rounded-full overflow-hidden shrink-0 border border-[#e8e8e8]">
              <Image
                src="/img/doctors/dr-bs-katiyar-avatar.jpg"
                alt="Dr. B.S. Katiyar"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight text-left">
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#101110]">
                {isHindi ? 'डॉ. बी.एस. कटियार' : 'Dr. B.S. Katiyar'}
              </div>
              <div className="text-[11px] sm:text-[12px] text-[#888888] font-normal">
                {isHindi
                  ? 'मुख्य चिकित्सक एवं क्षारसूत्र सर्जन (MD, PGCKS)'
                  : 'Chief Physician & Ksharsutra Surgeon (MD, PGCKS)'}
              </div>
            </div>
            <a
              href="tel:+918009708080"
              aria-label="Call Hospital OPD"
              className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] bg-[#f0f1f1] rounded-full flex items-center justify-center text-[#545555] hover:bg-[#e1e0e0] transition-colors cursor-pointer ml-1 sm:ml-2"
            >
              <Phone size={12} className="fill-[#545555]" />
            </a>
          </div>
        </div>

        {/* 2. Quote text (top center) */}
        <div className="max-w-[560px] mx-auto text-center mb-[48px]">
          <p className="text-[15px] sm:text-[17px] text-[#545555] font-normal leading-[1.6] px-4 font-serif">
            {isHindi
              ? '“प्रामाणिक आयुर्वेद एवं क्षारसूत्र शल्यकर्म के 20 से अधिक वर्षों के अनुभव के साथ, हमारा ध्येय प्रत्येक मरीज को असहनीय दर्द और रोग की पुनरावृत्ति से स्थाई मुक्ति दिलाना है — बिना किसी बड़े चीरफाड़ के।”'
              : '“With over two decades of clinical experience in classical Ayurveda and Ksharsutra surgery, we ensure every patient receives permanent healing that goes beyond temporary relief — preserving natural anatomy without conventional surgery.”'}
          </p>
        </div>

      </div>

      {/* 3. Double-row marquee (full-bleed) */}
      <div className="flex flex-col gap-[12px]">
        
        {/* Row 1: Marquee Left */}
        <div className="relative flex overflow-hidden group">
          <div
            className="flex whitespace-nowrap min-w-full"
            style={{ animation: 'marquee-left 35s linear infinite' }}
          >
            {row1Repeated.map((chip, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-[10px] sm:gap-[14px] bg-transparent border border-[#e2e2e3] rounded-full pl-[8px] pr-[24px] sm:pr-[36px] py-[8px] sm:py-[10px] h-14 sm:h-[72px] mr-[16px] shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-[#0D3325] transition-colors"
              >
                <div className="w-10 sm:w-[52px] h-10 sm:h-[52px] bg-[#f4f4f4] rounded-full flex items-center justify-center overflow-hidden border border-[#eeeeef] shrink-0">
                  <Image
                    src={chip.image}
                    alt={isHindi ? chip.labelHi : chip.labelEn}
                    width={52}
                    height={52}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[20px] sm:text-[28px] md:text-[32px] font-medium text-[#101110] tracking-tight">
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
                className="inline-flex items-center gap-[10px] sm:gap-[14px] bg-transparent border border-[#e2e2e3] rounded-full pl-[8px] pr-[24px] sm:pr-[36px] py-[8px] sm:py-[10px] h-14 sm:h-[72px] mr-[16px] shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-[#0D3325] transition-colors"
              >
                <div className="w-10 sm:w-[52px] h-10 sm:h-[52px] bg-[#f4f4f4] rounded-full flex items-center justify-center overflow-hidden border border-[#eeeeef] shrink-0">
                  <Image
                    src={chip.image}
                    alt={isHindi ? chip.labelHi : chip.labelEn}
                    width={52}
                    height={52}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[20px] sm:text-[28px] md:text-[32px] font-medium text-[#101110] tracking-tight">
                  {isHindi ? chip.labelHi : chip.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
