# Nishant Kumar - Personal Portfolio & Technical Showcase

A minimalist, high-performance, and responsive personal portfolio website designed for **Nishant Kumar** (IIT Bombay graduate and Software Developer specializing in backend microservices, event streaming, caching architecture, and applied AI/RAG systems).

Built for deployment to **GitHub Pages** with zero backend requirements and automated continuous deployment via **GitHub Actions**.

---

## Architecture & Technology Stack

- **Framework**: React 19 with TypeScript
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS v4 with custom editorial typography and accessible color hierarchy
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static build via GitHub Actions)
- **Zero Backend**: All contact points utilize direct `mailto:` links, clipboard copy interactions, and external professional profiles (GitHub, LinkedIn).

---

## 1. Local Development Setup

### Prerequisites

- Node.js 20+ installed
- npm 10+ installed

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/nish1894/[GITHUB_REPOSITORY_NAME].git
   cd [GITHUB_REPOSITORY_NAME]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   ```
   The compiled static assets will be output to the `dist/` directory.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 2. GitHub Repository Setup

1. Create a new repository on GitHub (e.g., `portfolio` or `nish1894.github.io`).
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release for Nishant Kumar"
   git branch -M main
   git remote add origin https://github.com/nish1894/[GITHUB_REPOSITORY_NAME].git
   git push -u origin main
   ```

---

## 3. GitHub Pages Deployment Instructions

This repository comes pre-configured with an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Enabling GitHub Pages in Repository Settings:

1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically trigger the workflow, build the static site, and publish it to GitHub Pages.

Your website will be live at:
`https://nish1894.github.io/[GITHUB_REPOSITORY_NAME]/` (or `https://nish1894.github.io/` if using a user/organization repository).

---

## 4. How to Update or Add the Resume PDF

1. Place your official resume PDF in the `public/` directory with the exact filename:
   ```
   public/Nishant_Kumar_Software_Developer_Resume.pdf
   ```
2. When Vite compiles the project (`npm run build`), all contents of `public/` are automatically copied to the root of `dist/`.
3. The portfolio code references the resume dynamically via:
   ```ts
   `${import.meta.env.BASE_URL}Nishant_Kumar_Software_Developer_Resume.pdf`
   ```
   Both the "View Resume" and "Download Resume" buttons across the header, hero, contact section, and mobile menu will open or download this file directly.

---

## 5. Changing the Repository Base Path

If your GitHub repository is named something other than the default or if you are using a custom domain:

### For Standard GitHub Pages Subpath (`https://username.github.io/my-repo/`):
The included `.github/workflows/deploy.yml` automatically passes:
```yaml
env:
  BASE_PATH: '/${{ github.event.repository.name }}/'
```
This requires **zero manual configuration** if your repository name matches your project.

### For Custom Domains or Root Deployments (`https://nishantkumar.dev` or `https://username.github.io`):
If your repository is deployed at the domain root:
- In `.github/workflows/deploy.yml`, set:
  ```yaml
  env:
    BASE_PATH: '/'
  ```
- Or update `vite.config.ts` default base:
  ```ts
  base: process.env.BASE_PATH || '/',
  ```

---

## 6. Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg              # Custom "NK" monogram vector icon
│   ├── robots.txt               # Search engine crawl directives
│   ├── sitemap.xml              # XML sitemap
│   ├── resume-placeholder.txt   # Instructions for resume placement
│   └── Nishant_Kumar_Software_Developer_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky accessible navigation + mobile drawer
│   │   ├── Hero.tsx             # Hero with event-driven pipeline diagram
│   │   ├── About.tsx            # Factual bio & engineering pillars
│   │   ├── Experience.tsx       # Professional timeline (Faclon Labs, Outlier)
│   │   ├── Projects.tsx         # Flagship Lift Off Solutions + secondary projects
│   │   ├── Skills.tsx           # Categorized skills (Professional vs. project)
│   │   ├── Education.tsx        # IIT Bombay dual degree showcase
│   │   ├── Contact.tsx          # Direct mailto, copy-email, and profiles
│   │   └── Footer.tsx           # Footer, back-to-top, and copyright
│   ├── data/
│   │   └── portfolio.ts         # Centralized factual portfolio data
│   ├── types.ts                 # TypeScript interfaces
│   ├── App.tsx                  # Root application view
│   ├── index.css                # Tailwind styling, scroll offset & print rules
│   └── main.tsx                 # DOM entry point
├── index.html                   # SEO, OpenGraph, Twitter cards & JSON-LD
├── metadata.json                # Project metadata
├── package.json                 # Project dependencies & build scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration with relative base support
└── README.md                    # Project documentation
```

---

## 7. Recruiter Quick-Scan Reference

- **Candidate**: Nishant Kumar
- **Alma Mater**: Indian Institute of Technology Bombay (B.Tech + M.Tech Dual Degree, Energy Systems Engineering)
- **Primary Expertise**: Node.js microservices, MongoDB & Redis caching performance, Kafka/MQTT pipelines, Docker, applied AI/RAG architectures.
- **Key Metrics**: 80% reduction in MongoDB query volume, 40% reduction in Redis memory, up to 90% reduction in repeated operations, 84 automated tests.
- **Flagship Project**: Lift Off Solutions (Multi-tenant AI customer-service platform & adaptive Python RAG engine with 5 retrieval tiers).
- **Direct Contact**: [nishantkumar8466@gmail.com](mailto:nishantkumar8466@gmail.com) | +91 79764 69859 | Bengaluru, India.
