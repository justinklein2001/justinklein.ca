// ProjectCard.tsx (Helper Component)
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TechStackMap as techStack } from "../types/tech-stack";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project
}
  export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="mx-auto bg-gray-900 border border-gray-800 hover:-translate-y-1 transition-all duration-300 rounded-md">
      <CardBody className="py-4 px-6 flex flex-col justify-between">
        <div className="h-26">
          <Typography variant="h5" color="white" className="mb-2 font-bold">
            {project.title}
          </Typography>
          <Typography className="text-gray-300 text-sm mb-3">
            {project.shortDescription}
          </Typography>
        </div>
        <div className="md:h-20">
          <Typography variant="h5" color="white" className="mb-2 font-mono">
            Stack
          </Typography>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech, index) => (
              <div key={index} className="flex items-center justify-center gap-2 border rounded-md px-2 py-px">
                {techStack.get(tech)?.title}
                {React.createElement(techStack.get(tech)?.icon, { className: "w-5 h-5" })}
              </div>
            ))}
          </div>
        </div>
      </CardBody>
      <CardFooter className="md:pt-6 pb-4 px-6 flex items-center gap-4">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Button 
                    variant="filled"
                    className="flex items-center gap-2 bg-gray-700  text-white rounded-md px-2 py-2 hover:bg-white/10 hover:translate-x-1 transition-all duration-300 focus:ring-0 normal-case text-sm font-medium tracking-wide"
                >
                    <span>Production</span>
                    <FaExternalLinkAlt className="h-4 w-4" />
                </Button>
            </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Button 
                    variant="filled"
                    className="flex items-center gap-2 bg-gray-700 text-white rounded-md px-2 py-2 hover:bg-white/10 hover:translate-x-1 transition-all duration-300 focus:ring-0 normal-case text-sm font-medium tracking-wide"
                >
                    <span>Repo</span>
                    <FaGithub className="h-4 w-4" />
                </Button>
            </a>
      </CardFooter>
    </Card>
  );
}