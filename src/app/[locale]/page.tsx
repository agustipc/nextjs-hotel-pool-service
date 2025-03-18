'use client'

import { useTranslations } from 'next-intl'
import { useProductsContext } from '../context/productsContext'
import { type Categories } from '../types'
import { ProductCard } from '../components/ProductCard'
import { SkeletonMenu } from '../components/SkeletonMenu'

export default function Home() {
  const categories_translation = useTranslations('Categories')

  const {
    state: { products, loading }
  } = useProductsContext()

  const categories: Categories[] = [
    'COFFEES',
    'SOFT_DRINKS',
    'BEERS_AND_WINES',
    'COCKTAILS',
    'CLASSIC_LONG_DRINKS',
    'SMOOTHIES',
    'SHOTS'
  ]

  if (loading) {
    return <SkeletonMenu />
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat)

        if (catProducts.length === 0) return null

        return (
          <section key={cat} className="flex flex-col gap-4">
            <h2 className="text-2xl tracking-wider font-montserrat font-bold text-slate-800">
              {categories_translation(cat).toUpperCase()}:
            </h2>

            <div className="flex flex-col gap-4">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
