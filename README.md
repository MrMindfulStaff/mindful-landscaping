# Mindful Landscaping LLC

Professional website for Mindful Landscaping LLC — a Milwaukee-based lawn care and landscaping company. Part of The Mindful Companies ecosystem.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npx vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Deploy automatically on every push

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, service highlights, trust bar, testimonials, about blurb |
| Services | `/services` | Detailed service cards for all offerings |
| About | `/about` | Company story, values, team placeholder |
| Contact | `/contact` | Quote request form with validation |

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Green | `#2D6A2D` | Primary brand color |
| Charcoal | `#1A1A1A` | Text, footer background |
| Gold | `#C9A84C` | Accent, CTAs |
| White | `#FFFFFF` | Backgrounds |

## Project Structure

```
app/
  layout.tsx        — Root layout with Navbar + Footer
  page.tsx          — Home page
  services/page.tsx — Services page
  about/page.tsx    — About page
  contact/page.tsx  — Contact / quote form page
  globals.css       — Global styles

components/
  Navbar.tsx         — Fixed nav with mobile hamburger
  Footer.tsx         — Site footer
  Hero.tsx           — Home hero section
  ServiceCard.tsx    — Reusable service card
  ServiceHighlights.tsx — Home page service grid
  TrustBar.tsx       — Trust indicators
  AboutBlurb.tsx     — Home page about section
  Testimonials.tsx   — Client testimonials
  QuoteForm.tsx      — Contact form with validation
```

## Notes

- No external image dependencies — uses CSS gradients and inline SVG icons
- Mobile-first responsive design
- Client-side form validation (name, address, phone, email, service type)
- All placeholder content is realistic and Milwaukee-specific
