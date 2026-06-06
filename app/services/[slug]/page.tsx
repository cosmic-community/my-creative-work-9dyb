// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService, getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    return { title: 'Service Not Found | Duracabs' }
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const desc = getMetafieldValue(service.metadata?.short_description)

  return {
    title: `${name} | Duracabs`,
    description: desc || `Book ${name} with Duracabs. Reliable airport taxi service.`,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const image = service.metadata?.service_image
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const route = getMetafieldValue(service.metadata?.route)
  const vehicle = getMetafieldValue(service.metadata?.vehicle_type)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const available = service.metadata?.available_24x7

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/services" className="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← Back to Services
      </Link>

      {image && (
        <div className="mt-6 rounded-2xl overflow-hidden">
          <img
            src={`${image.imgix_url}?w=1600&h=700&fit=crop&auto=format,compress`}
            alt={name}
            width={800}
            height={350}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">{name}</h1>
          {available && (
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
              24×7 Available
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-6 mt-5 text-sm">
          {route && (
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold text-ink">Route:</span> {route}
            </div>
          )}
          {vehicle && (
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold text-ink">Vehicle:</span> 🚗 {vehicle}
            </div>
          )}
          {price && (
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold text-ink">Starting at:</span> ₹{price}
            </div>
          )}
        </div>

        {fullDesc && (
          <div
            className="prose prose-slate max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: fullDesc }}
          />
        )}

        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100">
          <h3 className="text-lg font-bold text-ink">Ready to book {name}?</h3>
          <p className="text-gray-600 mt-1 text-sm">Call us anytime — we operate around the clock.</p>
          <a
            href="tel:+910000000000"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  )
}