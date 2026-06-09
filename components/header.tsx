'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/lib/auth/auth-context'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Collection', href: '/#collection' },
  { label: 'Services', href: '/#services' },
  { label: 'Heritage', href: '/#heritage' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const { isAuthenticated, openLoginModal, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-accent/40 flex items-center justify-center transition-colors group-hover:border-accent">
            <span className="font-heading text-accent text-sm font-medium tracking-widest">
              LM
            </span>
          </div>
          <span
            className={cn(
              'font-heading text-xl tracking-wide transition-colors hidden sm:inline',
              scrolled ? 'text-foreground' : 'text-white'
            )}
          >
            LuxeMotor
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs tracking-[0.15em] uppercase transition-colors',
                scrolled
                  ? 'text-muted-foreground hover:text-accent'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link
                href="/showroom"
                className={cn(
                  'hidden sm:inline-flex px-5 py-2.5 text-xs tracking-[0.12em] uppercase font-medium border transition-all duration-300',
                  scrolled
                    ? 'border-accent text-accent hover:bg-accent/10'
                    : 'border-accent/50 text-accent hover:border-accent'
                )}
              >
                My Showroom
              </Link>
              <button
                type="button"
                onClick={() => logout()}
                className={cn(
                  'hidden sm:inline-flex px-5 py-2.5 text-xs tracking-[0.12em] uppercase font-medium transition-colors',
                  scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/60 hover:text-white'
                )}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={openLoginModal}
              className={cn(
                'hidden sm:inline-flex px-5 py-2.5 text-xs tracking-[0.12em] uppercase font-medium border transition-all duration-300',
                scrolled
                  ? 'border-border text-foreground hover:border-accent hover:text-accent'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              )}
            >
              Private Viewing
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'md:hidden p-2 transition-colors',
              scrolled ? 'text-foreground' : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  href="/showroom"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm tracking-[0.15em] uppercase text-accent"
                >
                  My Showroom
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    logout()
                  }}
                  className="block text-sm tracking-[0.15em] uppercase text-muted-foreground"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  openLoginModal()
                }}
                className="block text-sm tracking-[0.15em] uppercase text-accent"
              >
                Private Viewing
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
