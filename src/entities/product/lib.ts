import { headphones } from './constants'
import type { Product, ProductID } from './types'

// Функция для поиска товара по ID
export const getProductById = (id: ProductID): Product | undefined => {
  return headphones.find(product => product.id === id)
}

// Функция для проверки существования товара
export const productExists = (id: ProductID): boolean => {
  return headphones.some(product => product.id === id)
}
