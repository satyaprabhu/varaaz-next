import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-sgma-navy text-white py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Varaaz Brand Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold mb-6 text-xl uppercase tracking-tight">SGMA</h3>
            <p className="text-base text-white/80 leading-relaxed pr-4">
              Master sacred geometry and mandala creation through the principles of Vedic science. Practice through immersive, hands-on learning.
            </p>
          </div>

          {/* Explore Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-base">Explore</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/courses" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Book Session
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-base">Support</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#faqs" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-base">Connect</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Footer Bottom */}
        <div className="text-center text-base text-white/60">
          <p>&copy; 2024 SGMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
