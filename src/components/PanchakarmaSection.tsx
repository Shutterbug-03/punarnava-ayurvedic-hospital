'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkle,
  Check,
  ArrowRight,
  ShieldCheck,
  Flame,
  Clock,
  Sparkles,
  Phone,
  Droplets,
  Layers,
  HeartPulse,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PanchakarmaSectionProps {
  onOpenConsultation: () => void;
}

export default function PanchakarmaSection({ onOpenConsultation }: PanchakarmaSectionProps) {
  const { t, isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const panchakarmaTherapies = [
    {
      name: isHindi ? '1. वमन कर्म (Vamana)' : '1. Vamana Karma (Therapeutic Emesis)',
      shortName: isHindi ? 'वमन (Vamana)' : 'Vamana',
      dosha: isHindi ? 'कफ दोष की शुद्धि' : 'Eliminates Aggravated Kapha',
      desc: isHindi
        ? 'आमाशय में जमे अत्यधिक कफ और बलगम को औषधीय क्वाथ द्वारा बाहर निकालना। दमा, ब्रोंकाइटिस, सोरायसिस एवं त्वचा रोगों में अत्यंत गुणकारी।'
        : 'Controlled medicated emesis that purges deep toxins from the respiratory and upper gastrointestinal tracts. Treats chronic asthma, psoriasis, and vitiligo.',
      image: '/img/clinical/vamana-virechana-kashayam.jpg',
      imageCaption: isHindi ? 'क्वाथ निर्माण एवं कषाय शोधन' : 'Herbal Kvatha Preparation for Bio-Purification',
      target: isHindi ? 'श्वसन तंत्र एवं आमाशय' : 'Respiratory & Upper Gastrointestinal',
      indications: isHindi
        ? ['दमा व श्वास रोग', 'सोरायसिस व चर्म विकार', 'एलर्जी एवं साइनसाइटिस', 'मोटापा व धीमा मेटाबॉलिज्म']
        : ['Bronchial Asthma & Bronchitis', 'Psoriasis & Chronic Skin Eczema', 'Allergic Rhinitis & Sinusitis', 'Metabolic Sluggishness & Obesity'],
    },
    {
      name: isHindi ? '2. विरेचन कर्म (Virechana)' : '2. Virechana Karma (Purgation)',
      shortName: isHindi ? 'विरेचन (Virechana)' : 'Virechana',
      dosha: isHindi ? 'पित्त दोष की शुद्धि' : 'Eliminates Aggravated Pitta',
      desc: isHindi
        ? 'यकृत (लीवर), पित्ताशय और छोटी आंत से विषाक्त पित्त को औषधीय शोधन द्वारा बाहर निकालना। पीलिया, एसिडिटी, एग्जिमा एवं मुंहासों का अचूक इलाज।'
        : 'Therapeutic purgation cleansing the liver, gallbladder, and small intestine of burning bile toxins. Highly effective for jaundice, severe acidity, and eczema.',
      image: '/img/clinical/herbal-pharmacy.jpg',
      imageCaption: isHindi ? 'यकृत शोधक शास्त्रीय औषधि निर्माण' : 'Standardized Pharmacopoeia Liver Formulations',
      target: isHindi ? 'यकृत, पित्ताशय एवं छोटी आंत' : 'Liver, Gallbladder & Small Intestine',
      indications: isHindi
        ? ['जीर्ण एसिडिटी व गैस', 'फैटी लिवर व यकृत विकार', 'एग्जिमा / सोरायसिस', 'क्रोनिक माइग्रेन व उच्च रक्तचाप']
        : ['Chronic Hyperacidity & GERD', 'Fatty Liver & Jaundice History', 'Stubborn Skin Dermatitis', 'Hypertension & Chronic Migraine'],
    },
    {
      name: isHindi ? '3. बस्ती कर्म (Basti)' : '3. Basti Karma (Medicated Enema)',
      shortName: isHindi ? 'बस्ती (Basti)' : 'Basti',
      dosha: isHindi ? 'वात दोष की शुद्धि (पंचकर्म का प्राण)' : 'The Mother of All Treatments (Vata Cleansing)',
      desc: isHindi
        ? 'बृहदांत्र (कोलन) में औषधीय काढ़े एवं तेलों का प्रयोग। आयुर्वेद के अनुसार यह 80 प्रकार के वात रोगों (साइटिका, गठिया, लकवा, कब्ज) की सर्वश्रेष्ठ औषधि है।'
        : 'Nourishing and cleansing herbal decoction/oil enemas targeting the colon. Calms 80 types of Vata disorders, including arthritis, paralysis, and severe sciatica.',
      image: '/img/clinical/panchakarma-droni.jpg',
      imageCaption: isHindi ? 'शास्त्रीय काष्ठ द्रोणी पंचकर्म कक्ष' : 'Handcrafted Teakwood Droni Therapy Suite',
      target: isHindi ? 'बृहदांत्र (कोलन) एवं संपूर्ण तंत्रिका तंत्र' : 'Colon & Entire Nervous System',
      indications: isHindi
        ? ['साइटिका व स्लिप डिस्क', 'संधिवाथ / आर्थराइटिस', 'पुरानी कब्ज व आईबीएस', 'लकवा एवं तंत्रिका विकार']
        : ['Sciatica & Lumbar Slip Disc', 'Osteoarthritis & Joint Degeneration', 'Chronic Constipation & IBS', 'Paralysis & Neuromuscular Conditions'],
    },
    {
      name: isHindi ? '4. नस्य कर्म (Nasya)' : '4. Nasya Karma (Nasal Errhine)',
      shortName: isHindi ? 'नस्य (Nasya)' : 'Nasya',
      dosha: isHindi ? 'ऊर्ध्व जत्रुगत रोग (सिर व ग्रीवा)' : 'Head & Supra-Clavicular Disorders',
      desc: isHindi
        ? 'नाक के रास्ते औषधीय तेल या अर्क डालना। नाक को मस्तिष्क का द्वार माना गया है। यह साइनस, सर्वाइकल स्पॉन्डिलाइटिस, बाल झड़ने और माइग्रेन को दूर करता है।'
        : 'Nasal administration of medicated herb-infused drops directly reaching the cranial base. Clears chronic sinusitis, cervical spondylosis, migraine, and facial palsy.',
      image: '/img/clinical/nasya-karma.jpg',
      imageCaption: isHindi ? 'ऊर्ध्व जत्रुगत अणु तैल नस्य कर्म' : 'Direct Cranial & Sinus Herbal Administration',
      target: isHindi ? 'मस्तिष्क, साइनस एवं ग्रीवा भाग' : 'Cranial Base, Frontal Sinuses & Cervical Spine',
      indications: isHindi
        ? ['साइनस व जीर्ण जुकाम', 'सर्वाइकल स्पॉन्डिलाइटिस', 'माइग्रेन व तनाव', 'समय से पूर्व बाल झड़ना / सफेद होना']
        : ['Chronic Sinusitis & Congestion', 'Cervical Spondylosis Neck Pain', 'Migraine & Tension Headaches', 'Premature Hair Loss & Greying'],
    },
    {
      name: isHindi ? '5. रक्तमोक्षण (Raktamokshana)' : '5. Raktamokshana (Blood Purification)',
      shortName: isHindi ? 'रक्तमोक्षण (Raktamokshana)' : 'Raktamokshana',
      dosha: isHindi ? 'रक्त एवं पित्त शुद्धि' : 'Deep Blood & Micro-Vascular Detox',
      desc: isHindi
        ? 'जलौका (लीच थेरेपी) या सिरवेध द्वारा दूषित रक्त को बाहर निकालना। वेरिकोज वेन्स, गैर-भरने वाले घाव, दाद और एक्जिमा में चमत्कारी परिणाम देता है।'
        : 'Targeted biological micro-vascular de-clotting and toxin drainage, often via medicinal Jalauka (Leech therapy). Exceptional for varicose veins and non-healing ulcers.',
      image: '/img/clinical/raktamokshana.jpg',
      imageCaption: isHindi ? 'जीवाणुरहित जलौका शल्य एवं रक्त शोधन' : 'Sterile Jalauka Leech Therapy Clinical Setup',
      target: isHindi ? 'रक्त वाहिकाएं एवं सूक्ष्म केशिकाएं' : 'Micro-Vascular Capillaries & Dermis',
      indications: isHindi
        ? ['वेरिकोज वेन्स व नसों का गुच्छा', 'पुराने न भरने वाले घाव व छाले', 'दाद, खाज व चर्म रोग', 'एलोपेसिया (बालों का उड़ना)']
        : ['Severe Varicose Veins & Thrombosis', 'Non-healing Diabetic Ulcers', 'Stubborn Fungal Dermatitis', 'Patchy Alopecia Areata'],
    },
  ];

  const current = panchakarmaTherapies[activeTab];

  return (
    <section
      id="panchakarma"
      className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#E8E1D3] relative overflow-hidden"
    >
      {/* Decorative concentric background motif */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, #0D3325 15%, transparent 16%, transparent 35%, #0D3325 36%, transparent 37%)',
          backgroundSize: '1200px 1200px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
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
                {t.panchakarmaSection.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {t.panchakarmaSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.panchakarmaSection.subtitle}
          </p>

          {/* Chronological 3-Stage Process Roadmap Pill */}
          <div className="w-full max-w-3xl mt-8 p-2 bg-white/90 backdrop-blur-xs border border-[#E8E1D3] rounded-2xl shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
              <div className="p-3 rounded-xl bg-[#0D3325]/5 border border-[#0D3325]/10 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0D3325] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C59138]">
                    {isHindi ? 'प्रथम चरण' : 'Phase 01'}
                  </div>
                  <div className="text-xs font-bold text-[#0D3325]">
                    {isHindi ? 'पूर्व कर्म (तैयारी)' : 'Poorva Karma'}
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#C59138]/10 border border-[#C59138]/20 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#C59138] text-[#092119] text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#A8482A]">
                    {isHindi ? 'द्वितीय चरण' : 'Phase 02'}
                  </div>
                  <div className="text-xs font-bold text-[#0D3325]">
                    {isHindi ? 'प्रधान कर्म (५ पंचकर्म)' : 'Pradhana Karma (5)'}
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0D3325]/5 border border-[#0D3325]/10 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0D3325] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C59138]">
                    {isHindi ? 'तृतीय चरण' : 'Phase 03'}
                  </div>
                  <div className="text-xs font-bold text-[#0D3325]">
                    {isHindi ? 'पश्चात् कर्म (पुनर्स्थापन)' : 'Paschatya Karma'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STAGE 1: पूर्व कर्म (POORVA KARMA - PREPARATION BEFORE PANCHAKARMA)
        ========================================================================= */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0D3325] text-white">
              <Layers className="w-3.5 h-3.5 text-[#C59138]" />
              {isHindi ? 'चरण ०१: पूर्व कर्म (Panchakarma से पूर्व तैयारी)' : 'Stage 01: Poorva Karma (Preparation Before Panchakarma)'}
            </span>
            <span className="text-xs font-semibold text-[#A8482A] bg-[#A8482A]/10 px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {isHindi ? '३ से ७ दिन' : '3 to 7 Days'}
            </span>
          </div>

          <div className="bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325] mb-2">
                    {isHindi
                      ? 'पूर्व कर्म: आभ्यंतर व बाह्य स्नेहन एवं वाष्प स्वेदन'
                      : 'Poorva Karma: Cellular Oleation & Thermal Sudation'}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#C59138]">
                    {isHindi
                      ? 'प्रधान पंचकर्म शोधन से पूर्व शरीर एवं स्रोतों की शास्त्रीय तैयारी'
                      : 'Essential preparatory bio-mobilization before core Panchakarma elimination'}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#14241E]/90 leading-relaxed">
                  {isHindi
                    ? 'शास्त्रीय आयुर्वेद के अनुसार यदि सूखे और अप्रस्तुत शरीर का सीधे शोधन किया जाए तो अंगों को क्षति पहुंच सकती है। पूर्व कर्म द्वारा शरीर के सूक्ष्म स्रोतों (Srotas) में जमे विषैले टॉक्सिन्स (आम दोष) को पिघलाकर कोष्ठ (पाचन तंत्र) में लाया जाता है ताकि ५ प्रधान कर्मों द्वारा उन्हें बिना किसी कमजोरी के सुगमता से निष्कासित किया जा सके।'
                    : 'In classical Ayurveda, bio-purification cannot be performed on unprepared, dry tissues. Poorva Karma uses medicated oleation and therapeutic steam to liquefy deep-seated cellular toxins (Aama), dilate micro-channels (Srotas), and smoothly mobilize morbid doshas into the alimentary canal (Koshtha) so they can be expelled safely during Pradhana Karma.'}
                </p>

                {/* 4 Core Pillars of Poorva Karma */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Droplets className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '१. आभ्यंतर स्नेहन (घृतपान)' : '1. Internal Snehana (Ghee)'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'विशेष औषधीय सिद्ध घृत का क्रमिक सेवन, जो कोशिकाओं के भीतर तक पहुंचकर वसा में घुले विषैले तत्वों को अलग करता है।'
                        : 'Graduated daily intake of medicated herbal ghee that penetrates cellular membranes to dissolve fat-soluble endotoxins.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <HeartPulse className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '२. बाह्य स्नेहन (अभ्यंग)' : '2. External Abhyanga'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'गुनगुने औषधीय तैल द्वारा संपूर्ण शरीर की लयबद्ध मालिश, जिससे नसों की जकड़न दूर होती है और रक्तसंचार तीव्र होता है।'
                        : 'Rhythmic full-body synchronized warm herbal oil massage that softens peripheral tissues and activates lymphatic drainage.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Flame className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '३. वाष्प स्वेदन (हर्बल स्टीम)' : '3. Swedana (Herbal Steam)'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'दशमूल व निर्गुंडी क्वाथ की भाप द्वारा रोमछिद्रों को खोलना तथा जमे हुए विष को पिघलाकर कोष्ठ में प्रवाहित करना।'
                        : 'Therapeutic steam chamber with Dashamoola decoctions that opens micro-pores and melts solidified toxins into the gut.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '४. दीपन एवं पाचन' : '4. Deepana & Pachana'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'पाचन अग्नि को प्रदीप्त करने हेतु त्रिकटु व हिंग्वाष्टक चूर्ण का सेवन, जिससे अपक्व आम का पाचन हो सके।'
                        : 'Classical digestive stimulants and herbal decoctions that rekindle preliminary Agni to digest sticky unprocessed Ama.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-lg bg-[#FAF7F2] group">
                  <Image
                    src="/img/clinical/potli-swedan.jpg"
                    alt={isHindi ? 'पूर्व कर्म हर्बल स्वेदन' : 'Poorva Karma Potli Swedan Preparation'}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#E8E1D3] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0D3325]">
                      {isHindi ? 'हर्बल पोटली स्वेदन एवं स्नेहन कक्ष' : 'Therapeutic Herbal Swedan & Snehana Chamber'}
                    </span>
                    <span className="text-[#C59138] font-bold">100% Classical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STAGE 2: प्रधान कर्म (PRADHANA KARMA - THE 5 PANCHAKARMA THERAPIES)
        ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C59138] text-[#092119]">
                <Sparkles className="w-3.5 h-3.5" />
                {isHindi ? 'चरण ०२: प्रधान कर्म (मूल ५ पंचकर्म)' : 'Stage 02: Pradhana Karma (5 Core Panchakarma)'}
              </span>
              <span className="text-xs font-semibold text-[#0D3325] bg-[#0D3325]/10 px-3 py-1 rounded-full">
                {isHindi ? 'नाड़ी परीक्षा अनुसार निर्धारित' : 'Nadi Pariksha Protocol'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] mb-3">
              {isHindi
                ? 'प्रधान कर्म: पांच शास्त्रीय पंचकर्म शोधन क्रियाएं'
                : 'Pradhana Karma: The 5 Classical Panchakarma Therapies'}
            </h3>
            <p className="text-sm sm:text-base text-[#4B6358] max-w-2xl leading-relaxed">
              {isHindi
                ? 'पूर्व कर्म द्वारा पिघलाकर कोष्ठ में लाए गए विषैले दोषों को शरीर से पूरी तरह बाहर निकालने हेतु नाड़ी परीक्षा के आधार पर इन पांच में से उचित क्रिया का चयन किया जाता है:'
                : 'Once Poorva Karma mobilizes deep toxins into the koshtha, the senior physician administers the targeted cleansing therapy based on pulse diagnosis and aggravated doshas:'}
            </p>

            {/* 5-Fold Interactive Tab Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {panchakarmaTherapies.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0D3325] text-white shadow-md scale-105'
                        : 'bg-white border border-[#E8E1D3] text-[#14241E] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {tab.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Panchakarma Showcase Featured Glass Card */}
          <div className="bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#C59138]/15 text-[#9B6A1B] border border-[#C59138]/30">
                    {current.dosha}
                  </span>
                  <span className="text-xs text-[#4B6358] font-medium hidden sm:inline">
                    {current.target}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325]">
                  {current.name}
                </h4>

                <p className="text-sm sm:text-base text-[#14241E]/90 leading-relaxed">
                  {current.desc}
                </p>

                {/* Indications Pills */}
                <div className="pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#0D3325] mb-3">
                    {isHindi ? 'प्रमुख चिकित्सीय लाभ (Clinical Indications):' : 'Key Clinical Indications:'}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.indications.map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#14241E]">
                        <div className="w-4 h-4 rounded-full bg-[#134533]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#134533]" />
                        </div>
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-4">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-2.5 rounded-full bg-[#0D3325] hover:bg-[#134533] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{isHindi ? 'ओपीडी टोकन बुक करें' : 'Book OPD Token'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-lg bg-[#FAF7F2] group">
                  <Image
                    key={current.image}
                    src={current.image}
                    alt={current.name}
                    width={600}
                    height={400}
                    className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#E8E1D3] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0D3325]">
                      {current.imageCaption}
                    </span>
                    <span className="text-[#C59138] font-bold">100% Classical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STAGE 3: पश्चात् कर्म (PASCHATYA KARMA - REHABILITATION AFTER PANCHAKARMA)
        ========================================================================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0D3325] text-white">
              <Sparkle className="w-3.5 h-3.5 text-[#C59138]" />
              {isHindi ? 'चरण ०३: पश्चात् कर्म (Panchakarma उपरांत पुनर्स्थापन)' : 'Stage 03: Paschatya Karma (Post-Panchakarma Rehabilitation)'}
            </span>
            <span className="text-xs font-semibold text-[#A8482A] bg-[#A8482A]/10 px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {isHindi ? '३ से ७ दिन' : '3 to 7 Days'}
            </span>
          </div>

          <div className="bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325] mb-2">
                    {isHindi
                      ? 'पश्चात् कर्म: संसर्जन क्रम (विशेष आहार), रसायन एवं कायाकल्प'
                      : 'Paschatya Karma: Restorative Diet & Rasayana Vitality'}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#C59138]">
                    {isHindi
                      ? 'जठराग्नि की पुनर्स्थापना, धातु पोषण एवं दीर्घकालिक स्वास्थ्य स्थिरीकरण'
                      : 'Metabolic fire rekindling, cellular tissue nourishment, and disease recurrence prevention'}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#14241E]/90 leading-relaxed">
                  {isHindi
                    ? 'प्रधान कर्म द्वारा विषाक्त दोषों के निष्कासन के उपरांत पाचन अग्नि (जठराग्नि) नवजात शिशु के समान संवेदनशील व मंद हो जाती है। पश्चात् कर्म में संसर्जन क्रम द्वारा अत्यधिक सुपाच्य हल्के आहार से ठोस आहार की ओर क्रमिक संक्रमण कराया जाता है, जिससे जठराग्नि तीव्र होती है। इसके पश्चात रसायन औषधियों द्वारा सातों धातुओं का पोषण कर दीर्घकालिक ऊर्जा एवं रोग प्रतिरोधक क्षमता (ओजस) सुनिश्चित की जाती है।'
                    : 'Following deep biological purification, the metabolic fire (Jatharagni) is delicate and must be rekindled like a gentle flame. Paschatya Karma employs Samsarjana Krama—a graduated sequence from light liquid broths to nutritious meals—rebuilding digestion without toxic burden. Concurrently, specialized Rasayana herbs nourish all seven bodily tissues (Dhatus), restore vital immunity (Ojas), and permanently prevent disease recurrence.'}
                </p>

                {/* 4 Core Pillars of Paschatya Karma */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Flame className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '१. संसर्जन क्रम (आहार नियम)' : '1. Samsarjana Krama (Diet)'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'पेया (पतला मांड), विलेपी (गाढ़ा दलिया) एवं यूष (मूंग दाल सूप) का क्रमिक सेवन, जिससे पाचन शक्ति सामान्य होती है।'
                        : 'Graduated intake from thin rice water (Peya) to thick gruel (Vilepi) and seasoned lentil broth (Yusha) to restore Agni.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '२. रसायन चिकित्सा' : '2. Rasayana Therapy'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'च्यवनप्राश, ब्राह्मी रसायन एवं अश्वगंधा द्वारा सात धातुओं (रस, रक्त, मांस आदि) का पुनर्निर्माण और ऊर्जा संवर्धन।'
                        : 'Customized Rasayana herbs that nourish all 7 vital tissues (Dhatus), slow cellular degeneration, and amplify Ojas.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '३. शमन एवं आग्नेय औषधि' : '3. Shamana & Agni Deepana'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'सूक्ष्म अवशिष्ट दोषों को शांत करने हेतु सौम्य शमन औषधियां एवं पाचन को स्थिर करने वाले शास्त्रीय अर्क।'
                        : 'Gentle balancing herbs that pacify residual minor dosha traces and stabilize balanced gut metabolic absorption.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D3]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Clock className="w-4 h-4 text-[#C59138]" />
                      <h4 className="text-xs font-bold text-[#0D3325]">
                        {isHindi ? '४. दिनचर्या एवं ऋतुचर्या' : '4. Dinacharya & Lifestyle'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4B6358] leading-relaxed">
                      {isHindi
                        ? 'प्रकृति अनुकूल व्यक्तिगत दिनचर्या, योग, निद्रा एवं खान-पान के पथ्य-अपथ्य निर्देश ताकि रोग दोबारा न हो।'
                        : 'Constitution-specific daily routines, sleep hygiene, and dietary guidelines to guarantee permanent freedom from relapse.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-lg bg-[#FAF7F2] group">
                  <Image
                    src="/img/clinical/herbal-pharmacy.jpg"
                    alt={isHindi ? 'पश्चात् कर्म रसायन औषधियां' : 'Paschatya Karma Rasayana Formulations'}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#E8E1D3] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0D3325]">
                      {isHindi ? 'शास्त्रीय रसायन एवं संसर्जन औषधियां' : 'Classical Rasayana Formulations & Apothecary'}
                    </span>
                    <span className="text-[#C59138] font-bold">100% Classical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Booking Ribbon */}
        <div className="mt-12 pt-8 border-t border-[#E8E1D3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4B6358] text-center sm:text-left">
            <span className="font-semibold text-[#0D3325]">
              {isHindi ? 'संपूर्ण पंचकर्म चिकित्सा परामर्श:' : 'Comprehensive Panchakarma Protocol Consultation:'}
            </span>{' '}
            {isHindi
              ? 'वरिष्ठ वैद्य डॉ. बी.एस. कटियार से नाड़ी परीक्षा एवं रोगानुसार पूर्व, प्रधान व पश्चात् कर्म की योजना बनवाएं।'
              : 'Consult Dr. B.S. Katiyar for pulse-guided customized Poorva, Pradhana, and Paschatya Karma planning.'}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+918009708080"
              className="px-4 py-2.5 rounded-full border border-[#0D3325] text-[#0D3325] hover:bg-[#FAF7F2] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59138]" />
              <span>+91-8009708080</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-full text-xs font-bold transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>{isHindi ? 'ओपीडी टोकन बुक करें' : 'Book OPD Token'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
