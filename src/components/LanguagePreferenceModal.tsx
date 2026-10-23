'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkle, Globe2, Check, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

export default function LanguagePreferenceModal() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<'hi' | 'en'>(language);

  useEffect(() => {
    // Check if the visitor has already chosen their language preference
    try {
      const alreadyChosen = localStorage.getItem('pah_lang_confirmed');
      if (!alreadyChosen) {
        // Show after a brief delay for smooth entrance
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback
    }
  }, []);

  const handleSelectLanguage = (lang: 'hi' | 'en') => {
    setSelected(lang);
    setLanguage(lang);
    try {
      localStorage.setItem('pah_lang_confirmed', 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('pah_lang_confirmed', 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDismiss}
          className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E8E1D3] rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-center"
        >
          {/* Subtle Ayurvedic Watermark Motif */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 10%, #0D3325 20%, transparent 21%)',
              backgroundSize: '400px 400px',
            }}
          />

          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close language selector"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/80 border border-[#E8E1D3] text-[#799186] hover:text-[#0D3325] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Brand Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-16 h-16 rounded-full bg-white border border-[#E8E1D3] shadow-md flex items-center justify-center mb-4 p-2">
              <Image
                src="/punarnava-hospital-logo.png"
                alt="Punarnava Ayurvedic Hospital"
                width={52}
                height={52}
                className="object-contain"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0D3325] border-2 border-white flex items-center justify-center text-[#C59138]">
                <Globe2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-[11px] font-bold tracking-wide uppercase mb-2">
              <Sparkle className="w-3 h-3 text-[#C59138] fill-[#C59138]" />
              <span>Language Preference / भाषा चयन</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#092119] leading-snug">
              पुनर्नवा चिकित्सालय में आपका स्वागत है
            </h3>
            <p className="text-xs sm:text-sm text-[#4B6358] mt-1 max-w-sm">
              Please choose your preferred language to explore hospital treatments & doctor profiles.
            </p>
          </div>

          {/* Language Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-left">
            {/* Hindi Card */}
            <button
              type="button"
              onClick={() => handleSelectLanguage('hi')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between group ${
                selected === 'hi'
                  ? 'bg-white border-[#0D3325] shadow-md scale-[1.02]'
                  : 'bg-white/70 border-[#E8E1D3] hover:border-[#0D3325]/50 hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl font-bold font-serif text-[#0D3325]">
                  हिन्दी
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C59138]/15 text-[#9B6A1B] border border-[#C59138]/30">
                  अनुशंसित
                </span>
              </div>
              <p className="text-xs text-[#4B6358] leading-relaxed mb-3">
                आयुर्वेदिक पंचकर्म, क्षारसूत्र एवं रोगों की सम्पूर्ण प्रामाणिक जानकारी।
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3325] group-hover:text-[#C59138] transition-colors">
                <span>हिन्दी में देखें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* English Card */}
            <button
              type="button"
              onClick={() => handleSelectLanguage('en')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between group ${
                selected === 'en'
                  ? 'bg-white border-[#0D3325] shadow-md scale-[1.02]'
                  : 'bg-white/70 border-[#E8E1D3] hover:border-[#0D3325]/50 hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl font-bold font-serif text-[#0D3325]">
                  English
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#134533]/10 text-[#0D3325]">
                  Global
                </span>
              </div>
              <p className="text-xs text-[#4B6358] leading-relaxed mb-3">
                Explore classical Ayurvedic therapies, Ksharsutra surgery & clinical team.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3325] group-hover:text-[#C59138] transition-colors">
                <span>Continue in English</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Footer Reassurance note */}
          <p className="text-[11px] text-[#799186]">
            आप बाद में भी स्क्रीन के शीर्ष पर मौजूद बटन से कभी भी भाषा बदल सकते हैं।
            <br />
            You can always switch language anytime from the top navigation.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
