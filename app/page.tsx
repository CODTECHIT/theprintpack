'use client';

import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/about-section';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ContactSection } from '@/components/contact-section';
import { FooterSection } from '@/components/footer-section';
import { FloatingActionButton } from '@/components/floating-action-button';
import { ScrollReveal } from '@/components/scroll-reveal';


export default function Home() {
  return (
    <main className="bg-[#F5F5F0] text-[#2B2B2B]">
      <Navigation />
      <HeroSection />

      <ScrollReveal direction="left">
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal direction="right">
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal>
        <FooterSection />
      </ScrollReveal>

      <FloatingActionButton />
    </main>
  );
}
