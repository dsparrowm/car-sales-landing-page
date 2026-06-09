'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import { mockAuthProvider } from './mock-provider'
import type { AuthUser, LoginCredentials } from './types'

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  loginModalOpen: boolean
  openLoginModal: () => void
  closeLoginModal: () => void
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const fetchSession = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/session')
      if (res.ok) {
        const data = await res.json()
        setUser(data.user ?? null)
      } else {
        setUser(null)
      }
    } catch {
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSession()
  }, [fetchSession])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('viewing') === '1') {
      setLoginModalOpen(true)
      params.delete('viewing')
      const newUrl = params.toString()
        ? `${window.location.pathname}?${params}`
        : window.location.pathname
      window.history.replaceState({}, '', newUrl)
    }
  }, [])

  const openLoginModal = useCallback(() => setLoginModalOpen(true), [])
  const closeLoginModal = useCallback(() => setLoginModalOpen(false), [])

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const result = await mockAuthProvider.login(credentials)
      if (!result.success) {
        return { success: false, error: result.error }
      }

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.user),
      })

      if (!res.ok) {
        return { success: false, error: 'Unable to establish session. Please try again.' }
      }

      setUser(result.user)
      setLoginModalOpen(false)
      router.push('/showroom')
      return { success: true }
    },
    [router]
  )

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
    router.push('/')
  }, [router])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      loginModalOpen,
      openLoginModal,
      closeLoginModal,
      login,
      logout,
    }),
    [user, isLoading, loginModalOpen, openLoginModal, closeLoginModal, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
