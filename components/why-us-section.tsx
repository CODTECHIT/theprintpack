'use client';

import { Recycle, Printer, Palette, Zap } from 'lucide-react';

const reasons = [
    {
        title: 'Eco-First Materials',
        description: 'We source recyclable and paper-based packaging designed to reduce plastic usage and environmental impact.',
        icon: Recycle
    },
    {
        title: 'Print-on-Demand Model',
        description: 'We print only what you need — helping you avoid excess inventory, waste, and unnecessary costs.',
        icon: Printer
    },
    {
        title: 'Custom Branding',
        description: 'Your logo, your brand colors, your identity — professionally printed across all packaging types.',
        icon: Palette
    },
    {
        title: 'Fast & Flexible',
        description: 'Local Hyderabad sourcing ensures quicker turnaround and responsive support.',
        icon: Zap
    }
];

export function WhyUsSection() {
    return (
        <section id="about" className="py-12 md:py-20 bg-[#2E7D32] text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-4 space-y-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-white/90">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why Businesses Choose The Print Pack Company</h2>
                        <p className="text-white/80 text-lg">We combine sustainability with speed and customization, giving your brand the best of all worlds.</p>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="w-12 h-12 bg-white text-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                                    <reason.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                                <p className="text-white/90 leading-relaxed font-light">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
