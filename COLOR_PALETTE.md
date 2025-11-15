# SGMA Color Palette

## Overview
The SGMA color scheme uses a sophisticated dark theme with golden accents, inspired by sacred geometry and mandala art. The palette creates a luxurious, meditative atmosphere while maintaining excellent readability and accessibility.

---

## Custom Brand Colors

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| SGMA Primary | `#8B5CF6` | Purple - Available for future use |
| SGMA Dark | `#1F2937` | Dark Gray - Background fallback |

---

## Background & Base Colors

### Dark Theme Foundation
| Color | Hex Code | Tailwind Class | Usage |
|-------|----------|-----------------|-------|
| Darkest Background | `#030712` | `slate-950` | Page backgrounds, deepest depth |
| Dark Background | `#0F172A` | `slate-900` | Section backgrounds |
| Card Background | `#1E293B` | `slate-800` | Component cards, containers |
| Medium Slate | `#334155` | `slate-700` | Borders, dividers |
| Deep Blue | `#0C2340` | `blue-950` | Gradient overlays |

### Example Background Gradient
```css
/* Used throughout the site */
background-image: linear-gradient(to bottom, #030712, #0F172A);
```

---

## Text Colors

### Primary Text
| Color | Hex Code | Tailwind Class | Usage |
|-------|----------|-----------------|-------|
| Light Text | `#E2E8F0` | `slate-200` | Main body text, high contrast |
| Lighter Text | `#CBD5E1` | `slate-300` | Secondary text, slightly dimmed |
| Muted Text | `#94A3B8` | `slate-400` | Tertiary text, supporting info |

### Example Text Hierarchy
```
Primary:   text-slate-200  (Body text, main content)
Secondary: text-slate-300  (Subheadings, emphasis)
Tertiary:  text-slate-400  (Meta information, timestamps)
```

---

## Accent Colors (Yellow/Gold)

### Primary Accent
| Color | Hex Code | Tailwind Class | Usage |
|-------|----------|-----------------|-------|
| Bright Gold | `#FBBF24` | `yellow-400` | CTA buttons, primary borders, highlights |
| Soft Gold | `#FCD34D` | `yellow-300` | Hover states, secondary accents |
| Light Gold | `#FEF08A` | `yellow-200` | Badges, subtle backgrounds |
| Very Light | `#FEF3C7` | `yellow-100` | Background tints |

### Example Usage
```jsx
/* Button */
bg-gradient-to-r from-yellow-400 to-yellow-500

/* Hover Border */
group-hover:border-yellow-300

/* Badge */
bg-yellow-200/20 border-yellow-300/50
```

---

## Sacred Geometry SVG Colors

These colors are used in the animated Sri Chakra mandala background:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Gold Highlight | `#FFD500` | Outer triangles (Shakti), glow center |
| Dark Gold | `#C5A900` | Inner triangles (Shiva), structural elements |
| Radial Gradient | `#FFD500` → `#C5A900` | Smooth transitions, depth |

### SVG Opacity Levels
```
Outer elements: 0.07 - 0.09 opacity (subtle)
Glow effect:    0.3 - 0.6 opacity (medium visibility)
Inner circle:   0.1 - 0.12 opacity (very subtle)
```

---

## Component Color Patterns

### Card Components
```jsx
/* Background */
bg-slate-800/60 backdrop-blur-sm

/* Border - Default */
border border-yellow-400/30

/* Border - Hover */
group-hover:border-yellow-300

/* Glow Effect - Hover */
bg-gradient-to-br from-yellow-400/20 to-transparent
opacity-0 group-hover:opacity-100
```

### Button States
```jsx
/* Primary Button */
bg-gradient-to-r from-yellow-400 to-yellow-500
text-slate-900

/* Secondary Button */
border-2 border-yellow-400
text-yellow-300
hover:bg-yellow-400/10
```

### Gradient Overlays
```jsx
/* Dark Overlay */
bg-black/20 group-hover:bg-black/40

/* Gradient Fade */
bg-gradient-to-br from-slate-700 to-slate-800
```

---

## Color Usage Guidelines

### Best Practices

1. **Backgrounds**: Always use slate-950 or slate-800 for main backgrounds
2. **Text**: Use slate-200/300 for primary text, slate-400 for secondary
3. **Accents**: Reserve yellow-400 for CTAs, borders, and highlights
4. **Hover States**: Brighten to yellow-300 or adjust opacity
5. **Glassmorphism**: Combine backdrop-blur-sm with semi-transparent backgrounds
6. **Accessibility**: Maintain 4.5:1 contrast ratio for text (WCAG AA)

### Opacity Patterns
```
Card backgrounds:        60% (0.6)
Borders:                 30% (0.3)
Hover glows:             100% → 100% transition
Text emphasis:           70% → 100% opacity
SVG elements:            7-12% opacity
```

### Gradient Directions
```
Vertical:   from-blue-950 to-slate-950 (top to bottom)
Diagonal:   from-yellow-400/20 to-transparent (TL to BR)
Horizontal: from-yellow-400 to-yellow-500 (L to R)
```

---

## Responsive Color Behavior

- All colors remain consistent across breakpoints
- Opacity patterns maintain visual hierarchy on all devices
- Text contrast ratios verified for mobile and desktop
- Gradient animations use same colors at all sizes

---

## Customization Guide

### To Change the Accent Color
Edit `tailwind.config.ts`:
```typescript
extend: {
  colors: {
    'varaaz-primary': '#8B5CF6',  // Change this
  },
}
```

### To Change the Primary Theme
Replace all instances of:
- `yellow-400` → Your accent color
- `slate-800` → Your background color
- `slate-950` → Your darkest color

### To Add New Colors
```typescript
// tailwind.config.ts
extend: {
  colors: {
    'custom-name': '#HEXCODE',
  },
}
```

---

## Color Compliance

- **WCAG AA**: All text meets minimum 4.5:1 contrast ratio
- **WCAG AAA**: Headings and CTAs meet 7:1 contrast ratio
- **Colorblind Friendly**: Yellow accents are visible to all colorblind types
- **Dark Mode**: Optimized for eye comfort in low-light environments

---

## Related Files

- **Tailwind Config**: `tailwind.config.ts`
- **Global Styles**: `app/globals.css`
- **Theme Variables**: Used throughout component files
- **SVG Backgrounds**: Defined inline in `app/page.tsx` and `app/about/page.tsx`

---

*Last Updated: November 2025*
*Project: SGMA - Sacred Geometry Mandala Art Studio*
