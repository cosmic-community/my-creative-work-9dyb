import { getServices, getBlogPosts, getCategories } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'

export default async function HomePage() {
  const [services, posts, categories] = await Promise.all([
    getServices(),
    getBlogPosts(),
    getCategories(),
  ])

  const featuredServices = services.slice(0, 6)
  const featuredPosts = posts.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Popular Airport Services</h2>
            <p className="text-gray-600 mt-2">Pick-up & drop-off taxi services you can rely on.</p>
          </div>
          <Link href="/services" className="hidden sm:inline text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all →
          </Link>
        </div>

        {featuredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No services available yet.</p>
        )}
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-ink mb-8">Browse Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Latest from the Blog</h2>
            <p className="text-gray-600 mt-2">SEO-friendly tips & guides on airport taxi services.</p>
          </div>
          <Link href="/blog" className="hidden sm:inline text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all →
          </Link>
        </div>

        {featuredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No blog posts available yet.</p>
        )}
      </section>
    </>
  )
}