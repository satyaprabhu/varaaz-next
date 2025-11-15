# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Lint code (Next.js built-in linting)
npm run lint
```

## High-Level Architecture

This is a **markdown-driven, full-stack Next.js 16 platform** for artist course booking, payment processing, and portfolio presentation.

### Core Design Pattern: Content-as-Data + Headless Backend

```
┌──────────────────────────┐
│   Next.js App Router     │
│  (Pages + Components)    │
└────────────┬─────────────┘
             │
    ┌────────┴────────┐
    │                 │
┌───▼────────┐  ┌─────▼──────────┐
│  Markdown  │  │   API Routes   │
│ /content   │  │  (TypeScript)  │
└────────────┘  └────────┬───────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
    ┌────▼────┐    ┌─────▼─────┐    ┌─────▼────┐
    │ Razorpay │   │   Google   │    │ Calendly │
    │ Payments │   │  Sheets DB │    │Scheduling│
    └──────────┘   └────────────┘    └──────────┘
```

### Content as Data (Markdown-Driven)

- All course, page, and session content lives in `/content` as markdown files with YAML frontmatter
- `lib/posts.ts` provides `getPost()` and `getPosts()` utilities for parsing and retrieving content
- This eliminates the need for a traditional database for static content
- Content updates don't require code changes or redeployment (static content only)

**File Structure:**
- `content/courses/*.md` - Course definitions (slug, title, price, duration, level, content)
- `content/pages/*.md` - Static pages (home.md, about.md, courses.md)
- `content/sessions/*.md` - Session/workshop offerings

**Frontmatter Schema (Course Example):**
```yaml
---
slug: unique-identifier
title: Display Title
description: Short description
price: 4999
duration: 8 weeks
level: All levels
---
```

### Server-Side API Routes (Backend)

Located in `app/api/`:

**Payment Processing:**
- `POST /api/razorpay/create-order` - Creates Razorpay order, returns orderId
- `POST /api/razorpay/verify` - Verifies HMAC-SHA256 signature, logs payment to Google Sheets

**Booking & Contact:**
- `POST /api/book` - Saves booking requests from BookingWidget (form fallback)
- `POST /api/contact` - Handles contact form submissions

**Key Pattern:** All endpoints write to Google Sheets for record-keeping.

### Data Storage: Google Sheets

- Service account (JWT-based) authentication defined in environment variables
- `lib/google-sheets.ts` provides wrapper utilities for read/write operations
- Sheets act as the "database" for:
  - Payment records (orderId, amount, signature, timestamp)
  - Booking submissions (name, email, date, time, topic)
  - Contact form entries

**Setup Required:**
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxxx@yyyyy.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1abc2def3ghi4jkl...
```

### Component Architecture

**Layout & Navigation:**
- `components/Header.tsx` - Navigation (About, Courses, Collection, Book, Contact)
- `components/Footer.tsx` - Footer with links/info
- `app/layout.tsx` - Root layout wrapping all pages

**Page-Specific Components:**
- `app/page.tsx` - Home (hero + portfolio grid + testimonials)
- `app/(pages)/courses/page.tsx` - Course listing with CourseCard components
- `app/(pages)/bookings/page.tsx` - Calendly embed with fallback BookingWidget form
- `app/(pages)/about/page.tsx` - About page content
- `app/(pages)/collection/page.tsx` - Portfolio/gallery showcase
- `app/(pages)/contact/page.tsx` - Contact form

**Reusable Components:**
- `CourseCard.tsx` - Individual course card (displays course metadata + image)
- `BookingWidget.tsx` - Booking form with Calendly embed fallback
- `PortfolioGrid.tsx` - Gallery grid for portfolio items
- `CoursesClient.tsx` - Client-side courses container (handles course data fetching)
- `TestimonialsSection.tsx` - Testimonials display

### Payment Flow (Razorpay Integration)

1. **Order Creation** (`create-order` endpoint):
   - Accepts: courseId, courseName, amount, email, name
   - Calls Razorpay API with Key ID and Secret
   - Returns: orderId to client

2. **Checkout** (Client-side):
   - Displays Razorpay modal with orderId
   - User completes payment

3. **Verification** (`verify` endpoint):
   - Receives: orderId, paymentId, signature
   - Verifies HMAC-SHA256(orderId + "|" + paymentId, keySecret) against signature
   - On success: logs payment to Google Sheets with timestamp

**Security Note:** Signature verification is critical. Never trust client-side payment data.

### Booking Flow

1. **Calendly Primary:** If `NEXT_PUBLIC_CALENDLY_PATH` is set, embed Calendly widget
2. **Fallback Form:** If Calendly unavailable, show BookingWidget form
3. **Form Submission:** Sends data to `/api/book` endpoint
4. **Google Sheets Record:** Booking is logged with timestamp

### Styling Architecture

- **Tailwind CSS 3.3** with custom theme in `tailwind.config.ts`
- Custom colors: `varaaz-primary` (purple), `varaaz-dark` (dark gray)
- Responsive breakpoints: mobile-first with `md:` and `lg:` prefixes
- Global styles in `app/globals.css`

### TypeScript Configuration

- **Strict mode enabled** - Full type safety
- **Path alias:** `@/*` maps to root directory for clean imports
- **Module resolution:** bundler strategy for Next.js
- **JSX:** React 18 automatic import (no explicit React import needed)

## Important Development Patterns

### Adding New Content (Courses, Pages, Sessions)

1. Create markdown file in appropriate `/content` subdirectory
2. Include YAML frontmatter with required metadata
3. No code changes or deployments needed for content updates
4. Markdown is automatically parsed and rendered by `getPost()` / `getPosts()`

### Adding New API Endpoints

1. Create route handler in `app/api/[feature]/route.ts`
2. Export async functions: `GET`, `POST`, `PUT`, `DELETE` as needed
3. Use Google Sheets for data persistence (see `lib/google-sheets.ts`)
4. Include proper error handling and validation
5. Return JSON responses with appropriate HTTP status codes

### Adding New Pages

1. Create file in `app/(pages)/[page-name]/page.tsx`
2. Use Server Components by default (faster, better SEO)
3. Fetch content via `getPost()` if markdown-driven
4. Wrap interactive elements with `'use client'` directive if needed
5. Follow existing layout patterns (Header + content + Footer)

### Client Component Convention

Use `'use client'` directive at the top of files that require client-side features:
- Form handling and validation
- State management (useState, useContext)
- Event listeners and interactivity
- Browser APIs (localStorage, window, etc.)

Example: `BookingWidget.tsx`, `CoursesClient.tsx`

## Environment Variables

Create `.env.local` from `.env.local.example`:

```env
# Razorpay (Test Mode)
RAZORPAY_KEY_ID=your_test_key_id
RAZORPAY_KEY_SECRET=your_test_key_secret

# Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxxx@yyyyy.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1abc2def3ghi4jkl...

# Calendly (Optional)
NEXT_PUBLIC_CALENDLY_PATH=username/calendar-name
```

## Common Development Tasks

### Testing Payment Flow
- Use Razorpay test credentials (switch to Test Mode in Razorpay dashboard)
- Test card: 4111 1111 1111 1111, any future expiry, any CVV
- Verify signature verification logic handles edge cases

### Debugging Google Sheets Issues
- Verify service account email has sheet access (check collaborators)
- Ensure private key newlines are preserved as `\n` in environment variable
- Check sheet column structure matches API expectations

### Adding a New Course
1. Create `content/courses/your-course.md` with frontmatter
2. Verify slug matches URL expectations
3. Course automatically appears in `courses/` page via `getPosts()`
4. CourseCard component renders course data consistently

### Modifying Navigation
- Edit `components/Header.tsx` to add/remove menu items
- Update route names in `(pages)/` directory structure as needed
- Header follows link-based navigation pattern

## Architecture-Specific Notes

### Why Markdown for Content?
- Fast iteration: update content without rebuilding
- Version-controlled: content changes tracked in git
- No database overhead for static content
- Easy content migration (markdown is portable)
- Supports semantic HTML rendering with `marked` library

### Why Google Sheets for Data?
- Cost-effective: no database hosting required
- Accessible: team can view/edit records directly in Sheets
- Automatic backups: Google handles data redundancy
- Real-time syncing: changes visible immediately
- No SQL complexity: simple row-based records

### Why Razorpay?
- PCI-DSS compliant: reduces security burden
- HMAC signature verification: cryptographically secure payments
- Test mode: easy development without real charges
- Webhook support: can implement additional validation if needed

## Deployment Considerations

- **Build Process:** `npm run build` creates optimized static export with server functions
- **Environment Variables:** Set in Vercel/hosting platform dashboard (never commit `.env.local`)
- **Database:** Google Sheets persists across deployments (no migration needed)
- **Content Updates:** Static content updates require rebuild; consider CDN edge caching
- **Payment Keys:** Use production Razorpay keys in production (never commit keys)

## Performance Optimization Points

1. **Image Optimization:** Use Next.js `Image` component for responsive serving
2. **Code Splitting:** Route-based code splitting happens automatically
3. **Server Components:** Leverage for reduced JavaScript bundle size
4. **Markdown Caching:** `getPosts()` results can be cached with `unstable_cache()`
5. **CSS Purging:** Tailwind automatically purges unused styles in production

## Extension Points

These integrations are already set up for future expansion:
- **Email Notifications:** Add SendGrid/Mailgun to API routes
- **User Authentication:** Integrate NextAuth.js for course access control
- **Admin Dashboard:** Build content management UI using existing API patterns
- **Webhooks:** Razorpay and Google Sheets support event-driven workflows
- **Analytics:** Add Plausible/Fathom to track user engagement
- **Video Hosting:** Embed Vimeo/YouTube in course markdown files
- **Blog:** Create `content/blog/*.md` and follow same markdown pattern
