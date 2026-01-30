'use client';

import { ShieldCheck } from 'lucide-react';

export function TrustSection() {
    return (
        <section className="py-20 bg-[#F5F5F0] border-y border-[#E8E8E3]">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 mb-6 text-[#2E7D32] bg-[#2E7D32]/10 px-4 py-2 rounded-full">
                    <ShieldCheck size={20} />
                    <span className="font-semibold text-sm uppercase tracking-wider">Trust & Credibility</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-6 max-w-4xl mx-auto leading-tight">
                    Built for Businesses That Care About Quality & Sustainability
                </h2>

                <p className="text-lg md:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed mb-10">
                    We work closely with growing brands to deliver reliable, eco-friendly packaging without the complexity of large-scale manufacturing.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-serif italic text-xl md:text-2xl text-[#2B2B2B]/80">
                    <span>Hyderabad-based</span>
                    <span className="text-[#2E7D32]">•</span>
                    <span>B2B-focused</span>
                    <span className="text-[#2E7D32]">•</span>
                    <span>Print-on-Demand</span>
                </div>
            </div>
        </section>
    );
}
