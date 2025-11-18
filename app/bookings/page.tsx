'use client'

import { useState } from 'react'
import BookingWidget from '@/components/BookingWidget'

export default function BookingsPage() {
  const [showFallback, setShowFallback] = useState(true)

  return (
    <div className="min-h-screen bg-sgma-beige relative text-sgma-charcoal">
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
        <div className="max-w-6xl mx-auto">
          {/* Book a Session - Centered */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight text-sgma-charcoal">
                Book a Session
              </h1>
              <p className="text-sgma-charcoal text-sm font-light">
                Schedule a personalized 1-on-1 guidance session with our instructors.
              </p>
            </div>

            <div className="bg-sgma-charcoal/10 backdrop-blur-sm border border-sgma-navy/20 rounded-lg p-4">
              {!showFallback ? (
                <div>
                  <BookingWidget />
                  <div className="text-center mt-4 pt-4 border-t border-sgma-navy/20">
                    <p className="text-xs text-sgma-charcoal mb-2">Having trouble with the calendar?</p>
                    <button
                      onClick={() => setShowFallback(true)}
                      className="text-sgma-cta hover:text-sgma-navy underline text-xs font-semibold transition-colors"
                    >
                      Use booking form instead
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <BookingWidget fallback={true} />
                  <div className="text-center mt-4 pt-4 border-t border-sgma-navy/20">
                    <button
                      onClick={() => setShowFallback(false)}
                      className="text-sgma-cta hover:text-sgma-navy underline text-xs font-semibold transition-colors"
                    >
                      Use Calendar instead
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bookings & Sessions Info */}
            <div className="pt-8 border-t-2 border-sgma-navy/20">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-sgma-charcoal">
                <span className="text-sgma-cta">Bookings</span> & Sessions
              </h3>
              <p className="text-sgma-charcoal leading-relaxed mb-6 text-sm">
                Online sacred geometry & mandala art workshops — hosted from India, open to participants worldwide. Secure your place with a deposit.
              </p>
              <ul className="space-y-3 text-sgma-charcoal text-sm">
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">1-on-1 personalized guidance sessions</span>
                </li>
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">Online workshops from India</span>
                </li>
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">Global participation welcome</span>
                </li>
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">Secure deposit to reserve your place</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Workshops Section */}
      <div className="py-12 px-4 relative z-10 bg-sgma-charcoal/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-sgma-charcoal text-center">
            Upcoming Workshops
          </h2>

          {/* Workshop Table */}
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2 border-sgma-navy/30">
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-sm tracking-wider">Workshop</th>
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-sm tracking-wider">Date</th>
                  <th className="text-left py-4 px-6 text-sgma-navy font-black uppercase text-sm tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sgma-navy/20 hover:bg-sgma-navy/5 transition-colors">
                  <td className="py-4 px-6 text-sgma-charcoal font-bold text-sm">
                    📐 Sacred Geometry
                  </td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-sm">17–18 Jan</td>
                  <td className="py-4 px-6">
                    <a href="#booking-form" className="text-sgma-cta hover:text-sgma-navy font-bold transition-colors text-sm">
                      Book →
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-sgma-navy/20 hover:bg-sgma-navy/5 transition-colors">
                  <td className="py-4 px-6 text-sgma-charcoal font-bold text-sm">
                    🌸 Flower of Life
                  </td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-sm">12 Jan</td>
                  <td className="py-4 px-6">
                    <a href="#booking-form" className="text-sgma-cta hover:text-sgma-navy font-bold transition-colors text-sm">
                      Book →
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-sgma-navy/20 hover:bg-sgma-navy/5 transition-colors">
                  <td className="py-4 px-6 text-sgma-charcoal font-bold text-sm">
                    🔄 Torus Foundations
                  </td>
                  <td className="py-4 px-6 text-sgma-charcoal font-medium text-sm">1 Feb</td>
                  <td className="py-4 px-6">
                    <a href="#booking-form" className="text-sgma-cta hover:text-sgma-navy font-bold transition-colors text-sm">
                      Book →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payment Info Section */}
      <div className="py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mt-12 max-w-3xl">
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-sgma-charcoal">
              <span className="text-sgma-cta">Payment</span> Methods
            </h3>

            {/* Payment Methods Overview */}
            <div className="mb-8 pb-8 border-b-2 border-sgma-navy/20">
              <p className="text-sgma-charcoal leading-relaxed mb-3 text-base">
                We accept international and Indian payment methods for your convenience:
              </p>
              <p className="text-sgma-cta font-semibold text-base mb-3">
                💳 Cards  •  🏦 Netbanking  •  📱 UPI  •  🌐 PayPal
              </p>
              <p className="text-sgma-charcoal text-base">
                All transactions are secure and encrypted.
              </p>
            </div>

            {/* Bank & UPI Details - 2 Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b-2 border-sgma-navy/20">
              {/* Bank Transfer */}
              <div>
                <h4 className="text-lg font-bold text-sgma-cta mb-4 uppercase tracking-wide">💳 Bank Transfer</h4>
                <div className="space-y-4 text-base">
                  <div>
                    <p className="text-sgma-cta font-semibold text-sm uppercase tracking-wide mb-1">Account Name</p>
                    <p className="text-sgma-charcoal text-base">SGMA Studio</p>
                  </div>
                  <div>
                    <p className="text-sgma-cta font-semibold text-sm uppercase tracking-wide mb-1">Bank Name</p>
                    <p className="text-sgma-charcoal text-base">[Your Bank]</p>
                  </div>
                  <div>
                    <p className="text-sgma-cta font-semibold text-sm uppercase tracking-wide mb-1">Account Number</p>
                    <p className="text-sgma-charcoal font-mono text-base">[REPLACE]</p>
                  </div>
                  <div>
                    <p className="text-sgma-cta font-semibold text-sm uppercase tracking-wide mb-1">IFSC Code</p>
                    <p className="text-sgma-charcoal font-mono text-base">[REPLACE]</p>
                  </div>
                </div>
              </div>

              {/* UPI Payment */}
              <div>
                <h4 className="text-lg font-bold text-sgma-cta mb-4 uppercase tracking-wide">📱 UPI Payment</h4>
                <div>
                  <p className="text-sgma-cta font-semibold text-sm uppercase tracking-wide mb-2">UPI ID</p>
                  <p className="text-sgma-charcoal font-mono font-semibold mb-3 bg-sgma-charcoal/5 p-3 rounded border border-sgma-cta/20 text-base">
                    yourupi@bank
                  </p>
                  <p className="text-sgma-charcoal text-base leading-relaxed">
                    Use your UPI app to scan and pay directly in your banking app.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-sgma-charcoal/5 border-l-4 border-sgma-cta pl-6 py-4 text-base">
              <p className="text-sgma-charcoal leading-relaxed text-base">
                <span className="text-sgma-cta font-semibold">📝 Important:</span> Include your name or booking reference in the payment description. Confirmation within 24 hours of payment.
              </p>
            </div>
          </div>

          {/* Booking & Cancellation Policy */}
          <div className="mt-12 max-w-3xl border-t-2 border-sgma-navy/20 pt-12">
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-sgma-charcoal">
              <span className="text-sgma-cta">Booking</span> & Cancellation Policy
            </h3>

            <ul className="space-y-3 text-sgma-charcoal text-base leading-relaxed">
              <li className="flex items-start gap-3 pl-2">
                <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">•</span>
                <span className="pt-0.5"><span className="font-semibold">Deposit Required:</span> Places are secured on receipt of a minimum <span className="font-semibold text-sgma-cta">50% course fee deposit</span>.</span>
              </li>
              <li className="flex items-start gap-3 pl-2">
                <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">•</span>
                <span className="pt-0.5"><span className="font-semibold">Refund Policy:</span> Deposits are <span className="font-semibold text-sgma-cta">refundable in full up to six weeks</span> prior to course commencement. A small admin fee may apply for cancellations.</span>
              </li>
              <li className="flex items-start gap-3 pl-2">
                <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">•</span>
                <span className="pt-0.5"><span className="font-semibold">Non-Refundable Period:</span> Deposits are <span className="font-semibold text-sgma-cta">non-refundable after six weeks</span> prior to course commencement.</span>
              </li>
              <li className="flex items-start gap-3 pl-2">
                <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">•</span>
                <span className="pt-0.5"><span className="font-semibold">Final Payment:</span> The remainder of the course fee is payable no later than the <span className="font-semibold text-sgma-cta">first session</span>.</span>
              </li>
              <li className="flex items-start gap-3 pl-2">
                <span className="text-sgma-cta font-bold flex-shrink-0 pt-0.5">•</span>
                <span className="pt-0.5"><span className="font-semibold">Materials Included:</span> Course fees include materials unless otherwise stated in the course description.</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-sgma-cta/20">
              <p className="text-sgma-charcoal text-base leading-relaxed">
                <span className="text-sgma-cta font-semibold">Have Questions?</span> For details about our policies, please contact us directly. We're here to help and happy to discuss any concerns!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
