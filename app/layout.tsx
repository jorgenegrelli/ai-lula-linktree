import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Cia da Barba - Links | Barbearia Curitiba',
  description: 'Melhor barbearia por assinatura do Portão, Curitiba. Agende seu horário ou assine nossos planos. +300 membros ativos.',
  keywords: 'barbearia curitiba, corte masculino, barba, assinatura, portão, cia da barba',
  authors: [{ name: 'Cia da Barba' }],
  creator: 'Cia da Barba',
  publisher: 'Cia da Barba',
  openGraph: {
    title: 'Cia da Barba - Links | Barbearia Curitiba',
    description: 'Melhor barbearia por assinatura do Portão, Curitiba. Agende seu horário ou assine nossos planos.',
    url: 'https://ciadabarba.com/links',
    siteName: 'Cia da Barba',
    images: [
      {
        url: '/og/links.png',
        width: 1200,
        height: 630,
        alt: 'Cia da Barba - Links',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cia da Barba - Links',
    description: 'Melhor barbearia por assinatura do Portão, Curitiba.',
    images: ['/og/links.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
