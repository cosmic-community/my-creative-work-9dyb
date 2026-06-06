'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/categories', label: 'Categories' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-ink">
            <span className="text-2xl">🚖</span>
            <span>
              Dura<span className="text-brand-600">cabs</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+910000000000"
              className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+910000000000"
              className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold text-center"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}