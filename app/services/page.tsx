import type { Metadata } from 'next'
import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Airport Cab Services | Duracabs',
  description:
    'Explore our popular airport pick & drop services. Delhi airport drop taxi hire, car rental, and reliable taxi services available 24×7.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-ink">Our Services</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Reliable airport taxi services for pick-up and drop-off. Choose the ride that fits your
          journey — all bookable online in seconds.
        </p>
      </div>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No services available yet.</p>
      )}
    </div>
  )
}