'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { FooterSection } from '@/components/footer-section';
import { Leaf, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <main className="bg-[#F5F5F0] min-h-screen">
            <Navigation />

            <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                            <Shield size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest">Transparency</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif text-[#2B2B2B]" style={{ fontFamily: 'Georgia, serif' }}>
                            Privacy Policy
                        </h1>
                        <p className="text-[#6B6B6B] font-medium">Last Updated: January 29, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-2xl shadow-[#2E7D32]/5 border border-[#E8E8E3] prose prose-green max-w-none">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                1. Introduction
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                Welcome to The Print Pack Company. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                2. The Data We Collect
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-[#6B6B6B]">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                3. How We Use Your Data
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-[#6B6B6B]">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                4. Data Security
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold text-[#2B2B2B] flex items-center gap-3">
                                <Leaf className="text-[#2E7D32]" size={24} />
                                5. Contact Information
                            </h2>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <div className="bg-[#F9F9F4] p-6 rounded-2xl border border-[#E8E8E3]">
                                <p className="font-bold text-[#2E7D32]">The Print Pack Company</p>
                                <p className="text-sm text-[#6B6B6B]">Kondapur, Telangana</p>
                                <p className="text-sm text-[#6B6B6B]">Phone: +91 7674062263</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
