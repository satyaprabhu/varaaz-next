# Typography Migration Guide - From Arbitrary Sizes to Semantic System

## Overview
This guide maps all old arbitrary Tailwind font sizes to the new semantic typography system. Use this when migrating existing code.

---

## Quick Mapping Table

| Old Class | New Semantic | Size | Context | Priority |
|-----------|--------------|------|---------|----------|
| `text-xs` | `text-caption-sm` | 12px | Captions, small metadata only | High |
| `text-sm` | `text-ui-md` or `text-body-sm` | 14px | Form labels (ui-md) or small body (body-sm) | High |
| `text-base` | `text-body-md` | 16px | Standard body text, buttons | High |
| `text-lg` | `text-body-lg` or `text-ui-lg` | 18px | Larger body (body-lg) or buttons (ui-lg) | Medium |
| `text-xl` | `text-h4` or `text-h5` | 20px | Minor headings | Medium |
| `text-2xl` | `text-h3` | 24px | Subsection headings | High |
| `text-3xl` | `text-h2` | 28px | Section headings | High |
| `text-4xl` | `text-h1` or `text-display-sm` | 32-36px | Page titles, h1 | High |
| `text-5xl` | `text-display-md` | 40px | Large page titles | Medium |
| `text-6xl` | `text-display-lg` | 48px | Extra large page titles | Low |

---

## Detailed Migration by Component

### Home Page (`/app/page.tsx`)

#### Hero Section
```html
<!-- BEFORE -->
<h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
  Discover Sacred Patterns
</h1>

<!-- AFTER -->
<h1 className="text-h2 md:text-h1 font-black uppercase tracking-tight">
  Discover Sacred Patterns
</h1>
```

#### Hero Subtitle
```html
<!-- BEFORE -->
<p className="text-2xl md:text-3xl font-bold">
  Where ancient Vedic wisdom meets modern art
</p>

<!-- AFTER -->
<p className="text-h3 md:text-h2 font-bold">
  Where ancient Vedic wisdom meets modern art
</p>
```

#### Section Headings
```html
<!-- BEFORE -->
<h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
  Why Choose SGMA
</h2>

<!-- AFTER -->
<h2 className="text-h2 md:text-h1 font-black uppercase tracking-tight">
  Why Choose SGMA
</h2>
```

#### Card Titles
```html
<!-- BEFORE -->
<h3 className="text-2xl font-bold">
  Pain Points We Solve
</h3>

<!-- AFTER -->
<h3 className="text-h3 font-bold">
  Pain Points We Solve
</h3>
```

#### Body Text
```html
<!-- BEFORE -->
<p className="text-lg leading-relaxed">
  Learn from experienced practitioners...
</p>

<!-- AFTER -->
<p className="text-body-lg leading-relaxed">
  Learn from experienced practitioners...
</p>
```

#### Stats Numbers
```html
<!-- BEFORE -->
<p className="text-4xl font-black text-sgma-cta">500+</p>

<!-- AFTER -->
<p className="text-display-sm font-black text-sgma-cta">500+</p>
```

#### Small Text
```html
<!-- BEFORE -->
<p className="text-xs text-sgma-charcoal/70">Featured Artist</p>

<!-- AFTER -->
<p className="text-caption-sm text-sgma-charcoal/70">Featured Artist</p>
```

---

### About Page (`/app/about/page.tsx`)

#### Page Title
```html
<!-- BEFORE -->
<h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">
  About SGMA Studio
</h1>

<!-- AFTER -->
<h1 className="text-display-md md:text-display-lg font-black mb-4 uppercase">
  About SGMA Studio
</h1>
```

#### Subtitle
```html
<!-- BEFORE -->
<p className="text-lg md:text-xl font-light leading-relaxed">
  Where ancient wisdom meets contemporary art
</p>

<!-- AFTER -->
<p className="text-body-lg md:text-h5 font-light leading-relaxed">
  Where ancient wisdom meets contemporary art
</p>
```

#### Team Section Title
```html
<!-- BEFORE -->
<h2 className="text-2xl md:text-3xl font-black uppercase">
  Meet Our Team
</h2>

<!-- AFTER -->
<h2 className="text-h3 md:text-h2 font-black uppercase">
  Meet Our Team
</h2>
```

#### Team Member Name
```html
<!-- BEFORE -->
<p className="text-2xl md:text-3xl font-black">Varalakshmi</p>

<!-- AFTER -->
<p className="text-h3 md:text-h2 font-black">Varalakshmi</p>
```

#### Team Member Title
```html
<!-- BEFORE -->
<p className="text-lg font-bold text-sgma-cta">Founder & Lead Instructor</p>

<!-- AFTER -->
<p className="text-h5 font-bold text-sgma-cta">Founder & Lead Instructor</p>
```

#### Team Member Role
```html
<!-- BEFORE -->
<p className="text-sm font-semibold text-sgma-navy">Vedic Scholar</p>

<!-- AFTER -->
<p className="text-ui-md font-semibold text-sgma-navy">Vedic Scholar</p>
```

