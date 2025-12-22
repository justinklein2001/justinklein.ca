"use client";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectSection } from "@/sections/ProjectSection";
import { SummarySection } from "@/sections/SummartSection";


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center border">
      <div
        className="
          w-full
          max-w-4xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <HeroSection/>
        <ExperienceSection/>
        <ProjectSection/>
        <SummarySection/>
      </div>
    </main> 
  );
}
