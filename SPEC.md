# SPEC.md

## Feature: Infrastructure Fixes

Fix all foundational gaps blocking real data from flowing through the app.
No new UI. No new pages. Pure wiring.

---

## Tasks

### 1. Add QueryClientProvider
- File: `app/layout.tsx`
- Wrap the app with `<QueryClientProvider>` from `@tanstack/react-query`
- Create `lib/queryClient.ts` for the QueryClient instance (do not inline it in layout)

### 2. Wire Navbar cart count to Redux
- File: `components/layout/Navbar.tsx`
- Remove hardcoded `2`
- Read cart item count from Redux using existing `store/hooks.ts` typed selector
- Use total quantity of all items, not number of unique items

### 3. Wire SearchInput on Home page
- File: `app/page.tsx`
- Add `useState` for search query
- Pass `value` and `onChange` to `<SearchInput>`
- On submit/enter, navigate to `/restaurants?search=<query>` using Next.js router

### 4. Complete restaurantService
- File: `features/restaurants/services.ts`
- Add service methods for all endpoints already defined in `constants/api.ts`:
  - `getList(filters?)` — restaurant list with optional filter params
  - `getById(id)` — restaurant detail
  - `search(query)` — search by name
  - `getBestSeller()` — best seller list
  - `getNearby()` — nearby restaurants
- Use existing `apiClient` from `lib/apiClient.ts`
- Mirror the pattern of existing `getRecommended()`

---

## Out of Scope for This SPEC
- No UI changes
- No new pages
- Do not touch checkout, orders, or profile
- Do not fill empty hooks yet (useRestaurants, useCheckout, useOrders) — that comes next

---

## Definition of Done
- [ ] QueryClientProvider wrapping app in layout.tsx
- [ ] Navbar cart badge reads from Redux, not hardcoded
- [ ] SearchInput navigates to /restaurants?search= on enter
- [ ] restaurantService has all 5 new methods
- [ ] npm run build passes with no errors
- [ ] npm run lint passes with no errors