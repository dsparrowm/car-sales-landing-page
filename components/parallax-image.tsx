'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { imageParallax } from '@/lib/animations'
import { cn } from '@/lib/utils'

type ParallaxImageProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
  speed?: number
}

export default function ParallaxImage({
  children,
  className,
  innerClassName,
  speed = 18,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    imageParallax(containerRef.current, innerRef.current, speed)
  }, [speed])

  return (
    <div ref={containerRef} className={cn('overflow-hidden', className)}>
      <div
        ref={innerRef}
        className={cn('relative w-full h-[115%] -top-[7.5%]', innerClassName)}
      >
        {children}
      </div>
    </div>
  )
}
