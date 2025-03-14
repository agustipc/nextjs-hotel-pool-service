'use client'

import { useTranslations } from 'next-intl'
import { useProductsContext } from '../context/productsContext'
import { Categories, Product } from '../types'
import Image from 'next/image'

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
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat)

          if (catProducts.length === 0) return null

          return (
            <section key={cat} className="space-y-4">
              <h2 className="text-2xl font-montserrat font-medium text-slate-800">
                {categories_translation(cat).toUpperCase()}
              </h2>

              <div className="space-y-4">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const products_translation = useTranslations('Products')
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-sm">
      <Image
        priority
        height={96}
        width={96}
        src={product.image_url ?? '/images/placeholder.webp'}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-md mr-4"
      />
      <div className="flex-1 flex flex-col font-lato">
        <h3 className="text-lg text-slate-900">
          {products_translation(product.name)}
        </h3>
        {product.description && (
          <p className="text-sm text-slate-600 mt-1">
            {products_translation(product.description)}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">
            {product.price.toFixed(2)} €
          </span>
          <button
            className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center font-bold 
                       hover:bg-primary/90 transition-colors hover:cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

function SkeletonMenu() {
  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {[...Array(5)].map((_, index) => (
          <section key={index} className="space-y-4">
            <div className="h-6 w-1/3 bg-slate-200 rounded animate-pulse" />

            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <SkeletonProductCard key={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function SkeletonProductCard() {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-sm animate-pulse">
      <div className="w-24 h-24 bg-slate-200 rounded-md mr-4" />
      <div className="flex-1 flex flex-col">
        <div className="h-4 bg-slate-200 rounded w-1/2" />
        <div className="mt-2 h-3 bg-slate-200 rounded w-3/4" />
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="h-4 bg-slate-200 rounded w-16" />
          <div className="h-9 w-9 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}
