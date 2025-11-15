import { getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import TestimonialsSection from '@/components/TestimonialsSection'

export default async function Home() {
  const post = await getPost('pages', 'home')

  if (!post) notFound()

  const { content, data } = post
  const pageData = data as { title: string; subtitle: string; slug: string }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative text-white">
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
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative overflow-hidden z-10">
        {/* Decorative sacred geometry elements with animations */}
        <div className="absolute top-20 right-20 opacity-5 pointer-events-none float-element">
          <div className="text-8xl slow-rotate inline-block">✦</div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 pointer-events-none float-element">
          <div className="text-8xl inline-block">🌀</div>
        </div>

        {/* Cosmic Wave Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 cosmic-wave"></div>
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 cosmic-wave" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/10 cosmic-wave" style={{animationDelay: '1.6s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Main Hero Title - Reduced Size */}
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight uppercase tracking-tight text-white">
            {pageData.title}
          </h1>

          {/* Hero Subtitle - Reduced Size */}
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            {pageData.subtitle}
          </p>

          {/* Course Section - Integrated */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-slate-300">
              Mandala Art<span className="text-yellow-300"> Designs</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 font-light leading-relaxed">
              Courses & Offerings: Experiential, Experimental, Creative, Ancient Wisdom
            </p>
            <p className="text-xl font-black text-yellow-300 mb-6 uppercase tracking-widest">
              Endless Inspiration for Your Mandala Journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mb-8"></div>
            <p className="text-base text-slate-200 leading-relaxed mb-8 font-light max-w-2xl mx-auto">
              SGMA helps you explore the deeper beauty of mandalas and sacred geometry. Here, geometry becomes a path of creativity, calm, and connection—not complicated formulas or school-style lessons. It's a space where artistic flow meets mindful exploration. If you're drawn to discover the joy and balance that sacred geometry brings, you'll feel right at home.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-md transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Explore Courses
              </div>
            </Link>
            <Link href="/bookings" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-20 group-hover:opacity-40 rounded-lg blur-md transition-all duration-300 -z-10"></div>
              <div className="bg-transparent border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-yellow-400/10 transition-all duration-300">
                Book Session
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950 to-slate-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight text-white">
            Does This Sound Like<span className="text-yellow-300"> You?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-purple-400/50 rounded-lg p-6 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🌀</div>
                <p className="text-slate-200 leading-relaxed">
                  You're fascinated by mandalas and sacred patterns, but not sure how to begin.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-400/50 rounded-lg p-6 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">✍️</div>
                <p className="text-slate-200 leading-relaxed">
                  You want to draw for peace and focus, but end up staring at a blank page.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-indigo-400/50 rounded-lg p-6 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🔷</div>
                <p className="text-slate-200 leading-relaxed">
                  You start a geometry, but lose your way before it comes together.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-400/50 rounded-lg p-6 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🎨</div>
                <p className="text-slate-200 leading-relaxed">
                  You dream of creating your own balanced, graceful designs, yet don't know the steps.
                </p>
              </div>
            </div>

            {/* Card 5 - Center on mobile/tablet */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">📺</div>
                <p className="text-slate-200 leading-relaxed">
                  You've followed online videos, but they move too fast or miss the essence of the art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How The Sacred Geometry Circle Helps Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight text-white">
            Here's How The Sacred<span className="text-yellow-300"> Geometry Circle</span> Helps
          </h2>

          <div className="space-y-8">
            {/* Step 1: Understand */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-slate-900">
                  <span className="text-2xl font-black">1</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Understand</h3>
                <p className="text-slate-200 text-base leading-relaxed">
                  Learn the foundations of each pattern through simple, visual explanations. Discover the meaning, rhythm, and balance behind the geometry.
                </p>
              </div>
            </div>

            {/* Step 2: Construct */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-slate-900">
                  <span className="text-2xl font-black">2</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Construct</h3>
                <p className="text-slate-200 text-base leading-relaxed">
                  Draw along with guided, step-by-step compass and scale methods from your first circle to a complete geometric grid.
                </p>
              </div>
            </div>

            {/* Step 3: Create */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-slate-900">
                  <span className="text-2xl font-black">3</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Create</h3>
                <p className="text-slate-200 text-base leading-relaxed">
                  Transform your grid into a unique artwork. Add your touch through linework, shading, or colours using pencils, watercolours, or any medium you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight text-white">
            Featured<span className="text-yellow-300"> Courses</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Course 1: Flower of Life Mastery */}
            <div className="group">
              <Link href="/collection#flower-of-life-mastery">
                <div className="relative h-64 md:h-80 mb-6 overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    src="/images/portfolio-1.jpg"
                    alt="Flower of Life Mastery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
              </Link>
              <Link href="/courses#flower-of-life-mastery" className="block">
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 group-hover:border-purple-400/50 rounded-lg p-6 transition-all duration-300 cursor-pointer">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-purple-300 transition-colors">
                    Flower of Life Mastery
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    Learn the geometry of the Flower of Life through five unique forms, exploring color harmonics, Ancient wisdom, and the metaphysics of creation. Each pattern reveals layers of universal intelligence and artistic expression.
                  </p>
                </div>
              </Link>
            </div>

            {/* Course 2: Sacred Torus Foundations */}
            <div className="group">
              <Link href="/collection#sacred-torus-foundations">
                <div className="relative h-64 md:h-80 mb-6 overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    src="/images/portfolio-5.jpg"
                    alt="Sacred Torus Foundations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
              </Link>
              <Link href="/courses#sacred-torus-foundations" className="block">
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-400/50 rounded-lg p-6 transition-all duration-300 cursor-pointer">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                    Sacred Torus Foundations
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    Discover the Torus as a living symbol of energy flow and balance. Explore color skill techniques and Ancient wisdom insights that express the infinite movement of consciousness and life.
                  </p>
                </div>
              </Link>
            </div>

            {/* Course 3: 8 Mandala Journey */}
            <div className="group">
              <Link href="/collection#8-mandala-journey">
                <div className="relative h-64 md:h-80 mb-6 overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    src="/images/portfolio-9.svg"
                    alt="8 Mandala Journey"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
              </Link>
              <Link href="/courses#8-mandala-journey" className="block">
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 group-hover:border-indigo-400/50 rounded-lg p-6 transition-all duration-300 cursor-pointer">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-indigo-300 transition-colors">
                    8 Mandala Journey
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    Create 8 distinct Mandala artworks, each embodying sacred proportions, balance, and rhythm. Understand Mandala as a visual language, a reflection of cosmic order and inner harmony.
                  </p>
                </div>
              </Link>
            </div>

            {/* Course 4: Sankhya Mandala */}
            <div className="group">
              <Link href="/collection#sankhya-mandala">
                <div className="relative h-64 md:h-80 mb-6 overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    src="/images/portfolio-12.svg"
                    alt="Sankhya Mandala"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
              </Link>
              <Link href="/courses#sankhya-mandala" className="block">
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 group-hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300 cursor-pointer">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-yellow-300 transition-colors">
                    Sankhya Mandala
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    Sankhya Expression through mandala art, one of India's oldest systems of metaphysical understanding. Learn to design Mandalas that represent the principles (tattvas) of creation, connecting mathematics, consciousness, and art.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA to Courses */}
          <div className="text-center mt-16">
            <Link href="/courses" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Explore All Courses
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* What We Offer - Card Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tight text-white">
            Why<span className="text-yellow-300"> Choose</span> SGMA
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Vedic Science */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-sm border-2 border-yellow-400/30 group-hover:border-yellow-300 rounded-xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">📿</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-yellow-300">Vedic Science</h3>
                <p className="text-slate-200 leading-relaxed text-sm flex-grow">
                  Master ancient Vedic principles, cosmic ratios, and universal laws that reshape your consciousness through science-backed methodology.
                </p>
              </div>
            </div>

            {/* Card 2 - Hands-On Creation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-sm border-2 border-slate-600/50 group-hover:border-yellow-400/50 rounded-xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-yellow-300">Hands-On Art</h3>
                <p className="text-slate-200 leading-relaxed text-sm flex-grow">
                  Work with multiple media to develop your unique artistic voice and create exhibition-ready work.
                </p>
              </div>
            </div>

            {/* Card 3 - Community & Mentorship */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-sm border-2 border-slate-600/50 group-hover:border-yellow-400/50 rounded-xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-yellow-300">Mentorship</h3>
                <p className="text-slate-200 leading-relaxed text-sm flex-grow">
                  Access to 3-month mentorship and lifetime alumni community with direct guidance from SGMA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-950 via-slate-950 to-blue-950 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tight text-white">
            Ready to<span className="text-yellow-300"> Transform</span>?
          </h2>
          <p className="text-slate-200 text-xl mb-16 max-w-2xl mx-auto">
            Join hundreds of seekers mastering Vedic science and ancient wisdom through mandala creation and conscious practice.
          </p>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Stat 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-lg p-8 transition-all duration-300">
                <div className="text-5xl font-black text-yellow-300 mb-2">1200+</div>
                <p className="text-slate-200 text-sm">People Discovered Their Purpose</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-lg p-8 transition-all duration-300">
                <div className="text-5xl font-black text-yellow-300 mb-2">4500+</div>
                <p className="text-slate-200 text-sm">Patterns Found & Explored</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-lg p-8 transition-all duration-300">
                <div className="text-5xl font-black text-yellow-300 mb-2">2.1M</div>
                <p className="text-slate-200 text-sm">Insights Captured</p>
              </div>
            </div>
          </div>

          <Link href="/courses" className="group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-5 rounded-lg font-black uppercase tracking-widest text-lg hover:shadow-2xl transition-all duration-300">
              Start Your Journey
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
