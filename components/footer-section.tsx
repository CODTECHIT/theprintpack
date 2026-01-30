'use client'

import React from 'react'
import Link from 'next/link'
import { MessageCircle, Phone, Mail } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t border-[#333]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">The Print Pack Company</h3>
            <div className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              <p>Custom Eco-Friendly Packaging</p>
              <p>Hyderabad, India.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-[#A0A0A0]">
              <a href="mailto:Charansaireddychintakunta@gmail.com" className="flex items-center gap-2 hover:text-[#2E7D32] transition-colors">
                <Mail size={18} />
                <span>Charansaireddychintakunta@gmail.com</span>
              </a>
              <a href="tel:7674062263" className="flex items-center gap-2 hover:text-[#2E7D32] transition-colors">
                <Phone size={18} />
                <span>+91 76740 62263</span>
              </a>
              <a href="https://wa.me/917674062263" className="flex items-center gap-2 hover:text-[#2E7D32] transition-colors">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-[#A0A0A0]">
              <Link href="#products" className="hover:text-[#2E7D32] transition-colors">Products</Link>
              <Link href="#about" className="hover:text-[#2E7D32] transition-colors">About Us</Link>
              <Link href="#quote" className="hover:text-[#2E7D32] transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666]">
          <p>&copy; {new Date().getFullYear()} The Print Pack Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
