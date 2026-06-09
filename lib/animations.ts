'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const vehicleCardAnimation = (container: HTMLElement) => {
  if (!container) return

  const cards = container.querySelectorAll('.vehicle-card')

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })
}

export const sectionReveal = (element: HTMLElement, delay = 0) => {
  if (!element) return

  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const imageParallax = (
  container: HTMLElement,
  inner: HTMLElement,
  yPercent = 20
) => {
  if (!container || !inner) return

  gsap.to(inner, {
    yPercent,
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export const heroScrollParallax = (
  section: HTMLElement,
  media: HTMLElement,
  content: HTMLElement | null
) => {
  if (!section || !media) return () => {}

  const ctx = gsap.context(() => {
    gsap.to(media, {
      scale: 1.12,
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    if (content) {
      gsap.to(content, {
        opacity: 0,
        y: -48,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '45% top',
          scrub: true,
        },
      })
    }
  }, section)

  return () => ctx.revert()
}

export const countUp = (element: HTMLElement, target: number, duration = 2) => {
  if (!element) return

  const obj = { value: 0 }

  gsap.to(obj, {
    value: target,
    duration,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString()
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}
