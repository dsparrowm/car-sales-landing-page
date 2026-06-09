export type AuthUser = {
  email: string
  name: string
  memberSince: string
}

export type LoginCredentials = {
  email: string
  password: string
}

export type AuthResult =
  | { success: true; user: AuthUser }
  | { success: false; error: string }

export type AuthProvider = {
  login(credentials: LoginCredentials): Promise<AuthResult>
}

export const SESSION_COOKIE = 'luxemotor_session'
