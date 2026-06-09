'use client'

import { useAuth } from '@/lib/auth/auth-context'
import type { ReactNode } from 'react'

export default function ShowroomGuard({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm tracking-[0.15em] uppercase animate-pulse">
          Verifying access…
        </p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
