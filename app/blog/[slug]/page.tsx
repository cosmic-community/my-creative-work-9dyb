// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return { title: 'Post Not Found | Duracabs' }
  }

  const headline = getMetafieldValue(post.metadata?.headline) || post.title
  const metaDesc = getMetafieldValue(post.metadata?.meta_description)
  const keyword = getMetafieldValue(post.metadata?.focus_keyword)

  return {
    title: `${headline} | Duracabs`,
    description: metaDesc || headline,
    keywords: keyword || undefined,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const image = post.metadata?.featured_image
  const headline = getMetafieldValue(post.metadata?.headline) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const author = getMetafieldValue(post.metadata?.author_name)
  const category = post.metadata?.category
  const date = post.metadata?.published_date

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blog" className="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← Back to Blog
      </Link>

      <div className="mt-6">
        {category && category.metadata?.name && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold"
          >
            {getMetafieldValue(category.metadata.name)}
          </Link>
        )}
        <h1 className="text-3xl md:text-4xl font-extrabold text-ink mt-4 leading-tight">
          {headline}
        </h1>
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
          {author && <span>By {author}</span>}
          {author && formattedDate && <span>•</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </div>

      {image && (
        <div className="mt-8 rounded-2xl overflow-hidden">
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={headline}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-slate max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  )
}