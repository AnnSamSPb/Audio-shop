export interface CartItemWithDetails {
  id: number
  title: string
  price: number
  img: string
  quantity: number
  productExists: boolean // Флаг, существует ли товар в каталоге
}
