// 📄 FILE: app/page.tsx
import MainLayout from '@/components/layout/MainLayout';
import CategoryShortcuts from '@/features/restaurants/components/CategoryShortcuts';
import RestaurantList from '@/features/restaurants/components/RestaurantList';
import HeroSearch from '@/components/layout/HeroSearch';

export default function HomePage() {
  return (
    <MainLayout isLoggedIn={false}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] -mt-[88px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80)',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

        {/* Hero Content */}
        <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-8 md:px-16 lg:px-24 text-center pt-[88px]">
          <h1 className="mb-4 text-5xl md:text-6xl font-bold text-white">
            Explore Culinary Experiences
          </h1>

          <p className="mb-8 max-w-xl text-lg text-white/90">
            Search and refine your choice to discover the perfect restaurant.
          </p>

          <HeroSearch />
        </div>
      </section>
      {/* ================= END HERO ================= */}

      {/* Content Section */}
      <div className="px-8 md:px-16 lg:px-24">
        {/* Category Shortcuts */}
        <CategoryShortcuts />

        {/* Recommended Restaurants */}
        <RestaurantList />
      </div>
    </MainLayout>
  );
}