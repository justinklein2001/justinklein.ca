import { ExperienceTab, PhaseInfo } from "@/types";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

export const Phases: Record<string, PhaseInfo> = {
  "post-grad": {
    label: "Post-Grad",
    lineClass: "bg-amber-500",
    textClass: "text-amber-600 dark:text-amber-400",
    borderClass: "border-amber-500/40",
    blockClass: "bg-amber-500/10",
    blurb:
      "Turning full-stack breadth into systems depth.",
  },
  "co-op": {
    label: "Co-Ops",
    lineClass: "bg-emerald-500",
    textClass: "text-emerald-600 dark:text-emerald-400",
    borderClass: "border-emerald-500/40",
    blockClass: "bg-emerald-500/10",
    blurb: "new company every term - I adapt quickly.",
  },
  degree: {
    label: "Degree",
    lineClass: "bg-sky-500",
    textClass: "text-sky-600 dark:text-sky-400",
    borderClass: "border-sky-500/40",
    blockClass: "bg-sky-500/10",
    blurb:
      "Where the fundamentals (C, algorithms, systems) came together.",
  },
};

export const ExperienceData: ExperienceTab[] = [
  {
    label: "Work Experience",
    value: "experience",
    icon: MdOutlineWorkOutline,
    events: [
      {
        title: "Software Engineer",
        subtitle: "Bulloch Technologies",
        date: "Jun 2026 - Present",
        
        bullets: [
          "Leveraging multi-threaded C++ to deliver features and resolve bugs on a forecourt petroleum POS system.",
          "Responsible for ensuring compliance with third party back-office protocols, loyalty connections, accurate shift reporting and data management within the POS.",
          "Working closely with QA to replicate and resolve client-facing software issues.",
        ],
        iconLogo: "/bulloch.jpeg",
        tag: "Legacy POS",
        phase: "post-grad",
        location: "Mississauga, ON",
        stack: ["C++", "Multi-Threading", "AI"],
        narrative:
          "I wanted to embrace the complexity and efficiency of C++. This role gives me autonomy with lots of inter-team communication, which I love.",
      },
      {
        title: "Software Developer",
        subtitle: "Data Annotation",
        date: "Apr 2024 - Jun 2026",
        
        bullets: [
          "Contributed to several long-term AI projects that improved frontier AI models' ability to generate production-ready code.",
          "Analyzed and improved LLM code-generation reliability through Reinforcement Learning from Human Feedback (RLHF)."
        ],
        iconLogo: "/da.jpeg",
        tag: "Frontier AI",
        phase: "post-grad",
        location: "Remote",
        stack: ["React", "TypeScript","Postgres", "Docker", "AI"],
        narrative:
          "This opportunity taught me how to best leverage AI for engineering.",
      },
      {
        title: "Software Developer",
        subtitle: "Adknown",
        date: "Jan 2023 - Aug 2023",
        bullets: [
          "Delivered production features on an web application that interfaced with 3rd party ad services (Google, Bing, Meta) used daily by digital markers.",
          "Dockerized two previously untestable ad-tracking pixels.",
          "Architected a Bing campaign linkage tool, improving marketers' CPC performance."
        ],
        iconLogo: "/adknown.jpeg",
        tag: "AdTech",
        phase: "co-op",
        location: "Guelph, ON",
        stack: ["React", "PHP", "MySQL", "AWS", "Docker"],
        narrative:
          "Everyone on the team was a former Co-op, I was given tangible responsibility and shipped impactful features.",
      },
      {
        title: "Software Developer",
        subtitle: "Tulip Retail",
        date: "May 2022 - Aug 2022",
        bullets: [
          "Delivered features on the LiveConnect & Appointments component of Tulip Retail's POS platform.",
          "Contributed to the Tulip Appointments NPM package used by clients such as Chanel and Michael Kors.",
          "Integrated the appointments widget into the core Clienteling product, improving high-value customer booking flows."
        ],
        iconLogo: "/tulip.jpeg",
        tag: "Retail POS",
        phase: "co-op",
        location: "Kitchener, ON",
        stack: ["React", "PHP", "MySQL","Docker"],
        narrative:
          "Mid-growth startup, with a product hyper-focused on user experience.",
      },
      {
        title: "Software Developer",
        subtitle: "NCR Corporation",
        date: "Sep 2021 - Dec 2021",
        bullets: [
          "Worked on the API Toolkit (Draft) team, facilitating the creation of legacy banking API queries through a cutting edge web app.",
          "Collaborated in an agile environment, completing JIRA sprint work with high delivery velocity."
        ],
        iconLogo: "/ncr.jpeg",
        tag: "Fintech",
        phase: "co-op",
        location: "Waterloo, ON",
        stack: ["React", "Spring", "Docker"],
        narrative:
          "My manager thanked me for bringing the team out of a peak-lockdown slump with my outgoing personality.",
      },
      {
        title: "Web Developer",
        subtitle: "Heart & Stroke",
        date: "May 2021 - Aug 2021",
        bullets: [
          "Architected a standalone direct-mail donation platform, decoupling a high-fee no code legacy solution.",
          "Integrated Stripe and Moneris SDKs, improving PCI compliance and reducing transaction fees by 20%."
        ],
        iconLogo: "/heart_stroke.png",
        tag: "Non-profit",
        phase: "co-op",
        location: "Toronto, ON",
        stack: ["React", "Node.js", "MySQL"],
        narrative:
          "My first Co-op, at the end of the term I was showcasing the solution to the CFO.",
      },
    ],
  },
  {
    label: "Education",
    value: "education",
    icon: IoSchoolOutline,
    events: [
      {
        title: "Bachelor of Computing, Honours Software Engineering (Co-op)",
        subtitle: "University of Guelph",
        date: "2019 - 2024",
        bullets: [
          "Intensive focus on software design, algorithms, data structures, and full stack development.",
          "My Capstone was a term-long SDLC full-stack games repository, leveraging React, PHP, Docker, MySQL and CI/CD pipelines.",
          "Minor in Business Administration, graduated with Honours (GPA: 84.6%)."
        
        ],
        iconLogo: "/guelph.png",
        tag: "Bachelor's",
        phase: "degree",
        location: "Guelph, ON",
        stack: ["C", "Python", "Java", "JavaScript", "PHP", "SQL"],
        narrative:
          "Computing at Guelph was modern development built upon a legacy foundation. It was real coding assignments over theoretical exams.",
      },
    ],
  },
];