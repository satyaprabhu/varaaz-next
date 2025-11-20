# SGMA Typography System - Design Tokens & Guidelines

## Overview
This document defines the semantic typography system for the SGMA project. All typography uses semantic class names instead of arbitrary Tailwind sizes to ensure consistency, maintainability, and clear visual hierarchy.

**Maximum font size**: 48px (display-lg)
**Minimum recommended size**: 12px (caption-sm, for captions only)

---

## Typography Scale

### Display Sizes (Page-Level Headings)
Use sparingly. Maximum recommended per page: 1-2 instances.

| Token | Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|------|--------|-------------|-----------------|----------|
| `display-lg` | 48px | 900 | 1.1 | -0.02em | Extra large page title (hero section) |
| `display-md` | 40px | 900 | 1.15 | -0.02em | Large page title alternative |
| `display-sm` | 36px | 900 | 1.2 | -0.02em | Page title, large section header |

**Usage Examples:**
```html
<!-- Page Title -->
<h1 className="text-display-lg">About SGMA Studio</h1>

<!-- Large Section Header -->
<h2 className="text-display-sm">Our Courses</h2>

<!-- Alternative Title -->
<h1 className="text-display-md">Welcome</h1>
```

---

### Heading Sizes (Page Structure)
Define the visual hierarchy of page content.

| Token | Size | Weight | Line Height | Letter Spacing | Semantic Level |
|-------|------|--------|-------------|-----------------|----------------|
| `h1` | 32px | 900 | 1.3 | -0.01em | Primary heading |
| `h2` | 28px | 700 | 1.35 | -0.005em | Secondary heading |
| `h3` | 24px | 700 | 1.4 | 0 | Tertiary heading |
| `h4` | 20px | 700 | 1.4 | 0 | Minor heading |
| `h5` | 18px | 600 | 1.45 | 0 | Small heading |
| `h6` | 16px | 600 | 1.5 | 0 | Smallest heading |

**Usage Examples:**
```html
<!-- Page Main Title -->
<h1 className="text-h1 font-black">Sacred Geometry</h1>

<!-- Section Header -->
<h2 className="text-h2 font-bold">Course Offerings</h2>

<!-- Subsection -->
<h3 className="text-h3 font-bold">Vedic Fundamentals</h3>

<!-- Minor Heading -->
<h4 className="text-h4 font-bold">Learning Outcomes</h4>

<!-- Small Title -->
<h5 className="text-h5 font-semibold">Quick Facts</h5>

<!-- Smallest Title -->
<h6 className="text-h6 font-semibold">Additional Info</h6>
```

**Heading Hierarchy Example:**
```
h1: 32px ━━━━━━━━━━━━━━━━━━━━━━━━
h2: 28px ━━━━━━━━━━━━━━━━━━
h3: 24px ━━━━━━━━━━━━
h4: 20px ━━━━━━
h5: 18px ━━━
h6: 16px ━━
```

---

### Body Text Sizes
For main content and paragraphs.

| Token | Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|------|--------|-------------|-----------------|----------|
| `body-lg` | 18px | 400 | 1.75 | 0 | Large body text, introductions |
| `body-md` | 16px | 400 | 1.6 | 0 | Standard body text (most common) |
| `body-sm` | 14px | 400 | 1.5 | 0 | Small body text, secondary content |

**Usage Examples:**
```html
<!-- Standard Paragraph -->
<p className="text-body-md">
  Sacred Geometry Mandala Art is the exploration of universal patterns...
</p>

<!-- Larger Body Text (Introductions) -->
<p className="text-body-lg">
  Welcome to our comprehensive course on mandala creation.
</p>

<!-- Small Secondary Text -->
<p className="text-body-sm text-sgma-charcoal/70">
  Additional context or secondary information goes here.
</p>
```

**Line Height Reference:**
- body-lg: 18px × 1.75 = 31.5px line height (generous spacing)
- body-md: 16px × 1.6 = 25.6px line height (standard spacing)
- body-sm: 14px × 1.5 = 21px line height (compact spacing)

---

### UI Element Sizes (Labels, Buttons, Forms)
For interactive elements and form typography.

| Token | Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|------|--------|-------------|-----------------|----------|
| `ui-lg` | 16px | 600 | 1.5 | 0.02em | Large buttons, primary labels |
| `ui-md` | 14px | 600 | 1.5 | 0.01em | Form labels, standard UI text |
| `ui-sm` | 12px | 500 | 1.4 | 0.05em | Captions, badges, small labels |

**Usage Examples:**
```html
<!-- Primary Button -->
<button className="text-ui-lg font-semibold">
  Book a Session
</button>

<!-- Form Label -->
<label className="text-ui-md font-semibold">
  Your Name
</label>

<!-- Form Helper Text -->
<span className="text-ui-sm">without country code</span>

<!-- Badge or Tag -->
<span className="text-ui-sm font-medium">All Levels</span>
```

**Note:** Letter spacing increases as size decreases for better visual distinction of small text.

---

### Utility/Caption Sizes
For captions, footnotes, and metadata.

