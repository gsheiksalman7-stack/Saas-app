This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# File Structure
  
  src/
├── app/
│   ├── (public)/                    # Public routes (no auth)
│   │   ├── page.tsx                 # Landing page
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│
│   ├── (auth)/                      # Authenticated routes
│   │   ├── layout.tsx               # Auth guard (must be logged in)
│   │
│   │   ├── dashboard/               # USER dashboard
│   │   │   ├── layout.tsx           # User-only RBAC
│   │   │   ├── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │
│   │   └── admin/                   # ADMIN dashboard
│   │       ├── layout.tsx           # Admin-only RBAC
│   │       ├── page.tsx
│   │       ├── users/
│   │       │   └── page.tsx
│   │       ├── analytics/
│   │       │   └── page.tsx
│   │       └── settings/
│   │           └── page.tsx
│
│   ├── layout.tsx                   # Root layout
│   ├── globals.css
│
├── components/                      # Reusable UI components
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── modal.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── protected-route.tsx
│
├── features/                        # Feature-based logic
│   ├── auth/
│   │   ├── auth.service.ts
│   │   ├── auth.types.ts
│   │   └── auth.hooks.ts
│   ├── user/
│   │   ├── user.service.ts
│   │   └── user.types.ts
│   └── admin/
│       ├── admin.service.ts
│       └── admin.types.ts
│
├── constants/
│   ├── images.ts
│   ├── roles.ts                     # USER / ADMIN enums
│   └── routes.ts
│
├── lib/
│   ├── auth.ts                      # Session, JWT, cookies
│   ├── rbac.ts                      # Role checks
│   ├── db.ts
│   └── utils.ts
│
├── middleware.ts                    # Optional global protection
└── types/
    └── index.ts

