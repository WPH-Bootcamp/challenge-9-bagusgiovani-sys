// 📄 FILE: features/auth/hooks/useAuth.ts
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { register, login, logout, clearError, getProfile } from '../authSlice';
import type { RegisterRequest, LoginRequest } from '../types';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loading, error } = useAppSelector((state) => state.auth);

  const handleRegister = async (data: RegisterRequest) => {
    const result = await dispatch(register(data));
    return result;
  };

  const handleLogin = async (data: LoginRequest) => {
    const result = await dispatch(login(data));
    return result;
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGetProfile = async () => {
    const result = await dispatch(getProfile());
    return result;
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    register: handleRegister,
    login: handleLogin,
    logout: handleLogout,
    getProfile: handleGetProfile,
    clearError: handleClearError,
  };
};