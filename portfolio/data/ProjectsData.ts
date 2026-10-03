import { Project, ProjectCategory } from "@/types";

/**
 * Category "lines" for the project rail. The key is referenced by each project's
 * `category`. Projects are ordered below so entries sharing a category are
 * contiguous, letting each category render as one continuous brace.
 */
export const ProjectCategories: Record<string, ProjectCategory> = {
  ai: {
    label: "AI",
    textClass: "text-violet-600 dark:text-violet-400",
    blockClass: "bg-violet-500/10",
    blurb: "Notes pipelines and LLM-powered apps built on vector search.",
  },
  infra: {
    label: "Infra",
    textClass: "text-cyan-600 dark:text-cyan-400",
    blockClass: "bg-cyan-500/10",
    blurb: "Infrastructure-as-code provisioning the AWS backbone for everything here.",
  },
  "full-stack": {
    label: "Full-Stack",
    textClass: "text-emerald-600 dark:text-emerald-400",
    blockClass: "bg-emerald-500/10",
    blurb: "End-to-end product work — this site included.",
  },
  consulting: {
    label: "SMB Consulting",
    textClass: "text-amber-600 dark:text-amber-400",
    blockClass: "bg-amber-500/10",
    blurb: "Client delivery — owning a product end-to-end for a small/medium business.",
  },
};

export const ProjectsData: Project[] = [
    {
        id: 1,
        title: "Get Smart!",
        shortDescription: "Astro markdown documentation site hosting a wide range of professional technical notes on software development. Whenever I teach myself a new framework or concept, my notes go here. These notes are also vectorized and uploaded to an AWS S3 Vectors bucket.",
        techStack: ["TypeScript", "Markdown", "AWS", "GitHub Actions"],
        date: "Nov 2025 - Present", 
        narrative:
          "I believe that learning is a life long journey, and I keep myself accountable by documenting my learning here.",
        liveLink: "https://get-smart.justinklein.ca",
        githubLink: "https://github.com/justinklein2001/my-tech-notes",
        category: "ai",
        tag: "RAG",
    },
    {
        id: 2,
        title: "Get Quizzed!",
        shortDescription: "A web app that ingests my vectorized's tech notes + resume and mocks technical interviews based on what I learned. Backend uses an AWS Lambda function and MongoDB backend, plugged in to my Terraform infra, the project is less than $1/month in cloud computing costs.",
        techStack: ["React", "TypeScript", "Next.js", "AWS", "GitHub Actions"],
        date: "Jan 2026 - Present",
        narrative:
          "I have a bad habit of just internalizing knowledge, but never communicating it. This tool aims to fix that.",
        liveLink: "https://get-quizzed.justinklein.ca",
        githubLink: "https://github.com/justinklein2001/get-quizzed",
        category: "ai",
        tag: "LLM",
    },
    {
        id: 3,
        title: "AWS Terraform Infrastructure",
        shortDescription: "Infrastructure as Code (IaC) project using Terraform to provision and manage AWS resources for personal projects.",
        techStack: ["Terraform", "AWS", "GitHub Actions"],
        date: "Dec 2025 - Present",
        narrative:
          "When an idea strikes, I wanted the infra ready to go to deploy it securely, easily cheaply.",
        githubLink: "https://github.com/justinklein2001/terraform-justinklein.ca",
        category: "infra",
        tag: "IaC",
    },
    {
        id: 4,
        title: "Portfolio - this site!",
        shortDescription: "Personal portfolio website to showcase projects and experience.",
        techStack: ["React", "TypeScript", "Next.js", "AWS", "GitHub Actions"],
        date: "Dec 2025 - Present",
        narrative:
          "Resumes alone don't tell your full story, I'm hoping this site makes you curious to dive deeper in person!",
        githubLink: "https://github.com/justinklein2001/justinklein.ca",
        category: "full-stack",
        tag: "Web",
    },
    {
        id: 5,
        title: "Anomet Web CRM",
        shortDescription: "Led a digital transformation project for a manufacturing SMB — architecting a custom web CRM with SharePoint integration, hosted in Azure. The solution let the company work remotely and sunset a legacy Windows server.",
        techStack: ["React", "NestJS", "Postgres", "Azure", "Microsoft 365"],
        date: "Dec 2025 - Jun 2026",
        narrative:
          "I owned the product end-to-end and decided every architectural decision.",
        category: "consulting",
        tag: "CRM",
        iconLogo: "/anomet.jpeg",
    }
];
