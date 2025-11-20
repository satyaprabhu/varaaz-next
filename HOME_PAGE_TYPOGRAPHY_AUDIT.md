# Home Page Typography Audit & Implementation Guide

## Current State Analysis

### Elements Found

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Hero Title | `text-3xl md:text-4xl font-black` | 30-36px | Doesn't use semantic system | `text-h2 md:text-h1` |
| Hero Subtitle | `text-2xl md:text-3xl font-bold` | 24-30px | Too large for subtitle | `text-h3 md:text-h2` |
| Hero Body | `text-base md:text-lg font-light` | 16-18px | Good, but needs semantics | `text-body md:text-body-lg` |
| Featured Courses H2 | `text-3xl md:text-4xl font-black` | 30-36px | Good size, needs semantics | `text-h2 md:text-h1` |
| Course Cards - Title | `text-lg font-black` | 18px | Good, but wrong semantic | `text-h4` |
| Course Cards - Desc | `text-xs` | 12px | **TOO SMALL** ❌ | `text-caption` |
| Pain Points - H3 | `text-lg font-bold` | 18px | Good, wrong semantic | `text-h4` |
| Pain Points - Body | `text-base md:text-lg` | 16-18px | Good | `text-body md:text-body-lg` |
| Steps - H3 | `text-2xl font-bold` | 24px | Good size, wrong semantic | `text-h3` |
| Steps - Body | `text-base` | 16px | Good | `text-body` |
| "Why Different" - H2 | `text-3xl md:text-4xl font-black` | 30-36px | Good, wrong semantic | `text-h2 md:text-h1` |
| Feature Cards - H3 | `text-2xl font-black` | 24px | Good, wrong semantic | `text-h3` |
| Feature Cards - Body | `text-sm` | 14px | Good match to caption | Keep or use `text-caption` |
| Stats - Numbers | `text-4xl font-black` | 36px | Should use `display-sm` | `text-display-sm` |
| Stats - Labels | `text-sm` | 14px | Good, use `text-caption` | `text-caption` |
| CTA Buttons | `text-base font-bold` | 16px | Missing semantic | `text-caption font-semibold` |
| Outcome Statement | `text-lg font-light` | 18px | Good | `text-body-lg` |

---

## Critical Issues Found

### 🔴 Issue 1: Course Card Descriptions TOO SMALL
**Current:** `text-xs` (12px)
**Problem:** Makes course descriptions hard to read, fails accessibility
**Impact:** Users skip reading course details
**Solution:** Change to `text-caption` (14px)

### 🟡 Issue 2: Inconsistent Heading Hierarchy
**Current:** Mix of text-2xl, text-3xl, text-lg without semantic naming
**Problem:** Developers don't know which heading level to use
**Impact:** Harder to maintain consistency
**Solution:** Use h1-h4 semantic tokens

### 🟡 Issue 3: Button Text Not Using Semantic System
**Current:** `text-base font-bold`
**Problem:** Not using new typography system
**Solution:** Use `text-caption font-semibold`

### 🟢 Issue 4: Font Weights Need Update
**Current:** Mixing `font-black`, `font-bold`, `font-light`
**Problem:** Only weight 400 is loaded from Google
**Note:** This is OK for now, just be aware

---

## Section-by-Section Recommendations

### HERO SECTION (Lines 147-174)

#### Before:
```html
<h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight uppercase tracking-tight text-sgma-charcoal mt-4">
  Find Your Calm Through Sacred Geometry
</h1>

<p className="text-2xl md:text-3xl font-bold text-sgma-charcoal mb-6 max-w-3xl mx-auto leading-relaxed">
  Transform overwhelm into peace, one mandala at a time
</p>

<p className="text-base md:text-lg text-sgma-charcoal mb-12 max-w-3xl mx-auto leading-relaxed font-light">
  Master the ancient art of mandalas...
</p>
```

#### After:
```html
<h1 className="text-h2 md:text-h1 font-black mb-3 leading-tight uppercase tracking-tight text-sgma-charcoal mt-4">
  Find Your Calm Through Sacred Geometry
</h1>

<p className="text-h3 md:text-h2 font-bold text-sgma-charcoal mb-6 max-w-3xl mx-auto leading-relaxed">
  Transform overwhelm into peace, one mandala at a time
</p>

<p className="text-body md:text-body-lg text-sgma-charcoal mb-12 max-w-3xl mx-auto leading-relaxed font-light">
  Master the ancient art of mandalas...
</p>
```

#### CTA Buttons (Lines 164, 169):
```html
<!-- BEFORE -->
<div className="bg-sgma-cta text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-base hover:shadow-lg...">
  Explore Courses
</div>

<!-- AFTER -->
<div className="bg-sgma-cta text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-widest text-caption hover:shadow-lg...">
  Explore Courses
</div>
```

