// 📄 FILE: features/orders/types.ts

export interface Order {
  order_id: string;
  user_id: string;
  status: string;
  total_price: number;
  created_at: string;
  restaurant?: {
    resto_id: string;
    name: string;
    image?: string;
  };
  items?: OrderItem[];
}

export interface OrderItem {
  menu_id: string;
  food_name: string;
  quantity: number;
  price: number;
  image?: string;
}

export interface CheckoutRequest {
  items: {
    menu_id: string;
    quantity: number;
  }[];
  total_price: number;
}