'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as const

  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 px-4" style={{ background: 'linear-gradient(to bottom, #F5F5F0, var(--background), rgba(232, 232, 227, 0.2))' }}>
      {/* Decorative leaf elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 -right-10 md:top-20 md:right-10 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]" style={{ color: '#2E7D32' }}>
          <path fill="currentColor" d="M100 10 Q150 50 180 100 Q150 120 100 150 Q50 120 20 100 Q50 50 100 10" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-5 -left-10 md:bottom-0 md:left-5 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]" style={{ color: '#2E7D32' }}>
          <path fill="currentColor" d="M100 10 Q150 50 180 100 Q150 120 100 150 Q50 120 20 100 Q50 50 100 10" opacity="0.5" />
        </svg>
      </motion.div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start max-w-full order-1 md:order-none">
            <div className="space-y-4 md:space-y-6 w-full">
              <motion.div variants={itemVariants} className="inline-flex flex-wrap justify-center md:justify-start items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 mb-2 max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse shrink-0"></span>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#2E7D32] uppercase tracking-wide text-center md:text-left leading-tight">
                  B2B | Eco-Friendly Packaging | Print-on-Demand
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight flex flex-col items-center md:items-start"
                style={{ color: '#2B2B2B' }}
              >
                <span className="block">Custom Eco-Friendly</span>
                <span className="text-[#2E7D32] block">Packaging</span>
                <span className="block mt-3 text-xl sm:text-2xl md:text-3xl font-serif italic text-center md:text-left text-[#4B4B4B]" style={{ fontFamily: 'Georgia, serif' }}>
                  Printed On-Demand for Your Brand
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 text-balance text-center md:text-left px-2 sm:px-0"
                style={{ color: '#6B6B6B' }}
              >
                We help restaurants, D2C brands, retailers, and businesses get sustainably sourced packaging with their branding — without bulk manufacturing or waste.
              </motion.p>

              <motion.ul variants={itemVariants} className="space-y-2 text-left w-fit mx-auto md:mx-0 max-w-md pl-2 sm:pl-0">
                {[
                  "Eco-friendly materials",
                  "Custom logo printing",
                  "Print-on-demand (no overstock)",
                  "Hyderabad-based supply & support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#4B4B4B] text-sm sm:text-base">
                    <span className="text-[#2E7D32] font-bold mt-0.5">✔</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start w-full md:w-auto">
              <a href="#quote" className="w-full sm:w-auto">
                <Button className="w-full h-14 md:h-12 px-8 text-white rounded-xl text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95" style={{ backgroundColor: '#2E7D32' }}>
                  Request a Quote
                </Button>
              </a>
              <a href="https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full h-14 md:h-12 px-8 border-2 rounded-xl text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#2E7D32]/5 hover:scale-[1.02] active:scale-95 bg-transparent" style={{ borderColor: '#2E7D32', color: '#2E7D32' }}>
                  <MessageCircle size={20} />
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-[280px] sm:h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group order-none md:order-1"
          >
            <Image
              src="/hero-packaging.jpg"
              alt="Eco-friendly packaging solutions with sustainable materials"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Overlay tag for mobile */}
            <div className="absolute bottom-4 left-4 right-4 md:hidden flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-xs font-semibold text-[#2E7D32]">Hyderabad Based • Eco Friendly</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
