import React from "react";
import { TechStackMap as techStack } from "../types/tech-stack";

interface StackChipsProps {
  stack: string[];
  className?: string;
}

/**
 * Shared tech-stack chips: a wrapping row of bordered pills, each showing the
 * tech's name + icon from TechStackMap. Used by both the project and experience
 * timelines so their stacks render identically. Unknown techs fall back to their
 * raw name with no icon.
 */
export function StackChips({ stack, className = "" }: StackChipsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {stack.map((tech) => {
        const entry = techStack.get(tech);
        return (
          <div
            key={tech}
            className="flex items-center justify-center gap-2 rounded-md border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200 px-2 py-px text-sm"
          >
            {entry?.title ?? tech}
            {entry?.icon &&
              React.createElement(entry.icon, { className: "w-5 h-5" })}
          </div>
        );
      })}
    </div>
  );
}
