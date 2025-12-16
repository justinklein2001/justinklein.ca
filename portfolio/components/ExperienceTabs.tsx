import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

// Define the structure for a single event
interface TimelineEvent {
  title: string;
  subtitle: string;
  date: string;
  bullets: string[];
  iconLogo: string;
  location?: string;
}

// Define the structure for the tab content
interface TabItem {
  label: string;
  value: string;
  icon: React.ElementType; 
  events: TimelineEvent[];
}

export function ExperienceTabs() {
  const data: TabItem[] = [
    {
      label: "Work Experience",
      value: "experience",
      icon: MdOutlineWorkOutline,
      events: [
        {
          title: "Software Development Domain Expert (Contract)",
          subtitle: "Data Annotation",
          date: "Apr 2024 - Present",
          bullets: [
            "Developed and operationalized RAG (Retrieval-Augmented Generation) systems in production full-stack environments (Node, Postgres).",
            "Analyzed and improved LLM reliability through systematic fault-pattern research.",
            "Containerized multi-service stacks with Docker, optimizing model-test execution pipelines."
          ],
          iconLogo: "/da.jpeg",
          location: "Remote",
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
          date: "2025",
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

  return (
    <div className="w-full">
      <Tabs value="experience" className="w-full">
        <TabsHeader
          className="bg-gray-900/50 border border-gray-800 p-1 h-14"
          indicatorProps={{
            className: "bg-transparent shadow-none",
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className="py-3 font-medium transition-all duration-300 rounded-md bg-transparent text-gray-400"
              activeClassName="!bg-gray-700 !text-white" 
            >
              <div className="flex items-center justify-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody
          animate={{
            initial: { opacity: 0, scale: 0.9 },
            mount: { opacity: 1, scale: 1 },
            unmount: { opacity: 0, scale: 0.9 },
          }}
          className="mt-6 font-sans"
        >
          {data.map(({ value, events }) => (
            <TabPanel key={value} value={value} className="px-0">
              {/* Custom Tailwind Timeline Container */}
              <div className="relative pl-10">
                {/* 1. Vertical Line */}
                <div className="absolute left-9.5 top-0 bottom-0 w-0.5 bg-gray-700 z-10" />
                
                {events.map((event, index) => (
                  <div key={index} className="mb-8 relative pl-6">
                    {/* 2. Timeline Dot/Image (Avatar) */}
                    <div 
                      className={`absolute top-0 -left-7 z-20 w-14 h-14 rounded-full flex items-center justify-center border-2 border-gray-800 ${event.iconBg} overflow-hidden`}
                    >
                      <img 
                        src={event.iconLogo}
                        alt={`${event.subtitle} Logo`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Content Card */}
                    <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg shadow-xl ml-4">
                        {/* Date (Top Right) */}
                        <Typography variant="small" className="font-mono text-xs text-gray-500 float-right mt-1 whitespace-nowrap">
                            {event.date}
                        </Typography>

                        {/* Title and Subtitle (Left) */}
                        <Typography variant="h6" className="text-gray-100 font-bold">
                            {event.title}
                        </Typography>
                        
                        <Typography variant="small" className="font-normal text-white-50 mb-3">
                            {event.subtitle}
                            {/* Location Pipeline */}
                            {event.location && (
                                <span className="text-gray-500 ml-2">| {event.location}</span>
                            )}
                        </Typography>
                        
                        {/* Bullet Points */}
                        <ul className="list-disc space-y-1 ml-5 mt-2">
                            {event.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex}>
                                    <Typography variant="small" className="text-gray-400 leading-relaxed">
                                        {bullet}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}