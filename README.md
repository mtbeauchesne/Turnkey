# Turnkey — The Complete Hospitality Content Engine

A SaaS demo for branded, revenue-driving hotel content across every channel.

## Features
- 124+ pre-loaded hotel brands (Marriott, Hilton, IHG, Wyndham, Hyatt, Choice, Best Western)
- URL-based photo scraping from hotel websites, OTAs, Google, and social
- 5-channel content generation (Instagram, Facebook, TikTok, Email, Blog/SEO)
- AI Calendar Auto-Fill — generates an entire month of content
- Multi-property portfolio dashboard
- Review Response AI — drafts brand-voice responses to guest reviews
- Social inbox with sentiment analysis and AI-suggested replies
- Approval workflows with brand compliance scanning
- Revenue attribution analytics
- Local event intelligence and CRM segment targeting

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000

## Build for Production

```bash
# Build static files
npm run build

# Preview production build locally
npm run preview
```

## Deploy to cPanel

### Option A: Static Build (Recommended)

1. Run `npm run build` locally
2. This creates a `dist/` folder with static HTML/CSS/JS
3. Upload the contents of `dist/` to your cPanel `public_html/turnkey/` directory
4. Access at yourdomain.com/turnkey/

### Option B: Node.js App on cPanel

If your cPanel has Node.js app support:

1. Upload the entire project folder to your server (e.g., `/home/yourusername/turnkey-demo/`)
2. In cPanel, go to **Setup Node.js App**
3. Click **Create Application**
4. Set:
   - Node.js version: 18+ (or latest available)
   - Application mode: Production
   - Application root: `turnkey-demo`
   - Application startup file: `node_modules/.bin/vite` (or use Option A instead)
5. Click **Run NPM Install**
6. Click **Create**

### Option C: Deploy to Vercel (Easiest)

1. Push this project to a GitHub repo
2. Go to vercel.com and import the repo
3. Vercel auto-detects Vite and deploys in ~60 seconds
4. Get a free URL like turnkey-demo.vercel.app

## Deploy to Vercel via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Tech Stack
- React 18
- Vite 5
- Pure CSS (no Tailwind dependency)
- Google Fonts (Syne, Outfit, JetBrains Mono)

## Next Steps for Production
- Add Claude API integration for real content generation
- Connect Meta Graph API, X API for auto-publishing
- Add PostgreSQL database for user accounts, content history
- Implement Stripe for subscription billing
- Add real photo scraping with Puppeteer/Playwright
- Connect to hotel PMS/CRM for guest data

---

Built by Hospitality Pro Solutions
