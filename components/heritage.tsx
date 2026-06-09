'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { sectionReveal } from '@/lib/animations'
import ParallaxImage from '@/components/parallax-image'

export default function Heritage() {
  const textRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      sectionReveal(textRef.current)
    }
    if (imageWrapperRef.current) {
      sectionReveal(imageWrapperRef.current, 0.15)
    }
  }, [])

  return (
    <section id="heritage" className="w-full py-28 px-6 md:px-10 border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div ref={textRef}>
          <p className="section-label mb-4">Our Heritage</p>
          <div className="gold-line mb-8" />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
            Four Decades of
            <br />
            <span className="italic text-accent">Uncompromising Taste</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Founded in 1984, LuxeMotor began as a private gallery for a handful of collectors.
            Today, we remain deliberately small — each vehicle hand-selected, each client relationship
            built on discretion and trust.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We don&apos;t sell cars. We steward automotive legacies — connecting extraordinary
            machines with those who will appreciate them as they deserve.
          </p>
        </div>

        <div ref={imageWrapperRef} className="relative aspect-[4/5] lg:aspect-[3/4]">
          <ParallaxImage className="absolute inset-0" speed={22}>
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format&fit=crop"
              alt="Classic automotive craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ParallaxImage>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent pointer-events-none">
            <p className="font-heading text-2xl text-foreground italic">
              &ldquo;The automobile as art.&rdquo;
            </p>
            <p className="mt-2 text-xs tracking-[0.15em] uppercase text-muted-foreground">
              — Founder, LuxeMotor
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
