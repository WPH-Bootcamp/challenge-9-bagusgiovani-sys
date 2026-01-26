// 📄 FILE: app/profile/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileMenu from '@/features/profile/components/ProfileMenu';
import ProfileContent from '@/features/profile/components/ProfileContent';
import OrdersList from '@/features/orders/components/OrdersList';
import { useProfile } from '@/features/profile/hooks/useProfile';

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('profile');
  const { profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileContent profile={profile} />;
      case 'orders':
        return <OrdersList />;
      case 'delivery':
        return (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Delivery Address</h1>
            <p className="text-gray-600">Delivery address content coming soon...</p>
          </div>
        );
      default:
        return <ProfileContent profile={profile} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-white shadow-sm">
        <Navbar isLoggedIn={true} userName={profile?.name || 'User'} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 mt-8">
        <div className="grid grid-cols-[280px_1fr] gap-8">
          {/* Left Sidebar */}
          <ProfileMenu 
            activeMenu={activeSection}
            onMenuChange={setActiveSection}
            profile={profile}
          />

          {/* Right Content */}
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}