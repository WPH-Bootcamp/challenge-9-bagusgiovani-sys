// 📄 FILE: features/restaurants/types.ts

export interface MenuItem {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  lat?: number;  // Only in recommended endpoint
  long?: number; // Only in recommended endpoint
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount?: number; // Not in recommended endpoint
  priceRange?: {      // Not in recommended endpoint
    min: number;
    max: number;
  };
  sampleMenus?: MenuItem[]; // Only in recommended endpoint
  isFrequentlyOrdered?: boolean; // Only in recommended endpoint
  distance: number;
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface RestaurantDetail {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  coordinates: {
    lat: number;
    long: number;
  };
  distance: number;
  logo: string;
  images: string[];
  category: string;
  totalMenus: number;
  totalReviews: number;
  menus: MenuItem[];
  reviews: Review[];
}

export interface RecommendedRestaurantsResponse {
  success: boolean;
  data: {
    recommendations: Restaurant[];
    message: string;
  };
}

export interface RestaurantsListResponse {
  success: boolean;
  data: {
    restaurants: Restaurant[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface RestaurantDetailResponse {
  success: boolean;
  data: RestaurantDetail;
}

export interface SearchRestaurantsResponse extends RestaurantsListResponse {
  data: RestaurantsListResponse['data'] & {
    searchQuery: string;
  };
}