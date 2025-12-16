"use client";

import { LiveProjects } from "@/components/LiveProjects";
import { SocialButtons } from "@/components/SocialButtons";
import Image from "next/image";
export function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 justify-center items-center mt-20">
      <div className="grid-column justify-center items-center">
        <h1 className="text-5xl font-bold mb-2">Hey, it's Justin.</h1>
        <h3 className="text-1xl whitespace-nowrap shrink-0 mb-4">I'm a 24 yo software developer from Toronto 🇨🇦</h3>
        <h2 className="text-1xl font-semibold mb-8">I build cloud-native, full stack applications.</h2>
        <SocialButtons />
        <LiveProjects />
      </div>
      <div className="grid-column">
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