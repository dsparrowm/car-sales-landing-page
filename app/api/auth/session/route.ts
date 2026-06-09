import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { decodeSession } from '@/lib/auth/session'
import { SESSION_COOKIE } from '@/lib/auth/types'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value

  if (!token) {
    return NextResponse.json({ user: null })
  }

  const user = decodeSession(token)
  if (!user) {
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({ user })
}
