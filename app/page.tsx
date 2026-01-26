// 📄 FILE: app/page.tsx
import CategoryShortcuts from '@/features/restaurants/components/CategoryShortcuts';
import RestaurantList from '@/features/restaurants/components/RestaurantList';
import { SearchInput } from '@/components/layout/ui/SearchInput';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] -mx-8 md:-mx-16 lg:-mx-24 -mt-[88px] pt-[88px]">
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
        <div className="relative flex min-h-[calc(120vh-88px)] flex-col items-center justify-center px-8 md:px-16 lg:px-24 text-center">
          <h1 className="mb-4 text-5xl md:text-6xl font-bold text-white">
            Explore Culinary Experiences
          </h1>

          <p className="mb-8 max-w-xl text-lg text-white/90">
            Search and refine your choice to discover the perfect restaurant.
          </p>

          <SearchInput
            placeholder="Search restaurants, food and drink"
            className="w-full max-w-2xl"
            variant="light"
          />
        </div>
      </section>
      {/* ================= END HERO ================= */}

      {/* Category Shortcuts */}
      <CategoryShortcuts />

      {/* Recommended Restaurants */}
      <RestaurantList />
    </div>
  );
}
