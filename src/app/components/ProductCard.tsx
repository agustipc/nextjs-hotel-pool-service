import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { type Product } from '../types'

export function ProductCard({ product }: { product: Product }) {
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
