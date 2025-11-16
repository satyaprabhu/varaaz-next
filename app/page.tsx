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
    <div className="min-h-screen bg-sgma-beige relative text-sgma-charcoal">
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
      <section className="py-4 px-4 bg-sgma-beige relative overflow-hidden z-10">
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
          <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight uppercase tracking-tight text-sgma-charcoal mt-4">
            Find Your Calm Through Sacred Geometry
          </h1>

          {/* Hero Subtitle - Balanced Size */}
          <p className="text-2xl md:text-3xl font-bold text-sgma-charcoal mb-6 max-w-3xl mx-auto leading-relaxed">
            Transform overwhelm into peace, one mandala at a time
          </p>

          {/* Hero Paragraph */}
          <p className="text-base md:text-lg text-sgma-charcoal mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Master the ancient art of mandalas through experiential courses that blend Vedic wisdom with hands-on creativity. No complicated formulas—just guided exploration that brings calm, clarity, and connection.
          </p>

          {/* Course Section - Single Layout with CTA */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-sgma-charcoal">
              Mandala Art Designs
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
              {/* Text Content */}
              <p className="text-base md:text-lg text-sgma-charcoal leading-relaxed font-light flex-1">
                <span className="font-semibold">Courses & Offerings:</span> Experiential, Experimental, Creative, Ancient Wisdom. SGMA helps you explore the deeper beauty of mandalas and sacred geometry. Here, geometry becomes a path of creativity, calm, and connection—not complicated formulas or school-style lessons. It's a space where artistic flow meets mindful exploration. If you're drawn to discover the joy and balance that sacred geometry brings, you'll feel right at home.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link href="/courses" className="inline-block">
                  <div className="bg-sgma-cta text-white px-7 py-3 rounded-lg font-bold uppercase tracking-widest text-base hover:shadow-lg hover:shadow-sgma-cta/30 transition-all duration-300 whitespace-nowrap">
                    Explore Courses
                  </div>
                </Link>
                <Link href="/bookings" className="inline-block">
                  <div className="bg-transparent border-2 border-sgma-cta text-sgma-cta px-7 py-3 rounded-lg font-bold uppercase tracking-widest text-base hover:bg-sgma-cta/10 transition-all duration-300 whitespace-nowrap">
                    Book Session
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-4 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Featured<span className="text-sgma-navy"> Courses</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <h3 className="text-lg font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    8 Mandala Journey
                  </h3>
                  <p className="text-sgma-charcoal leading-relaxed text-xs flex-grow">
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
                  <h3 className="text-lg font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    Flower of Life Mastery
                  </h3>
                  <p className="text-sgma-charcoal leading-relaxed text-xs flex-grow">
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
                  <h3 className="text-lg font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    Sacred Torus Foundations
                  </h3>
                  <p className="text-sgma-charcoal leading-relaxed text-xs flex-grow">
                    Discover the Torus as a living symbol of energy flow and balance. Explore color skill techniques and Ancient wisdom insights.
                  </p>
                </div>
              </div>
            </Link>

            {/* Course 4: Sankhya Mandala */}
            <Link href="/courses#sankhya-mandala">
              <div className="group bg-white border border-sgma-navy/20 group-hover:border-sgma-navy rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md h-full flex flex-col">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src="/images/portfolio-12.svg"
                    alt="Sankhya Mandala"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-black text-sgma-charcoal mb-2 uppercase tracking-wide group-hover:text-sgma-navy transition-colors">
                    Sankhya Mandala
                  </h3>
                  <p className="text-sgma-charcoal leading-relaxed text-xs flex-grow">
                    Sankhya Expression through mandala art, one of India's oldest systems of metaphysical understanding. Learn to design Mandalas.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA to Courses */}
          <div className="text-center mt-16">
            <Link href="/courses" className="inline-block">
              <div className="bg-sgma-cta text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/30 transition-all duration-300">
                Explore All Courses
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You Section */}
      <section className="py-4 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Does This Sound Like<span className="text-sgma-navy"> You?</span>
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Point 1 */}
            <li className="flex items-start gap-4">
              <span className="text-sgma-cta text-2xl flex-shrink-0 mt-1">•</span>
              <p className="text-base md:text-lg text-sgma-charcoal leading-relaxed">
                You're fascinated by mandalas and sacred patterns, but not sure how to begin.
              </p>
            </li>

            {/* Point 2 */}
            <li className="flex items-start gap-4">
              <span className="text-sgma-cta text-2xl flex-shrink-0 mt-1">•</span>
              <p className="text-base md:text-lg text-sgma-charcoal leading-relaxed">
                You want to draw for peace and focus, but end up staring at a blank page.
              </p>
            </li>

            {/* Point 3 */}
            <li className="flex items-start gap-4">
              <span className="text-sgma-cta text-2xl flex-shrink-0 mt-1">•</span>
              <p className="text-base md:text-lg text-sgma-charcoal leading-relaxed">
                You start a geometry, but lose your way before it comes together.
              </p>
            </li>

            {/* Point 4 */}
            <li className="flex items-start gap-4">
              <span className="text-sgma-cta text-2xl flex-shrink-0 mt-1">•</span>
              <p className="text-base md:text-lg text-sgma-charcoal leading-relaxed">
                You dream of creating your own balanced, graceful designs, yet don't know the steps.
              </p>
            </li>

            {/* Point 5 */}
            <li className="flex items-start gap-4">
              <span className="text-sgma-cta text-2xl flex-shrink-0 mt-1">•</span>
              <p className="text-base md:text-lg text-sgma-charcoal leading-relaxed">
                You've followed online videos, but they move too fast or miss the essence of the art.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* How The Sacred Geometry Circle Helps Section */}
      <section className="py-4 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Here's How The Sacred<span className="text-sgma-navy"> Geometry Circle</span> Helps
          </h2>

          <div className="space-y-8">
            {/* Step 1: Understand */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sgma-navy text-white">
                  <span className="text-2xl font-black">1</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-sgma-charcoal mb-3 uppercase tracking-wide">Understand</h3>
                <p className="text-sgma-charcoal text-base leading-relaxed">
                  Learn the foundations of each pattern through simple, visual explanations. Discover the meaning, rhythm, and balance behind the geometry.
                </p>
              </div>
            </div>

            {/* Step 2: Construct */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sgma-navy text-white">
                  <span className="text-2xl font-black">2</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-sgma-charcoal mb-3 uppercase tracking-wide">Construct</h3>
                <p className="text-sgma-charcoal text-base leading-relaxed">
                  Draw along with guided, step-by-step compass and scale methods from your first circle to a complete geometric grid.
                </p>
              </div>
            </div>

            {/* Step 3: Create */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sgma-navy text-white">
                  <span className="text-2xl font-black">3</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-sgma-charcoal mb-3 uppercase tracking-wide">Create</h3>
                <p className="text-sgma-charcoal text-base leading-relaxed">
                  Transform your grid into a unique artwork. Add your touch through linework, shading, or colours using pencils, watercolours, or any medium you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* What We Offer - Card Grid */}
      <section className="py-4 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight text-sgma-charcoal">
            Why<span className="text-sgma-navy"> Choose</span> SGMA
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Vedic Science */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">📿</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-sgma-cta">Vedic Science</h3>
                <p className="text-sgma-charcoal leading-relaxed text-sm flex-grow">
                  Master ancient Vedic principles, cosmic ratios, and universal laws that reshape your consciousness through science-backed methodology.
                </p>
              </div>
            </div>

            {/* Card 2 - Hands-On Creation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-navy/20 group-hover:border-sgma-cta/60 rounded-xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-sgma-cta">Hands-On Art</h3>
                <p className="text-sgma-charcoal leading-relaxed text-sm flex-grow">
                  Work with multiple media to develop your unique artistic voice and create exhibition-ready work.
                </p>
              </div>
            </div>

            {/* Card 3 - Community & Mentorship */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-sgma-navy/20 group-hover:border-sgma-cta/60 rounded-xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-sgma-cta">Mentorship</h3>
                <p className="text-sgma-charcoal leading-relaxed text-sm flex-grow">
                  Access to 3-month mentorship and lifetime alumni community with direct guidance from SGMA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
            Ready to<span className="text-sgma-navy"> Transform</span>?
          </h2>
          <p className="text-sgma-charcoal/70 text-xl mb-16 max-w-2xl mx-auto">
            Join hundreds of seekers mastering Vedic science and ancient wisdom through mandala creation and conscious practice.
          </p>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Stat 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-lg p-8 transition-all duration-300">
                <div className="text-5xl font-black text-sgma-cta mb-2">1200+</div>
                <p className="text-sgma-charcoal/70 text-sm">People Discovered Their Purpose</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-lg p-8 transition-all duration-300">
                <div className="text-5xl font-black text-sgma-cta mb-2">4500+</div>
                <p className="text-sgma-charcoal/70 text-sm">Patterns Found & Explored</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-white backdrop-blur-sm border border-sgma-cta/30 group-hover:border-sgma-cta/60 rounded-lg p-8 transition-all duration-300">
                <div className="text-5xl font-black text-sgma-cta mb-2">2.1M</div>
                <p className="text-sgma-charcoal/70 text-sm">Insights Captured</p>
              </div>
            </div>
          </div>

          <Link href="/courses" className="group relative inline-block">
            <div className="absolute inset-0 bg-sgma-cta opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
            <div className="bg-sgma-cta text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-lg hover:shadow-2xl hover:shadow-sgma-cta/50 transition-all duration-300">
              Start Your Journey
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
