# 🌌 QuadOps Agency Website

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Welcome to the official repository of the **QuadOps Agency Website** — a premium, high-performance web experience showcasing our freelance collective specializing in custom Web & Mobile App Development, robust DevOps Infrastructure, and technical SEO/Speed Optimization.

---

## 🎨 Design Philosophy: AURA Precision

This site is built using **AURA**, a design system encapsulating the _"Precision in Every Pixel"_ philosophy. It blends a clean, high-whitespace foundation with:

- 🌌 **Ambient Modern Glassmorphism:** Soft purple-tinted shadows, ambient light halos, dynamic gradients, and translucent backdrop-blur navigation.
- ⚡ **Fluid Interactions:** Smooth 3D-like hover translations, tactile active states, and custom transitions.
- ✍️ **Clean Typography:** Powered exclusively by the neo-grotesque typeface **Inter** with optimized letter spacing and visual contrast.

---

## 🚀 Key Features

- 🎯 **AURA Hero & Stats:** Rich ambient header and quick-metric indicators displaying our project delivery numbers and client satisfaction.
- 🛠️ **Service Showcase:** Focused badges highlighting our core competence in Full-Stack Apps, DevOps infrastructure, and SEO growth.
- 📐 **Interactive Project Planner:** A multi-step timeline and budget estimator quiz built to help clients scope their project requirements on-the-fly.
- 📂 **Dynamic Portfolio Grid:** Real-world metrics and case studies for banking platforms, cloud infrastructure hubs, and e-commerce setups.
- 👥 **Meet QuadOps Team:** Profile cards featuring the core developers, and including a custom built-in **Fullscreen Resume Viewer** using React-PDF.
- 💬 **Testimonial Slider:** High-impact client reviews demonstrating growth figures.
- 📬 **Nodemailer Contact Form:** Modern contact section supporting inquiry forms with built-in validation.

---

## 📁 File Structure

```text
aarvi/
├── app/                      # Next.js App Router root
│   ├── globals.css           # Tailwind v4 globals & custom animation classes
│   ├── layout.tsx            # Global layout configuration with metadata
│   ├── page.tsx              # Main entry point importing all page sections
│   └── favicon.ico / icon.png
├── src/
│   ├── components/           # UI Components
│   │   ├── Contact.tsx       # Contact form component
│   │   ├── Footer.tsx        # Footer layout with social & address details
│   │   ├── Header.tsx        # Responsive sticky glassmorphic navigation header
│   │   ├── Hero.tsx          # Animated hero header and main call to action
│   │   ├── ParallaxProvider.tsx # Parallax motion wrapper
│   │   ├── Portfolio.tsx     # Grid of case studies and project metrics
│   │   ├── ProjectPlanner.tsx # Multi-step timeline & cost estimator quiz
│   │   ├── ResumeViewer.tsx  # PDF resume inline viewing modal
│   │   ├── Services.tsx      # Services overview
│   │   ├── Stats.tsx         # Fast-read numeric indicators
│   │   ├── Team.tsx          # Team member cards with resume links
│   │   └── Testimonials.tsx  # Interactive feedback slider
│   └── constants/
│       └── index.ts          # Centralized content structure and site metadata
├── public/                   # Static assets (logos, resume PDFs)
├── eslint.config.mjs         # Flat ESLint configuration (v9 compatible)
├── tailwind.config.ts / postcss.config.mjs # Tailwind PostCSS configuration
├── tsconfig.json             # Compiler configuration
└── package.json              # Dependencies and workspace scripts
```

---

## 🛠️ Development & Script Command Guide

Ensure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### 1. Installation

Clone the repository and install all dependencies:

```bash
npm install
```

### 2. Development Server

Run the local next development environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Build & Compile

Build the optimized Next.js static production bundle:

```bash
npm run build 
```

### 4. Running Production Server

To preview the built output locally:

```bash
npm run start
```

### 5. Code Quality Checkers

We enforce strict type-safety and linting policies. Make sure you run these checks before committing your changes:

```bash
# Type-check TypeScript files without emitting code
npm run type-check

# Run ESLint validation
npm run lint

# Automatically fix linting and style issues where possible
npm run lint:fix
```

---

## ⚡ Technology Stack

- **Framework:** Next.js 16.2.6 (App Router)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS v4.0 (with PostCSS integration)
- **Scripting:** TypeScript v5
- **Document Rendering:** React-PDF (v10) for resume previews

---

## 📄 License

This project is licensed under the MIT License. Feel free to clone and customize it for your personal/commercial agency portfolio.
