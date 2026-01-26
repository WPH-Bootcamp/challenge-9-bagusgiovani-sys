// 📄 FILE: features/cart/components/CartRestaurantGroup.tsx
'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import CartItem from './CartItem';

interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartGroup {
  id: string;
  restaurantName: string;
  restaurantLogo: string;
  items: CartItemType[];
}

interface CartRestaurantGroupProps {
  group: CartGroup;
}

export default function CartRestaurantGroup({ group }: CartRestaurantGroupProps) {
  // Calculate total for this restaurant
  const total = group.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Restaurant Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-orange-500 rounded" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">{group.restaurantName}</h2>
        <button className="ml-auto text-gray-400 hover:text-gray-600 transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {group.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-600 mb-1">Total</p>
          <p className="text-2xl font-bold text-gray-900">
            Rp{total.toLocaleString('id-ID')}
          </p>
        </div>
        <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition">
          Checkout
        </button>
      </div>
    </div>
  );
}