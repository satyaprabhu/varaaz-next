import { getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import TestimonialsSection from '@/components/TestimonialsSection'
import ImageCarousel from '@/components/ImageCarousel'

export default async function Home() {
  const post = await getPost('pages', 'home')

  if (!post) notFound()

  const { content, data } = post
  const pageData = data as { title: string; subtitle: string; slug: string }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sgma-beige via-sgma-beige/40 to-sgma-beige/10 relative text-sgma-charcoal">
      <style>{`
        @keyframes rotateSriChakra {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes cosmicWave {
          0% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.6; }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes rotateSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulsGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .sri-chakra-rotate {
          animation: rotateSriChakra 120s linear infinite;
        }
        .float-element {
          animation: floatUp 6s ease-in-out infinite;
        }
        .cosmic-wave {
          animation: cosmicWave 4s ease-out infinite;
        }
        .slow-rotate {
          animation: rotateSlow 180s linear infinite;
        }
        .puls-glow {
          animation: pulsGlow 8s ease-in-out infinite;
        }
      `}</style>
      {/* Sri Chakra Mandala Background - Soft Gold/Pale Yellow with Radiant Glow */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0 sri-chakra-rotate">
        <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Radial gradient for glow effect - Luxurious Gold */}
            <radialGradient id="mandalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD500" stopOpacity="0.8"/>
              <stop offset="25%" stopColor="#FFD500" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#C5A900" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#C5A900" stopOpacity="0"/>
            </radialGradient>

            {/* Multiple glow layers */}
            <filter id="goldenGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <g id="sriChakra">
              {/* Outer circle - Rich Gold */}
              <circle cx="100" cy="100" r="95" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.07"/>

              {/* Triangles pointing up - Shiva (9 triangles) - Primary Gold */}
              <polygon points="100,30 140,80 60,80" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.08"/>
              <polygon points="100,45 130,80 70,80" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.08"/>
              <polygon points="100,60 120,80 80,80" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.08"/>

              {/* Triangles pointing down - Shakti (9 triangles) - Highlight Gold */}
              <polygon points="100,170 140,120 60,120" fill="none" stroke="#FFD500" strokeWidth="0.5" opacity="0.09"/>
              <polygon points="100,155 130,120 70,120" fill="none" stroke="#FFD500" strokeWidth="0.5" opacity="0.09"/>
              <polygon points="100,140 120,120 80,120" fill="none" stroke="#FFD500" strokeWidth="0.5" opacity="0.09"/>

              {/* Outer petals (lotus circles) */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <circle cx="100" cy="100" r="75" fill="none" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <circle cx="100" cy="100" r="65" fill="none" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <circle cx="100" cy="100" r="55" fill="none" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <circle cx="100" cy="100" r="45" fill="none" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <circle cx="100" cy="100" r="35" fill="none" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>

              {/* Inner binding point (Bindu) */}
              <circle cx="100" cy="100" r="8" fill="#FFD500" opacity="0.1"/>
              <circle cx="100" cy="100" r="5" fill="#C5A900" opacity="0.12"/>

              {/* Decorative lines */}
              <line x1="100" y1="10" x2="100" y2="190" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <line x1="10" y1="100" x2="190" y2="100" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <line x1="30" y1="30" x2="170" y2="170" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <line x1="170" y1="30" x2="30" y2="170" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
            </g>
          </defs>

          {/* Glow background circles for radiant effect */}
          <circle cx="100" cy="100" r="120" fill="url(#mandalGlow)" opacity="0.6"/>
          <circle cx="100" cy="100" r="80" fill="url(#mandalGlow)" opacity="0.4"/>
          <circle cx="100" cy="100" r="40" fill="url(#mandalGlow)" opacity="0.3"/>

          {/* Use the Sri Chakra group multiple times for tiling effect with glow */}
          <g filter="url(#goldenGlow)">
            <use href="#sriChakra" x="0" y="0"/>
            <use href="#sriChakra" x="200" y="0"/>
          <use href="#sriChakra" x="-200" y="0"/>
          <use href="#sriChakra" x="0" y="200"/>
          <use href="#sriChakra" x="200" y="200"/>
          <use href="#sriChakra" x="-200" y="200"/>
          <use href="#sriChakra" x="0" y="-200"/>
            <use href="#sriChakra" x="200" y="-200"/>
            <use href="#sriChakra" x="-200" y="-200"/>
          </g>
        </svg>
      </div>

      {/* Hero Section with Course Introduction - Merged */}
      <section className="pt-12 pb-8 px-4 bg-sgma-beige relative overflow-hidden z-10">
        {/* Decorative sacred geometry elements with animations */}
        <div className="absolute top-10 right-10 opacity-5 pointer-events-none float-element">
          <div className="text-6xl slow-rotate inline-block">✦</div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none float-element">
          <div className="text-6xl inline-block">🌀</div>
        </div>


        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Image Carousel - Moved to top */}
          <ImageCarousel />

          {/* Main Hero Title - Balanced Size */}
          <h1 className="text-h2 md:text-h1 font-black mb-3 leading-tight uppercase tracking-tight text-sgma-charcoal mt-4">
            Find Your Calm Through Sacred Geometry
          </h1>

          {/* Hero Subtitle - Balanced Size */}
          <p className="text-h3 md:text-h2 font-bold text-sgma-charcoal mb-6 max-w-3xl mx-auto leading-relaxed">
            Transform overwhelm into peace, one mandala at a time
          </p>

          {/* Hero Paragraph */}
          <p className="text-body md:text-body-lg text-sgma-charcoal mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Master the ancient art of mandalas through experiential courses that blend Vedic wisdom with hands-on creativity. No complicated formulas—just guided exploration that brings calm, clarity, and connection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-block">
              <div className="bg-sgma-cta text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-widest text-caption hover:shadow-lg hover:shadow-sgma-cta/30 transition-all duration-300">
                Explore Courses
              </div>
            </Link>
            <Link href="/bookings" className="inline-block">
              <div className="bg-transparent border-2 border-sgma-cta text-sgma-cta px-8 py-3 rounded-lg font-semibold uppercase tracking-widest text-caption hover:bg-sgma-cta/10 transition-all duration-300">
                Book Session
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-sgma-beige via-sgma-beige to-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 md:text-h1 font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Featured Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Course 1: 8 Mandala Journey */}
            <Link href="/courses#8-mandala-journey">
              <div className="group bg-white border border-sgma-navy/20 group-hover:border-sgma-navy rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md h-full flex flex-col">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src="/images/portfolio-9.svg"
                    alt="8 Mandala Journey"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    8 Mandala Journey
                  </h3>
                  <p className="text-body text-sgma-charcoal leading-relaxed flex-grow">
                    Create 8 distinct Mandala artworks, each embodying sacred proportions, balance, and rhythm. Understand Mandala as a visual language.
                  </p>
                </div>
              </div>
            </Link>

            {/* Course 2: Flower of Life Mastery */}
            <Link href="/courses#flower-of-life-mastery">
              <div className="group bg-white border border-sgma-navy/20 group-hover:border-sgma-navy rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md h-full flex flex-col">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src="/images/portfolio-1.jpg"
                    alt="Flower of Life Mastery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    Flower of Life Mastery
                  </h3>
                  <p className="text-body text-sgma-charcoal leading-relaxed flex-grow">
                    Learn the geometry of the Flower of Life through five unique forms, exploring color harmonics, Ancient wisdom, and the metaphysics of creation.
                  </p>
                </div>
              </div>
            </Link>

            {/* Course 3: Sacred Torus Foundations */}
            <Link href="/courses#sacred-torus-foundations">
              <div className="group bg-white border border-sgma-navy/20 group-hover:border-sgma-navy rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md h-full flex flex-col">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src="/images/portfolio-5.jpg"
                    alt="Sacred Torus Foundations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    Sacred Torus Foundations
                  </h3>
                  <p className="text-body text-sgma-charcoal leading-relaxed flex-grow">
                    Discover the Torus as a living symbol of energy flow and balance. Explore color skill techniques and Ancient wisdom insights.
                  </p>
                </div>
              </div>
            </Link>

          </div>

          {/* CTA to Courses */}
          <div className="text-center mt-16">
            <Link href="/courses" className="inline-block">
              <div className="bg-sgma-cta text-white px-10 py-4 rounded-lg font-semibold uppercase tracking-widest text-caption hover:shadow-lg hover:shadow-sgma-cta/30 transition-all duration-300">
                Explore All Courses
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You Section */}
      <section className="py-4 px-4 bg-white relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 md:text-h1 font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Does This Sound Like<span className="text-sgma-navy"> You?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pain Point 1 */}
            <div className="flex flex-col gap-3 pl-4 border-l-4 border-sgma-cta">
              <div className="flex items-center gap-3">
                <span className="text-3xl flex-shrink-0">🤔</span>
                <h3 className="text-h4 font-bold text-sgma-navy uppercase tracking-wide">
                  Fascination Without Direction
                </h3>
              </div>
              <p className="text-body md:text-body-lg text-sgma-charcoal leading-relaxed">
                You're captivated by sacred geometry and mandalas, but have no idea where to begin—or if you even have the skills to create them.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="flex flex-col gap-3 pl-4 border-l-4 border-sgma-navy">
              <div className="flex items-center gap-3">
                <span className="text-3xl flex-shrink-0">😰</span>
                <h3 className="text-h4 font-bold text-sgma-navy uppercase tracking-wide">
                  Blank Page Paralysis
                </h3>
              </div>
              <p className="text-body md:text-body-lg text-sgma-charcoal leading-relaxed">
                You crave the calm that comes from creative practice, but you stare at a blank page feeling stuck, overwhelmed, and unsure of the first step.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="flex flex-col gap-3 pl-4 border-l-4 border-sgma-cta">
              <div className="flex items-center gap-3">
                <span className="text-3xl flex-shrink-0">🔀</span>
                <h3 className="text-h4 font-bold text-sgma-navy uppercase tracking-wide">
                  Lost Mid-Creation
                </h3>
              </div>
              <p className="text-body md:text-body-lg text-sgma-charcoal leading-relaxed">
                You start a mandala or geometric pattern with excitement, but halfway through you lose your way, and it falls apart before your eyes.
              </p>
            </div>

            {/* Pain Point 4 */}
            <div className="flex flex-col gap-3 pl-4 border-l-4 border-sgma-navy">
              <div className="flex items-center gap-3">
                <span className="text-3xl flex-shrink-0">🎯</span>
                <h3 className="text-h4 font-bold text-sgma-navy uppercase tracking-wide">
                  Missing the Foundation
                </h3>
              </div>
              <p className="text-body md:text-body-lg text-sgma-charcoal leading-relaxed">
                You dream of creating balanced, intricate designs that reflect your inner vision, but you lack the fundamental knowledge to bring them to life.
              </p>
            </div>

            {/* Pain Point 5 */}
            <div className="flex flex-col gap-3 pl-4 border-l-4 border-sgma-cta">
              <div className="flex items-center gap-3">
                <span className="text-3xl flex-shrink-0">📺</span>
                <h3 className="text-h4 font-bold text-sgma-navy uppercase tracking-wide">
                  Surface-Level Learning
                </h3>
              </div>
              <p className="text-body md:text-body-lg text-sgma-charcoal leading-relaxed">
                You've tried YouTube tutorials and online classes, but they rush through steps, skip the meaning behind the patterns, and leave you feeling empty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How SGMA Transforms Your Practice Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-white via-sgma-beige/60 to-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 md:text-h1 font-black text-center mb-4 uppercase tracking-tight text-sgma-charcoal">
              Here's How SGMA<span className="text-sgma-navy"> Transforms</span> Your Practice
            </h2>
            <p className="text-center text-sgma-charcoal/70 text-body-lg max-w-3xl mx-auto">
              A proven 3-step method that takes you from blank page to finished mandala
            </p>
          </div>

          {/* Three Steps - Bullet Points */}
          <div className="max-w-3xl mx-auto mb-12">
            <ol className="space-y-6">
              {/* Step 1 */}
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sgma-cta/10 rounded-full flex items-center justify-center flex-col">
                  <span className="text-2xl">💡</span>
                </div>
                <div className="flex-grow pt-1">
                  <h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide">
                    <span className="text-sgma-cta">1.</span> Understand the Sacred Foundations
                  </h3>
                  <p className="text-body text-sgma-charcoal leading-relaxed">
                    Learn the meaning, proportions, and cosmic principles behind each pattern through clear visual explanations—no math degree required.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sgma-navy/10 rounded-full flex items-center justify-center flex-col">
                  <span className="text-2xl">✏️</span>
                </div>
                <div className="flex-grow pt-1">
                  <h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide">
                    <span className="text-sgma-navy">2.</span> Construct with Confidence
                  </h3>
                  <p className="text-body text-sgma-charcoal leading-relaxed">
                    Follow guided, step-by-step methods using compass and scale. Each line has purpose, each angle carries intention—you'll never feel lost.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sgma-cta/10 rounded-full flex items-center justify-center flex-col">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="flex-grow pt-1">
                  <h3 className="text-h4 font-black text-sgma-charcoal mb-2 uppercase tracking-wide">
                    <span className="text-sgma-cta">3.</span> Create Your Unique Expression
                  </h3>
                  <p className="text-body text-sgma-charcoal leading-relaxed">
                    Transform your geometric foundation into a finished artwork that reflects your inner vision. Use any medium you love—pencils, watercolours, markers, or digital tools.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Outcome Statement */}
          <div className="bg-gradient-to-r from-sgma-cta/10 via-transparent to-sgma-cta/10 border border-sgma-cta/20 rounded-2xl p-8 text-center">
            <p className="text-body-lg text-sgma-charcoal leading-relaxed max-w-3xl mx-auto">
              <span className="font-black text-sgma-cta text-h4">The Result?</span> Sacred geometry artwork you're proud to share, and a creative practice that brings lasting calm and connection.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Why SGMA Is Different Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-white via-white to-sgma-beige/40 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 md:text-h1 font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Why SGMA Is<span className="text-sgma-navy"> Different</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Pillar 1 - Ancient Wisdom */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-xl p-8 transition-all duration-300 h-full flex flex-col border-l-4 border-l-sgma-cta">
                <div className="text-5xl mb-6">📿</div>
                <h3 className="text-h3 font-black uppercase tracking-wide mb-4 text-sgma-charcoal">Ancient Wisdom, Modern Clarity</h3>
                <p className="text-body text-sgma-charcoal leading-relaxed flex-grow">
                  Learn the Vedic principles and sacred proportions behind each mandala through clear, visual explanations—no Sanskrit expertise or math background required. Understand why each pattern matters, not just how to draw it.
                </p>
              </div>
            </div>

            {/* Pillar 2 - Complete Mastery */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-navy/20 group-hover:border-sgma-cta/60 rounded-xl p-8 transition-all duration-300 h-full flex flex-col border-l-4 border-l-sgma-navy">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-h3 font-black uppercase tracking-wide mb-4 text-sgma-charcoal">From First Circle to Finished Art</h3>
                <p className="text-body text-sgma-charcoal leading-relaxed flex-grow">
                  Master multiple techniques using compass, ruler, pencils, watercolors, and markers. Create 8+ complete mandalas you'll be proud to display, gift, or sell. Many graduates frame their work or start side practices.
                </p>
              </div>
            </div>

            {/* Pillar 3 - Community & Mentorship */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-navy/20 group-hover:border-sgma-cta/60 rounded-xl p-8 transition-all duration-300 h-full flex flex-col border-l-4 border-l-sgma-cta">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-h4 font-black uppercase tracking-wide mb-4 text-sgma-charcoal">Personal Mentorship + Lifetime Community</h3>
                <p className="text-body text-sgma-charcoal leading-relaxed flex-grow">
                  Get 3 months of direct feedback on your work, weekly Q&A sessions, and access to our alumni community where graduates share techniques, host virtual workshops, and support each other's creative journeys.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary CTA Section */}
          <div className="text-center">
            <h3 className="text-h3 md:text-h2 font-black mb-3 uppercase tracking-tight text-sgma-charcoal">
              Create Your First Mandala in<span className="text-sgma-navy"> 3 Weeks</span>
            </h3>
            <p className="text-body-lg text-sgma-charcoal/70 mb-12 max-w-2xl mx-auto">
              Join 1,200+ students who've transformed blank pages into sacred geometry art—and discovered a creative practice that brings lasting calm.
            </p>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
                <div className="relative bg-white backdrop-blur-sm border border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-lg p-6 transition-all duration-300">
                  <div className="text-display-sm font-black text-sgma-cta mb-2">1,200+</div>
                  <p className="text-body text-sgma-charcoal/70">Students Completed Courses</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
                <div className="relative bg-white backdrop-blur-sm border border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-lg p-6 transition-all duration-300">
                  <div className="text-display-sm font-black text-sgma-cta mb-2">4,500+</div>
                  <p className="text-body text-sgma-charcoal/70">Mandalas Created & Shared</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
                <div className="relative bg-white backdrop-blur-sm border border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-lg p-6 transition-all duration-300">
                  <div className="text-display-sm font-black text-sgma-cta mb-2">2.1M</div>
                  <p className="text-body text-sgma-charcoal/70">Minutes of Mindful Creation</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="group relative inline-block">
                <div className="absolute inset-0 bg-sgma-cta opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
                <div className="bg-sgma-cta text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-caption hover:shadow-2xl hover:shadow-sgma-cta/50 transition-all duration-300">
                  Explore Courses & Pricing
                </div>
              </Link>
              <Link href="/bookings" className="inline-block">
                <div className="bg-transparent border-2 border-sgma-cta text-sgma-cta px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-caption hover:bg-sgma-cta/10 transition-all duration-300">
                  Book Free Discovery Call
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
