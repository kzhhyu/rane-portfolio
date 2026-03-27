'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    name: 'PALIHOG App',
    desc: 'A student-centered service and marketplace app that allows users to request or offer help through features like pabili, patulong, padala, and pakuha, promoting convenience, trust, and community within the campus.',
    tags: ['Mobile', 'UI/UX', 'Marketplace'],
    thumbnailImage: '/images/projects/palihog-app/palihog-icon.png',
    gradient: 'linear-gradient(135deg, #d5e8f7, #32a5fc)',
    gradientDark: 'linear-gradient(135deg, #2e1a5e, #4c2889)',
    thumbLabel: 'Application',
    href: '/projects/palihog-app',
    logoSize: 'w-24 h-24',
  },
  {
    name: 'DIOSys',
    desc: 'A data management system for the Diocese of Butuan that streamlines operations, enhances communication, and provides a centralized platform for managing parish information, events, and resources.',
    tags: ['Web', 'Design System'],
    thumbnailImage: '/images/projects/diosys/diosys-icon.png',
    gradient: 'linear-gradient(135deg, #eff7c8, #dbf760)',
    gradientDark: 'linear-gradient(135deg, #2e1a5e, #4c2889)',
    thumbLabel: 'Website',
    href: '#',
    logoSize: 'w-26 h-26',
  },
  {
    name: 'Furever Home',
    desc: 'An adoption website for a local animal shelter that connects potential pet adopters with their perfect furry companions, providing detailed profiles, adoption resources, and a seamless application process to help more animals find loving homes.',
    tags: ['Web', 'Branding', 'Design System'],
    thumbnailImage: '/images/projects/furever-home/furever-home-icon.png',
    gradient: 'linear-gradient(135deg, #fce6e9, #ff4060)',
    gradientDark: 'linear-gradient(135deg, #3d1030, #6b1e52)',
    thumbLabel: 'Branding',
    href: '#',
    logoSize: 'w-24 h-24',
  },
]

export default function Projects() {
  const headRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (headRef.current) observer.observe(headRef.current)
    cardRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-10">

      {/* Heading */}
      <div ref={headRef} className="reveal mb-12">
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--text-accent)' }}>
          Selected projects
        </p>
        <h2
          className="font-display text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Projects I have worked on.
        </h2>
        <p className="text-base font-light leading-loose max-w-lg" style={{ color: 'var(--text-muted)' }}>
          A selection of projects that reflect how I think, what I care about, and the problems I love solving.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <a
            key={project.name}
            ref={el => { cardRefs.current[i] = el }}
            href={project.href}
            className="reveal block rounded-2xl border overflow-hidden no-underline transition-all duration-300"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'inherit',
              transitionDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#c4b5fd'
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 20px 48px rgba(139,92,246,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Thumbnail Container */}
            <div
              className="h-44 flex items-center justify-center relative overflow-hidden"
              style={{ background: project.gradient }}
            >
              {/* Improved Image Handling with custom size */}
              {project.thumbnailImage ? (
                <div className={`relative ${project.logoSize || 'w-24 h-24'} flex items-center justify-center`}>
                  <Image
                    src={project.thumbnailImage}
                    alt={project.name}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                    priority={i === 0}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
              )}
              
              {/* Thumbnail Label */}
              <span
                className="absolute bottom-3 right-4 font-display text-sm italic opacity-40"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.thumbLabel}
              </span>
            </div>

            {/* Body */}
            <div className="p-5">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-full border"
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

              <h3 className="font-display text-xl leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
                {project.name}
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {project.desc}
              </p>

              <span
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium transition-all duration-200"
                style={{ color: 'var(--text-accent)' }}
              >
                View project →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}