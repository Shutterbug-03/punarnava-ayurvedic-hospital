'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  CalendarCheck,
  ChevronDown,
  Sparkles,
  Activity,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Award,
  HelpCircle,
  MessageSquareQuote,
  Building2,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const { language, setLanguage, isHindi } = useLanguage();

  // Scroll visibility states ("fixed down hide up show")
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll direction detection with threshold
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentScrollY - lastScrollY.current;

          // Always show at top of page
          if (currentScrollY < 30) {
            setIsVisible(true);
            setIsScrolled(false);
          } else {
            setIsScrolled(true);

            // Hide when scrolling down significantly (>10px)
            if (delta > 8 && currentScrollY > 100) {
              setIsVisible(false);
              setActiveDropdown(null);
              setMobileMenuOpen(false);
            }
            // Show when scrolling up significantly (<-8px)
            else if (delta < -8) {
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dropdown hover timing for smooth UX
  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Curated Medical & Hospital Categories
  const treatmentCategories = [
    {
      title: isHindi ? 'क्षारसूत्र शल्यकर्म' : 'Ksharsutra Surgery',
      desc: isHindi
        ? 'बवासीर, फिशर व भगंदर का बिना चीरफाड़ 98% सफल उपचार'
        : 'Piles, Fissure & Fistula cure under local anaesthesia with 98% success',
      href: '#ksharsutra',
      badge: isHindi ? 'विशेषज्ञ' : 'Gold Standard',
      icon: ShieldCheck,
      iconColor: 'text-[#A8482A]',
      iconBg: 'bg-[#A8482A]/10',
    },
    {
      title: isHindi ? 'शास्त्रीय पंचकर्म' : 'Classical Panchakarma',
      desc: isHindi
        ? 'वमन, विरेचन, बस्ती, नस्य व रक्तमोक्षण से समग्र कायाकल्प'
        : '5-Stage deep Ayurvedic detoxification & cellular rejuvenation',
      href: '#panchakarma',
      badge: isHindi ? 'प्रामाणिक' : 'Authentic',
      icon: Activity,
      iconColor: 'text-[#134533]',
      iconBg: 'bg-[#134533]/10',
    },
    {
      title: isHindi ? 'विशिष्ट आयुर्वेदिक चिकित्सा' : 'Specialized Therapies',
      desc: isHindi
        ? 'शिरोधारा, कटी बस्ती, जानु बस्ती व पोटली स्वेदन'
        : 'Shirodhara, Kati Basti, Janu Basti for spine & joint disorders',
      href: '#therapies',
      icon: Sparkles,
      iconColor: 'text-[#C59138]',
      iconBg: 'bg-[#C59138]/10',
    },
    {
      title: isHindi ? 'दोष व लक्षण परीक्षण' : 'Dosha Symptom Checker',
      desc: isHindi
        ? 'वात, पित्त एवं कफ संतुलन का त्वरित डिजिटल विश्लेषण'
        : 'Identify your Vata, Pitta, Kapha imbalance in 60 seconds',
      href: '#dosha-checker',
      icon: HeartPulse,
      iconColor: 'text-[#285A46]',
      iconBg: 'bg-[#285A46]/10',
    },
  ];

  const hospitalCategories = [
    {
      title: isHindi ? 'हॉस्पिटल परिचय व विरासत' : 'Hospital Heritage',
      desc: isHindi
        ? '35+ वर्षों की चिकित्सीय उत्कृष्टता व विश्वस्त सेवा'
        : '35+ years of trusted clinical heritage in Kanpur & North India',
      href: '#about',
      icon: Award,
      iconColor: 'text-[#C59138]',
      iconBg: 'bg-[#C59138]/10',
    },
    {
      title: isHindi ? 'हमारे वरिष्ठ चिकित्सक' : 'Senior Specialists',
      desc: isHindi
        ? 'डॉ. बी.एस. कटियार (MD, PGCKS) एवं डॉ. स्मिता कटियार'
        : 'Led by Dr. B.S. Katiyar & Dr. Smita Katiyar with 20+ years OPD',
      href: '#doctors',
      icon: Stethoscope,
      iconColor: 'text-[#134533]',
      iconBg: 'bg-[#134533]/10',
    },
    {
      title: isHindi ? 'चिकित्सीय सुविधाएं एवं ओटी' : 'Infrastructure & Facilities',
      desc: isHindi
        ? 'आयुष मानकों के अनुसार आधुनिक ओटी व पंचकर्म थियेटर'
        : 'AYUSH-compliant sterile para-surgical OT & panchakarma suites',
      href: '#facilities',
      icon: Building2,
      iconColor: 'text-[#285A46]',
      iconBg: 'bg-[#285A46]/10',
    },
  ];

  return (
    <>
      {/* Floating Glassmorphism Pill Header Container */}
      <header
        className={`fixed top-2 sm:top-4 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-24 sm:-translate-y-28 opacity-0'
        }`}
      >
        {/* Main Glass Pill Navigation Bar */}
        <div
          ref={navRef}
          className={`pointer-events-auto w-full max-w-7xl mx-auto rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#FAF7F2]/88 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_-10px_rgba(13,51,37,0.14),0_2px_8px_rgba(0,0,0,0.04)] py-2 sm:py-2.5 px-3 sm:px-5'
              : 'bg-white/80 backdrop-blur-lg border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2.5 sm:py-3 px-3.5 sm:px-6'
          }`}
          style={{ WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Authentic Circular Logo Seal & Hospital Branding */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 outline-none"
              aria-label="Punarnava Ayurvedic Hospital Home"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#C59138] via-[#FAF7F2] to-[#134533] shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/80 shadow-2xs">
                  <Image
                    src="/punarnava-hospital-logo.png"
                    alt="Punarnava Ayurvedic Hospital Official Seal"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-serif font-bold text-base sm:text-lg text-[#0D3325] tracking-tight group-hover:text-[#134533] transition-colors">
                    {isHindi ? 'पुनर्नवा' : 'PUNARNAVA'}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#C59138] px-1.5 py-0.5 rounded-full bg-[#C59138]/10 border border-[#C59138]/20">
                    {isHindi ? 'चिकित्सालय' : 'HOSPITAL'}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-[#4B6358] font-medium tracking-wide">
                  {isHindi
                    ? 'पंचकर्म एवं क्षारसूत्र केंद्र · कानपुर'
                    : 'Panchakarma & Ksharsutra Centre'}
                </span>
              </div>
            </a>

            {/* Center: Desktop Categorized Pill Navigation with Hover Glow */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" role="navigation">
              {/* Category 1: Treatments Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('treatments')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'treatments' ? null : 'treatments')
                  }
                  aria-expanded={activeDropdown === 'treatments'}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 outline-none ${
                    activeDropdown === 'treatments'
                      ? 'bg-[#0D3325] text-white shadow-sm'
                      : 'text-[#14241E] hover:text-[#0D3325] hover:bg-[#0D3325]/6'
                  }`}
                >
                  <span>{isHindi ? 'उपचार एवं सर्जरी' : 'Treatments'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'treatments' ? 'rotate-180 text-white' : 'text-[#4B6358]'
                    }`}
                  />
                </button>

                {/* Glassmorphic Mega Menu for Treatments */}
                {activeDropdown === 'treatments' && (
                  <div
                    className="absolute top-full left-0 mt-2.5 w-84 sm:w-96 rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#E8E1D3] shadow-[0_20px_50px_rgba(13,51,37,0.16)] p-2.5 z-50 animate-fadeIn"
                    style={{ WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    <div className="px-3 py-1.5 border-b border-[#E8E1D3]/50 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#0D3325] uppercase tracking-wider">
                        {isHindi ? 'विशेषज्ञ चिकित्सा पद्धतियां' : 'Clinical Specialties'}
                      </span>
                      <span className="text-[10px] text-[#C59138] font-medium">AYUSH Approved</span>
                    </div>

                    <div className="space-y-1">
                      {treatmentCategories.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={i}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F2] border border-transparent hover:border-[#E8E1D3]/80 transition-all duration-150"
                          >
                            <div
                              className={`w-9 h-9 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-bold text-[#14241E] group-hover:text-[#0D3325] transition-colors truncate">
                                  {item.title}
                                </h4>
                                {item.badge && (
                                  <span className="text-[9px] font-semibold text-[#A8482A] bg-[#A8482A]/10 px-1.5 py-0.2 rounded-full shrink-0">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#4B6358] line-clamp-1 mt-0.5 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Category 2: Hospital Heritage & Doctors Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('hospital')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'hospital' ? null : 'hospital')
                  }
                  aria-expanded={activeDropdown === 'hospital'}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 outline-none ${
                    activeDropdown === 'hospital'
                      ? 'bg-[#0D3325] text-white shadow-sm'
                      : 'text-[#14241E] hover:text-[#0D3325] hover:bg-[#0D3325]/6'
                  }`}
                >
                  <span>{isHindi ? 'अस्पताल परिचय' : 'About Hospital'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'hospital' ? 'rotate-180 text-white' : 'text-[#4B6358]'
                    }`}
                  />
                </button>

                {/* Glassmorphic Dropdown for Hospital */}
                {activeDropdown === 'hospital' && (
                  <div
                    className="absolute top-full left-0 mt-2.5 w-80 rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#E8E1D3] shadow-[0_20px_50px_rgba(13,51,37,0.16)] p-2.5 z-50 animate-fadeIn"
                    style={{ WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    <div className="px-3 py-1.5 border-b border-[#E8E1D3]/50 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#0D3325] uppercase tracking-wider">
                        {isHindi ? 'संस्थान एवं डॉक्टर' : 'Heritage & Team'}
                      </span>
                      <span className="text-[10px] text-[#C59138] font-medium">35+ Years</span>
                    </div>

                    <div className="space-y-1">
                      {hospitalCategories.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={i}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F2] border border-transparent hover:border-[#E8E1D3]/80 transition-all duration-150"
                          >
                            <div
                              className={`w-9 h-9 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-[#14241E] group-hover:text-[#0D3325] transition-colors truncate">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-[#4B6358] line-clamp-1 mt-0.5 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Quick Link: Facilities */}
              <a
                href="#facilities"
                className="px-3 py-1.5 text-xs font-semibold text-[#14241E] hover:text-[#0D3325] hover:bg-[#0D3325]/6 rounded-full transition-all duration-200"
              >
                {isHindi ? 'सुविधाएं' : 'Facilities'}
              </a>

              {/* Direct Quick Link: Clinical FAQ */}
              <a
                href="#faq"
                className="px-3 py-1.5 text-xs font-semibold text-[#14241E] hover:text-[#0D3325] hover:bg-[#0D3325]/6 rounded-full transition-all duration-200"
              >
                {isHindi ? 'प्रश्नोत्तरी' : 'FAQ'}
              </a>
            </nav>

            {/* Right: Phone, Bilingual Switcher & Glass Pill CTA Button */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Phone Helpline Pill */}
              <a
                href="tel:+918009708080"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0D3325] bg-[#FAF7F2] hover:bg-[#E8E1D3]/70 border border-[#E8E1D3] rounded-full transition-all shadow-2xs hover:shadow-xs group"
                title="Call OPD Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59138] group-hover:rotate-12 transition-transform" />
                <span>+91-8009708080</span>
              </a>

              {/* Language Switcher Pill */}
              <div className="inline-flex items-center bg-[#134533]/8 border border-[#134533]/15 rounded-full p-0.5 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-[#0D3325] text-white shadow-2xs'
                      : 'text-[#4B6358] hover:text-[#0D3325]'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('hi')}
                  className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                    language === 'hi'
                      ? 'bg-[#0D3325] text-white shadow-2xs'
                      : 'text-[#4B6358] hover:text-[#0D3325]'
                  }`}
                  aria-label="Switch to Hindi"
                >
                  हि
                </button>
              </div>

              {/* Primary Consultation Pill CTA */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#0D3325] via-[#134533] to-[#0D3325] text-white rounded-full text-xs font-bold tracking-wide shadow-sm hover:shadow-md hover:shadow-[#0D3325]/20 hover:-translate-y-0.5 transition-all duration-200 group active:translate-y-0"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-[#C59138] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">
                  {isHindi ? 'निःशुल्क परामर्श बुक करें' : 'Book Consultation'}
                </span>
                <span className="sm:hidden">{isHindi ? 'परामर्श' : 'Book'}</span>
              </button>

              {/* Mobile Menu Hamburger Pill */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#0D3325] bg-black/5 hover:bg-black/10 active:scale-95 rounded-full transition-all outline-none cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 text-[#0D3325]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Modal (z-[100]) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-end sm:justify-center animate-fadeIn">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-[#092119]/70 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content Surface */}
          <div
            className="relative w-full max-h-[92vh] sm:max-w-lg sm:mx-auto bg-[#FAF7F2] rounded-t-[32px] sm:rounded-[32px] border-t sm:border border-[#E8E1D3] shadow-2xl flex flex-col overflow-hidden animate-slideUp z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 bg-white border-b border-[#E8E1D3] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#C59138] to-[#134533] shrink-0">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/punarnava-hospital-logo.png"
                      alt="Punarnava Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#0D3325] leading-tight">
                    {isHindi ? 'पुनर्नवा आयुर्वेदिक हॉस्पिटल' : 'PUNARNAVA HOSPITAL'}
                  </h3>
                  <p className="text-[10px] text-[#C59138] font-semibold uppercase tracking-wider">
                    {isHindi ? 'पंचकर्म एवं क्षारसूत्र केंद्र' : 'Panchakarma & Ksharsutra'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Language Switcher in Drawer */}
                <div className="inline-flex items-center bg-[#134533]/8 border border-[#134533]/15 rounded-full p-0.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      language === 'en'
                        ? 'bg-[#0D3325] text-white shadow-2xs'
                        : 'text-[#4B6358] hover:text-[#0D3325]'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('hi')}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      language === 'hi'
                        ? 'bg-[#0D3325] text-white shadow-2xs'
                        : 'text-[#4B6358] hover:text-[#0D3325]'
                    }`}
                  >
                    हि
                  </button>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E8E1D3] text-[#14241E] hover:bg-black/5 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Contact & Emergency Action Row */}
            <div className="px-4 py-3 bg-[#FAF7F2] border-b border-[#E8E1D3] grid grid-cols-2 gap-2 shrink-0">
              <a
                href="tel:+918009708080"
                className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-[#E8E1D3] hover:border-[#0D3325] rounded-xl text-xs font-bold text-[#0D3325] shadow-2xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59138]" />
                <span>Call Helpline</span>
              </a>

              <a
                href="https://wa.me/918009708080?text=Hello%20Punarnava%20Hospital%2C%20I%20want%20to%20consult%20regarding%20treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 rounded-xl text-xs font-bold text-[#1B8040] shadow-2xs transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                <span>WhatsApp Doctor</span>
              </a>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 overscroll-contain">
              {/* Accordion Group 1: Treatments & Surgeries */}
              <div className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === 'treatments' ? null : 'treatments')
                  }
                  className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-[#0D3325] bg-white cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#A8482A]/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-[#A8482A]" />
                    </div>
                    <span>{isHindi ? 'उपचार एवं शल्यकर्म पद्धतियां' : 'Treatments & Surgeries'}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C59138] transition-transform duration-200 ${
                      mobileAccordion === 'treatments' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileAccordion === 'treatments' && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[#E8E1D3]/50 bg-[#FAF7F2]/40">
                    {treatmentCategories.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white border border-transparent hover:border-[#E8E1D3] transition-colors"
                        >
                          <div
                            className={`w-7 h-7 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#14241E] flex items-center gap-1.5">
                              <span>{item.title}</span>
                              {item.badge && (
                                <span className="text-[9px] font-semibold text-[#A8482A] bg-[#A8482A]/10 px-1.5 py-0.2 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#4B6358] line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Accordion Group 2: About Hospital & Doctors */}
              <div className="bg-white border border-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === 'hospital' ? null : 'hospital')
                  }
                  className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-[#0D3325] bg-white cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#134533]/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-[#134533]" />
                    </div>
                    <span>{isHindi ? 'अस्पताल, डॉक्टर एवं सुविधाएं' : 'About Hospital & Team'}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C59138] transition-transform duration-200 ${
                      mobileAccordion === 'hospital' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileAccordion === 'hospital' && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[#E8E1D3]/50 bg-[#FAF7F2]/40">
                    {hospitalCategories.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white border border-transparent hover:border-[#E8E1D3] transition-colors"
                        >
                          <div
                            className={`w-7 h-7 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#14241E]">
                              {item.title}
                            </div>
                            <p className="text-[11px] text-[#4B6358] line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Direct Quick Section Jump Cards */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#facilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white border border-[#E8E1D3] hover:border-[#0D3325] rounded-2xl flex flex-col justify-between transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Building2 className="w-4 h-4 text-[#C59138]" />
                    <span className="text-[10px] font-bold text-[#134533] bg-[#EDF4F0] px-1.5 py-0.2 rounded-full">
                      AYUSH OT
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#0D3325]">
                    {isHindi ? 'अस्पताल सुविधाएं' : 'OT & Facilities'}
                  </span>
                </a>

                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white border border-[#E8E1D3] hover:border-[#0D3325] rounded-2xl flex flex-col justify-between transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <HelpCircle className="w-4 h-4 text-[#C59138]" />
                    <span className="text-[10px] font-medium text-[#799186]">
                      {isHindi ? 'समाधान' : 'Questions'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#0D3325]">
                    {isHindi ? 'चिकित्सीय FAQ' : 'Clinical FAQ'}
                  </span>
                </a>
              </div>

              {/* Hospital Timings & Kanpur Location Pill */}
              <div className="p-3.5 bg-white border border-[#E8E1D3] rounded-2xl text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#0D3325] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#C59138] shrink-0" />
                  <span>68, Lakhanpur, Vikas Nagar, G.T. Road, Kanpur</span>
                </div>
                <div className="flex items-center gap-2 text-[#4B6358]">
                  <Clock className="w-3.5 h-3.5 text-[#C59138] shrink-0" />
                  <span>OPD: 9:30 AM – 2:00 PM & 5:30 PM – 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Fixed Drawer Bottom Primary CTA */}
            <div className="p-4 bg-white border-t border-[#E8E1D3] shrink-0">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#0D3325] via-[#134533] to-[#0D3325] text-white rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#C59138]" />
                <span>{isHindi ? 'निःशुल्क परामर्श टोकन बुक करें' : 'Book Free Consultation Token'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Mobile Conversion Bar (Phones only: sm:hidden) */}
      <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E8E1D3] px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] sm:hidden">
        <a
          href="tel:+918009708080"
          className="flex-1 py-2.5 px-2 bg-[#FAF7F2] border border-[#E8E1D3] active:bg-[#E8E1D3] text-[#0D3325] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          title="Call OPD Helpline"
        >
          <Phone className="w-3.5 h-3.5 text-[#C59138]" />
          <span>{isHindi ? 'कॉल करें' : 'Call OPD'}</span>
        </a>

        <a
          href="https://wa.me/918009708080?text=Hello%20Punarnava%20Hospital%2C%20I%20would%20like%20to%20consult%20regarding%20treatment"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 bg-[#25D366]/15 border border-[#25D366]/30 active:bg-[#25D366]/30 text-[#1B8040] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          title="WhatsApp Clinic"
        >
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#0D3325] to-[#134533] active:scale-98 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-transform cursor-pointer"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#C59138]" />
          <span>{isHindi ? 'परामर्श' : 'Book Visit'}</span>
        </button>
      </aside>
    </>
  );
}
