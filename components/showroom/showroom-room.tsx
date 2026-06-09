'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import type { ShowroomRoomConfig } from '@/lib/private-vehicles'
import { getVehiclesByRoom } from '@/lib/private-vehicles'
import PrivateVehicleCard from './private-vehicle-card'

export default function ShowroomRoom({ room }: { room: ShowroomRoomConfig }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const vehicles = getVehiclesByRoom(room.id)

  useEffect(() => {
    if (!contentRef.current) return

    const items = contentRef.current.querySelectorAll('.room-reveal')
    gsap.fromTo(
      items,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section
      id={room.id}
      className="relative min-h-screen flex items-center snap-start snap-always"
    >
      <Image
        src={room.image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-28"
      >
        <p className="room-reveal section-label mb-4">{room.subtitle}</p>
        <div className="room-reveal gold-line mb-8" />
        <h2 className="room-reveal font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
          {room.title}
        </h2>
        <p className="room-reveal text-white/50 max-w-xl text-sm leading-relaxed mb-12">
          {room.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="room-reveal">
              <PrivateVehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
