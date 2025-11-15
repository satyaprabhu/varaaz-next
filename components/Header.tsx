'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-xl font-black text-gray-900">V</span>
          </div>
          <span className="ml-2 text-lg font-bold text-gray-900 hidden sm:inline">SGMA</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/about" className="text-gray-700 hover:text-varaaz-primary transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-gray-700 hover:text-varaaz-primary transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/collection" className="text-gray-700 hover:text-varaaz-primary transition">
              Collection
            </Link>
          </li>
          <li>
            <Link href="/bookings" className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300">
              Book Session
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-varaaz-primary transition">
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
          <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col gap-0 px-4 py-4">
            <li>
              <Link href="/about" className="block py-3 text-gray-700 hover:text-yellow-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" className="block py-3 text-gray-700 hover:text-yellow-500 transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/collection" className="block py-3 text-gray-700 hover:text-yellow-500 transition">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/bookings" className="block py-3 text-gray-700 hover:text-yellow-500 transition">
                Book Session
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-3 text-gray-700 hover:text-yellow-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
