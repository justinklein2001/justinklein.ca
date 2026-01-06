import { ExperienceTab } from "@/types";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

export const ExperienceData: ExperienceTab[] = [
  {
    label: "Work Experience",
    value: "experience",
    icon: MdOutlineWorkOutline,
    events: [
      {
        title: "Software Developer (Contract)",
        subtitle: "Data Annotation",
        date: "Apr 2024 - Present",
        
        bullets: [
          "Leveraged Cline agentic IDE integrations to iteratively develop full-stack (React/Typescript/Postgres) applications supporting AI model evaluation workflows.",
          "Containerized multi-service stacks with Docker, optimizing model-test execution pipelines.",
          "Analyzed and improved LLM code-generation reliability through Reinforcement Learning from Human Feedback (RLHF)."
        ],
        iconLogo: "/da.jpeg",
        location: "Remote",
        stack: ["React", "TypeScript","Postgres", "Docker"],
      },
      {
        title: "Software Developer (Co-op)",
        subtitle: "Adknown",
        date: "Jan 2023 - Aug 2023",
        bullets: [
          "Delivered production features across a React, PHP, MySQL, AWS and Docker stack.",
          "Dockerized two ad-tracking pixels, lowering environment setup time by 40%.",
          "Architected a Bing campaign linkage tool, improving marketers' CPC performance."
        ],
        iconLogo: "/adknown.jpeg",
        location: "Guelph, ON",
        stack: ["React", "PHP", "MySQL", "AWS", "Docker"],
      },
      {
        title: "Software Developer (Co-op)",
        subtitle: "Tulip Retail",
        date: "May 2022 - Aug 2022",
        bullets: [
          "Delivered features on the LiveConnect & Appointments platform (PHP, React, Docker).",
          "Contributed to the Tulip Appointments NPM package used by clients such as Chanel and Michael Kors.",
          "Integrated the appointments widget into the core Clienteling product, improving high-value customer booking flows."
        ],
        iconLogo: "/tulip.jpeg",
        location: "Kitchener, ON",
        stack: ["React", "PHP", "MySQL","Docker"],
      },
      {
        title: "Software Developer (Co-op)",
        subtitle: "NCR Corporation",
        date: "Sep 2021 - Dec 2021",
        bullets: [
          "Worked on the API Toolkit (Draft) team using Jenkins, Docker, React, OpenAPI and Spring.",
          "Collaborated in an agile environment, completing JIRA sprint work with high delivery velocity."
        ],
        iconLogo: "/ncr.jpeg",
        location: "Waterloo, ON",
        stack: ["React", "Spring", "Docker"],  
      },
      {
        title: "Web Developer (Co-op)",
        subtitle: "Heart & Stroke",
        date: "May 2021 - Aug 2021",
        bullets: [
          "Built a standalone React/Node/MySQL direct-mail donation platform.",
          "Integrated Stripe and Moneris SDKs, improving PCI compliance and reducing transaction fees by 20%."
        ],
        iconLogo: "/heart_stroke.png", 
        location: "Toronto, ON",
        stack: ["React", "Node.js", "MySQL"],
      },
    ],
  },
  {
    label: "Education",
    value: "education",
    icon: IoSchoolOutline,
    events: [
      {
        title: "AWS Certified Solutions Architect – Associate",
        subtitle: "Amazon Web Services (AWS)",
        date: "2026",
        bullets: [
          "Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
        ],
        iconLogo: "/aws.png", 
      },
      {
        title: "Bachelor of Computing, Software Engineering (Co-op)",
        subtitle: "University of Guelph",
        date: "2019 - 2024",
        bullets: [
          "Minor in Business Administration, graduated with Honours (GPA: 84.6%).",
          "Intensive focus on software design, algorithms, data structures, and full stack development.",
        ],
        iconLogo: "/guelph.png", 

      },
    ],
  },
];