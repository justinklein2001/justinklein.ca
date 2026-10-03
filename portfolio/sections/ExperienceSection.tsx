"use client";

import { ExperienceTabs } from "@/components/ExperienceTabs";

export function ExperienceSection() {
  return (
    <div className="flex justify-center items-center mt-12 scroll-mt-24" id="experience">
        {/* #projects deep-link target. NavBar clicks open the Projects tab via the
            select-tab event; this anchor keeps a direct visit to "/#projects"
            (bookmark / shared link) landing on this section too. */}
        <span id="projects" className="absolute scroll-mt-24" aria-hidden />
        <ExperienceTabs />
    </div>
  );
}