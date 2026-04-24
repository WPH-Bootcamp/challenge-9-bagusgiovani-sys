// 📄 FILE: features/auth/services.ts

import { apiClient } from '@/lib/apiClient';
import { API_ENDPOINTS } from '@/constants/api';
import type { LoginRequest, RegisterRequest, AuthResponse, ProfileResponse, User } from './types';

export const authService = {
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, data);
    
    // Save token to localStorage
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    
    return response.data;
  },

  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, data);
    
    // Save token to localStorage
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    
    return response.data;
  },

  getProfile: async (): Promise<User> => {
    const response = await apiClient.get<ProfileResponse>(API_ENDPOINTS.AUTH.GET_PROFILE);
    // Profile API returns { success, message, data: User }
    return response.data.data;
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await apiClient.put<ProfileResponse>(API_ENDPOINTS.AUTH.UPDATE_PROFILE, data);
    return response.data.data;
  },

  logout: (): void => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
};