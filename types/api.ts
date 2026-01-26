// 📁 types/api.ts

// Common API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Pagination
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Common status types
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'on_delivery' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type PaymentMethod = 'credit_card' | 'debit_card' | 'cash' | 'e-wallet';

// Error response
export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}

// Common entity types used across features
export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Image {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}