import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Punarnava Ayurvedic Hospital Kanpur',
  description:
    'Terms of Service and Hospital Appointment Policies at Punarnava Ayurvedic Hospital, Kanpur.',
  alternates: {
    canonical: 'https://www.pahindia.com/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#14241E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-[#E8E1D3] rounded-[32px] p-8 sm:p-12 shadow-sm space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3325] hover:text-[#C59138] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-bold text-[#C59138] uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-[#C59138]" />
          <span>Hospital Terms & Policies</span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-[#092119]">Terms of Service</h1>
        <p className="text-xs text-[#799186]">Last Updated: October 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-[#4B6358] leading-relaxed pt-4 border-t border-[#E8E1D3]">
          <h2 className="text-lg font-serif font-bold text-[#0D3325]">1. Acceptance of Terms</h2>
          <p>
            By accessing this website (www.pahindia.com) or booking OPD appointment tokens, you accept and agree to comply with the terms and conditions outlined herein.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">2. OPD Appointments & Token Confirmation</h2>
          <p>
            Submitting an online token request reserves your priority queue position for consultation at our Kanpur clinic. Walk-in consultations are also welcomed during standard OPD hours (Morning: 9:30 AM – 2:00 PM; Evening: 5:30 PM – 8:00 PM).
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">3. Intellectual Property</h2>
          <p>
            All content, including procedural flowcharts, clinical photography, logos, educational materials, and translations, is the protected intellectual property of Punarnava Ayurvedic Hospital and Dr. B.S. Katiyar. Unauthorized reproduction or scraping is prohibited.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">4. Jurisdiction</h2>
          <p>
            Any disputes relating to clinical services or website usage shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Kanpur Nagar, Uttar Pradesh.
          </p>
        </div>
      </div>
    </main>
  );
}
