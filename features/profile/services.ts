// 📄 FILE: features/profile/services.ts

import { apiClient } from '@/lib/apiClient';
import { API_ENDPOINTS } from '@/constants/api';
import type { Profile, UpdateProfileRequest } from './types';

export async function getProfile(): Promise<Profile> {
  const response = await apiClient.get(API_ENDPOINTS.AUTH.GET_PROFILE);
  return response.data;
}

export async function updateProfile(data: UpdateProfileRequest): Promise<Profile> {
  const response = await apiClient.put(API_ENDPOINTS.AUTH.UPDATE_PROFILE, data);
  return response.data;
}