import type { AuthProvider, AuthResult, LoginCredentials } from './types'

export const DEMO_PASSWORD = 'viewing2024'

export const mockAuthProvider: AuthProvider = {
  async login({ email, password }: LoginCredentials): Promise<AuthResult> {
    await new Promise((resolve) => setTimeout(resolve, 600))

    if (!email.trim() || !password) {
      return { success: false, error: 'Please enter your email and password.' }
    }

    if (password !== DEMO_PASSWORD) {
      return { success: false, error: 'Invalid credentials. Access is by invitation only.' }
    }

    const name = email.split('@')[0].replace(/[._]/g, ' ')
    const formattedName = name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

    return {
      success: true,
      user: {
        email: email.trim().toLowerCase(),
        name: formattedName || 'Guest',
        memberSince: '2024',
      },
    }
  },
}
