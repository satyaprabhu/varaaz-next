'use client'

import { useState, FormEvent, useEffect } from 'react'

interface BookingWidgetProps {
  fallback?: boolean
}

interface FormErrors {
  name?: string
  email?: string
  countryCode?: string
  phone?: string
  date?: string
  time?: string
  topic?: string
}

const COUNTRY_CODES = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'United States' },
  { code: '+1', country: 'Canada' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+61', country: 'Australia' },
  { code: '+64', country: 'New Zealand' },
  { code: '+86', country: 'China' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+31', country: 'Netherlands' },
  { code: '+41', country: 'Switzerland' },
  { code: '+43', country: 'Austria' },
  { code: '+45', country: 'Denmark' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+48', country: 'Poland' },
  { code: '+55', country: 'Brazil' },
  { code: '+54', country: 'Argentina' },
  { code: '+52', country: 'Mexico' },
  { code: '+27', country: 'South Africa' },
  { code: '+971', country: 'United Arab Emirates' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+60', country: 'Malaysia' },
  { code: '+65', country: 'Singapore' },
  { code: '+66', country: 'Thailand' },
  { code: '+84', country: 'Vietnam' },
]

const COURSE_PRICING: Record<string, {
  name: string
  priceUSD: number
  priceINR: number
  duration: string
}> = {
  'flower-of-life': {
    name: 'Flower of Life Mastery',
    priceUSD: 450,
    priceINR: 38000,
    duration: '8 weeks',
  },
  'sacred-torus': {
    name: 'Sacred Torus Foundations',
    priceUSD: 450,
    priceINR: 38000,
    duration: '8 weeks',
  },
  '8-mandala-journey': {
    name: '8 Mandala Journey',
    priceUSD: 250,
    priceINR: 20000,
    duration: '4 weeks',
  },
}

const PREMIUM_KIT_PRICING = {
  INR: { price: 3000, symbol: '₹', label: 'INR' },
  USD: { price: 35, symbol: '$', label: 'USD' },
}

export default function BookingWidget({ fallback = false }: BookingWidgetProps) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedCountryCode, setSelectedCountryCode] = useState('')
  const [addonSelected, setAddonSelected] = useState('no')
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD'>('USD')
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  // Determine currency based on country code
  const getCurrencyFromCountryCode = (code: string): 'INR' | 'USD' => {
    if (code === '+91') return 'INR' // India
    return 'USD' // Default to USD for other countries
  }

  // Update currency when country code changes
  const handleCountryCodeChange = (code: string) => {
    setSelectedCountryCode(code)
    setSelectedCurrency(getCurrencyFromCountryCode(code))
  }

  // Get current pricing info
  const kitPricing = PREMIUM_KIT_PRICING[selectedCurrency]

  // Calculate total amount based on selected currency
  const getTotal = () => {
    if (!selectedTopic) return 0
    const coursePricing = COURSE_PRICING[selectedTopic]
    if (!coursePricing) return 0
    const coursePrice = selectedCurrency === 'INR' ? coursePricing.priceINR : coursePricing.priceUSD
    const addonPrice = addonSelected === 'yes' ? kitPricing.price : 0
    return coursePrice + addonPrice
  }

  const currentCourse = selectedTopic ? COURSE_PRICING[selectedTopic] : null
  const total = getTotal()

  // const calendlyPath = process.env.NEXT_PUBLIC_CALENDLY_PATH

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

    // Country code validation
    if (!formData.countryCode) {
      errors.countryCode = 'Please select a country code'
    }

    // Phone validation (required)
    if (!formData.phone) {
      errors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (10+ digits)'
    }

    // Date validation
    if (!formData.date) {
      errors.date = 'Please select a preferred date'
    } else {
      const [year, month, day] = formData.date.split('-').map(Number)
      const selectedDate = new Date(year, month - 1, day)
      const today = new Date()
      today.setHours(0, 0, 0, 0) // Set to start of day for fair comparison
      selectedDate.setHours(0, 0, 0, 0) // Set to start of day for fair comparison
      if (selectedDate < today) {
        errors.date = 'Please select a future date'
      }
    }

    // Topic validation
    if (!formData.topic) {
      errors.topic = 'Please select a session topic'
    }

    return errors
  }

  const handlePaymentSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormErrors({})
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData) as Record<string, any>

    console.log('Form data:', data)

    // Validate form
    const errors = validateForm(data)
    console.log('Validation errors:', errors)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setMessage('Please fix the errors below and try again.')
      setMessageType('error')
      return
    }

    setLoading(true)

    try {
      const coursePricing = COURSE_PRICING[selectedTopic]
      const amount = selectedCurrency === 'INR' ? coursePricing.priceINR / 2 : coursePricing.priceUSD / 2

      // Step 1: Create Razorpay order
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          courseId: selectedTopic,
          courseName: coursePricing.name,
          email: data.email,
          name: data.name,
          currency: selectedCurrency,
        }),
      })

      if (!orderRes.ok) {
        const errorData = await orderRes.json()
        console.error('Order creation failed:', errorData)
        setMessage(
          errorData.details
            ? `Payment initialization failed: ${errorData.details}`
            : 'Failed to initialize payment. Please try again.'
        )
        setMessageType('error')
        setLoading(false)
        return
      }

      const orderData = await orderRes.json()
      const orderId = orderData.orderId

      // Step 2: Load Razorpay script
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = () => {
        // Step 3: Open Razorpay modal
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: orderData.amount,
          currency: orderData.currency,
          name: 'SGMA - Art & Learning',
          description: coursePricing.name,
          order_id: orderId,
          prefill: {
            name: data.name,
            email: data.email,
            contact: `${data.countryCode}${data.phone}`,
          },
          handler: async (response: any) => {
            // Step 4: Verify payment on server
            const verifyRes = await fetch('/api/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                courseId: selectedTopic,
                courseName: coursePricing.name,
                email: data.email,
                amount: amount,
              }),
            })

            if (verifyRes.ok) {
              setMessage('✓ Payment successful! Your booking has been confirmed.')
              setMessageType('success')
              e.currentTarget.reset()
              setSelectedTopic('')
              setFormErrors({})
              // Optionally redirect or show next steps
              setTimeout(() => {
                window.location.href = '/bookings'
              }, 2000)
            } else {
              setMessage('Payment verification failed. Please contact support.')
              setMessageType('error')
            }
            setLoading(false)
          },
          theme: {
            color: '#FFD500', // SGMA accent color
          },
        }

        const razorpay = new (window as any).Razorpay(options)
        razorpay.on('payment.failed', (response: any) => {
          setMessage(`Payment failed: ${response.error.description}`)
          setMessageType('error')
          setLoading(false)
        })
        razorpay.open()
      }
      document.body.appendChild(script)
    } catch (error) {
      console.error('Payment error:', error)
      setMessage('An error occurred. Please try again later.')
      setMessageType('error')
      setLoading(false)
    }
  }

  // Calendly Embed - Disabled for now, will enable later
  // if (!fallback && calendlyPath) {
  //   return (
  //     <div>
  //       <iframe
  //         src={`https://calendly.com/${calendlyPath}?hide_event_type_details=1&hide_gdpr_policy=1`}
  //         width="100%"
  //         height="650"
  //         frameBorder="0"
  //         className="rounded-lg"
  //       ></iframe>
  //     </div>
  //   )
  // }

  // Booking Form with Razorpay Payment
  return (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-body font-semibold mb-2 text-sgma-charcoal">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="John Doe"
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/50 focus:outline-none focus:ring-2 transition-all ${
              formErrors.name
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.name && <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-body font-semibold mb-2 text-sgma-charcoal">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/50 focus:outline-none focus:ring-2 transition-all ${
              formErrors.email
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.email && <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Country Code */}
        <div>
          <label htmlFor="countryCode" className="block text-body font-semibold mb-2 text-sgma-charcoal">
            Country <span className="text-red-600">*</span>
          </label>
          <select
            id="countryCode"
            name="countryCode"
            value={selectedCountryCode}
            onChange={(e) => handleCountryCodeChange(e.target.value)}
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal focus:outline-none focus:ring-2 transition-all ${
              formErrors.countryCode
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          >
            <option value="">Select your country</option>
            {COUNTRY_CODES.map((item, idx) => (
              <option key={idx} value={item.code}>
                {item.country}
              </option>
            ))}
          </select>
          {formErrors.countryCode && <p className="text-red-600 text-xs mt-1">{formErrors.countryCode}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-body font-semibold mb-2 text-sgma-charcoal">
            Phone Number <span className="text-red-600">*</span>
            <span className="text-xs font-normal text-sgma-charcoal/60 ml-2">(without country code)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="9876543210"
            className={`w-full px-4 py-2 bg-white border rounded-lg text-sgma-charcoal placeholder-sgma-charcoal/50 focus:outline-none focus:ring-2 transition-all ${
              formErrors.phone
                ? 'border-red-500 focus:ring-red-300'
                : 'border-sgma-cta/30 focus:ring-sgma-cta/30 focus:border-sgma-cta/50'
            }`}
          />
          {formErrors.phone && <p className="text-red-600 text-xs mt-1">{formErrors.phone}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-body font-semibold mb-2 text-sgma-charcoal">
            Preferred Date <span className="text-red-600">*</span>
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
          <label htmlFor="time" className="block text-body font-semibold mb-2 text-sgma-charcoal">
            Preferred Time <span className="text-xs text-sgma-charcoal/60 font-normal">(optional)</span>
          </label>
          <input
            id="time"
            name="time"
            type="time"
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
        <label htmlFor="topic" className="block text-body font-semibold mb-2 text-sgma-charcoal">
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
          <option value="">Select a course</option>
          <option value="flower-of-life">Flower of Life Mastery</option>
          <option value="sacred-torus">Sacred Torus Foundations</option>
          <option value="8-mandala-journey">8 Mandala Journey</option>
        </select>
        {formErrors.topic && <p className="text-red-600 text-xs mt-1">{formErrors.topic}</p>}
      </div>

      {selectedTopic && currentCourse && (
        <>
          {/* Course Pricing Details */}
          <div className="bg-sgma-cta/10 border-2 border-sgma-cta/30 rounded-lg p-4">
            <h3 className="text-sm font-bold text-sgma-charcoal mb-3">Course Details & Pricing</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-sgma-navy font-semibold mb-1">Course</p>
                <p className="text-sgma-charcoal">{currentCourse.name}</p>
              </div>
              <div>
                <p className="text-sgma-navy font-semibold mb-1">Duration</p>
                <p className="text-sgma-charcoal">{currentCourse.duration}</p>
              </div>
              <div>
                <p className="text-sgma-navy font-semibold mb-1">Course Fee</p>
                <p className="text-sgma-charcoal font-bold">
                  {selectedCurrency === 'INR'
                    ? currentCourse.priceINR === 0
                      ? 'Contact us for pricing'
                      : `₹${currentCourse.priceINR}`
                    : currentCourse.priceUSD === 0
                    ? 'Contact us for pricing'
                    : `$${currentCourse.priceUSD}`}
                </p>
              </div>
              <div>
                <p className="text-sgma-navy font-semibold mb-1">Currency</p>
                <p className="text-sgma-charcoal font-bold">{kitPricing.label}</p>
              </div>
            </div>
          </div>

          {/* Premium Art Kit Add-On */}
          <div className="bg-sgma-navy/5 border-2 border-sgma-navy/30 rounded-lg p-4">
            <label className="block text-sm font-semibold mb-3 text-sgma-charcoal">
              🎨 Premium Art Kit Add-On - {kitPricing.symbol}{kitPricing.price} ({kitPricing.label})
            </label>
            <p className="text-xs text-sgma-charcoal/70 mb-4">Professional-grade supplies & tools including premium brushes, quality papers, and specialty inks.</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="addon"
                  value="yes"
                  checked={addonSelected === 'yes'}
                  onChange={(e) => setAddonSelected(e.target.value)}
                  className="w-4 h-4 accent-sgma-cta"
                />
                <span className="text-sm text-sgma-charcoal">Yes, add to my session</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="addon"
                  value="no"
                  checked={addonSelected === 'no'}
                  onChange={(e) => setAddonSelected(e.target.value)}
                  className="w-4 h-4 accent-sgma-cta"
                />
                <span className="text-sm text-sgma-charcoal">No, skip this</span>
              </label>
            </div>
          </div>

          {/* Total Amount Summary */}
          <div className="bg-gradient-to-r from-sgma-navy/10 to-sgma-cta/10 border-2 border-sgma-navy/30 rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sgma-charcoal font-semibold">Course Fee:</span>
                <span className="text-sgma-charcoal font-bold">{kitPricing.symbol}{selectedCurrency === 'INR' ? currentCourse.priceINR : currentCourse.priceUSD}</span>
              </div>
              {addonSelected === 'yes' && (
                <div className="flex justify-between items-center pb-3 border-b border-sgma-navy/20">
                  <span className="text-sgma-charcoal font-semibold">Premium Art Kit:</span>
                  <span className="text-sgma-charcoal font-bold">{kitPricing.symbol}{kitPricing.price}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-3">
                <span className="text-lg font-black text-sgma-navy">Total Amount Due:</span>
                <span className="text-2xl font-black text-sgma-cta">{kitPricing.symbol}{total}</span>
              </div>
              <p className="text-xs text-sgma-charcoal/70">A 50% deposit ({kitPricing.symbol}{Math.ceil(total / 2)}) is required to secure your place.</p>
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor="notes" className="block text-body font-semibold mb-2 text-sgma-charcoal">
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
        disabled={loading || !selectedTopic}
        className="w-full bg-sgma-cta text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-sgma-cta/50 disabled:opacity-50 transition-all duration-300"
      >
        {loading ? 'Processing Payment...' : `Proceed to Payment ${total > 0 ? `(${selectedCurrency === 'INR' ? '₹' : '$'}${total})` : ''}`}
      </button>

      <p className="text-xs text-sgma-charcoal/70 text-center">
        Secure payment via Razorpay. You'll receive a confirmation email with booking details.
      </p>
    </form>
  )
}
