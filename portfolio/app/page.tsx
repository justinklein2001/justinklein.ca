"use client";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ClosingSection } from "@/sections/ClosingSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  // Nav clicks both scroll to the section and open the matching tab. Experience
  // and Projects live in the same tabbed section, so both scroll to #experience
  // and differ only by which tab they request (via the select-tab event that
  // ExperienceTabs listens for). Contact is a plain section with no tab.
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    { tab, targetId }: { tab?: "experience" | "projects"; targetId: string }
  ) => {
    e.preventDefault();
    if (tab) {
      window.dispatchEvent(
        new CustomEvent("portfolio:select-tab", { detail: tab })
      );
    }
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${tab ?? targetId}`);
  };

  return (
    <>
    <NavBar
        currentApp="portfolio"
        rightContent={
          <div className="flex items-center gap-6">
            <a href="#experience" onClick={(e) => handleNav(e, { tab: "experience", targetId: "experience" })} className="text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors hidden sm:block">Experience</a>
            <a href="#projects" onClick={(e) => handleNav(e, { tab: "projects", targetId: "experience" })} className="text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors hidden sm:block">Projects</a>
            <a href="#contact" onClick={(e) => handleNav(e, { targetId: "contact" })} className="text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors hidden sm:block">Contact</a>
            <div className="h-4 w-px bg-[var(--foreground)]/20 mx-1 hidden sm:block" />
            <ThemeToggle />
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
      <main className="min-h-screen flex justify-center overflow-x-clip">
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
          <ClosingSection/>
          <Footer/>
        </div>
      </main>
    </>
  );
}
