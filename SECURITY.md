# Security Documentation

This document outlines the security measures implemented in the SGMA Art & Learning platform.

## Rate Limiting

Rate limiting prevents brute force attacks and abuse by restricting the number of requests from a single IP address within a time window.

### Implementation

We use a memory-based rate limiter (`lib/rate-limiter.ts`) that tracks requests by client IP address. This is suitable for development and small-scale deployments.

**For production with high traffic**, migrate to Redis-based rate limiting:
```typescript
import { Ratelimit } from 'ratelimit'

export const limiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  analytics: true,
})
```

### Rate Limit Configuration

| Endpoint | Limit | Window | Purpose |
|----------|-------|--------|---------|
| `/api/razorpay/create-order` | 5 requests | 1 minute | Prevent order spam |
| `/api/razorpay/verify` | 10 requests | 1 minute | Prevent payment abuse |
| `/api/book` | 10 requests | 1 hour | Prevent booking spam |
| `/api/contact` | 5 requests | 1 hour | Prevent contact form spam |

### How It Works

1. Extract client IP from request headers (`X-Forwarded-For` or `X-Real-IP`)
2. Check if IP has exceeded limit in current time window
3. If exceeded, return HTTP 429 (Too Many Requests)
4. Otherwise, increment counter and allow request

### Example Response

```json
{
  "error": "Too many requests. Please try again later."
}
```

HTTP Status: **429 Too Many Requests**

## Payment Security

### Signature Verification

All Razorpay payments use **HMAC-SHA256 signature verification** to ensure the payment hasn't been tampered with:

```typescript
const expectedSignature = crypto
  .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
  .update(`${orderId}|${paymentId}`)
  .digest('hex')

if (expectedSignature !== signature) {
  return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 })
}
```

This prevents attackers from forging fake payment confirmations.

### PCI-DSS Compliance

By using Razorpay:
- ✓ No credit card data stored on our servers
- ✓ PCI-DSS Level 1 compliance
- ✓ Tokenized payment processing
- ✓ Secure card data handling

## API Key Security

### Environment Variables

**Server-Side Only (Never Exposed)**
```env
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx  # Secret key never sent to client
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxxx
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=xxxxx
```

**Client-Safe (Public Keys)**
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx  # Public key, safe to expose
NEXT_PUBLIC_SITE_URL=https://example.com
```

### Secret Key Usage

The `RAZORPAY_KEY_SECRET` is **only** used server-side in `/app/api/razorpay/verify/route.ts` to verify payment signatures.

**Never**:
- ❌ Log or expose in browser console
- ❌ Send to frontend
- ❌ Commit to git (`.env.local` in `.gitignore`)
- ❌ Share in error messages

## Google Sheets Service Account

### What It Is

A "bot" account that authenticates to Google Sheets API using JWT (JSON Web Token) instead of human login.

### Security Features

- ✓ Private key never transmitted
- ✓ JWT signed with HMAC
- ✓ Only has `spreadsheets` scope
- ✓ Can be rotated anytime

### Best Practices

1. **Minimize Permissions** - Service account should only have write access to the sheet it needs
2. **Share Spreadsheet Only** - Don't make it owner of the Google project
3. **Rotate Keys Periodically** - Create new keys, disable old ones
4. **Monitor Activity** - Check Google Cloud audit logs for unusual access

### Setup

If you need to create a new service account:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable "Google Sheets API"
4. Create Service Account (IAM > Service Accounts)
5. Create key (JSON format)
6. Share your Google Sheet with the service account email
7. Extract credentials and add to `.env.local`

## Input Validation

All API endpoints validate input:

```typescript
// Amount must be a positive number
if (typeof amount !== 'number' || amount <= 0) {
  return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
}

// Email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
}

// Phone number format
const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
if (!phoneRegex.test(phone)) {
  return NextResponse.json({ error: 'Invalid phone' }, { status: 400 })
}
```

## HTTPS & SSL/TLS

**Development**: HTTP allowed (localhost)
**Production**: HTTPS enforced (TLS 1.2+)

Vercel automatically provides:
- ✓ Auto-renewal SSL certificates
- ✓ HTTP/2 support
- ✓ DDoS protection

## Deployment Security

### Environment Variables on Vercel

1. Go to Project Settings → Environment Variables
2. Add secrets **without quotes**
3. Select which environments (Preview/Production)
4. Values are encrypted at rest
5. Only available to running server process

**Never commit `.env.local` to git** - it's in `.gitignore`

### Secrets Rotation

For production:
1. Create new API key in provider dashboard
2. Add new key to Vercel environment variables
3. Update running servers
4. Disable old key in provider dashboard
5. Remove from environment variables

## Monitoring & Logging

### What to Log

✓ Payment verification success/failure (without sensitive data)
✓ Booking submissions
✓ API errors with request context

### What NOT to Log

❌ Full payment signatures
❌ API secret keys
❌ Credit card tokens
❌ Passwords or private keys

### Example Safe Logging

```typescript
// Good - Non-sensitive data only
console.log(`Payment verified for ${email} - Course: ${courseName}`)
console.log('Order created:', orderId)

// Bad - Don't do this
console.log('Signature:', signature)
console.log('Secret:', process.env.RAZORPAY_KEY_SECRET)
```

## Future Enhancements

- [ ] Implement Redis-based rate limiting for production
- [ ] Add CORS restrictions to payment endpoints
- [ ] Implement request signing (both client and server)
- [ ] Add IP whitelisting for admin endpoints
- [ ] Implement 2FA for admin access
- [ ] Add Web Application Firewall (WAF) rules
- [ ] Setup security headers (CSP, X-Frame-Options, etc.)

## Security Incident Response

If you suspect a security breach:

1. **Immediately rotate** affected API keys
2. **Review audit logs** in Google Cloud & Razorpay
3. **Check for unauthorized transactions** in payment records
4. **Update environment variables** in deployment platform
5. **Contact support** of affected services

## Additional Resources

- [Razorpay Security Best Practices](https://razorpay.com/docs/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Next.js Security Recommendations](https://nextjs.org/docs/going-to-production/security)
