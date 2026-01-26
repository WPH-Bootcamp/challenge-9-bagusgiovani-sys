// 📁 features/cart/hooks/useCart.ts

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../store';
import type { CartItem } from '../types';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const handleAddToCart = (item: CartItem) => {
    // Check if adding from different restaurant
    if (cart.restaurantId && cart.restaurantId !== item.restaurantId) {
      const confirm = window.confirm(
        'Your cart contains items from another restaurant. Do you want to clear it and add this item?'
      );
      if (confirm) {
        dispatch(clearCart());
        dispatch(addToCart(item));
      }
    } else {
      dispatch(addToCart(item));
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(itemId));
    } else {
      dispatch(updateQuantity({ id: itemId, quantity }));
    }
  };

  const handleIncrementQuantity = (itemId: string) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId: string) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getItemQuantity = (itemId: string): number => {
    const item = cart.items.find((item) => item.id === itemId);
    return item?.quantity || 0;
  };

  const isInCart = (itemId: string): boolean => {
    return cart.items.some((item) => item.id === itemId);
  };

  return {
    cart,
    items: cart.items,
    totalItems: cart.totalItems,
    totalPrice: cart.totalPrice,
    restaurantId: cart.restaurantId,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    incrementQuantity: handleIncrementQuantity,
    decrementQuantity: handleDecrementQuantity,
    clearCart: handleClearCart,
    getItemQuantity,
    isInCart,
  };
};