'use client';

import { UtensilsCrossed, ShoppingBag, Truck, BadgePercent, Building2 } from 'lucide-react';

const audiences = [
    {
        title: 'Restaurants & Cafés',
        description: 'Branded paper bags, napkins, takeaway boxes',
        icon: UtensilsCrossed,
        color: '#2E7D32'
    },
    {
        title: 'Retail Stores',
        description: 'Custom paper carry bags and boxes',
        icon: ShoppingBag,
        color: '#A47551'
    },
    {
        title: 'D2C & E-commerce Brands',
        description: 'Mailer bags and corrugated shipping boxes',
        icon: Truck,
        color: '#7CB342'
    },
    {
        title: 'Startups & SMEs',
        description: 'Low-waste, print-on-demand packaging solutions',
        icon: BadgePercent,
        color: '#2E7D32'
    },
    {
        title: 'Corporates & Events',
        description: 'Sustainable packaging for branding and events',
        icon: Building2,
        color: '#A47551'
    }
];

export function TargetAudienceSection() {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E7D32 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-[#2E7D32] font-semibold tracking-wider text-sm uppercase block mb-3">Who It's For</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">Packaging Solutions for Growing Businesses</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {audiences.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#F9F9F4] p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E8E8E3] hover:-translate-y-1 h-full flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors duration-300 group-hover:bg-white shrink-0" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{item.title}</h3>
                            <p className="text-[#4B4B4B]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
