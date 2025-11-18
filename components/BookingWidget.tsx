'use client'

import { useState, FormEvent } from 'react'

interface BookingWidgetProps {
  fallback?: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  date?: string
  time?: string
  topic?: string
}

export default function BookingWidget({ fallback = false }: BookingWidgetProps) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const calendlyPath = process.env.NEXT_PUBLIC_CALENDLY_PATH

  // Email validation pattern (standard RFC 5322)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Phone validation pattern (international format with flexibility)
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/

  const validateForm = (formData: Record<string, any>): FormErrors => {
    const errors: FormErrors = {}

    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address (e.g., name@example.com)'
    }

    // Phone validation (if provided)
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }

    // Date validation
    if (!formData.date) {
      errors.date = 'Please select a preferred date'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      if (selectedDate < today) {
        errors.date = 'Please select a future date'
      }
    }

    // Time validation
    if (!formData.time) {
      errors.time = 'Please select a preferred time'
    }

    // Topic validation
    if (!formData.topic) {
      errors.topic = 'Please select a session topic'
    }

    return errors
  }

  const handleFallbackSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormErrors({})
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData) as Record<string, any>

    // Validate form
    const errors = validateForm(data)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setMessage('Please fix the errors below and try again.')
      setMessageType('error')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setMessage("✓ Booking request submitted! We'll confirm shortly.")
        setMessageType('success')
        e.currentTarget.reset()
        setSelectedTopic('')
        setFormErrors({})
      } else {
        setMessage('Failed to submit booking. Please try again.')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.')
      setMessageType('error')
    } finally {
      setLoading(false)
    }
  }

  // Calendly Embed
  if (!fallback && calendlyPath) {
    return (
      <div>
        <iframe
          src={`https://calendly.com/${calendlyPath}?hide_event_type_details=1&hide_gdpr_policy=1`}
          width="100%"
          height="650"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    )
  }

  // Fallback Form
  return (
    <form onSubmit={handleFallbackSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 transition-all ${
              formErrors.name
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.name && <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 transition-all ${
              formErrors.email
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.email && <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 transition-all ${
              formErrors.phone
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.phone && <p className="text-red-600 text-xs mt-1">{formErrors.phone}</p>}
        </div>

        <div>
          <label htmlFor="timezone" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
            Your Timezone (Optional)
          </label>
          <input
            id="timezone"
            name="timezone"
            type="text"
            placeholder="IST (UTC+5:30) or EST (UTC-5)"
            className="w-full px-4 py-2 bg-white border border-sgma-cta/30 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-cta/30 focus:border-sgma-cta/50"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal focus:outline-none focus:ring-2 transition-all ${
              formErrors.date
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.date && <p className="text-red-600 text-xs mt-1">{formErrors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
            Preferred Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal focus:outline-none focus:ring-2 transition-all ${
              formErrors.time
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.time && <p className="text-red-600 text-xs mt-1">{formErrors.time}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
          Session Topic <span className="text-red-600">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal focus:outline-none focus:ring-2 transition-all ${
            formErrors.topic
              ? 'border-red-500 focus:ring-red-300'
              : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
          }`}
        >
          <option value="">Select a topic</option>
          <option value="vedic-fundamentals">Vedic Science Fundamentals</option>
          <option value="mandala-creation">Mandala Creation</option>
          <option value="sacred-geometry">Sacred Geometry</option>
          <option value="other">Other</option>
        </select>
        {formErrors.topic && <p className="text-red-600 text-xs mt-1">{formErrors.topic}</p>}
      </div>

      {selectedTopic && (
        <div className="bg-sgma-navy/5 border-2 border-sgma-navy/30 rounded-lg p-4">
          <label className="block text-sm font-semibold mb-3 text-sgma-charcoal">
            🎨 Premium Art Kit Add-On - ₹3,000
          </label>
          <p className="text-xs text-sgma-charcoal/70 mb-4">Professional-grade supplies & tools including premium brushes, quality papers, and specialty inks.</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="addon"
                value="yes"
                className="w-4 h-4 accent-sgma-cta"
              />
              <span className="text-sm text-sgma-charcoal">Yes, add to my session</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="addon"
                value="no"
                defaultChecked
                className="w-4 h-4 accent-sgma-cta"
              />
              <span className="text-sm text-sgma-charcoal">No, skip this</span>
            </label>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="notes" className="block text-sm font-semibold mb-2 text-sgma-charcoal">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Tell us about your interests and what you'd like to focus on..."
          className="w-full px-4 py-2 bg-white border border-sgma-cta/30 rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sgma-cta/30 focus:border-sgma-cta/50"
        />
      </div>

      {message && (
        <div className={`p-4 rounded-lg text-sm font-medium text-center ${
          messageType === 'success'
            ? 'bg-green-100 border border-green-300 text-green-800'
            : messageType === 'error'
            ? 'bg-red-100 border border-red-300 text-red-800'
            : 'bg-sgma-navy/5 border border-sgma-cta/30 text-sgma-charcoal'
        }`}>
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-sgma-cta text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-sgma-cta/50 disabled:opacity-50 transition-all duration-300"
      >
        {loading ? 'Submitting...' : 'Request Session'}
      </button>

      <p className="text-xs text-sgma-charcoal/70 text-center">
        We'll contact you to confirm your preferred time slot and payment details.
      </p>
    </form>
  )
}
