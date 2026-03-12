// 📄 FILE: features/restaurants/components/RestaurantCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import type { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
        {/* Restaurant Logo */}
        <div className="relative h-48 bg-gray-100 flex items-center justify-center">
          <img
            src={restaurant.logo}
            alt={restaurant.name}
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Restaurant Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2">
            {restaurant.name}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{restaurant.star}</span>
            <span>({restaurant.reviewCount} reviews)</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>📍</span>
            <span>{restaurant.place}</span>
            <span>•</span>
            <span>{restaurant.distance} km</span>
          </div>

          {restaurant.isFrequentlyOrdered && (
            <div className="mt-3 inline-block">
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                Frequently Ordered
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}