'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useAuth } from '@/lib/auth/auth-context'
import { DEMO_PASSWORD } from '@/lib/auth/mock-provider'

export default function LoginModal() {
  const { loginModalOpen, closeLoginModal, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loginModalOpen) {
      setEmail('')
      setPassword('')
      setError('')
      setLoading(false)
    }
  }, [loginModalOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && loginModalOpen) closeLoginModal()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [loginModalOpen, closeLoginModal])

  if (!loginModalOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await login({ email, password })
    if (!result.success) {
      setError(result.error ?? 'Login failed.')
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeLoginModal}
        aria-hidden
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-md border border-border bg-background shadow-2xl"
      >
        <button
          type="button"
          onClick={closeLoginModal}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-10 md:p-12">
          <p className="section-label mb-4">Members Only</p>
          <div className="gold-line mb-8" />

          <h2
            id="login-title"
            className="font-heading text-3xl md:text-4xl font-light text-foreground leading-tight mb-3"
          >
            Private <span className="italic text-accent">Viewing</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Access to our private gallery is reserved for members and invited guests.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 bg-secondary border border-border text-foreground text-sm outline-none focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-secondary border border-border text-foreground text-sm outline-none focus:border-accent transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400/90" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {loading ? 'Verifying…' : 'Enter Private Gallery'}
            </button>
          </form>

          <p className="mt-8 text-xs text-muted-foreground/60 text-center leading-relaxed">
            Demo access: any email with password{' '}
            <span className="text-accent/80">{DEMO_PASSWORD}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
