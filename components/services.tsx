'use client'

import { useEffect, useRef } from 'react'
import {
  CreditCard,
  Shield,
  Gem,
  Truck,
  Wrench,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'
import { sectionReveal } from '@/lib/animations'

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Bespoke Financing',
    description:
      'Tailored payment structures with preferential rates reserved exclusively for our clients.',
    icon: CreditCard,
  },
  {
    title: 'Comprehensive Warranty',
    description:
      'Multi-year coverage plans designed to protect your investment long after delivery.',
    icon: Shield,
  },
  {
    title: 'Personal Concierge',
    description:
      'A dedicated advisor available around the clock for any request, however extraordinary.',
    icon: Gem,
  },
  {
    title: 'White Glove Delivery',
    description:
      'Enclosed transport, personal handover, and a complete orientation at your location.',
    icon: Truck,
  },
  {
    title: 'Lifetime Care',
    description:
      'Factory-authorised maintenance programmes to preserve performance and value.',
    icon: Wrench,
  },
  {
    title: 'Trade-In Advisory',
    description:
      'Discreet valuation and seamless transition when the time comes to evolve your collection.',
    icon: RefreshCw,
  },
]

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      sectionReveal(headerRef.current)
    }
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('[data-service-card]')
      cards.forEach((card, index) => {
        sectionReveal(card as HTMLElement, index * 0.08)
      })
    }
  }, [])

  return (
    <section id="services" className="w-full py-28 px-6 md:px-10 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <p className="section-label mb-4">Beyond the Sale</p>
          <div className="gold-line mb-8" />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
            The <span className="italic text-accent">Ownership</span> Experience
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-service-card
                className="group p-10 bg-background hover:bg-card transition-colors duration-500"
              >
                <Icon className="w-5 h-5 text-accent mb-6 stroke-[1.5]" />
                <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
