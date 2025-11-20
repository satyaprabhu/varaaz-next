'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-sgma-beige/95 backdrop-blur-md border-b border-sgma-navy/20 sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-85 transition-opacity duration-300">
          <Image
            src="/images/Sgma-logo-1.png"
            alt="SGMA Logo"
            width={48}
            height={48}
            className="w-12 h-12 flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300"
            priority
          />
          <span className="ml-3 text-h4 font-black text-sgma-charcoal hidden sm:inline uppercase tracking-tight">SGMA</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link href="/about" className="text-body font-semibold text-sgma-charcoal hover:text-sgma-navy hover:underline underline-offset-4 transition-all duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-body font-semibold text-sgma-charcoal hover:text-sgma-navy hover:underline underline-offset-4 transition-all duration-200">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/collection" className="text-body font-semibold text-sgma-charcoal hover:text-sgma-navy hover:underline underline-offset-4 transition-all duration-200">
              Collection
            </Link>
          </li>
          <li>
            <Link href="/bookings" className="px-6 py-3 bg-sgma-cta text-white rounded-lg font-bold uppercase tracking-wide text-caption hover:shadow-lg hover:shadow-sgma-cta/50 hover:bg-sgma-cta/90 transition-all duration-300">
              Book Session
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-body font-semibold text-sgma-charcoal hover:text-sgma-navy hover:underline underline-offset-4 transition-all duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-sgma-charcoal transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-sgma-charcoal transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-sgma-charcoal transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-sgma-navy/20 bg-sgma-beige/98 backdrop-blur-sm">
          <ul className="flex flex-col gap-0 px-6 py-4 space-y-1">
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-body font-bold text-sgma-charcoal hover:text-sgma-navy hover:bg-sgma-navy/5 rounded-lg transition-all duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-body font-bold text-sgma-charcoal hover:text-sgma-navy hover:bg-sgma-navy/5 rounded-lg transition-all duration-200">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/collection" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-body font-bold text-sgma-charcoal hover:text-sgma-navy hover:bg-sgma-navy/5 rounded-lg transition-all duration-200">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/bookings" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-body font-bold text-white bg-sgma-cta rounded-lg hover:shadow-md hover:shadow-sgma-cta/50 hover:bg-sgma-cta/90 transition-all duration-200 mt-2 text-center uppercase tracking-wide text-caption">
                Book Session
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-body font-bold text-sgma-charcoal hover:text-sgma-navy hover:bg-sgma-navy/5 rounded-lg transition-all duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
