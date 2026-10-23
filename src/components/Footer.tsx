'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t, isHindi } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#092119] text-[#FAF7F2] pt-20 pb-12 border-t border-[#C59138]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-[#C59138]/50 shrink-0 flex items-center justify-center overflow-hidden shadow-xs">
                <Image
                  src="/punarnava-hospital-logo.png"
                  alt="Punarnava Ayurvedic Hospital"
                  width={46}
                  height={46}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight leading-tight">
                  {isHindi ? "पुनर्नवा आयुर्वेदिक हॉस्पिटल" : "PUNARNAVA HOSPITAL"}
                </h3>
                <p className="text-[11px] text-[#C59138] font-semibold tracking-wider uppercase">
                  {isHindi ? "पंचकर्म एवं क्षारसूत्र केंद्र · कानपुर" : "Panchakarma & Ksharsutra Centre"}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E8BC6E] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C59138] shrink-0" />
              <span>{t.footer.statutory}</span>
            </div>
          </div>

          {/* Col 2: Clinical Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#C59138] uppercase tracking-wider">
              {t.footer.departmentsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#ksharsutra" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "बवासीर (Piles) क्षारसूत्र शल्यकर्म" : "Piles / Hemorrhoids Ksharsutra"}
                </a>
              </li>
              <li>
                <a href="#ksharsutra" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "भगंदर (Fistula) स्थाई उपचार" : "Anal Fistula Non-Excisional Cure"}
                </a>
              </li>
              <li>
                <a href="#ksharsutra" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "फिशर (Anal Fissure) निवारण" : "Anal Fissure Rapid Healing"}
                </a>
              </li>
              <li>
                <a href="#panchakarma" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "सम्पूर्ण पंचकर्म विषमुक्ति (5-Stage Detox)" : "5-Stage Classical Panchakarma"}
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "जानु बस्ती (घुटनों का दर्द व आर्थराइटिस)" : "Janu Basti (Knee Joint Care)"}
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "शिरोधारा (अनिद्रा, माइग्रेन व तनाव)" : "Shirodhara (Insomnia & Stress)"}
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-[#C59138] transition-colors">
                  {isHindi ? "स्त्री रोग, पीसीओडी एवं बांझपन क्लिनिक" : "Ayurvedic Infertility & PCOS Clinic"}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-[#C59138] uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            
            <div className="space-y-3 text-xs text-[#FAF7F2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59138] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59138] shrink-0" />
                <div className="flex flex-wrap gap-2">
                  <a href="tel:+918009708080" className="hover:text-[#C59138] font-bold text-white">
                    +91-8009708080
                  </a>
                  <span>/</span>
                  <a href="tel:+919415040160" className="hover:text-[#C59138]">
                    +91-9415040160
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59138] shrink-0" />
                <a href="mailto:info@pahindia.com" className="hover:text-[#C59138]">
                  {t.footer.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C59138] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong className="text-white">{isHindi ? "प्रातः ओपीडी:" : "Morning OPD:"}</strong> 9:30 AM – 2:00 PM ({isHindi ? "सोमवार से रविवार" : "Monday to Sunday"})
                  </p>
                  <p className="mt-0.5">
                    <strong className="text-white">{isHindi ? "सायं ओपीडी:" : "Evening OPD:"}</strong> 5:30 PM – 8:00 PM ({isHindi ? "सोमवार से शनिवार" : "Monday to Saturday, Sun Evening Closed"})
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-4 rounded-2xl overflow-hidden border border-white/15 h-36 w-full shadow-inner">
              <iframe
                title="Punarnava Ayurvedic Hospital Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.8330214978655!2d80.276700613852!3d26.49332068331002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3820d01fb6b3%3A0x7e0f11e76baaa0a5!2sLucky%20Restaurant!5e0!3m2!1sen!2sin!4v1567164231334!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

        {/* Monumental Wordmark Footer Row */}
        <div className="pt-10 pb-6 flex items-center justify-center">
          <div className="text-center w-full">
            <span className="font-serif font-bold text-4xl sm:text-6xl md:text-8xl tracking-[0.18em] text-white/[0.07] uppercase block select-none">
              PUNARNAVA
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <div>
            <p>{t.footer.copyright}</p>
            <p className="text-[11px] text-[#FAF7F2]/40 mt-0.5">
              PAH India · Official Website of Punarnava Ayurvedic Hospital & Panchakarma Centre, Kanpur (PIN: 208024).
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/10 text-xs font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#C59138]" />
              <span>{isHindi ? "शीर्ष पर जाएं" : "Back to Top"}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Help Button */}
      <a
        href="https://wa.me/918009708080?text=Hello%20Punarnava%20Hospital%2C%20I%20would%20like%20to%20consult%20regarding%20treatment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
