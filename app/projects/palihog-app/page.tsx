'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PalihogApp() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      contentRef.current?.classList.add('visible')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-10">
      {/* Back button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 mb-8 text-sm transition-all duration-300 hover:translate-x-[-4px]"
        style={{ color: 'var(--text-muted)' }}
      >
        ← Back to projects
      </Link>

      {/* Content */}
      <div ref={contentRef} className="reveal">
        {/* Title */}
        <h1
          className="font-display text-5xl lg:text-6xl leading-tight tracking-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          PALIHOG App
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {['Mobile', 'UI/UX', 'Marketplace'].map(tag => (
            <span
              key={tag}
              className="text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: 'var(--text-accent)',
                background: 'var(--lavender-50, #f5f3ff)',
                borderColor: '#ede9fe',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero Image Placeholder */}
        <div
          className="w-full h-96 rounded-2xl mb-12 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #ede9fe, #c4b5fd)',
          }}
        >
          <span className="text-6xl">📱</span>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Overview
          </h2>
          <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
            PALIHOG App is a student-centered service and marketplace app that allows users to request or offer help through features like pabili, patulong, padala, and pakuha. The platform promotes convenience, trust, and community within the campus.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Problem Statement
          </h2>
          <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
            Students often face challenges when needing quick assistance on campus—whether it's buying items, getting help with tasks, sending packages, or requesting pickups. Existing solutions are fragmented and don't provide a trusted, unified platform for student-to-student services.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Solution
          </h2>
          <p className="text-base font-light leading-loose mb-4" style={{ color: 'var(--text-muted)' }}>
            PALIHOG App addresses these challenges by providing:
          </p>
          <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--text-muted)' }}>
            <li><strong className="font-medium" style={{ color: 'var(--text-accent)' }}>Pabili:</strong> Request someone to buy items for you</li>
            <li><strong className="font-medium" style={{ color: 'var(--text-accent)' }}>Patulong:</strong> Get help with tasks and errands</li>
            <li><strong className="font-medium" style={{ color: 'var(--text-accent)' }}>Padala:</strong> Send packages within the campus</li>
            <li><strong className="font-medium" style={{ color: 'var(--text-accent)' }}>Pakuha:</strong> Request pickups from specific locations</li>
          </ul>
        </section>

        {/* Design Process */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Design Process
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl mb-2" style={{ color: 'var(--text-accent)' }}>
                1. Research
              </h3>
              <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
                Conducted user interviews with 20+ students to understand their needs, pain points, and behaviors around campus services.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl mb-2" style={{ color: 'var(--text-accent)' }}>
                2. Ideation
              </h3>
              <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
                Brainstormed solutions and created user flows for each feature, ensuring intuitive navigation and clear user pathways.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl mb-2" style={{ color: 'var(--text-accent)' }}>
                3. Design
              </h3>
              <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
                Created wireframes and high-fidelity prototypes focusing on trust-building elements, clear communication, and easy task management.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl mb-2" style={{ color: 'var(--text-accent)' }}>
                4. Testing
              </h3>
              <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
                Conducted usability testing with 15 users, iterated based on feedback to improve clarity and reduce friction points.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'User Profiles', desc: 'Verified student profiles with ratings and reviews to build trust' },
              { title: 'Real-time Chat', desc: 'In-app messaging for seamless coordination' },
              { title: 'Payment Integration', desc: 'Secure payment options for transactions' },
              { title: 'Notifications', desc: 'Real-time updates on requests and offers' },
            ].map(feature => (
              <div
                key={feature.title}
                className="p-4 rounded-xl border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
              >
                <h4 className="font-display text-lg mb-2" style={{ color: 'var(--text-accent)' }}>
                  {feature.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { value: '85%', label: 'User Satisfaction' },
              { value: '500+', label: 'Active Users' },
              { value: '4.8', label: 'App Rating' },
            ].map(stat => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="font-display text-3xl mb-1" style={{ color: 'var(--text-accent)' }}>
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-base font-light leading-loose" style={{ color: 'var(--text-muted)' }}>
            The app successfully launched with positive feedback from the student community, with users reporting increased convenience and stronger campus connections.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Future Enhancements
          </h2>
          <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--text-muted)' }}>
            <li>AI-powered task matching recommendations</li>
            <li>Gamification elements to encourage engagement</li>
            <li>Expanded payment options and escrow system</li>
            <li>Integration with campus events and announcements</li>
          </ul>
        </section>
      </div>
    </main>
  )
}