'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, AlertCircle, Phone, Sparkles } from 'lucide-react';

interface KsharsutraSectionProps {
  onOpenConsultation: () => void;
}

export default function KsharsutraSection({ onOpenConsultation }: KsharsutraSectionProps) {
  const { t, isHindi } = useLanguage();

  const conditionCards = [
    {
      title: isHindi ? "बवासीर (Piles / Hemorrhoids)" : "Piles / Hemorrhoids (Arsha)",
      desc: isHindi
        ? "आंतरिक एवं बाह्य मस्सों का बिना चीरा लगाए सूखकर स्वतः गिर जाना। शून्य रक्तस्त्राव एवं तुरंत राहत।"
        : "Gradual aseptic necrosis and spontaneous shedding of hemorrhoidal mass without scalpel incisions or heavy bleeding.",
      image: "/img/piles.jpg",
      tag: isHindi ? "ग्रेड 1 से 4 बवासीर" : "Grade 1 to 4 Piles",
    },
    {
      title: isHindi ? "भगंदर (Anal Fistula)" : "Anal Fistula (Bhagandara)",
      desc: isHindi
        ? "जटिल एवं बार-बार होने वाले भगंदर के पूरे मार्ग का क्रमिक छेदन और प्राकृतिक रोपण। रिकरेंस 2% से भी कम।"
        : "Chemical cutting and simultaneous granulation tissue healing of high and complex fistulous tracts. <2% recurrence.",
      image: "/img/fistula.jpg",
      tag: isHindi ? "जटिल भगंदर का पक्का इलाज" : "Complex & Recurrent Fistula",
    },
    {
      title: isHindi ? "फिशर (Anal Fissure)" : "Anal Fissure (Parikartika)",
      desc: isHindi
        ? "शौच के समय होने वाले असहनीय दर्द व जलन से तुरंत मुक्ति। गुदा द्वार की ऐंठन समाप्त करने वाला प्राकृतिक उपचार।"
        : "Immediate relief from agonizing burning pain and spasm. Promotes rapid mucosal healing without sphincterotomy.",
      image: "/img/fissure.jpg",
      tag: isHindi ? "असहनीय दर्द से तुरंत राहत" : "Acute & Chronic Fissure",
    },
  ];

  return (
    <section id="ksharsutra" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{t.ksharsutraSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {t.ksharsutraSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {t.ksharsutraSection.subtitle}
          </p>
        </div>

        {/* What is Ksharsutra Feature Box */}
        <div className="bg-[#F4EFE6] border border-[#E8E1D3] rounded-2xl p-6 sm:p-8 mb-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#C59138] uppercase tracking-wider">
                {isHindi ? "प्राचीन शल्य विज्ञान" : "Ancient Ayurvedic Surgical Science"}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3325]">
                {t.ksharsutraSection.whatIs}
              </h3>
              <p className="text-sm sm:text-base text-[#14241E] leading-relaxed">
                {t.ksharsutraSection.whatIsDesc}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#4B6358] font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#144835]"></span>
                  {isHindi ? "स्नुही क्षीर (Euphorbia Latex)" : "Snuhi Latex (Proteolytic enzyme)"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#144835]"></span>
                  {isHindi ? "अपामार्ग क्षार (Alkaline Base)" : "Apamarga Kshara (Chemical debridement)"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#144835]"></span>
                  {isHindi ? "शुद्ध हरिद्रा (Pure Turmeric)" : "Haridra (Antiseptic healing)"}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-[#E8E1D3] shadow-md bg-white">
                <Image
                  src="/img/kshar_sutra.jpg"
                  alt="Authentic Ksharsutra Thread Preparation"
                  width={500}
                  height={300}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-3 bg-white border-t border-[#E8E1D3] text-center">
                  <p className="text-xs font-semibold text-[#0D3325]">
                    {isHindi
                      ? "पुनर्नवा अस्पताल में 21 लेपों से तैयार शुद्ध औषधीय क्षारसूत्र"
                      : "Standardized 21-Coat Ksharsutra Prepared at PAH Pharmacy"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Conditions Treated */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {conditionCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-48 bg-[#F4EFE6] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0D3325]/90 text-white backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-serif font-bold text-[#0D3325] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D3] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#C59138]">
                    {isHindi ? "शून्य भर्ती · डे-केयर" : "Day-Care · Walk-in"}
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-[#0D3325] hover:text-[#C59138] transition-colors"
                  >
                    {isHindi ? "परामर्श लें →" : "Book Consult →"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Comparison Table */}
        <div className="bg-white border border-[#E8E1D3] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3325]">
              {t.ksharsutraSection.comparisonTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#799186] mt-1">
              {isHindi
                ? "आयुर्वेदिक क्षारसूत्र चिकित्सा बनाम आधुनिक एलोपैथिक चीरफाड़"
                : "Why modern surgeons and patients prefer classical Ayurvedic Ksharsutra"}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-[#0D3325]">
                  <th className="py-3 px-4 font-semibold text-[#14241E] w-1/4">
                    {isHindi ? "चिकित्सीय पहलू" : "Clinical Aspect"}
                  </th>
                  <th className="py-3 px-4 font-bold text-[#0D3325] bg-[#EDF4F0] rounded-t-lg w-3/8">
                    {isHindi ? "पुनर्नवा क्षारसूत्र चिकित्सा (Ayurvedic)" : "Punarnava Ksharsutra Therapy"}
                  </th>
                  <th className="py-3 px-4 font-semibold text-[#799186] w-3/8">
                    {isHindi ? "साधारण चीरफाड़ सर्जरी (Allopathic)" : "Conventional Open Surgery"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D3]">
                {t.comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#14241E]">
                      {row.parameter}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#0D3325] bg-[#EDF4F0]/60">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#144835] shrink-0 mt-0.5" />
                        <span>{row.ksharsutra}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[#4B6358]">
                      <div className="flex items-start gap-1.5">
                        <AlertCircle className="w-4 h-4 text-[#A8482A]/80 shrink-0 mt-0.5" />
                        <span>{row.modernSurgery}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-[#E8E1D3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#4B6358] text-center sm:text-left">
              <span className="font-semibold text-[#0D3325]">
                {isHindi ? "घबराएं नहीं:" : "Facing severe pain or bleeding?"}
              </span>{" "}
              {isHindi
                ? "बिना चीरफाड़ के प्राकृतिक इलाज संभव है। आज ही निःशुल्क परामर्श लें।"
                : "Get a clear second opinion from Dr. B.S. Katiyar before consenting to open surgery."}
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 bg-[#0D3325] hover:bg-[#134533] text-white rounded-xl text-xs font-semibold transition-all shadow-xs shrink-0 cursor-pointer"
            >
              {isHindi ? "क्षारसूत्र परामर्श बुक करें" : "Book Ksharsutra Consultation"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
