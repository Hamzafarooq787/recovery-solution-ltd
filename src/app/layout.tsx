import type { Metadata } from 'next'
import './globals.css'
import FloatingActions from '@/components/FloatingActions'

const BASE_URL = 'https://recoverysolutionltd.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Recovery Solution Ltd | 24/7 Vehicle Recovery London',
    template: '%s | Recovery Solution Ltd',
  },
  description:
    '24/7 vehicle recovery, breakdown assistance, roadside support and vehicle transportation across SW16 and Greater London. Call +44 7865 459551 anytime.',
  keywords: [
    'vehicle recovery London',
    'breakdown assistance London',
    'roadside recovery SW16',
    '24/7 towing London',
    'car recovery South London',
  ],
  authors: [{ name: 'Recovery Solution Ltd' }],
  creator: 'Recovery Solution Ltd',
  publisher: 'Recovery Solution Ltd',

  // ── Favicon / icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/site-icon.webp', type: 'image/webp' },
    ],
    apple: [
      { url: '/site-icon.webp', type: 'image/webp' },
    ],
    shortcut: '/site-icon.webp',
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Recovery Solution Ltd',
    title: 'Recovery Solution Ltd | 24/7 Vehicle Recovery London',
    description:
      '24/7 vehicle recovery, breakdown assistance, roadside support and vehicle transportation across SW16 and Greater London.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Recovery Solution Ltd – 24/7 Vehicle Recovery London',
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Solution Ltd | 24/7 Vehicle Recovery London',
    description:
      '24/7 vehicle recovery, breakdown assistance, and roadside support across SW16 and Greater London.',
    images: ['/og-image.webp'],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}
