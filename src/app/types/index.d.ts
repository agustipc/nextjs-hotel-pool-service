export type Categories =
  | 'COFFEES'
  | 'SOFT_DRINKS'
  | 'BEERS_AND_WINES'
  | 'COCKTAILS'
  | 'CLASSIC_LONG_DRINKS'
  | 'SMOOTHIES'
  | 'SHOTS'

type UserType = 'ADMIN' | 'USER'
export interface ProductOptions {
  id: string
  name: string
}
export interface ProductExtras extends ProductOptions {
  price: number
}

export interface User {
  id: string
  createdAt: string
  name: string
  roomNumber: string
  userType: UserType
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  options: ProductOptions[]
  extras: ProductExtras[]
  category: Categories
}

export type ProductsState = {
  products: Product[]
  loading: boolean
}

export type ProductsAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_LOADING'; payload: boolean }
