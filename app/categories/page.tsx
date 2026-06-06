import type { Metadata } from 'next'
import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata: Metadata = {
  title: 'Categories | Duracabs',
  description: 'Browse content categories for Duracabs airport cab services and blog articles.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-ink">Categories</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Browse our content by category to find exactly what you're looking for.
        </p>
      </div>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No categories available yet.</p>
      )}
    </div>
  )
}