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
  lat: number;
  long: number;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  sampleMenus: MenuItem[];
  isFrequentlyOrdered: boolean;
  distance: number;
}

export interface RecommendedRestaurantsResponse {
  success: boolean;
  data: {
    recommendations: Restaurant[];
    message: string;
  };
}