# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Environment

Copy `.env.local` and set:

```
NEXT_PUBLIC_API_BASE_URL=https://be-restaurant-production.up.railway.app
```

Defaults to `http://localhost:8000` if unset. Backend Swagger at `/apiswagger/`.

Figma design: `https://www.figma.com/design/1By7DB1gDCNEoW62UqLUrA/Restaurant-App?node-id=2210-441096`

## Key Files (read these first)

- `app/page.tsx` — entry point
- `store/index.ts` — state management
- `constants/api.ts` — all API endpoints
- `constants/routes.ts` — all route constants
- `SPEC.md` — current feature being built
- `PROGRESS.md` — current status and next steps

## Session Rules

### Starting a new feature
When user says "start feature":
1. Read CLAUDE.md, PROGRESS.md, and SPEC.md
2. Summarize understanding before touching any files

### Continuing work
When user says "continue":
1. Read CLAUDE.md and PROGRESS.md only
2. Resume from the exact next step in PROGRESS.md

### Ending a session
When user says "we're done":
1. Update PROGRESS.md with what was completed and exact next step
2. Confirm the update is done
3. Remind user to run /clear

## Architecture

**Next.js 16 App Router** with a features-first layout.

### Routing

| Path | Description |
|------|-------------|
| `app/page.tsx` | Home — hero + restaurant list |
| `app/(auth)/login`, `app/(auth)/register` | Auth route group, no navbar |
| `app/restaurants/page.tsx` | Restaurant listing with filters |
| `app/restaurants/[id]/page.tsx` | Restaurant detail + menu |
| `app/cart/page.tsx` | Cart (protected) |
| `app/checkout/page.tsx` | Checkout (protected) |
| `app/profile/page.tsx` | Profile + orders + address (protected) |

Protected routes redirect to `/login` on 401. Route constants live in `constants/routes.ts`.

### State Management

Two layers, kept strictly separate:

- **Redux Toolkit** — `store/index.ts`
  - `auth` (`features/auth/authSlice.ts`) — user, token, isAuthenticated; async thunks call `authService`
  - `cart` (`features/cart/store.ts`) — items, totals, restaurantId; enforces single-restaurant constraint
- **TanStack Query** — server state inside `features/*/hooks/`

Typed dispatch/selector hooks in `store/hooks.ts`. Redux store provided at root via `<ReduxProvider>` (`store/provider.tsx`).

**Critical**: `QueryClientProvider` is not yet in `app/layout.tsx`. React Query cannot function until it wraps `{children}` inside `ReduxProvider`.

### API Layer

`lib/apiClient.ts` — Axios instance with two interceptors:
1. **Request**: reads JWT from `localStorage`, injects `Authorization: Bearer <token>`
2. **Response**: on 401, clears token and redirects to `/login` on protected routes only

All endpoint paths in `constants/api.ts` (`API_ENDPOINTS`). `restaurantService` currently only implements `getRecommended()` — list, search, detail, best-seller, and nearby methods are missing.

### Features Structure

```
features/<domain>/
  components/   # UI components for this domain
  hooks/        # React Query hooks + custom hooks
  services.ts   # Axios calls via apiClient
  types.ts      # TypeScript types
  store.ts      # Redux slice (only auth and cart)
```

Shared UI primitives: `components/layout/ui/` — Button, Input, Modal, Tabs, SearchInput.  
Common page shell: `components/layout/MainLayout.tsx` (receives `isLoggedIn` as a prop — not auto-wired to Redux).

### Token Persistence

Stored in `localStorage` under key `token`. `authSlice` reads on init (guarded by `typeof window !== 'undefined'`). On logout, `authService.logout()` removes token and redirects.

## Known Gaps (stubs not yet wired)

Non-obvious from reading the code — files exist but contain placeholders:

| What | Location | Gap |
|------|----------|-----|
| `QueryClientProvider` | `app/layout.tsx` | Missing — React Query installed but never provided |
| Restaurant listing | `app/restaurants/page.tsx` | `[...Array(8)]` hardcoded cards, no API call, filters unused |
| Restaurant detail | `app/restaurants/[id]/page.tsx` | `id` param never read, no API call, menu `+` buttons dispatch nothing |
| Checkout | `app/checkout/page.tsx` | All data hardcoded, doesn't read Redux cart, no checkout API call |
| `useRestaurants` hook | `features/restaurants/hooks/useRestaurants.ts` | Empty file |
| `useCheckout` hook | `features/checkout/hooks/useCheckout.ts` | Empty file |
| `useOrders` hook | `features/orders/hooks/useOrders.ts` | Empty file |
| Navbar cart badge | `components/layout/Navbar.tsx` | Hardcoded to 2, not wired to Redux cart |
| `SearchInput` on home | `app/page.tsx` | Rendered without `value`/`onChange` — does nothing |
| Delivery Address | `app/profile/page.tsx` | Renders "coming soon..." placeholder |

## Code Rules

- Always follow the existing features structure for any new domain
- Always use `API_ENDPOINTS` from `constants/api.ts`, never hardcode URLs
- Always use route constants from `constants/routes.ts`, never hardcode paths
- New shared UI primitives go in `components/layout/ui/`
- Never store sensitive data beyond token in `localStorage`
- Ask before modifying `lib/apiClient.ts` or `store/index.ts`
