# Arsh Atelier — Premium Nail Artist Portfolio & Booking

Multi-page React website for a private nail artistry brand in New Delhi.

## Tech Stack

- React 19 + Vite
- JavaScript (ES6+) — no TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- React Router DOM
- React Icons

## Pages / Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About the Artist |
| `/portfolio` | Gallery with category filters |
| `/portfolio/:id` | Design detail |
| `/services` | Editorial services list |
| `/requirement` | Custom enquiry form |
| `/booking` | Multi-step appointment request |
| `/reviews` | Testimonials |
| `/contact` | Contact + WhatsApp / Call |
| `*` | Custom 404 |

## Getting Started

```bash
cd arsh-atelier
npm install
npm run dev
```

Open http://localhost:5173

## Design System

- **Colours**: Ivory, Cream, Nude, Blush, Charcoal, Brown, Gold accent
- **Typography**: Playfair Display (serif headings) + Inter (body)
- Luxury editorial layout, generous whitespace, image-focused

## Backend-ready

Local data lives in `src/data/`. Forms log to console and are structured for future APIs:

- `GET /api/designs` & `/api/designs/:id`
- `GET /api/services`
- `POST /api/enquiries`
- `POST /api/bookings`
- `GET /api/reviews`

## Features

- Fully responsive (mobile / tablet / desktop)
- GSAP page transitions & scroll reveals
- Portfolio category filtering with animation
- Multi-step booking flow (no page reload)
- Requirement form with success state + design pre-fill
- Scroll progress indicator
- Mobile hamburger menu with GSAP
