export interface CartItem {
  id: number
  title: string
  price: number
  img: string
  quantity: number
}

export type CartState = CartItem[]
