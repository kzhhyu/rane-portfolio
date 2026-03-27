'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault()
      scrollToTop()
    }
  }

  // Handle hash navigation when page loads
  useEffect(() => {
    if (window.location.hash && pathname === '/') {
      const sectionId = window.location.hash.slice(1)
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }, [pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 backdrop-blur-md border-b"
      style={{
        background: 'rgba(250, 249, 253, 0.8)',
        borderColor: 'var(--border)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Link href="/" onClick={handleLogoClick} className="no-underline">
        <span className="font-display text-2xl" style={{ color: 'var(--text-primary)' }}>
          KL<span style={{ color: 'var(--text-accent)' }}></span>
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {['About', 'Projects', 'Contact'].map(link => {
          const sectionId = link.toLowerCase()
          return (
            <li key={link}>
              <Link
                href={isHomePage ? `#${sectionId}` : `/#${sectionId}`}
                className="text-sm tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer"
                style={{ color: 'var(--text-muted)' }}
                scroll={false} // Prevent Next.js from automatically scrolling
              >
                {link}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}