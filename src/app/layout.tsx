// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import FloatingActions from '@/components/FloatingActions'

export const metadata: Metadata = {
  title: 'Recovery Solution Ltd | Fast & Reliable Vehicle Recovery London',
  description: '24/7 Vehicle Recovery, Breakdown Assistance, Roadside Support in SW16 London. Call +44 7865 459551',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}