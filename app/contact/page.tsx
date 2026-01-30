'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, MapPin, Clock, Send, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { FooterSection } from '@/components/footer-section';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    companyName: '',
    emailOrPhone: '',
    productType: '',
    estimatedQuantity: ''
  });

  const handleWhatsApp = () => window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank');

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

  const handleCall = () => window.location.href = 'tel:+917674062263';

  return (
    <main className="bg-[#F5F5F0] min-h-screen text-[#2B2B2B]">
      <Navigation />

      {/* Premium Hero Section */}
      <section className="relative flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E7D32]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A47551]/10 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
            <Sparkles size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Connect With Us</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Let's Start Your <br />
            <span className="text-[#2E7D32]">Eco Journey.</span>
          </h1>

          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-light">
            Have a custom requirement or need a quote? Our team is ready to help you find the perfect sustainable solution.
          </p>
        </div>
      </section>

      {/* Contact Info Cards - Premium Grid */}
      <section className="py-10 md:py-16 lg:py-24 px-4 md:px-6 relative z-10">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp Card */}
            <ScrollReveal delay={0}>
              <div
                onClick={handleWhatsApp}
                className="group bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#E8E8E3] text-center space-y-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2E7D32]/10 hover:-translate-y-2 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-[#F0F5F0] rounded-2xl flex items-center justify-center text-[#2E7D32] mx-auto group-hover:scale-110 group-hover:bg-[#2E7D32] group-hover:text-white transition-all duration-500">
                  <MessageCircle size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">WhatsApp</h3>
                  <p className="text-[#6B6B6B] font-light text-sm">Instant messaging support for quick queries.</p>
                </div>
                <p className="text-[#2E7D32] font-bold text-xs uppercase tracking-widest pt-2">Chat Now</p>
              </div>
            </ScrollReveal>

            {/* Email Card - New */}
            <ScrollReveal delay={0.1}>
              <a
                href="mailto:Charansaireddychintakunta@gmail.com"
                className="block group bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#E8E8E3] text-center space-y-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2E7D32]/10 hover:-translate-y-2 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-[#F0F5F0] rounded-2xl flex items-center justify-center text-[#2E7D32] mx-auto group-hover:scale-110 group-hover:bg-[#2E7D32] group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-[#6B6B6B] font-light text-sm break-all">Charansaireddychintakunta@gmail.com</p>
                </div>
                <p className="text-[#2E7D32] font-bold text-xs uppercase tracking-widest pt-2">Send Mail</p>
              </a>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal delay={0.2}>
              <div
                onClick={handleCall}
                className="group bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#E8E8E3] text-center space-y-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7CB342]/10 hover:-translate-y-2 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-[#F9FAF0] rounded-2xl flex items-center justify-center text-[#7CB342] mx-auto group-hover:scale-110 group-hover:bg-[#7CB342] group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Direct Call</h3>
                  <p className="text-[#6B6B6B] font-light text-sm">(+91) 7674 062 263 <br /> Mon-Fri, 9AM-6PM</p>
                </div>
                <p className="text-[#7CB342] font-bold text-xs uppercase tracking-widest pt-2">Call Now</p>
              </div>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal delay={0.3}>
              <div className="group bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#E8E8E3] text-center space-y-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#A47551]/10 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-[#FAF5F0] rounded-2xl flex items-center justify-center text-[#A47551] mx-auto group-hover:scale-110 group-hover:bg-[#A47551] group-hover:text-white transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office</h3>
                  <p className="text-[#6B6B6B] font-light text-sm">Kondapur, Telangana <br /> India</p>
                </div>
                <p className="text-[#A47551] font-bold text-xs uppercase tracking-widest pt-2">Visit Us</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Split Form & Image Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Form Side */}
            <ScrollReveal>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                    Send us a <span className="text-[#2E7D32]">Message</span>
                  </h2>
                  <p className="text-[#6B6B6B] text-lg font-light leading-relaxed">
                    Fill out the form below and one of our packaging specialists will reach out to you within 24 hours.
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={handleFormSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider ml-4">Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-8 py-5 rounded-[24px] bg-[#F5F5F0] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider ml-4">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Brand / Company"
                        className="w-full px-8 py-5 rounded-[24px] bg-[#F5F5F0] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider ml-4">Email / Phone</label>
                    <input
                      type="text"
                      placeholder="how can we reach you?"
                      className="w-full px-8 py-5 rounded-[24px] bg-[#F5F5F0] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none"
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider ml-4">Product Type</label>
                      <select
                        className="w-full px-8 py-5 rounded-[24px] bg-[#F5F5F0] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none appearance-none cursor-pointer"
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
                      <label className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wider ml-4">Estimated Quantity</label>
                      <input
                        type="text"
                        placeholder="e.g. 500, 1000, 5000"
                        className="w-full px-8 py-5 rounded-[24px] bg-[#F5F5F0] border-none focus:ring-2 focus:ring-[#2E7D32]/20 transition-all outline-none"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-6 bg-[#2E7D32] text-white rounded-[24px] font-bold text-lg hover:bg-[#25632a] hover:shadow-2xl hover:shadow-[#2E7D32]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <Send size={20} />
                    Request Quote
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Interactive Hours Side */}
            <ScrollReveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#7CB342]/10 rounded-[48px] -rotate-2 blur-sm -z-10 group-hover:rotate-0 transition-transform duration-700" />
                <div className="bg-[#1A3C1C] rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-white space-y-12 shadow-2xl relative overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32" />

                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#7CB342]">
                      <Clock size={32} />
                    </div>
                    <h3 className="text-4xl font-serif text-white" style={{ fontFamily: 'Georgia, serif' }}>Business Hours</h3>
                    <p className="text-white font-light">Our Hyderabad office operates during these hours for consultations.</p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST', active: true },
                      { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST', active: true },
                      { day: 'Sunday', hours: 'Closed', active: false },
                    ].map((time, i) => (
                      <div key={i} className={`flex justify-between items-center p-6 rounded-2xl border transition-colors ${time.active ? 'bg-white/5 border-white/10' : 'bg-transparent border-white/10 opacity-70'}`}>
                        <span className="font-bold text-white">{time.day}</span>
                        <span className="text-white font-light text-sm">{time.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-white text-sm font-bold uppercase tracking-widest pt-4 border-t border-white/10">
                    <ShieldCheck size={18} className="text-[#7CB342]" />
                    Fast Response                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#F9F9F4]">
        <div className="container max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                Common <span className="text-[#2E7D32]">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-[#2E7D32]/20 mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'What is your minimum order quantity?', a: 'We accept both small and large orders, with flexible MOQ based on product type to support growing brands.' },
              { q: 'How long is the delivery time?', a: 'Standard turnaround is 10-15 business days. Express shipping is available for urgent marketing events.' },
              { q: 'Can you do custom branding?', a: 'Absolutely! Custom high-resolution printing with eco-safe inks is our core specialty.' },
              { q: 'Are all materials certified eco-friendly?', a: 'Yes, we only source fibers from responsibly managed forests (FSC) and use 100% biodegradable materials.' },
              { q: 'Do you offer production samples?', a: 'We provide digital proofs for all orders and physical samples for large-scale custom productions.' },
              { q: 'What payment methods do you accept?', a: 'We offer secure bank transfers, UPI, and major business credit/debit facility options.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] border border-[#E8E8E3] space-y-4 hover:border-[#2E7D32]/20 transition-all duration-300 shadow-sm hover:shadow-md h-full">
                  <h4 className="text-xl font-bold flex items-start gap-3">
                    <span className="text-[#2E7D32] mt-1 italic font-serif">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-[#6B6B6B] leading-relaxed font-light pl-8 border-l border-[#F0F0E8]">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Brand Final CTA */}
      <ScrollReveal>
        <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-[#2E7D32] z-10 text-white">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -mr-64 -mt-64 z-0" />

          <div className="container max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                Ready for a <br />
                <span className="text-[#7CB342]">Sustainable Switch?</span>
              </h2>
              <p className="text-white/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Transitioning to eco-packaging is easier than you think. Let's build a greener future for your brand together.
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
                Speak to Us
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
