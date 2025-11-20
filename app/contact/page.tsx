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
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')

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
      answer: "Yes! All courses include mentorship access for 2-3 months post-completion, plus lifetime access to our alumni community. You will also receive a certificate of completion and exhibition opportunities."
    },
    {
      id: 7,
      question: "How do I book a session?",
      answer: "Visit our Bookings page to schedule a 1-on-1 personalized session. You can also reserve a spot in upcoming workshops directly through the booking form or Calendly calendar."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept international and Indian payment methods: credit/debit cards, net banking, UPI, PayPal, and bank transfer. All transactions are secure and encrypted. For bookings, we require a minimum 50% course fee deposit to secure your place."
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

  // Generate FAQPage schema for Google
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-sgma-beige via-sgma-beige/40 to-sgma-beige/10 relative text-sgma-charcoal">
      <div className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-h1 md:text-display-sm font-black text-center mb-4 uppercase tracking-tight text-sgma-charcoal">Get In Touch</h1>
          <p className="text-center text-sgma-charcoal mb-12 text-body-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-lg border border-white/30 rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-body font-semibold mb-2 text-sgma-charcoal">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-cta/40 focus:border-white/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-body font-semibold mb-2 text-sgma-charcoal">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-cta/40 focus:border-white/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-body font-semibold mb-2 text-sgma-charcoal">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-cta/40 focus:border-white/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-body font-semibold mb-2 text-sgma-charcoal">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-cta/40 focus:border-white/30"
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
              className="w-full bg-sgma-cta text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-sgma-cta/30 disabled:opacity-50 transition-all duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* FAQ Section */}
          <div id="faqs" className="mt-20">
            <h2 className="text-h1 md:text-display-sm font-black text-center mb-4 uppercase tracking-tight text-sgma-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-sgma-charcoal mb-12 text-body-lg">
              Can't find what you're looking for? Reach out to us directly above.
            </p>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/50 backdrop-blur-lg border border-white/30 rounded-lg overflow-hidden transition-all duration-300 shadow-md"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sgma-navy/5 transition-colors duration-200"
                  >
                    <h3 className="text-h4 font-bold text-sgma-charcoal uppercase tracking-tight pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-sgma-navy text-2xl font-light transition-transform duration-300" style={{
                      transform: expandedFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      ▼
                    </div>
                  </button>

                  {expandedFAQ === faq.id && (
                    <div className="px-6 py-5 bg-sgma-cream border-t border-sgma-navy/20">
                      <p className="text-body text-sgma-charcoal leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div id="newsletter" className="mt-20 -mx-4 px-4 py-12 bg-gradient-to-r from-sgma-cta/5 via-sgma-cream/30 to-sgma-cta/5 rounded-2xl border border-sgma-cta/20 relative">
            <h2 className="text-h2 md:text-h1 font-black text-center mb-3 uppercase tracking-tight text-sgma-charcoal">
              Stay Updated
            </h2>
            <p className="text-center text-sgma-charcoal mb-8 text-body-lg max-w-2xl mx-auto">
              Get updates on new courses, special offers, and mandala art inspiration delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="bg-white/60 backdrop-blur-xl border-2 border-sgma-cta/40 rounded-xl p-8 max-w-lg mx-auto shadow-lg relative group">
              <div className="mb-4">
                <input
                  id="newsletter_name"
                  name="newsletter_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border-2 border-sgma-cta/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/50 focus:outline-none focus:ring-2 focus:ring-sgma-cta/60 focus:border-sgma-cta/50 text-body font-medium"
                />
              </div>

              <div className="mb-4">
                <input
                  id="newsletter_email"
                  name="newsletter_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border-2 border-sgma-cta/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/50 focus:outline-none focus:ring-2 focus:ring-sgma-cta/60 focus:border-sgma-cta/50 text-body font-medium"
                />
              </div>

              {newsletterMessage && (
                <p className={`mb-4 text-center text-body font-semibold ${newsletterMessage.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {newsletterMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={newsletterLoading}
                className="w-full bg-gradient-to-r from-sgma-cta to-sgma-navy text-white py-3 rounded-lg font-bold hover:shadow-xl hover:shadow-sgma-cta/40 disabled:opacity-50 transition-all duration-300 text-body uppercase tracking-widest"
              >
                {newsletterLoading ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
