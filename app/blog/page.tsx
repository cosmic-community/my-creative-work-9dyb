import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/cosmic'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog | Duracabs - Airport Taxi Tips & Guides',
  description:
    'Read SEO-friendly articles on Delhi airport cab service, taxi hire, and reliable airport transfers with Duracabs.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-ink">Our Blog</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Helpful guides, tips, and insights on airport taxi services, booking cabs online, and
          travelling smart in Delhi.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No blog posts available yet.</p>
      )}
    </div>
  )
}