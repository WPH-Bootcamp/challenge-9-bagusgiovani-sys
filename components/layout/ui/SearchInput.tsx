"use client"

import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  variant?: 'dark' | 'light';
}

export const SearchInput = ({ 
  placeholder = "Search...", 
  value,
  onChange,
  className = "",
  variant = 'dark'
}: SearchInputProps) => {
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-neutral-800';
  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const placeholderColor = 'placeholder:text-gray-400';
  const ringColor = variant === 'light' ? 'focus:ring-orange-500' : 'focus:ring-primary-300';

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full pl-12 pr-4 py-3 rounded-full ${bgColor} ${textColor} ${placeholderColor} shadow-lg focus:outline-none focus:ring-2 ${ringColor} transition`}
      />
    </div>
  );
};