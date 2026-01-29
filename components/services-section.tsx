'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Leaf, MessageCircle } from 'lucide-react'

const services = [
  {
    title: 'Paper Bags',
    description: 'Eco-friendly kraft paper bags perfect for retail and shopping with custom branding options.',
    image: '/paper-bags.jpg',
  },
  {
    title: 'Packaging Boxes',
    description: 'Sustainable corrugated packaging boxes with custom printing for product packaging needs.',
    image: '/packaging-boxes.jpg',
  },
  {
    title: 'Napkins',
    description: 'Biodegradable napkins made from sustainable materials for restaurants and cafes.',
    image: '/eco-napkins.jpg',
  },
  {
    title: 'Mailer Boxes',
    description: 'Durable kraft mailer boxes designed for secure shipping and e-commerce packaging.',
    image: '/mailer-boxes.jpg',
  },
  {
    title: 'Mailer Bags',
    description: 'Eco-friendly mailer bags with cushioning for safe and sustainable product delivery.',
    image: '/mailer-bags.jpg',
  },
]

export function ServicesSection() {
  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Hello! I am interested in getting a quote for ${serviceName}.`)
    window.open(`https://wa.me/917674062263?text=${message}`, '_blank')
  }

  return (
    <section className="py-16 md:py-32 bg-[#F9F9F4] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A47551]/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#2E7D32]/10 text-[#2E7D32] shadow-sm">
            <Leaf size={18} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Premium Collection</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Our Eco <span className="text-[#2E7D32]">Packaging Range</span>
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#6B6B6B] leading-relaxed font-light">
            Crafting sustainable stories through premium materials and bespoke printing solutions for the conscious brand.
          </p>
        </div>

        {/* Services Grid - Dynamic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[32px] bg-white border border-[#E8E8E3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#2E7D32]/10 hover:-translate-y-2 flex flex-col
                ${index === 0 ? 'lg:col-span-8' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-4'}`}
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden shrink-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6 flex flex-col flex-grow">
                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {service.description}
                </p>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() => handleWhatsApp(service.title)}
                    className="w-full py-3 bg-[#F5F5F0] hover:bg-[#2E7D32] text-[#2E7D32] hover:text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95"
                  >
                    <MessageCircle size={18} />
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Highlights */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#E8E8E3]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Eco Materials', value: '100%', color: '#2E7D32', sub: 'Biodegradable & Recyclable' },
              { label: 'Printing Available', value: 'Custom', color: '#7CB342', sub: 'High-Precision Branding' },
              { label: 'Orders Accepted', value: 'Bulk & Small', color: '#A47551', sub: 'Scalable for Any Business' }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div
                  className="text-5xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[#2B2B2B] font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-[#6B6B6B] text-sm font-medium opacity-70">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

