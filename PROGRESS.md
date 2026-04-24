# PROGRESS.md

Snapshot of what is built, what is a stub, and what is missing.

---

## Done — fully wired end-to-end

### Auth
- Login page: form, show/hide password, error display, redirect on success, clears error on unmount
- Register page: form with name/email/phone/password/confirmPassword, client-side password match + length validation, redirect on success
- `authSlice` (`features/auth/authSlice.ts`): three async thunks (register, login, getProfile), token written to localStorage on success, isAuthenticated flag
- `authService` (`features/auth/services.ts`): register, login, getProfile, updateProfile, logout (clears token + redirects)
- `useAuth` hook: thin wrapper around Redux dispatch/selector
- Axios interceptor: injects `Authorization: Bearer` on every request, auto-redirects to `/login` on 401 for protected routes only

### Cart (client state only)
- `cartSlice` (`features/cart/store.ts`): add, remove, updateQuantity, increment, decrement, clear, setCart, calculateTotals
- Single-restaurant constraint enforced in `useCart` hook with window.confirm prompt
- Cart page (`app/cart/page.tsx`): reads Redux, groups items by restaurant, empty-state screen, total display, "Proceed to Checkout" button

### Home page
- Hero section with full-screen background image, gradient overlay
- `HeroSearch` (`components/layout/HeroSearch.tsx`): controlled `SearchInput`, navigates to `/restaurants?search=<query>` on Enter
- `CategoryShortcuts`: 6 static navigation links pointing to `/restaurants?filter=...`
- `RestaurantList`: calls `restaurantService.getRecommended()`, falls back to 12 hardcoded mock restaurants on any error, renders `RestaurantCard` grid

### Restaurant card
- `RestaurantCard`: links to `/restaurants/:id`, shows name, star rating, city, distance, logo with initials fallback

### Navbar
- Scroll-aware: transparent on top, white + shadow when scrolled
- Logged-out state: Sign In + Sign Up links
- Logged-in state: Cart icon (badge) + Profile avatar/name link
- Cart badge reads `totalItems` from Redux cart slice (no longer hardcoded)

### Profile page
- Sidebar navigation with three sections: My Profile / My Orders / Delivery Address
- Loading spinner while `useProfile` fetches
- My Orders section: fetches from API via `getMyOrders()`, status tabs, search by restaurant name, `OrderCard` with status badge, item list, total, date

### Infrastructure
- `QueryClientProvider` added via `store/provider.tsx` using `lib/queryClient.ts` — React Query now works everywhere
- `restaurantService` (`features/restaurants/services.ts`): all 6 methods implemented — `getRecommended`, `getList`, `getById`, `search`, `getBestSeller`, `getNearby`
- `npm run lint`: 0 errors (fixed pre-existing `no-explicit-any` and `no-unescaped-entities` errors)

---

## Stub — UI shell built, not wired to real data

### Checkout page (`app/checkout/page.tsx`)
- Layout matches Figma: left column (delivery address card + order items), right column (payment method selector + payment summary + Buy button)
- **Everything is hardcoded**: address text is static, order items are a dummy `[...Array(2)]`, totals are static strings
- Does NOT read from Redux cart, does NOT call the checkout API, "Buy" button does nothing

### Restaurants listing page (`app/restaurants/page.tsx`)
- Filter sidebar: Distance checkboxes, Min/Max price inputs, Rating checkboxes — all stored in local `useState`
- **NOT fetching any data**: restaurant grid is `[...Array(8)]` placeholder cards with hardcoded "Burger King" name
- Filter state is never applied to any data

### Restaurant detail page (`app/restaurants/[id]/page.tsx`)
- Full layout: image gallery placeholder, restaurant info row, menu tabs (All Menu / Food / Drink), menu grid, reviews grid
- **Route param `id` is never read** — no `useParams()` call, no API call
- Menu `+` buttons do nothing — not dispatching to cart Redux
- Review cards show hardcoded "Michael Brown" text

---

## Empty hooks (file exists, contains 1 empty line)

| File | Purpose |
|------|---------|
| `features/restaurants/hooks/useRestaurants.ts` | Should wrap React Query for restaurant list/detail |
| `features/checkout/hooks/useCheckout.ts` | Should wrap checkout API call + cart clear |
| `features/orders/hooks/useOrders.ts` | Should wrap React Query for order history |

---

## Remaining gaps

| Gap | Location | Note |
|-----|----------|------|
| `MainLayout` auth props | All pages using `MainLayout` | `isLoggedIn` is hardcoded `false`; not read from Redux auth state |
| Delivery Address section | `app/profile/page.tsx` | Renders "coming soon..." placeholder |

---

## Next step (start here next session)

**Fill `useRestaurants` hook** (`features/restaurants/hooks/useRestaurants.ts`):
- `useRestaurantList(filters?)` — React Query hook calling `restaurantService.getList(filters)`
- `useRestaurantDetail(id)` — React Query hook calling `restaurantService.getById(id)`

Then wire `app/restaurants/page.tsx` to use `useRestaurantList` (replace the `[...Array(8)]` placeholder).
Then wire `app/restaurants/[id]/page.tsx` to use `useRestaurantDetail` (read `useParams`, call hook, render real data, wire menu `+` to cart).
