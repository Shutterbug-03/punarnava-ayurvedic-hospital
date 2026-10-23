'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

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
    <section id="faq" className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{t.faqSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {t.faqSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {t.faqSection.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {t.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#0D3325] pr-2">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full bg-[#F4EFE6] text-[#0D3325] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#C59138]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#799186]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#4B6358] leading-relaxed border-t border-[#E8E1D3]/50 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions helper */}
        <div className="mt-10 p-6 bg-white border border-[#E8E1D3] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-serif font-bold text-[#0D3325]">
              {isHindi ? "क्या आपका कोई अन्य चिकित्सीय प्रश्न है?" : "Have a specific clinical question?"}
            </h4>
            <p className="text-xs text-[#799186] mt-0.5">
              {isHindi
                ? "हमारे वरिष्ठ डॉक्टर से सीधे व्हाट्सएप पर बात करें या फोन करें।"
                : "Speak directly with our OPD desk or send your medical reports on WhatsApp."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918009708080?text=Hello%20Doctor%2C%20I%20have%20a%20question%20regarding%20treatment%20at%20Punarnava"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-xl text-xs font-semibold transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 bg-[#0D3325] hover:bg-[#134533] text-white rounded-xl text-xs font-semibold transition-colors shadow-xs cursor-pointer"
            >
              {isHindi ? "निःशुल्क परामर्श" : "Book Free Visit"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
