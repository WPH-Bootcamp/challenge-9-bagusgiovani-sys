// 📁 constants/routes.ts

// App Routes - centralized route management
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  RESTAURANTS: '/restaurants',
  RESTAURANT_DETAIL: (id: string) => `/restaurants/${id}`,
  CART: '/cart',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  ORDERS: '/orders',
  ORDER_DETAIL: (id: string) => `/orders/${id}`,
} as const;

// Auth routes (for redirects)
export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER];

// Protected routes (require authentication)
export const PROTECTED_ROUTES = [
  ROUTES.CART,
  ROUTES.CHECKOUT,
  ROUTES.PROFILE,
  ROUTES.ORDERS,
];