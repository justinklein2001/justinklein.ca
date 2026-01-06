"use client";
import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "../components/ProjectCard"; 
import { ProjectsData } from "../data/ProjectsData";

export function ProjectSection() {

    return (
        <div className="w-full py-12 md:py-20" id="projects">
            <div className="mx-auto px-4">
                <Typography variant="h2" color="white" className="text-3xl font-bold mb-10 text-left">
                    My Projects
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ProjectsData.map((project) => (
                        <div key={project.id}>
                             <ProjectCard project={project}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}