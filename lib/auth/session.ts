import type { AuthUser } from './types'

export function encodeSession(user: AuthUser): string {
  return Buffer.from(JSON.stringify(user)).toString('base64url')
}

export function decodeSession(token: string): AuthUser | null {
  try {
    const json = Buffer.from(token, 'base64url').toString('utf-8')
    const user = JSON.parse(json) as AuthUser
    if (!user.email || !user.name) return null
    return user
  } catch {
    return null
  }
}
