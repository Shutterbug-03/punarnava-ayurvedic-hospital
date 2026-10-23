'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, MessageSquareQuote, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const { t, isHindi } = useLanguage();

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C59138]" />
            <span>{t.reviewsSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3325] tracking-tight leading-tight">
            {t.reviewsSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6358] leading-relaxed">
            {t.reviewsSection.subtitle}
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E1D3] shadow-xs">
            <div className="flex text-[#C59138]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C59138]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0D3325]">4.2 out of 5.0</span>
            <span className="text-xs text-[#799186]">(91+ Google Reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E1D3] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-[#C59138]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C59138]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#144835] bg-[#EDF4F0] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[#144835]" />
                    {rev.treatment}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#14241E] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D3] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#0D3325]">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-[#799186]">
                    {rev.city}, Uttar Pradesh
                  </p>
                </div>
                <span className="text-[10px] text-[#C59138] font-medium bg-[#FAF7F2] px-2 py-1 rounded-md border border-[#E8E1D3]">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
