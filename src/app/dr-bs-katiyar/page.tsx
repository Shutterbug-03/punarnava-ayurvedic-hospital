import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Clock,
  Phone,
  CheckCircle2,
  CalendarCheck,
  ArrowLeft,
  MapPin,
  Stethoscope,
  Sparkle,
  GraduationCap,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dr. B.S. Katiyar — Chief Ksharsutra Surgeon & Panchakarma Specialist | Punarnava Hospital Kanpur',
  description:
    'Dr. B.S. Katiyar (MD Ayurvedic Medicine, Lucknow University, PGCKS) is Kanpur’s premier Ksharsutra surgeon with 20+ years experience treating piles, fissure, and complex fistula-in-ano.',
  alternates: {
    canonical: 'https://www.pahindia.com/dr-bs-katiyar',
  },
  openGraph: {
    title: 'Dr. B.S. Katiyar — Chief Ksharsutra Surgeon | Punarnava Ayurvedic Hospital',
    description:
      'MD Ayurvedic Medicine, PGCKS. Over 20 years of clinical excellence in Ksharsutra surgery and classical Panchakarma in Kanpur.',
    url: 'https://www.pahindia.com/dr-bs-katiyar',
    siteName: 'Punarnava Ayurvedic Hospital',
    images: [{ url: '/img/doctors/dr-bs-katiyar-avatar.jpg', width: 800, height: 800, alt: 'Dr. B.S. Katiyar' }],
    locale: 'en_IN',
    type: 'profile',
  },
};

const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.pahindia.com/dr-bs-katiyar#physician',
  name: 'Dr. B.S. Katiyar',
  honorificPrefix: 'Dr.',
  givenName: 'B.S.',
  familyName: 'Katiyar',
  jobTitle: 'Chief Physician & Senior Ksharsutra Surgeon',
  medicalSpecialty: [
    'Ayurveda',
    'Proctology',
    'Panchakarma',
    'Anorectal Surgery',
  ],
  image: 'https://www.pahindia.com/img/doctors/dr-bs-katiyar-avatar.jpg',
  telephone: '+91-9415040160',
  worksFor: {
    '@type': 'MedicalClinic',
    name: 'Punarnava Ayurvedic Hospital',
    url: 'https://www.pahindia.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '68, Lakhanpur, Vikas Nagar, Behind Lucky Restaurant, G.T. Road',
      addressLocality: 'Kanpur',
      addressRegion: 'Uttar Pradesh',
      postalCode: '208024',
      addressCountry: 'IN',
    },
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Lucknow University',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'MD in Ayurvedic Medicine',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Lucknow University',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'postgraduate certificate',
      name: 'PGCKS (Post Graduate Certificate in Ksharsutra Surgery)',
    },
  ],
  knowsAbout: [
    'Ksharsutra Surgery',
    'Anal Fistula Treatment',
    'Piles and Hemorrhoids',
    'Anal Fissure Management',
    'Nadi Pariksha (Pulse Diagnosis)',
    'Classical Panchakarma Detoxification',
  ],
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Ksharsutra Ligation for Piles, Fissure and Fistula',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Nadi Pariksha Root-Cause Diagnosis',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Classical Five-Fold Panchakarma',
    },
  ],
};

