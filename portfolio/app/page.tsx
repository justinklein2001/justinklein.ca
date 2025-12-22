"use client";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectSection } from "@/sections/ProjectSection";
import { SummarySection } from "@/sections/SummarySection";


export default function Home() {
  return (
    <>
    <NavBar/>
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
