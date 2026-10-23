'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Award, Clock, Phone, CheckCircle2, Stethoscope, Sparkle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface DoctorsSectionProps {
  onOpenConsultation: () => void;
}

export default function DoctorsSection({ onOpenConsultation }: DoctorsSectionProps) {
  const { t, isHindi } = useLanguage();

  return (
    <section
      id="doctors"
      className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#E8E1D3] relative overflow-hidden"
    >
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
                <Stethoscope size={18} className="text-[#C59138]" />
              </motion.div>
            </div>
            <div className="px-4 py-2 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <span className="text-sm font-semibold text-[#0D3325]">
                {t.doctorsSection.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {t.doctorsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.doctorsSection.subtitle}
          </p>
        </div>

        {/* 2. Doctor Profiles Grid with Luxury Executive Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {t.doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Profile Top Banner */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#092119] via-[#0D3325] to-[#134533] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59138]/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#C59138] bg-[#092119] shrink-0 shadow-lg group-hover:border-[#E8BC6E] transition-colors flex items-center justify-center">
                    {doc.id === 'dr-bs-katiyar' ? (
                      <Image
                        src="/img/doctors/dr-bs-katiyar-avatar.jpg"
                        alt={doc.name}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-[#092119] via-[#0D3325] to-[#134533] flex flex-col items-center justify-center text-center p-2">
                        <span className="font-serif font-bold text-2xl text-[#C59138]">
                          SK
                        </span>
                        <span className="text-[9px] text-white/70 uppercase tracking-wider mt-1">
                          Senior Vaidya
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C59138] text-[#092119] mb-1.5 shadow-2xs">
                      {doc.experience}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F2]">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#E8BC6E] font-medium mt-1">
                      {doc.qualification}
                    </p>
                    <p className="text-xs text-white/80 mt-1 font-sans">
                      {doc.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Details & Specialities */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0D3325] uppercase tracking-wider mb-2.5">
                    {isHindi ? 'चिकित्सीय परिचय एवं अनुभव' : 'Physician Background'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                    {doc.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0D3325] uppercase tracking-wider mb-3">
                    {isHindi ? 'विशिष्ट विशेषज्ञताएं (Specialities)' : 'Key Areas of Clinical Mastery'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doc.specialities.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#14241E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#134533] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E1D3] space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#4B6358]">
                    <Clock className="w-3.5 h-3.5 text-[#C59138] shrink-0" />
                    <span>{doc.opdHours}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <button
                      onClick={onOpenConsultation}
                      className="flex-1 py-2.5 rounded-full bg-[#0D3325] hover:bg-[#134533] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>{isHindi ? 'निःशुल्क परामर्श बुक करें' : 'Book Free OPD Token'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
                    </button>
                    <a
                      href={`tel:${doc.phone}`}
                      className="px-5 py-2.5 rounded-full border border-[#0D3325] text-[#0D3325] hover:bg-[#FAF7F2] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C59138]" />
                      <span>{isHindi ? 'सीधा संपर्क' : 'Call Direct'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Clinical Consultation & Diagnostic Journey Flowchart */}
        <div className="mt-16 bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#134533]/10 text-[#0D3325] mb-2">
              {isHindi ? 'चिकित्सीय परामर्श प्रवाह' : 'Clinical Consultation Journey'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325]">
              {isHindi ? 'नाड़ी परीक्षा से पूर्ण स्वास्थ्य लाभ: चरणबद्ध प्रक्रिया' : 'From Nadi Diagnosis to Recovery: Patient Care Flowchart'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B6358] mt-1.5">
              {isHindi
                ? 'वरिष्ठ चिकित्सकों के निर्देशन में 4-चरणीय प्रामाणिक परामर्श'
                : 'Thorough root-cause analysis without unnecessary chemical prescriptions'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: '1',
                titleEn: 'Nadi Pariksha Pulse Reading',
                titleHi: 'त्रिदोष नाड़ी परीक्षा',
                descEn: 'Three-finger radial artery assessment evaluating Vata, Pitta, and Kapha imbalances and metabolic fire (Agni).',
                descHi: 'तीन उंगलियों द्वारा कलाई की नाड़ी का सूक्ष्म परीक्षण कर वात-पित्त-कफ और जठराग्नि की स्थिति का सटीक ज्ञान।',
              },
              {
                num: '2',
                titleEn: 'Report & History Analysis',
                titleHi: 'रिपोर्ट व रोग इतिहास समीक्षा',
                descEn: 'Correlating Ayurvedic findings with your existing MRI, USG, blood tests, or previous failed surgical history.',
                descHi: 'मरीज की पूर्व जांचों (एमआरआई, सोनोग्राफी, रक्त परीक्षण) का आयुर्वेदिक दृष्टिकोण से विस्तृत विश्लेषण।',
              },
              {
                num: '3',
                titleEn: 'Targeted Protocol Design',
                titleHi: 'व्यक्तिगत उपचार निर्धारण',
                descEn: 'Custom Ksharsutra surgical appointment or tailored Panchakarma detox schedule with clear timelines.',
                descHi: 'रोग की गंभीरता अनुसार दिन-वार क्षारसूत्र सर्जरी अथवा पंचकर्म शोधन का स्पष्ट चिकित्सकीय निर्धारण।',
              },
              {
                num: '4',
                titleEn: 'Pathya & Rasayana Longevity',
                titleHi: 'पथ्य आहार व कायाकल्प रसायन',
                descEn: 'Comprehensive dietary chart (Pathya-Apathya) and rejuvenating herbs ensuring long-term disease-free vitality.',
                descHi: 'भोजन में क्या खाएं, क्या न खाएं (पथ्य-अपथ्य) का विस्तृत चार्ट और रोग की पुनरावृत्ति रोकने हेतु रसायन।',
              },
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#FAF7F2] border border-[#E8E1D3] rounded-2xl p-5 hover:border-[#0D3325] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#0D3325] text-[#C59138] font-serif font-bold text-xs flex items-center justify-center mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#0D3325] mb-2">
                    {isHindi ? step.titleHi : step.titleEn}
                  </h4>
                  <p className="text-xs text-[#4B6358] leading-relaxed">
                    {isHindi ? step.descHi : step.descEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D3] flex items-center gap-1.5 text-[11px] text-[#134533] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#134533] shrink-0" />
                  <span>{isHindi ? 'प्रमाणित पद्धति' : 'Standardized Step'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
