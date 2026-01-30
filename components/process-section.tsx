'use client';

import { ClipboardList, LayoutTemplate, Printer, CheckCircle } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Share Your Requirement',
        description: 'Tell us the product type, quantity, and branding needs.',
        icon: ClipboardList
    },
    {
        number: '02',
        title: 'Design, Pricing & Print Approval',
        description: 'We share print layouts, material details, pricing and payment terms for your approval before production.',
        icon: LayoutTemplate
    },
    {
        number: '03',
        title: 'Print & Deliver',
        description: 'On-demand printing and delivery with minimal waste.',
        icon: Printer
    }
];

export function ProcessSection() {
    return (
        <section className="py-12 md:py-20 bg-white relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#2E7D32] font-semibold tracking-wider text-sm uppercase block mb-3">Workflow</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">How It Works</h2>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-14 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-[#E8E8E3] to-transparent z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-28 h-28 rounded-full bg-white border-4 border-[#2E7D32]/10 flex items-center justify-center mb-8 shadow-lg shadow-green-900/5 group hover:scale-110 transition-transform duration-300">
                                <step.icon size={32} className="text-[#2E7D32]" />
                                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-bold text-base">
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">{step.title}</h3>
                            <p className="text-[#4B4B4B] max-w-xs leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
