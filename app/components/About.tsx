'use client'

import { useEffect, useRef } from 'react'

const skills = [
  'UI Design', 'Graphic Design', 'Prototyping', 'Wireframing',
  'Design Systems', 'Interaction Design', 'Figma / Framer', 'User Testing',
]

{/*const stats = [
  { num: '3+', label: 'Years experience' },
  { num: '20+', label: 'Projects shipped' },
  { num: '∞', label: 'Iterations made' },
]*/}

export default function About() {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    if (leftRef.current)  observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — label + skills */}
        <div ref={leftRef} className="reveal">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--text-accent)' }}>
            About me
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl leading-tight tracking-tight mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            Minimal by choice,<br />intentional by nature.
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {skills.map(skill => (
              <div
                key={skill}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm border transition-all duration-300 cursor-default"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#c4b5fd'
                  e.currentTarget.style.color = 'var(--text-accent)'
                  e.currentTarget.style.background = '#f5f3ff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c4b5fd' }} />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio + stats */}
        <div ref={rightRef} className="reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="space-y-5 text-base font-light leading-loose" style={{ color: 'var(--text-primary)' }}>
            <p>
              I am an undergraduate{' '}
              <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>
                Bachelor of Science in Information Technology
              </strong>{' '}
              student at Father Saturnino Urios University with a passion for{' '}
              <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>
                UI/UX design
              </strong>.{' '}
              I have a strong desire to create intuitive and visually appealing digital experiences
              that enhance user satisfaction. With a solid foundation in design principles and a keen
              eye for detail, I am dedicated to crafting user-centered designs that effectively communicate
              ideas and solve problems.
            </p>
            <p>
              I believe good design is quiet — it guides without shouting, delights without demanding attention.
              My projects spans{' '}
              <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>
                mobile apps, web platforms,
              </strong>{' '}
              and design systems that scale across products.
            </p>
            <p>
              Additionally, I design not just web and mobile platforms, but as well as other graphic designs like{' '}
              <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>
                logos, posters, and branding materials</strong>.{' '}
                I have a passion for crafting visual identities that resonate and communicate effectively.
            </p>
          </div>

          {/* Stats */}
          <div
            className="flex gap-10 mt-8 pt-8 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            {/*{stats.map(stat => (
              <div key={stat.label}>
                <div className="font-display text-4xl leading-none mb-1" style={{ color: 'var(--text-accent)' }}>
                  {stat.num}
                </div>
                <div className="text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}*/}
          </div>
        </div>

      </div>
    </section>
  )
}