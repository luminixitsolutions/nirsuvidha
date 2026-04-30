import { NextResponse } from 'next/server'
import { getPublicApiBaseUrl } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const formData = await request.formData()
  const base = getPublicApiBaseUrl().replace(/\/$/, '')
  const url = `${base}/api/public/service-case-submissions`

  try {
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    })
    const body = await res.text()
    const contentType =
      res.headers.get('content-type')?.split(';')[0]?.trim() || 'application/json'
    return new NextResponse(body, {
      status: res.status,
      headers: { 'Content-Type': contentType },
    })
  } catch (e) {
    console.error('service-case-submissions proxy:', e)
    return NextResponse.json(
      { message: 'Could not reach the server. Try again later.' },
      { status: 502 },
    )
  }
}
