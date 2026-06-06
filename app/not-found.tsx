import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🚖</div>
      <h1 className="text-4xl font-extrabold text-ink">Page Not Found</h1>
      <p className="text-gray-600 mt-4">
        Looks like this ride took a wrong turn. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}