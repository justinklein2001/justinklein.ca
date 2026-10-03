import React from "react";

/**
 * Vertical curly brace ("{") that scales to any group height without distorting
 * its curls. Built as a flex column: fixed-size SVG end-caps and a middle tip
 * (so the curves never stretch), with flexible straight runs between them that
 * grow to fill. Every piece shares viewBox width 14 at 1:1, so the body stroke
 * at x=9 lines up across all segments. The tip points left toward the group
 * label, reading as the brace "embracing" the group of cards on its right.
 * Color comes from `currentColor` (set via the group's text-* class).
 */
export function PhaseBrace({ className = "" }: { className?: string }) {
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 2,
    fill: "none",
    strokeLinecap: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };
  // A straight run: a flex item (so it stretches) wrapping an SVG that fills it.
  // The wrapping div is the flex child so the SVG's height="100%" resolves
  // against a concrete number; min-h-0 lets it shrink/grow past content size.
  const straightRun = (
    <div className="flex-1 min-h-0">
      <svg
        width="14"
        height="100%"
        viewBox="0 0 14 10"
        preserveAspectRatio="none"
        className="block"
      >
        <path d="M9 0 V10" {...stroke} />
      </svg>
    </div>
  );

  return (
    <div aria-hidden className={`flex w-3.5 flex-col items-stretch ${className}`}>
      {/* Top curl — hooks right toward the cards */}
      <svg width="14" height="10" viewBox="0 0 14 10" className="block shrink-0">
        <path d="M13 1 C 10 1, 9 3, 9 10" {...stroke} />
      </svg>
      {straightRun}
      {/* Middle tip — pinches left to a point that the label centers on */}
      <svg width="14" height="18" viewBox="0 0 14 18" className="block shrink-0">
        <path d="M9 0 C 9 4, 1 6, 1 9 C 1 12, 9 14, 9 18" {...stroke} />
      </svg>
      {straightRun}
      {/* Bottom curl — mirror of the top */}
      <svg width="14" height="10" viewBox="0 0 14 10" className="block shrink-0">
        <path d="M13 9 C 10 9, 9 7, 9 0" {...stroke} />
      </svg>
    </div>
  );
}
