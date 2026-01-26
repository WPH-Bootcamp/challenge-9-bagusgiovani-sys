// 📁 app/restaurants/page.tsx

'use client';

import { useState } from 'react';

export default function RestaurantsPage() {
  const [selectedDistance, setSelectedDistance] = useState<string>('Nearby');
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const toggleRating = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Restaurant</h1>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 sticky top-4">
              <h3 className="text-lg font-bold mb-4">FILTER</h3>

              {/* Distance */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Distance</h4>
                <div className="space-y-2">
                  {['Nearby', 'Within 1 km', 'Within 3 km', 'Within 5 km'].map((label) => (
                    <label key={label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedDistance === label}
                        onChange={() => setSelectedDistance(label)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Minimum Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Maximum Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-semibold mb-3">Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleRating(rating)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm">{rating}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-orange-100 rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">Burger King</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-medium">4.9</span>
                        </div>
                        <span>Jakarta Selatan · 2.4 km</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}