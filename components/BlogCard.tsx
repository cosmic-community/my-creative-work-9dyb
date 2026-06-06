import Link from 'next/link'
import type { BlogPost } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const image = post.metadata?.featured_image
  const headline = getMetafieldValue(post.metadata?.headline) || post.title
  const metaDesc = getMetafieldValue(post.metadata?.meta_description)
  const author = getMetafieldValue(post.metadata?.author_name)
  const category = post.metadata?.category
  const date = post.metadata?.published_date

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=420&fit=crop&auto=format,compress`}
            alt={headline}
            width={400}
            height={210}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">📝</div>
        )}
        {category && category.metadata?.name && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold">
            {getMetafieldValue(category.metadata.name)}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-ink group-hover:text-brand-600 transition-colors line-clamp-2">
          {headline}
        </h3>
        {metaDesc && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{metaDesc}</p>}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
          {author && <span>By {author}</span>}
          {author && formattedDate && <span>•</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </div>
    </Link>
  )
}