"use client";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectSection } from "@/sections/ProjectSection";
import { SummarySection } from "@/sections/SummarySection";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <>
    <NavBar
        currentApp="portfolio"
        rightContent={
          <div className="flex items-center gap-6">
            <a href="#experience" className="text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors hidden sm:block">Experience</a>
            <a href="#projects" className="text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors hidden sm:block">Projects</a>
            <a href="#summary" className="text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors hidden sm:block">TLDR</a>
            <div className="h-4 w-px bg-[var(--foreground)]/20 mx-1 hidden sm:block" />
            <a 
                href="https://www.linkedin.com/in/justinklein2001/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors"
            >
                <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
                href="https://github.com/justinklein2001"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors"
            >
                <FaGithub className="h-5 w-5" />
            </a>
          </div>
        }
      />
      <main className="min-h-screen flex justify-center">
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
          <Footer/>
        </div>
      </main>
    </>
  );
}
