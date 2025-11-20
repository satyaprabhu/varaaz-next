# Image Management Guide

This guide explains how to organize, upload, and use images in the SGMA Art & Learning platform.

## Directory Structure

```
public/
├── images/
│   ├── portfolio/          # Portfolio/collection images
│   │   ├── flower-of-life/
│   │   │   ├── image-1.jpg
│   │   │   ├── image-2.jpg
│   │   │   └── image-3.jpg
│   │   ├── sacred-torus/
│   │   │   ├── image-1.jpg
│   │   │   └── image-2.jpg
│   │   └── 8-mandala-journey/
│   │       ├── image-1.jpg
│   │       └── image-2.jpg
│   ├── courses/            # Course cover images
│   │   ├── flower-of-life.jpg
│   │   ├── sacred-torus.jpg
│   │   └── 8-mandala-journey.jpg
│   ├── hero/               # Hero/banner images
│   │   └── banner.jpg
│   └── testimonials/       # Testimonial images (optional)
│       ├── user-1.jpg
│       └── user-2.jpg
```

## Image Upload Steps

### 1. Prepare Your Images

**Recommended specs:**
- **Format**: JPG (for photos), PNG (for graphics)
- **Quality**: High resolution (2000px+ width recommended)
- **File size**: 500KB - 2MB per image
- **Aspect ratio**:
  - Portfolio items: Square (1:1) or 16:9
  - Course cards: 16:9
  - Hero banner: 16:9

**Optimization tools:**
- ImageOptim (Mac)
- FileOptimizer (Windows)
- TinyPNG (online)

### 2. Upload to Folder

1. Navigate to `public/images/` in your project
2. Create appropriate subdirectory (portfolio/sacred-torus, courses/, etc.)
3. Upload your images there

### 3. Reference Images in Code

#### Portfolio Images (in `/app/collection/page.tsx`)

```typescript
import Image from 'next/image'

const portfolioItems = [
  {
    id: 'mandala-1',
    title: 'Sacred Mandala',
    description: 'A beautiful mandala artwork',
    image: '/images/portfolio/8-mandala-journey/image-1.jpg',
    series: '8 Mandala Journey',
    category: 'all',
  },
  // ... more items
]
```

#### Course Images (in `/app/courses/page.tsx`)

```typescript
<Image
  src="/images/courses/flower-of-life.jpg"
  alt="Flower of Life Mastery"
  width={400}
  height={300}
  priority
/>
```

#### Hero Banner (in `/app/page.tsx`)

```typescript
<Image
  src="/images/hero/banner.jpg"
  alt="SGMA Art & Learning"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

## Next.js Image Component Best Practices

### Using Image Component (Recommended)

```typescript
import Image from 'next/image'

<Image
  src="/images/portfolio/8-mandala-journey/image-1.jpg"
  alt="Descriptive alt text"
  width={400}
  height={300}
  priority={false}  // Set true only for above-fold images
  quality={80}      // 0-100, lower = smaller file
  placeholder="blur" // Shows blur while loading
/>
```

**Benefits:**
- ✓ Automatic optimization
- ✓ Responsive images (different sizes for different devices)
- ✓ Lazy loading (images load only when visible)
- ✓ WebP format support
- ✓ Prevents Cumulative Layout Shift (CLS)

### Image Properties

| Property | Value | Usage |
|----------|-------|-------|
| `src` | File path | `/images/portfolio/...` |
| `alt` | Description | Important for accessibility & SEO |
| `width` | Number | Required (pixels) |
| `height` | Number | Required (pixels) |
| `priority` | Boolean | Set `true` for hero/above-fold images |
| `quality` | 1-100 | Default 75, lower = smaller file |
| `sizes` | String | Responsive sizes (see example) |
| `placeholder` | blur/empty | Blur effect while loading |

### Responsive Images with Sizes

```typescript
// For full-width images
<Image
  src="/images/hero/banner.jpg"
  alt="Hero banner"
  fill
  sizes="100vw"
  className="object-cover"
/>

// For card layouts
<Image
  src="/images/portfolio/8-mandala-journey/image-1.jpg"
  alt="Artwork"
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// For fixed container
<Image
  src="/images/courses/flower-of-life.jpg"
  alt="Course"
  width={300}
  height={300}
  sizes="(max-width: 640px) 100vw, 300px"
/>
```

## File Naming Convention

Use descriptive, lowercase names with hyphens:

```
✓ Good names:
- sacred-mandala-01.jpg
- flower-of-life-workshop.jpg
- meditation-session.jpg
- geometric-pattern.jpg

❌ Avoid:
- image1.jpg
- photo.jpg
- Screenshot 2024-01-01.png
- Untitled.jpg
```

## Image Optimization Checklist

Before uploading images, ensure:

- [ ] Image is optimized (compressed without quality loss)
- [ ] Dimensions are appropriate for intended use
- [ ] File size is under 2MB
- [ ] Format is JPG or PNG
- [ ] Filename is descriptive and lowercase
- [ ] Alt text is clear and descriptive

## Accessing Images in Components

### Static Import (Recommended for Type Safety)

```typescript
import heruBanner from '@/public/images/hero/banner.jpg'

<Image
  src={heroBanner}
  alt="Hero banner"
  priority
/>
```

### String Path (Flexible)

```typescript
const imagePath = `/images/portfolio/8-mandala-journey/image-${id}.jpg`

<Image
  src={imagePath}
  alt="Portfolio item"
  width={400}
  height={300}
/>
```

## Common Image Issues & Solutions

### Image Shows as Broken

```
Problem: Image not found
Solution: Check path is correct (case-sensitive)
- /images/portfolio/...     ✓ Correct
- /Images/portfolio/...     ✗ Wrong (capital I)
- /public/images/...        ✗ Wrong (don't include public)
```

### Image Too Large/Small

```
Problem: Image not sizing correctly
Solution: Use proper width/height or fill property

// For fixed size
<Image width={400} height={300} ... />

// For responsive full-width
<Image fill sizes="100vw" ... />
```

### Images Load Slowly

```
Problem: Images taking too long to load
Solution:
1. Compress images (TinyPNG, ImageOptim)
2. Use lower quality setting (quality={60-75})
3. Set placeholder="blur" for better UX
4. Use lazy loading (priority={false} by default)
```

## Production Deployment

When deploying to production (Vercel):

1. All images in `public/` folder are automatically served
2. Next.js Image component handles optimization
3. Images are cached at edge locations (fast delivery)
4. No additional setup needed

## Future Enhancements

- [ ] Add image gallery with lightbox
- [ ] Implement image compression on upload
- [ ] Add image CDN for faster delivery
- [ ] Implement responsive image srcset

## Questions?

When you're ready to upload images:
1. Prepare your images following the specs above
2. Upload to appropriate folder in `public/images/`
3. Share the folder structure and filenames
4. I'll help integrate them into the components

Ready when you are! 📸
