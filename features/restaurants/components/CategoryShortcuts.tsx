// 📄 FILE: features/restaurants/components/CategoryShortcuts.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'All Restaurant',
    iconSrc: '/assets/Category/All Food.svg',
    href: '/restaurants',
  },
  {
    name: 'Nearby',
    iconSrc: '/assets/Category/Location.svg',
    href: '/restaurants?filter=nearby',
  },
  {
    name: 'Discount',
    iconSrc: '/assets/Category/Discount.svg',
    href: '/restaurants?filter=discount',
  },
  {
    name: 'Best Seller',
    iconSrc: '/assets/Category/Best Seller.svg',
    href: '/restaurants?filter=best-seller',
  },
  {
    name: 'Delivery',
    iconSrc: '/assets/Category/Delivery.svg',
    href: '/restaurants?filter=delivery',
  },
  {
    name: 'Lunch',
    iconSrc: '/assets/Category/Lunch.svg',
    href: '/restaurants?filter=lunch',
  },
];

export default function CategoryShortcuts() {
  return (
    <div className="py-12 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
                <Image
                  src={category.iconSrc}
                  alt={category.name}
                  width={75}
                  height={75}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              </div>

              <span className="text-sm font-medium text-gray-800 transition-colors group-hover:text-orange-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
