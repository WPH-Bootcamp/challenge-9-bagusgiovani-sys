// 📁 layout/Footer.tsx

import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const exploreLinks = ['All Food', 'Nearby', 'Discount', 'Best Seller', 'Delivery', 'Lunch'];
  const helpLinks = ['How to Order', 'Payment Methods', 'Track My Order', 'FAQ', 'Contact Us'];

  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-16">
        {/* Left Column */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4 hover:opacity-80 transition">
            <Image
              src="/assets/Logo/Color_Foody_Logo.svg"
              alt="Foody Logo"
              width={40}
              height={40}
              priority
            />
            <span>Foody</span>
          </Link>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm">
            Enjoy homemade flavors & chef's signature dishes, freshly prepared every day. Order online or visit our nearest branch.
          </p>
          <p className="text-sm font-semibold mb-3">Follow on Social Media</p>
          <div className="flex gap-3">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-sm font-bold"
              aria-label="TikTok"
            >
              TT
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="font-bold text-lg mb-5">Explore</h3>
          <ul className="space-y-3">
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="font-bold text-lg mb-5">Help</h3>
          <ul className="space-y-3">
            {helpLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}