import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10 md:pt-24 md:pb-16" style={{ background: 'linear-gradient(to bottom, #F5F5F0, var(--background), rgba(232, 232, 227, 0.2))' }}>
      {/* Decorative leaf elements */}
      <div className="hidden md:block absolute top-20 right-10 opacity-10 md:opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ color: '#2E7D32' }}>
          <path fill="currentColor" d="M100 10 Q150 50 180 100 Q150 120 100 150 Q50 120 20 100 Q50 50 100 10" opacity="0.5" />
        </svg>
      </div>

      <div className="hidden md:block absolute bottom-0 left-5 opacity-5 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 200 200" style={{ color: '#2E7D32' }}>
          <path fill="currentColor" d="M100 10 Q150 50 180 100 Q150 120 100 150 Q50 120 20 100 Q50 50 100 10" opacity="0.5" />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#2B2B2B' }}>
                Sustainable Packaging.
                <br />
                <span style={{ color: '#2E7D32' }}>Printed for Your Brand.</span>
                <span className="block mt-3 text-2xl sm:text-3xl font-serif italic" style={{ color: '#2B2B2B' }}>
                  — <span className="text-[#2E7D32]">The Print Pack</span>
                </span>
              </h1>
              <p className="text-base sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0" style={{ color: '#6B6B6B' }}>
                Eco-friendly print-on-demand packaging solutions crafted in Hyderabad. Replace plastic with beautiful, sustainable materials.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services." target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto h-12 px-6 text-white rounded-lg text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg" style={{ backgroundColor: '#2E7D32' }}>
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:7674062263">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-6 border-2 rounded-lg text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-transparent" style={{ borderColor: '#2E7D32', color: '#2E7D32' }}>
                  <Phone size={20} />
                  Call Us
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <Image
              src="/hero-packaging.jpg"
              alt="Eco-friendly packaging solutions with sustainable materials"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-12 border-t" style={{ borderColor: '#E8E8E3' }}>
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
        </div>
      </div>
    </section>
  )
}
