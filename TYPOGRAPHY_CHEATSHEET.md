# Typography Cheatsheet
## Copy/Paste Ready • Reference Card

---

## The 9 Tokens (All You Need to Know)

```
display      → 48px  Hero headline
display-sm   → 36px  Alt hero
h1           → 32px  Page title
h2           → 28px  Section
h3           → 24px  Card/subsection
h4           → 20px  Component title
body-lg      → 18px  Important body
body         → 16px  DEFAULT BODY ← USE THIS MOST
caption      → 14px  Labels/forms ← MINIMUM
```

---

## Copy/Paste Snippets

### Hero
```html
<h1 className="text-display font-black">Hero Title</h1>
<p className="text-body-lg">Subtitle</p>
```

### Page Title
```html
<h1 className="text-h1 font-black">Page Title</h1>
```

### Section
```html
<h2 className="text-h2 font-bold">Section Title</h2>
<p className="text-body">Description</p>
```

### Card
```html
<h3 className="text-h3 font-bold">Title</h3>
<p className="text-body">Content</p>
<span className="text-caption">Meta</span>
```

### Form Group
```html
<label className="text-caption font-medium">Label</label>
<input className="text-body" />
<span className="text-caption">Helper</span>
<p className="text-caption text-red-600">Error</p>
```

### Button
```html
<button className="text-caption font-semibold">Click</button>
```

### Link
```html
<a className="text-sgma-cta font-medium">Link</a>
```

### Testimonial
```html
<p className="text-body italic">"Quote"</p>
<p className="text-caption font-medium">Author</p>
<p className="text-caption">Title</p>
```

### Footer
```html
<h4 className="text-h5 font-bold text-white">Heading</h4>
<a className="text-body text-white/80">Link</a>
<p className="text-body text-white/60">© 2025 SGMA</p>
```

---

## Font Weights Quick Ref

```
Headings         → font-black (display/h1) or font-bold (h2-h4)
Labels/Buttons   → font-semibold or font-medium
Body             → font-normal (default)
```

---

## Colors Quick Ref

```
Primary      → text-sgma-charcoal
Secondary    → text-sgma-charcoal/70
Tertiary     → text-sgma-charcoal/60
Accent       → text-sgma-cta
White        → text-white
```

---

## DO & DON'T (Quick Ref)

```
✅ <h1 className="text-h1 font-black">
❌ <h1 className="text-4xl font-black">

✅ <p className="text-body">
❌ <p className="text-base">

✅ <label className="text-caption font-medium">
❌ <label className="text-sm">

✅ <a className="text-sgma-cta">
❌ <a className="text-blue-600">

✅ If unsure, use text-body
❌ Never use text-xs
```

---

## Size Ladder (Visual)

```
display    ████████████████████████████ (48px)
display-sm ██████████████ (36px)
h1         ████████████ (32px)
h2         ██████████ (28px)
h3         █████████ (24px)
h4         ███████ (20px)
body-lg    ██████ (18px)
body       █████ (16px) ← MOST COMMON
caption    ████ (14px) ← MINIMUM
```

---

## Common Mistakes

```
❌ Using text-sm → Use text-caption instead
❌ Using text-xs → Never, use text-caption minimum
❌ Using text-lg → Use text-body or text-body-lg
❌ Using text-xl → Use h4 or h3 instead
❌ Using arbitrary colors → Use sgma-* palette
❌ Button without font-weight → Add font-semibold
❌ Heading without font-weight → Add font-black or font-bold
❌ Using 12px anywhere important → Minimum 14px
```

---

## When in Doubt

**Default to `text-body` (16px).**

It's the most common size and safe choice.

---

## Files

- **Full Guide:** `TYPOGRAPHY_GUIDE.md`
- **System Overview:** `TYPOGRAPHY_COMPACT_SYSTEM.md`
- **Config:** `tailwind.config.ts` (fontSize section)

---

That's it. **9 tokens. That's all you need.**
