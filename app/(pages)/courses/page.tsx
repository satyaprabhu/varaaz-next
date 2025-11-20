'use client'

import Link from 'next/link'
import { useState, useEffect, FormEvent } from 'react'
import { COURSE_SESSIONS, getCourseBatchDate } from '@/lib/courseSchedule'

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
      className={`fixed bottom-8 right-8 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-sgma-cta shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <span className="text-sgma-charcoal font-bold text-xl">↑</span>
    </button>
  )
}

export default function CoursesPage() {
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterLoading(true)
    setNewsletterMessage('')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('newsletter_name')
    const email = formData.get('newsletter_email')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      if (res.ok) {
        setNewsletterMessage('Successfully subscribed! Check your email for confirmation.')
        e.currentTarget.reset()
      } else {
        const text = await res.text()
        const data = text ? JSON.parse(text) : {}
        setNewsletterMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter form error:', error)
      setNewsletterMessage('An error occurred. Please try again.')
    } finally {
      setNewsletterLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sgma-beige via-sgma-beige/40 to-sgma-beige/10 relative text-sgma-charcoal pt-24">
      {/* Page Header & Courses Overview Table */}
      <section className="py-4 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-h1 md:text-display-sm font-black mb-3 uppercase tracking-tight text-sgma-charcoal">
              Our<span className="text-sgma-navy"> Courses</span>
            </h1>
            <p className="text-body-lg text-sgma-charcoal leading-relaxed">
              Each course is carefully designed to guide you through the foundations, construction, and creative expression of sacred geometry and mandala art.
            </p>
          </div>

          <div className="md:overflow-x-visible overflow-x-auto relative">
            {/* Mobile scroll hint */}
            <div className="md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-sgma-beige to-transparent pointer-events-none z-10 flex items-center justify-end pr-2">
              <span className="text-sgma-navy font-bold text-caption animate-pulse">→</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-sgma-navy/30">
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-caption tracking-wider">Course Name</th>
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-caption tracking-wider">Duration</th>
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-caption tracking-wider">Fee</th>
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-caption tracking-wider">Next Batch</th>
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-caption tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sgma-navy/20 hover:bg-sgma-navy/5 transition-colors">
                  <td className="py-4 px-6 text-sgma-charcoal font-bold text-body">
                    <Link href="#flower-of-life-mastery" className="hover:text-sgma-navy transition-colors">
                      Flower of Life Mastery
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">5 days (2.5 hrs)</td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">$450</td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">{getCourseBatchDate('flower-of-life')}</td>
                  <td className="py-4 px-6">
                    <Link href="#flower-of-life-mastery" className="text-sgma-cta hover:text-sgma-navy font-bold transition-colors text-caption">
                      View →
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-sgma-navy/20 hover:bg-sgma-navy/5 transition-colors">
                  <td className="py-4 px-6 text-sgma-charcoal font-bold text-body">
                    <Link href="#sacred-torus-foundations" className="hover:text-sgma-navy transition-colors">
                      Sacred Torus Foundations
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">5 days (2.5 hrs)</td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">$450</td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">{getCourseBatchDate('sacred-torus')}</td>
                  <td className="py-4 px-6">
                    <Link href="#sacred-torus-foundations" className="text-sgma-cta hover:text-sgma-navy font-bold transition-colors text-caption">
                      View →
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-sgma-navy/20 hover:bg-sgma-navy/5 transition-colors">
                  <td className="py-4 px-6 text-sgma-charcoal font-bold text-body">
                    <Link href="#8-mandala-journey" className="hover:text-sgma-navy transition-colors">
                      8 Mandala Journey
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">14 days (2 hrs)</td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">Please enquire</td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-body">{getCourseBatchDate('8-mandala-journey')}</td>
                  <td className="py-4 px-6">
                    <Link href="#8-mandala-journey" className="text-sgma-cta hover:text-sgma-navy font-bold transition-colors text-caption">
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
      <section id="flower-of-life-mastery" className="py-8 px-4 bg-sgma-beige relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-h1 md:text-display-sm font-black mb-2 uppercase tracking-tight text-sgma-charcoal">
              Flower of Life Mastery
            </h2>
            <p className="text-h3 text-sgma-navy font-bold mb-4">Jewel of Shapes</p>
            <p className="text-sgma-charcoal text-body-lg leading-relaxed mb-6">
              Explore five stunning variations of the Flower of Life mandala - each unlocking new color techniques and deeper insights from Vedic science. Develop your creative skills with gradients, chakra-inspired palettes, and metallic effects. Discover the ancient significance of this pattern as a universal symbol of interconnectedness and creation.
            </p>
            <div className="bg-sgma-charcoal/10 backdrop-blur-sm border border-sgma-navy/20 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Duration</p>
                  <p className="text-sgma-charcoal font-medium text-body">5 days (2.5 hrs each)</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Fee</p>
                  <p className="text-sgma-charcoal font-medium text-body">$450</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Timing</p>
                  <p className="text-sgma-charcoal font-medium text-body">11:00am to 1:00pm</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Next Batch</p>
                  <p className="text-sgma-charcoal font-medium text-body">{getCourseBatchDate('flower-of-life')}</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="inline-block bg-sgma-cta text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
              Book Now
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Exploratory Variations</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Maze FOL</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Discover the "maze" structure and interlocking motifs</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Granthis Flower of Life</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Explore spiritual knots in unique circle configurations</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Vedic Philosophy</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Engage with philosophical underpinnings from Vedic texts</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Color Energies</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Learn color energies relating to chakras and geometry</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Decode 144 Patterns</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Discover 144 distinct petals, triangles, and combinations</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-2xl font-black text-sgma-navy mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-sgma-charcoal text-body font-medium mb-8">
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Introduction to the Flower of Life pattern</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Guided construction with geometric tools</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Five creative design and coloring exercises</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Symbolism in Vedic science and ancient wisdom</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black text-sgma-navy mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-sgma-charcoal text-body font-medium">
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Master five unique variations</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Learn color theory and mandala meditation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 2: Sacred Torus Foundations */}
      <section id="sacred-torus-foundations" className="py-8 px-4 bg-sgma-beige relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-h1 md:text-display-sm font-black mb-2 uppercase tracking-tight text-sgma-charcoal">
              Sacred Torus Foundations
            </h2>
            <p className="text-h3 text-sgma-navy font-bold mb-4">The Shape of Energy</p>
            <p className="text-sgma-charcoal text-body-lg leading-relaxed mb-6">
              Understand the Torus as the shape found in atoms, galaxies, and energy fields. Explore five stunning variations of torus mandalas through color techniques and creative expression. Connect with ancient wisdom about infinite energy flow and universal harmony.
            </p>
            <div className="bg-sgma-charcoal/10 backdrop-blur-sm border border-sgma-navy/20 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Duration</p>
                  <p className="text-sgma-charcoal font-medium text-body">5 days (2.5 hrs each)</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Fee</p>
                  <p className="text-sgma-charcoal text-body">$450</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Timing</p>
                  <p className="text-sgma-charcoal font-medium text-body">2.5 hrs per session</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Next Batch</p>
                  <p className="text-sgma-charcoal font-medium text-body">{getCourseBatchDate('sacred-torus')}</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="inline-block bg-sgma-cta text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
              Book Now
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Exploratory Variations</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Constructive Torus Art</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Build torus patterns using geometric principles</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Toroidal Torus Art</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Create flowing, dimensional torus expressions</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Torus with Symbols</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Integrate sacred symbols within torus geometry</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Torus with Mandala Patterns</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Blend torus with mandala design principles</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Psychedelic Torus</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Explore vibrant color energies and patterns</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-sgma-charcoal text-body font-medium mb-8">
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Introduction to torus geometry and sacred proportions</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Torus dynamics: nature, atoms, and galaxies</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Creating five unique torus variations</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Personal practice and energy field meditation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-sgma-charcoal text-body font-medium">
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Understand torus geometry and its applications</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Create five unique torus variations</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Access to lifetime community resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 3: 8 Mandala Journey */}
      <section id="8-mandala-journey" className="py-8 px-4 bg-sgma-beige relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-h1 md:text-display-sm font-black mb-2 uppercase tracking-tight text-sgma-charcoal">
              8 Mandala Journey
            </h2>
            <p className="text-h3 text-sgma-navy font-bold mb-4">Cosmic Expression</p>
            <p className="text-sgma-charcoal text-body-lg leading-relaxed mb-6">
              Create eight distinct mandala artworks, each embodying sacred proportions, balance, and rhythm. Explore mandala as a visual language of cosmic order, inner harmony, and personal transformation. Complete a comprehensive portfolio across diverse mandala styles and techniques.
            </p>
            <div className="bg-sgma-charcoal/10 backdrop-blur-sm border border-sgma-navy/20 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Duration</p>
                  <p className="text-sgma-charcoal font-medium text-body">14 days (2 hrs each)</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Fee</p>
                  <p className="text-sgma-charcoal font-medium text-body">Please enquire</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Timing</p>
                  <p className="text-sgma-charcoal font-medium text-body">2 hrs per session</p>
                </div>
                <div>
                  <p className="text-sgma-navy font-bold text-caption">Next Batch</p>
                  <p className="text-sgma-charcoal text-body">{getCourseBatchDate('8-mandala-journey')}</p>
                </div>
              </div>
            </div>
            <Link href="/bookings" className="inline-block bg-sgma-cta text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
              Book Now
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Eight Mandala Projects</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Foundation Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Geometric basics and circle divisions</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Nature-Inspired Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Organic patterns and living systems</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Chakra Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Energy centers and color associations</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Sacred Proportion Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Golden ratio and universal patterns</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Seasonal Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Rhythms of nature and transformation</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Personal Symbol Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Your unique essence and intention</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Meditative Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Contemplative design and flow</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sgma-cta text-xl flex-shrink-0">◆</span>
                  <div>
                    <p className="text-sgma-charcoal font-bold">Gallery-Ready Mandala</p>
                    <p className="text-sgma-charcoal/70 text-body font-medium">Portfolio presentation and mastery</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Content</h3>
                <ul className="space-y-2 text-sgma-charcoal text-body font-medium mb-8">
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Sacred proportions and mandala fundamentals</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Eight step-by-step mandala creation projects</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Color theory, symbolism, and spiritual meaning</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">→</span> Portfolio building and presentation techniques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-h3 font-black text-sgma-navy mb-4 uppercase">Outcomes</h3>
                <ul className="space-y-2 text-sgma-charcoal text-body font-medium">
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Complete full mandala portfolio (8 works)</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Master key mandala principles and techniques</li>
                  <li className="flex gap-2"><span className="text-sgma-cta">✓</span> Join artist network and ongoing community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Material Kit Add-on */}
      <section className="py-12 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-sgma-charcoal/10 backdrop-blur-sm border border-sgma-navy/20 rounded-lg p-12">
            <h2 className="text-h1 md:text-display-sm font-black mb-2 uppercase tracking-tight text-sgma-charcoal">
              Premium Art Kit<span className="text-sgma-navy"> Add-on</span>
            </h2>
            <p className="text-body-lg text-sgma-navy font-bold mb-10">Professional-grade supplies & tools to enhance your sacred geometry practice</p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-h4 font-black text-sgma-navy mb-4 uppercase">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3 items-center text-sgma-charcoal text-body">
                    <span className="text-sgma-cta">✨</span>
                    <span>Professional Compass & Ruler Set</span>
                  </li>
                  <li className="flex gap-3 items-center text-sgma-charcoal text-body">
                    <span className="text-sgma-cta">✨</span>
                    <span>Premium Paper Collection</span>
                  </li>
                  <li className="flex gap-3 items-center text-sgma-charcoal text-body">
                    <span className="text-sgma-cta">✨</span>
                    <span>Artist-Grade Color Palette</span>
                  </li>
                  <li className="flex gap-3 items-center text-sgma-charcoal text-body">
                    <span className="text-sgma-cta">✨</span>
                    <span>Specialty Brushes</span>
                  </li>
                  <li className="flex gap-3 items-center text-sgma-charcoal text-body">
                    <span className="text-sgma-cta">✨</span>
                    <span>Sacred Geometry Templates</span>
                  </li>
                  <li className="flex gap-3 items-center text-sgma-charcoal text-body">
                    <span className="text-sgma-cta">✨</span>
                    <span>Storage & Organization Kit</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-h4 font-black text-sgma-navy mb-4 uppercase">Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sgma-charcoal text-body">
                    <span className="text-sgma-cta font-bold">→</span>
                    <span>Start creating immediately with professional supplies</span>
                  </li>
                  <li className="flex gap-2 text-sgma-charcoal text-body">
                    <span className="text-sgma-cta font-bold">→</span>
                    <span>Guaranteed quality tools for better results</span>
                  </li>
                  <li className="flex gap-2 text-sgma-charcoal text-body">
                    <span className="text-sgma-cta font-bold">→</span>
                    <span>Curated selection saves research time</span>
                  </li>
                  <li className="flex gap-2 text-sgma-charcoal text-body">
                    <span className="text-sgma-cta font-bold">→</span>
                    <span>Perfect for all skill levels</span>
                  </li>
                  <li className="flex gap-2 text-sgma-charcoal text-body">
                    <span className="text-sgma-cta font-bold">→</span>
                    <span>Professional-grade durability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bookings" className="inline-block bg-sgma-cta text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
                Add Kit to Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h1 md:text-display-sm font-black mb-8 uppercase tracking-tight text-sgma-charcoal">
            Ready to Begin Your<span className="text-sgma-navy"> Journey?</span>
          </h2>
          <p className="text-sgma-charcoal text-body-lg mb-12 max-w-2xl mx-auto">
            Each course includes personalized guidance, step-by-step instruction, and lifetime access to community resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings" className="inline-block bg-sgma-cta text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
              Book a Session
            </Link>
            <Link href="/collection" className="inline-block bg-transparent border-2 border-sgma-navy text-sgma-navy px-10 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-sgma-navy/10 transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-6 px-4 bg-sgma-beige relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-h3 font-black text-center mb-2 uppercase tracking-tight text-sgma-charcoal">
            Stay Updated
          </h2>
          <p className="text-center text-sgma-charcoal mb-4 text-body">
            Get updates on new courses, special offers, and mandala art inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="bg-white/70 backdrop-blur-sm border border-sgma-navy/10 rounded-lg p-5 max-w-md mx-auto">
            <div className="mb-3">
              <input
                id="newsletter_name"
                name="newsletter_name"
                type="text"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 bg-white/50 backdrop-blur-sm border border-sgma-navy/10 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-navy/20 focus:border-sgma-navy/30 text-body"
              />
            </div>

            <div className="mb-3">
              <input
                id="newsletter_email"
                name="newsletter_email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-white/50 backdrop-blur-sm border border-sgma-navy/10 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-navy/20 focus:border-sgma-navy/30 text-body"
              />
            </div>

            {newsletterMessage && (
              <p className={`mb-3 text-center text-caption font-semibold ${newsletterMessage.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {newsletterMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={newsletterLoading}
              className="w-full bg-sgma-cta text-white py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-sgma-cta/30 disabled:opacity-50 transition-all duration-300 text-body"
            >
              {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}
