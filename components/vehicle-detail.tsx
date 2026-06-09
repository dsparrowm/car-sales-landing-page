'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import type { Vehicle } from '@/lib/vehicles'
import { useAuth } from '@/lib/auth/auth-context'
import { heroScrollParallax, sectionReveal } from '@/lib/animations'
import ParallaxImage from '@/components/parallax-image'

export default function VehicleDetail({ vehicle }: { vehicle: Vehicle }) {
  const { openLoginModal, isAuthenticated } = useAuth()
  const isPrivate = vehicle.access === 'private'
  const [activeImage, setActiveImage] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline
      .fromTo(
        heroContentRef.current?.querySelectorAll('.detail-reveal') ?? [],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0.3
      )
  }, [])

  useEffect(() => {
    if (!heroRef.current || !mediaRef.current) return
    return heroScrollParallax(heroRef.current, mediaRef.current, heroContentRef.current)
  }, [])

  useEffect(() => {
    if (detailsRef.current) {
      sectionReveal(detailsRef.current)
    }
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('[data-gallery-item]')
      items.forEach((item, index) => {
        sectionReveal(item as HTMLElement, index * 0.08)
      })
    }
  }, [])

  return (
    <>
      <section ref={heroRef} className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div ref={mediaRef} className="absolute inset-0 will-change-transform">
          <Image
            src={vehicle.gallery[activeImage]}
            alt={vehicle.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div
          ref={heroContentRef}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-32"
        >
          <Link
            href={isPrivate ? '/showroom' : '/#collection'}
            className="detail-reveal inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors mb-8 opacity-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {isPrivate ? 'Back to Private Gallery' : 'Back to Collection'}
          </Link>

          {isPrivate && (
            <p className="detail-reveal text-[10px] tracking-[0.2em] uppercase text-accent border border-accent/40 inline-block px-3 py-1 mb-4 opacity-0">
              Private Collection
            </p>
          )}
          <p className="detail-reveal section-label mb-4 opacity-0">{vehicle.badge}</p>
          <h1 className="detail-reveal font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight opacity-0">
            {vehicle.name}
          </h1>
          <div className="detail-reveal flex flex-wrap items-center gap-6 mt-4 opacity-0">
            <p className="text-sm tracking-[0.15em] uppercase text-white/50">
              {vehicle.year} · {vehicle.category} · {vehicle.color}
            </p>
            <p className="font-heading text-3xl text-accent">{vehicle.price}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div ref={detailsRef} className="lg:col-span-2">
            <p className="section-label mb-4">Overview</p>
            <div className="gold-line mb-8" />
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {vehicle.longDescription}
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 py-8 border-y border-border">
              {vehicle.specs.map((spec) => (
                <div key={spec.label}>
                  <p className="font-heading text-2xl md:text-3xl text-foreground">{spec.value}</p>
                  <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground mt-1">
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-heading text-2xl text-foreground mb-6">Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicle.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 border border-border p-8">
              <h2 className="font-heading text-xl text-foreground mb-6">Specifications</h2>
              <dl className="space-y-4">
                {vehicle.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex justify-between gap-4 text-sm border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{feature.label}</dt>
                    <dd className="text-foreground text-right">{feature.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 space-y-3">
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-accent/90 transition-colors"
                >
                  Request Information
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                {isAuthenticated ? (
                  <a
                    href="/#contact"
                    className="flex items-center justify-center w-full px-6 py-3.5 border border-border text-xs tracking-[0.15em] uppercase text-foreground hover:border-accent hover:text-accent transition-all"
                  >
                    Schedule Private Viewing
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="flex items-center justify-center w-full px-6 py-3.5 border border-border text-xs tracking-[0.15em] uppercase text-foreground hover:border-accent hover:text-accent transition-all"
                  >
                    Schedule Private Viewing
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-4">Gallery</p>
          <div className="gold-line mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-12">
            Every <span className="italic text-accent">Angle</span>
          </h2>

          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {vehicle.gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                data-gallery-item
                onClick={() => setActiveImage(index)}
                className={`relative aspect-[4/3] overflow-hidden border transition-colors ${
                  activeImage === index ? 'border-accent' : 'border-border hover:border-accent/40'
                }`}
              >
                <ParallaxImage className="absolute inset-0" speed={10}>
                  <Image
                    src={src}
                    alt={`${vehicle.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </ParallaxImage>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
