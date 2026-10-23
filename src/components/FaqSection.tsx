'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, MessageCircle, Sparkle, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export default function FaqSection({ onOpenConsultation }: FaqSectionProps) {
  const { t, isHindi } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#E8E1D3] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header Group matching AboutUsBlaze style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-11 h-11 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="flex items-center justify-center"
              >
                <HelpCircle size={18} className="text-[#C59138]" />
              </motion.div>
            </div>
            <div className="px-4 py-2 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <span className="text-sm font-semibold text-[#0D3325]">
                {t.faqSection.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {t.faqSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.faqSection.subtitle}
          </p>
        </div>

        {/* 2. Accordion List with Luxury Rounded Cards */}
        <div className="space-y-4">
          {t.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#C59138]/60 shadow-[0_8px_25px_rgba(13,51,37,0.08)]'
                    : 'border-[#E8E1D3] shadow-2xs hover:border-[#C59138]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#0D3325] pr-2 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#0D3325] text-white rotate-180'
                        : 'bg-[#FAF7F2] text-[#4B6358] border border-[#E8E1D3]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#4B6358] leading-relaxed border-t border-[#E8E1D3]/50 pt-4 animate-fadeIn">
                    <p className="font-sans leading-relaxed text-[#14241E]/85">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3. Have more questions helper card */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-[#E8E1D3] rounded-[32px] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-[#0D3325]">
              {isHindi ? 'क्या आपका कोई अन्य चिकित्सीय प्रश्न है?' : 'Have a specific clinical question or report?'}
            </h4>
            <p className="text-xs sm:text-sm text-[#799186] mt-1">
              {isHindi
                ? 'हमारे वरिष्ठ डॉक्टर से सीधे व्हाट्सएप पर रिपोर्ट भेजकर सलाह लें।'
                : 'Send your MRI, sonography or colonoscopy reports directly on WhatsApp for review.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/918009708080?text=Hello%20Doctor%2C%20I%20have%20a%20question%20regarding%20treatment%20at%20Punarnava"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full text-xs font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Doctor</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>{isHindi ? 'निःशुल्क परामर्श' : 'Book Free Visit'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
