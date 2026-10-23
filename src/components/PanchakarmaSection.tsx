'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface PanchakarmaSectionProps {
  onOpenConsultation: () => void;
}

export default function PanchakarmaSection({ onOpenConsultation }: PanchakarmaSectionProps) {
  const { t, isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const panchakarmaTherapies = [
    {
      name: isHindi ? "1. वमन कर्म (Vamana)" : "1. Vamana Karma (Therapeutic Emesis)",
      dosha: isHindi ? "कफ दोष की शुद्धि" : "Eliminates Aggravated Kapha",
      desc: isHindi
        ? "आमाशय में जमे अत्यधिक कफ और बलगम को औषधीय क्वाथ द्वारा बाहर निकालना। दमा, ब्रोंकाइटिस, सोरायसिस एवं त्वचा रोगों में अत्यंत गुणकारी।"
        : "Controlled medicated emesis that purges deep toxins from the respiratory and upper gastrointestinal tracts. Treats chronic asthma, psoriasis, and vitiligo.",
      image: "/img/vaman.png",
      indications: isHindi
        ? ["दमा व श्वास रोग", "सोरायसिस", "एलर्जी", "मोटापा"]
        : ["Bronchial Asthma", "Psoriasis", "Chronic Allergies", "Obesity"],
    },
    {
      name: isHindi ? "2. विरेचन कर्म (Virechana)" : "2. Virechana Karma (Purgation)",
      dosha: isHindi ? "पित्त दोष की शुद्धि" : "Eliminates Aggravated Pitta",
      desc: isHindi
        ? "यकृत (लीवर), पित्ताशय और छोटी आंत से विषाक्त पित्त को औषधीय शोधन द्वारा बाहर निकालना। पीलिया, एसिडिटी, एग्जिमा एवं मुंहासों का अचूक इलाज।"
        : "Therapeutic purgation cleansing the liver, gallbladder, and small intestine of burning bile toxins. Highly effective for jaundice, severe acidity, and eczema.",
      image: "/img/virechan.png",
      indications: isHindi
        ? ["जीर्ण एसिडिटी", "यकृत विकार", "एग्जिमा / चर्म रोग", "माइग्रेन"]
        : ["Chronic Acidity", "Fatty Liver", "Skin Eczema", "Hypertension"],
    },
    {
      name: isHindi ? "3. बस्ती कर्म (Basti)" : "3. Basti Karma (Medicated Enema)",
      dosha: isHindi ? "वात दोष की शुद्धि (पंचकर्म का प्राण)" : "The Mother of All Treatments (Vata Cleansing)",
      desc: isHindi
        ? "बृहदांत्र (कोलन) में औषधीय काढ़े एवं तेलों का प्रयोग। आयुर्वेद के अनुसार यह 80 प्रकार के वात रोगों (साइटिका, गठिया, लकवा, कब्ज) की सर्वश्रेष्ठ औषधि है।"
        : "Nourishing and cleansing herbal decoction/oil enemas targeting the colon. Calms 80 types of Vata disorders, including arthritis, paralysis, and severe sciatica.",
      image: "/img/basti.jpg",
      indications: isHindi
        ? ["साइटिका व स्लिप डिस्क", "संधिवाथ / आर्थराइटिस", "पुरानी कब्ज", "लकवा"]
        : ["Sciatica & Slip Disc", "Osteoarthritis", "Chronic Constipation", "Paralysis"],
    },
    {
      name: isHindi ? "4. नस्य कर्म (Nasya)" : "4. Nasya Karma (Nasal Errhine)",
      dosha: isHindi ? "ऊर्ध्व जत्रुगत रोग (सिर व ग्रीवा)" : "Head & Supra-Clavicular Disorders",
      desc: isHindi
        ? "नाक के रास्ते औषधीय तेल या अर्क डालना। नाक को मस्तिष्क का द्वार माना गया है। यह साइनस, सर्वाइकल स्पॉन्डिलाइटिस, बाल झड़ने और माइग्रेन को दूर करता है।"
        : "Nasal administration of medicated herb-infused drops directly reaching the cranial base. Clears chronic sinusitis, cervical spondylosis, migraine, and facial palsy.",
      image: "/img/nasya.jpg",
      indications: isHindi
        ? ["साइनस व जुकाम", "सर्वाइकल दर्द", "माइग्रेन", "बाल झड़ना"]
        : ["Sinusitis", "Cervical Spondylosis", "Migraine", "Premature Greying"],
    },
    {
      name: isHindi ? "5. रक्तमोक्षण (Raktamokshana)" : "5. Raktamokshana (Blood Purification)",
      dosha: isHindi ? "रक्त एवं पित्त शुद्धि" : "Deep Blood & Micro-Vascular Detox",
      desc: isHindi
        ? "जलौका (लीच थेरेपी) या सिरवेध द्वारा दूषित रक्त को बाहर निकालना। वेरिकोज वेन्स, गैर-भरने वाले घाव, दाद और एक्जिमा में चमत्कारी परिणाम देता है।"
        : "Targeted biological micro-vascular de-clotting and toxin drainage, often via medicinal Jalauka (Leech therapy). Exceptional for varicose veins and non-healing ulcers.",
      image: "/img/rakta-moksha.jpg",
      indications: isHindi
        ? ["वेरिकोज वेन्स", "पुराने न भरने वाले घाव", "दाद व खाज", "एलोपेसिया"]
        : ["Varicose Veins", "Non-healing Ulcers", "Severe Dermatitis", "Alopecia"],
    },
  ];

  return (
    <section id="panchakarma" className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{t.panchakarmaSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {t.panchakarmaSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {t.panchakarmaSection.subtitle}
          </p>
        </div>

        {/* 3-Stage Scientific Panchakarma Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.panchakarmaSection.stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C59138]"></div>
              <div>
                <span className="text-xs font-bold text-[#C59138] uppercase tracking-wider">
                  Phase 0{idx + 1}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#0D3325] mt-1 mb-3">
                  {stage.phase}
                </h4>
                <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The 5 Pradhan Karma Cleansing Therapies Interactive Showcase */}
        <div className="bg-white border border-[#E8E1D3] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3325]">
              {isHindi ? "प्रधान कर्म: 5 मौलिक शोधन विधियां" : "The 5 Pradhan Karma Core Therapies"}
            </h3>
            <p className="text-xs sm:text-sm text-[#799186] mt-1">
              {isHindi
                ? "नाड़ी परीक्षा के उपरांत आपकी व्यक्तिगत शारीरिक प्रकृति के अनुसार चयनित"
                : "Prescribed individually after pulse diagnosis to target specific aggravated doshas"}
            </p>
          </div>

          {/* Therapy Switcher Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-[#E8E1D3]">
            {panchakarmaTherapies.map((therapy, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === i
                    ? 'bg-[#0D3325] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4B6358] hover:bg-[#E8E1D3]/50'
                }`}
              >
                {therapy.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active Therapy Detail View */}
          {panchakarmaTherapies[activeTab] && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EDF4F0] text-[#0D3325]">
                  {panchakarmaTherapies[activeTab].dosha}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3325]">
                  {panchakarmaTherapies[activeTab].name}
                </h4>
                <p className="text-sm text-[#14241E] leading-relaxed">
                  {panchakarmaTherapies[activeTab].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-[#14241E] uppercase tracking-wider block mb-2">
                    {isHindi ? "प्रमुख रोग जिनमे लाभकारी है:" : "Key Clinical Indications:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {panchakarmaTherapies[activeTab].indications.map((ind, indIdx) => (
                      <span
                        key={indIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2] border border-[#E8E1D3] rounded-lg text-xs font-medium text-[#0D3325]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#C59138]" />
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-xl text-xs font-medium transition-all shadow-xs"
                  >
                    <span>{isHindi ? "पंचकर्म परामर्श बुक करें" : "Book Panchakarma Consultation"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-md bg-[#FAF7F2] aspect-[4/3] flex items-center justify-center p-4">
                  <Image
                    src={panchakarmaTherapies[activeTab].image}
                    alt={panchakarmaTherapies[activeTab].name}
                    width={450}
                    height={320}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