---

### Courses Page (`/app/(pages)/courses/page.tsx`)

#### Page Title
```html
<!-- BEFORE -->
<h1 className="text-5xl md:text-6xl font-black uppercase">
  Our Courses
</h1>

<!-- AFTER -->
<h1 className="text-display-md md:text-display-lg font-black uppercase">
  Our Courses
</h1>
```

#### Course Title in Grid
```html
<!-- BEFORE -->
<h2 className="text-2xl md:text-4xl font-black uppercase">
  Vedic Science Fundamentals
</h2>

<!-- AFTER -->
<h2 className="text-h3 md:text-h1 font-black uppercase">
  Vedic Science Fundamentals
</h2>
```

#### Course Subtitle
```html
<!-- BEFORE -->
<p className="text-xl text-sgma-navy font-bold">
  Master the Sacred Numbers
</p>

<!-- AFTER -->
<p className="text-h4 text-sgma-navy font-bold">
  Master the Sacred Numbers
</p>
```

#### Course Content
```html
<!-- BEFORE -->
<p className="text-lg leading-relaxed">
  Learn the ancient Vedic principles...
</p>

<!-- AFTER -->
<p className="text-body-lg leading-relaxed">
  Learn the ancient Vedic principles...
</p>
```

#### Table Headers
```html
<!-- BEFORE -->
<th className="text-sm font-black uppercase">Course Name</th>

<!-- AFTER -->
<th className="text-ui-md font-black uppercase">Course Name</th>
```

---

### Bookings Page (`/app/bookings/page.tsx`)

#### Page Title
```html
<!-- BEFORE -->
<h1 className="text-3xl md:text-4xl font-black uppercase">
  Book a Session
</h1>

<!-- AFTER -->
<h1 className="text-h2 md:text-h1 font-black uppercase">
  Book a Session
</h1>
```

#### Form Label
```html
<!-- BEFORE -->
<label className="text-sm font-semibold">Your Name *</label>

<!-- AFTER -->
<label className="text-ui-md font-semibold">Your Name *</label>
```

#### Form Input Text (inherited from parent)
```html
<!-- BEFORE -->
<input className="text-sm" placeholder="John Doe" />

<!-- AFTER -->
<input className="text-body-md" placeholder="John Doe" />
```

#### Helper Text
```html
<!-- BEFORE -->
<span className="text-xs font-normal">without country code</span>

<!-- AFTER -->
<span className="text-ui-sm font-normal">without country code</span>
```

#### Error Message
```html
<!-- BEFORE -->
<p className="text-xs text-red-600">Please enter valid email</p>

<!-- AFTER -->
<p className="text-ui-sm text-red-600">Please enter valid email</p>
```

#### Section Heading
```html
<!-- BEFORE -->
<h2 className="text-2xl font-bold uppercase">Upcoming Workshops</h2>

<!-- AFTER -->
<h2 className="text-h3 font-bold uppercase">Upcoming Workshops</h2>
```

---

### Contact Page (`/app/contact/page.tsx`)

#### Page Title
```html
<!-- BEFORE -->
<h1 className="text-5xl md:text-6xl font-black uppercase">
  Get In Touch
</h1>

<!-- AFTER -->
<h1 className="text-display-md md:text-display-lg font-black uppercase">
  Get In Touch
</h1>
```

#### Form Label
```html
<!-- BEFORE -->
<label className="text-sm font-semibold">Email Address *</label>

<!-- AFTER -->
<label className="text-ui-md font-semibold">Email Address *</label>
```

#### FAQ Heading
```html
<!-- BEFORE -->
<h2 className="text-4xl md:text-5xl font-black uppercase">
  Frequently Asked Questions
</h2>

<!-- AFTER -->
<h2 className="text-h1 md:text-display-sm font-black uppercase">
  Frequently Asked Questions
</h2>
```

#### FAQ Question
```html
<!-- BEFORE -->
<h3 className="text-lg font-bold uppercase">
  Do I need prior art experience?
</h3>

<!-- AFTER -->
<h3 className="text-h5 font-bold uppercase">
  Do I need prior art experience?
</h3>
```

#### FAQ Answer
```html
<!-- BEFORE -->
<p className="text-sgma-charcoal leading-relaxed">No prior experience...</p>

<!-- AFTER -->
<p className="text-body-md text-sgma-charcoal leading-relaxed">No prior experience...</p>
```

---

### Components

#### CourseCard Component
```html
<!-- BEFORE -->
<h3 className="text-xl font-bold">{course.title}</h3>
<p className="text-sm text-sgma-charcoal/70">{course.description}</p>
<p className="text-2xl font-bold text-sgma-navy">₹{course.price}</p>
<p className="text-xs text-sgma-charcoal/60">One-time payment</p>

<!-- AFTER -->
<h3 className="text-h4 font-bold">{course.title}</h3>
<p className="text-body-sm text-sgma-charcoal/70">{course.description}</p>
<p className="text-h3 font-bold text-sgma-navy">₹{course.price}</p>
<p className="text-caption-sm text-sgma-charcoal/60">One-time payment</p>
```

