'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { sectionReveal } from '@/lib/animations'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      sectionReveal(containerRef.current)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <section id="contact" className="w-full py-28 px-6 md:px-10 border-t border-border">
      <div ref={containerRef} className="max-w-3xl mx-auto text-center">
        <p className="section-label mb-4">Private Circle</p>
        <div className="gold-line mx-auto mb-8" />

        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
          Invitation-Only <span className="italic text-accent">Updates</span>
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-lg mx-auto">
          Be among the first to learn of new acquisitions, private viewings, and
          collector events. Discretion assured.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-3.5 bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            {subscribed ? 'Enrolled' : 'Request Access'}
            {!subscribed && <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </form>

        <p className="text-muted-foreground/60 text-xs mt-6 tracking-wide">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
