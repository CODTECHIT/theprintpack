'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        brandName: '',
        needs: ''
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello! I would like to enquire via the website form:
        
Name: ${formData.fullName}
Brand: ${formData.brandName}
Needs: ${formData.needs}

Please let me know the next steps.`;

        window.open(`https://wa.me/917674062263?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+917674062263';
    };

    return (
        <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 relative overflow-hidden bg-[#F5F5F0]">
            {/* Subtle Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E7D32]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A47551]/5 rounded-full blur-[100px] -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10">
                {/* Left Side: Text and Contact Info */}
                <div className="md:w-1/2 space-y-8 md:space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-5xl md:text-6xl font-serif text-[#2B2B2B] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                            Get In Touch
                        </h2>
                        <p className="text-[#6B6B6B] text-lg max-w-md leading-relaxed">
                            Switch to sustainable packaging today. Contact our Hyderabad office for a custom quote or sample request.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Direct Call */}
                        <div
                            onClick={handleCall}
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="bg-[#F0F5F0] p-5 rounded-2xl text-[#2E7D32] group-hover:scale-110 transition-transform duration-300">
                                <Phone size={28} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-[#A47551] uppercase">
                                    Direct Call
                                </p>
                                <p className="text-2xl font-bold text-[#2B2B2B]">7674062263</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div
                            onClick={handleWhatsApp}
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="bg-[#F0F5F0] p-5 rounded-2xl text-[#2E7D32] group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle size={28} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-[#A47551] uppercase">
                                    WhatsApp
                                </p>
                                <p className="text-2xl font-bold text-[#2B2B2B]">Start a Conversation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Card */}
                <div className="md:w-1/2 w-full">
                    <div className="bg-[#F9F9F4] p-6 md:p-14 rounded-[32px] md:rounded-[48px] shadow-2xl shadow-green-900/5 border border-[#E8E8E3]">
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-8 py-6 rounded-2xl bg-[#F0F0E8] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none placeholder:text-[#A0A090] text-[#2B2B2B]"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Brand Name"
                                    className="w-full px-8 py-6 rounded-2xl bg-[#F0F0E8] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none placeholder:text-[#A0A090] text-[#2B2B2B]"
                                    value={formData.brandName}
                                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <textarea
                                    placeholder="Tell us about your needs..."
                                    rows={4}
                                    className="w-full px-8 py-6 rounded-2xl bg-[#F0F0E8] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none placeholder:text-[#A0A090] text-[#2B2B2B] resize-none"
                                    value={formData.needs}
                                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#2E7D32] text-white font-bold py-6 rounded-2xl hover:bg-[#25632a] hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 active:scale-[0.99] mt-2"
                            >
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
