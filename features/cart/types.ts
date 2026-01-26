// 📁 features/cart/types.ts

export interface CartItem {
  id: string;
  menuId: string;
  restaurantId: string;
  restaurantName: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  notes?: string;
  addons?: CartAddon[];
}

export interface CartAddon {
  id: string;
  name: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  restaurantId: string | null; // Ensures all items are from same restaurant
}

export interface CartGroupedByRestaurant {
  restaurantId: string;
  restaurantName: string;
  items: CartItem[];
  subtotal: number;
}