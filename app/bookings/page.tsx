'use client'

import { useState } from 'react'
import BookingWidget from '@/components/BookingWidget'

export default function BookingsPage() {
  const [showFallback, setShowFallback] = useState(true)

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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-4 uppercase tracking-tight text-white">
            Book a <span className="text-yellow-300">Session</span>
          </h1>
          <p className="text-center text-slate-100 mb-12 text-lg font-light">
            Schedule a personalized 1-on-1 guidance session with our instructors.
          </p>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-8">
            {!showFallback ? (
              <div>
                <BookingWidget />
                <div className="text-center mt-8 pt-8 border-t border-slate-600">
                  <p className="text-sm text-slate-300 mb-4">Having trouble with the calendar?</p>
                  <button
                    onClick={() => setShowFallback(true)}
                    className="text-yellow-300 hover:text-yellow-200 underline text-sm font-semibold transition-colors"
                  >
                    Use booking form instead
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <BookingWidget fallback={true} />
                <div className="text-center mt-8 pt-8 border-t border-slate-600">
                  <button
                    onClick={() => setShowFallback(false)}
                    className="text-yellow-300 hover:text-yellow-200 underline text-sm font-semibold transition-colors"
                  >
                    Use Calendar instead
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Upcoming Workshops */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-white">
              <span className="text-yellow-300">Upcoming</span> Workshops
            </h2>

            {/* Workshop Cards - Horizontal */}
            <div className="space-y-4">
              {/* Workshop Card 1 */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-300 transition-all duration-300 flex flex-col lg:flex-row lg:items-start items-start">
                {/* Left - Title & Icon */}
                <div className="w-full lg:w-72 flex-shrink-0 px-6 py-6 bg-gradient-to-r from-yellow-400/20 to-transparent border-b lg:border-r lg:border-b-0 border-yellow-400/20">
                  <div className="text-4xl mb-2">📐</div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight leading-snug">
                    Intro to <span className="text-yellow-300">Sacred Geometry</span>
                  </h3>
                </div>

                {/* Middle - Details */}
                <div className="flex-grow px-6 py-6 lg:px-8 lg:py-6">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <div>
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Date</p>
                      <p className="text-slate-200 text-sm font-semibold">17–18 Jan 2026</p>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Format</p>
                      <p className="text-slate-200 text-sm">Online (Zoom)</p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Level</p>
                      <p className="text-slate-200 text-sm">All Levels</p>
                    </div>
                  </div>
                </div>

                {/* Right - Button */}
                <div className="w-full lg:w-auto flex-shrink-0 px-6 py-6 lg:px-8 lg:py-6 flex items-center justify-center lg:justify-start">
                  <a href="#booking-form" className="group relative inline-block w-full lg:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg transition-all duration-300 text-xs whitespace-nowrap text-center">
                      Book Now
                    </div>
                  </a>
                </div>
              </div>

              {/* Workshop Card 2 */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-300 transition-all duration-300 flex flex-col lg:flex-row lg:items-start items-start">
                {/* Left - Title & Icon */}
                <div className="w-full lg:w-72 flex-shrink-0 px-6 py-6 bg-gradient-to-r from-yellow-400/20 to-transparent border-b lg:border-r lg:border-b-0 border-yellow-400/20">
                  <div className="text-4xl mb-2">🌸</div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight leading-snug">
                    Flower of <span className="text-yellow-300">Life Mastery</span>
                  </h3>
                </div>

                {/* Middle - Details */}
                <div className="flex-grow px-6 py-6 lg:px-8 lg:py-6">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <div>
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Date</p>
                      <p className="text-slate-200 text-sm font-semibold">12 Jan 2026</p>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Duration</p>
                      <p className="text-slate-200 text-sm">8 Weeks</p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Format</p>
                      <p className="text-slate-200 text-sm">Online (Zoom)</p>
                    </div>
                  </div>
                </div>

                {/* Right - Button */}
                <div className="w-full lg:w-auto flex-shrink-0 px-6 py-6 lg:px-8 lg:py-6 flex items-center justify-center lg:justify-start">
                  <a href="#booking-form" className="group relative inline-block w-full lg:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg transition-all duration-300 text-xs whitespace-nowrap text-center">
                      Book Now
                    </div>
                  </a>
                </div>
              </div>

              {/* Workshop Card 3 */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-300 transition-all duration-300 flex flex-col lg:flex-row lg:items-start items-start">
                {/* Left - Title & Icon */}
                <div className="w-full lg:w-72 flex-shrink-0 px-6 py-6 bg-gradient-to-r from-yellow-400/20 to-transparent border-b lg:border-r lg:border-b-0 border-yellow-400/20">
                  <div className="text-4xl mb-2">🔄</div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight leading-snug">
                    Sacred <span className="text-yellow-300">Torus Foundations</span>
                  </h3>
                </div>

                {/* Middle - Details */}
                <div className="flex-grow px-6 py-6 lg:px-8 lg:py-6">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <div>
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Date</p>
                      <p className="text-slate-200 text-sm font-semibold">1 Feb 2026</p>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Duration</p>
                      <p className="text-slate-200 text-sm">6 Weeks</p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Format</p>
                      <p className="text-slate-200 text-sm">Online (Zoom)</p>
                    </div>
                  </div>
                </div>

                {/* Right - Button */}
                <div className="w-full lg:w-auto flex-shrink-0 px-6 py-6 lg:px-8 lg:py-6 flex items-center justify-center lg:justify-start">
                  <a href="#booking-form" className="group relative inline-block w-full lg:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 rounded-lg blur-md transition-all duration-300 -z-10"></div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg transition-all duration-300 text-xs whitespace-nowrap text-center">
                      Book Now
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings & Payment Info Section */}
          <div className="mt-20 max-w-3xl">
            {/* Bookings Info */}
            <div className="mb-16 pb-8 border-b border-yellow-400/20">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-white">
                <span className="text-yellow-300">Bookings</span> & Sessions
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                Online sacred geometry & mandala art workshops — hosted from India, open to participants worldwide. Secure your place with a deposit.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-yellow-300 font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">1-on-1 personalized guidance sessions</span>
                </li>
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-yellow-300 font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">Online workshops from India</span>
                </li>
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-yellow-300 font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">Global participation welcome</span>
                </li>
                <li className="flex items-start gap-3 pl-2">
                  <span className="text-yellow-300 font-bold flex-shrink-0 pt-0.5">✓</span>
                  <span className="pt-0.5">Secure deposit to reserve your place</span>
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-white">
                <span className="text-yellow-300">Payment</span> Options
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                We accept international and Indian payment methods for your convenience:
              </p>
              <p className="text-yellow-300 font-semibold text-lg mb-4">
                💳 Cards  •  🏦 Netbanking  •  📱 UPI  •  🌐 PayPal
              </p>
              <p className="text-slate-400 text-sm">
                ✓ All transactions are secure and encrypted
              </p>
            </div>
          </div>

          {/* Bank & UPI Details */}
          <div className="mt-20 max-w-3xl">
            <h3 className="text-2xl font-bold mb-10 uppercase tracking-wide text-white">
              Bank / <span className="text-yellow-300">UPI</span> (India)
            </h3>

            {/* Bank Transfer */}
            <div className="mb-12 pb-8 border-b border-yellow-400/20">
              <h4 className="text-lg font-bold text-yellow-300 mb-6 uppercase tracking-wide">💳 Bank Transfer</h4>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Account Name</p>
                  <p className="text-slate-200 text-base">SGMA Studio</p>
                </div>
                <div>
                  <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Bank Name</p>
                  <p className="text-slate-200 text-base">[Your Bank]</p>
                </div>
                <div>
                  <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">Account Number</p>
                  <p className="text-slate-200 font-mono text-base">[REPLACE]</p>
                </div>
                <div>
                  <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-2">IFSC Code</p>
                  <p className="text-slate-200 font-mono text-base">[REPLACE]</p>
                </div>
              </div>
            </div>

            {/* UPI */}
            <div className="mb-12">
              <h4 className="text-lg font-bold text-yellow-300 mb-6 uppercase tracking-wide">📱 UPI Payment</h4>
              <div className="mb-6">
                <p className="text-yellow-200 font-semibold text-xs uppercase tracking-wide mb-3">UPI ID</p>
                <p className="text-slate-200 font-mono text-lg font-semibold mb-6 bg-slate-800/40 p-4 rounded border border-yellow-400/20">
                  yourupi@bank
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Use your UPI app to scan and pay, or enter the UPI ID directly in your banking app for instant transfers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 border-l-4 border-yellow-300 pl-6 py-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-yellow-300 font-semibold">📝 Important:</span> Please include your name or booking reference in the payment description. Confirmation will be sent within 24 hours of payment.
              </p>
            </div>
          </div>

          {/* Booking & Cancellation Policy */}
          <div className="mt-20 max-w-3xl">
            <h3 className="text-2xl font-bold mb-10 uppercase tracking-wide text-white">
              <span className="text-yellow-300">Booking</span> & Cancellation Policy
            </h3>

            <div className="space-y-5 text-slate-200">
              <div className="border-l-4 border-yellow-300 pl-5 py-3">
                <p className="font-bold text-white mb-2 text-base">💰 Deposit Required</p>
                <p className="text-sm leading-relaxed text-slate-300">Places are secured on receipt of a minimum <span className="font-semibold text-yellow-300">50% course fee deposit</span>.</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5 py-3">
                <p className="font-bold text-white mb-2 text-base">🔄 Refund Policy</p>
                <p className="text-sm leading-relaxed text-slate-300">Deposits are <span className="font-semibold text-yellow-300">refundable in full up to six weeks</span> prior to course commencement. A small admin fee may apply for cancellations.</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5 py-3">
                <p className="font-bold text-white mb-2 text-base">🚫 Non-Refundable Period</p>
                <p className="text-sm leading-relaxed text-slate-300">Deposits are <span className="font-semibold text-yellow-300">non-refundable after six weeks</span> prior to course commencement.</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5 py-3">
                <p className="font-bold text-white mb-2 text-base">💳 Final Payment</p>
                <p className="text-sm leading-relaxed text-slate-300">The remainder of the course fee is payable no later than the <span className="font-semibold text-yellow-300">first session</span>.</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5 py-3">
                <p className="font-bold text-white mb-2 text-base">📦 Materials Included</p>
                <p className="text-sm leading-relaxed text-slate-300">Course fees include materials unless otherwise stated in the course description.</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-yellow-400/20">
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-yellow-300 font-semibold">❓ Have Questions?</span> For details about our policies, please contact us directly. We're here to help and happy to discuss any concerns!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
