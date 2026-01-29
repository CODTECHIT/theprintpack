'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, Leaf, CheckCircle2, Package, Printer, Palette, ShieldCheck, Zap } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { FooterSection } from '@/components/footer-section';
import { ScrollReveal } from '@/components/scroll-reveal';

const services = [
  {
    title: 'Kraft Paper Bags',
    description: 'High-quality eco-friendly paper bags with custom printing. Perfect for retail, shopping, and promotional use.',
    features: ['Custom sizes available', 'High-resolution branding', '100% recyclable fibers', 'Reinforced handles'],
    image: '/paper-bags.jpg',
    color: '#2E7D32'
  },
  {
    title: 'Packaging Boxes',
    description: 'Durable kraft paper boxes ideal for product packaging, shipping, and storage. Customizable for any brand.',
    features: ['Structural design', 'Heavy-duty protection', 'Eco-safe inks', 'Bulk scalability'],
    image: '/packaging-boxes.jpg',
    color: '#7CB342'
  },
  {
    title: 'Mailer Boxes',
    description: 'Sustainable shipping boxes for e-commerce and logistics. Strong, reliable, and environmentally responsible.',
    features: ['E-flute corrugated', 'Self-locking design', 'Custom exterior print', 'Cost-effective bulk'],
    image: '/mailer-boxes.jpg',
    color: '#A47551'
  },
  {
    title: 'Mailer Bags',
    description: 'Eco-friendly bubble mailers for safe product shipping. Combine protection with sustainability.',
    features: ['Padded cushioning', 'Water-resistant spray', 'Tear-proof edges', 'Self-seal strip'],
    image: '/mailer-bags.jpg',
    color: '#2E7D32'
  },
  {
    title: 'Custom Napkins',
    description: 'Biodegradable napkins perfect for restaurants, cafes, and food businesses. Custom printing available.',
    features: ['Soft-touch texture', 'Soy-based inks', 'Food-grade certified', 'Multiple fold options'],
    image: '/eco-napkins.jpg',
    color: '#7CB342'
  },
  {
    title: 'Design & Printing',
    description: 'Professional design consultation and custom printing services for all packaging needs.',
    features: ['Vector optimization', 'Brand consistency', 'Proofing service', 'Creative direction'],
    image: '/about-packaging.jpg',
    color: '#A47551'
  },
];

const processSteps = [
  { step: '01', title: 'Consultation', icon: <MessageCircle size={28} />, desc: 'We discuss your specific packaging dimensions and brand vision.' },
  { step: '02', title: 'Design & Proof', icon: <Palette size={28} />, desc: 'Our team optimizes your artwork for eco-materials and provides digital proofs.' },
  { step: '03', title: 'Procurement', icon: <Package size={28} />, desc: 'We source the finest sustainable raw materials for your specific order.' },
  { step: '04', title: 'Precision Print', icon: <Printer size={28} />, desc: 'High-quality printing using modern technology and eco-friendly inks.' },
  { step: '05', title: 'Quality Review', icon: <ShieldCheck size={28} />, desc: 'Every single unit undergoes a rigorous structural and print inspection.' },
  { step: '06', title: 'Dispatch', icon: <Zap size={28} />, desc: 'Fast turnaround and reliable shipping to your doorstep.' },
];

export default function Services() {
  const handleWhatsApp = () => window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');
  const handleCall = () => window.location.href = 'tel:+917674062263';

  return (
    <main className="bg-[#F5F5F0] min-h-screen text-[#2B2B2B]">
      <Navigation />

      {/* Premium Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background Overlay */}
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
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2E7D32]/10 rounded-full blur-[120px] -ml-64 -mt-64" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A47551]/10 rounded-full blur-[120px] -mr-64 -mb-64" />

        <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
            <Leaf size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Premium Collection</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Our Eco <span className="text-[#2E7D32]">Packaging Service</span>
          </h1>

          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-light">
            Elevating your brand identity with sustainable materials and precision printing. Explore our range of custom-crafted solutions.
          </p>
        </div>
      </section>

      {/* Services Grid - More Dynamic */}
      {/* Services Grid - More Dynamic */}
      <section className="py-12 md:py-20 lg:py-32 relative z-10">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div
                  id={service.title.replace(/\s+/g, '-').toLowerCase()}
                  className="group bg-white rounded-[32px] md:rounded-[48px] overflow-hidden border border-[#E8E8E3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#2E7D32]/10 hover:-translate-y-2 h-full flex flex-col"
                >
                  {/* Image Holder */}
                  <div className="relative h-[280px] overflow-hidden shrink-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#2E7D32] shadow-lg">
                        <Package size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-10 space-y-6 md:space-y-8 flex flex-col flex-grow">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-[#2B2B2B]">{service.title}</h3>
                      <p className="text-[#6B6B6B] leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-[#F0F0E8] mt-auto">
                      <div className="flex items-center gap-2 text-[#2E7D32]">
                        <CheckCircle2 size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Key Features</span>
                      </div>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-[#6B6B6B] flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={handleWhatsApp}
                      className="w-full py-5 bg-[#F5F5F0] text-[#2E7D32] rounded-2xl font-bold border border-transparent hover:bg-[#2E7D32] hover:text-white transition-all duration-300 active:scale-95 group/btn overflow-hidden relative mt-6"
                    >
                      <span className="relative z-10">Get Custom Quote</span>
                      <div className="absolute inset-0 bg-[#2E7D32] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Process Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2E7D32]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-24">
              <h2 className="text-4xl md:text-6xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                Our Precision <span className="text-[#2E7D32]">Process</span>
              </h2>
              <p className="text-[#6B6B6B] max-w-2xl mx-auto text-lg font-light leading-relaxed">
                From the initial idea to final delivery, we maintain the highest standards of eco-friendly manufacturing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {processSteps.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative group">
                  {/* Step Number Background */}
                  <div className="absolute -top-12 -left-4 text-8xl font-black text-[#F5F5F0] -z-10 transition-colors duration-500 group-hover:text-[#2E7D32]/5">
                    {item.step}
                  </div>

                  <div className="space-y-6 pt-10">
                    <div className="w-16 h-16 bg-[#F9F9F4] rounded-2xl flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-md border border-[#E8E8E3]">
                      {item.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-[#6B6B6B] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <ScrollReveal>
        <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-[#2E7D32] z-10 text-white">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -mr-64 -mt-64 z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-32 -mb-32 z-0" />

          <div className="container max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                Launch Your Brand <br />
                <span className="text-[#7CB342]">Responsibly.</span>
              </h2>
              <p className="text-white/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Let's create something beautiful together. Every sustainable choice you make counts toward a greener tomorrow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleWhatsApp}
                className="px-12 py-5 bg-white text-[#2E7D32] rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircle size={22} />
                Book an Order
              </button>
              <button
                onClick={handleCall}
                className="px-12 py-5 bg-transparent text-white border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Phone size={22} />
                Call Specialist
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
