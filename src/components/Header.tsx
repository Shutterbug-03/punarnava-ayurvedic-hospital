'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Clock, MapPin, Globe, Menu, X, CalendarCheck } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const { language, setLanguage, toggleLanguage, t, isHindi } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: isHindi ? 'परिचय' : 'About', href: '#about' },
    { label: t.nav.ksharsutra, href: '#ksharsutra' },
    { label: t.nav.panchakarma, href: '#panchakarma' },
    { label: t.nav.therapies, href: '#therapies' },
    { label: t.nav.doctors, href: '#doctors' },
    { label: t.nav.facilities, href: '#facilities' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Clinical Utility Bar */}
      <div className="bg-[#092119] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#C59138]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Location & Timings */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#FAF7F2]/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C59138]" />
              <span className="hidden sm:inline">{t.topbar.location}</span>
              <span className="sm:hidden">Kanpur, UP</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#FAF7F2]/60">
              |
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C59138]" />
              <span>{t.topbar.timings}</span>
            </span>
          </div>

          {/* Phone & Language Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918009708080"
              className="inline-flex items-center gap-1.5 font-medium text-[#FAF7F2] hover:text-[#C59138] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59138]" />
              <span className="font-semibold">+91-8009708080</span>
            </a>

            {/* Language Switcher Badge */}
            <div className="inline-flex items-center bg-[#134533] border border-[#C59138]/30 rounded-full p-0.5 text-[11px]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#C59138] text-[#092119] font-bold shadow-xs'
                    : 'text-[#FAF7F2]/70 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  language === 'hi'
                    ? 'bg-[#C59138] text-[#092119] font-bold shadow-xs'
                    : 'text-[#FAF7F2]/70 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2] border-b border-[#E8E1D3] shadow-md py-2.5'
            : 'bg-[#FAF7F2] border-b border-[#E8E1D3] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-white p-1 border border-[#E8E1D3] shadow-xs flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Punarnava Ayurvedic Hospital Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0D3325] leading-tight flex items-center gap-1.5">
                <span>{isHindi ? 'पुनर्नवा' : 'PUNARNAVA'}</span>
                <span className="text-[#C59138] font-normal text-sm font-sans">
                  {isHindi ? 'हॉस्पिटल' : 'HOSPITAL'}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#4B6358] tracking-wider uppercase font-medium">
                {isHindi ? 'पंचकर्म एवं क्षारसूत्र केंद्र · कानपुर' : 'Panchakarma & Ksharsutra Centre · Kanpur'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs font-semibold text-[#14241E] hover:text-[#0D3325] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C59138] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D3325] hover:bg-[#134533] text-white rounded-xl text-xs font-medium tracking-wide shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#C59138]" />
              <span>{t.nav.bookBtn}</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-2.5 py-1.5 bg-[#0D3325] text-white rounded-lg text-[11px] font-medium"
            >
              {isHindi ? 'परामर्श' : 'Book'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0D3325] rounded-lg hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#FAF7F2] border-t border-[#E8E1D3] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#14241E] border-b border-[#E8E1D3]/50"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 bg-[#0D3325] text-white rounded-xl text-xs font-medium flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#C59138]" />
                {t.nav.bookBtn}
              </button>
              <a
                href="tel:+918009708080"
                className="w-full py-2 border border-[#0D3325] text-[#0D3325] rounded-xl text-xs font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C59138]" />
                Call +91-8009708080
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
