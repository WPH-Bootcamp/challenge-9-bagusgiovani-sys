// 📄 FILE: components/layout/MainLayout.tsx

import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
}

export default function MainLayout({ 
  children, 
  isLoggedIn = false,
  userName,
  userAvatar 
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userName={userName}
        userAvatar={userAvatar}
      />
      <main className="pt-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}