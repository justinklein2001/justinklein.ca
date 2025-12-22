export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export const ProjectsData: Project[] = [
    {
        id: 1,
        title: "Get Smart!",
        shortDescription: "Documentation site hosting personal tech notes, vectorized and uploaded to an AWS S3 Vectors bucket.",
        techStack: ["Python", "Markdown", "AWS", "GitHub Actions"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        title: "Get Quizzed!",
        shortDescription: "Web app that ingests Get Smart! notes and quizzes users using LLMs and vector search.",
        techStack: ["React", "TypeScript", "Next.js", "AWS", "GitHub Actions"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 3,
        title: "AWS Terraform Infrastructure",
        shortDescription: "Infrastructure as Code (IaC) project using Terraform to provision and manage AWS resources for personal projects.",
        techStack: ["Terraform", "AWS", "GitHub Actions"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 4,
        title: "Farm Games Repository",
        shortDescription: "Capstone project, refactored after graduation to include automated Kubernetes deployment.",
        techStack: ["React", "MySQL", "Docker", "Kubernetes", "GitHub Actions"],
        liveLink: "#",
        githubLink: "#",
    }
];