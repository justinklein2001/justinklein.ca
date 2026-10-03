"use client";

import React, { useRef, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { Project } from "@/types";
import { ProjectCategories } from "../data/ProjectsData";
import { PhaseBrace } from "./PhaseBrace";
import { StackChips } from "./StackChips";

interface ProjectTimelineProps {
  projects: Project[];
}

// -1 = nothing selected. Mirrors ExperienceTimeline: no card is active on load,
// so no detail is revealed until the user hovers, taps, or arrows into a card.
const NONE = -1;

// Hard cap on Author's note length, mirroring ExperienceTimeline so the revealed
// box stays a predictable size. Keep `narrative` strings at or under this.
const NARRATIVE_MAX_CHARS = 200;

// Concave notch carved out of the TOP of each blocked label so it cradles the
// circular station icon. Copied from ExperienceTimeline so the two rails match.
const ICON_NOTCH =
  "radial-gradient(circle 34px at 50% 28px, transparent 33px, #000 34px)";

interface CategoryGroup {
  category?: string;
  items: Array<{ project: Project; index: number }>;
}

/** Collapse the flat project list into contiguous runs sharing a category. */
function groupByCategory(projects: Project[]): CategoryGroup[] {
  const groups: CategoryGroup[] = [];
  projects.forEach((project, index) => {
    const prev = groups[groups.length - 1];
    if (prev && prev.category === project.category) {
      prev.items.push({ project, index });
    } else {
      groups.push({ category: project.category, items: [{ project, index }] });
    }
  });
  return groups;
}

/**
 * Projects rendered in the same interactive-card language as ExperienceTimeline:
 * contiguous projects are grouped onto a colored brace + label in the left
 * margin (AI, Infra, Full-Stack), and each card rests as a title + stack summary
 * that expands on hover / focus / tap to reveal the description and links. No
 * subway spine or station avatars — projects aren't chronological.
 */
export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  const [active, setActive] = useState(NONE);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const groups = groupByCategory(projects);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next =
      e.key === "ArrowDown"
        ? Math.min((active < 0 ? -1 : active) + 1, projects.length - 1)
        : Math.max((active < 0 ? 1 : active) - 1, 0);
    setActive(next);
    itemRefs.current[next]?.focus();
  };

  // Keep one card reachable via Tab even when nothing is active yet.
  const tabStop = active < 0 ? 0 : active;

  // Company/avatar spine sits inside the section; the colored category brace
  // lives out in the left page margin. Matches ExperienceTimeline's indent.
  const rowIndent = "ml-12"; // avatar centre / spine at 48px

  const renderCard = (project: Project, index: number) => {
    const isActive = index === active;
    const category = project.category
      ? ProjectCategories[project.category]
      : undefined;

    return (
      <div key={project.id} className={`mb-8 relative pl-6 ${rowIndent}`}>
        {/* Timeline station (generic placeholder avatar until real logos exist) */}
        <div
          className={`absolute top-0 -left-7 z-20 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-800 border-2 transition-all duration-300 ${
            isActive
              ? "border-emerald-500 dark:border-blue-400 scale-110 shadow-lg shadow-blue-900/40"
              : "border-gray-200 dark:border-gray-800"
          }`}
        >
          {project.iconLogo ? (
            <img
              src={project.iconLogo}
              alt={`${project.title} Logo`}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <AiOutlineProject className="w-7 h-7 text-gray-500 dark:text-gray-400" />
          )}
        </div>

        {/* Blocked label — category-tinted vertical block notched to cradle the
            station icon, with the upright tag running down it (matches the
            experience rail). */}
        <div
          aria-hidden
          className={`pointer-events-none absolute left-0 top-0 bottom-0 z-0 flex w-12 -translate-x-1/2 items-center justify-center rounded-2xl ${
            category?.blockClass ?? "bg-gray-200/70 dark:bg-gray-800/60"
          }`}
          style={{ WebkitMaskImage: ICON_NOTCH, maskImage: ICON_NOTCH }}
        >
          {project.tag && (
            <span
              className={`font-mono text-[11px] font-semibold uppercase tracking-[0.35em] transition-opacity duration-500 ease-in-out [writing-mode:vertical-rl] [text-orientation:upright] ${
                isActive ? "opacity-100" : "opacity-0"
              } ${category?.textClass ?? "text-gray-500 dark:text-gray-400"}`}
            >
              {project.tag}
            </span>
          )}
        </div>

        {/* Selectable full-width card */}
        <div
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          role="option"
          aria-selected={isActive}
          tabIndex={index === tabStop ? 0 : -1}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(NONE)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
          className={`relative ml-4 cursor-pointer rounded-lg border p-4 outline-none transition-all duration-500 ease-in-out ${
            isActive
              ? "z-30 -translate-y-1 scale-[1.02] border-emerald-500/60 dark:border-blue-500/60 bg-gray-100 dark:bg-gray-800/90 shadow-2xl shadow-black/20 dark:shadow-black/60 ring-1 ring-emerald-500/30 dark:ring-blue-500/30"
              : "z-0 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 shadow-md hover:border-gray-300 dark:hover:border-gray-700"
          }`}
        >
          {/* Clean summary — title + date + stack are the only things shown at
              rest. Date is mono + right-aligned to match the experience rail. */}
          {project.date && (
            <Typography
              variant="small"
              className="font-mono text-sm text-gray-500 dark:text-gray-400 float-right mt-1.5 whitespace-nowrap"
            >
              {project.date}
            </Typography>
          )}

          <Typography
            variant="h5"
            className="text-gray-900 dark:text-gray-100 font-bold text-xl md:text-2xl"
          >
            {project.title}
          </Typography>

          <StackChips stack={project.techStack} className="mt-2" />

          {/* Action links stay visible at rest so Production / Repo are always
              reachable without hovering. They lift and glow more when the card
              is active to reinforce the selection. */}
          <div className="mt-4 flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="filled"
                  className={`flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold normal-case tracking-wide text-white shadow-md shadow-emerald-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-800/50 focus:ring-0 ${
                    isActive ? "-translate-y-0.5 shadow-lg shadow-emerald-800/50" : ""
                  }`}
                >
                  <span>Production</span>
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Button>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="filled"
                  className={`flex items-center gap-2 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm font-semibold normal-case tracking-wide text-white shadow-md shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg focus:ring-0 ${
                    isActive ? "-translate-y-0.5 border-gray-400 shadow-lg" : ""
                  }`}
                >
                  <span>Repo</span>
                  <FaGithub className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>

        {/* Description stays collapsed until the card is active, so the resting
            card is title + stack + links. On hover/focus it expands downward,
            matching the experience cards. */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isActive ? "mt-3 max-h-160 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-300/70 dark:border-gray-700/70 pt-3 lg:flex lg:items-start lg:gap-5">
            <Typography
              variant="paragraph"
              className="font-normal text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed lg:flex-1 lg:min-w-0"
            >
              {project.shortDescription}
            </Typography>

            {project.narrative && (
              <div className="mt-4 border-t border-emerald-500/30 dark:border-blue-500/30 pt-3 lg:mt-0 lg:w-56 lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                <Typography
                  variant="small"
                  className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-blue-300"
                >
                  Author&apos;s note
                </Typography>
                <p className="text-base italic leading-relaxed text-gray-700 dark:text-gray-200">
                  {project.narrative.slice(0, NARRATIVE_MAX_CHARS)}
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    );
  };

  return (
    <div
      role="listbox"
      aria-label="Projects"
      aria-orientation="vertical"
      onKeyDown={handleKeyDown}
      className="relative"
    >
      {groups.map((group, groupIndex) => {
        const category = group.category
          ? ProjectCategories[group.category]
          : undefined;
        // Only reveal the blurb while a card in this group is active.
        const groupActive = group.items.some(({ index }) => index === active);

        return (
          <div
            key={group.category ?? `group-${groupIndex}`}
            className="relative"
          >
            {/* Category rail — colored label + blurb + brace out in the left
                margin, vertically centered on the group. Hidden on small screens
                where there isn't room beside the cards. */}
            {category && (
              <div className="hidden md:flex absolute inset-y-0 right-full mr-4 items-stretch">
                <div className="flex w-32 flex-col justify-center pr-3 text-right">
                  <span
                    className={`font-mono text-base font-semibold uppercase tracking-wider ${category.textClass}`}
                  >
                    {category.label}
                  </span>
                  <p
                    className={`overflow-hidden text-sm leading-snug text-gray-500 dark:text-gray-400 transition-all duration-300 ${
                      groupActive
                        ? "mt-1.5 max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {category.blurb}
                  </p>
                </div>
                {/* Colored curly brace; its tip points left at the label */}
                <PhaseBrace className={`my-1 ${category.textClass}`} />
              </div>
            )}

            {group.items.map(({ project, index }) => renderCard(project, index))}
          </div>
        );
      })}
    </div>
  );
}