#### Header Component
```html
<!-- BEFORE -->
<h3 className="text-lg font-bold">SGMA</h3>
<a className="text-sgma-charcoal">Courses</a>
<button className="text-base font-semibold">Book Session</button>

<!-- AFTER -->
<h3 className="text-h4 font-bold">SGMA</h3>
<a className="text-body-md">Courses</a>
<button className="text-ui-lg font-semibold">Book Session</button>
```

#### Footer Component
```html
<!-- BEFORE -->
<h4 className="text-xl font-bold text-white">Explore</h4>
<a className="text-base text-white/80">Courses</a>
<p className="text-base text-white/60">© 2025 SGMA</p>

<!-- AFTER -->
<h4 className="text-h5 font-bold text-white">Explore</h4>
<a className="text-body-md text-white/80">Courses</a>
<p className="text-body-md text-white/60">© 2025 SGMA</p>
```

#### TestimonialsSection
```html
<!-- BEFORE -->
<p className="text-sgma-charcoal italic">"{testimonial.quote}"</p>
<p className="text-sm font-bold">{testimonial.author}</p>
<p className="text-xs text-sgma-charcoal/60 uppercase">{testimonial.title}</p>

<!-- AFTER -->
<p className="text-body-md italic">"{testimonial.quote}"</p>
<p className="text-body-sm font-bold">{testimonial.author}</p>
<p className="text-ui-sm text-sgma-charcoal/60 uppercase">{testimonial.title}</p>
```

#### TeamSection
```html
<!-- BEFORE -->
<p className="text-2xl md:text-3xl font-black">{member.name}</p>
<p className="text-lg font-bold text-sgma-cta">{member.title}</p>
<p className="text-sm font-semibold text-sgma-navy">{member.role}</p>
<p className="text-base leading-relaxed">{member.bio}</p>

<!-- AFTER -->
<p className="text-h3 md:text-h2 font-black">{member.name}</p>
<p className="text-h5 font-bold text-sgma-cta">{member.title}</p>
<p className="text-ui-md font-semibold text-sgma-navy">{member.role}</p>
<p className="text-body-md leading-relaxed">{member.bio}</p>
```

#### BookingWidget
```html
<!-- BEFORE -->
<h3 className="text-sm font-bold">Course Details & Pricing</h3>
<span className="text-xs text-red-600">Please enter a valid phone</span>
<button className="font-semibold">Submit</button>

<!-- AFTER -->
<h3 className="text-h6 font-bold">Course Details & Pricing</h3>
<span className="text-ui-sm text-red-600">Please enter a valid phone</span>
<button className="text-ui-lg font-semibold">Submit</button>
```

---

## Migration Checklist

Use this to track migration progress:

### Pages
- [ ] Home page
- [ ] About page
- [ ] Courses page
- [ ] Bookings page
- [ ] Contact page
- [ ] Collection page
- [ ] Privacy Policy page

### Components
- [ ] Header
- [ ] Footer
- [ ] CourseCard
- [ ] BookingWidget
- [ ] TestimonialsSection
- [ ] TeamSection
- [ ] PortfolioGrid
- [ ] CoursesClient
- [ ] ImageCarousel
- [ ] ScrollToTop

### Global Verification
- [ ] No text-xs used (except captions)
- [ ] No text-sm used (use ui-md or body-sm)
- [ ] No arbitrary text-lg, text-xl, etc.
- [ ] All headings have proper font-weight
- [ ] All colors use sgma-* palette
- [ ] Form elements follow form pattern
- [ ] Responsive scaling only for headings
- [ ] Line heights are appropriate

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Mixing Old and New
```html
<!-- WRONG -->
<h1 className="text-4xl font-black">Title</h1>

<!-- RIGHT -->
<h1 className="text-h1 font-black">Title</h1>
```

### ❌ Mistake 2: Using text-sm for everything
```html
<!-- WRONG -->
<label className="text-sm">Label</label>
<p className="text-sm">Body text</p>

<!-- RIGHT -->
<label className="text-ui-md">Label</label>
<p className="text-body-md">Body text</p>
```

### ❌ Mistake 3: Forgetting font-weight for headings
```html
<!-- WRONG -->
<h1 className="text-h1">Title</h1>

<!-- RIGHT -->
<h1 className="text-h1 font-black">Title</h1>
```

### ❌ Mistake 4: Using arbitrary colors
```html
<!-- WRONG -->
<p className="text-gray-700">Text</p>

<!-- RIGHT -->
<p className="text-sgma-charcoal">Text</p>
```

### ❌ Mistake 5: Adding responsive scaling to body
```html
<!-- WRONG -->
<p className="text-base md:text-lg">Body text</p>

<!-- RIGHT -->
<p className="text-body-md">Body text</p>
```

---

## Questions?

See `TYPOGRAPHY_SYSTEM.md` for complete reference
See `TYPOGRAPHY_QUICK_REFERENCE.md` for quick lookup
Ask the frontend team for help!
