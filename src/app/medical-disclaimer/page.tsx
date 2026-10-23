import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Disclaimer & Regulatory Notice | Punarnava Ayurvedic Hospital',
  description:
    'Official Medical Disclaimer and Clinical Treatment Notice for Punarnava Ayurvedic Hospital, Kanpur.',
  alternates: {
    canonical: 'https://www.pahindia.com/medical-disclaimer',
  },
};

export default function MedicalDisclaimerPage() {
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

        <div className="flex items-center gap-2 text-xs font-bold text-[#A8482A] uppercase tracking-wider">
          <AlertCircle className="w-4 h-4 text-[#A8482A]" />
          <span>Clinical Regulatory Disclosure</span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-[#092119]">Medical & Clinical Disclaimer</h1>
        <p className="text-xs text-[#799186]">Last Updated: October 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-[#4B6358] leading-relaxed pt-4 border-t border-[#E8E1D3]">
          <h2 className="text-lg font-serif font-bold text-[#0D3325]">1. General Health Information</h2>
          <p>
            The content, articles, procedural descriptions, and therapeutic overviews provided on this website (www.pahindia.com) are intended solely for educational, informational, and awareness purposes regarding classical Ayurvedic healthcare and Ksharsutra surgical principles.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">2. No Replacement for In-Person Clinical Examination</h2>
          <p>
            The information on this site does not constitute formal medical diagnosis, individualized prescription, or clinical treatment plans. It must not be utilized as a substitute for direct in-person evaluation by qualified Ayurvedic doctors or registered medical practitioners.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">3. Individual Treatment Outcomes</h2>
          <p>
            Ayurveda evaluates disease according to unique individual body constitution (Prakriti), doshic vitiation (Vata, Pitta, Kapha), chronic history, and digestive strength (Agni). Consequently, recovery timelines and procedural outcomes vary between patients.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">4. Evidence-Based Ksharsutra Science</h2>
          <p>
            Ksharsutra therapy references on this website refer to classical Ayurvedic surgical principles as evaluated in extensive multicentric clinical trials by the Indian Council of Medical Research (ICMR) and the Ministry of AYUSH, Government of India. At Punarnava Hospital, all surgical and purificatory procedures are performed strictly by formally qualified physicians (MD, PGCKS).
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">5. Medical Emergencies</h2>
          <p>
            If you are experiencing severe acute medical distress, uncontrollable rectal bleeding, acute abdominal trauma, or high fever, please seek immediate emergency care at the nearest equipped multi-specialty trauma centre.
          </p>
        </div>
      </div>
    </main>
  );
}
