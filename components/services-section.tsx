'use client'

import Image from 'next/image'
import { Leaf, MessageCircle, Check } from 'lucide-react'

const services = [
  {
    title: 'Paper Carry Bags',
    description: 'Custom printed paper bags made using eco-friendly kraft paper to carry your brand identity offline.',
    image: '/paper-bags.jpg',
    useCase: 'Ideal for retail stores, restaurants, cafés, and boutiques.',
    features: [
      'Available in multiple sizes & handle options',
      'Custom logo printing available',
      'MOQ: Starts from low quantities'
    ]
  },
  {
    title: 'Paper Stand-Up Pouches',
    description: 'Eco-friendly stand-up pouches that enhance shelf presence while supporting sustainable packaging goals.',
    image: '/paper-standup-pouch-new.png',
    useCase: 'Perfect for food brands, dry goods, snacks, coffee, and specialty products.',
    features: [
      'Suitable for retail & D2C packaging',
      'Custom branding & print options available',
      'MOQ: Starts from low quantities'
    ]
  },
  {
    title: 'Paper Napkins',
    description: 'Branded paper napkins that reinforce your brand while maintaining hygiene and sustainability standards.',
    image: '/eco-napkins.jpg',
    useCase: 'Designed for restaurants, cafés, events, and corporate use.',
    features: [
      'Single-color or multi-color logo printing',
      'Food-grade, eco-friendly paper',
      'MOQ: Starts from bulk-friendly quantities'
    ]
  },
  {
    title: 'Mailer Bags',
    description: 'Eco-friendly mailer bags that replace plastic while delivering a clean, branded unboxing experience.',
    image: '/mailer-bags.jpg',
    useCase: 'Ideal for e-commerce, D2C brands, and online retailers.',
    features: [
      'Lightweight and durable for shipping',
      'Custom logo printing available',
      'MOQ: Starts from low quantities'
    ]
  },
  {
    title: 'Cardboard / Corrugated Boxes',
    description: 'Strong, recyclable corrugated boxes designed to protect products and elevate brand presentation.',
    image: '/packaging-boxes.jpg',
    useCase: 'Built for e-commerce shipping, retail packaging, and logistics.',
    features: [
      'Multiple sizes and box styles available',
      'Custom branding and printing options',
      'MOQ: Based on box size and specifications'
    ]
  },
]

export function ServicesSection() {
  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Hello! I am interested in getting a quote for ${serviceName}.`)
    window.open(`https://wa.me/917674062263?text=${message}`, '_blank')
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F9F9F4] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A47551]/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#2E7D32]/10 text-[#2E7D32] shadow-sm">
            <Leaf size={18} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Our Products</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Our Packaging <span className="text-[#2E7D32]">Products</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white rounded-[24px] overflow-hidden border border-[#E8E8E3] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-medium text-[#2E7D32] mb-3">{service.useCase}</p>
                <p className="text-[#6B6B6B] leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#4B4B4B]">
                      <div className="mt-0.5 p-1 bg-[#2E7D32]/10 rounded-full text-[#2E7D32] flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button
                    onClick={() => handleWhatsApp(service.title)}
                    className="w-full py-3 bg-white border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Get Custom Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#quote" className="inline-flex items-center gap-2 text-[#2E7D32] font-bold hover:underline text-lg">
            Get Custom Pricing for Your Products →
          </a>
        </div>

      </div>
    </section>
  )
}