| Token | Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|------|--------|-------------|-----------------|----------|
| `caption` | 14px | 400 | 1.5 | 0 | Standard caption, description |
| `caption-sm` | 12px | 400 | 1.4 | 0 | Small caption, metadata |

**Usage Examples:**
```html
<!-- Image Caption -->
<figcaption className="text-caption text-sgma-charcoal/70">
  Figure 1: Sacred Geometry Pattern
</figcaption>

<!-- Metadata -->
<p className="text-caption-sm text-sgma-charcoal/60">
  Published on November 19, 2025
</p>
```

---

## Font Weights

| Class | Value | Use Case |
|-------|-------|----------|
| `font-light` | 300 | Rarely used, for subtle text |
| `font-normal` | 400 | Default, body text |
| `font-medium` | 500 | Slightly emphasized text |
| `font-semibold` | 600 | Labels, UI elements |
| `font-bold` | 700 | Headings (h2, h3, h4) |
| `font-black` | 900 | Headings (h1, display sizes) |

**Font Weight Scale (by hierarchy):**
```
Display:  900 (font-black)
H1:       900 (font-black)
H2-H4:    700 (font-bold)
H5-H6:    600 (font-semibold)
UI:       600 (font-semibold) for labels
          500 (font-medium) for small UI
Body:     400 (font-normal)
Caption:  400 (font-normal)
```

---

## Color + Typography Combinations

### Primary Text (sgma-charcoal: #283044)
- **Headings (all levels)**: Use with font-bold or font-black
- **Body text**: Use with font-normal
- **UI elements**: Use with font-semibold

```html
<h1 className="text-h1 font-black text-sgma-charcoal">Title</h1>
<p className="text-body-md font-normal text-sgma-charcoal">Body text</p>
```

### Secondary Text (sgma-charcoal/70 or /80)
- **Descriptions**: Use with text-body-sm or text-caption
- **Helper text**: Use with text-ui-sm
- **Metadata**: Use with text-caption-sm

```html
<p className="text-body-sm text-sgma-charcoal/70">Secondary info</p>
<span className="text-caption-sm text-sgma-charcoal/60">Meta info</span>
```

### Accent Text (sgma-cta: #2a4586)
- **Links**: Use with no specific weight override
- **Emphasis**: Use with font-bold
- **UI accent**: Use with appropriate font-weight

```html
<a href="#" className="text-sgma-cta text-body-md">Link</a>
<span className="text-sgma-cta font-semibold text-ui-md">Accent</span>
```

### White Text (on sgma-navy background)
- **Headings**: Use with font-black
- **Body**: Use with font-normal
- **Links**: Use with appropriate weight

```html
<h2 className="text-h2 font-black text-white">Heading</h2>
<p className="text-body-md text-white">Body on dark background</p>
```

---

## Component Usage Guide

### Header Component
```html
<!-- Logo -->
<span className="text-h4 font-bold">SGMA</span>

<!-- Navigation Links -->
<a className="text-body-md font-normal">Courses</a>
<a className="text-body-md font-normal">About</a>

<!-- CTA Button -->
<button className="text-ui-lg font-semibold">Book Session</button>
```

### CourseCard Component
```html
<!-- Badge -->
<span className="text-ui-sm font-medium">All Levels</span>

<!-- Title -->
<h3 className="text-h4 font-bold">Course Title</h3>

<!-- Description -->
<p className="text-body-sm text-sgma-charcoal/70">Course description</p>

<!-- Price -->
<p className="text-h5 font-bold text-sgma-navy">₹38,000</p>

<!-- Button -->
<button className="text-ui-lg font-semibold">Learn More</button>
```

### Form Component
```html
<!-- Label (required) -->
<label className="text-ui-md font-semibold">
  Your Name <span className="text-red-600">*</span>
</label>

<!-- Input -->
<input placeholder="John Doe" className="text-body-md" />

<!-- Helper Text -->
<span className="text-ui-sm text-sgma-charcoal/70">
  (without country code)
</span>

<!-- Error Message -->
<p className="text-ui-sm text-red-600">Please enter a valid email</p>

<!-- Submit Button -->
<button className="text-ui-lg font-semibold">Submit</button>
```

### TestimonialsSection
```html
<!-- Section Title -->
<h2 className="text-h2 font-black">From Blank Pages</h2>

<!-- Quote -->
<p className="text-body-md italic">"{quote}"</p>

<!-- Author Name -->
<p className="text-body-sm font-bold">Priya Sharma</p>

<!-- Author Details -->
<p className="text-ui-sm font-semibold text-sgma-charcoal/70">
  Art Therapist, Chennai
</p>
```

### Footer Component
```html
<!-- Section Heading -->
<h4 className="text-h5 font-bold text-white">Explore</h4>

<!-- Link -->
<a className="text-body-md text-white/80">Courses</a>

<!-- Copyright -->
<p className="text-body-sm text-white/70">© 2025 SGMA</p>
```

---

## Responsive Typography Strategy