---

### FEATURED COURSES SECTION (Lines 178-288)

#### Section Title (Line 180):
```html
<!-- BEFORE -->
<h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">

<!-- AFTER -->
<h2 className="text-h2 md:text-h1 font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
```

#### Course Card Title (Line 199, 222, 245, 268):
```html
<!-- BEFORE -->
<h3 className="text-lg font-black text-sgma-charcoal mb-2 uppercase tracking-wide...">

<!-- AFTER -->
<h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide...">
```

#### Course Card Description (Line 202, 225, 248, 271): **CRITICAL**
```html
<!-- BEFORE -->
<p className="text-sgma-charcoal leading-relaxed text-xs flex-grow">
  Create 8 distinct Mandala artworks...
</p>

<!-- AFTER -->
<p className="text-caption text-sgma-charcoal leading-relaxed flex-grow">
  Create 8 distinct Mandala artworks...
</p>
```

#### "Explore All Courses" Button (Line 282):
```html
<!-- BEFORE -->
<div className="bg-sgma-cta text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg...">

<!-- AFTER -->
<div className="bg-sgma-cta text-white px-10 py-4 rounded-lg font-semibold uppercase tracking-widest text-caption hover:shadow-lg...">
```

---

### "DOES THIS SOUND LIKE YOU?" SECTION (Lines 291-364)

#### Section Title (Line 293):
```html
<!-- BEFORE -->
<h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">

<!-- AFTER -->
<h2 className="text-h2 md:text-h1 font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
```

#### Pain Point H3 (Line 302, 315, 328, 341, 354):
```html
<!-- BEFORE -->
<h3 className="text-lg font-bold text-sgma-navy uppercase tracking-wide">

<!-- AFTER -->
<h3 className="text-h4 font-bold text-sgma-navy uppercase tracking-wide">
```

#### Pain Point Body (Line 306, 319, etc.):
```html
<!-- BEFORE -->
<p className="text-base md:text-lg text-sgma-charcoal leading-relaxed">

<!-- AFTER -->
<p className="text-body md:text-body-lg text-sgma-charcoal leading-relaxed">
```

---

### "HOW SGMA TRANSFORMS YOUR PRACTICE" SECTION (Lines 366-418)

#### Section Title (Line 369):
```html
<!-- BEFORE -->
<h2 className="text-3xl md:text-4xl font-black text-center mb-3 uppercase tracking-tight text-sgma-charcoal">

<!-- AFTER -->
<h2 className="text-h2 md:text-h1 font-black text-center mb-3 uppercase tracking-tight text-sgma-charcoal">
```

#### Section Subtitle (Line 372):
```html
<!-- BEFORE -->
<p className="text-center text-sgma-charcoal/70 text-lg mb-16 max-w-3xl mx-auto">

<!-- AFTER -->
<p className="text-center text-sgma-charcoal/70 text-body-lg mb-16 max-w-3xl mx-auto">
```

#### Step H3 (Line 381, 392, 403):
```html
<!-- BEFORE -->
<h3 className="text-2xl font-bold text-sgma-charcoal mb-3 uppercase tracking-wide">

<!-- AFTER -->
<h3 className="text-h3 font-bold text-sgma-charcoal mb-3 uppercase tracking-wide">
```

#### Step Body (Line 382, 393, 404):
```html
<!-- BEFORE -->
<p className="text-sgma-charcoal text-base leading-relaxed">

<!-- AFTER -->
<p className="text-body text-sgma-charcoal leading-relaxed">
```

#### Outcome Statement (Line 412):
```html
<!-- BEFORE -->
<p className="text-center text-sgma-charcoal text-lg font-light leading-relaxed max-w-3xl mx-auto">

<!-- AFTER -->
<p className="text-center text-sgma-charcoal text-body-lg font-light leading-relaxed max-w-3xl mx-auto">
```

---

### "WHY SGMA IS DIFFERENT" SECTION (Lines 423-520)

#### Section Title (Line 426):
```html
<!-- BEFORE -->
<h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">

<!-- AFTER -->
<h2 className="text-h2 md:text-h1 font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
```

#### Feature Card H3 (Line 436, 448, 460):
```html
<!-- BEFORE -->
<h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-sgma-charcoal">

<!-- AFTER -->
<h3 className="text-h3 font-black uppercase tracking-wide mb-4 text-sgma-charcoal">
```

#### Feature Card Body (Line 437, 449, 461):
```html
<!-- BEFORE -->
<p className="text-sgma-charcoal leading-relaxed text-sm flex-grow">

<!-- AFTER -->
<p className="text-caption text-sgma-charcoal leading-relaxed flex-grow">
```

