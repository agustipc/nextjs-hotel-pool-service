import { DocumentData, getDocs, Query } from 'firebase/firestore'
import { productCollection } from '../lib/firebase'
import { type Product } from '../types'

export async function getProducts(query?: Query): Promise<Product[]> {
  let querySnapshot = null

  if (query) {
    querySnapshot = await getDocs(query)
  } else {
    querySnapshot = await getDocs(productCollection)
  }

  const products: Product[] = querySnapshot.docs.map((doc: DocumentData) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })

  return products
}
