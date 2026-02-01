import { Project } from "@/types";

export const ProjectsData: Project[] = [
    {
        id: 1,
        title: "Get Smart!",
        shortDescription: "Documentation site hosting professional tech notes, vectorized and uploaded to an AWS S3 Vectors bucket.",
        techStack: ["TypeScript", "Markdown", "AWS", "GitHub Actions"],
        liveLink: "https://get-smart.justinklein.ca",
        githubLink: "https://github.com/justinklein2001/my-tech-notes",
    },
    {
        id: 2,
        title: "Get Quizzed!",
        shortDescription: "Web app that ingests Get Smart! notes and quizzes users using LLMs and vector search.",
        techStack: ["React", "TypeScript", "Next.js", "AWS", "GitHub Actions"],
        liveLink: "https://get-quizzed.justinklein.ca",
        githubLink: "https://github.com/justinklein2001/get-quizzed",
    },
    {
        id: 3,
        title: "AWS Terraform Infrastructure",
        shortDescription: "Infrastructure as Code (IaC) project using Terraform to provision and manage AWS resources for personal projects.",
        techStack: ["Terraform", "AWS", "GitHub Actions"],
        githubLink: "https://github.com/justinklein2001/terraform-justinklein.ca",
    },
    {
        id: 4,
        title: "Portfolio - this site!",
        shortDescription: "Personal portfolio website to showcase projects and experience.",
        techStack: ["React", "TypeScript", "Next.js", "AWS", "GitHub Actions"],
        githubLink: "https://github.com/justinklein2001/justinklein.ca",
    }
];