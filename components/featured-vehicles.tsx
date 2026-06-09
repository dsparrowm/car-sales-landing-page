'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { vehicleCardAnimation, sectionReveal } from '@/lib/animations'
import { getPublicVehicles } from '@/lib/vehicles'

const vehicles = getPublicVehicles()
import ParallaxImage from '@/components/parallax-image'

export default function FeaturedVehicles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      vehicleCardAnimation(containerRef.current)
    }
    if (headerRef.current) {
      sectionReveal(headerRef.current, 0.1)
    }
  }, [])

  return (
    <section id="collection" className="w-full py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <p className="section-label mb-4">The Collection</p>
          <div className="gold-line mb-8" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              Featured <span className="italic text-accent">Acquisitions</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Each vehicle undergoes a 200-point inspection and arrives with full provenance
              documentation.
            </p>
          </div>
        </div>

        <div ref={containerRef} className="space-y-6">
          {vehicles.map((vehicle, index) => (
            <article
              key={vehicle.id}
              className="vehicle-card group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border hover:border-accent/30 transition-colors duration-500"
            >
              <Link
                href={`/vehicles/${vehicle.slug}`}
                className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] block overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <ParallaxImage className="absolute inset-0" speed={15}>
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/20 pointer-events-none" />
                <span className="absolute top-6 left-6 text-xs tracking-[0.15em] uppercase text-accent border border-accent/40 px-3 py-1.5 backdrop-blur-sm bg-background/30">
                  {vehicle.badge}
                </span>
              </Link>

              <div
                className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {vehicle.year} · {vehicle.category}
                  </p>
                  <p className="font-heading text-2xl text-accent">{vehicle.price}</p>
                </div>

                <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-1">
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {vehicle.name}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{vehicle.color}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                  {vehicle.description}
                </p>

                <div className="flex gap-8 mb-8 pb-8 border-b border-border">
                  {vehicle.specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="font-heading text-xl text-foreground">{spec.value}</p>
                      <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground mt-0.5">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-accent hover:text-accent/80 transition-colors group/btn"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Request Information
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-xs tracking-[0.15em] uppercase text-foreground hover:border-accent hover:text-accent transition-all"
          >
            View Full Inventory
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
