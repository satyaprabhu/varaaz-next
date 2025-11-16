import { getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'
import TeamSection from '@/components/TeamSection'

export default async function AboutPage() {
  const post = await getPost('pages', 'about')

  if (!post) notFound()

  const { content, data } = post

  return (
    <div className="min-h-screen bg-sgma-beige relative text-sgma-charcoal">
      {/* Sri Chakra Mandala Background - Soft Gold/Pale Yellow with Radiant Glow */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
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

      {/* Hero Section - Bold & Edgy */}
      <div className="py-16 px-4 bg-sgma-beige relative overflow-hidden z-10">
        {/* Decorative sacred geometry elements */}
        <div className="absolute top-5 right-5 opacity-5 pointer-events-none">
          <div className="text-6xl">🌀</div>
        </div>
        <div className="absolute bottom-5 left-5 opacity-5 pointer-events-none">
          <div className="text-6xl">✦</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight text-sgma-charcoal uppercase">
            About SGMA Studio
          </h1>
          <p className="text-lg md:text-xl text-sgma-charcoal max-w-2xl mx-auto leading-relaxed font-light">
            Where ancient Vedic wisdom collides with contemporary art therapy.
          </p>
        </div>
      </div>

      {/* About SGMA Studio Section */}
      <div className="pt-8 pb-20 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* About SGMA - Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
              Our Story - SGMA Studio
            </h2>
            <p className="text-lg text-sgma-charcoal leading-relaxed mb-6">
              Sacred Geometry Mandala Art Studio has quickly established itself as a leading educational centre with an international reputation both online and offline. Our focus is to realign the Arts language, bridge the gap of fragmented concepts of mandala and Soul Sciences, and our connection with them.
            </p>
            <p className="text-lg text-sgma-charcoal leading-relaxed">
              We invite you to join us at the alchemical melting pot for Mandala art that is SGMA Studio, set in the heart of urban Chennai with cultural backdrop, to experience how Sacred Geometry Mandala Art, the language of the 'ever-true - the eternally existent', can be a powerful means to this end.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20 bg-sgma-charcoal/10 border border-sgma-navy/20 rounded-xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-black uppercase tracking-tight text-sgma-navy mb-6">Our Purpose</h3>
            <p className="text-lg text-sgma-charcoal leading-relaxed">
              At SGMA Studio, we believe that Sacred Geometry is the universal language of creation—a reflection of harmony, proportion, and consciousness through art. Through Mandala Art, we explore the "ever-true," the eternally existent, connecting mathematical order with spiritual insight and artistic expression.
            </p>
          </div>

          <TeamSection />

          {/* Life at SGMA */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
              Life at SGMA
            </h2>
            <p className="text-lg text-sgma-charcoal leading-relaxed">
              A week rarely passes without something soul-nourishing, from hands-on art and geometry workshops to explorations in natural pigments, storytelling collaborations, and pilgrimages to sacred temples and nature sanctuaries. Many of our courses have become seasonal favorites, appearing two or three times a year, while new offerings continually blossom in response to the living needs of our creative community.
            </p>
          </div>

          {/* Why Join SGMA Courses - 2 Column Layout */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
              Why Join SGMA Courses?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0 w-8 h-8 rounded-lg bg-sgma-cta/20 flex items-center justify-center">👨‍🏫</span>
                <div>
                  <h3 className="font-bold text-sgma-cta mb-1">Learn from Experts</h3>
                  <p className="text-sgma-charcoal">Learn from experienced practitioners skilled in both art and ancient philosophy</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0 w-8 h-8 rounded-lg bg-sgma-cta/20 flex items-center justify-center">🎨</span>
                <div>
                  <h3 className="font-bold text-sgma-cta mb-1">Master Techniques</h3>
                  <p className="text-sgma-charcoal">Master artistic techniques and color skills rooted in ancient wisdom</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0 w-8 h-8 rounded-lg bg-sgma-cta/20 flex items-center justify-center">🧘</span>
                <div>
                  <h3 className="font-bold text-sgma-cta mb-1">Find Your Path</h3>
                  <p className="text-sgma-charcoal">Reflect, create, and experience mandala art as a path to mindfulness and self-discovery</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0 w-8 h-8 rounded-lg bg-sgma-cta/20 flex items-center justify-center">✨</span>
                <div>
                  <h3 className="font-bold text-sgma-cta mb-1">Join the Community</h3>
                  <p className="text-sgma-charcoal">Participate in live demonstrations, hands-on workshops, and enriching symposia open to all levels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Mandalas */}
          <div className="bg-sgma-charcoal/10 border border-sgma-navy/20 rounded-xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-black uppercase tracking-tight text-sgma-navy mb-6">Understanding Mandalas</h3>
            <p className="text-lg text-sgma-charcoal leading-relaxed">
              Mandalas, in essence, can be understood to be diagrams, patterns and pictures that are distillations of ancient wisdom and harmony. Mandalas offer a potentially powerful means of deepening one's spiritual and contemplative practice. This is especially true when they are constructed—using the traditional tools of compass and straightedge—in a considered and contemplative manner.
            </p>
          </div>

          {/* Inspirational CTA Section */}
          <div className="mt-20 py-20 px-8 bg-sgma-beige border border-sgma-navy/20 rounded-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
                Ready to Transform Your Practice?
              </h2>

              <p className="text-lg md:text-xl text-sgma-charcoal leading-relaxed mb-6">
                Your journey toward deeper consciousness, artistic mastery, and spiritual awakening begins here. Through sacred geometry and mandala art, you'll discover the profound connection between creation and consciousness—unlocking new dimensions of your creative potential and inner peace.
              </p>

              <p className="text-lg text-sgma-charcoal leading-relaxed mb-12 font-light">
                The path of transformation awaits. Every brushstroke is a meditation. Every pattern is a reflection of the universe within you. Take the first step today and join a community of seekers committed to exploring the sacred geometry of existence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/courses" className="group relative inline-block">
                  <div className="absolute inset-0 bg-sgma-cta opacity-75 group-hover:opacity-100 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                  <div className="bg-sgma-cta text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl hover:shadow-sgma-cta/50 transition-all duration-300">
                    Explore Courses
                  </div>
                </a>
                <a href="/bookings" className="group relative inline-block">
                  <div className="absolute inset-0 bg-sgma-cta opacity-20 group-hover:opacity-40 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                  <div className="bg-transparent border-2 border-sgma-cta text-sgma-cta px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-sgma-cta/10 transition-all duration-300">
                    Book a Session
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
