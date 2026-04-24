// 📄 FILE: features/orders/services.ts

import { apiClient } from '@/lib/apiClient';
import { API_ENDPOINTS } from '@/constants/api';
import type { Order, CheckoutRequest } from './types';

export async function getMyOrders(): Promise<Order[]> {
  const response = await apiClient.get(API_ENDPOINTS.ORDERS.MY_ORDERS);
  return response.data;
}

export async function checkout(data: CheckoutRequest): Promise<Order> {
  const response = await apiClient.post(API_ENDPOINTS.ORDERS.CHECKOUT, data);
  return response.data;
}