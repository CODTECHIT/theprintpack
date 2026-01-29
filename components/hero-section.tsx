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
    <section className="relative overflow-hidden pt-20 pb-10 md:pt-28 md:pb-12 px-4" style={{ background: 'linear-gradient(to bottom, #F5F5F0, var(--background), rgba(232, 232, 227, 0.2))' }}>
      {/* Decorative leaf elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden md:block absolute top-20 right-10 pointer-events-none"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ color: '#2E7D32' }}>
          <path fill="currentColor" d="M100 10 Q150 50 180 100 Q150 120 100 150 Q50 120 20 100 Q50 50 100 10" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="hidden md:block absolute bottom-0 left-5 pointer-events-none"
      >
        <svg width="300" height="300" viewBox="0 0 200 200" style={{ color: '#2E7D32' }}>
          <path fill="currentColor" d="M100 10 Q150 50 180 100 Q150 120 100 150 Q50 120 20 100 Q50 50 100 10" opacity="0.5" />
        </svg>
      </motion.div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start">
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-[1.85rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-2 md:px-0 flex flex-col items-center md:items-start"
                style={{ color: '#2B2B2B' }}
              >
                <span className="block mb-1 sm:mb-0 md:text-nowrap">Sustainable Packaging.</span>
                <span className="text-[#2E7D32] block md:text-nowrap">Printed for Your Brand.</span>
                <span className="block mt-6 md:mt-4 text-xl sm:text-2xl font-serif italic" style={{ fontFamily: 'Georgia, serif' }}>
                  <span style={{ color: '#2B2B2B' }}>—</span> <span className="text-[#2E7D32]">The Print Pack</span>
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 px-4 md:px-0"
                style={{ color: '#6B6B6B' }}
              >
                Eco-friendly print-on-demand packaging solutions crafted in Hyderabad. Replace plastic with beautiful, sustainable materials.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start w-full md:w-auto">
              <a href="https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full h-12 px-6 text-white rounded-lg text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg" style={{ backgroundColor: '#2E7D32' }}>
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:7674062263" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full h-12 px-6 border-2 rounded-lg text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-transparent" style={{ borderColor: '#2E7D32', color: '#2E7D32' }}>
                  <Phone size={20} />
                  Call Us
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-packaging.jpg"
              alt="Eco-friendly packaging solutions with sustainable materials"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t"
          style={{ borderColor: '#E8E8E3' }}
        >
          <div className="text-center space-y-2">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#2E7D32' }}>100%</p>
            <p className="text-sm md:text-base" style={{ color: '#6B6B6B' }}>Eco Materials</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#7CB342' }}>Custom</p>
            <p className="text-sm md:text-base" style={{ color: '#6B6B6B' }}>Printing</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#A47551' }}>Fast</p>
            <p className="text-sm md:text-base" style={{ color: '#6B6B6B' }}>Turnaround</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
