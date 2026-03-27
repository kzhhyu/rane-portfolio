'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PalihogApp() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      contentRef.current?.classList.add('visible')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const uiDesigns = [
    {
      id: 1,
      title: 'Onboarding Screen',
      description: 'Loading screen when opening the app',
      image: '/images/projects/palihog-app/onboarding.png',
      category: 'Onboarding',
    },
    {
      id: 2,
      title: 'Home Screen',
      description: 'Main dashboard showing available services and user activity',
      image: '/images/projects/palihog-app/home.png',
      category: 'Dashboard',
    },
    {
      id: 3,
      title: 'Request Screen',
      description: 'Interface for users to request services from other students',
      image: '/images/projects/palihog-app/request.png',
      category: 'Services',
    },
    {
      id: 4,
      title: 'Chat Interface',
      description: 'In-app chat for coordinating service requests',
      image: '/images/projects/palihog-app/messages.png',
      category: 'Communication',
    },
    {
      id: 5,
      title: 'User Profile',
      description: 'Verified student profiles',
      image: '/images/projects/palihog-app/profile.png',
      category: 'Profile',
    },
  ]

  const categories = ['All', 'Onboarding', 'Dashboard', 'Services', 'Communication', 'Profile']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredDesigns = activeCategory === 'All' 
    ? uiDesigns 
    : uiDesigns.filter(design => design.category === activeCategory)

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

        {/* UI Design Gallery */}
        <section className="mb-12">
          <h2
            className="font-display text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            UI Design Gallery
          </h2>
          <p className="text-base font-light leading-loose mb-6" style={{ color: 'var(--text-muted)' }}>
            Explore the user interface design of the PALIHOG App.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white'
                    : 'border'
                }`}
                style={{
                  background: activeCategory === category ? 'var(--text-accent)' : 'transparent',
                  borderColor: 'var(--border)',
                  color: activeCategory === category ? 'white' : 'var(--text-muted)',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="group rounded-xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
                onClick={() => setSelectedImage(design.id)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <div className="relative w-full h-full">
                    <Image
                      src={design.image}
                      alt={design.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
                      {design.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: 'var(--lavender-50, #f5f3ff)',
                        color: 'var(--text-accent)',
                      }}
                    >
                      {design.category}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDesigns.length === 0 && (
            <div
              className="text-center py-12 rounded-xl border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              <p className="text-base" style={{ color: 'var(--text-muted)' }}>
                No designs found in this category.
              </p>
            </div>
          )}
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
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={uiDesigns.find(d => d.id === selectedImage)?.image || ''}
                alt={uiDesigns.find(d => d.id === selectedImage)?.title || ''}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">
                {uiDesigns.find(d => d.id === selectedImage)?.title}
              </p>
              <p className="text-sm opacity-75">
                {uiDesigns.find(d => d.id === selectedImage)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}