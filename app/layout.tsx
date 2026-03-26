'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferred)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Rane — UI/UX Designer</title>
        <meta name="description" content="Portfolio of Rane, a UI/UX Designer crafting minimal, intentional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="relative z-10">
          {children}
        </main>
        <footer className="relative z-10 text-center py-8 border-t text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
          <p>Designed &amp; built by <span style={{ color: 'var(--text-accent)' }}>Rane</span> · 2025</p>
        </footer>
      </body>
    </html>
  )
}