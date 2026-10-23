'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, CheckCircle2, ArrowRight, Sparkle, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

interface DoshaCheckerProps {
  onOpenConsultation: (therapyTitle?: string) => void;
}

export default function DoshaChecker({ onOpenConsultation }: DoshaCheckerProps) {
  const { t, isHindi } = useLanguage();
  const [selectedIssue, setSelectedIssue] = useState<number | null>(0);

  const symptomOptions = [
    {
      label: isHindi ? 'बवासीर, मस्से अथवा भगंदर का दर्द व रिसाव' : 'Piles, anal bleeding or painful fistula discharge',
      dosha: isHindi ? 'अर्श / भगंदर (क्षारसूत्र योग्य)' : 'Arsha / Bhagandara (Ksharsutra Recommended)',
      therapy: isHindi ? 'क्षारसूत्र शल्यकर्म (Ksharsutra Surgery)' : 'Ksharsutra Para-Surgery',
      badge: '98% Permanent Cure',
      reason: isHindi
        ? 'बिना चीरफाड़ के मस्सों व नालिका का क्रमिक छेदन एवं सुरक्षित रोपण। 98% स्थाई सफलता।'
        : 'Preserves anal sphincter muscles completely. Local anaesthesia, minimal downtime (<5 days), and <2% recurrence.',
    },
    {
      label: isHindi ? 'घुटने का दर्द, जोड़ों की अकड़न या साइटिका' : 'Knee pain, severe joint stiffness or sciatica nerve pain',
      dosha: isHindi ? 'वात प्रकोप (Vata Imbalance)' : 'Vata Prakopa (Degenerative Joint Disorder)',
      therapy: isHindi ? 'जानु बस्ती एवं कटी बस्ती (Janu & Kati Basti)' : 'Janu Basti & Kati Basti',
      badge: 'Cartilage Regeneration',
      reason: isHindi
        ? 'औषधीय तैल से जोड़ों के कार्टिलेज को पुनर्जीवन और सायनोवियल फ्लूइड की वृद्धि। नी रिप्लेसमेंट टालने में सहायक।'
        : 'Direct deep trans-dermal lubrication of degenerated cartilage, reversing stiffness and halting joint erosion naturally.',
    },
    {
      label: isHindi ? 'मानसिक तनाव, गहरी नींद न आना या माइग्रेन' : 'Chronic insomnia, anxiety, panic or severe migraine',
      dosha: isHindi ? 'प्राण वात एवं पित्त विकार' : 'Prana Vata & Pitta Disturbance',
      therapy: isHindi ? 'शिरोधारा एवं नस्य (Shirodhara & Nasya)' : 'Shirodhara & Nasya Therapy',
      badge: 'Nervous System Reset',
      reason: isHindi
        ? 'माथे के आज्ञा चक्र पर औषधीय धारा द्वारा नर्वस सिस्टम को शांति। मेलाटोनिन व सेरोटोनिन का प्राकृतिक संतुलन।'
        : 'Rhythmic herbal oil infusion over the frontal cortex deeply resets nervous hyperactivity and resolves sleep disorders.',
    },
    {
      label: isHindi ? 'अनियमित माहवारी, पीसीओडी या गर्भधारण में बाधा' : 'PCOS / PCOD, irregular cycles or difficulty conceiving',
      dosha: isHindi ? 'आर्तव वह स्रोतस अवरोध' : 'Artava Vaha Srotas (Reproductive Toxin Block)',
      therapy: isHindi ? 'उत्तरबस्ती एवं शोधन (Uttara Basti Protocol)' : 'Uttara Basti & Female Detox',
      badge: 'Natural Fertility',
      reason: isHindi
        ? 'डॉ. स्मिता कटियार के निर्देशन में गर्भाशय शोधन, ट्यूब ब्लॉकेज खोलना एवं हार्मोन का प्राकृतिक संतुलन।'
        : 'Intra-uterine classical herbal therapy that clears blocked fallopian tubes and balances ovarian hormones without IVF.',
    },
  ];

  const currentResult = selectedIssue !== null ? symptomOptions[selectedIssue] : null;

  return (
    <section
      id="dosha-checker"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D3] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 1. Header Group matching AboutUsBlaze style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-11 h-11 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="flex items-center justify-center"
              >
                <Compass size={18} className="text-[#C59138]" />
              </motion.div>
            </div>
            <div className="px-4 py-2 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <span className="text-sm font-semibold text-[#0D3325]">
                {t.doshaChecker.title}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {isHindi
              ? 'अपने लक्षणों के आधार पर सही आयुर्वेदिक चिकित्सा जानें'
              : 'Identify the Right Ayurvedic Therapy for Your Health'}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.doshaChecker.subtitle}
          </p>
        </div>

        {/* 2. Interactive Consultation Deck */}
        <div className="bg-gradient-to-br from-[#092119] via-[#0D3325] to-[#134533] rounded-[36px] p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59138]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Symptom Selector Buttons */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C59138] mb-4">
                {isHindi ? '1. अपने प्राथमिक लक्षण का चयन करें:' : '1. Select Your Primary Symptom:'}
              </h3>

              {symptomOptions.map((opt, idx) => {
                const isSelected = selectedIssue === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedIssue(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-white text-[#0D3325] border-[#C59138] shadow-lg scale-[1.02]'
                        : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:border-white/25'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold leading-snug">
                      {opt.label}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'border-[#0D3325] bg-[#0D3325] text-white'
                          : 'border-white/30 text-transparent'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Recommendation Card */}
            <div className="lg:col-span-6">
              {currentResult && (
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-6 sm:p-8 space-y-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59138] bg-[#C59138]/20 px-2.5 py-1 rounded-full border border-[#C59138]/30">
                      {currentResult.dosha}
                    </span>
                    <span className="text-[11px] font-semibold text-white/80">
                      {currentResult.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F2] leading-tight">
                      {currentResult.therapy}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-2.5">
                      {currentResult.reason}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onOpenConsultation(currentResult.therapy)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C59138] hover:bg-[#E8BC6E] text-[#092119] text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{isHindi ? 'इस चिकित्सा हेतु निःशुल्क परामर्श लें' : 'Book Free Consultation'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-white/60 text-center sm:text-left">
                      {isHindi ? 'प्रथम ओपीडी परामर्श निःशुल्क' : 'No registration fee for initial visit'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
