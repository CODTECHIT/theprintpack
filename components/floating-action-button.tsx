'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Leaf } from 'lucide-react'

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open('https://wa.me/917674062263?text=Hello!%20I%20need%20your%20services.', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:7674062263'
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Menu items */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-medium text-sm"
            style={{ color: '#2E7D32' }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </div>
      )}

      {isOpen && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-200 delay-75">
          <button
            onClick={handleCall}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-medium text-sm"
            style={{ color: '#2E7D32' }}
          >
            <Phone size={18} />
            Call
          </button>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        style={{ backgroundColor: '#2E7D32' }}
      >
        <div
          className={`transition-transform duration-300 absolute ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
        >
          <MessageCircle size={24} />
        </div>
        <div
          className={`transition-transform duration-300 absolute ${isOpen ? 'opacity-100 scale-100 rotate-90' : 'opacity-0 scale-0'
            }`}
        >
          <span className="text-2xl">×</span>
        </div>
      </button>
    </div>
  )
}
