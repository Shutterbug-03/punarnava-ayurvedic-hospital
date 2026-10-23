'use client';

import React, { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Sparkle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutUsBlazeProps {
  className?: string;
  onOpenConsultation?: (dept?: string) => void;
}

interface ImageItem {
  src: string;
  category: string;
  captionEn: string;
  captionHi: string;
}

const HOSPITAL_GALLERY: ImageItem[] = [
  {
    src: '/img/ayurveda-punarnava.png',
    category: 'All',
    captionEn: 'Punarnava Ayurvedic Hospital Sanctuary',
    captionHi: 'पुनर्नवा आयुर्वेदिक चिकित्सालय परिसर',
  },
  {
    src: '/img/shirodhara.jpg',
    category: 'Panchakarma Detox',
    captionEn: 'Classical Shirodhara for Stress & Migraine',
    captionHi: 'अनिद्रा एवं माइग्रेन हेतु शिरोधारा',
  },
  {
    src: '/img/kshar_sutra.jpg',
    category: 'Ksharsutra Surgery',
    captionEn: 'Standardized 21-Coat Ksharsutra Preparation',
    captionHi: '21 लेपों से निर्मित प्रामाणिक क्षारसूत्र',
  },
  {
    src: '/img/PATRAPINDA-SWEDANA.jpg',
    category: 'Joint & Spine Care',
    captionEn: 'Patra Pinda Swedana for Severe Arthritis',
    captionHi: 'संधिवात एवं घुटनों हेतु पत्रपिंड स्वेदन',
  },
  {
    src: '/img/snehan.jpg',
    category: 'Panchakarma Detox',
    captionEn: 'Full-Body Therapeutic Snehan Massage',
    captionHi: 'औषधीय तैल द्वारा संपूर्ण शरीर स्नेहन',
  },
  {
    src: '/img/infra/infra3.jpg',
    category: 'Ksharsutra Surgery',
    captionEn: 'Sterile Day-Care Ksharsutra Procedure Suite',
    captionHi: 'जीवाणुरहित क्षारसूत्र शल्य कक्ष',
  },
  {
    src: '/img/gallery/nadi-pariksha.jpg',
    category: 'All',
    captionEn: 'Nadi Pariksha (Ayurvedic Pulse Diagnosis)',
    captionHi: 'डॉ. कटियार द्वारा प्रामाणिक नाड़ी परीक्षा',
  },
  {
    src: '/img/basti.jpg',
    category: 'Joint & Spine Care',
    captionEn: 'Medicated Basti for Sciatica & Vata Relief',
    captionHi: 'साइटिका एवं वात शमन हेतु बस्ती कर्म',
  },
  {
    src: '/img/infra/infra4.jpg',
    category: 'Women\'s Health',
    captionEn: 'Authentic Medicinal Wood Droni Therapy Suite',
    captionHi: 'पारंपरिक काष्ठ द्रोणी पंचकर्म कक्ष',
  },
];

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Word({ word, index, total, progress }: WordProps) {
  const range = [index / total, (index + 1) / total];
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ['#d1d5db', '#092119']);

  return (
    <span className="relative mr-2 sm:mr-3 lg:mr-3.5 inline-block">
      <motion.span style={{ opacity, color }}>
        {word}
      </motion.span>
    </span>
  );
}