export default function DrBsKatiyarPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#14241E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#E8E1D3] py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D3325] hover:text-[#C59138] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Punarnava Hospital Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919415040160"
              className="text-xs font-bold text-[#0D3325] hidden sm:inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59138]" />
              <span>+91-9415040160</span>
            </a>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-full bg-[#0D3325] text-white text-xs font-bold hover:bg-[#134533] transition-all"
            >
              Book OPD Token
            </Link>
          </div>
        </div>
      </header>

      {/* Doctor Hero Section */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-20 border-b border-[#E8E1D3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Doctor Visual Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-xl bg-white group">
                <Image
                  src="/img/doctors/dr-bs-katiyar-avatar.jpg"
                  alt="Dr. B.S. Katiyar (MD, PGCKS) - Chief Ksharsutra Surgeon"
                  width={600}
                  height={650}
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C59138] text-[#092119] mb-2 shadow-sm">
                    Chief Physician & Surgeon
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    Dr. B.S. Katiyar
                  </h1>
                  <p className="text-xs text-[#E8BC6E] font-medium mt-1">
                    MD (Ayurvedic Medicine, Lucknow University) · PGCKS
                  </p>
                </div>
              </div>

              {/* Verified Quick Credentials */}
              <div className="bg-white border border-[#E8E1D3] rounded-2xl p-5 shadow-xs space-y-3 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D3]">
                  <span className="text-[#4B6358]">Clinical Experience:</span>
                  <span className="font-bold text-[#0D3325]">20+ Years Dedicated Practice</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D3]">
                  <span className="text-[#4B6358]">Registration Authority:</span>
                  <span className="font-bold text-[#0D3325]">UP State AYUSH Medical Council</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D3]">
                  <span className="text-[#4B6358]">Primary Hospital:</span>
                  <span className="font-bold text-[#0D3325]">Punarnava Hospital, Kanpur</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4B6358]">Consultation Languages:</span>
                  <span className="font-bold text-[#0D3325]">Hindi & English</span>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Medical Narrative & E-E-A-T */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkle className="w-3.5 h-3.5 text-[#C59138] fill-[#C59138]" />
                  <span>Senior Proctologist & Ayurvedic Physician</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#092119] tracking-tight leading-tight">
                  Two Decades of Clinical Excellence in Ksharsutra Surgery & Chronic Disease Reversal
                </h2>
                <p className="text-base text-[#4B6358] leading-relaxed mt-4">
                  Dr. B.S. Katiyar is the founder, chief physician, and lead Ksharsutra surgeon at <strong>Punarnava Ayurvedic Hospital</strong> in Kanpur, Uttar Pradesh. Holding an <strong>MD in Ayurvedic Medicine from prestigious Lucknow University</strong> along with specialized post-graduate training in Ksharsutra surgery (PGCKS), Dr. Katiyar is widely acknowledged as one of North India’s foremost authorities in non-excisional anorectal healing and classical Panchakarma.
                </p>
              </div>

              {/* Core Specializations */}
              <div className="bg-white border border-[#E8E1D3] rounded-3xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-[#C59138]" />
                  <h3 className="text-xl font-serif font-bold text-[#0D3325]">
                    Core Areas of Clinical Mastery
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#14241E]">
                  {[
                    'Ksharsutra Surgery for Grade 1–4 Piles without excision',
                    'Complex & High-Tract Anal Fistula (Bhagandara) Cure',
                    'Chronic Anal Fissure Spasm & Burning Relief',
                    'Pilonidal Sinus (Nadivrana) Simultaneous Cutting & Granulation',
                    'Authentic Nadi Pariksha (Three-Finger Radial Pulse Diagnosis)',
                    'Classical Five-Fold Panchakarma (Vamana, Virechana, Basti, Nasya)',
                    'Chronic Spine, Sciatica & Lumbar Disc Degeneration Care',
                    'Metabolic Rehabilitation for Diabetes & Liver Disorders',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#134533] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Training & Clinical Protocol */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#C59138]" />
                  <h3 className="text-xl font-serif font-bold text-[#0D3325]">
                    Academic Credentials & Institutional Heritage
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                  <p>
                    • <strong>MD (Ayurvedic Medicine)</strong> — Lucknow University, Uttar Pradesh. Focused on clinical pharmacokinetics, therapeutic herbology, and constitutional diagnostics.
                  </p>
                  <p>
                    • <strong>PGCKS (Post Graduate Certificate in Ksharsutra Surgery)</strong> — Rigorous surgical training adhering to standardized Indian Council of Medical Research (ICMR) methodologies for minimally invasive anorectal treatment.
                  </p>
                  <p>
                    • <strong>Clinical Leadership:</strong> Over 15,000+ satisfied patients treated without general anaesthesia, maintaining an exceptional documented 98% cure rate and under 2% recurrence rate.
                  </p>
                </div>
              </div>

              {/* OPD Consultation Schedule & Hospital Location */}
              <div className="bg-[#0D3325] text-white rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59138] block">
                      Direct Clinical Consultations
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#FAF7F2]">
                      Dr. Katiyar’s OPD Hours at Punarnava Hospital
                    </h3>
                  </div>
                  <Clock className="w-6 h-6 text-[#C59138]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/90">
                  <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10">
                    <span className="font-bold text-[#E8BC6E] block mb-1">Morning OPD Session:</span>
                    <span>Monday to Sunday: 9:30 AM – 2:00 PM</span>
                  </div>
                  <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10">
                    <span className="font-bold text-[#E8BC6E] block mb-1">Evening OPD Session:</span>
                    <span>Monday to Saturday: 5:30 PM – 8:00 PM</span>
                    <span className="block text-[11px] text-white/60 mt-0.5">(Sunday evening closed)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/80 pt-2 border-t border-white/15">
                  <MapPin className="w-4 h-4 text-[#C59138] shrink-0" />
                  <span>Punarnava Ayurvedic Hospital, 68, Lakhanpur, Vikas Nagar, G.T. Road, Kanpur - 208024</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="tel:+919415040160"
                    className="flex-1 py-3 rounded-full bg-[#C59138] hover:bg-[#d6a249] text-[#092119] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Dr. Katiyar: +91-9415040160</span>
                  </a>
                  <a
                    href="https://wa.me/918009708080?text=Hello%20Dr.%20Katiyar%2C%20I%20would%20like%20to%20consult%20regarding%20treatment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>WhatsApp OPD</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
