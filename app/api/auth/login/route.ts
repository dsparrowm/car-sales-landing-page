import { NextResponse } from 'next/server'
import { encodeSession } from '@/lib/auth/session'
import { SESSION_COOKIE } from '@/lib/auth/types'
import type { AuthUser } from '@/lib/auth/types'

export async function POST(request: Request) {
  const user = (await request.json()) as AuthUser

  if (!user?.email || !user?.name) {
    return NextResponse.json({ error: 'Invalid user data' }, { status: 400 })
  }

  const token = encodeSession(user)
  const response = NextResponse.json({ user })

  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
