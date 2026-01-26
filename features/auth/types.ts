// 📄 FILE: features/auth/types.ts

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  image?: string;
  DateCode?: string;
  DateCreate?: string;
  UserCode?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}