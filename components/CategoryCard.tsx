import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-3xl mb-3">🏷️</div>
      <h3 className="text-lg font-bold text-ink group-hover:text-brand-600 transition-colors">
        {name}
      </h3>
      {description && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>}
      <span className="inline-block mt-4 text-sm font-medium text-brand-600">
        Explore →
      </span>
    </Link>
  )
}