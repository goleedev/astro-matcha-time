# Matcha Time 🍵

A playful little Astro app to invite your office buddies to Matcha Time.

![Matcha Screenshot](./src/assets/matcha.webp)

## What it does

- Asks: "What time is it?"
- If you're wrong (and you are), it reminds you: it's always matcha time.
- Includes a link to add the next matcha session to your Google Calendar (Thursdays @ 12:30pm London time).

## Tech

- [Astro](https://astro.build/)
- Tailwind CSS
- Cloudflare Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## Deployment

This app is designed to be deployed on Cloudflare Pages:

```bash
# Build and deploy
npx wrangler pages deploy dist --project-name matcha-time-app
```

Or connect your GitHub repository to Cloudflare Pages for automatic deployments.

## Why?

Because you deserve a matcha break — and so do your office buddies. ☕
