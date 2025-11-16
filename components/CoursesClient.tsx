'use client'

import { useState, useEffect } from 'react'

interface Course {
  title: string
  duration: string
  level: string
  price_early: number
  price_regular: number
  description?: string
  sessions?: string
  format?: string
}

interface CoursesClientProps {
  courses: Course[]
  coursesContent: string
}

export default function CoursesClient({ courses, coursesContent }: CoursesClientProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>(courses[0]?.title || '')
  const [showGoToTop, setShowGoToTop] = useState(false)

  const course = courses.find(c => c.title === selectedCourse)

  if (!course) return null

  // Handle scroll to show/hide go to top button
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setShowGoToTop(window.scrollY > 400)
    }
  }

  // Scroll to course section
  const scrollToCourse = (courseTitle: string) => {
    const courseId = courseTitle.toLowerCase().replace(/\s+/g, '-')
    const element = document.getElementById(courseId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Scroll to top
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Add scroll event listener using useEffect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Get key features for each course
  const getCourseFeatures = (courseTitle: string) => {
    switch (courseTitle) {
      case 'Flower of Life Mastery':
        return ['Vedic math & geometry principles', 'Multiple artistic styles & media', 'Materials kit & certificate', '3-month mentorship']
      case 'Sacred Torus Foundations':
        return ['100+ torus templates', '2D & 3D drawing techniques', 'Multiple medium mastery', 'Portfolio review & certificate']
      case '8 Mandala Journey':
        return ['8 unique mandala creations', 'Art journal & reflection', 'Lifetime alumni community', 'Certificate & exhibition']
      default:
        return []
    }
  }

  return (
    <>
      {/* Compare Table Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-black mb-8 text-sgma-charcoal uppercase tracking-wide">Courses Overview</h3>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {courses.map((c) => (
            <div key={c.title} className="bg-white backdrop-blur-sm rounded-xl shadow-lg border-2 border-sgma-cta/30 hover:border-sgma-cta/50 p-5 transition-all duration-300">
              {/* Course Name */}
              <h4 className="text-lg font-black text-sgma-cta uppercase tracking-wide mb-4">{c.title}</h4>

              {/* Duration & Sessions */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-sgma-navy/20">
                <div>
                  <p className="text-xs font-bold text-sgma-charcoal/60 uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-base font-black text-sgma-charcoal">{c.duration}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-sgma-charcoal/60 uppercase tracking-widest mb-1">Sessions</p>
                  <p className="text-base font-black text-sgma-charcoal">{c.sessions}</p>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-4 pb-4 border-b border-sgma-navy/20">
                <p className="text-xs font-bold text-sgma-cta uppercase tracking-widest mb-2">Investment</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-sgma-cta">₹{c.price_early.toLocaleString()}</span>
                  <span className="text-xs text-sgma-charcoal/60">Early Bird</span>
                </div>
                <p className="text-xs text-sgma-charcoal/60 font-semibold mt-1">Regular: ₹{c.price_regular.toLocaleString()}</p>
              </div>

              {/* Key Features */}
              <div className="mb-4 pb-4 border-b border-sgma-navy/20">
                <p className="text-xs font-bold text-sgma-charcoal/60 uppercase tracking-widest mb-2">Key Features</p>
                <ul className="space-y-2 text-sm text-sgma-charcoal">
                  {getCourseFeatures(c.title).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sgma-cta font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToCourse(c.title)}
                className="w-full bg-sgma-cta text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300"
              >
                View Full Details
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg border-2 border-sgma-cta/30">
          <table className="w-full bg-white backdrop-blur-sm">
            <thead>
              <tr className="bg-sgma-navy text-white">
                <th className="px-6 py-4 text-left font-black uppercase tracking-wide text-sm">Course Name</th>
                <th className="px-6 py-4 text-left font-black uppercase tracking-wide text-sm">Duration & Sessions</th>
                <th className="px-6 py-4 text-left font-black uppercase tracking-wide text-sm">Investment</th>
                <th className="px-6 py-4 text-left font-black uppercase tracking-wide text-sm">Key Features</th>
                <th className="px-6 py-4 text-center font-black uppercase tracking-wide text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, idx) => (
                <tr key={c.title} className={`border-t border-sgma-navy/20 ${idx % 2 === 0 ? 'bg-sgma-beige/30' : 'bg-white'} hover:bg-sgma-cta/5 transition-colors`}>
                  <td className="px-6 py-4">
                    <p className="font-bold text-sgma-charcoal uppercase tracking-wide text-sm">{c.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-xs text-sgma-charcoal/70 font-semibold">Duration: <span className="font-black text-sgma-charcoal">{c.duration}</span></p>
                      <p className="text-xs text-sgma-charcoal/70 font-semibold">Sessions: <span className="font-black text-sgma-charcoal">{c.sessions}</span></p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-xs text-sgma-cta font-bold uppercase tracking-widest mb-1">Early Bird</p>
                      <p className="text-lg font-black text-sgma-cta">₹{c.price_early.toLocaleString()}</p>
                      <p className="text-xs text-sgma-charcoal/70 font-semibold mt-1">Reg: ₹{c.price_regular.toLocaleString()}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="space-y-1 text-sm text-sgma-charcoal">
                      {getCourseFeatures(c.title).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-sgma-cta font-bold flex-shrink-0">✓</span>
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => scrollToCourse(c.title)}
                      className="bg-sgma-cta text-white px-4 py-2 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300 text-xs whitespace-nowrap"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bundle Offer Section */}
      <div className="mb-16">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-sgma-cta/30">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-sgma-beige/80 backdrop-blur-sm"></div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-sgma-cta/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-sgma-cta/5 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Section - Text */}
              <div className="flex-1 text-center md:text-left">
                {/* Badge */}
                <div className="inline-block mb-3 px-4 py-1 bg-sgma-cta/20 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest text-sgma-cta border border-sgma-cta/50">
                  🎁 Exclusive Bundle Deal
                </div>

                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-black mb-2 text-sgma-charcoal uppercase tracking-tight">
                  Bundle All Three Courses
                </h3>

                {/* Subtext */}
                <p className="text-sm text-sgma-charcoal/70 font-semibold mb-4 opacity-90">Limited time offer - Save 30% when you bundle all three courses</p>

                {/* Benefits */}
                <ul className="space-y-2 text-sm text-sgma-charcoal mb-6">
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="text-lg text-sgma-cta">✓</span>
                    Extended 6-month mentorship
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="text-lg text-sgma-cta">✓</span>
                    Premium materials kit included
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="text-lg text-sgma-cta">✓</span>
                    Access to all 3 exclusive alumni communities
                  </li>
                </ul>
              </div>

              {/* Right Section - Pricing & CTA */}
              <div className="flex-1 w-full md:w-auto">
                <div className="bg-white backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-4 border border-sgma-cta/30">
                  {/* Pricing Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Bundle Price */}
                    <div className="text-center">
                      <p className="text-xs font-bold text-sgma-charcoal/70 uppercase tracking-widest mb-1">Bundle</p>
                      <p className="text-3xl font-black text-sgma-cta">₹38k</p>
                    </div>

                    {/* Regular Price */}
                    <div className="text-center">
                      <p className="text-xs font-bold text-sgma-charcoal/70 uppercase tracking-widest mb-1">Regular</p>
                      <p className="text-2xl font-black text-sgma-charcoal/50 line-through">₹54k</p>
                    </div>

                    {/* Savings */}
                    <div className="text-center bg-red-500/20 rounded-lg p-3 border border-red-400/50">
                      <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">Save</p>
                      <p className="text-2xl font-black text-red-600">₹16k</p>
                      <p className="text-xs text-red-600 font-bold mt-1">30%</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-sgma-cta text-white px-6 py-3 rounded-lg font-black uppercase tracking-widest text-base hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300 shadow-lg">
                    Enroll Bundle Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="space-y-8">
        {courses.map((c) => (
          <div key={c.title} id={c.title.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-20">
            {/* Course Details Card */}
            <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-2 border-sgma-cta/30 hover:border-sgma-cta/50 transition-all duration-300">
              {/* Header with Key Info */}
              <div className="bg-sgma-navy p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase tracking-wide">{c.title}</h3>
                <p className="text-sm md:text-base font-semibold mb-4 text-white leading-relaxed">
                  {c.title === 'Flower of Life Mastery' && "Begin your sacred journey to master the ancient art of the Flower of Life - the blueprint of creation itself."}
                  {c.title === 'Sacred Torus Foundations' && "Learn the sacred geometry of flow that appears in everything from atoms to galaxies, and create stunning artistic expressions of this universal pattern."}
                  {c.title === '8 Mandala Journey' && "The journey through these 8 mandalas will awaken your creative consciousness and connect you to the sacred geometry patterns found throughout nature and consciousness."}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sgma-cream mb-1">Duration</p>
                    <p className="text-lg font-black text-white">{c.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sgma-cream mb-1">Level</p>
                    <p className="text-lg font-black text-white">{c.level}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sgma-cream mb-1">Sessions</p>
                    <p className="text-lg font-black text-white">{c.sessions}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sgma-cream mb-1">Format</p>
                    <p className="text-lg font-black text-white">{c.format?.split(',')[0]}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white">
                {/* Pricing Section - Elevated for Visibility */}
                <div className="mb-8 p-5 bg-gradient-to-br from-sgma-cta/10 to-sgma-cta/5 rounded-xl border-2 border-sgma-cta/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    {/* Pricing Info */}
                    <div className="md:col-span-2 p-4 bg-gradient-to-br from-sgma-cta/5 to-sgma-cream/10 rounded-lg border-2 border-sgma-cta/30 shadow-md">
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs font-bold text-sgma-cta uppercase tracking-widest mb-2">Early Bird</p>
                          <p className="text-3xl font-black text-sgma-cta">₹{c.price_early.toLocaleString()}</p>
                          <p className="text-xs text-sgma-charcoal/70 font-semibold mt-1">Limited Time</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-sgma-charcoal/70 uppercase tracking-widest mb-2">Regular</p>
                          <p className="text-3xl font-black text-sgma-charcoal">₹{c.price_regular.toLocaleString()}</p>
                          <p className="text-xs text-sgma-charcoal/60 font-semibold mt-1">Standard Rate</p>
                        </div>
                      </div>
                      <p className="text-xs text-sgma-cta font-bold uppercase tracking-widest text-center">Save ₹{(c.price_regular - c.price_early).toLocaleString()}</p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-center">
                      <button className="w-full bg-sgma-cta text-white px-6 py-4 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300 h-full">
                        Enroll<br />Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* What you'll get */}
                  <div>
                    <h4 className="text-lg font-black mb-4 text-sgma-cta uppercase tracking-wide">What You'll Get</h4>
                    {c.title === 'Flower of Life Mastery' && (
                      <ul className="space-y-3 text-sm text-sgma-charcoal">
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">📚</span>
                          <span><strong>16 guided sessions</strong> (2×/week, 2.5 hrs each)</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🎁</span>
                          <span><strong>Materials kit option</strong> and certificate on completion</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🤝</span>
                          <span><strong>3-month mentorship access</strong> and lifetime alumni community</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🏆</span>
                          <span><strong>Portfolio review</strong> and exhibition opportunity</span>
                        </li>
                      </ul>
                    )}
                    {c.title === 'Sacred Torus Foundations' && (
                      <ul className="space-y-3 text-sm text-sgma-charcoal">
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">📚</span>
                          <span><strong>12 guided sessions</strong> (2×/week, 2.5 hrs each)</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">📋</span>
                          <span><strong>100+ torus drawing templates</strong> (digital and printable)</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🎨</span>
                          <span><strong>Comprehensive 3D visualization workbook</strong></span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🤝</span>
                          <span><strong>3-month mentorship access</strong> and lifetime alumni community</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🏆</span>
                          <span><strong>Certificate</strong> and portfolio exhibition opportunity</span>
                        </li>
                      </ul>
                    )}
                    {c.title === '8 Mandala Journey' && (
                      <ul className="space-y-3 text-sm text-sgma-charcoal">
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">⚡</span>
                          <span><strong>12 intensive daily sessions</strong> (3 hrs each)</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🎨</span>
                          <span><strong>Complete mandala creation toolkit</strong> and sacred geometry guides</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">✨</span>
                          <span><strong>8 finished mandalas</strong> for your portfolio</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">📖</span>
                          <span><strong>Guided journaling practice</strong> integrated throughout</span>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded hover:bg-sgma-cta/10 transition-colors">
                          <span className="text-xl flex-shrink-0">🤝</span>
                          <span><strong>2-month mentorship</strong> and lifetime alumni community</span>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* Syllabus */}
                  <div>
                    <h4 className="text-lg font-black mb-4 text-sgma-cta uppercase tracking-wide">Learning Syllabus</h4>
                    {c.title === 'Flower of Life Mastery' && (
                      <ol className="space-y-2 text-sm text-sgma-charcoal list-none">
                        {[
                          { icon: '🌀', text: 'Introduction to Vedic geometry & the Flower of Life' },
                          { icon: '📐', text: 'Basic compass & proportion exercises' },
                          { icon: '🔷', text: '2D pattern building and symmetry studies' },
                          { icon: '🎯', text: '3D torus drawing fundamentals' },
                          { icon: '🎨', text: 'Color, media, and mixed-technique experiments' },
                          { icon: '🖼️', text: 'Composition & framing for exhibition' },
                          { icon: '✨', text: 'Personal mandala project (work-in-progress critiques)' },
                          { icon: '🏅', text: 'Finalization, documentation, and certificate' }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-amber-50 transition-colors">
                            <span className="text-lg flex-shrink-0">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                    {c.title === 'Sacred Torus Foundations' && (
                      <ol className="space-y-2 text-sm text-sgma-charcoal list-none">
                        {[
                          { icon: '∞', text: 'Introduction to torus geometry and historical significance' },
                          { icon: '📐', text: 'Mathematical principles, proportions, and construction methods' },
                          { icon: '📋', text: '50+ foundational drawing templates (single and nested tori)' },
                          { icon: '🌐', text: '3D visualization and dimensional transitions' },
                          { icon: '🎨', text: '50+ advanced templates and mixed-media experiments' },
                          { icon: '📝', text: 'Complex compositions, layering, and journaling practice' },
                          { icon: '✨', text: 'Personal torus series development (work-in-progress critiques)' },
                          { icon: '🏆', text: 'Portfolio finalization, documentation, and exhibition' }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-amber-50 transition-colors">
                            <span className="text-lg flex-shrink-0">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                    {c.title === '8 Mandala Journey' && (
                      <ol className="space-y-2 text-sm text-sgma-charcoal list-none">
                        {[
                          { icon: '💡', text: 'Rapid ideation & conceptual frameworks for mandala design' },
                          { icon: '⭐', text: 'Mandala structure: center, layers, symmetry, and balance principles' },
                          { icon: '📐', text: 'Foundation drawing: compass work and geometric construction' },
                          { icon: '🎨', text: 'Media exploration: ink, watercolor, colored pencils, mixed techniques' },
                          { icon: '🌈', text: 'Layering, color theory, and expressive mark-making' },
                          { icon: '📖', text: 'Journaling & intention-setting integrated with creation' },
                          { icon: '✨', text: 'Curation and sequencing: preparing your 8-mandala series' },
                          { icon: '🎭', text: 'Documentation, exhibition layout, and final presentations' }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-amber-50 transition-colors">
                            <span className="text-lg flex-shrink-0">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>

                {/* Course Format & Instructor Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-sgma-cta/5 p-3 rounded-lg border border-sgma-cta/30">
                    <p className="text-xs text-sgma-charcoal"><strong className="text-sgma-cta">Format:</strong> {c.format}</p>
                  </div>
                  <div className="bg-sgma-cta/5 p-3 rounded-lg border border-sgma-cta/30">
                    <p className="text-xs text-sgma-charcoal"><strong className="text-sgma-cta">Instructor:</strong> Varalakshmi B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Add-On Section - Displayed Once */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-sgma-cta/10 to-sgma-cta/5 border-2 border-sgma-cta/30 rounded-xl p-6">
          <h3 className="text-2xl md:text-3xl font-black mb-6 text-sgma-cta uppercase tracking-wide text-center">Premium Add-On Available for All Courses</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-sm font-bold text-sgma-charcoal mb-2">🎨 Premium Art Kit Add-on</p>
              <p className="text-sm text-sgma-charcoal/70 mb-4">Professional-grade supplies & tools including premium brushes, quality papers, and specialty inks. Perfect complement to any course for enhanced artistic expression.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-sgma-cta">₹3,000</span>
                <span className="text-sm text-sgma-charcoal/60 font-semibold">One-time fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go to Top Button - Fixed on right side */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-8 bg-sgma-cta text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-sgma-cta/50 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Go to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}
