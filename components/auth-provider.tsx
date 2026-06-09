'use client'

import { AuthProvider } from '@/lib/auth/auth-context'
import LoginModal from '@/components/login-modal'
import type { ReactNode } from 'react'

export default function AppAuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <LoginModal />
    </AuthProvider>
  )
}