export default function AboutUsBlaze({ className = '', onOpenConsultation }: AboutUsBlazeProps) {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState('All');
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ['start 0.85', 'end 0.2'],
  });

  const categories = useMemo(() => [
    { id: 'All', labelEn: 'All Treatments', labelHi: 'सम्पूर्ण चिकित्सा' },
    { id: 'Ksharsutra Surgery', labelEn: 'Ksharsutra Surgery', labelHi: 'क्षारसूत्र शल्यकर्म' },
    { id: 'Panchakarma Detox', labelEn: 'Panchakarma Detox', labelHi: 'पंचकर्म शोधन' },
    { id: 'Joint & Spine Care', labelEn: 'Joint & Spine Care', labelHi: 'जोड़ एवं रीढ़ की हड्डी' },
    { id: 'Women\'s Health', labelEn: "Women's Health", labelHi: 'स्त्री रोग एवं बांझपन' },
  ], []);

  const headlineEn =
    "Whether you seek freedom from chronic pain, permanent cure for piles, or holistic rejuvenation, our hospital provides time-tested Ayurvedic care for every patient.";

  const headlineHi =
    "चाहे आप असहनीय दर्द से मुक्ति चाहते हों, बवासीर-भगंदर का स्थाई उपचार या संपूर्ण पंचकर्म कायाकल्प, हमारा चिकित्सालय प्रत्येक मरीज को प्रामाणिक आयुर्वेद प्रदान करता है।";

  const headlineText = isHindi ? headlineHi : headlineEn;
  const words = headlineText.split(' ');

  // Filter images based on tab or display full set
  const filteredImages = useMemo(() => {
    if (activeTab === 'All') return HOSPITAL_GALLERY;
    const matched = HOSPITAL_GALLERY.filter((img) => img.category === activeTab);
    return matched.length >= 3 ? matched : HOSPITAL_GALLERY;
  }, [activeTab]);

  // Duplicate for seamless infinite marquee loop
  const loopedImages = [...filteredImages, ...filteredImages, ...filteredImages];

  return (
    <section
      id="about"
      className={`relative w-full bg-[#ffffff] pt-[90px] pb-[90px] lg:pt-[110px] lg:pb-[110px] overflow-hidden border-b border-[#E8E1D3] ${className}`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts Preconnect and Stylesheet */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Decorative concentric rings pattern background radiating from bottom */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 120%, transparent 0%, transparent 20%, #0D3325 21%, transparent 22%, transparent 40%, #0D3325 41%, transparent 42%, transparent 60%, #0D3325 61%, transparent 62%, transparent 80%, #0D3325 81%, transparent 82%)',
          backgroundSize: '2000px 2000px',
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-7xl mx-auto">
        
        {/* 1. Label pill group */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-[44px] h-[44px] rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white overflow-hidden shadow-xs">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              className="flex items-center justify-center"
            >
              <Sparkle size={19} className="text-[#C59138] fill-[#C59138]" />
            </motion.div>
          </div>
          <div className="px-[14px] py-[10px] rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
            <span className="text-[15px] font-semibold text-[#0D3325] px-2 whitespace-nowrap">
              {isHindi ? 'पुनर्नवा चिकित्सालय दर्शन' : 'About Punarnava Hospital'}
            </span>
          </div>
        </div>

        {/* 2. Headline with scroll-driven word-by-word reveal */}
        <h2
          ref={headlineRef}
          className="text-[30px] sm:text-[42px] md:text-[52px] font-serif font-medium text-[#092119] leading-[1.18] max-w-[960px] mb-8 md:mb-[46px] tracking-tight flex flex-wrap justify-center text-center px-2 sm:px-4"
        >
          {words.map((word, index) => (
            <Word
              key={index}
              word={word}
              index={index}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
        </h2>

        {/* 3. Filter tab bar tailored to Punarnava's Departments */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-[70px]">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const label = isHindi ? cat.labelHi : cat.labelEn;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-[22px] py-[11px] rounded-full text-[13px] sm:text-[14px] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0D3325] text-white font-bold shadow-[0_4px_14px_rgba(13,51,37,0.22)] scale-105'
                    : 'bg-[#F4F4F4] text-[#14241E] font-medium hover:bg-[#0D3325] hover:text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 4. Infinitely looping photo strip marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex gap-[16px] w-max select-none"
            animate={{ x: [0, -2484] }}
            transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
          >
            {loopedImages.map((item, index) => {
              let heightAndAlignClass = 'h-[320px] self-center';
              if (index % 3 === 0) {
                heightAndAlignClass = 'h-[240px] self-start mt-8';
              } else if (index % 3 === 2) {
                heightAndAlignClass = 'h-[280px] self-end mb-8';
              }

              const caption = isHindi ? item.captionHi : item.captionEn;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[260px] rounded-[32px] overflow-hidden shadow-lg border border-[#E8E1D3] relative group bg-[#FAF7F2] ${heightAndAlignClass}`}
                >
                  <img
                    src={item.src}
                    alt={caption}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left">
                    <p className="text-white text-xs font-semibold drop-shadow-sm">
                      {caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Clinical Reassurance Pill */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#doctors"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#E8E1D3] text-xs font-semibold text-[#0D3325] hover:border-[#C59138] transition-colors shadow-2xs"
          >
            <span>{isHindi ? "हमारे वरिष्ठ चिकित्सकों से मिलें" : "Meet Our Senior Ayurvedic Physicians"}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#C59138]" />
          </a>
        </div>

      </div>
    </section>
  );
}
