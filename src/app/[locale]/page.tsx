'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { getProducts } from '../services/users'
import { type Product } from '../types'

export default function Home() {
  const t = useTranslations('HomePage')
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const products = await getProducts()
    setProducts(products)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-primary">
      <h1>{t('title')}</h1>
      <p className="text-lightBlue">{t('description')}</p>
      {products.map((product) => (
        <div
          key={product.id}
          className="border-solid border-2 p-4 rounded-md border-slate-50 flex flex-col"
        >
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
