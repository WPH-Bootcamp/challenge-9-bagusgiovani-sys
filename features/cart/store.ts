// 📁 features/cart/store.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  restaurantId: null, // Track which restaurant items are from
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // If item already exists, increase quantity
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        // Add new item
        state.items.push(action.payload);
        // Set restaurant ID if this is first item
        if (!state.restaurantId) {
          state.restaurantId = action.payload.restaurantId;
        }
      }

      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },

    // Update item quantity
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    // Remove item from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      
      // Clear restaurant ID if cart is empty
      if (state.items.length === 0) {
        state.restaurantId = null;
      }
      
      cartSlice.caseReducers.calculateTotals(state);
    },

    // Increment item quantity
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    // Decrement item quantity
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.restaurantId = null;
    },

    // Calculate totals (helper function)
    calculateTotals: (state) => {
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Replace entire cart (useful when fetching from API)
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.restaurantId = action.payload[0]?.restaurantId || null;
      cartSlice.caseReducers.calculateTotals(state);
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  calculateTotals,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;