/**
 * Memory-based rate limiter for development
 * For production with high traffic, consider Redis-based solutions like:
 * - Vercel KV (recommended for Vercel deployment)
 * - Redis Cloud
 * - Upstash
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export function isRateLimited(
  identifier: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now()
  const key = identifier

  if (!requestCounts.has(key)) {
    requestCounts.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  const data = requestCounts.get(key)!

  if (now > data.resetTime) {
    // Window expired, reset
    requestCounts.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (data.count >= limit) {
    return true
  }

  data.count++
  return false
}

/**
 * Get client IP address from request
 */
export function getClientIp(request: Request): string {
  // Check various headers for IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

/**
 * Rate limiter configuration
 */
export const RATE_LIMIT_CONFIG = {
  // Create order: 5 requests per minute per IP
  CREATE_ORDER: { limit: 5, windowMs: 60 * 1000 },

  // Verify payment: 10 requests per minute per IP
  VERIFY_PAYMENT: { limit: 10, windowMs: 60 * 1000 },

  // Booking: 10 requests per hour per IP
  BOOKING: { limit: 10, windowMs: 60 * 60 * 1000 },

  // Contact form: 5 requests per hour per IP
  CONTACT: { limit: 5, windowMs: 60 * 60 * 1000 },
}
