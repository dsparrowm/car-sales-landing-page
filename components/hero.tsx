'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'
import { useAuth } from '@/lib/auth/auth-context'
import { heroScrollParallax } from '@/lib/animations'
import { HERO_IMAGE, HERO_VIDEO } from '@/lib/vehicles'

export default function Hero() {
  const { isAuthenticated, openLoginModal } = useAuth()
  const sectionRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [useVideo, setUseVideo] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setUseVideo(false)
    }
  }, [])

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

    timeline
      .fromTo(subtitleRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9 }, 0.4)
      .fromTo(
        titleRef.current?.querySelectorAll('.hero-title-line') ?? [],
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        0.7
      )
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.1)
      .fromTo(
        statsRef.current?.querySelectorAll('.hero-stat') ?? [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        1.3
      )
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !mediaRef.current) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    return heroScrollParallax(sectionRef.current, mediaRef.current, contentRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        {useVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_IMAGE}
            onError={() => setUseVideo(false)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_IMAGE}
            alt="Luxury performance vehicle"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-32 pt-40"
      >
        <p ref={subtitleRef} className="section-label mb-6 opacity-0">
          Est. 1984 — Curated Excellence
        </p>

        <div ref={titleRef} className="max-w-4xl">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight">
            <span className="hero-title-line block opacity-0">Where Performance</span>
            <span className="hero-title-line block opacity-0">
              Meets <span className="italic text-accent">Provenance</span>
            </span>
          </h1>
        </div>

        <p className="mt-6 max-w-lg text-white/60 text-base md:text-lg leading-relaxed">
          An invitation-only collection of the world&apos;s most exceptional automobiles,
          personally curated for those who understand that true luxury is never ordinary.
        </p>

        <div ref={ctaRef} className="hero-buttons mt-10 flex flex-wrap gap-4 opacity-0">
          <a
            href="#collection"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-accent/90 transition-colors"
          >
            Explore Collection
          </a>
          {isAuthenticated ? (
            <a
              href="/showroom"
              className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white text-xs tracking-[0.15em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all"
            >
              Enter Private Gallery
            </a>
          ) : (
            <button
              type="button"
              onClick={openLoginModal}
              className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white text-xs tracking-[0.15em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all"
            >
              Arrange a Viewing
            </button>
          )}
        </div>
      </div>

      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/10 bg-background/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '40+', label: 'Years of Excellence' },
            { value: '2,400', label: 'Vehicles Delivered' },
            { value: '18', label: 'Global Marques' },
            { value: '98%', label: 'Client Retention' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat opacity-0">
              <p className="font-heading text-3xl md:text-4xl text-accent font-light">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-[0.12em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#heritage"
        className="scroll-indicator absolute bottom-36 md:bottom-44 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors hidden md:block"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
