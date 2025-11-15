'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <span className="text-slate-900 font-bold text-xl">↑</span>
    </button>
  )
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative text-white pt-24 pb-20">
      {/* Page Header */}
      <section className="py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-3 uppercase tracking-tight">
            Our<span className="text-yellow-300"> Courses</span>
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            Each course is carefully designed to guide you through the foundations, construction, and creative expression of sacred geometry and mandala art.
          </p>
        </div>
      </section>

      {/* Courses Overview Table */}
      <section className="py-10 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-yellow-400">
                  <th className="text-left py-4 px-6 text-yellow-300 font-black uppercase text-sm tracking-wider">Course Name</th>
                  <th className="text-left py-4 px-6 text-yellow-300 font-black uppercase text-sm tracking-wider">Duration</th>
                  <th className="text-left py-4 px-6 text-yellow-300 font-black uppercase text-sm tracking-wider">Fee</th>
                  <th className="text-left py-4 px-6 text-yellow-300 font-black uppercase text-sm tracking-wider">Next Batch</th>
                  <th className="text-left py-4 px-6 text-yellow-300 font-black uppercase text-sm tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-white font-bold">
                    <Link href="#flower-of-life-mastery" className="hover:text-yellow-300 transition-colors">
                      Flower of Life Mastery
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-slate-200">5 days (2.5 hrs)</td>
                  <td className="py-4 px-6 text-slate-200">$450</td>
                  <td className="py-4 px-6 text-slate-200">Dec 1, 2025</td>
                  <td className="py-4 px-6">
                    <Link href="#flower-of-life-mastery" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors text-sm">
                      View →
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-white font-bold">
                    <Link href="#sacred-torus-foundations" className="hover:text-yellow-300 transition-colors">
                      Sacred Torus Foundations
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-slate-200">5 days (2.5 hrs)</td>
                  <td className="py-4 px-6 text-slate-200">$450</td>
                  <td className="py-4 px-6 text-slate-200">Dec 8, 2025</td>
                  <td className="py-4 px-6">
                    <Link href="#sacred-torus-foundations" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors text-sm">
                      View →
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-white font-bold">
                    <Link href="#8-mandala-journey" className="hover:text-yellow-300 transition-colors">
                      8 Mandala Journey
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-slate-200">14 days (2 hrs)</td>
                  <td className="py-4 px-6 text-slate-200">Please enquire</td>
                  <td className="py-4 px-6 text-slate-200">Dec 1, 2025</td>
                  <td className="py-4 px-6">
                    <Link href="#8-mandala-journey" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors text-sm">
                      View →
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-white font-bold">
                    <Link href="#sankhya-mandala" className="hover:text-yellow-300 transition-colors">
                      Sankhya Mandala
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-slate-200">2 days (3 hrs)</td>
                  <td className="py-4 px-6 text-slate-200">$250</td>
                  <td className="py-4 px-6 text-slate-200">Nov 29, 2025</td>
                  <td className="py-4 px-6">
                    <Link href="#sankhya-mandala" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors text-sm">
                      View →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Course 1: Flower of Life Mastery */}
      <section id="flower-of-life-mastery" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight text-white">
              Flower of Life Mastery
            </h2>
            <p className="text-2xl text-yellow-300 font-bold mb-4">Jewel of Shapes</p>
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              Explore five stunning variations of the Flower of Life mandala - each unlocking new color techniques and deeper insights from Vedic science. Develop your creative skills with gradients, chakra-inspired palettes, and metallic effects. Discover the ancient significance of this pattern as a universal symbol of interconnectedness and creation.
            </p>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-400 font-bold">Duration</p>
                  <p className="text-slate-200">5 days (2.5 hrs each)</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Fee</p>
                  <p className="text-slate-200">$450</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Timing</p>
                  <p className="text-slate-200">11:00am to 1:00pm</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Next Batch</p>
                  <p className="text-slate-200">Dec 1, 2025</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Book Now
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Exploratory Variations</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Maze FOL</p>
                    <p className="text-slate-300 text-sm">Discover the "maze" structure and interlocking motifs</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Granthis Flower of Life</p>
                    <p className="text-slate-300 text-sm">Explore spiritual knots in unique circle configurations</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Vedic Philosophy</p>
                    <p className="text-slate-300 text-sm">Engage with philosophical underpinnings from Vedic texts</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Color Energies</p>
                    <p className="text-slate-300 text-sm">Learn color energies relating to chakras and geometry</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Decode 144 Patterns</p>
                    <p className="text-slate-300 text-sm">Discover 144 distinct petals, triangles, and combinations</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-slate-200 text-sm mb-8">
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Introduction to the Flower of Life pattern</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Guided construction with geometric tools</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Five creative design and coloring exercises</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Symbolism in Vedic science and ancient wisdom</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Master five unique variations</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Learn color theory and mandala meditation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 2: Sacred Torus Foundations */}
      <section id="sacred-torus-foundations" className="py-20 px-4 bg-gradient-to-b from-blue-950 to-slate-950 relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight text-white">
              Sacred Torus Foundations
            </h2>
            <p className="text-2xl text-yellow-300 font-bold mb-4">The Shape of Energy</p>
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              Understand the Torus as the shape found in atoms, galaxies, and energy fields. Explore five stunning variations of torus mandalas through color techniques and creative expression. Connect with ancient wisdom about infinite energy flow and universal harmony.
            </p>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-400 font-bold">Duration</p>
                  <p className="text-slate-200">5 days (2.5 hrs each)</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Fee</p>
                  <p className="text-slate-200">$450</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Timing</p>
                  <p className="text-slate-200">2.5 hrs per session</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Next Batch</p>
                  <p className="text-slate-200">Dec 8, 2025</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Book Now
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Exploratory Variations</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Constructive Torus Art</p>
                    <p className="text-slate-300 text-sm">Build torus patterns using geometric principles</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Toroidal Torus Art</p>
                    <p className="text-slate-300 text-sm">Create flowing, dimensional torus expressions</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Torus with Symbols</p>
                    <p className="text-slate-300 text-sm">Integrate sacred symbols within torus geometry</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Torus with Mandala Patterns</p>
                    <p className="text-slate-300 text-sm">Blend torus with mandala design principles</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Psychedelic Torus</p>
                    <p className="text-slate-300 text-sm">Explore vibrant color energies and patterns</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-slate-200 text-sm mb-8">
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Introduction to torus geometry and sacred proportions</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Torus dynamics: nature, atoms, and galaxies</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Creating five unique torus variations</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Personal practice and energy field meditation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Understand torus geometry and its applications</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Create five unique torus variations</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Access to lifetime community resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 3: 8 Mandala Journey */}
      <section id="8-mandala-journey" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight text-white">
              8 Mandala Journey
            </h2>
            <p className="text-2xl text-yellow-300 font-bold mb-4">Cosmic Expression</p>
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              Create eight distinct mandala artworks, each embodying sacred proportions, balance, and rhythm. Explore mandala as a visual language of cosmic order, inner harmony, and personal transformation. Complete a comprehensive portfolio across diverse mandala styles and techniques.
            </p>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-400 font-bold">Duration</p>
                  <p className="text-slate-200">14 days (2 hrs each)</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Fee</p>
                  <p className="text-slate-200">Please enquire</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Timing</p>
                  <p className="text-slate-200">2 hrs per session</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Next Batch</p>
                  <p className="text-slate-200">Dec 1, 2025</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Book Now
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Eight Mandala Projects</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Foundation Mandala</p>
                    <p className="text-slate-300 text-sm">Geometric basics and circle divisions</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Nature-Inspired Mandala</p>
                    <p className="text-slate-300 text-sm">Organic patterns and living systems</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Chakra Mandala</p>
                    <p className="text-slate-300 text-sm">Energy centers and color associations</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Sacred Proportion Mandala</p>
                    <p className="text-slate-300 text-sm">Golden ratio and universal patterns</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Seasonal Mandala</p>
                    <p className="text-slate-300 text-sm">Rhythms of nature and transformation</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Personal Symbol Mandala</p>
                    <p className="text-slate-300 text-sm">Your unique essence and intention</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Meditative Mandala</p>
                    <p className="text-slate-300 text-sm">Contemplative design and flow</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Gallery-Ready Mandala</p>
                    <p className="text-slate-300 text-sm">Portfolio presentation and mastery</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-slate-200 text-sm mb-8">
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Sacred proportions and mandala fundamentals</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Eight step-by-step mandala creation projects</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Color theory, symbolism, and spiritual meaning</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Portfolio building and presentation techniques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Complete full mandala portfolio (8 works)</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Master key mandala principles and techniques</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Join artist network and ongoing community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 4: Sankhya Mandala */}
      <section id="sankhya-mandala" className="py-20 px-4 bg-gradient-to-b from-blue-950 to-slate-950 relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight text-white">
              Sankhya Mandala
            </h2>
            <p className="text-2xl text-yellow-300 font-bold mb-4">Ancient Numerology</p>
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              Explore Sankhya Expression through mandala art - one of India's oldest systems of metaphysical understanding. Learn to design mandalas that represent the principles (tattvas) of creation, connecting ancient numerology, mathematics, consciousness, and artistic expression in harmonious unity.
            </p>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-400 font-bold">Duration</p>
                  <p className="text-slate-200">2 days (3 hrs each)</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Fee</p>
                  <p className="text-slate-200">$250</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Timing</p>
                  <p className="text-slate-200">3 hours per session</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold">Next Batch</p>
                  <p className="text-slate-200">Nov 29, 2025</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Book Now
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Sankhya Principles</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Tattva System</p>
                    <p className="text-slate-300 text-sm">25 principles of creation and manifestation</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Sacred Numbers</p>
                    <p className="text-slate-300 text-sm">Numerological significance in mandala design</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Consciousness in Geometry</p>
                    <p className="text-slate-300 text-sm">How patterns reflect states of being</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-white font-bold">Personal Mandala Construction</p>
                    <p className="text-slate-300 text-sm">Creating your unique Sankhya expression</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-slate-200 text-sm mb-8">
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Introduction to Sankhya philosophy and cosmology</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Understanding the 25 tattvas (principles)</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Numerology and mandala construction techniques</li>
                  <li className="flex gap-2"><span className="text-yellow-400">→</span> Creating personalized Sankhya mandalas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black text-yellow-300 mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Understand ancient Sankhya numerology system</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Create personalized Sankhya mandalas</li>
                  <li className="flex gap-2"><span className="text-yellow-400">✓</span> Lifetime access to resources and community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Material Kit Add-on */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight text-white">
              Premium Art Kit<span className="text-yellow-300"> Add-on</span>
            </h2>
            <p className="text-xl text-yellow-300 font-bold mb-10">Professional-grade supplies & tools to enhance your sacred geometry practice</p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-xl font-black text-yellow-300 mb-4 uppercase">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3 items-center text-slate-200">
                    <span className="text-yellow-400">✨</span>
                    <span>Professional Compass & Ruler Set</span>
                  </li>
                  <li className="flex gap-3 items-center text-slate-200">
                    <span className="text-yellow-400">✨</span>
                    <span>Premium Paper Collection</span>
                  </li>
                  <li className="flex gap-3 items-center text-slate-200">
                    <span className="text-yellow-400">✨</span>
                    <span>Artist-Grade Color Palette</span>
                  </li>
                  <li className="flex gap-3 items-center text-slate-200">
                    <span className="text-yellow-400">✨</span>
                    <span>Specialty Brushes</span>
                  </li>
                  <li className="flex gap-3 items-center text-slate-200">
                    <span className="text-yellow-400">✨</span>
                    <span>Sacred Geometry Templates</span>
                  </li>
                  <li className="flex gap-3 items-center text-slate-200">
                    <span className="text-yellow-400">✨</span>
                    <span>Storage & Organization Kit</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-black text-yellow-300 mb-4 uppercase">Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-slate-200">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span>Start creating immediately with professional supplies</span>
                  </li>
                  <li className="flex gap-2 text-slate-200">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span>Guaranteed quality tools for better results</span>
                  </li>
                  <li className="flex gap-2 text-slate-200">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span>Curated selection saves research time</span>
                  </li>
                  <li className="flex gap-2 text-slate-200">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span>Perfect for all skill levels</span>
                  </li>
                  <li className="flex gap-2 text-slate-200">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span>Professional-grade durability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bookings" className="group relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                  Add Kit to Course
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950 to-slate-950 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight text-white">
            Ready to Begin Your<span className="text-yellow-300"> Journey?</span>
          </h2>
          <p className="text-slate-200 text-xl mb-12 max-w-2xl mx-auto">
            Each course includes personalized guidance, step-by-step instruction, and lifetime access to community resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
                Book a Session
              </div>
            </Link>
            <Link href="/collection" className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-20 group-hover:opacity-40 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
              <div className="bg-transparent border-2 border-yellow-400 text-yellow-300 px-10 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-yellow-400/10 transition-all duration-300">
                View Portfolio
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}
