# Zia — AI/ML Engineer Portfolio

A polished, responsive React + Vite portfolio for an AI/ML engineer.

## Features

- Responsive dark premium design
- Animated reveal-on-scroll effects
- Mobile navigation
- Project listing + individual project pages
- Resume download
- GitHub + LinkedIn links
- Skills / expertise section
- Experience timeline
- Deployment-ready Vite build

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Customize

Edit `src/App.jsx`:

- `profile` — name, email, location, GitHub, LinkedIn, resume path
- `projects` — project titles, descriptions, technologies, links
- `skills` — technical skill groups
- `experience` — employment history

Replace `public/resume.pdf` with your actual CV.

## Deployment

### Vercel

```bash
npm install
npm run build
```

Set the framework to Vite (or let Vercel detect it). Output directory: `dist`.

### Netlify

Build command: `npm run build`

Publish directory: `dist`

### GitHub Pages

Use a GitHub Pages action or deploy the `dist` directory after building.
