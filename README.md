# Hope Soko Portfolio

A modern personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn-style UI components.

## Overview

This portfolio showcases:
- personal profile and intro
- about and skills section
- experience and education timeline
- project highlights
- contact form and social links
- dark/light theme support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn-style components
- lucide-react icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
```

## Project Structure

```bash
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    Contact.tsx
    Education.tsx
    Experience.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Projects.tsx
    ui/
  data/
    portfolio.ts
```

## Notes

- The app uses local font assets and a custom theme system.
- Contact form opens the user’s default mail client with a pre-filled message.
- Project data is centralized in `src/data/portfolio.ts` for easy updates.

## License

This project is for personal portfolio use.
