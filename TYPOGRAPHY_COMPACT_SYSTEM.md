# SGMA Compact Typography System
## 9 Semantic Tokens • Production-Ready • Pragmatic Design

---

## What Was Implemented

A streamlined, production-ready typography system specifically designed for small-to-medium product teams:

### ✅ 9 Semantic Tokens (Not 15+)
- 2 Display sizes (marketing, hero)
- 4 Heading sizes (clear hierarchy)
- 2 Body sizes (default + emphasized)
- 1 UI/Label size (forms, captions)

### ✅ Clear Hierarchy
```
display    48px  (Hero marketing)
display-sm 36px  (Alt hero)
h1         32px  (Page title)
h2         28px  (Section)
h3         24px  (Subsection)
h4         20px  (Component title)
body-lg    18px  (Important body)
body       16px  (Default body) ← USE THIS MOST
caption    14px  (Labels, forms) ← MINIMUM
```

### ✅ No 12px Rule
- Minimum for any actionable UI: **14px**
- Only rare secondary metadata uses 12px (timestamps, micro-labels)
- Improves accessibility by default

### ✅ Built-In Defaults
Each token includes:
- Optimal line-height (1.1 - 1.75)
- Proper letter-spacing
- Font-weight guidance

### ✅ Zero Ambiguity
- `text-body` is the default (16px)
- If uncertain, use `text-body`
- One rule, applied everywhere

---

## System at a Glance

| Token | Size | Use Case | Line Height | Weight Hint |
|-------|------|----------|-------------|-------------|
| `display` | 48px | Hero/marketing | 1.1 | 900 |
| `display-sm` | 36px | Alt hero/prominent | 1.2 | 900 |
| `h1` | 32px | Page title | 1.3 | 900 |
| `h2` | 28px | Section | 1.35 | 700 |
| `h3` | 24px | Subsection/card | 1.4 | 700 |
| `h4` | 20px | Component/minor | 1.4 | 700 |
| `body-lg` | 18px | Important body | 1.75 | 400 |
| `body` | 16px | **Default body** | 1.6 | 400 |
| `caption` | 14px | Labels/forms | 1.5 | 500 |

---

## Usage Patterns

### Headings
```html
<h1 className="text-h1 font-black">Page Title</h1>
<h2 className="text-h2 font-bold">Section Title</h2>
<h3 className="text-h3 font-bold">Card Title</h3>
<h4 className="text-h4 font-bold">Component Title</h4>
```

### Body Text
```html
<p className="text-body">Standard paragraph (DEFAULT)</p>
<p className="text-body-lg">Important introduction</p>
```

### Forms & UI
```html
<label className="text-caption font-medium">Form Label</label>
<input className="text-body" placeholder="User input" />
<span className="text-caption">Helper text</span>
<button className="text-caption font-semibold">Button</button>
```

### Marketing Headlines
```html
<h1 className="text-display font-black">Hero Title</h1>
<h2 className="text-display-sm font-black">Alt Hero</h2>
```

---

## Font Weights (Defaults Included)

```
font-black      900  ← headings/display
font-bold       700  ← h2-h4
font-semibold   600  ← labels, buttons (optional)
font-medium     500  ← labels, small UI
font-normal     400  ← body text (default)
font-light      300  ← rarely use
```

**Don't overthink it:** Heavier headings, normal body, medium labels.

---

## Colors (Always Use These 5)

```
text-sgma-charcoal        ← Primary text (headings, body)
text-sgma-charcoal/70     ← Secondary (descriptions)
text-sgma-charcoal/60     ← Tertiary (metadata)
text-sgma-cta             ← Links, emphasis
text-white                ← On dark backgrounds
```

Never use: gray-*, slate-*, zinc-*. Never use arbitrary colors.

---

## DO & DON'T

### ✅ DO THIS
```html
<h1 className="text-h1 font-black">Title</h1>
<p className="text-body">Body text</p>
<label className="text-caption font-medium">Label</label>
<a className="text-sgma-cta">Link</a>
```

### ❌ NEVER THIS
```html
<h1 className="text-4xl">Wrong size</h1>
<p className="text-sm">Wrong (use text-body)</p>
<label className="text-xs">Wrong (min 14px)</label>
<p className="text-gray-700">Wrong color</p>
```

---

## Responsive Scaling

**Headings ONLY:**
```html
<h1 className="text-h2 md:text-h1">Title scales on desktop</h1>
```

