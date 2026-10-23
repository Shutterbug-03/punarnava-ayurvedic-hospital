'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, ShieldCheck, HeartPulse, Sparkle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const { t, isHindi } = useLanguage();

  const statIcons = [Award, Users, ShieldCheck, HeartPulse];

  const assuranceBadges = [
    { en: 'Ministry of AYUSH Endorsed', hi: 'आयुष मंत्रालय द्वारा प्रमाणित' },
    { en: 'Zero General Anaesthesia', hi: 'शून्य जनरल एनेस्थीसिया' },
    { en: 'Same-Day Walk-Home Recovery', hi: 'उसी दिन घर वापसी' },
    { en: '4.2★ Rated (91+ Reviews)', hi: '4.2★ गूगल रेटिंग (91+ समीक्षाएं)' },
  ];

  return (
    <section className="bg-gradient-to-b from-[#092119] to-[#0D3325] text-white py-12 px-4 sm:px-6 border-b border-[#C59138]/20 relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59138]/12 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        {/* Top Assurance Pill Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {assuranceBadges.map((badge, bIdx) => (
            <div
              key={bIdx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs text-[#FAF7F2]/90 hover:border-[#C59138]/40 transition-colors"
            >
              <CheckCircle className="w-3.5 h-3.5 text-[#C59138]" />
              <span className="font-medium">{isHindi ? badge.hi : badge.en}</span>
            </div>
          ))}
        </div>

        {/* 4 Pillars Stats Grid with Floating Glass Capsules */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.stats.map((stat, idx) => {
            const Icon = statIcons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-lg border border-white/10 hover:border-[#C59138]/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C59138]/10 border border-[#C59138]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C59138]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59138]/80 bg-[#C59138]/10 px-2 py-0.5 rounded-full border border-[#C59138]/20">
                    {idx === 0 ? 'Heritage' : idx === 1 ? 'Outcomes' : idx === 2 ? 'Clinical' : 'Safety'}
                  </span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2] tracking-tight flex items-baseline gap-1">
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white/95 mt-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#FAF7F2]/65 mt-1 leading-tight">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
