'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MessageCircle, Phone, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917674062263';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#2E7D32] hover:opacity-80 transition-opacity">
          The Print Pack
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[#2B2B2B] hover:text-[#2E7D32] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#2B2B2B] hover:text-[#2E7D32] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium text-[#2B2B2B] hover:text-[#2E7D32] transition-colors">
            Services
          </Link>
          <Link href="/vision" className="text-sm font-medium text-[#2B2B2B] hover:text-[#2E7D32] transition-colors">
            Our Vision
          </Link>
          <Link href="/contact" className="text-sm font-medium text-[#2B2B2B] hover:text-[#2E7D32] transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={handleWhatsApp}
            className="bg-[#2E7D32] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#25632a] transition-colors"
          >
            WhatsApp
          </button>
          <button
            onClick={handleCall}
            className="bg-transparent text-[#2E7D32] px-6 py-2 rounded-lg border-2 border-[#2E7D32] text-sm font-semibold hover:bg-[#2E7D32]/5 transition-colors"
          >
            Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#2B2B2B] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-6 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#2B2B2B] hover:text-[#2E7D32]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#2B2B2B] hover:text-[#2E7D32]"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#2B2B2B] hover:text-[#2E7D32]"
            >
              Services
            </Link>
            <Link
              href="/vision"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#2B2B2B] hover:text-[#2E7D32]"
            >
              Our Vision
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#2B2B2B] hover:text-[#2E7D32]"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <button
              onClick={() => { handleWhatsApp(); setIsOpen(false); }}
              className="w-full bg-[#2E7D32] text-white py-3 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
            <button
              onClick={() => { handleCall(); setIsOpen(false); }}
              className="w-full bg-transparent text-[#2E7D32] border-2 border-[#2E7D32] py-3 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
