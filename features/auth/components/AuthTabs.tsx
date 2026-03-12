// ==========================================
// features/auth/components/AuthTabs.tsx
// ==========================================
'use client';

import Link from 'next/link';

interface AuthTabsProps {
  activeTab: 'signin' | 'signup';
}

export function AuthTabs({ activeTab }: AuthTabsProps) {
  return (
    <div className="flex gap-2 mb-8">
      <Link
        href="/login"
        className={`flex-1 py-2.5 text-center font-medium border-b-2 ${
          activeTab === 'signin'
            ? 'text-red-600 border-red-600'
            : 'text-gray-600 border-transparent hover:text-gray-900'
        }`}
      >
        Sign In
      </Link>
      <Link
        href="/register"
        className={`flex-1 py-2.5 text-center font-medium border-b-2 ${
          activeTab === 'signup'
            ? 'text-red-600 border-red-600'
            : 'text-gray-600 border-transparent hover:text-gray-900'
        }`}
      >
        Sign up
      </Link>
    </div>
  );
}
