'use client';

import { Phone, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        emailOrPhone: '',
        productType: '',
        estimatedQuantity: ''
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Quote Request from Website*

Name: ${formData.name}
Company: ${formData.companyName}
Contact: ${formData.emailOrPhone}
Product: ${formData.productType}
Quantity: ${formData.estimatedQuantity}`;

        window.open(`https://wa.me/917674062263?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="quote" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4">Get a Custom Packaging Quote</h2>
                    <p className="text-[#6B6B6B]">No spam. B2B enquiries only.</p>
                </div>

                <div className="bg-[#F9F9F4] p-6 md:p-12 rounded-[32px] shadow-xl border border-[#E8E8E3]">
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B4B4B] ml-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-[#E0E0D0] focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all outline-none"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B4B4B] ml-1">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Brand / Company"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-[#E0E0D0] focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all outline-none"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#4B4B4B] ml-1">Email / Phone</label>
                            <input
                                type="text"
                                placeholder="how can we reach you?"
                                className="w-full px-6 py-4 rounded-xl bg-white border border-[#E0E0D0] focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all outline-none"
                                value={formData.emailOrPhone}
                                onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B4B4B] ml-1">Product Type</label>
                                <select
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-[#E0E0D0] focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all outline-none appearance-none"
                                    value={formData.productType}
                                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                                    required
                                >
                                    <option value="" disabled>Select Product</option>
                                    <option value="Paper Bags">Paper Bags</option>
                                    <option value="Pouches">Stand-Up Pouches</option>
                                    <option value="Napkins">Paper Napkins</option>
                                    <option value="Mailer Bags">Mailer Bags</option>
                                    <option value="Corrugated Boxes">Cardboard / Corrugated Boxes</option>
                                    <option value="Other">Other / Custom</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B4B4B] ml-1">Estimated Quantity</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 500, 1000, 5000"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-[#E0E0D0] focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all outline-none"
                                    value={formData.estimatedQuantity}
                                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#2E7D32] text-white font-bold py-5 rounded-xl hover:bg-[#25632a] hover:shadow-lg transition-all duration-300 active:scale-[0.99] mt-4 flex items-center justify-center gap-2"
                        >
                            <Send size={20} />
                            Request Quote
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
