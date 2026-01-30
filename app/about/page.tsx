'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Award, Zap, Heart, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { AboutSection } from "@/components/about-section";
import { WhyUsSection } from '@/components/why-us-section';
import { FooterSection } from '@/components/footer-section';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function About() {
  const handleWhatsApp = () => window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');
  const handleCall = () => window.location.href = 'tel:+917674062263';

  return (
    <main className="bg-[#F5F5F0] min-h-screen text-[#2B2B2B]">
      <Navigation />

      {/* Premium Hero Section */}
      <section className="relative flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Background Texture"
            fill
            className="object-cover opacity-20 mix-blend-multiply"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F0]/50 via-transparent to-[#F5F5F0]" />
        </div>

        {/* Decorative Blurred Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E7D32]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A47551]/10 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
            <Leaf size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Our Identity</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Rooted in <span className="text-[#2E7D32]">Sustainability.</span>
            <br />
            Driven by Quality.
          </h1>

          <p className="text-xl text-[#4B4B4B] max-w-3xl mx-auto leading-[1.7] font-light">
            We are more than just a packaging company. We help businesses replace plastic with eco-friendly, custom-printed packaging through a flexible print-on-demand model.
          </p>
        </div>
      </section>

      {/* Preserve "Our Story" section (imported component) */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Enhanced Core Values Section */}
      <section className="py-10 md:py-16 lg:py-24 relative overflow-hidden bg-white">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B]" style={{ fontFamily: 'Georgia, serif' }}>
                Our Core <span className="text-[#2E7D32]">Values</span>
              </h2>
              <div className="w-24 h-1 bg-[#2E7D32]/20 mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf size={32} />,
                title: "Environmental Responsibility",
                desc: "100% eco-friendly materials and carbon-conscious processes.",
                bg: "bg-[#2E7D32]/5",
                color: "text-[#2E7D32]"
              },
              {
                icon: <Award size={32} />,
                title: "Print & Material Excellence",
                desc: "Premium finishes and high-resolution printing on every batch.",
                bg: "bg-[#7CB342]/5",
                color: "text-[#7CB342]"
              },
              {
                icon: <Zap size={32} />,
                title: "Efficiency",
                desc: "Fast turnaround times to meet your brand's growth demands.",
                bg: "bg-[#A47551]/5",
                color: "text-[#A47551]"
              },
              {
                icon: <Heart size={32} />,
                title: "Partnership",
                desc: "Dedicated support and custom solutions for brands of all sizes.",
                bg: "bg-[#2E7D32]/5",
                color: "text-[#2E7D32]"
              }
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#E8E8E3] hover:border-[#2E7D32]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2E7D32]/5 hover:-translate-y-2 h-full">
                  <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-[#4B4B4B] leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Features Grid */}
      <WhyUsSection />

      {/* Premium CTA Section */}
      <ScrollReveal>
        <section className="py-10 md:py-16 lg:py-24 relative overflow-hidden bg-[#2E7D32] z-10 text-white">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -mr-64 -mt-64 z-0" />

          <div className="container max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Build a <br />
              <span className="text-[#7CB342]">Lasting Brand?</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can elevate your product presence with sustainable, custom-printed solutions that your customers will love.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={handleWhatsApp}
                className="px-10 py-5 bg-white text-[#2E7D32] rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <Leaf size={22} />
                Request a Quote
              </button>
              <button
                onClick={handleCall}
                className="px-10 py-5 bg-transparent text-white border-2 border-white/60 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Call Our Office
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FooterSection />
      </ScrollReveal>
    </main>
  );
}
