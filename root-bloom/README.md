# Root & Bloom (Early Prototype)

This directory contains an initial Next.js 14 prototype for the Root & Bloom homeschooling platform. It focuses on the
frontend experience, data modeling scaffolding, and visual components described in the product brief.

## Getting Started

```bash
npm install
npm run dev
```

## Implemented Highlights

- Landing page with hero, feature callouts, and pricing overview.
- Dashboard and path explorer with placeholder lesson data.
- Lesson player screen with AI activity modal scaffolding.
- Course browser with reusable cards and data layer stubs.
- Soulful progress visualizations for Montessori, Waldorf, and Reggio Emilia journeys.

## Next Steps

- Connect Supabase auth (email/Google) and family profiles.
- Expand curriculum seed data to the full 41 courses and 188 lessons.
- Integrate Manus AI SDK routing and token-aware caching strategy.
- Implement Stripe subscriptions with tier-based access control.
- Add PDF generation pipeline for AI-created activities.
- Configure deployment to Vercel and GitHub CI workflows.
