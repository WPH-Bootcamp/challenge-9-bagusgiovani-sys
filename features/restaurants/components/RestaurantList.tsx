// 📄 FILE: features/restaurants/components/RestaurantList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantService } from '../services';
import type { Restaurant } from '../types';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const data = await restaurantService.getRecommended();
        setRestaurants(data);
      } catch (err) {
        console.error('Failed to fetch restaurants:', err);
        setError('Failed to load restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className="py-12 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Loading restaurants...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recommended</h2>
          <button className="text-orange-500 font-semibold hover:text-orange-600 transition">
            See All
          </button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center">
          <button className="px-10 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}