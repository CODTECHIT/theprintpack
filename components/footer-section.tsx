'use client'

import { MessageCircle, Phone, MapPin, Leaf } from 'lucide-react'
import Link from 'next/link'

const services = [
  { name: 'Paper Bags', href: '/services#kraft-paper-bags' },
  { name: 'Packaging Boxes', href: '/services#packaging-boxes' },
  { name: 'Napkins', href: '/services#custom-napkins' },
  { name: 'Mailer Boxes', href: '/services#mailer-boxes' },
  { name: 'Mailer Bags', href: '/services#mailer-bags' },
]

export function FooterSection() {
  return (
    <footer className="relative bg-[#1A3C1C] text-white pt-16 md:pt-24 pb-12 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7CB342]/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-8 pb-12 md:pb-20">

          {/* Brand & Mission - Wider span */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm border border-white/10 shadow-inner">
                <Leaf size={32} className="text-[#7CB342]" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  The Print Pack
                </h3>
                <p className="text-[#7CB342] text-[10px] uppercase font-bold tracking-[0.3em] leading-none">
                  Eco-Conscious Packaging
                </p>
              </div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed max-w-sm font-light">
              Pioneering the transition to sustainable packaging in Hyderabad. We combine premium printing with 100% biodegradable materials.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services." className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-[#7CB342] hover:border-[#7CB342] transition-all duration-300 group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="tel:7674062263" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-[#7CB342] hover:border-[#7CB342] transition-all duration-300 group">
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8 lg:ml-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#7CB342]">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Our Vision', href: '/vision' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-base font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Range */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#7CB342]">Product Range</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/60 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-base font-medium">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#7CB342]">Hyderabad Office</h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#7CB342]/20 transition-colors">
                  <MapPin size={20} className="text-[#7CB342]" />
                </div>
                <div>
                  <p className="text-white/80 font-medium">Headquarters</p>
                  <p className="text-sm text-[#6B6B6B]">Kondapur, Telangana</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#7CB342]/20 transition-colors">
                  <Phone size={20} className="text-[#7CB342]" />
                </div>
                <div>
                  <p className="text-white/80 font-medium">Direct Support</p>
                  <p className="text-white/50 text-sm leading-relaxed mt-1">+91 7674062263</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/40 text-sm font-medium">
              © {new Date().getFullYear()} The Print Pack Company. All rights reserved.
            </div>

            <div className="flex items-center gap-10">
              <Link href="/privacy-policy" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

