// 📄 FILE: features/orders/components/OrdersList.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import OrderCard from './OrderCard';
import { getMyOrders } from '../services';
import type { Order } from '../types';

export default function OrdersList() {
  const [activeTab, setActiveTab] = useState('Done');
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const tabs = ['Status', 'Ongoing', 'On the Way', 'Delivered', 'Done', 'Canceled'];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const data = await getMyOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.restaurant?.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'Status' || order.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Status Tabs */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders List */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading orders...</p>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No orders found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <OrderCard key={order.order_id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}