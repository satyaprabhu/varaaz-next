# SGMA Typography Guide
## Compact System • 9 Semantic Tokens • Production-Ready

---

## The 9 Tokens (Complete System)

### Display (Marketing Headings)
```
display     → 48px  • Hero/primary marketing headline (use sparingly)
display-sm  → 36px  • Secondary hero/prominent page title
```

### Headings (Page Structure)
```
h1  → 32px  • Page title
h2  → 28px  • Section title
h3  → 24px  • Subsection/card title
h4  → 20px  • Minor headings/component titles
```

### Body (Content)
```
body-lg → 18px  • Emphasized body/important paragraphs
body    → 16px  • Default body text ← USE THIS BY DEFAULT
```

### UI (Labels & Forms)
```
caption → 14px  • Labels, form text, helper text ← MINIMUM for UI
```

**Rule:** No 12px. Ever. Except for rare secondary metadata (timestamps, microlabels). Minimum for anything actionable is 14px.

---

## Quick Usage

### Pages
```html
<!-- Hero/Marketing title -->
<h1 className="text-display font-black">Hero Title</h1>

<!-- Page title -->
<h1 className="text-h1 font-black">Page Title</h1>

<!-- Section -->
<h2 className="text-h2 font-bold">Section</h2>

<!-- Subsection -->
<h3 className="text-h3 font-bold">Subsection</h3>

<!-- Default body text (most common) -->
<p className="text-body">Your paragraph here</p>

<!-- Important paragraph -->
<p className="text-body-lg">Important intro text</p>
```

### Forms
```html
<!-- Form label -->
<label className="text-caption font-medium">Email Address</label>

<!-- Form input -->
<input className="text-body" placeholder="name@example.com" />

<!-- Helper text -->
<span className="text-caption">We'll never share your email</span>

<!-- Error message -->
<p className="text-caption text-red-600">Invalid email</p>

<!-- Button -->
<button className="text-caption font-semibold">Submit</button>
```

### Cards
```html
<!-- Card title -->
<h3 className="text-h3 font-bold">Card Title</h3>

<!-- Card description -->
<p className="text-body">Description text</p>

<!-- Card metadata -->
<span className="text-caption">Jan 15, 2025</span>
```

### Components
```html
<!-- Testimonial quote -->
<p className="text-body italic">"Quote text here"</p>

<!-- Testimonial author -->
<p className="text-caption font-medium">Author Name</p>

<!-- Footer link -->
<a className="text-caption">Link Text</a>
```

---

## Font Weights

```
Headings    → font-black (900) for display/h1
            → font-bold (700) for h2-h4
Labels      → font-medium (500) or font-semibold (600)
Body        → font-normal (400) [default]
```

**No light weights for body.** Use font-normal only.

---

## Colors (Always Use These)

```
Primary     → text-sgma-charcoal  (headings, body)
Secondary   → text-sgma-charcoal/70 (descriptions)
Light       → text-sgma-charcoal/60 (metadata)
Accent      → text-sgma-cta (links, emphasis)
White       → text-white (on dark backgrounds)
```

Never use gray, gray-700, or arbitrary colors. Use only sgma-* palette.

---

## Common Patterns

### Hero Section
```html
<div>
  <h1 className="text-display font-black mb-4">Main Title</h1>
  <p className="text-body-lg">Subtitle or description</p>
</div>
```

### Section with Heading
```html
<section>
  <h2 className="text-h2 font-bold mb-4">Section Title</h2>
  <p className="text-body">Description or introduction</p>
</section>
```

### Card
```html
<div className="bg-white p-6 rounded-lg">
  <h3 className="text-h3 font-bold mb-2">Title</h3>
  <p className="text-body mb-4">Description</p>
  <a className="text-sgma-cta font-medium">Learn More →</a>
</div>
```

