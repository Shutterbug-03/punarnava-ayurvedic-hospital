'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const { t, isHindi } = useLanguage();

  const icons = [Award, Users, ShieldCheck, HeartHandshake];

  return (
    <section className="bg-[#0D3325] text-white py-10 px-4 sm:px-6 border-b border-[#C59138]/20 relative overflow-hidden">
      {/* Subtle Vedic Motif Glow in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,145,56,0.12),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {t.stats.map((stat, idx) => {
            const Icon = icons[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 ${
                  idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#C59138]/40 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#C59138]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F2] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#FAF7F2]/60 mt-0.5">
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
