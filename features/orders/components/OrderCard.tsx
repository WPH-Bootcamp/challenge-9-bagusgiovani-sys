// 📄 FILE: features/orders/components/OrderCard.tsx
'use client';

import React from 'react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  restaurant: string;
  restaurantLogo: string;
  items: OrderItem[];
  total: number;
  status: string;
}

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      {/* Restaurant Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
          {order.restaurantLogo}
        </div>
        <span className="font-semibold text-gray-900">{order.restaurant}</span>
      </div>

      {/* Order Items */}
      <div className="space-y-3 mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <img 
              src="https://via.placeholder.com/60x60?text=Food" 
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.quantity} x Rp{item.price.toLocaleString('id-ID')}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total</p>
          <p className="text-lg font-bold text-gray-900">Rp{order.total.toLocaleString('id-ID')}</p>
        </div>
        <button className="px-8 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors">
          Give Review
        </button>
      </div>
    </div>
  );
}