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
}
