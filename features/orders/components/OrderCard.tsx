// 📄 FILE: features/orders/components/OrderCard.tsx
'use client';

import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import type { Order } from '../types';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  // Status color mapping
  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'Status': 'bg-gray-100 text-gray-700',
      'Ongoing': 'bg-orange-100 text-orange-700',
      'On the Way': 'bg-blue-100 text-blue-700',
      'Delivered': 'bg-green-100 text-green-700',
      'Done': 'bg-green-100 text-green-700',
      'Canceled': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Restaurant Logo */}
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            {order.restaurant?.image ? (
              <img 
                src={order.restaurant.image} 
                alt={order.restaurant.name} 
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-8 h-8 bg-orange-500 rounded" />
            )}
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {order.restaurant?.name || 'Restaurant'}
            </h3>
            <p className="text-sm text-gray-500">
              Order #{order.order_id}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
      </div>

      {/* Order Items */}
      <div className="mb-4 space-y-2">
        {order.items?.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-gray-700">
              {item.quantity}x {item.food_name}
            </span>
            <span className="text-gray-900 font-medium">
              Rp{(item.price * item.quantity).toLocaleString('id-ID')}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{formatDate(order.created_at)}</span>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">Total</p>
          <p className="text-xl font-bold text-gray-900">
            Rp{order.total_price.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    </div>
  );
}