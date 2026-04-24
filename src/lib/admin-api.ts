import axios, { type AxiosError } from 'axios'

const baseURL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export const adminApi = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})

if (typeof window !== 'undefined') {
  adminApi.interceptors.request.use((config) => {
    const t = localStorage.getItem('admin_token')
    if (t) {
      config.headers.Authorization = `Bearer ${t}`
    }
    if (config.data instanceof FormData) {
      delete (config.headers as { 'Content-Type'?: string })['Content-Type']
    }
    return config
  })

  adminApi.interceptors.response.use(
    (r) => r,
    (err: AxiosError) => {
      if (err.response?.status === 401) {
        localStorage.removeItem('admin_token')
        if (!window.location.pathname.startsWith('/admin/login')) {
          window.location.href = '/admin/login'
        }
      }
      return Promise.reject(err)
    },
  )
}

export function setAdminToken(token: string | null) {
  if (typeof window === 'undefined') return
  if (token) {
    localStorage.setItem('admin_token', token)
  } else {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_email')
  }
}

export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('admin_token')
}
