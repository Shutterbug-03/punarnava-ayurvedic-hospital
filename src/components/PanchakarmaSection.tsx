'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Sparkle, Check, ArrowRight, Activity, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';
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
        {/* 1. Header Group matching AboutUsBlaze style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
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

          {/* 5-Fold Interactive Tab Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
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

        {/* 2. Active Panchakarma Showcase Featured Glass Card */}
        <div className="bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
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

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325]">
                {current.name}
              </h3>

              <p className="text-sm sm:text-base text-[#14241E]/90 leading-relaxed">
                {current.desc}
              </p>

              {/* Indications Pills */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3325] mb-3">
                  {isHindi ? 'प्रमुख चिकित्सीय लाभ (Clinical Indications):' : 'Key Clinical Indications:'}
                </h4>
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
                  <span>{isHindi ? 'पंचकर्म परामर्श बुक करें' : 'Book Panchakarma Session'}</span>
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

        {/* 3. The 3-Stage Scientific Panchakarma Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              phase: isHindi ? 'प्रथम चरण' : 'Phase I',
              title: isHindi ? 'पूर्व कर्म (तैयारी एवं शोधन)' : 'Poorva Karma (Preparation)',
              timeline: isHindi ? '3 से 7 दिन' : 'Days 1 to 7',
              desc: isHindi
                ? 'औषधीय घृतपान (स्नेहन) और वाष्प स्वेदन द्वारा शरीर के सूक्ष्म स्रोतों में जमे विषैले टॉक्सिन्स (आम) को पिघलाकर कोष्ठ में लाना।'
                : 'Internal & external oleation (Snehan) with medicated herbal ghee followed by therapeutic herbal steam (Swedan) to liquefy deep metabolic toxins.',
              procedures: isHindi
                ? ['औषधीय घृतपान (आभ्यंतर स्नेहन)', 'संपूर्ण शरीर तैल मालिश (अभ्यंग)', 'हर्बल स्टीम बाथ (स्वेदन)']
                : ['Deep cellular oleation (Snehan)', 'Full-body herbal oil Abhyanga', 'Medicinal herbal steam bath (Swedan)'],
            },
            {
              phase: isHindi ? 'द्वितीय चरण' : 'Phase II',
              title: isHindi ? 'प्रधान कर्म (मुख्य विषमुक्ति)' : 'Pradhana Karma (Core Cleansing)',
              timeline: isHindi ? 'नाड़ी अनुसार निर्धारित' : 'Targeted Protocol',
              desc: isHindi
                ? 'नाड़ी परीक्षण के अनुसार वमन, विरेचन, बस्ती, नस्य अथवा रक्तमोक्षण द्वारा विकृत दोषों को शरीर से पूरी तरह निष्कासित करना।'
                : 'The five classical deep-cleansing therapies selected strictly based on Nadi Pariksha pulse diagnosis to permanently purge vitiated doshas.',
              procedures: isHindi
                ? ['दोष अनुसार मुख्य पंचकर्म क्रिया', 'प्रमाणित आयुर्वेदिक जड़ी-बूटियां', 'वरिष्ठ वैद्य की प्रत्यक्ष निगरानी']
                : ['Individualized core Panchakarma', 'Standardized classical herbal decoctions', 'Direct senior physician monitoring'],
            },
            {
              phase: isHindi ? 'तृतीय चरण' : 'Phase III',
              title: isHindi ? 'पश्चात कर्म (पुनर्स्थापना एवं रसायन)' : 'Paschatya Karma (Rejuvenation)',
              timeline: isHindi ? '3 से 5 दिन' : 'Days 8 to 12',
              desc: isHindi
                ? 'संसर्जन क्रम (क्रमिक सुपाच्य आहार), रसायन औषधियां और जीवनशैली मार्गदर्शन द्वारा जठराग्नि को पुनः प्रदीप्त करना।'
                : 'Graduated restorative dietary regimen (Samsarjana Krama), rasayana vitality herbs, and lifestyle alignment to rebuild peak metabolic fire (Agni).',
              procedures: isHindi
                ? ['संसर्जन क्रम (क्रमिक हल्का आहार)', 'कायाकल्प रसायन औषधियां', 'दीर्घकालिक दिनचर्या व पथ्य परामर्श']
                : ['Samsarjana Krama restorative diet', 'Cellular revitalizing Rasayanas', 'Preventive Dinacharya & dietary guidelines'],
            },
          ].map((stage, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-[28px] p-7 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0D3325]"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0D3325]/10 text-[#0D3325] text-xs font-bold font-sans">
                    {stage.phase}
                  </span>
                  <span className="text-[11px] font-bold text-[#A8482A] uppercase tracking-wider bg-[#A8482A]/10 px-2.5 py-1 rounded-full">
                    {stage.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0D3325] mb-2 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed mb-5">
                  {stage.desc}
                </p>

                <div className="space-y-2 border-t border-[#E8E1D3]/70 pt-4">
                  {stage.procedures.map((proc, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#14241E]">
                      <Check className="w-3.5 h-3.5 text-[#134533] shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D3]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#4B6358] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59138]" />
                  <span>{isHindi ? 'चिकित्सीय निगरानी में' : 'Direct Vaidya Supervision'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
