# Abhinav Asthana Portfolio

A premium personal portfolio website built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Features

- Animated hero with typing effect
- Dynamic particle canvas background
- Mouse-follow glow effect
- Scroll reveal animations and parallax hero shift
- Glassmorphism cards and timeline sections
- Skills with animated progress bars
- Projects, experience, education, certifications, achievements, and contact form
- Dark and light mode toggle
- SEO metadata in `index.html`

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons + Lucide React

## Project Structure

```txt
.
|- public/
|  |- Abhinav_Asthana_Resume.txt
|- src/
|  |- components/
|  |  |- AnimatedBackground.jsx
|  |  |- CursorGlow.jsx
|  |  |- ThemeToggle.jsx
|  |  |- TypingText.jsx
|  |- data/
|  |  |- portfolioData.js
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- index.html
|- vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy

Deploy the output of `npm run build` on Vercel, Netlify, or GitHub Pages.

For Vercel:

1. Import the repository.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`

## Customize Content

Edit CV-driven content in `src/data/portfolioData.js`.
