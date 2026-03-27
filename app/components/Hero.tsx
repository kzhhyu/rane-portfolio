'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'


export default function Hero() {
  const copyRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      copyRef.current?.classList.add('visible')
    }, 100)
    const timer2 = setTimeout(() => {
      visualRef.current?.classList.add('visible')
    }, 250)
    return () => { clearTimeout(timer); clearTimeout(timer2) }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 max-w-6xl mx-auto px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

        {/* Copy */}
        <div ref={copyRef} className="reveal">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border"
            style={{
              background: 'var(--lavender-100, #ede9fe)',
              color: 'var(--text-accent)',
              borderColor: 'var(--lavender-200, #ddd6fe)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--text-accent)' }} />
            Available for freelance
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl lg:text-7xl leading-tight tracking-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Designing{' '}
            <em style={{ color: 'var(--text-accent)', fontStyle: 'italic' }}>
              experiences
            </em>
            <br />that feel right.
          </h1>

          {/* Description */}
          <p className="text-base font-light leading-loose mb-10 max-w-md" style={{ color: 'var(--text-muted)' }}>
            Hi, I&apos;m Rane — a UI/UX designer who believes clarity and beauty aren&apos;t opposites.
            I craft digital products that are thoughtful, minimal, and <em>memorable</em>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
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
              View my projects ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-light border transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-accent)'
                e.currentTarget.style.borderColor = '#c4b5fd'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Visual */}
        <div ref={visualRef} className="reveal hidden md:flex justify-center items-center" style={{ transitionDelay: '0.15s' }}>
          <div className="relative w-72 h-80">

            {/* Blob */}
            <div
              className="blob absolute inset-0 opacity-40"
              style={{
                background: 'linear-gradient(135deg, #ddd6fe, #a78bfa)',
                borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%',
              }}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%',
              }}
            >
              {/* Avatar placeholder */}
              <div
              className="absolute inset-5 flex items-center justify-center"
              style={{
                background: 'var(--surface)',
                borderRadius: '50% 50% 50% 50% / 48% 48% 52% 52%',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/pfp.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                </div>
              </div>
            </div>

            {/*  <span className="font-display text-6xl leading-none" style={{ color: 'var(--text-accent)' }}>R</span>
              <small className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                UI/UX Designer
              </small>
            </div>*/}

            {/* Floating chips */}
            {[
              { label: 'Figma expert',    icon: '✦', cls: 'float-1', style: { top: '8%',   left: '-14%' } },
              { label: 'Design systems',  icon: '◈', cls: 'float-2', style: { top: '52%',  right: '-16%' } },
              { label: 'User research',   icon: '◉', cls: 'float-3', style: { bottom: '6%', left: '-4%' } },
            ].map(chip => (
              <div
                key={chip.label}
                className={`${chip.cls} absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border whitespace-nowrap backdrop-blur-sm`}
                style={{
                  ...chip.style,
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <span
                  className="w-5 h-5 rounded-md flex items-center justify-center text-xs"
                  style={{ background: 'var(--surface)' }}
                >
                  {chip.icon}
                </span>
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="scroll-pulse w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--text-accent), transparent)' }}
        />
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          scroll
        </span>
      </div>*/}
    </section>
  )
}