### Mobile-First Approach
By default, use the semantic class name on mobile. Add responsive variants only when needed.

```html
<!-- No responsive change needed -->
<p className="text-body-md">Standard body text (same size on all devices)</p>

<!-- With responsive scaling (headings only) -->
<h1 className="text-h2 md:text-h1">Page Title</h1>

<!-- Form elements (no responsive change) -->
<label className="text-ui-md">Email Address</label>
```

### When to Use Responsive Variants
- **Headings**: Scale up on desktop (h3 → h2 for visual emphasis)
- **Body text**: Keep consistent (readability is more important than scaling)
- **UI elements**: Keep consistent (form usability is critical)

---

## Accessibility Guidelines

### Minimum Font Sizes
- **Body text**: minimum 14px (text-body-sm)
- **Form labels**: minimum 14px (text-ui-md)
- **Captions**: minimum 12px (text-caption-sm only for secondary info)

### WCAG Compliance
- All body text: ≥ 16px recommended (text-body-md)
- All headings: Clear visual distinction via size + weight
- Links: Minimum 16px (text-body-md) for click targets
- Error messages: Minimum 14px (text-ui-md, not smaller)

### Line Height
- Body text: ≥ 1.5x font size (already included in tokens)
- Headings: ≥ 1.2x font size (already included in tokens)
- Always maintain sufficient line height for readability

### Contrast
- Primary text on light backgrounds: ≥ 4.5:1 contrast ratio
- Use sgma-charcoal for best contrast on white backgrounds
- Use white for best contrast on sgma-navy backgrounds

---

## Common Patterns

### Page Title with Subtitle
```html
<div className="text-center">
  <h1 className="text-display-sm font-black mb-4">Main Title</h1>
  <p className="text-body-lg text-sgma-charcoal/80">Subtitle or description</p>
</div>
```

### Section Heading with Description
```html
<div>
  <h2 className="text-h2 font-bold mb-4">Section Title</h2>
  <p className="text-body-md text-sgma-charcoal/70">Description or context</p>
</div>
```

### Card with Hierarchy
```html
<div className="bg-white p-6 rounded-lg">
  <span className="text-ui-sm font-medium text-sgma-navy mb-2">Badge</span>
  <h3 className="text-h4 font-bold mb-3">Card Title</h3>
  <p className="text-body-sm text-sgma-charcoal/70 mb-4">Description</p>
  <a className="text-sgma-cta font-semibold">Learn More →</a>
</div>
```

### Button with Label
```html
<button className="bg-sgma-cta text-white px-6 py-3 rounded-lg">
  <span className="text-ui-lg font-semibold">Book Now</span>
</button>
```

### Form Field Group
```html
<div className="mb-6">
  <label className="text-ui-md font-semibold mb-2 block">
    Email <span className="text-red-600">*</span>
  </label>
  <input
    className="text-body-md w-full"
    placeholder="name@example.com"
  />
  <span className="text-ui-sm text-sgma-charcoal/70 mt-1 block">
    We'll never share your email
  </span>
</div>
```

---

## Migration Guide (From Old to New)

### Heading Changes
```html
<!-- OLD -->
<h1 className="text-4xl md:text-5xl font-black">Title</h1>

<!-- NEW -->
<h1 className="text-h1 font-black">Title</h1>
<!-- OR with responsive scaling -->
<h1 className="text-h2 md:text-h1 font-black">Title</h1>
```

### Body Text Changes
```html
<!-- OLD -->
<p className="text-base md:text-lg leading-relaxed">Paragraph</p>

<!-- NEW -->
<p className="text-body-md">Paragraph</p>
```

### Label Changes
```html
<!-- OLD -->
<label className="text-sm font-semibold">Label</label>

<!-- NEW -->
<label className="text-ui-md font-semibold">Label</label>
```

### Caption Changes
```html
<!-- OLD -->
<span className="text-xs text-gray-600">Caption</span>

<!-- NEW -->
<span className="text-caption-sm text-sgma-charcoal/60">Caption</span>
```

---

## Troubleshooting

### "Text looks too small"
- Check if using correct semantic token
- Verify minimum is text-caption-sm (12px)
- Add responsive scaling if needed: `md:text-body-md`

### "Headings don't look different enough"
- Ensure using correct h-level (h1 > h2 > h3, etc.)
- Verify font-weight is applied (font-black or font-bold)
- Check line-height is correct for size

### "Text is hard to read"
- Increase size to next level (text-body-sm → text-body-md)
- Increase line-height via wrapper div margin
- Ensure proper color contrast (use sgma-charcoal on light backgrounds)

### "Form is hard to use"
- Labels must be minimum text-ui-md (14px)
- Error messages must be minimum text-ui-sm (12px)
- Use high contrast colors for form text

---

## References

- **Tailwind CSS Documentation**: https://tailwindcss.com/docs/font-size
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Typography Best Practices**: https://www.smashingmagazine.com/2009/03/review-of-typography-books/

---

**Last Updated**: November 2025
**Version**: 1.0
**Maintained By**: Design & Frontend Team
