"use client";

import React, { useRef, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { ExperienceEntry } from "@/types";
import { Phases } from "../data/ExperienceData";
import { PhaseBrace } from "./PhaseBrace";
import { StackChips } from "./StackChips";

interface ExperienceTimelineProps {
  events: ExperienceEntry[];
}

// -1 = nothing selected. We deliberately start with no active card so no
// narrative shows on page load; it only appears once the user hovers, taps,
// or arrows (Up/Down) into a card.
const NONE = -1;

// Hard cap on narrative length. The narrative reveals inside a fixed-size box,
// so capping the text guarantees it always fits and the card never resizes on
// hover. Keep `narrative` strings at or under this.
const NARRATIVE_MAX_CHARS = 200;

// Concave notch carved out of the TOP of each blocked label so it cradles the
// circular station icon. The icon is 56px (h-14) at top-0, so its center sits
// 28px down and on the block's vertical centre (50%). Radius 34px = icon radius
// 28 + ~6px gap, which still reads when the active icon grows (scale-110).
const ICON_NOTCH =
  "radial-gradient(circle 34px at 50% 28px, transparent 33px, #000 34px)";

interface PhaseGroup {
  phase?: string;
  items: Array<{ event: ExperienceEntry; index: number }>;
}

/** Collapse the flat event list into contiguous runs sharing the same phase. */
function groupByPhase(events: ExperienceEntry[]): PhaseGroup[] {
  const groups: PhaseGroup[] = [];
  events.forEach((event, index) => {
    const prev = groups[groups.length - 1];
    if (prev && prev.phase === event.phase) {
      prev.items.push({ event, index });
    } else {
      groups.push({ phase: event.phase, items: [{ event, index }] });
    }
  });
  return groups;
}

/**
 * Interactive experience timeline styled like a subway map. Company avatars are
 * stations strung along the main vertical spine; to the left, colored "lines"
 * group contiguous entries into phases (Co-ops, Post-grad, Full-Time) with a
 * short blurb revealed when the phase label is hovered.
 *
 * Hovering, tapping, or arrowing (Up/Down) through a card makes it "active":
 * the card is highlighted and a personable narrative reveals as a right-hand
 * column (large screens) or expands below it (mobile).
 */
export function ExperienceTimeline({ events }: ExperienceTimelineProps) {
  const [active, setActive] = useState(NONE);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const groups = groupByPhase(events);
  // Gray company spine (with the avatars) stays inside the section; the colored
  // phase line lives OUT in the left page margin alongside its label, well clear
  // of the spine. Cards stay wide.
  const rowIndent = "ml-12"; // avatar centre / company spine at 48px

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    // Only hijack Up/Down while the list itself is focused, so we never steal
    // page scrolling from the rest of the site.
    e.preventDefault();
    const next =
      e.key === "ArrowDown"
        ? Math.min((active < 0 ? -1 : active) + 1, events.length - 1)
        : Math.max((active < 0 ? 1 : active) - 1, 0);
    setActive(next);
    itemRefs.current[next]?.focus();
  };

  // Keep one card reachable via Tab even when nothing is active yet.
  const tabStop = active < 0 ? 0 : active;

  const renderRow = (event: ExperienceEntry, index: number) => {
    const isActive = index === active;
    const hasNarrative = Boolean(event.narrative);
    // Color the industry label with its phase color so it pops on the spine
    // and ties the card back to its era on the brace.
    const phaseInfo = event.phase ? Phases[event.phase] : undefined;

    return (
      <div key={index} className={`mb-8 relative pl-6 ${rowIndent}`}>
        {/* Timeline station (avatar) */}
        <div
          className={`absolute top-0 -left-7 z-20 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden ${
            event.iconBg ?? ""
          } border-2 transition-all duration-300 ${
            isActive
              ? "border-emerald-500 dark:border-blue-400 scale-110 shadow-lg shadow-blue-900/40"
              : "border-gray-200 dark:border-gray-800"
          }`}
        >
          <img
            src={event.iconLogo}
            alt={`${event.subtitle} Logo`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Blocked label — a phase-tinted vertical block that replaces the old
            spine line. Its top is carved into a concave notch (ICON_NOTCH mask)
            so it cradles this card's station icon with a small gap; the upright
            industry label sits below the notch, running down the block. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute left-0 top-0 bottom-0 z-0 flex w-12 -translate-x-1/2 items-center justify-center rounded-2xl pt-14 ${
            phaseInfo?.blockClass ?? "bg-gray-200/70 dark:bg-gray-800/60"
          }`}
          style={{ WebkitMaskImage: ICON_NOTCH, maskImage: ICON_NOTCH }}
        >
          {event.tag && (
            <span
              className={`font-mono text-[11px] font-semibold uppercase tracking-[0.35em] transition-opacity duration-500 ease-in-out [writing-mode:vertical-rl] [text-orientation:upright] ${
                isActive ? "opacity-100" : "opacity-0"
              } ${phaseInfo?.textClass ?? "text-gray-500 dark:text-gray-400"}`}
            >
              {event.tag}
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
          <div>
            {/* Big, full-width summary — the only thing shown at rest */}
            <Typography
              variant="small"
              className="font-mono text-sm text-gray-500 dark:text-gray-400 float-right mt-1.5 whitespace-nowrap"
            >
              {event.date}
            </Typography>

            <Typography
              variant="h5"
              className="text-gray-900 dark:text-gray-100 font-bold text-xl md:text-2xl"
            >
              {event.title}
            </Typography>

            <Typography
              variant="paragraph"
              className="font-normal text-gray-800 dark:text-gray-200 text-base md:text-lg"
            >
              {event.subtitle}
              {event.location && (
                <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                  | {event.location}
                </span>
              )}
            </Typography>

            {event.stack && <StackChips stack={event.stack} className="mt-2" />}

            {/* Everything else (bullets + narrative) stays collapsed until the
                card is active, so the resting card is just the clean summary. On
                hover/focus it expands downward — the card grows and pops. */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isActive ? "mt-3 max-h-160 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-gray-300/70 dark:border-gray-700/70 pt-3 lg:flex lg:items-start lg:gap-5">
                <ul className="list-disc space-y-1 ml-5 lg:flex-1 lg:min-w-0">
                  {event.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>
                      <Typography
                        variant="small"
                        className="text-gray-600 dark:text-gray-300 md:text-base text-sm leading-relaxed"
                      >
                        {bullet}
                      </Typography>
                    </li>
                  ))}
                </ul>

                {hasNarrative && (
                  <div className="mt-4 border-t border-emerald-500/30 dark:border-blue-500/30 pt-3 lg:mt-0 lg:w-56 lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                    <Typography
                      variant="small"
                      className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-blue-300"
                    >
                      Author&apos;s note
                    </Typography>
                    <p className="text-base italic leading-relaxed text-gray-700 dark:text-gray-200">
                      {event.narrative?.slice(0, NARRATIVE_MAX_CHARS)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      role="listbox"
      aria-label="Experience timeline"
      aria-orientation="vertical"
      onKeyDown={handleKeyDown}
      className="relative"
    >
      {groups.map((group, groupIndex) => {
        const phase = group.phase ? Phases[group.phase] : undefined;
        // Only reveal the blurb while a card in this group is active.
        const groupActive = group.items.some(({ index }) => index === active);

        return (
          <div key={group.phase ?? `group-${groupIndex}`} className="relative">
            {/* Phase rail — its own colored line + label/blurb, out in the left
                margin (outside the section), vertically centered on the group.
                Hidden on small screens where there isn't room beside it. */}
            {phase && (
              <div className="hidden md:flex absolute inset-y-0 right-full mr-4 items-stretch">
                <div className="flex w-32 flex-col justify-center pr-3 text-right">
                  <span
                    className={`font-mono text-base font-semibold uppercase tracking-wider ${phase.textClass}`}
                  >
                    {phase.label}
                  </span>
                  <p
                    className={`overflow-hidden text-sm leading-snug text-gray-500 dark:text-gray-400 transition-all duration-300 ${
                      groupActive
                        ? "mt-1.5 max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {phase.blurb}
                  </p>
                </div>
                {/* Colored curly brace, parallel to but well left of the
                    spine; its tip points left at the vertically-centered label */}
                <PhaseBrace className={`my-1 ${phase.textClass}`} />
              </div>
            )}

            {group.items.map(({ event, index }) => renderRow(event, index))}
          </div>
        );
      })}
    </div>
  );
}
