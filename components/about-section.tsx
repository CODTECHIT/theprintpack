import Image from 'next/image'
import { Leaf } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-10 md:py-12 lg:py-20 overflow-hidden relative" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Decorative leaf backgrounds */}
      <div className="absolute top-10 -right-20 opacity-5 pointer-events-none animate-leaf">
        <Leaf size={400} strokeWidth={0.5} style={{ color: '#2E7D32' }} />
      </div>
      <div className="absolute -bottom-20 -left-20 opacity-[0.03] pointer-events-none animate-leaf" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
        <Leaf size={600} strokeWidth={0.5} style={{ color: '#2E7D32' }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="grid grid-cols-4 gap-20 p-20 transform -rotate-12">
          {[...Array(12)].map((_, i) => (
            <Leaf key={i} size={80} strokeWidth={1} style={{ color: '#2E7D32' }} />
          ))}
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative group">
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#2E7D32]/20 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#A47551]/20 hidden md:block" />

            <div className="relative h-[450px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-left-12 duration-500">
              <Image
                src="/about-packaging.jpg"
                alt="The Print Pack Company eco-friendly packaging solutions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stat/Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center text-[#2E7D32]">
                <Leaf size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#2B2B2B' }}>100%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">Eco-Friendly</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Leaf size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight" style={{ color: '#2B2B2B' }}>
                Replacing plastic <span className="text-[#2E7D32]">with purpose</span>, one print at a time.
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-[#6B6B6B]">
                <p>
                  The Print Pack Company was founded in Hyderabad with a simple goal: to make sustainable packaging accessible to brands of all sizes.
                </p>
                <p>
                  We combine modern printing technology with traditional materials like kraft paper to deliver results that are as beautiful as they are responsible.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: 'Sustainable', desc: '100% eco-materials', color: '#2E7D32' },
                { title: 'Premium', desc: 'Expert printing', color: '#7CB342' },
                { title: 'Trusted', desc: 'Quality assured', color: '#A47551' },
                { title: 'Custom', desc: 'Design approach', color: '#2E7D32' }
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-[#E8E8E3] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2" style={{ color: '#2B2B2B' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: value.color }} />
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
