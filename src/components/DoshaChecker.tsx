'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface DoshaCheckerProps {
  onOpenConsultation: (therapyTitle?: string) => void;
}

export default function DoshaChecker({ onOpenConsultation }: DoshaCheckerProps) {
  const { t, isHindi } = useLanguage();
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);

  const symptomOptions = [
    {
      label: isHindi ? "बवासीर, मस्से अथवा भगंदर का दर्द व रिसाव" : "Piles, anal bleeding or painful fistula discharge",
      dosha: isHindi ? "अर्श / भगंदर (क्षारसूत्र योग्य)" : "Arsha / Bhagandara (Ksharsutra Recommended)",
      therapy: isHindi ? "क्षारसूत्र शल्यकर्म (Ksharsutra Surgery)" : "Ksharsutra Para-Surgery",
      reason: isHindi
        ? "बिना चीरफाड़ के मस्सों व नालिका का क्रमिक छेदन एवं सुरक्षित रोपण। 98% स्थाई सफलता।"
        : "Preserves anal sphincter muscles completely. Local anaesthesia, minimal downtime (<5 days), and <2% recurrence.",
    },
    {
      label: isHindi ? "घुटने का दर्द, जोड़ों की अकड़न या साइटिका" : "Knee pain, severe joint stiffness or sciatica nerve pain",
      dosha: isHindi ? "वात प्रकोप (Vata Imbalance)" : "Vata Prakopa (Degenerative Joint Disorder)",
      therapy: isHindi ? "जानु बस्ती एवं कटी बस्ती (Janu & Kati Basti)" : "Janu Basti & Kati Basti",
      reason: isHindi
        ? "औषधीय तैल से जोड़ों के कार्टिलेज को पुनर्जीवन और सायनोवियल फ्लूइड की वृद्धि। नी रिप्लेसमेंट टालने में सहायक।"
        : "Direct deep trans-dermal lubrication of degenerated cartilage, reversing stiffness and halting joint erosion naturally.",
    },
    {
      label: isHindi ? "मानसिक तनाव, गहरी नींद न आना या माइग्रेन" : "Chronic insomnia, anxiety, panic or severe migraine",
      dosha: isHindi ? "प्राण वात एवं पित्त विकार" : "Prana Vata & Pitta Disturbance",
      therapy: isHindi ? "शिरोधारा एवं नस्य (Shirodhara & Nasya)" : "Shirodhara & Nasya Therapy",
      reason: isHindi
        ? "माथे के आज्ञा चक्र पर औषधीय धारा द्वारा नर्वस सिस्टम को शांति। मेलाटोनिन व सेरोटोनिन का प्राकृतिक संतुलन।"
        : "Rhythmic herbal oil infusion over the frontal cortex deeply resets nervous hyperactivity and resolves sleep disorders.",
    },
    {
      label: isHindi ? "अनियमित माहवारी, पीसीओडी या गर्भधारण में बाधा" : "PCOS / PCOD, irregular cycles or difficulty conceiving",
      dosha: isHindi ? "आर्तव वह स्रोतस अवरोध" : "Artava Vaha Srotas (Reproductive Toxin Block)",
      therapy: isHindi ? "उत्तरबस्ती एवं शोधन (Uttara Basti Protocol)" : "Uttara Basti & Female Detox",
      reason: isHindi
        ? "डॉ. स्मिता कटियार के निर्देशन में गर्भाशय शोधन, ट्यूब ब्लॉकेज खोलना एवं हार्मोन का प्राकृतिक संतुलन।"
        : "Intra-uterine classical herbal therapy that clears blocked fallopian tubes and balances ovarian hormones without IVF.",
    },
  ];

  return (
    <section className="py-14 bg-[#FAF7F2] border-b border-[#E8E1D3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0D3325] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Vedic background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59138]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E8BC6E] uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-[#C59138]" />
              <span>{t.doshaChecker.title}</span>
            </div>
            
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white max-w-2xl">
              {isHindi
                ? "अपनी मुख्य स्वास्थ्य समस्या चुनें और जानें उचित आयुर्वेदिक समाधान"
                : "Select Your Primary Symptom to Discover the Exact Ayurvedic Protocol"}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
              {t.doshaChecker.subtitle}
            </p>

            {/* Symptom Options Pill Selectors */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {symptomOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIssue(i)}
                  className={`p-4 rounded-xl text-left transition-all border text-xs sm:text-sm font-medium cursor-pointer ${
                    selectedIssue === i
                      ? 'bg-[#FAF7F2] text-[#0D3325] border-[#C59138] shadow-md'
                      : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedIssue === i
                          ? 'border-[#0D3325] bg-[#0D3325] text-white'
                          : 'border-white/40'
                      }`}
                    >
                      {selectedIssue === i && <span className="w-1.5 h-1.5 bg-[#C59138] rounded-full"></span>}
                    </span>
                    <span>{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Dynamic Recommendation Panel */}
            {selectedIssue !== null && (
              <div className="mt-6 p-5 sm:p-6 bg-white/10 backdrop-blur-md border border-[#C59138]/40 rounded-2xl animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#E8BC6E] uppercase tracking-wider block">
                      {isHindi ? "संभावित दोष एवं निदान:" : "Identified Root Condition:"} {symptomOptions[selectedIssue].dosha}
                    </span>
                    <h4 className="text-lg sm:text-xl font-serif font-bold text-white mt-1">
                      {isHindi ? "अनुशंसित चिकित्सा:" : "Prescribed Protocol:"}{" "}
                      <span className="text-[#C59138]">
                        {symptomOptions[selectedIssue].therapy}
                      </span>
                    </h4>
                    <p className="text-xs text-white/80 mt-1 max-w-xl">
                      {symptomOptions[selectedIssue].reason}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(symptomOptions[selectedIssue].therapy)}
                    className="px-5 py-2.5 bg-[#C59138] hover:bg-[#D4A347] text-[#092119] rounded-xl text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isHindi ? "इस चिकित्सा हेतु परामर्श लें" : "Book This Protocol"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
