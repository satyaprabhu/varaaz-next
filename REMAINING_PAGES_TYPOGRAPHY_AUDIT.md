# Remaining Pages Typography Audit & Implementation Plan

**Status:** Ready for implementation
**Date:** 2025-11-19
**Total Pages:** 5 (about, courses, bookings, contact, collection, privacy)
**Total Elements to Update:** 150+

---

## Page 1: `/app/about/page.tsx`

### Current State Analysis

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Hero H1 | `text-5xl md:text-6xl font-black` | 48-64px | ❌ Too large (exceeds 48px max) | `text-h1 md:text-display-sm` |
| Hero Subtitle | `text-lg md:text-xl font-light` | 18-20px | ✅ Good | `text-body-lg md:text-body-lg` |
| "Our Story" H2 | `text-3xl md:text-4xl font-black` | 30-36px | ⚠️ Arbitrary size | `text-h2 md:text-h1` |
| "Our Story" Body | `text-lg` | 18px | ⚠️ Mixed sizing | `text-body-lg` |
| "Our Purpose" H3 | `text-3xl font-black` | 30px | ⚠️ Should be h3 | `text-h3 font-black` |
| "Our Purpose" Body | `text-lg` | 18px | ⚠️ Inconsistent | `text-body-lg` |
| "Life at SGMA" H2 | `text-3xl md:text-4xl font-black` | 30-36px | ⚠️ Arbitrary | `text-h2 md:text-h1` |
| "Life at SGMA" Body | `text-lg` | 18px | ⚠️ Mixed | `text-body-lg` |
| "Why Join" H2 | `text-3xl md:text-4xl font-black` | 30-36px | ⚠️ Arbitrary | `text-h2 md:text-h1` |
| Card H3 (4 cards) | `font-bold` (no size) | unclear | ❌ Missing semantic token | `text-h4 font-bold` |
| Card Body (4 cards) | `text-sgma-charcoal` (no size) | unclear | ❌ Missing semantic token | `text-body` |
| "Understanding Mandalas" H3 | `text-3xl font-black` | 30px | ⚠️ Should be h3 | `text-h3 font-black` |
| "Understanding Mandalas" Body | `text-lg` | 18px | ⚠️ Mixed | `text-body-lg` |
| CTA H2 | `text-3xl md:text-4xl font-black` | 30-36px | ⚠️ Arbitrary | `text-h2 md:text-h1` |
| CTA Body | `text-lg md:text-xl` | 18-20px | ⚠️ Mixed | `text-body-lg md:text-body-lg` |
| CTA Light Body | `text-lg font-light` | 18px | ⚠️ Mixed | `text-body-lg font-light` |
| CTA Buttons | `font-bold` | unclear | ❌ Missing size | `text-caption font-bold` |

**Total elements: ~35**
**Priority Issues:** 1 hero oversizing, missing semantic tokens on card content

---

## Page 2: `/app/(pages)/courses/page.tsx`

### Current State Analysis

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Page H1 | `text-5xl md:text-6xl font-black` | 48-64px | ❌ Too large | `text-h1 md:text-display-sm` |
| Page Subtitle | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| Table Headers | `text-sm font-black` | 14px | ⚠️ Already small | `text-caption font-black` |
| Table Body | `font-bold/medium` (no size) | unclear | ❌ Missing semantic | `text-body` |
| Course H2 (4 courses) | `text-4xl md:text-5xl font-black` | 36-48px | ⚠️ Arbitrary | `text-h1 md:text-display-sm` |
| Course Subtitle H2 | `text-2xl font-bold` | 24px | ⚠️ Inconsistent | `text-h3 font-bold` |
| Course Description | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| Info Box Labels | `text-sm font-bold` | 14px | ⚠️ Mixed | `text-caption font-bold` |
| Info Box Values | `text-sm/base font-medium` | 14-16px | ⚠️ Mixed | `text-body` |
| Section H3 (Content/Outcomes) | `text-2xl font-black` | 24px | ⚠️ Inconsistent | `text-h3 font-black` |
| Bullet Labels | `text-sgma-charcoal font-bold` | unclear | ❌ Missing size | `text-h4 font-bold` |
| Bullet Descriptions | `text-sgma-charcoal/70 text-sm` | 14px | ⚠️ Mixed | `text-body font-medium` |
| Kit H2 | `text-4xl md:text-5xl font-black` | 36-48px | ⚠️ Arbitrary | `text-h1 md:text-display-sm` |
| Kit H3 | `text-xl font-black` | 20px | ⚠️ Inconsistent | `text-h4 font-black` |
| Kit Body | `text-sgma-charcoal` | unclear | ❌ Missing size | `text-body` |
| Final CTA H2 | `text-4xl md:text-5xl font-black` | 36-48px | ⚠️ Arbitrary | `text-h1 md:text-display-sm` |
| Final CTA Body | `text-xl` | 20px | ⚠️ Mixed | `text-body-lg` |
| CTA Buttons | `font-bold` | unclear | ❌ Missing size | `text-caption font-bold` |

