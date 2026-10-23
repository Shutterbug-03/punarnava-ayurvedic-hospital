import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Punarnava Ayurvedic Hospital Kanpur',
  description:
    'Privacy Policy and Patient Data Confidentiality standards at Punarnava Ayurvedic Hospital, Kanpur.',
  alternates: {
    canonical: 'https://www.pahindia.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
          <ShieldCheck className="w-4 h-4 text-[#C59138]" />
          <span>Patient Data Protection</span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-[#092119]">Privacy Policy</h1>
        <p className="text-xs text-[#799186]">Last Updated: October 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-[#4B6358] leading-relaxed pt-4 border-t border-[#E8E1D3]">
          <h2 className="text-lg font-serif font-bold text-[#0D3325]">1. Overview</h2>
          <p>
            Punarnava Ayurvedic Hospital (&quot;PAH India&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to safeguarding the privacy and medical confidentiality of our patients and website visitors. This policy outlines how personal and health-related information is gathered, utilized, and secured.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">2. Information We Collect</h2>
          <p>
            When you request an appointment, submit an online consultation token, or contact us via WhatsApp or phone, we may collect your name, contact telephone number, email address, age, city, and general health condition descriptions.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">3. How Your Information is Used</h2>
          <p>
            Your information is exclusively utilized to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Schedule, confirm, and manage OPD appointments and doctor consultations.</li>
            <li>Provide personalized Ayurvedic treatment recommendations under senior physician guidance.</li>
            <li>Maintain medical records in accordance with Indian clinical healthcare regulations and AYUSH standards.</li>
          </ul>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">4. Confidentiality & Zero Third-Party Sharing</h2>
          <p>
            We strictly protect doctor-patient privilege. We never sell, rent, or trade your medical or contact details to third-party marketing companies. Data is only accessible to authorized medical personnel at Punarnava Hospital.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3325]">5. Contact Our Privacy Officer</h2>
          <p>
            For inquiries regarding patient records or privacy practices, please contact us at:
            <br />
            <strong>Punarnava Ayurvedic Hospital</strong>
            <br />
            68, Lakhanpur, Vikas Nagar, G.T. Road, Kanpur, UP - 208024
            <br />
            Email: info@pahindia.com | Phone: +91-8009708080
          </p>
        </div>
      </div>
    </main>
  );
}
