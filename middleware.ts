import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decodeSession } from '@/lib/auth/session'
import { SESSION_COOKIE } from '@/lib/auth/types'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith('/showroom')) {
    return NextResponse.next()
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value
  const user = token ? decodeSession(token) : null

  if (!user) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    url.searchParams.set('viewing', '1')
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/showroom/:path*'],
}
