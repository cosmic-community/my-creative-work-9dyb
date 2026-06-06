// app/categories/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategory, getBlogPosts, getMetafieldValue } from '@/lib/cosmic'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return { title: 'Category Not Found | Duracabs' }
  }

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const desc = getMetafieldValue(category.metadata?.description)

  return {
    title: `${name} | Duracabs`,
    description: desc || `Browse ${name} content on Duracabs.`,
  }
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  const allPosts = await getBlogPosts()
  const categoryPosts = allPosts.filter(
    (post) => post.metadata?.category?.id === category.id
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/categories" className="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← Back to Categories
      </Link>

      <div className="mt-6 mb-10">
        <div className="text-3xl mb-3">🏷️</div>
        <h1 className="text-4xl font-extrabold text-ink">{name}</h1>
        {description && <p className="text-gray-600 mt-3 max-w-2xl">{description}</p>}
      </div>

      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No posts in this category yet.</p>
      )}
    </div>
  )
}