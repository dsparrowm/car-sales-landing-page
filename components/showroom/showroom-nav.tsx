'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth/auth-context'
import { showroomRooms } from '@/lib/private-vehicles'

export default function ShowroomNav() {
  const { user, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 border border-accent/40 flex items-center justify-center">
            <span className="font-heading text-accent text-xs font-medium tracking-widest">LM</span>
          </div>
          <span className="font-heading text-lg tracking-wide text-white hidden sm:inline">
            Private Gallery
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 overflow-x-auto">
          {showroomRooms.map((room) => (
            <a
              key={room.id}
              href={`#${room.id}`}
              className="text-[10px] tracking-[0.15em] uppercase text-white/50 hover:text-accent transition-colors whitespace-nowrap"
            >
              {room.title}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {user && (
            <span className="text-[10px] tracking-[0.1em] uppercase text-white/40 hidden md:inline">
              {user.name}
            </span>
          )}
          <button
            type="button"
            onClick={() => logout()}
            className="px-4 py-2 text-[10px] tracking-[0.12em] uppercase border border-white/20 text-white/70 hover:border-accent hover:text-accent transition-colors"
          >
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  )
}
