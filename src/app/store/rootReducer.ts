import { cartReducer } from '@/features/cart';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  cart: cartReducer,
});