#### "Create Your First Mandala" H3 (Line 470):
```html
<!-- BEFORE -->
<h3 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight text-sgma-charcoal">

<!-- AFTER -->
<h3 className="text-h3 md:text-h2 font-black mb-3 uppercase tracking-tight text-sgma-charcoal">
```

#### Intro Paragraph (Line 473):
```html
<!-- BEFORE -->
<p className="text-lg text-sgma-charcoal/70 mb-12 max-w-2xl mx-auto">

<!-- AFTER -->
<p className="text-body-lg text-sgma-charcoal/70 mb-12 max-w-2xl mx-auto">
```

#### Stats Numbers (Line 482, 490, 498):
```html
<!-- BEFORE -->
<div className="text-4xl font-black text-sgma-cta mb-2">1,200+</div>

<!-- AFTER -->
<div className="text-display-sm font-black text-sgma-cta mb-2">1,200+</div>
```

#### Stats Labels (Line 483, 491, 499):
```html
<!-- BEFORE -->
<p className="text-sgma-charcoal/70 text-sm">Students Completed Courses</p>

<!-- AFTER -->
<p className="text-caption text-sgma-charcoal/70">Students Completed Courses</p>
```

#### Final CTA Buttons (Line 508, 513):
```html
<!-- BEFORE -->
<div className="bg-sgma-cta text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-base hover:shadow-2xl...">

<!-- AFTER -->
<div className="bg-sgma-cta text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-caption hover:shadow-2xl...">
```

---

## Summary of Changes

### Quick Count:
- **Total elements to update:** 40+
- **Critical fixes:** 1 (course card descriptions from 12px → 14px)
- **Heading updates:** 12 (text-2xl/3xl/4xl → h1-h4)
- **Body text updates:** 10 (text-base/lg → body/body-lg)
- **Label/caption updates:** 8 (text-sm/xs → caption)
- **Button updates:** 4 (text-base → caption)

### Priority Order:
1. **CRITICAL:** Fix course card descriptions (`text-xs` → `text-caption`)
2. **HIGH:** Convert all headings to semantic tokens (h1-h4)
3. **MEDIUM:** Convert body text to semantic tokens (body, body-lg)
4. **MEDIUM:** Convert buttons to semantic tokens (text-caption)
5. **LOW:** Verify responsive scaling behavior

---

## Implementation Checklist

### Hero Section
- [ ] h1 title: `text-3xl md:text-4xl` → `text-h2 md:text-h1`
- [ ] Subtitle: `text-2xl md:text-3xl` → `text-h3 md:text-h2`
- [ ] Body: `text-base md:text-lg` → `text-body md:text-body-lg`
- [ ] CTA button text: add `text-caption`

### Featured Courses
- [ ] Section h2: `text-3xl md:text-4xl` → `text-h2 md:text-h1`
- [ ] Card titles: `text-lg` → `text-h4`
- [ ] **Card descriptions: `text-xs` → `text-caption` (CRITICAL)**
- [ ] Button: add `text-caption`

### Pain Points Section
- [ ] Section h2: `text-3xl md:text-4xl` → `text-h2 md:text-h1`
- [ ] Pain point h3: `text-lg` → `text-h4`
- [ ] Body: `text-base md:text-lg` → `text-body md:text-body-lg`

### How SGMA Transforms
- [ ] Section h2: `text-3xl md:text-4xl` → `text-h2 md:text-h1`
- [ ] Subtitle: `text-lg` → `text-body-lg`
- [ ] Step h3: `text-2xl` → `text-h3`
- [ ] Step body: `text-base` → `text-body`
- [ ] Outcome: `text-lg` → `text-body-lg`

### Why Different Section
- [ ] Section h2: `text-3xl md:text-4xl` → `text-h2 md:text-h1`
- [ ] Card h3: `text-2xl` → `text-h3`
- [ ] Card body: `text-sm` → `text-caption`
- [ ] "Create" h3: `text-2xl md:text-3xl` → `text-h3 md:text-h2`
- [ ] Intro: `text-lg` → `text-body-lg`

### Stats
- [ ] Numbers: `text-4xl` → `text-display-sm`
- [ ] Labels: `text-sm` → `text-caption`
- [ ] Final CTA: add `text-caption`

---

## Expected Results

### Before
- 10+ different arbitrary font sizes
- 12px descriptions (too small)
- Inconsistent hierarchy
- No semantic naming

### After
- 9 semantic tokens used throughout
- All text readable (14px minimum)
- Clear, consistent hierarchy
- Semantic naming (self-documenting)
- Professional appearance

---

## Next Steps

1. Read this audit carefully
2. Apply changes in recommended order (sections top to bottom)
3. Test on mobile (critical!)
4. Verify responsive behavior (md: breakpoints)
5. Take screenshot before/after for visual comparison

**Ready to implement?** Start with the hero section!
