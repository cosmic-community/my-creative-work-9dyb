import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-brand-300 text-sm font-medium mb-6">
            🚖 24×7 Delhi Airport Taxi & Car Hire
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Reliable Airport Cab Service{' '}
            <span className="text-brand-400">at Your Doorstep</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Book airport cabs online for pick-up and drop-off. Affordable auto rides, comfortable
            sedans, and SUVs available around the clock with Duracabs.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg bg-brand-500 text-ink font-semibold hover:bg-brand-400 transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}