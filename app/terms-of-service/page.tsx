'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { FooterSection } from '@/components/footer-section';
import { Leaf, FileText } from 'lucide-react';

export default function TermsOfService() {
    return (
        <main className="bg-[#F5F5F0] min-h-screen">
            <Navigation />

            <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                            <FileText size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest">Legal Agreement</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif text-[#2B2B2B]" style={{ fontFamily: 'Georgia, serif' }}>
                            Terms of Service
                        </h1>
                        <p className="text-[#6B6B6B] font-medium">Last Updated: January 29, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-2xl shadow-[#2E7D32]/5 border border-[#E8E8E3] prose prose-green max-w-none">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                By accessing and using the services provided by The Print Pack Company, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                2. Use of Services
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                3. Intellectual Property
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                All content, trademarks, logos, and service marks displayed on our website or through our services are the property of The Print Pack Company or their respective owners. You are not permitted to use these without our prior written consent.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                4. Custom Printing & Orders
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                When placing custom printing orders:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-[#6B6B6B]">
                                <li>You are responsible for the content and copyright of the designs you provide.</li>
                                <li>We reserve the right to refuse any order that contains offensive, illegal, or infringing content.</li>
                                <li>Final high-resolution proofs must be approved by the customer before production begins.</li>
                                <li>Production times are estimates and may vary based on order complexity and volume.</li>
                            </ul>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                5. Limitation of Liability
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                The Print Pack Company shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                6. Governing Law
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding related to your access to, or use of, the services shall be instituted in a court in Hyderabad, Telangana.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                7. Changes to Terms
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
