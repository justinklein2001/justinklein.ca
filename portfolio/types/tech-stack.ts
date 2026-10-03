import { FaAws, FaDatabase, FaDocker, FaGithub, FaJava, FaMarkdown, FaMicrochip, FaMicrosoft, FaNode, FaPython, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiNestjs, SiPostgresql, SiSpring, SiTerraform, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiSparkling2Fill, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineKubernetes } from "react-icons/ai";
import { MdOutlinePhp } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";

export enum TechStackCategory {
    Frontend = "Frontend",
    Backend = "Backend",
    DevOps = "DevOps",
}
export interface TechStack {
    title: string;
    icon: React.ElementType;
    color: string;
    category: TechStackCategory;
}

export const TechStackMap: Map<string, TechStack> = new Map([
    ["React", { title: "React", icon: FaReact, color: "text-blue-500", category: TechStackCategory.Frontend }],
    ["Next.js", { title: "Next.js", icon: RiNextjsLine, color: "text-black", category: TechStackCategory.Frontend }],
    ["TypeScript", { title: "TypeScript", icon: SiTypescript, color: "text-blue-600", category: TechStackCategory.Frontend }],      
    ["JavaScript", { title: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400", category: TechStackCategory.Frontend }],
    ["Tailwind CSS", { title: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400", category: TechStackCategory.Frontend }],
    ["Markdown", { title: "Markdown", icon: FaMarkdown, color: "text-gray-400", category: TechStackCategory.Frontend }],
    ["Node.js", { title: "Node.js", icon: FaNode, color: "text-green-600", category: TechStackCategory.Backend }],
    ["NestJS", { title: "NestJS", icon: SiNestjs, color: "text-red-600", category: TechStackCategory.Backend }],
    ["Python", { title: "Python", icon: FaPython, color: "text-yellow-500", category: TechStackCategory.Backend }],
    ["C", { title: "C", icon: SiC, color: "text-blue-400", category: TechStackCategory.Backend }],
    ["C++", { title: "C++", icon: SiCplusplus, color: "text-blue-500", category: TechStackCategory.Backend }],
    ["Java", { title: "Java", icon: FaJava, color: "text-red-500", category: TechStackCategory.Backend }],
    ["SQL", { title: "SQL", icon: FaDatabase, color: "text-sky-400", category: TechStackCategory.Backend }],
    ["Multi-Threading", { title: "Multi-Threading", icon: FaMicrochip, color: "text-gray-400", category: TechStackCategory.Backend }],
    ["AI", { title: "AI", icon: RiSparkling2Fill, color: "text-purple-400", category: TechStackCategory.Backend }],
    ["MySQL", { title: "MySQL", icon: SiMysql, color: "text-blue-700", category: TechStackCategory.Backend }],
    ["Postgres", { title: "Postgres", icon: SiPostgresql, color: "text-blue-700", category: TechStackCategory.Backend }],
    ["PHP", { title: "PHP", icon: MdOutlinePhp, color: "text-purple-600", category: TechStackCategory.Backend }],
    ["Spring Boot", { title: "Spring Boot", icon: FaJava, color: "text-green-700", category: TechStackCategory.Backend }],
    ["Spring", { title: "Spring", icon: SiSpring, color: "text-green-600", category: TechStackCategory.Backend }],
    ["AWS", { title: "AWS", icon: FaAws, color: "text-orange-500", category: TechStackCategory.DevOps }],
    ["Azure", { title: "Azure", icon: VscAzure, color: "text-blue-500", category: TechStackCategory.DevOps }],
    ["Microsoft 365", { title: "Microsoft 365", icon: FaMicrosoft, color: "text-orange-500", category: TechStackCategory.DevOps }],
    ["Docker", { title: "Docker", icon: FaDocker, color: "text-blue-400", category: TechStackCategory.DevOps }],
    ["Terraform", { title: "Terraform", icon: SiTerraform, color: "text-blue-400", category: TechStackCategory.DevOps }],
    ["Kubernetes", { title: "Kubernetes", icon: AiOutlineKubernetes, color: "text-blue-400", category: TechStackCategory.DevOps }],
    ["GitHub Actions", { title: "GitHub Actions", icon: FaGithub, color: "text-black", category: TechStackCategory.DevOps }],
]);