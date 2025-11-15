import { getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default async function AboutPage() {
  const post = await getPost('pages', 'about')

  if (!post) notFound()

  const { content, data } = post

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative text-white">
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
      <div className="py-16 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative overflow-hidden z-10">
        {/* Decorative sacred geometry elements */}
        <div className="absolute top-5 right-5 opacity-5 pointer-events-none">
          <div className="text-6xl">🌀</div>
        </div>
        <div className="absolute bottom-5 left-5 opacity-5 pointer-events-none">
          <div className="text-6xl">✦</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight text-white uppercase">
            About<span className="text-yellow-300"> SGMA Studio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            Where ancient Vedic wisdom collides with contemporary art therapy.
          </p>
        </div>
      </div>

      {/* About SGMA Studio Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-blue-950 to-slate-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* About SGMA - Introduction */}
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-8 uppercase tracking-tight text-white">
              Our Story -<span className="text-yellow-300"> SGMA Studio</span>
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Sacred Geometry Mandala Art Studio has quickly established itself as a leading educational centre with an international reputation both online and offline. Our focus is to realign the Arts language, bridge the gap of fragmented concepts of mandala and Soul Sciences, and our connection with them.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              We invite you to join us at the alchemical melting pot for Mandala art that is SGMA Studio, set in the heart of urban Chennai with cultural backdrop, to experience how Sacred Geometry Mandala Art, the language of the 'ever-true - the eternally existent', can be a powerful means to this end.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20 bg-gradient-to-r from-yellow-400/10 to-yellow-300/10 border border-yellow-400/30 rounded-xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-black uppercase tracking-tight text-yellow-300 mb-6">Our Purpose</h3>
            <p className="text-lg text-slate-200 leading-relaxed">
              At SGMA Studio, we believe that Sacred Geometry is the universal language of creation—a reflection of harmony, proportion, and consciousness through art. Through Mandala Art, we explore the "ever-true," the eternally existent, connecting mathematical order with spiritual insight and artistic expression.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-12 uppercase tracking-tight text-white">
              Core Team -<span className="text-yellow-300"> SGMA Studio</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Member 1 */}
              <div className="group relative max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-xl overflow-hidden transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/varalakshmi.png"
                      alt="Varalakshmi Bharanidharan"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <p className="text-yellow-300 font-bold uppercase tracking-wide text-lg mb-2">Varalakshmi Bharanidharan</p>
                    <p className="text-slate-300 text-sm font-semibold mb-2">Founder SGMA Studios</p>
                    <p className="text-slate-400 text-xs">Art Therapist</p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group relative max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-xl overflow-hidden transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/jayasri.png"
                      alt="Jayasri Suresh"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <p className="text-yellow-300 font-bold uppercase tracking-wide text-lg mb-2">Jayasri Suresh</p>
                    <p className="text-slate-300 text-sm font-semibold mb-2">MDA Remedial Learning Centre</p>
                    <p className="text-slate-400 text-xs">Senior Special Educator & Assessor</p>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group relative max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-xl overflow-hidden transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/ramya.png"
                      alt="Ramya Ravindran"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <p className="text-yellow-300 font-bold uppercase tracking-wide text-lg mb-2">Ramya Ravindran</p>
                    <p className="text-slate-300 text-sm font-semibold mb-2">Conceptual Mandala Artist</p>
                    <p className="text-slate-400 text-xs">Art Therapist</p>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group relative max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 group-hover:border-yellow-300 rounded-xl overflow-hidden transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/jayanthi.png"
                      alt="Jayanthi V. Menon"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <p className="text-yellow-300 font-bold uppercase tracking-wide text-lg mb-2">Jayanthi V. Menon</p>
                    <p className="text-slate-300 text-sm font-semibold mb-2">Dexio LabX, Director</p>
                    <p className="text-slate-400 text-xs">Waldorf Educator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Life at SGMA */}
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-8 uppercase tracking-tight text-white">
              Life at<span className="text-yellow-300"> SGMA</span>
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              A week rarely passes without something soul-nourishing, from hands-on art and geometry workshops to explorations in natural pigments, storytelling collaborations, and pilgrimages to sacred temples and nature sanctuaries. Many of our courses have become seasonal favorites, appearing two or three times a year, while new offerings continually blossom in response to the living needs of our creative community.
            </p>
          </div>

          {/* Why Join SGMA Courses - Timeline */}
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-16 uppercase tracking-tight text-white">
              Why Join<span className="text-yellow-300"> SGMA Courses?</span>
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 opacity-50"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 - Left */}
                <div className="flex gap-8 items-center">
                  <div className="flex-1 text-right pr-12">
                    <div className="text-5xl mb-4">👨‍🏫</div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2 uppercase tracking-wide">Learn from Experts</h3>
                    <p className="text-slate-300 leading-relaxed">Learn from experienced practitioners skilled in both art and ancient philosophy</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </div>

                {/* Item 2 - Right */}
                <div className="flex gap-8 items-center">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div className="flex-1 pl-12">
                    <div className="text-5xl mb-4">🎨</div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2 uppercase tracking-wide">Master Techniques</h3>
                    <p className="text-slate-300 leading-relaxed">Master artistic techniques and color skills rooted in ancient wisdom</p>
                  </div>
                </div>

                {/* Item 3 - Left */}
                <div className="flex gap-8 items-center">
                  <div className="flex-1 text-right pr-12">
                    <div className="text-5xl mb-4">🧘</div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2 uppercase tracking-wide">Find Your Path</h3>
                    <p className="text-slate-300 leading-relaxed">Reflect, create, and experience mandala art as a path to mindfulness and self-discovery</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </div>

                {/* Item 4 - Right */}
                <div className="flex gap-8 items-center">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div className="flex-1 pl-12">
                    <div className="text-5xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2 uppercase tracking-wide">Join the Community</h3>
                    <p className="text-slate-300 leading-relaxed">Participate in live demonstrations, hands-on workshops, and enriching symposia open to all levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Mandalas */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-300/10 border border-yellow-400/30 rounded-xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-black uppercase tracking-tight text-yellow-300 mb-6">Understanding Mandalas</h3>
            <p className="text-lg text-slate-200 leading-relaxed">
              Mandalas, in essence, can be understood to be diagrams, patterns and pictures that are distillations of ancient wisdom and harmony. Mandalas offer a potentially powerful means of deepening one's spiritual and contemplative practice. This is especially true when they are constructed—using the traditional tools of compass and straightedge—in a considered and contemplative manner.
            </p>
          </div>

          {/* Inspirational CTA Section */}
          <div className="mt-20 py-20 px-8 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border border-yellow-400/30 rounded-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tight text-white">
                Ready to<span className="text-yellow-300"> Transform</span> Your Practice?
              </h2>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                Your journey toward deeper consciousness, artistic mastery, and spiritual awakening begins here. Through sacred geometry and mandala art, you'll discover the profound connection between creation and consciousness—unlocking new dimensions of your creative potential and inner peace.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed mb-12 font-light">
                The path of transformation awaits. Every brushstroke is a meditation. Every pattern is a reflection of the universe within you. Take the first step today and join a community of seekers committed to exploring the sacred geometry of existence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/courses" className="group relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                    Explore Courses
                  </div>
                </a>
                <a href="/bookings" className="group relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-20 group-hover:opacity-40 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                  <div className="bg-transparent border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-yellow-400/10 transition-all duration-300">
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
