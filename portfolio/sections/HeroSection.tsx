"use client";

import { SocialButtons } from "@/components/SocialButtons";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 md:items-center mt-20" id="hero">
      <div className="md:col-start-1 md:row-start-1">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900/60 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
            Currently @ Bulloch Technologies
          </span>
        </div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-6xl">
          Hey, it&apos;s <span className="text-emerald-600 dark:text-blue-400">Justin</span>.
        </h1>
        <h3 className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-300 md:text-xl">
          Full-stack software engineer · Toronto 🇨🇦
        </h3>
        <SocialButtons />
      </div>
      <div className="mt-10 md:mt-0 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center">
        <Image
          width={460}
          height={460}
          src="/pfp_2026_proper.JPG"
          alt="Profile Picture"
          className="w-full h-auto max-w-sm mx-auto rounded-full border-emerald-500 dark:border-white border-4"
        />
      </div>
      <div className="mt-8 sm:mb-8 max-w-md border-l-2 border-emerald-500/60 dark:border-blue-500/60 pl-4 md:col-start-1 md:row-start-2">
        <p className="text-lg md:text-2xl font-bold leading-snug text-gray-900 dark:text-gray-100">
          A <span className="text-emerald-600 dark:text-emerald-400">full-stack foundation</span> —
          now going deep on{" "}
          <span className="text-purple-600 dark:text-purple-400">systems-level C++</span>.
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          The path that got me here&nbsp;👇
        </p>
      </div>
    </div>
  );
}