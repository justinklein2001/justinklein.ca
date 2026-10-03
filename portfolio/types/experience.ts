/**
 * A "subway line" that groups contiguous experience entries (e.g. all Co-op
 * placements). Rendered as a labelled colored line to the left of the main
 * timeline spine, with a short blurb revealed on hover.
 */
export interface PhaseInfo {
  label: string;
  blurb: string;
  /** Tailwind bg-* class for the subway line. */
  lineClass: string;
  /** Tailwind text-* class for the label. */
  textClass: string;
  /** Tailwind border-* class for the hover blurb. */
  borderClass: string;
  /** Tailwind bg tint for the blocked label that cradles the station icons. */
  blockClass: string;
}

export interface ExperienceEntry {
  title: string;
  subtitle: string;
  date: string;
  bullets: string[];
  iconLogo: string;
  iconBg?: string;
  location?: string;
  stack?: string[];
  /**
   * Short industry/domain label shown as a vertical banner on the card's left
   * edge (e.g. "Legacy", "AdTech", "Fintech"). Keep it to a word or two.
   */
  tag?: string;
  /** Key into the Phases map; groups this entry onto a subway line. */
  phase?: string;
  narrative?: string;
}

export interface ExperienceTab {
  label: string;
  value: string;
  icon: React.ElementType; 
  events: ExperienceEntry[];
}