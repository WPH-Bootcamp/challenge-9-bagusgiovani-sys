// 📄 FILE: features/restaurants/components/RestaurantCard.tsx
'use client';

import { Star } from 'lucide-react';
import Link from 'next/link';

interface Restaurant {
  id: string;
  name: string;
  rating: number;
  location: string;
  distance: string;
  logo: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link 
      href={`/restaurants/${restaurant.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    >
      <div className="flex items-center gap-4 p-5">
        {/* Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <span className="text-white font-bold text-2xl">BK</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-gray-900 mb-1.5 truncate">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
            <span className="text-sm font-semibold text-gray-700">
              {restaurant.rating}
            </span>
          </div>
          <p className="text-sm text-gray-500 truncate">
            {restaurant.location} · {restaurant.distance}
          </p>
        </div>
      </div>
    </Link>
  );
}