import React from 'react';
import type { Metadata } from 'next';
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
  HeartHandshake,
  Sparkle,
  GraduationCap,
  Baby,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dr. Smita Katiyar — Ayurvedic Gynaecologist & Infertility Specialist | Punarnava Hospital Kanpur',
  description:
    'Dr. Smita Katiyar (MD, B.SC., BAMS) is Kanpur’s celebrated Ayurvedic gynaecologist specializing in natural infertility treatment, PCOS/PCOD reversal, and Uttara Basti therapies.',
  alternates: {
    canonical: 'https://www.pahindia.com/dr-smita-katiyar',
  },
  openGraph: {
    title: 'Dr. Smita Katiyar — Ayurvedic Gynaecology & Infertility Specialist | Punarnava Hospital',
    description:
      'MD, B.SC., BAMS with 18+ years dedicated clinical practice in natural women’s health, Ayurvedic fertility, and hormonal balance in Kanpur.',
    url: 'https://www.pahindia.com/dr-smita-katiyar',
    siteName: 'Punarnava Ayurvedic Hospital',
    images: [{ url: '/punarnava-hospital-logo.png', width: 800, height: 800, alt: 'Dr. Smita Katiyar' }],
    locale: 'en_IN',
    type: 'profile',
  },
};

const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.pahindia.com/dr-smita-katiyar#physician',
  name: 'Dr. Smita Katiyar',
  honorificPrefix: 'Dr.',
  givenName: 'Smita',
  familyName: 'Katiyar',
  jobTitle: 'Senior Consultant — Ayurvedic Gynaecology & Infertility',
  medicalSpecialty: [
    'Ayurveda',
    'Gynecology',
    'Reproductive Medicine',
    'Panchakarma',
  ],
  telephone: '+91-8009708080',
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
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'MD in Ayurvedic Medicine',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'BAMS (Bachelor of Ayurvedic Medicine & Surgery)',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'B.Sc.',
    },
  ],
  knowsAbout: [
    'Ayurvedic Infertility Treatment',
    'Uttara Basti Intra-Uterine Therapy',
    'PCOS and PCOD Reversal',
    'Fallopian Tube Blockage Recanalization',
    'Hormonal Imbalance & Menopause Care',
    'Garbhasanskar & Prenatal Ayurveda',
  ],
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Uttara Basti for Tubal Recanalization & Endometrial Health',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'PCOS / PCOD Holistic Ayurvedic Reversal',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Classical Women Panchakarma Therapy',
    },
  ],
};

