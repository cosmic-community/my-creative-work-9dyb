# Duracabs - Airport Cab Service

![App Preview](https://imgix.cosmicjs.com/55892600-619c-11f1-ac44-fb77fa1a6b81-autopilot-photo-1554260570-e9689a3418b8-1780745950251.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, SEO-friendly Next.js application for **Duracabs** — your reliable Delhi airport cab service offering 24×7 taxi & car hire, airport pick-up and drop-off, and affordable rides at your doorstep. Built on top of [Cosmic](https://www.cosmicjs.com).

## Features

- 🚖 **Services Showcase** — Browse popular airport pick & drop services with routes, vehicle types, and starting prices
- 📝 **SEO Blog** — Read informative, search-optimized articles about airport taxi services
- 🏷️ **Categories** — Organized content categories for easy navigation
- ⚡ **24×7 Availability Badges** — Clearly highlight round-the-clock services
- 📱 **Fully Responsive** — Beautiful experience on mobile, tablet, and desktop
- 🔍 **SEO Optimized** — Meta descriptions, focus keywords, and dynamic metadata
- 🎨 **Modern Design** — Clean, professional UI with smooth interactions

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a240689ce890493c7b82cc7&clone_repository=6a240789ce890493c7b82cf6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a creative portfolio website with projects, an about page, and contact information.
>
> User instructions: Creative blog for seo friendly "Airport Cab Service, Popular Airport Pick & Drop Services, Pick-up and Drop-off Airport Taxi Services, Delhi Airport Drop Taxi Hire on Rent, reliable airport taxi services, Delhi Airport Cab Service | 24×7 Taxi & Car Hire, Book Airport Cabs Online, Affordable Auto Rides at Your Doorstep with Duracabs""

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Creative Work". The content is managed in Cosmic CMS with the following object types: categories, services, blog-posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: Creative blog for seo friendly "Airport Cab Service, Popular Airport Pick & Drop Services, Pick-up and Drop-off Airport Taxi Services, Delhi Airport Drop Taxi Hire on Rent, reliable airport taxi services, Delhi Airport Cab Service | 24×7 Taxi & Car Hire, Book Airport Cabs Online, Affordable Auto Rides at Your Doorstep with Duracabs"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — Headless CMS
- [imgix](https://imgix.com) — Image optimization

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with the required content types

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd duracabs

# Install dependencies
bun install

# Set up environment variables (create .env.local)
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
// Fetch all services
const response = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const services = response.objects

// Fetch a single blog post by slug
const response = await cosmic.objects
  .findOne({ type: 'blog-posts', slug })
  .depth(1)

const post = response.object
```

## Cosmic CMS Integration

This application leverages three Cosmic object types:

- **Categories** — Organize content with name and description
- **Services** — Airport cab services with route, vehicle type, pricing, and availability
- **Blog Posts** — SEO-optimized articles with headline, meta description, focus keyword, content, and featured images

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect your repo in [Netlify](https://netlify.com)
3. Add environment variables in site settings
4. Deploy!
<!-- README_END -->