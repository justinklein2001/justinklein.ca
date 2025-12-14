"use client";
import { HeroSection } from "@/sections/HeroSection";


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
      </div>
    </main> 
  );
}