**Total elements: ~45**
**Priority Issues:** 3 oversized headings (text-4xl/5xl/6xl), multiple missing semantic tokens

---

## Page 3: `/app/bookings/page.tsx`

### Current State Analysis

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Page H1 | `text-3xl md:text-4xl font-black` | 30-36px | ⚠️ Arbitrary | `text-h2 md:text-h1` |
| Page Subtitle | `text-sm font-light` | 14px | ❌ Too small | `text-body` |
| H3 "Bookings & Sessions" | `text-2xl font-bold` | 24px | ⚠️ Inconsistent | `text-h3 font-bold` |
| Body Text | `text-sm` | 14px | ❌ Too small, should be larger | `text-body` |
| Bullet Points | `text-sm` | 14px | ❌ Too small | `text-body` |
| Workshop H2 | `text-3xl md:text-4xl font-black` | 30-36px | ⚠️ Arbitrary | `text-h2 md:text-h1` |
| Workshop Table Header | `text-sm font-black` | 14px | ⚠️ Small | `text-caption font-black` |
| Workshop Table Body | `text-sm font-bold/medium` | 14px | ❌ Small | `text-body` |
| "Payment Methods" H3 | `text-2xl font-bold` | 24px | ⚠️ Inconsistent | `text-h3 font-bold` |
| Payment Info Body | `text-base` | 16px | ✅ Good | `text-body` |
| Bank/UPI H4 | `text-lg font-bold` | 18px | ⚠️ Inconsistent | `text-h4 font-bold` |
| Bank/UPI Labels | `text-sm font-semibold` | 14px | ⚠️ Small | `text-caption font-semibold` |
| Bank/UPI Values | `text-base` | 16px | ✅ Good | `text-body` |
| Important Note | `text-base` | 16px | ✅ Good | `text-body` |
| "Booking & Cancellation" H3 | `text-2xl font-bold` | 24px | ⚠️ Inconsistent | `text-h3 font-bold` |
| Policy List | `text-base` | 16px | ✅ Good | `text-body` |
| Closing Text | `text-base` | 16px | ✅ Good | `text-body` |

**Total elements: ~30**
**Priority Issues:** 1 subtitle too small, inconsistent heading sizes

---

## Page 4: `/app/contact/page.tsx`

### Current State Analysis

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Page H1 | `text-5xl md:text-6xl font-black` | 48-64px | ❌ Too large | `text-h1 md:text-display-sm` |
| Page Subtitle | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| Form Label | `text-sm font-semibold` | 14px | ⚠️ Small | `text-caption font-semibold` |
| Form Input | `text-sgma-charcoal` | unclear | ❌ Missing size | `text-body` |
| Success/Error Message | `text-center font-semibold` | unclear | ❌ Missing size | `text-body font-semibold` |
| Submit Button | `font-bold` | unclear | ❌ Missing size | `text-caption font-bold` |
| FAQ H2 | `text-4xl md:text-5xl font-black` | 36-48px | ⚠️ Arbitrary | `text-h1 md:text-display-sm` |
| FAQ Subtitle | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| FAQ Question H3 | `text-lg font-bold` | 18px | ⚠️ Inconsistent | `text-h4 font-bold` |
| FAQ Answer | `text-sgma-charcoal` | unclear | ❌ Missing size | `text-body` |

**Total elements: ~20**
**Priority Issues:** 2 oversized headings, missing semantic tokens on form elements

---

## Page 5: `/app/collection/page.tsx`

