'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Target, Globe, Sprout, ShieldCheck } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { FooterSection } from '@/components/footer-section';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Vision() {
    const handleWhatsApp = () => window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');

    return (
        <main className="bg-white min-h-screen text-[#1A1A1A]">
            <Navigation />

            {/* Very Minimal Vision Page */}
            <div className="pt-24 pb-10 md:pt-32 md:pb-16 container max-w-4xl mx-auto px-6 space-y-12 md:space-y-16">

                {/* Title Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
                    <div className="space-y-6 flex-1">
                        <div className="flex items-center gap-2 text-[#2E7D32]">
                            <Leaf size={20} />
                            <span className="text-[10px] uppercase font-black tracking-[0.2em]">The Future is Sustainable</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]" style={{ fontFamily: 'Georgia, serif' }}>
                            Redefining the <br />
                            <span className="text-[#2E7D32] italic text-6xl md:text-8xl">Soul of Packaging.</span>
                        </h1>
                    </div>

                    <div className="w-full lg:w-96 aspect-square relative rounded-[40px] overflow-hidden shadow-xl border-8 border-[#F5F5F0]">
                        <Image
                            src="/vision-minimal.png"
                            alt="Minimal Sustainable Packaging"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* The Core Message */}
                <ScrollReveal>
                    <section className="space-y-12 py-8">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B2B] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                            "To become a global leader in sustainable packaging, enabling brands to choose earth-first solutions without compromise."
                        </h2>
                        <div className="space-y-6 max-w-3xl">
                            <p className="text-xl text-[#6B6B6B] leading-loose font-light">
                                We believe that high-quality commerce and environmental responsibility should go hand in hand.
                                Our focus is on creating a circular economy where every package is an opportunity to reduce waste and protect our natural world.
                            </p>
                            <p className="text-lg text-[#2E7D32] leading-loose font-medium">
                                Our vision is built around helping businesses transition to sustainable packaging without compromising quality, branding, or efficiency.
                            </p>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Minimal Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
                    <ScrollReveal delay={0}>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-[#2E7D32] mb-2">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Global Impact</h3>
                            <p className="text-[#6B6B6B] font-light leading-relaxed">
                                Reducing logistics emissions by serving brands worldwide through a localized, zero-waste manufacturing network.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-[#2E7D32] mb-2">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">2030 Neutrality</h3>
                            <p className="text-[#6B6B6B] font-light leading-relaxed">
                                Working towards full transition to renewable energy and 100% sustainable sourcing for all our printing and packaging materials.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-[#2E7D32] mb-2">
                                <Leaf size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Nature-Safe Tech</h3>
                            <p className="text-[#6B6B6B] font-light leading-relaxed">
                                Investing in organic alternatives and biodegradable coatings that safely return to the earth.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F5F5F0] flex items-center justify-center text-[#2E7D32] mb-2">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Ethical Sourcing</h3>
                            <p className="text-[#6B6B6B] font-light leading-relaxed">
                                Working to ensure 100% of our wood fibers come from responsibly managed forests (FSC) to protect biodiversity.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Minimal CTA */}
                <ScrollReveal>
                    <div className="pt-12 md:pt-16 border-t border-[#E8E8E3]">
                        <div className="bg-[#F9FAF5] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-3 text-center md:text-left">
                                <h3 className="text-3xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>Ready to partner?</h3>
                                <p className="text-[#6B6B6B] font-light">Let's discuss your brand's sustainable future.</p>
                            </div>
                            <button
                                onClick={handleWhatsApp}
                                className="px-8 h-14 md:h-12 bg-[#2E7D32] text-white rounded-xl font-bold text-lg hover:bg-[#25632a] transition-all"
                            >
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

            </div>

            <ScrollReveal>
                <FooterSection />
            </ScrollReveal>
        </main>
    );
}
