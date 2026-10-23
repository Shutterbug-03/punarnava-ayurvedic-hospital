'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, Phone, Clock, User, CheckCircle2, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultDepartment = '',
}: ConsultationModalProps) {
  const { t, isHindi } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState(defaultDepartment || t.bookingModal.deptOptions[0]);
  const [shift, setShift] = useState('morning');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Direct WhatsApp booking message
    const msg = `*Free Consultation Request - Punarnava Ayurvedic Hospital*%0A` +
      `*Patient Name:* ${encodeURIComponent(name)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Ailment/Department:* ${encodeURIComponent(department)}%0A` +
      `*Preferred Shift:* ${encodeURIComponent(shift === 'morning' ? 'Morning (9:30 AM - 2:00 PM)' : 'Evening (5:30 PM - 8:00 PM)')}%0A` +
      `*Date:* ${encodeURIComponent(date || 'Earliest Available')}%0A` +
      `*Notes:* ${encodeURIComponent(notes || 'None')}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/918009708080?text=${msg}`, '_blank');
    }, 1200);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello Punarnava Ayurvedic Hospital, I would like to book a Free OPD Consultation for ${name || 'myself'}. Phone: ${phone || 'Please call me'}. Department: ${department}.`
    );
    window.open(`https://wa.me/918009708080?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn cursor-pointer"
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-[#FAF7F2] border border-[#E8E1D3] rounded-2xl shadow-2xl overflow-hidden animate-scaleUp cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#0D3325] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-start justify-between border-b border-[#C59138]/30 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#C59138]/20 text-[#E8BC6E] border border-[#C59138]/40 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8BC6E] animate-pulse"></span>
              {t.topbar.freeConsultation}
            </div>
            <h3 className="text-lg sm:text-xl font-serif tracking-tight text-[#FAF7F2]">
              {t.bookingModal.title}
            </h3>
            <p className="text-xs text-[#FAF7F2]/80 mt-1 max-w-sm">
              {t.bookingModal.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-[#144835] mx-auto mb-4 animate-bounce" />
              <h4 className="text-xl font-serif text-[#0D3325] font-semibold mb-2">
                {t.bookingModal.confirmationTitle}
              </h4>
              <p className="text-sm text-[#4B6358] max-w-md mx-auto mb-6">
                {t.bookingModal.confirmationDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+918009708080"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0D3325] text-white rounded-xl text-sm font-medium hover:bg-[#134533] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call OPD: +91-8009708080
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 border border-[#E8E1D3] text-[#14241E] rounded-xl text-sm font-medium hover:bg-[#F4EFE6] transition-colors"
                >
                  {t.bookingModal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#14241E] mb-1">
                  {t.bookingModal.nameLabel} <span className="text-[#A8482A]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#799186] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isHindi ? "उदा. रमेश कुमार" : "e.g. Ramesh Kumar"}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E8E1D3] rounded-xl text-base sm:text-sm text-[#14241E] focus:outline-none focus:border-[#C59138] focus:ring-1 focus:ring-[#C59138]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#14241E] mb-1">
                  {t.bookingModal.phoneLabel} <span className="text-[#A8482A]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#799186] absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E8E1D3] rounded-xl text-base sm:text-sm text-[#14241E] focus:outline-none focus:border-[#C59138] focus:ring-1 focus:ring-[#C59138]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#14241E] mb-1">
                  {t.bookingModal.deptLabel}
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E8E1D3] rounded-xl text-sm text-[#14241E] focus:outline-none focus:border-[#C59138]"
                >
                  {t.bookingModal.deptOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#14241E] mb-1">
                    {t.bookingModal.dateLabel}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#799186] absolute left-3 top-3" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-[#E8E1D3] rounded-xl text-sm text-[#14241E] focus:outline-none focus:border-[#C59138]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#14241E] mb-1">
                    {t.bookingModal.timeLabel}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#799186] absolute left-3 top-3" />
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-[#E8E1D3] rounded-xl text-sm text-[#14241E] focus:outline-none focus:border-[#C59138]"
                    >
                      <option value="morning">Morning (9:30 AM - 2:00 PM)</option>
                      <option value="evening">Evening (5:30 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#14241E] mb-1">
                  {t.bookingModal.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    isHindi
                      ? "समस्या कितने समय से है? कोई पूर्व ऑपरेशन या दवा?"
                      : "How long have you had symptoms? Any prior surgeries?"
                  }
                  className="w-full px-3 py-2 bg-white border border-[#E8E1D3] rounded-xl text-sm text-[#14241E] focus:outline-none focus:border-[#C59138]"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0D3325] text-white font-medium rounded-xl text-sm hover:bg-[#134533] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C59138]" />
                  {t.bookingModal.submitBtn}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-2.5 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1B8040] font-medium rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-[#25D366]/30"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  {t.bookingModal.whatsappBtn}
                </button>
              </div>

              <p className="text-[11px] text-[#799186] text-center mt-2">
                🔒 {isHindi ? "आपकी जानकारी 100% गोपनीय रखी जाती है।" : "Your personal & clinical data is 100% confidential."}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
