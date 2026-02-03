import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { sessionStorage } from '@shared/lib'
import type { CartItem, CartState } from './types'

const initialState: CartState = sessionStorage.getItem<CartItem[]>('cart', [])

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existing = state.find(item => item.id === action.payload.id)
      
      if (existing) {
        existing.quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
      
      sessionStorage.setItem('cart', state)
    },
    
    removeItem: (state, action: PayloadAction<number>) => {
      const newState = state.filter(item => item.id !== action.payload)
      sessionStorage.setItem('cart', newState)
      return newState
    },
    
    updateQuantity: (state, action: PayloadAction<{
      id: number
      quantity: number
    }>) => {
      const item = state.find(item => item.id === action.payload.id)
      
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity)
        sessionStorage.setItem('cart', state)
      }
    },
    
    clearCart: () => {
      sessionStorage.removeItem('cart')
      return []
    },
  },
})

export const selectCartItems = (state: { cart: CartState }) => state.cart
export const selectCartCount = (state: { cart: CartState }) => 
  state.cart.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
