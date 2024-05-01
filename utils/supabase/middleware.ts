import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export const updateSession = async (request: NextRequest) => {
  // This `try/catch` block is only here for the interactive tutorial.
  // Feel free to remove once you have Supabase connected.
  try {
    // Create an unmodified response
    let response = NextResponse.next({
      request: {
        headers: request.headers
      }
    })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            // If the cookie is updated, update the cookies for the request and response
            request.cookies.set({
              name,
              value,
              ...options
            })
            response = NextResponse.next({
              request: {
                headers: request.headers
              }
            })
            response.cookies.set({
              name,
              value,
              ...options
            })
          },
          remove(name: string, options: CookieOptions) {
            // If the cookie is removed, update the cookies for the request and response
            request.cookies.set({
              name,
              value: '',
              ...options
            })
            response = NextResponse.next({
              request: {
                headers: request.headers
              }
            })
            response.cookies.set({
              name,
              value: '',
              ...options
            })
          }
        }
      }
    )

    // Это обновит сеанс, если срок его действия истек - требуется для серверных компонентов.
    // https://supabase.com/docs/guides/auth/server-side/nextjs
    await supabase.auth.getUser()

    return response
  } catch (e) {
    // Не удалось создать клиент Supabase!
    // Скорее всего, это связано с тем, что не настроены переменные среды.
    return NextResponse.next({
      request: {
        headers: request.headers
      }
    })
  }
}