### Form Group
```html
<div className="mb-6">
  <label className="text-caption font-medium block mb-2">
    Email Address
  </label>
  <input className="text-body w-full" />
  <span className="text-caption text-sgma-charcoal/70 mt-1 block">
    Optional helper text
  </span>
</div>
```

### Button
```html
<button className="bg-sgma-cta text-white px-6 py-3 rounded-lg">
  <span className="text-caption font-semibold">Click Me</span>
</button>
```

---

## ✅ DO THIS

```html
<!-- Marketing headline -->
<h1 className="text-display font-black">Hero Title</h1>

<!-- Page title -->
<h1 className="text-h1 font-black">Page Title</h1>

<!-- Section -->
<h2 className="text-h2 font-bold">Section</h2>

<!-- Subsection -->
<h3 className="text-h3 font-bold">Subsection</h3>

<!-- Default body -->
<p className="text-body">Paragraph</p>

<!-- Important body -->
<p className="text-body-lg">Important text</p>

<!-- Form label -->
<label className="text-caption font-medium">Label</label>

<!-- Form input -->
<input className="text-body" />

<!-- Helper text -->
<span className="text-caption">Helper</span>

<!-- Use sgma colors -->
<p className="text-sgma-charcoal">Text</p>
```

---

## ❌ NEVER DO THIS

```html
<!-- Don't use arbitrary sizes -->
<h1 className="text-4xl font-black">Wrong</h1>

<!-- Don't use text-sm for anything important -->
<label className="text-sm">Wrong</label>

<!-- Don't use text-xs -->
<p className="text-xs">Wrong</p>

<!-- Don't use gray colors -->
<p className="text-gray-700">Wrong</p>

<!-- Don't forget font-weight on headings -->
<h1 className="text-h1">Wrong (missing font-black)</h1>

<!-- Don't mix old + new system -->
<h2 className="text-2xl md:text-3xl">Wrong</h2>

<!-- Don't use 12px for buttons/labels -->
<button className="text-xs">Wrong</button>

<!-- Don't use arbitrary responsive scaling -->
<p className="text-base md:text-lg">Wrong (body doesn't need scaling)</p>
```

---

## Responsive Strategy

**Only scale headings. Body text stays same size on all devices.**

```html
<!-- Heading with scaling -->
<h1 className="text-h2 md:text-h1">Title</h1>

<!-- Body text - NO scaling -->
<p className="text-body">Paragraph (same size mobile & desktop)</p>

<!-- Form elements - NO scaling -->
<label className="text-caption">Label (same size everywhere)</label>
```

**Why:** Readability matters more than visual scaling for body text.

---

## Size Ladder (Visual Reference)

```
display    ███████████████████████████████ (48px)
display-sm ██████████████████ (36px)
h1         ████████████████ (32px)
h2         ██████████████ (28px)
h3         ████████████ (24px)
h4         ██████████ (20px)
body-lg    █████████ (18px)
body       ████████ (16px) ← DEFAULT
caption    ███████ (14px) ← MINIMUM for UI
```

---

## Checklist Before Shipping

- [ ] All headings use h1-h4 or display classes
- [ ] All body text uses `text-body` or `text-body-lg`
- [ ] All labels/form text use `text-caption`
- [ ] No arbitrary text-sm, text-lg, text-xl, text-xs used
- [ ] Font-weight on headings (font-black or font-bold)
- [ ] Font-weight on labels (font-medium or font-semibold)
- [ ] No 12px anywhere except rare metadata
- [ ] Colors use only sgma-* palette
- [ ] Forms are readable and accessible
- [ ] Mobile looks good (tested on actual device)

---

## Configuration

**File:** `tailwind.config.ts` (fontSize section)

9 tokens defined with built-in:
- Line heights (optimized per size)
- Letter spacing (for legibility)
- Font weight recommendations

---

## One Rule to Remember

**If you're uncertain about the size, use `text-body` (16px).**

It's the default for a reason.

---

**That's it. Simple. Pragmatic. Done.**
