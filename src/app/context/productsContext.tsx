'use client'

import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { getProducts } from '../services/products'
import { ProductsState, ProductsAction, Product } from '../types'

function productsReducer(
  state: ProductsState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const initialProductsState: ProductsState = {
  products: [],
  loading: true
}

const ProductsContext = createContext<{
  state: ProductsState
  dispatch: React.Dispatch<ProductsAction>
} | null>(null)

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(productsReducer, initialProductsState)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true })

    getProducts()
      .then((productsData: Product[]) => {
        dispatch({ type: 'SET_PRODUCTS', payload: productsData })
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false })
      })
  }, [])

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const context = useContext(ProductsContext)
  if (!context)
    throw new Error('useProductsContext must be used within a ProductsProvider')
  return context
}
