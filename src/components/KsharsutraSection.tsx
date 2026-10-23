'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, AlertCircle, Sparkle, ArrowRight, Activity, Clock, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

interface KsharsutraSectionProps {
  onOpenConsultation: () => void;
}

export default function KsharsutraSection({ onOpenConsultation }: KsharsutraSectionProps) {
  const { t, isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'piles' | 'fistula' | 'fissure'>('all');

  const conditionCards = [
    {
      id: 'piles',
      title: isHindi ? 'बवासीर (Piles / Hemorrhoids)' : 'Piles / Hemorrhoids (Arsha)',
      tag: isHindi ? 'ग्रेड 1 से 4 बवासीर' : 'Grade 1 to 4 Piles',
      desc: isHindi
        ? 'आंतरिक एवं बाह्य मस्सों का बिना चीरा लगाए सूखकर स्वतः गिर जाना। शून्य रक्तस्त्राव एवं तुरंत राहत।'
        : 'Gradual aseptic necrosis and spontaneous shedding of hemorrhoidal mass without scalpel incisions or heavy bleeding.',
      image: '/img/piles.jpg',
      points: isHindi
        ? ['बिना चीरफाड़ मस्सों का शमन', 'उसी दिन सामान्य रूप से चलना-फिरना', 'लोकल एनेस्थीसिया में सुरक्षित']
        : ['Natural shedding without open wounds', 'Walk home same day (Day-care)', 'Safe under local anaesthesia'],
      badge: '98% Cure Rate',
    },
    {
      id: 'fistula',
      title: isHindi ? 'भगंदर (Anal Fistula)' : 'Anal Fistula (Bhagandara)',
      tag: isHindi ? 'जटिल भगंदर का पक्का इलाज' : 'Complex & Recurrent Fistula',
      desc: isHindi
        ? 'जटिल एवं बार-बार होने वाले भगंदर के पूरे मार्ग का क्रमिक छेदन और प्राकृतिक रोपण। रिकरेंस 2% से भी कम।'
        : 'Chemical cutting and simultaneous granulation tissue healing of high and complex fistulous tracts. <2% recurrence.',
      image: '/img/fistula.jpg',
      points: isHindi
        ? ['गुदा स्फिंक्टर मांसपेशियों को 0% क्षति', 'फेल हुई सर्जरी के बाद भी सफल', 'जटिल ट्रैक का संपूर्ण निष्कासन']
        : ['100% Sphincter preservation (no leakage)', 'Proven effective after failed surgeries', 'Complete deep tract granulation'],
      badge: '<2% Recurrence',
    },
    {
      id: 'fissure',
      title: isHindi ? 'फिशर (Anal Fissure)' : 'Anal Fissure (Parikartika)',
      tag: isHindi ? 'असहनीय दर्द से तुरंत राहत' : 'Acute & Chronic Fissure',
      desc: isHindi
        ? 'शौच के समय होने वाले असहनीय दर्द व जलन से तुरंत मुक्ति। गुदा द्वार की ऐंठन समाप्त करने वाला प्राकृतिक उपचार।'
        : 'Immediate relief from agonizing burning pain and spasm. Promotes rapid mucosal healing without sphincterotomy.',
      image: '/img/fissure.jpg',
      points: isHindi
        ? ['शौच के समय जलन व दर्द का अंत', 'प्राकृतिक औषधीय तेलों से रोपण', 'स्फिंक्टरोटॉमी सर्जरी की जरूरत नहीं']
        : ['Instant spasm & burning pain relief', 'Herbal mucosal healing & lubrication', 'Avoids conventional sphincterotomy cuts'],
      badge: 'Rapid Relief',
    },
  ];

  const filteredCards = activeTab === 'all' ? conditionCards : conditionCards.filter((c) => c.id === activeTab);

  return (
    <section
      id="ksharsutra"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D3] relative overflow-hidden"
    >
      {/* Decorative concentric background motif */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #0D3325 15%, transparent 16%, transparent 35%, #0D3325 36%, transparent 37%)',
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
                <Sparkle size={18} className="text-[#A8482A] fill-[#A8482A]" />
              </motion.div>
            </div>
            <div className="px-4 py-2 rounded-full border border-[#e3e8f0] flex items-center justify-center bg-white shadow-xs">
              <span className="text-sm font-semibold text-[#0D3325]">
                {t.ksharsutraSection.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#092119] tracking-tight leading-[1.2] mb-5">
            {t.ksharsutraSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B6358] leading-relaxed max-w-2xl">
            {t.ksharsutraSection.subtitle}
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: isHindi ? 'सभी विकार' : 'All Anorectal Care' },
              { id: 'piles', label: isHindi ? 'बवासीर (Piles)' : 'Piles Care' },
              { id: 'fistula', label: isHindi ? 'भगंदर (Fistula)' : 'Fistula Care' },
              { id: 'fissure', label: isHindi ? 'फिशर (Fissure)' : 'Fissure Care' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0D3325] text-white shadow-md scale-105'
                    : 'bg-white border border-[#E8E1D3] text-[#14241E] hover:bg-[#FAF7F2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. What is Ksharsutra Feature Showcase Card */}
        <div className="bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8482A]/10 text-[#A8482A] text-xs font-bold tracking-wide uppercase">
                <Activity className="w-3.5 h-3.5" />
                <span>{isHindi ? '21 लेपों की वैज्ञानिक प्रक्रिया' : '21-Coat Botanical Thread Preparation'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325] leading-tight">
                {t.ksharsutraSection.whatIs}
              </h3>

              <p className="text-sm sm:text-base text-[#14241E]/90 leading-relaxed">
                {t.ksharsutraSection.whatIsDesc}
              </p>

              {/* Herb Trio Botanical Breakdown Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8E1D3]">
                  <span className="text-[10px] font-bold text-[#A8482A] uppercase tracking-wider block">11 Coats</span>
                  <div className="font-bold text-xs text-[#0D3325] mt-0.5">
                    {isHindi ? 'स्नुही क्षीर' : 'Snuhi Latex'}
                  </div>
                  <p className="text-[11px] text-[#4B6358] mt-1">Proteolytic enzymatic excision of unhealthy tissue</p>
                </div>

                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8E1D3]">
                  <span className="text-[10px] font-bold text-[#C59138] uppercase tracking-wider block">7 Coats</span>
                  <div className="font-bold text-xs text-[#0D3325] mt-0.5">
                    {isHindi ? 'अपामार्ग क्षार' : 'Apamarga Kshara'}
                  </div>
                  <p className="text-[11px] text-[#4B6358] mt-1">Natural alkaline chemical cauterization</p>
                </div>

                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8E1D3]">
                  <span className="text-[10px] font-bold text-[#134533] uppercase tracking-wider block">3 Coats</span>
                  <div className="font-bold text-xs text-[#0D3325] mt-0.5">
                    {isHindi ? 'शुद्ध हरिद्रा' : 'Pure Turmeric'}
                  </div>
                  <p className="text-[11px] text-[#4B6358] mt-1">Antiseptic wound granulation & rapid healing</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-lg bg-[#FAF7F2] group">
                <Image
                  src="/img/clinical/ksharsutra-setup.jpg"
                  alt="Standardized 21-Coat Ksharsutra Preparation"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#E8E1D3]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0D3325]">
                    <span>{isHindi ? 'पुनर्नवा इन-हाउस फार्मेसी में निर्मित' : 'Standardized In-House Minor OT Setup'}</span>
                    <span className="text-[#A8482A] font-bold">Grade-A Sterile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Master Clinical Healing Flowchart */}
        <div className="bg-[#FAF7F2] border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0D3325]/10 text-[#0D3325] mb-2">
              {isHindi ? 'शल्यकर्म प्रक्रिया प्रवाह' : 'Clinical Treatment Protocol Flowchart'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325]">
              {isHindi ? 'क्षारसूत्र उपचार एवं रोगमुक्ति चरणबद्ध प्रवाह' : 'How Ksharsutra Heals: Clinical Step-by-Step Flowchart'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B6358] mt-1.5">
              {isHindi
                ? 'आईसीएमआर द्वारा सत्यापित 4-चरणीय चिकित्सकीय पद्धति'
                : 'Scientific non-excisional protocol documented by ICMR & AIIMS clinical trials'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {[
              {
                step: '01',
                titleEn: 'Crypt & Tract Probing',
                titleHi: 'निदान एवं मार्ग परीक्षण',
                descEn: 'High-definition proctoscopy & blunt probing to map fistulous tracts or isolated hemorrhoidal pedicles without creating false channels.',
                descHi: 'प्रोक्टोस्कोपी द्वारा भगंदर अथवा बवासीर के मस्सों का सूक्ष्म परीक्षण और मूल स्रोत की सटीक पहचान।',
                badge: 'Day 0',
              },
              {
                step: '02',
                titleEn: 'Local Anaesthesia Ligation',
                titleHi: 'औषधीय सूत्र आरोपण',
                descEn: 'Medicated thread coated with Snuhi latex & Apamarga Kshara is placed through the tract under gentle, painless local anaesthesia.',
                descHi: 'लोकल एनेस्थीसिया में बिना चीरफाड़ 15 मिनट में औषधीय सूत्र का रोपण। शून्य जनरल एनेस्थीसिया जोखिम।',
                badge: 'Day 1 (15 Mins)',
              },
              {
                step: '03',
                titleEn: 'Simultaneous Cutting & Cure',
                titleHi: 'क्रमिक छेदन व रोपण',
                descEn: 'Enzymatic debridement clears chronic infection, draining pus pockets while healthy granulation forms from base upwards.',
                descHi: 'औषधीय सूत्र द्वारा अस्वस्थ ऊतकों का क्रमिक नाश और नीचे से स्वस्थ नई कोशिकाओं का प्राकृतिक निर्माण।',
                badge: 'Days 3–14',
              },
              {
                step: '04',
                titleEn: 'Permanent Closure & Continence',
                titleHi: 'स्थाई रोगमुक्ति व स्वस्थ जीवन',
                descEn: 'Thread detaches spontaneously once tract is 100% healed. Zero sphincter damage, <2% recurrence, and full bowel control.',
                descHi: 'मार्ग पूर्ण स्वस्थ होकर सूत्र स्वतः निकल जाता है। 0% स्फिंक्टर नुकसान, <2% रिकरेंस व पूर्ण नियंत्रण।',
                badge: '98%+ Cured',
              },
            ].map((st, i) => (
              <div
                key={i}
                className="bg-white border border-[#E8E1D3] rounded-2xl p-5 shadow-2xs hover:border-[#0D3325] transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#0D3325] text-[#C59138] font-serif font-bold text-xs flex items-center justify-center">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-bold text-[#A8482A] bg-[#A8482A]/10 px-2 py-0.5 rounded-full">
                      {st.badge}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#0D3325] mb-2">
                    {isHindi ? st.titleHi : st.titleEn}
                  </h4>
                  <p className="text-xs text-[#4B6358] leading-relaxed">
                    {isHindi ? st.descHi : st.descEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D3]/70 flex items-center gap-1.5 text-[11px] text-[#134533] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#134533] shrink-0" />
                  <span>{isHindi ? 'चिकित्सीय पुष्टि' : 'Clinically Verified'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Condition Procedural Flowcharts (Piles, Fistula, Fissure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Clinical Flowchart Header Diagram */}
                <div className="p-6 bg-gradient-to-br from-[#092119] via-[#0D3325] to-[#134533] text-white relative">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/20">
                      {item.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#C59138] text-[#092119]">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-serif font-bold text-[#FAF7F2] mb-3">
                    {item.title}
                  </h4>

                  {/* Visual 3-Stage Process Diagram in Card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59138] block">
                      {isHindi ? 'शल्य प्रक्रिया प्रवाह' : 'Action Mechanism Flowchart'}
                    </span>
                    <div className="space-y-1.5 text-[11px] text-[#FAF7F2]/90">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C59138]"></div>
                        <span>
                          {idx === 0
                            ? (isHindi ? '1. मस्से के मूल का रक्तप्रवाह अवरोध' : '1. Vascular base ligation')
                            : idx === 1
                            ? (isHindi ? '1. संपूर्ण भगंदर ट्रैक का सूत्रण' : '1. Full tract threading')
                            : (isHindi ? '1. स्फिंक्टर ऐंठन का शमन' : '1. Sphincter spasm relief')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8BC6E]"></div>
                        <span>
                          {idx === 0
                            ? (isHindi ? '2. क्षार द्वारा क्रमिक रोगाणुहीन सुखावट' : '2. Enzymatic tissue necrosis')
                            : idx === 1
                            ? (isHindi ? '2. आंतरिक मवाद का क्रमिक निकास' : '2. Chemical tract drainage')
                            : (isHindi ? '2. औषधीय तेल से घाव रोपण' : '2. Botanical ulcer healing')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1fc27a]"></div>
                        <span>
                          {idx === 0
                            ? (isHindi ? '3. 5-7 दिन में स्वतः पतन व मुक्ति' : '3. Spontaneous shedding (5-7d)')
                            : idx === 1
                            ? (isHindi ? '3. नीचे से स्वस्थ कोशिकाओं का निर्माण' : '3. Granulation (<2% recurrence)')
                            : (isHindi ? '3. 48 घंटे में दर्दमुक्त शौच' : '3. Painless bowel movement')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-2 border-t border-[#E8E1D3]/70 pt-4">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#14241E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#134533] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#0D3325] border border-[#E8E1D3] text-[#0D3325] hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-[#0D3325] cursor-pointer"
                >
                  <span>{isHindi ? 'विशेषज्ञ राय लें' : 'Consult Dr. Katiyar'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Clinical Comparison Table with Luxury Framing */}
        <div className="bg-white border border-[#E8E1D3] rounded-[32px] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3325]">
              {t.ksharsutraSection.comparisonTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#799186] mt-2">
              {isHindi
                ? 'आयुर्वेदिक क्षारसूत्र चिकित्सा बनाम आधुनिक एलोपैथिक चीरफाड़'
                : 'Why modern surgeons and patients prefer classical Ayurvedic Ksharsutra'}
            </p>
          </div>

          {/* Desktop Table View (sm+) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-[#0D3325]">
                  <th className="py-4 px-4 font-semibold text-[#14241E] w-1/4">
                    {isHindi ? 'चिकित्सीय पहलू' : 'Clinical Aspect'}
                  </th>
                  <th className="py-4 px-4 font-bold text-[#0D3325] bg-[#EDF4F0] rounded-t-xl w-3/8">
                    {isHindi ? 'पुनर्नवा क्षारसूत्र चिकित्सा (Ayurvedic)' : 'Punarnava Ksharsutra Therapy'}
                  </th>
                  <th className="py-4 px-4 font-semibold text-[#799186] w-3/8">
                    {isHindi ? 'साधारण चीरफाड़ सर्जरी (Allopathic)' : 'Conventional Open Surgery'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D3]">
                {t.comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#14241E]">
                      {row.parameter}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-[#0D3325] bg-[#EDF4F0]/60">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#144835] shrink-0 mt-0.5" />
                        <span>{row.ksharsutra}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-[#4B6358]">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-[#A8482A]/80 shrink-0 mt-0.5" />
                        <span>{row.modernSurgery}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards (sm:hidden) */}
          <div className="block sm:hidden space-y-3.5">
            {t.comparisonTable.map((row, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E8E1D3] rounded-2xl p-4 space-y-3"
              >
                <div className="font-bold text-xs text-[#092119] uppercase tracking-wider pb-1.5 border-b border-[#E8E1D3]">
                  {row.parameter}
                </div>

                {/* Punarnava Advantage */}
                <div className="p-3 bg-white border border-[#134533]/20 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0D3325]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#144835] shrink-0" />
                    <span>{isHindi ? 'पुनर्नवा क्षारसूत्र:' : 'Punarnava Ksharsutra:'}</span>
                  </div>
                  <p className="text-xs text-[#0D3325] font-medium pl-5 leading-snug">
                    {row.ksharsutra}
                  </p>
                </div>

                {/* Modern Surgery Drawback */}
                <div className="p-3 bg-white/70 border border-[#A8482A]/15 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#A8482A]">
                    <AlertCircle className="w-3.5 h-3.5 text-[#A8482A] shrink-0" />
                    <span>{isHindi ? 'एलोपैथिक चीरफाड़:' : 'Conventional Surgery:'}</span>
                  </div>
                  <p className="text-xs text-[#799186] pl-5 leading-snug">
                    {row.modernSurgery}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Ribbon */}
          <div className="mt-8 pt-6 border-t border-[#E8E1D3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#4B6358] text-center sm:text-left">
              <span className="font-semibold text-[#0D3325]">
                {isHindi ? 'घबराएं नहीं:' : 'Facing severe pain or bleeding?'}
              </span>{' '}
              {isHindi
                ? 'बिना चीरफाड़ के प्राकृतिक इलाज संभव है। आज ही निःशुल्क परामर्श लें।'
                : 'Get a clear second opinion from Dr. B.S. Katiyar before consenting to open surgery.'}
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-[#0D3325] hover:bg-[#134533] text-white rounded-full text-xs font-bold transition-all shadow-md hover:shadow-lg shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>{isHindi ? 'क्षारसूत्र परामर्श बुक करें' : 'Book Ksharsutra Consultation'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59138]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
