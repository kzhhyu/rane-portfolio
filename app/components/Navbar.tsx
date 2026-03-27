'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    if (isHomePage) {
      // If on home page, just scroll to the section
      scrollToSection(sectionId)
    } else {
      // If on another page, navigate to home page first, then scroll
      window.location.href = `/#${sectionId}`
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
    // If not on home page, let Link handle navigation
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 backdrop-blur-md border-b"
      style={{
        background: 'rgba(250, 249, 253, 0.8)',
        borderColor: 'var(--border)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        onClick={handleLogoClick}
        className="no-underline"
      >
        <span className="font-display text-2xl" style={{ color: 'var(--text-primary)' }}>
          KL<span style={{ color: 'var(--text-accent)' }}></span>
        </span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {['About', 'Projects', 'Contact'].map(link => {
          const sectionId = link.toLowerCase()
          return (
            <li key={link}>
              <a
                href={isHomePage ? `#${sectionId}` : `/#${sectionId}`}
                onClick={(e) => handleNavClick(e, sectionId)}
                className="text-sm tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}