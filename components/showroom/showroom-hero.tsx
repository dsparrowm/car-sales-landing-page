'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useAuth } from '@/lib/auth/auth-context'

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function ShowroomHero() {
  const { user } = useAuth()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.fromTo(
      contentRef.current.querySelectorAll('.showroom-reveal'),
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center snap-start snap-always overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-black" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)]" />

      <div ref={contentRef} className="relative z-10 text-center px-6 md:px-10 max-w-3xl">
        <p className="showroom-reveal section-label mb-6 opacity-0">Welcome</p>
        <div className="showroom-reveal gold-line mx-auto mb-10 opacity-0" />
        <h1 className="showroom-reveal font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 opacity-0">
          {getGreeting()}
          {user ? `, ${user.name}` : ''}
        </h1>
        <p className="showroom-reveal text-white/50 text-base md:text-lg leading-relaxed mb-10 opacity-0">
          You have been granted access to our private collection — four curated salons,
          each housing acquisitions unavailable to the public.
        </p>
        <a
          href="#atelier"
          className="showroom-reveal inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-accent/90 transition-colors opacity-0"
        >
          Begin Your Tour
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-[0.2em] uppercase animate-bounce">
        Scroll to explore
      </div>
    </section>
  )
}
