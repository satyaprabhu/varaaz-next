'use client'

import { useState } from 'react'

interface PortfolioItem {
  id: string
  title: string
  description: string
  longDescription: string
  collection: string
  image: string
}

export default function CollectionPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string>('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set())

  // Three main collections aligned with courses
  const portfolioItems: PortfolioItem[] = [
    // Flower of Life Mastery Collection
    {
      id: '1',
      title: 'Flower of Life I',
      description: 'Sacred geometry mandala featuring the Flower of Life pattern',
      longDescription: 'This intricate Flower of Life mandala demonstrates the foundational principles of sacred geometry. The overlapping circles create a harmonious pattern found throughout nature, from cellular structures to cosmic systems. Created using traditional geometric tools and color theory, this piece showcases the intersection of mathematical precision and artistic expression.',
      collection: 'Flower of Life Mastery',
      image: '/images/portfolio-1.jpg'
    },
    {
      id: '2',
      title: 'Flower of Life II',
      description: 'Hand-drawn sacred geometry with intricate detailing',
      longDescription: 'A hand-drawn interpretation of the Flower of Life, this mandala emphasizes the delicate details and intricate patterns that emerge from the sacred geometric framework. Each element is carefully positioned to create visual harmony and spiritual balance. The work demonstrates advanced techniques in circle manipulation and symmetrical composition.',
      collection: 'Flower of Life Mastery',
      image: '/images/portfolio-2.jpg'
    },
    {
      id: '3',
      title: 'Flower of Life III',
      description: 'Expressive mandala creation using traditional methods',
      longDescription: 'This expressive Flower of Life mandala blends traditional Vedic principles with contemporary artistic techniques. The composition explores color symbolism and chakra correspondences, creating a piece that resonates on both visual and spiritual levels. Each petal and curve serves a purpose in the overall mandala narrative.',
      collection: 'Flower of Life Mastery',
      image: '/images/portfolio-3.jpg'
    },
    {
      id: '4',
      title: 'Flower of Life IV',
      description: 'Sacred geometry integrated with modern artistic expression',
      longDescription: 'Combining ancient sacred geometric principles with modern artistic vision, this mandala explores the timeless nature of universal patterns. The piece demonstrates how the Flower of Life connects to quantum physics, biological systems, and spiritual consciousness. A stunning example of how ancient wisdom meets contemporary art.',
      collection: 'Flower of Life Mastery',
      image: '/images/portfolio-4.jpg'
    },

    // Sacred Torus Foundations Collection
    {
      id: '5',
      title: 'Torus Exploration I',
      description: 'Complex multi-layered torus composition in mixed media',
      longDescription: 'The torus is one of the most fundamental shapes in nature and consciousness. This first exploration presents a multi-layered torus composition that reveals how energy flows in spiraling patterns throughout the universe. From the motion of electrons around atoms to the structure of galaxies, the torus appears everywhere. This piece demonstrates how the torus can be understood as an evolutionary path of consciousness, showing the continuous cycles of creation, transformation, and renewal that characterize all existence.',
      collection: 'Sacred Torus Foundations',
      image: '/images/portfolio-5.jpg'
    },
    {
      id: '6',
      title: 'Torus Exploration II',
      description: 'Fibonacci sequence visualized through torus form',
      longDescription: 'This exploration integrates the Fibonacci sequence with torus geometry, revealing the mathematical order underlying biological growth. The Fibonacci spiral, found in shells, flowers, and DNA, emerges naturally from torus dynamics. This visualization demonstrates how sacred mathematics describes the patterns of life itself. Each spiral represents a step in the creative process, showing how infinity can be expressed through finite iterations of a simple rule. The beauty of this pattern connects mathematical precision with the organic grace of natural forms.',
      collection: 'Sacred Torus Foundations',
      image: '/images/portfolio-6.jpg'
    },
    {
      id: '7',
      title: 'Torus Exploration III',
      description: 'Golden ratio studies through 3D torus visualization',
      longDescription: 'The golden ratio, also known as the divine proportion, appears throughout nature and is considered the most aesthetically pleasing ratio to the human eye. This piece visualizes how the golden ratio manifests within torus geometry and three-dimensional space. By studying these proportions, we unlock the secrets of harmonic resonance and balance. The work demonstrates that what we perceive as beauty follows mathematical laws that reflect the underlying structure of the universe. This exploration bridges art, mathematics, and spirituality.',
      collection: 'Sacred Torus Foundations',
      image: '/images/portfolio-7.jpg'
    },
    {
      id: '8',
      title: 'Torus Exploration IV',
      description: 'Mathematical beauty in torus geometry',
      longDescription: 'This final piece in the Torus series celebrates the pure mathematical beauty of torus geometry. The torus represents balance and harmony, with its exterior and interior surfaces constantly flowing into one another. This shape embodies important philosophical concepts: wholeness, continuity, and the interplay of masculine and feminine energies. Understanding torus geometry provides insights into energy fields, consciousness, and the structure of reality itself. This piece invites contemplation of how geometry serves as the language of creation.',
      collection: 'Sacred Torus Foundations',
      image: '/images/portfolio-8.jpg'
    },

    // 8 Mandala Journey Collection
    {
      id: '9',
      title: 'Mandala I - Earth',
      description: 'Grounding mandala representing earth element',
      longDescription: 'The Earth mandala anchors our spiritual journey in physical reality and material existence. This grounding piece features stable, geometric forms that represent stability, abundance, and nourishment. The earth element connects us to our physical bodies, our home, and the natural world. Through this mandala\'s deep browns and greens, we cultivate roots and a sense of belonging. The Earth element teaches us about patience, endurance, and the manifestation of our highest aspirations into tangible form. This mandala invites us to honor our connection to the earth and all living beings.',
      collection: '8 Mandala Journey',
      image: '/images/portfolio-9.svg'
    },
    {
      id: '10',
      title: 'Mandala II - Water',
      description: 'Flow and fluidity through mandala meditation',
      longDescription: 'The Water mandala celebrates movement, flow, and emotional depth. Water is the element of emotions, intuition, and transformation. This piece features flowing curves and wave-like patterns that evoke the gentle yet powerful nature of water. Water teaches us to adapt, to cleanse, and to embrace change as a natural part of life. The cool blues and aquamarines of this mandala invite us into deeper emotional awareness and intuitive wisdom. Through meditating on this mandala, we learn to navigate life\'s currents with grace and trust.',
      collection: '8 Mandala Journey',
      image: '/images/portfolio-10.svg'
    },
    {
      id: '11',
      title: 'Mandala III - Fire',
      description: 'Transformation and energy mandala creation',
      longDescription: 'The Fire mandala embodies transformation, passion, and creative power. Fire is the element of will, courage, and divine spark. This dynamic piece features vibrant reds, oranges, and golds that represent the purifying and energizing force of fire. Fire teaches us to burn away what no longer serves us and to rise renewed from the ashes of the past. The sharp, pointed forms in this mandala speak to focus, clarity, and the activation of our personal power. Meditating on this mandala ignites the inner fire that drives transformation and authentic self-expression.',
      collection: '8 Mandala Journey',
      image: '/images/portfolio-11.svg'
    },
    {
      id: '12',
      title: 'Mandala IV - Spirit',
      description: 'Cosmic connection mandala representing consciousness',
      longDescription: 'The Spirit mandala transcends the material realm and connects us to infinite consciousness, unity, and cosmic awareness. This celestial piece incorporates purples, silvers, and whites that evoke the vastness of space and the luminosity of awakened consciousness. Spirit represents our connection to all that is beyond the physical, our soul\'s purpose, and the divine source from which all creation flows. This mandala serves as a portal to higher dimensions of understanding and spiritual insight. Through contemplating this mandala, we remember our true nature as spiritual beings having a human experience.',
      collection: '8 Mandala Journey',
      image: '/images/portfolio-12.svg'
    }
  ]

  const collections = ['All', ...Array.from(new Set(portfolioItems.map(item => item.collection)))]

  const filteredItems = selectedCollection === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.collection === selectedCollection)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sgma-beige via-sgma-beige/40 to-sgma-beige/10 relative text-sgma-charcoal">
      {/* Sri Chakra Mandala Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="mandalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD500" stopOpacity="0.8"/>
              <stop offset="25%" stopColor="#FFD500" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#C5A900" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#C5A900" stopOpacity="0"/>
            </radialGradient>
            <filter id="goldenGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <g id="sriChakra">
              <circle cx="100" cy="100" r="95" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.07"/>
              <polygon points="100,30 140,80 60,80" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.08"/>
              <polygon points="100,45 130,80 70,80" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.08"/>
              <polygon points="100,60 120,80 80,80" fill="none" stroke="#C5A900" strokeWidth="0.5" opacity="0.08"/>
              <polygon points="100,170 140,120 60,120" fill="none" stroke="#FFD500" strokeWidth="0.5" opacity="0.09"/>
              <polygon points="100,155 130,120 70,120" fill="none" stroke="#FFD500" strokeWidth="0.5" opacity="0.09"/>
              <polygon points="100,140 120,120 80,120" fill="none" stroke="#FFD500" strokeWidth="0.5" opacity="0.09"/>
              <circle cx="100" cy="100" r="85" fill="none" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <circle cx="100" cy="100" r="75" fill="none" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <circle cx="100" cy="100" r="65" fill="none" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <circle cx="100" cy="100" r="55" fill="none" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <circle cx="100" cy="100" r="45" fill="none" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <circle cx="100" cy="100" r="35" fill="none" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <circle cx="100" cy="100" r="8" fill="#FFD500" opacity="0.1"/>
              <circle cx="100" cy="100" r="5" fill="#C5A900" opacity="0.12"/>
              <line x1="100" y1="10" x2="100" y2="190" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <line x1="10" y1="100" x2="190" y2="100" stroke="#C5A900" strokeWidth="0.3" opacity="0.07"/>
              <line x1="30" y1="30" x2="170" y2="170" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
              <line x1="170" y1="30" x2="30" y2="170" stroke="#FFD500" strokeWidth="0.3" opacity="0.08"/>
            </g>
          </defs>
          <circle cx="100" cy="100" r="120" fill="url(#mandalGlow)" opacity="0.6"/>
          <circle cx="100" cy="100" r="80" fill="url(#mandalGlow)" opacity="0.4"/>
          <circle cx="100" cy="100" r="40" fill="url(#mandalGlow)" opacity="0.3"/>
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

      <div className="py-8 px-4 relative z-10">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-h1 md:text-display-sm font-black text-center mb-4 uppercase tracking-tight text-sgma-charcoal">
            Our Collections
          </h1>
          <p className="text-center text-sgma-charcoal-200 text-body-lg max-w-3xl mx-auto">
            Explore curated collections from Flower of Life Mastery, Sacred Torus Foundations, and the 8 Mandala Journey. Each collection showcases the depth and transformative practice of sacred geometry and mandala creation.
          </p>
        </div>

        {/* Collection Filter */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {collections.map(collection => (
              <button
                key={collection}
                onClick={() => setSelectedCollection(collection)}
                className={`px-6 py-2 rounded-lg font-semibold uppercase tracking-widest text-caption transition-all duration-300 ${
                  selectedCollection === collection
                    ? 'bg-sgma-cta text-white shadow-lg shadow-sgma-cta/50'
                    : 'bg-white/60 border-2 border-sgma-cta/30 text-sgma-cta hover:border-sgma-cta'
                }`}
              >
                {collection}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-6xl mx-auto">
          {selectedCollection === 'All' ? (
            // Grouped view by collection
            <div className="space-y-12">
              {['8 Mandala Journey', 'Flower of Life Mastery', 'Sacred Torus Foundations'].map(collectionName => (
                <div key={collectionName}>
                  <h2 className="text-h2 md:text-h1 font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
                    {collectionName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems
                      .filter(item => item.collection === collectionName)
                      .map(item => (
                        <div
                          key={item.id}
                          className="group cursor-pointer"
                          onMouseEnter={() => setHoveredId(item.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          onClick={() => setSelectedItem(item)}
                        >
                          {/* Card Container */}
                          <div className="relative w-full h-80 bg-sgma-charcoal/10 flex items-center justify-center overflow-hidden rounded-2xl">
                            {/* Background Image */}
                            <img
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 z-10"
                            />

                            {/* Placeholder Mandala Icon (fallback) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-sgma-beige/50 z-0">
                              <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                                🌀
                              </div>
                            </div>

                            {/* Gradient Overlay Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/5 to-sgma-navy/5 z-20"></div>

                            {/* Text Overlay - Appears on Hover */}
                            <div
                              className={`absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-sgma-navy/95 via-sgma-navy/70 to-transparent transition-all duration-300 z-30 ${
                                hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              <div className="inline-block mb-3 px-3 py-1 bg-sgma-cta/20 rounded-full border border-sgma-cta/50">
                                <p className="text-caption font-bold text-sgma-cta uppercase tracking-widest">
                                  {item.collection}
                                </p>
                              </div>
                              <p className="text-body text-white/80 line-clamp-2">
                                {item.description}
                              </p>
                            </div>

                            {/* Floating Badge - Always Visible */}
                            <div className="absolute top-4 right-4 px-3 py-2 bg-sgma-cta rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-white font-bold text-xs uppercase tracking-widest">
                                View
                              </span>
                            </div>

                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border-2 border-sgma-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          </div>

                          {/* Title Below Image - Always Visible (SEO) */}
                          <h3 className="text-h4 font-black uppercase tracking-wide mt-4 mb-2 text-sgma-charcoal">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Non-grouped view for specific collections
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Card Container */}
                  <div className="relative w-full h-80 bg-sgma-charcoal/10 flex items-center justify-center overflow-hidden rounded-2xl">
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 z-10"
                    />

                    {/* Placeholder Mandala Icon (fallback) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-sgma-beige/50 z-0">
                      <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        🌀
                      </div>
                    </div>

                    {/* Gradient Overlay Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/5 to-sgma-navy/5 z-20"></div>

                    {/* Text Overlay - Appears on Hover */}
                    <div
                      className={`absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-sgma-navy/95 via-sgma-navy/70 to-transparent transition-all duration-300 z-30 ${
                        hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="inline-block mb-3 px-3 py-1 bg-sgma-cta/20 rounded-full border border-sgma-cta/50">
                        <p className="text-caption font-bold text-sgma-cta uppercase tracking-widest">
                          {item.collection}
                        </p>
                      </div>
                      <p className="text-body text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Floating Badge - Always Visible */}
                    <div className="absolute top-4 right-4 px-3 py-2 bg-sgma-cta rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold text-xs uppercase tracking-widest">
                        View
                      </span>
                    </div>

                    {/* Border Glow on Hover */}
                    <div className="absolute inset-0 border-2 border-sgma-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>

                  {/* Title Below Image - Always Visible (SEO) */}
                  <h3 className="text-h4 font-black uppercase tracking-wide mt-4 mb-2 text-sgma-charcoal">
                    {item.title}
                  </h3>
                </div>
              ))}

              {/* Empty State */}
              {filteredItems.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-sgma-charcoal-300 text-lg">No works found in this category.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal - Detail View */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-sgma-beige rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-sgma-navy/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-sgma-cta text-white flex items-center justify-center font-bold text-xl hover:shadow-lg hover:shadow-sgma-cta/50 transition-all"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-sgma-charcoal/10">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-sgma-cta/5 to-sgma-navy/5"></div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-sgma-cta/20 rounded-lg border border-sgma-cta/50">
                    <p className="text-sgma-cta font-bold uppercase tracking-widest text-caption">
                      {selectedItem.collection}
                    </p>
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-start">
                  <h3 className="text-h2 font-black uppercase tracking-tight mb-4 text-sgma-navy">
                    {selectedItem.title}
                  </h3>
                  <p className="text-lg text-sgma-cta font-semibold mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <div className="border-t border-sgma-navy/20 pt-6 mb-6">
                    <p className={`text-sgma-charcoal leading-relaxed text-body ${expandedDescriptions.has(selectedItem.id) ? '' : 'line-clamp-3'}`}>
                      {selectedItem.longDescription}
                    </p>
                    <button
                      onClick={() => {
                        const newExpanded = new Set(expandedDescriptions)
                        if (newExpanded.has(selectedItem.id)) {
                          newExpanded.delete(selectedItem.id)
                        } else {
                          newExpanded.add(selectedItem.id)
                        }
                        setExpandedDescriptions(newExpanded)
                      }}
                      className="mt-2 text-sgma-cta font-semibold text-sm hover:underline transition-colors"
                    >
                      {expandedDescriptions.has(selectedItem.id) ? '− Less' : '+ More'}
                    </button>
                  </div>

                  {/* Related Course CTA */}
                  <div className="pt-2 border-t border-sgma-navy/20">
                    <p className="text-sm text-sgma-charcoal mb-3 font-semibold">
                      Want to create mandala art?
                    </p>
                    <a
                      href="/courses"
                      className="inline-block px-6 py-3 bg-sgma-cta text-white rounded-lg font-black uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300 w-full text-center"
                    >
                      Explore Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="max-w-6xl mx-auto mt-20 mb-12 h-1 bg-gradient-to-r from-transparent via-sgma-cta/60 to-transparent"></div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-h2 font-black uppercase tracking-tight mb-6 text-sgma-charcoal">
            Ready to Explore Your<span className="text-sgma-cta"> Journey</span>?
          </h2>
          <p className="text-sgma-charcoal-200 text-body-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover the transformative power of Vedic science, sacred geometry, and mandala creation. Our comprehensive courses guide you through deepening your practice and artistic expression. Begin your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="inline-block px-8 py-4 bg-sgma-cta text-white rounded-lg font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-sgma-cta/50 transition-all duration-300"
            >
              Explore Courses
            </a>
            <a
              href="/bookings"
              className="inline-block px-8 py-4 border-2 border-sgma-cta text-sgma-cta rounded-lg font-black uppercase tracking-widest hover:bg-sgma-cta/10 transition-all duration-300"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
