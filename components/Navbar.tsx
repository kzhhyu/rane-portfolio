'use client'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 backdrop-blur-md border-b"
      style={{
        background: theme === 'dark'
          ? 'rgba(16, 14, 26, 0.8)'
          : 'rgba(250, 249, 253, 0.8)',
        borderColor: 'var(--border)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <span className="font-display text-2xl" style={{ color: 'var(--text-primary)' }}>
        rane<span style={{ color: 'var(--text-accent)' }}>.</span>
      </span>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {['About', 'Projects', 'Contact'].map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-wide transition-colors duration-300 hover:text-accent"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-full flex items-center justify-center text-base border transition-all duration-300 hover:scale-110"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--text-muted)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--text-accent)'
          e.currentTarget.style.background = 'var(--surface)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'var(--text-muted)'
          e.currentTarget.style.background = 'var(--bg-card)'
        }}
      >
        {theme === 'dark' ? '☀' : '☽'}
      </button>
    </nav>
  )
}