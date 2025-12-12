import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Pack Católico - Transforme sua Vida Espiritual',
  description: 'E-book, Devocional, Planner Diário e Mural de Oração para católicos que buscam intimidade com Deus e organização espiritual.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'Pack Católico - Transforme sua Vida Espiritual',
    description: 'E-book, Devocional, Planner Diário e Mural de Oração para católicos que buscam intimidade com Deus.',
    images: ['/og-image.png'],
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
