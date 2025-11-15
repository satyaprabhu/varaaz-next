import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-blue-950 text-slate-300 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Varaaz Brand Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold mb-6 text-xl uppercase tracking-tight">SGMA</h3>
            <p className="text-sm text-slate-200 leading-relaxed pr-4">
              Master sacred geometry and mandala creation through the principles of Vedic science. Practice through immersive, hands-on learning.
            </p>
          </div>

          {/* Explore Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-yellow-300 font-semibold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Book Session
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-yellow-300 font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#faqs" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-yellow-300 font-semibold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors duration-300 inline-block">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400/20 my-8"></div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-slate-400">
          <p>&copy; 2024 SGMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
