'use client'

import { useState } from 'react'

interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  size?: 'small' | 'medium' | 'large' // For staggered layout
}

interface PortfolioGridProps {
  items?: PortfolioItem[]
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Default portfolio items with varied sizes for staggered layout
  const defaultItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Flower of Life Series',
      description: 'Hand-drawn sacred geometry mandala featuring the Flower of Life pattern',
      category: 'Sacred Geometry',
      image: '/images/portfolio-1.svg',
      size: 'large'
    },
    {
      id: '2',
      title: 'Torus Exploration',
      description: 'Complex multi-layered torus composition in mixed media',
      category: 'Torus Geometry',
      image: '/images/portfolio-2.svg',
      size: 'medium'
    },
    {
      id: '3',
      title: 'Mandala Meditation',
      description: 'Intricate mandala design created through guided journaling practice',
      category: 'Mandala Art',
      image: '/images/portfolio-3.svg',
      size: 'medium'
    },
    {
      id: '4',
      title: 'Vedic Patterns',
      description: 'Ancient Vedic geometry integrated with modern artistic expression',
      category: 'Sacred Geometry',
      image: '/images/portfolio-4.svg',
      size: 'small'
    },
    {
      id: '5',
      title: 'Golden Ratio Studies',
      description: 'Exploration of the 1.618 ratio in nature and mandala creation',
      category: 'Nature & Art',
      image: '/images/portfolio-5.svg',
      size: 'large'
    },
    {
      id: '6',
      title: 'Consciousness Canvas',
      description: 'Large-scale mandala artwork created through art therapy sessions',
      category: 'Art Therapy',
      image: '/images/portfolio-6.svg',
      size: 'medium'
    }
  ]

  const portfolioItems = items || defaultItems

  // Helper function to get grid span classes based on size
  const getGridClasses = (size: string | undefined) => {
    switch (size) {
      case 'large':
        return 'col-span-1 row-span-2 md:col-span-2 md:row-span-2'
      case 'small':
        return 'col-span-1 row-span-1'
      case 'medium':
      default:
        return 'col-span-1 md:col-span-1 row-span-1 md:row-span-2'
    }
  }

  // Helper function to get height classes
  const getHeightClasses = (size: string | undefined) => {
    switch (size) {
      case 'large':
        return 'h-96 md:h-full'
      case 'small':
        return 'h-60 md:h-80'
      case 'medium':
      default:
        return 'h-80 md:h-96'
    }
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-950 to-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight text-white">
            Featured<span className="text-yellow-300"> Works</span>
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Explore a curated collection of mandalas and Vedic science artworks that showcase the transformative power of creation.
          </p>
        </div>

        {/* Staggered Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-max mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-105 ${getGridClasses(
                item.size
              )}`}
              style={{ borderRadius: '2.5rem' }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Area with Overlay */}
              <div
                className={`relative w-full ${getHeightClasses(item.size)} bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden`}
                style={{ borderRadius: '2.5rem' }}
              >
                {/* Placeholder Mandala Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    🌀
                  </div>
                </div>

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-slate-700/20 to-slate-900/30"></div>

                {/* Text Overlay - Appears on Hover */}
                <div
                  className={`absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-transparent transition-all duration-300 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="inline-block mb-3 px-2 py-1 bg-yellow-400/50 rounded-full border border-yellow-300/70">
                    <p className="text-xs font-bold text-yellow-900 uppercase tracking-widest">
                      {item.category}
                    </p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-2 text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-200 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Floating Badge - Always Visible */}
                <div className="absolute top-4 right-4 px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-slate-900 font-bold text-xs uppercase tracking-widest">
                    View
                  </span>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: '2.5rem' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>

        {/* Call to Action Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-black uppercase tracking-tight mb-6 text-white">
              Create Your<span className="text-yellow-300"> Own</span> Masterpiece
            </h3>
            <p className="text-slate-200 text-lg leading-relaxed mb-8">
              Every artwork in this collection was created by seekers like you—people who discovered the transformative power of Vedic science and mandala creation. Your journey could start today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/courses"
                className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-black uppercase tracking-widest hover:shadow-2xl transition-all duration-300 text-center"
              >
                Explore Courses
              </a>
              <a
                href="/about"
                className="inline-block px-8 py-4 border-2 border-yellow-400 text-yellow-300 rounded-lg font-black uppercase tracking-widest hover:bg-yellow-400/10 transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg hover:border-yellow-300 transition-all duration-300" style={{ borderRadius: '1.5rem' }}>
              <div className="text-4xl font-black text-yellow-400 mb-2">500+</div>
              <p className="text-slate-200 text-sm uppercase tracking-widest">
                Hand-Drawn Mandalas
              </p>
            </div>
            <div className="p-6 bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg hover:border-yellow-300 transition-all duration-300" style={{ borderRadius: '1.5rem' }}>
              <div className="text-4xl font-black text-yellow-400 mb-2">10+</div>
              <p className="text-slate-200 text-sm uppercase tracking-widest">
                Years Teaching
              </p>
            </div>
            <div className="p-6 bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg hover:border-yellow-300 transition-all duration-300" style={{ borderRadius: '1.5rem' }}>
              <div className="text-4xl font-black text-yellow-400 mb-2">100%</div>
              <p className="text-slate-200 text-sm uppercase tracking-widest">
                Student Success
              </p>
            </div>
            <div className="p-6 bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg hover:border-yellow-300 transition-all duration-300" style={{ borderRadius: '1.5rem' }}>
              <div className="text-4xl font-black text-yellow-400 mb-2">∞</div>
              <p className="text-slate-200 text-sm uppercase tracking-widest">
                Lifetime Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