### Current State Analysis

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Page H1 | `text-5xl md:text-6xl font-black` | 48-64px | ❌ Too large | `text-h1 md:text-display-sm` |
| Page Subtitle | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| Filter Button (Selected) | `font-semibold` | unclear | ❌ Missing size | `text-caption font-semibold` |
| Filter Button (Unselected) | `text-sm` | 14px | ⚠️ Small | `text-caption` |
| Card Collection Tag | `text-xs font-bold` | 12px | ❌ Too small | `text-caption font-bold` |
| Card Title | `text-xl font-black` | 20px | ⚠️ Inconsistent | `text-h4 font-black` |
| Card Description | `text-sm` | 14px | ⚠️ Small | `text-body` |
| Modal H2 | `text-4xl font-black` | 36px | ⚠️ Arbitrary | `text-h2 font-black` |
| Modal Description | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| Modal Collection Tag | `text-sm font-bold` | 14px | ⚠️ Small | `text-caption font-bold` |
| "About This Work" H3 | `text-sm font-bold` | 14px | ⚠️ Should be larger | `text-h4 font-bold` |
| Modal Body | `text-base` | 16px | ✅ Good | `text-body` |
| Modal CTA | `font-black` | unclear | ❌ Missing size | `text-caption font-black` |
| Section H2 | `text-4xl font-black` | 36px | ⚠️ Arbitrary | `text-h2 font-black` |
| Section Body | `text-lg` | 18px | ✅ Good | `text-body-lg` |
| CTA Buttons | `font-black` | unclear | ❌ Missing size | `text-caption font-black` |

**Total elements: ~35**
**Priority Issues:** 1 oversized hero, inconsistent tag sizing (12px in card), modal content sizing

---

## Page 6: `/app/privacy-policy/page.tsx`

### Current State Analysis

| Element | Current Classes | Current Size | Issues | Recommended Change |
|---------|-----------------|--------------|--------|-------------------|
| Page H1 | `text-4xl md:text-5xl font-black` | 36-48px | ⚠️ Arbitrary | `text-h1 md:text-display-sm` |
| Effective Date | `text-sm` | 14px | ⚠️ Small | `text-caption` |
| Body Paragraph | `leading-relaxed` (no size) | unclear | ❌ Missing size | `text-body` |
| Important Note | `font-semibold` (no size) | unclear | ❌ Missing size | `text-body font-semibold` |
| Section H2 | `text-2xl font-black` | 24px | ⚠️ Inconsistent | `text-h3 font-black` |
| Section H3 | `text-lg font-bold` | 18px | ⚠️ Inconsistent | `text-h4 font-bold` |
| List Items | `text-sgma-charcoal` (no size) | unclear | ❌ Missing size | `text-body` |
| Highlight Box Body | `text-sgma-charcoal` (no size) | unclear | ❌ Missing size | `text-body` |
| Acknowledgment | `text-sm font-semibold` | 14px | ⚠️ Small | `text-caption font-semibold` |

**Total elements: ~25**
**Priority Issues:** Many missing semantic tokens, inconsistent heading hierarchy

---

## Summary Statistics

| Page | Current Elements | To Update | Priority Issues |
|------|-----------------|-----------|-----------------|
| About | 35 | 30 | 1 hero oversizing |
| Courses | 45 | 40 | 3 oversized headings |
| Bookings | 30 | 25 | 1 subtitle too small |
| Contact | 20 | 18 | 2 oversized headings |
| Collection | 35 | 30 | 1 oversized hero, 12px tag |
| Privacy | 25 | 22 | Many missing tokens |
| **TOTAL** | **190** | **165** | **~10 critical** |

---

## Implementation Priority

### Phase 1: Critical Issues (Hero Sizing & Safety)
1. All hero H1 exceeding 48px max → reduce to `text-h1 md:text-display-sm`
2. All subtitles under 16px → upgrade to `text-body` minimum
3. All collection tags at 12px → upgrade to `text-caption` (14px)

### Phase 2: Semantic Token Completeness
4. All `text-*xl` arbitrary sizes → convert to semantic tokens
5. All missing size specifications → add explicit token

### Phase 3: Consistency & Hierarchy
6. All H2/H3/H4 consistency → standardize assignments
7. All body text → consolidate to `text-body` or `text-body-lg`

---

## Implementation Checklist

- [ ] **About Page** - 30 elements
- [ ] **Courses Page** - 40 elements
- [ ] **Bookings Page** - 25 elements
- [ ] **Contact Page** - 18 elements
- [ ] **Collection Page** - 30 elements
- [ ] **Privacy Policy Page** - 22 elements
- [ ] **Create implementation summary**
- [ ] **Verify responsive behavior**

---

## Next Step

Beginning with **About Page** (simplest) → **Contact** → **Bookings** → **Collection** → **Privacy** → **Courses** (most complex)