export default function DrSmitaKatiyarPage() {
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
              href="tel:+918009708080"
              className="text-xs font-bold text-[#0D3325] hidden sm:inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59138]" />
              <span>+91-8009708080</span>
            </a>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-full bg-[#0D3325] text-white text-xs font-bold hover:bg-[#134533] transition-all"
            >
              Book Consultation
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
              <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-xl bg-gradient-to-tr from-[#092119] via-[#0D3325] to-[#134533] text-white p-8 flex flex-col items-center justify-center min-h-[420px] text-center">
                <div className="w-28 h-28 rounded-full border-3 border-[#C59138] flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-lg mb-4">
                  <span className="font-serif font-bold text-4xl text-[#C59138]">SK</span>
                  <span className="text-[10px] text-white/80 uppercase tracking-widest mt-1">Vaidya</span>
                </div>
                <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C59138] text-[#092119] mb-2 shadow-sm">
                  Co-Founder & Senior Consultant
                </span>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                  Dr. Smita Katiyar
                </h1>
                <p className="text-xs text-[#E8BC6E] font-medium mt-1">
                  MD, B.SC., BAMS (Ayurvedic Gynaecology & Infertility)
                </p>
                <div className="mt-6 pt-4 border-t border-white/15 w-full flex items-center justify-around text-xs text-white/80">
                  <div>
                    <span className="font-bold text-white block">18+ Years</span>
                    <span className="text-[10px] text-white/60">Experience</span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div>
                    <span className="font-bold text-white block">Kanpur, UP</span>
                    <span className="text-[10px] text-white/60">Hospital Wing</span>
                  </div>
                </div>
              </div>

              {/* Verified Quick Credentials */}
              <div className="bg-white border border-[#E8E1D3] rounded-2xl p-5 shadow-xs space-y-3 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D3]">
                  <span className="text-[#4B6358]">Clinical Specialty:</span>
                  <span className="font-bold text-[#0D3325]">Ayurvedic Gynaecology & Fertility</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D3]">
                  <span className="text-[#4B6358]">Qualifications:</span>
                  <span className="font-bold text-[#0D3325]">MD, B.SC., BAMS</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D3]">
                  <span className="text-[#4B6358]">Registration Authority:</span>
                  <span className="font-bold text-[#0D3325]">UP State AYUSH Medical Council</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4B6358]">Special Therapy:</span>
                  <span className="font-bold text-[#0D3325]">Uttara Basti Intra-Uterine Therapy</span>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Medical Narrative & E-E-A-T */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#134533]/10 text-[#0D3325] text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkle className="w-3.5 h-3.5 text-[#C59138] fill-[#C59138]" />
                  <span>Women’s Health & Reproductive Ayurveda</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#092119] tracking-tight leading-tight">
                  Natural Fertility Restoration & Holistic Hormonal Healing Without Synthetic Hormones
                </h2>
                <p className="text-base text-[#4B6358] leading-relaxed mt-4">
                  Dr. Smita Katiyar is the co-founder and head of the Women’s Health and Reproductive Medicine division at <strong>Punarnava Ayurvedic Hospital</strong>, Kanpur. With over <strong>18 years of clinical practice</strong> combining classical Ayurveda (Stree Roga & Prasuti Tantra) with modern diagnostic clarity, Dr. Katiyar has assisted hundreds of couples in overcoming complex infertility issues and chronic endocrine disorders.
                </p>
              </div>

              {/* Core Specializations */}
              <div className="bg-white border border-[#E8E1D3] rounded-3xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Baby className="w-5 h-5 text-[#C59138]" />
                  <h3 className="text-xl font-serif font-bold text-[#0D3325]">
                    Specialized Women’s Care Areas
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#14241E]">
                  {[
                    'Natural Infertility Treatment for Tubal Blockage & Anovulation',
                    'Specialized Uttara Basti Intra-Uterine Medicated Infusion',
                    'PCOS / PCOD Permanent Reversal & Weight Management',
                    'Endometriosis, Adenomyosis & Chronic Pelvic Pain Relief',
                    'Irregular, Delayed & Painful Menstrual Cycle Regulation',
                    'Menopausal Symptoms Management without HRT risks',
                    'Pre-Conception Detoxification (Garbhadhana Samskar)',
                    'Habitual Abortion Prevention & Uterine Strengthening',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#134533] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Methodology */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#C59138]" />
                  <h3 className="text-xl font-serif font-bold text-[#0D3325]">
                    Academic Qualifications & Treatment Methodology
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#4B6358] leading-relaxed">
                  <p>
                    • <strong>MD (Ayurvedic Medicine)</strong>, <strong>BAMS</strong>, and <strong>B.Sc.</strong> — Comprehensive multi-disciplinary education integrating biological sciences with classical Ayurvedic pharmacopoeia.
                  </p>
                  <p>
                    • <strong>Uttara Basti Specialist:</strong> Dr. Katiyar is recognized for her mastery of Uttara Basti, a precise classical procedure where sterile medicinal oils are gently infused into the uterine cavity, documented to dissolve tubal blockages and rejuvenate thin endometrial lining.
                  </p>
                  <p>
                    • <strong>Gentle Holistic Focus:</strong> Restoring the body’s natural endocrine rhythm through targeted dosha-balancing herbs, dietary modifications (Pathya Apathya), and Panchakarma without relying on aggressive synthetic hormonal therapies.
                  </p>
                </div>
              </div>

              {/* OPD Consultation Schedule & Hospital Location */}
              <div className="bg-[#0D3325] text-white rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59138] block">
                      Consult Dr. Smita Katiyar
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#FAF7F2]">
                      Women’s Health OPD Timings
                    </h3>
                  </div>
                  <Clock className="w-6 h-6 text-[#C59138]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/90">
                  <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10">
                    <span className="font-bold text-[#E8BC6E] block mb-1">Morning OPD Consultation:</span>
                    <span>Monday to Sunday: 9:30 AM – 2:00 PM</span>
                  </div>
                  <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10">
                    <span className="font-bold text-[#E8BC6E] block mb-1">Evening OPD Consultation:</span>
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
                    href="tel:+918009708080"
                    className="flex-1 py-3 rounded-full bg-[#C59138] hover:bg-[#d6a249] text-[#092119] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call OPD: +91-8009708080</span>
                  </a>
                  <a
                    href="https://wa.me/918009708080?text=Hello%20Dr.%20Smita%20Katiyar%2C%20I%20would%20like%20to%20consult%20regarding%20women%20health%20or%20infertility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>WhatsApp Consultation</span>
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
