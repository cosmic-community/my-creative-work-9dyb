import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const image = service.metadata?.service_image
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const route = getMetafieldValue(service.metadata?.route)
  const vehicle = getMetafieldValue(service.metadata?.vehicle_type)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const available = service.metadata?.available_24x7

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">🚖</div>
        )}
        {available && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
            24×7
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-ink group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {route && <p className="text-sm text-brand-600 font-medium mt-1">{route}</p>}
        {shortDesc && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{shortDesc}</p>}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          {vehicle && <span className="text-xs text-gray-500">🚗 {vehicle}</span>}
          {price && (
            <span className="text-sm font-bold text-ink">
              From ₹{price}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}