'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { TargetAudienceSection } from '@/components/target-audience-section';
import { WhyUsSection } from '@/components/why-us-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { TrustSection } from '@/components/trust-section';
import { ContactSection } from '@/components/contact-section';
import { FooterSection } from '@/components/footer-section';
import { ScrollReveal } from '@/components/scroll-reveal';


export default function Home() {
  return (
    <main className="bg-[#F5F5F0] text-[#2B2B2B]">
      <Navigation />
      <HeroSection />

      <ScrollReveal direction="up">
        <TargetAudienceSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <WhyUsSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <div id="products">
          <ServicesSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ProcessSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <TrustSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ContactSection />
      </ScrollReveal>

      <FooterSection />
    </main>
  );
}
