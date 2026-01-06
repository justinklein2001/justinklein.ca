# Portfolio Site - justinklein.ca
## Author: Justin Klein
## Last Updated: January 6th, 2026 

### Overview
Portfolio site built using **Next.js, TypeScript, TailwindCSS and MaterialUI**. Built to quickly and efficiently provide a high-level overview of who I am and what I do. Designed to be able to be effectively scanned in **< 10 seconds**.

### Deployment
This site is built and synced to an **AWS S3** bucket via **GitHub Actions**. The bucket is put behind a **Cloudfront CDN** instance linked to the **Route 53** Hosted Zone holding the root domain: **justinklein.ca**.
### Architecture
```bash
.
├── portfolio
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx # main application
│   ├── components # components defined outside of /app
│   │   ├── ExperienceTabs.tsx
│   │   ├── Footer.tsx
│   │   ├── LiveProjects.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SocialButtons.tsx
│   ├── data # bullet points, easily changeable
│   │   ├── ExperienceData.ts
│   │   └── ProjectsData.ts
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── adknown.jpeg
│   │   ├── aws.png
│   │   ├── da.jpeg
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── guelph.png
│   │   ├── heart_stroke.png
│   │   ├── ncr.jpeg
│   │   ├── next.svg
│   │   ├── profile.png
│   │   ├── tulip.jpeg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── README.md
│   ├── sections # main page sections
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectSection.tsx
│   │   └── SummarySection.tsx
│   ├── tsconfig.json
│   └── types # component types
│       ├── experience.ts
│       ├── index.ts
│       ├── project.ts
│       └── tech-stack.ts
└── README.md
```