# 🚀 Gunjan Vishwakarma — Next.js Developer Portfolio

Modern, high-performance developer portfolio for **Gunjan Vishwakarma**, built with **Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons, and Framer Motion**.

---

## 🛠️ Tech Stack & Highlights

- **Framework**: Next.js 14 (App Router & Server/Client Components)
- **Styling**: Tailwind CSS & Glassmorphism Design System
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts (`Inter`, `Plus Jakarta Sans`, `Fira Code`) via `next/font`

---

## 📁 Architecture & File Structure

```
frontend/
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← Google fonts, root HTML, SEO & OpenGraph meta
│   │   ├── page.tsx           ← Home page assembling all portfolio sections
│   │   └── globals.css        ← Glass utilities, aurora gradients & tailwind
│   └── components/
│       ├── BackgroundOrbs.tsx ← Animated aurora ambient lighting
│       ├── Navbar.tsx         ← Sticky glass header with mobile drawer
│       ├── Hero.tsx           ← Dynamic typewriter, badges & CTAs
│       ├── About.tsx          ← Narrative story, pillars & stats
│       ├── Skills.tsx         ← Categorized stack & proficiency bars
│       ├── Experience.tsx     ← Timeline of Fintech & AI internships
│       ├── Projects.tsx       ← Filterable projects (Mahir Screener & TaskManager)
│       ├── Education.tsx      ← MCA & BCCA degrees
│       ├── Certifications.tsx ← Webgurukul MERN & Sololearn certifications
│       ├── Contact.tsx        ← Interactive form & 1-click copy email
│       └── Footer.tsx         ← Quick links & smooth scroll-to-top
```

---

## ⚡ How to Run Locally

1. Open your terminal in the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Production Build & Deploy

- **Create a production build**:
  ```bash
  npm run build
  ```
- **Start production server**:
  ```bash
  npm run start
  ```
- **Deploy to Vercel**:
  1. Push code to GitHub.
  2. Import your repository into [Vercel](https://vercel.com).
  3. Deploy with zero configuration!
