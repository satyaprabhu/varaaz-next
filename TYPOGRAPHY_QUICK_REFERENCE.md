# Typography Quick Reference Card

## Use This Cheat Sheet for Consistent Typography

---

## 🎯 Quick Decision Tree

```
What am I styling?

├── Page Title (Hero) → text-display-sm or text-display-md
├── Section Header → text-h2
├── Subsection → text-h3
├── Minor Heading → text-h4
├── Regular Paragraph → text-body-md (DEFAULT)
├── Small Paragraph → text-body-sm
├── Form Label → text-ui-md
├── Form Input → text-body-md (same as body)
├── Form Helper → text-ui-sm
├── Error Message → text-ui-sm (minimum, not smaller!)
├── Button → text-ui-lg
├── Badge/Tag → text-ui-sm
├── Caption → text-caption
└── Tiny Caption → text-caption-sm
```

---

## Font Sizes at a Glance

```
Display  │ display-lg (48px) ███████████████████████████████ [MAX]
         │ display-md (40px) ██████████████████████
         │ display-sm (36px) █████████████████
         │
Heading  │ h1 (32px) ████████████████
         │ h2 (28px) ██████████████
         │ h3 (24px) ████████████
         │ h4 (20px) ██████████
         │ h5 (18px) █████████
         │ h6 (16px) ████████
         │
Body     │ body-lg (18px) █████████
         │ body-md (16px) ████████ [MOST COMMON]
         │ body-sm (14px) ███████
         │
UI       │ ui-lg (16px) ████████
         │ ui-md (14px) ███████
         │ ui-sm (12px) ██████
         │
Caption  │ caption (14px) ███████
         │ caption-sm (12px) ██████ [MINIMUM]
```

---

## Common Use Cases

### Pages
```html
<!-- Page Title -->
<h1 className="text-display-sm font-black">Get In Touch</h1>

<!-- With responsive scaling -->
<h1 className="text-h2 md:text-h1 font-black">About SGMA</h1>

<!-- Section -->
<h2 className="text-h2 font-bold">Our Courses</h2>

<!-- Subsection -->
<h3 className="text-h3 font-bold">Vedic Fundamentals</h3>
```

### Forms
```html
<!-- Label -->
<label className="text-ui-md font-semibold">Email *</label>

<!-- Input -->
<input className="text-body-md" />

<!-- Helper -->
<span className="text-ui-sm">example@test.com</span>

<!-- Error -->
<p className="text-ui-sm text-red-600">Invalid email</p>

<!-- Button -->
<button className="text-ui-lg font-semibold">Submit</button>
```

### Cards
```html
<!-- Badge -->
<span className="text-ui-sm font-medium">All Levels</span>

<!-- Title -->
<h3 className="text-h4 font-bold">Card Title</h3>

<!-- Description -->
<p className="text-body-sm">Description text</p>

<!-- Price -->
<p className="text-h5 font-bold">₹38,000</p>
```

### Testimonials
```html
<!-- Quote -->
<p className="text-body-md italic">"Amazing course..."</p>

<!-- Author -->
<p className="text-body-sm font-bold">John Doe</p>

<!-- Title -->
<p className="text-ui-sm">Graphic Designer</p>
```

### Footer
```html
<!-- Heading -->
<h4 className="text-h5 font-bold text-white">Explore</h4>

<!-- Link -->
<a className="text-body-md text-white/80">Courses</a>

<!-- Copyright -->
<p className="text-body-sm text-white/70">© 2025 SGMA</p>
```

---

## Font Weights

```
Headings → font-black (900) or font-bold (700)
Labels   → font-semibold (600)
Body     → font-normal (400) [DEFAULT]
UI       → font-semibold (600)
Caption  → font-normal (400)

Rule: Bigger headings = font-black, smaller headings = font-bold
```

---

## Colors (Always Use These!)

```
Primary Text    → text-sgma-charcoal (headings, body)
Secondary Text  → text-sgma-charcoal/70 (descriptions)
Light Text      → text-sgma-charcoal/60 (metadata)
Accent Text     → text-sgma-cta (links, emphasis)
White Text      → text-white (on dark backgrounds)
```

---

## NEVER DO THIS ❌

```html
<!-- DON'T: Mix old and new system -->
<h1 className="text-5xl font-black">Title</h1> ❌

<!-- DON'T: Use arbitrary sizes -->
<p className="text-lg">Paragraph</p> ❌

<!-- DON'T: Forget font-weight -->
<h1 className="text-h1">Title</h1> ❌

<!-- DON'T: Use text-xs without good reason -->
<p className="text-xs">Important text</p> ❌

<!-- DON'T: Skip semantic colors -->
<span className="text-gray-700">Text</span> ❌
```

---

## DO THIS INSTEAD ✅

```html
<!-- DO: Use semantic class -->
<h1 className="text-display-sm font-black">Title</h1> ✅

<!-- DO: Use body-md as default -->
<p className="text-body-md">Paragraph</p> ✅

<!-- DO: Always pair with weight -->
<h1 className="text-h1 font-black">Title</h1> ✅

<!-- DO: Use caption-sm for tiny text -->
<p className="text-caption-sm">Metadata</p> ✅

<!-- DO: Use semantic colors -->
<span className="text-sgma-charcoal">Text</span> ✅
```

---

## Responsive Scaling

**FOR HEADINGS ONLY:**
```html
<h1 className="text-h2 md:text-h1">Title</h1>
```

**FOR BODY & UI: Don't use responsive scaling**
```html
<p className="text-body-md">Stays same size on all devices</p>
```

---

## Checklist Before Committing

- [ ] All headings use h1-h6 or display-* classes
- [ ] All body text uses body-* classes
- [ ] All labels/UI use ui-* classes
- [ ] All captions use caption* classes
- [ ] Font-weight is explicitly set for headings
- [ ] No arbitrary text-sm, text-lg, text-xl used
- [ ] Form elements follow form pattern
- [ ] Colors use sgma-* palette
- [ ] Line heights look correct (not too tight)
- [ ] Mobile readability is good

---

## Getting Help

**See full guide:** `TYPOGRAPHY_SYSTEM.md`
**Tailwind config:** `tailwind.config.ts` (fontSize section)
**Design system:** Figma (link here when available)

**Questions?** Ask the frontend team!
