import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActionButton } from '@/components/floating-action-button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Custom Eco-Friendly Packaging in Hyderabad – Print-on-Demand',
  description: 'Eco-friendly custom packaging solutions in Hyderabad. Print-on-demand branded paper bags, mailer bags, pouches, napkins & corrugated boxes for restaurants, D2C and retail brands.',
  openGraph: {
    title: 'Custom Eco-Friendly Packaging in Hyderabad – Print-on-Demand',
    description: 'Eco-friendly custom packaging solutions in Hyderabad. Print-on-demand branded paper bags, mailer bags, pouches, napkins & corrugated boxes for restaurants, D2C and retail brands.',
    type: 'website',
  },
  icons: {
    icon: '/logo_cropped.png',
    shortcut: '/logo_cropped.png',
    apple: '/logo_cropped.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2E7D32',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <FloatingActionButton />
        <Analytics />
      </body>
    </html>
  )
}
