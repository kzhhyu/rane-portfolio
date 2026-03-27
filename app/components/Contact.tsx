'use client'

import { useEffect, useRef } from 'react'

const links = [
  { icon: '✉', label: 'Email',    value: 'keziahlonoy27@gmail.com',   href: 'mailto:keziahlonoy27@gmail.com' },
  { icon: 'in', label: 'LinkedIn', value: '/in/keziahlonoy',            href: 'https://www.linkedin.com/in/keziah-lonoy/' },
  { icon: 'U',  label: 'Upwork', value: 'upwork.com/freelancers/keziahl',  href: 'https://www.upwork.com/freelancers/~018b7f26a28171b012?mp_source=share' },
  { icon: 'OJ', label: 'OnlineJobsPH',  value: 'v2.onlinejobs.ph/keziahlonoy',    href: 'https://v2.onlinejobs.ph/jobseekers/info/4606237' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-32 max-w-6xl mx-auto px-10">
      <div
        ref={ref}
        className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 items-center rounded-3xl border p-12 md:p-16"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      >
        {/* Left */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--text-accent)' }}>
            Let&apos;s connect
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Have a project<br />in mind?
          </h2>
          <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
            I&apos;m open to freelance projects, collaborations, and conversations about design.
            Don&apos;t hesitate to reach out.
          </p>
          <a
            href="mailto:hello@rane.design"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--text-accent)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#6d28d9'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(139,92,246,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--text-accent)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Say hello ✉
          </a>
        </div>

        {/* Right — links */}
        <div className="flex flex-col gap-3">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm transition-all duration-300 no-underline"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text-muted)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c4b5fd'
                e.currentTarget.style.color = 'var(--text-accent)'
                e.currentTarget.style.background = '#6d28d9'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.background = 'var(--surface)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium flex-shrink-0 border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {link.icon}
              </span>
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{link.label}</span>
              <span className="ml-auto text-xs opacity-70">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}