// 📄 FILE: features/restaurants/services.ts

import { apiClient } from '@/lib/apiClient';
import { API_ENDPOINTS } from '@/constants/api';
import type { RecommendedRestaurantsResponse, Restaurant } from './types';

export const restaurantService = {
  getRecommended: async (): Promise<Restaurant[]> => {
    const response = await apiClient.get<RecommendedRestaurantsResponse>(
      API_ENDPOINTS.RESTAURANTS.RECOMMENDED
    );
    return response.data.data.recommendations;
  },
};