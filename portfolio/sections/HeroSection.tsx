"use client";

import { LiveProjects } from "@/components/LiveProjects";
import { SocialButtons } from "@/components/SocialButtons";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 justify-center items-center mt-20" id="hero">
      <div className="grid-column justify-center items-center">
        <h1 className="md:text-5xl text-4xl font-bold mb-2">Hey, it&apos;s Justin.</h1>
        <h3 className="md:text-lg text-md whitespace-nowrap shrink-0">
          24 yo software developer based in Georgetown 🇨🇦
        </h3>
        <p className="md:text-md text-sm text-gray-400 font-medium mb-4 mt-1">
            Open to <span className="text-gray-300">on-site/hybrid</span> in Halton, Peel & Toronto
        </p>
        
        <h2 className="md:text-lg text-sm font-semibold mb-8">I build cloud-native, full stack applications.</h2>
        <SocialButtons />
        <LiveProjects />
      </div>
      <div className="grid-column mt-10 md:mt-0">
        <Image
          width={460}
          height={460}
          src="/profile.png"
          alt="Profile Picture"
          className="w-full h-auto max-w-sm mx-auto rounded-full border-white border-4"
        />
      </div>
    </div>
  );
}