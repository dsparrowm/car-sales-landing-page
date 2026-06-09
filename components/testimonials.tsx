'use client'

import { useEffect, useRef } from 'react'
import { sectionReveal } from '@/lib/animations'

const testimonials = [
  {
    name: 'Alexander Sterling',
    title: 'Entrepreneur · London',
    initials: 'AS',
    content:
      'The entire experience was exceptional. From selection to delivery, every detail was handled with the utmost professionalism and discretion.',
  },
  {
    name: 'Victoria Chen',
    title: 'Executive · Singapore',
    initials: 'VC',
    content:
      'I have purchased luxury vehicles before, but the concierge service here is incomparable. Truly white-glove treatment from first inquiry to handover.',
  },
  {
    name: 'Marcus Thompson',
    title: 'Collector · New York',
    initials: 'MT',
    content:
      'Their expertise in matching me with the Heritage Classic was remarkable. They understand that for collectors, provenance is everything.',
  },
]

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      sectionReveal(headerRef.current)
    }
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('[data-testimonial-card]')
      cards.forEach((card, index) => {
        sectionReveal(card as HTMLElement, index * 0.12)
      })
    }
  }, [])

  return (
    <section className="w-full py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20 text-center">
          <p className="section-label mb-4">Client Perspectives</p>
          <div className="gold-line mx-auto mb-8" />
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Trusted by the <span className="italic text-accent">Discerning</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              data-testimonial-card
              className="relative p-8 border border-border hover:border-accent/20 transition-colors duration-500"
            >
              <span className="font-heading text-5xl text-accent/20 leading-none select-none">
                &ldquo;
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed -mt-4 mb-8">
                {testimonial.content}
              </p>
              <footer className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center">
                  <span className="text-xs tracking-wider text-accent font-medium">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
