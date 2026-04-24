// 📄 FILE: features/restaurants/services.ts

import { apiClient } from '@/lib/apiClient';
import { API_ENDPOINTS } from '@/constants/api';
import type {
  RecommendedRestaurantsResponse,
  RestaurantsListResponse,
  RestaurantDetailResponse,
  SearchRestaurantsResponse,
  Restaurant,
  RestaurantDetail,
} from './types';

interface RestaurantFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  page?: number;
  limit?: number;
}

export const restaurantService = {
  getRecommended: async (): Promise<Restaurant[]> => {
    const response = await apiClient.get<RecommendedRestaurantsResponse>(
      API_ENDPOINTS.RESTAURANTS.RECOMMENDED
    );
    return response.data.data.recommendations;
  },

  getList: async (filters?: RestaurantFilters): Promise<RestaurantsListResponse['data']> => {
    const response = await apiClient.get<RestaurantsListResponse>(
      API_ENDPOINTS.RESTAURANTS.LIST,
      { params: filters }
    );
    return response.data.data;
  },

  getById: async (id: string): Promise<RestaurantDetail> => {
    const response = await apiClient.get<RestaurantDetailResponse>(
      API_ENDPOINTS.RESTAURANTS.DETAIL(id)
    );
    return response.data.data;
  },

  search: async (query: string): Promise<Restaurant[]> => {
    const response = await apiClient.get<SearchRestaurantsResponse>(
      API_ENDPOINTS.RESTAURANTS.SEARCH,
      { params: { q: query } }
    );
    return response.data.data.restaurants;
  },

  getBestSeller: async (): Promise<Restaurant[]> => {
    const response = await apiClient.get<RestaurantsListResponse>(
      API_ENDPOINTS.RESTAURANTS.BEST_SELLER
    );
    return response.data.data.restaurants;
  },

  getNearby: async (): Promise<Restaurant[]> => {
    const response = await apiClient.get<RestaurantsListResponse>(
      API_ENDPOINTS.RESTAURANTS.NEARBY
    );
    return response.data.data.restaurants;
  },
};