'use client'

import { useState, useEffect, FormEvent } from 'react'
import { usePathname } from 'next/navigation'

export default function NewsletterModal() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [hasSubscribed, setHasSubscribed] = useState(false)

  // Show modal after 30 seconds if user hasn't subscribed yet (but not on home page)
  useEffect(() => {
    // Don't show on home page
    if (pathname === '/') {
      setHasSubscribed(true)
      return
    }

    const hasSubscribedBefore = localStorage.getItem('newsletter_subscribed')
    if (hasSubscribedBefore) {
      setHasSubscribed(true)
      return
    }

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [pathname])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('modal_newsletter_name')
    const email = formData.get('modal_newsletter_email')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      if (res.ok) {
        setMessage('Successfully subscribed!')
        localStorage.setItem('newsletter_subscribed', 'true')
        e.currentTarget.reset()

        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false)
          setHasSubscribed(true)
        }, 2000)
      } else {
        const text = await res.text()
        const data = text ? JSON.parse(text) : {}
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter modal error:', error)
      setMessage('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Don't render if user has already subscribed or modal is closed
  if (!isOpen || hasSubscribed) {
    return null
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Modal - Slides in from right */}
      <div className={`fixed right-0 top-0 z-50 h-screen flex items-center justify-end p-4 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full h-auto p-8 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-sgma-charcoal/60 hover:text-sgma-charcoal text-2xl font-light transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-h2 font-black mb-2 uppercase tracking-tight text-sgma-charcoal">
              Stay Inspired
            </h2>
            <p className="text-sgma-charcoal/80 text-body">
              Get updates on new courses, special offers, and mandala art inspiration.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="modal_newsletter_name"
                name="modal_newsletter_name"
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 bg-sgma-charcoal/5 border border-sgma-navy/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-navy/20 focus:border-sgma-navy/30"
              />
            </div>

            <div>
              <input
                id="modal_newsletter_email"
                name="modal_newsletter_email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-sgma-charcoal/5 border border-sgma-navy/20 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-navy/20 focus:border-sgma-navy/30"
              />
            </div>

            {message && (
              <p
                className={`text-center text-body font-semibold ${
                  message.includes('Successfully') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sgma-cta text-white py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-sgma-cta/30 disabled:opacity-50 transition-all duration-300"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-sgma-charcoal/60 hover:text-sgma-charcoal text-caption font-medium transition-colors py-2"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
