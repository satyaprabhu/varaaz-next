'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-sgma-beige/90 backdrop-blur-md border-b border-sgma-navy/10 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/images/Sgma-logo-1.png"
            alt="SGMA Logo"
            width={48}
            height={48}
            className="w-12 h-12 flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300"
            priority
          />
          <span className="ml-2 text-lg font-bold text-sgma-charcoal hidden sm:inline">SGMA</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/about" className="text-sgma-charcoal hover:text-sgma-navy transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-sgma-charcoal hover:text-sgma-navy transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/collection" className="text-sgma-charcoal hover:text-sgma-navy transition">
              Collection
            </Link>
          </li>
          <li>
            <Link href="/bookings" className="px-4 py-2 bg-sgma-cta text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sgma-cta/50 transition-all duration-300">
              Book Session
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sgma-charcoal hover:text-sgma-navy transition">
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
        <div className="md:hidden border-t border-sgma-navy/10 bg-sgma-beige">
          <ul className="flex flex-col gap-0 px-4 py-4">
            <li>
              <Link href="/about" className="block py-3 text-sgma-charcoal hover:text-sgma-navy transition font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" className="block py-3 text-sgma-charcoal hover:text-sgma-navy transition font-semibold">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/collection" className="block py-3 text-sgma-charcoal hover:text-sgma-navy transition font-semibold">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/bookings" className="block py-3 text-sgma-charcoal hover:text-sgma-navy transition font-semibold">
                Book Session
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-3 text-sgma-charcoal hover:text-sgma-navy transition font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