**Body + Labels: NO scaling**
```html
<p className="text-body">Stays 16px everywhere</p>
<label className="text-caption">Stays 14px everywhere</label>
```

**Why:** Readability > visual fanciness. Body text should be consistent across devices.

---

## Real Examples from SGMA

### Home Page Hero
```html
<h1 className="text-display font-black">
  Discover Sacred Patterns
</h1>
<p className="text-body-lg">
  Where ancient wisdom meets modern art
</p>
```

### Course Card
```html
<h3 className="text-h3 font-bold">Course Name</h3>
<p className="text-body">Course description here</p>
<p className="text-h3 font-bold text-sgma-navy">₹38,000</p>
<a className="text-sgma-cta font-medium">Learn More →</a>
```

### Booking Form
```html
<label className="text-caption font-medium">Email Address</label>
<input className="text-body" placeholder="name@example.com" />
<span className="text-caption">We'll never share your email</span>
<button className="text-caption font-semibold">Book Session</button>
```

### Testimonial
```html
<p className="text-body italic">"Amazing course!"</p>
<p className="text-caption font-medium">Priya Sharma</p>
<p className="text-caption">Graphic Designer, Mumbai</p>
```

---

## Implementation Checklist

- [ ] Understand the 9 tokens (display, display-sm, h1-h4, body-lg, body, caption)
- [ ] Know the default: `text-body` (16px)
- [ ] Know the minimum: `text-caption` (14px)
- [ ] Never use text-xs, text-sm, text-lg, text-xl, etc.
- [ ] Never use gray-*, slate-*, or arbitrary colors
- [ ] Headings have font-weight (font-black or font-bold)
- [ ] Labels have font-medium or font-semibold
- [ ] Body is always font-normal
- [ ] Only scale headings on mobile
- [ ] Test on actual mobile device

---

## Troubleshooting

**Q: What size should I use?**
A: If unsure, use `text-body` (16px). It's the default.

**Q: Can I use 12px?**
A: Only for rare secondary metadata. Prefer 14px (`text-caption`) for everything.

**Q: Do I need responsive scaling for body?**
A: No. Keep body text same size on all devices.

**Q: What about buttons?**
A: Use `text-caption` (14px) with `font-semibold`.

**Q: Do I need ui-lg, ui-md, ui-sm tokens?**
A: No. Just use `text-caption` for all UI elements. Simple.

**Q: Can I use 10px or 11px?**
A: No. Never. 14px minimum for UI.

---

## File Location

**Tailwind Config:** `/tailwind.config.ts`
```typescript
fontSize: {
  'display': ['3rem', ...],      // 48px
  'display-sm': ['2.25rem', ...], // 36px
  'h1': ['2rem', ...],            // 32px
  'h2': ['1.75rem', ...],         // 28px
  'h3': ['1.5rem', ...],          // 24px
  'h4': ['1.25rem', ...],         // 20px
  'body-lg': ['1.125rem', ...],   // 18px
  'body': ['1rem', ...],          // 16px
  'caption': ['0.875rem', ...],   // 14px
}
```

**Full Guide:** `/TYPOGRAPHY_GUIDE.md`

---

## Why This System Works

### For Developers
- ✅ Only 9 tokens to remember
- ✅ Clear, obvious names (body, caption, h1-h4)
- ✅ One default (`text-body`)
- ✅ Quick decision-making
- ✅ Easy to maintain

### For Products
- ✅ Professional hierarchy
- ✅ Consistent across pages
- ✅ WCAG AA compliant (14px minimum)
- ✅ Mobile-first safe defaults
- ✅ Readable everywhere

### For Teams
- ✅ Minimal documentation
- ✅ One-page guide is enough
- ✅ No endless discussions
- ✅ Fast implementation
- ✅ Easy to extend later

---

## Comparison with Other Systems

### ❌ Before (10 arbitrary sizes)
- Inconsistent hierarchy
- Hard to maintain
- Developers guessing
- No clear defaults

### ✅ After (9 semantic tokens)
- Clear hierarchy
- Easy to maintain
- Developers know exactly what to do
- One default (`text-body`)

---

## Next Steps

1. Read `/TYPOGRAPHY_GUIDE.md` (5 min read)
2. Apply to all pages using examples above
3. Test on mobile (critical!)
4. Get team feedback
5. Ship it!

---

**That's the system. It's small, it works, and it's pragmatic.**

Use `text-body` by default. You'll rarely need anything else.
