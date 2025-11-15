'use client'

import { FormEvent, useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What is Sacred Geometry Mandala Art?",
      answer: "Sacred Geometry Mandala Art is the exploration of universal patterns and proportions through mandala creation. It combines ancient Vedic science with contemporary artistic expression, helping you understand the sacred mathematics underlying all creation."
    },
    {
      id: 2,
      question: "Do I need prior art experience?",
      answer: "No prior experience is required! Our courses are designed for all levels, from complete beginners to advanced artists. We focus on techniques, mindfulness, and personal expression rather than assuming any background knowledge."
    },
    {
      id: 3,
      question: "Are the courses offered online or in-person?",
      answer: "Most of our workshops are offered online via Zoom, making them accessible to participants worldwide. We also offer in-person sessions in Chennai, India. Check the course details or contact us for specific format information."
    },
    {
      id: 4,
      question: "What materials do I need for the courses?",
      answer: "Basic materials include pencils, erasers, a compass, and a straightedge. Depending on the course, you may also use ink, watercolor, colored pencils, or mixed media. A materials kit option is available with some courses."
    },
    {
      id: 5,
      question: "What is the refund policy?",
      answer: "We offer a full refund up to 6 weeks prior to course commencement. Deposits become non-refundable after the 6-week mark, though a small admin fee may apply for earlier cancellations."
    },
    {
      id: 6,
      question: "Do you offer mentorship after the course?",
      answer: "Yes! All courses include mentorship access for 2-3 months post-completion, plus lifetime access to our alumni community. You'll also receive a certificate of completion and exhibition opportunities."
    },
    {
      id: 7,
      question: "How do I book a session?",
      answer: "Visit our Bookings page to schedule a 1-on-1 personalized session. You can also reserve a spot in upcoming workshops directly through the booking form or Calendly calendar."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, net banking, UPI (for India), and PayPal. All transactions are secure and encrypted. Bank transfer is also available for Indian participants."
    }
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setMessage('Message sent successfully!')
        e.currentTarget.reset()
      } else {
        setMessage('Failed to send message. Try again.')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative text-white">
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

      <div className="py-20 px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-4 uppercase tracking-tight text-white">Get In Touch</h1>
          <p className="text-center text-slate-200 mb-12 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-200">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50"
              />
            </div>

            {message && (
              <p className={`mb-6 text-center font-semibold ${message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-400/50 disabled:opacity-50 transition-all duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* FAQ Section */}
          <div id="faqs" className="mt-20">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tight text-white">
              Frequently Asked <span className="text-yellow-300">Questions</span>
            </h2>
            <p className="text-center text-slate-200 mb-12 text-lg">
              Can't find what you're looking for? Reach out to us directly above.
            </p>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-300/60 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-yellow-400/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-yellow-300 text-2xl font-light transition-transform duration-300" style={{
                      transform: expandedFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      ▼
                    </div>
                  </button>

                  {expandedFAQ === faq.id && (
                    <div className="px-6 py-5 bg-slate-800/30 border-t border-yellow-400/20">
                      <p className="text-slate-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
