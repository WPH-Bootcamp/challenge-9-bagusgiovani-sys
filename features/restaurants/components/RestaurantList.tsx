// 📄 FILE: features/restaurants/components/RestaurantList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantService } from '../services';
import type { Restaurant } from '../types';
const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: 'Burger King',
    star: 4.9,
    place: 'Jakarta Selatan',
    lat: -6.2615,
    long: 106.8106,
    logo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    images: ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'],
    category: 'Fast Food',
    reviewCount: 245,
    sampleMenus: [],
    isFrequentlyOrdered: true,
    distance: 2.4,
  },
  {
    id: 2,
    name: "McDonald's",
    star: 4.7,
    place: 'Jakarta Pusat',
    lat: -6.1751,
    long: 106.8650,
    logo: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
    images: ['https://images.unsplash.com/photo-1550547660-d9450f859349?w=400'],
    category: 'Fast Food',
    reviewCount: 312,
    sampleMenus: [],
    isFrequentlyOrdered: true,
    distance: 1.8,
  },
  {
    id: 3,
    name: 'KFC',
    star: 4.6,
    place: 'Jakarta Barat',
    lat: -6.1862,
    long: 106.7650,
    logo: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400',
    images: ['https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400'],
    category: 'Fast Food',
    reviewCount: 189,
    sampleMenus: [],
    isFrequentlyOrdered: false,
    distance: 3.2,
  },
  {
    id: 4,
    name: 'Pizza Hut',
    star: 4.5,
    place: 'Jakarta Timur',
    lat: -6.2250,
    long: 106.9004,
    logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
    images: ['https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400'],
    category: 'Italian',
    reviewCount: 156,
    sampleMenus: [],
    isFrequentlyOrdered: false,
    distance: 2.9,
  },
  {
    id: 5,
    name: 'Dominos',
    star: 4.8,
    place: 'Jakarta Selatan',
    lat: -6.2615,
    long: 106.8106,
    logo: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400',
    images: ['https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400'],
    category: 'Italian',
    reviewCount: 278,
    sampleMenus: [],
    isFrequentlyOrdered: true,
    distance: 1.5,
  },
  {
    id: 6,
    name: 'Subway',
    star: 4.4,
    place: 'Jakarta Pusat',
    lat: -6.1751,
    long: 106.8650,
    logo: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400'],
    category: 'Sandwich',
    reviewCount: 134,
    sampleMenus: [],
    isFrequentlyOrdered: false,
    distance: 2.1,
  },
  {
    id: 7,
    name: 'Starbucks',
    star: 4.7,
    place: 'Jakarta Barat',
    lat: -6.1862,
    long: 106.7650,
    logo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'],
    category: 'Cafe',
    reviewCount: 423,
    sampleMenus: [],
    isFrequentlyOrdered: true,
    distance: 1.2,
  },
  {
    id: 8,
    name: 'Wendy\'s',
    star: 4.6,
    place: 'Jakarta Timur',
    lat: -6.2250,
    long: 106.9004,
    logo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400',
    images: ['https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400'],
    category: 'Fast Food',
    reviewCount: 198,
    sampleMenus: [],
    isFrequentlyOrdered: false,
    distance: 3.5,
  },
  {
    id: 9,
    name: 'Taco Bell',
    star: 4.5,
    place: 'Jakarta Selatan',
    lat: -6.2615,
    long: 106.8106,
    logo: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
    images: ['https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400'],
    category: 'Mexican',
    reviewCount: 167,
    sampleMenus: [],
    isFrequentlyOrdered: false,
    distance: 2.7,
  },
  {
    id: 10,
    name: 'Chipotle',
    star: 4.8,
    place: 'Jakarta Pusat',
    lat: -6.1751,
    long: 106.8650,
    logo: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400',
    images: ['https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400'],
    category: 'Mexican',
    reviewCount: 289,
    sampleMenus: [],
    isFrequentlyOrdered: true,
    distance: 1.9,
  },
  {
    id: 11,
    name: 'Five Guys',
    star: 4.9,
    place: 'Jakarta Barat',
    lat: -6.1862,
    long: 106.7650,
    logo: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400',
    images: ['https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400'],
    category: 'Fast Food',
    reviewCount: 356,
    sampleMenus: [],
    isFrequentlyOrdered: true,
    distance: 2.3,
  },
  {
    id: 12,
    name: 'Shake Shack',
    star: 4.7,
    place: 'Jakarta Timur',
    lat: -6.2250,
    long: 106.9004,
    logo: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=400',
    images: ['https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=400'],
    category: 'Fast Food',
    reviewCount: 267,
    sampleMenus: [],
    isFrequentlyOrdered: false,
    distance: 3.1,
  },
];

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUsingMockData, setIsUsingMockData] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const data = await restaurantService.getRecommended();
        setRestaurants(data);
        setIsUsingMockData(false);
      } catch (err: unknown) {
        console.log('Failed to fetch restaurants (using mock data):', (err as { message?: string })?.message);
        // Use mock data if API fails (user not authenticated or API error)
        setRestaurants(MOCK_RESTAURANTS);
        setIsUsingMockData(true);
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading restaurants...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recommended</h2>
            {isUsingMockData && (
              <p className="text-sm text-gray-500 mt-1">
                Sign in to see personalized recommendations
              </p>
            )}
          </div>
          <button className="text-orange-500 font-semibold hover:text-orange-600 transition">
            See All
          </button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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