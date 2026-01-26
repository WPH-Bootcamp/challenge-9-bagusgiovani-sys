// 📄 FILE: components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
}

export default function Navbar({
  isLoggedIn = false,
  userName,
  userAvatar,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setCartCount(0);
      return;
    }

    // TODO: replace with real cart store (Redux)
    setCartCount(2);
  }, [isLoggedIn]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 text-2xl font-bold transition ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <Image
              src={
                isScrolled
                  ? '/assets/Logo/Color_Foody_Logo.svg'
                  : '/assets/Logo/Foody_Logo.svg'
              }
              alt="Foody Logo"
              width={40}
              height={40}
              priority
            />
            <span>Foody</span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                {/* Cart */}
                <Link
                  href="/cart"
                  className={`relative p-2.5 rounded-full transition ${
                    isScrolled
                      ? 'hover:bg-gray-200'
                      : 'hover:bg-white/30'
                  }`}
                >
                  <Image
                    src={
                      isScrolled
                        ? '/assets/icons/Black_Cart.svg'
                        : '/assets/icons/White_Cart.svg'
                    }
                    alt="Cart"
                    width={24}
                    height={24}
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {cartCount > 9 ? '9+' : cartCount}
                    </span>
                  )}
                </Link>

                {/* Profile */}
                <Link
                  href="/profile"
                  className={`flex items-center gap-3 rounded-full pl-2 pr-4 py-2 transition ${
                    isScrolled
                      ? 'hover:bg-gray-200'
                      : 'hover:bg-white/30'
                  }`}
                >
                  {userAvatar && (
                    <img
                      src={userAvatar}
                      alt={userName || 'Profile'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  {userName && (
                    <span
                      className={`font-medium ${
                        isScrolled ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      {userName}
                    </span>
                  )}
                </Link>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  href="/login"
                  className={`px-6 py-2.5 rounded-full font-medium transition ${
                    isScrolled
                      ? 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Sign In
                </Link>

                {/* Sign Up */}
                <Link
                  href="/register"
                  className="px-6 py-2.5 rounded-full font-medium bg-white text-gray-900 hover:bg-gray-100 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
