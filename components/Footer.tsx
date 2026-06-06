import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl text-white mb-3">
              <span className="text-2xl">🚖</span>
              <span>
                Dura<span className="text-brand-400">cabs</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Reliable Delhi airport cab service offering 24×7 taxi & car hire. Affordable auto rides
              at your doorstep, booked online in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-brand-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-brand-400 transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 24×7 Booking Available</li>
              <li>📍 Delhi NCR, India</li>
              <li>✉️ book@duracabs.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {year} Duracabs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}