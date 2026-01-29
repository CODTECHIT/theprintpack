'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Award, Zap, Heart, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { AboutSection } from "@/components/about-section";
import { FooterSection } from '@/components/footer-section';

export default function About() {
  const handleWhatsApp = () => window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');
  const handleCall = () => window.location.href = 'tel:+917674062263';

  return (
    <main className="bg-[#F5F5F0] min-h-screen text-[#2B2B2B]">
      <Navigation />

      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
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

          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-light">
            We are more than just a packaging company. We are partners in your brand's journey toward a greener, more responsible future.
          </p>
        </div>
      </section>

      {/* Preserve "Our Story" section (imported component) */}
      <AboutSection />

      {/* Enhanced Core Values Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B]" style={{ fontFamily: 'Georgia, serif' }}>
              Our Core <span className="text-[#2E7D32]">Values</span>
            </h2>
            <div className="w-24 h-1 bg-[#2E7D32]/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf size={32} />,
                title: "Sustainability",
                desc: "100% eco-friendly materials and carbon-conscious processes.",
                bg: "bg-[#2E7D32]/5",
                color: "text-[#2E7D32]"
              },
              {
                icon: <Award size={32} />,
                title: "Quality",
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
              <div key={i} className="group p-10 rounded-[40px] border border-[#E8E8E3] hover:border-[#2E7D32]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2E7D32]/5 hover:-translate-y-2">
                <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Features Grid */}
      <section className="py-24 md:py-32 bg-[#F9F9F4]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-serif leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Why Brands <span className="text-[#2E7D32]">Trust Us</span>
                </h2>
                <p className="text-[#6B6B6B] text-lg font-light leading-relaxed">
                  We bridge the gap between aesthetics and environmental responsibility. Our Hyderabad-based facility is equipped to handle custom requirements with precision.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck className="text-[#2E7D32]" />, title: "Quality Guaranteed", desc: "Rigorous quality checks for every single order." },
                  { icon: <TrendingUp className="text-[#7CB342]" />, title: "Scalable Orders", desc: "Flexible MOQs for startups and massive capacity for enterprises." },
                  { icon: <Users className="text-[#A47551]" />, title: "Design Support", desc: "Our experts help you optimize your brand for eco-materials." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                      <p className="text-[#6B6B6B] font-light">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-[#2E7D32]/10 rounded-[48px] rotate-3 blur-sm -z-10 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative h-[650px] w-full rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image
                  src="/hero-packaging.jpg"
                  alt="Quality packaging craftsmanship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#2E7D32] z-10 text-white">
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
              Book an Order
            </button>
            <button
              onClick={handleCall}
              className="px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Call Our Office
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
