'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchInput } from '@/components/layout/ui/SearchInput';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/restaurants?search=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <SearchInput
        placeholder="Search restaurants, food and drink"
        variant="light"
        className="w-full"
        value={query}
        onChange={setQuery}
      />
    </form>
  );
}
