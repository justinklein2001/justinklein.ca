export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  techStack: string[];
  /**
   * Human-readable date or range shown mono + right-aligned on the card, mirroring
   * the experience timeline's `date` (e.g. "2025", "Jan 2025 - Present").
   */
  date?: string;
  /**
   * First-person "Author's note" revealed when the card expands, mirroring the
   * experience timeline's `narrative`. Keep it short (see NARRATIVE_MAX_CHARS).
   */
  narrative?: string;
  liveLink?: string;
  githubLink?: string;
  /**
   * Key into the ProjectCategories map; groups contiguous projects onto a
   * colored brace (e.g. "AI", "Infra", "Full-Stack"), mirroring the experience
   * timeline's phase rails.
   */
  category?: string;
  /**
   * Short label shown as a vertical banner on the card's left edge (e.g. "RAG",
   * "IaC"), mirroring the experience timeline's `tag`. Keep it to a word or two.
   */
  tag?: string;
  /**
   * Path to the project's station avatar image. When absent, a generic
   * placeholder icon is rendered in the circle instead.
   */
  iconLogo?: string;
}

/**
 * A category "line" that groups contiguous projects, rendered as a colored
 * brace + label to the left of the project cards. Mirrors PhaseInfo from the
 * experience timeline, trimmed to what the project rail actually uses.
 */
export interface ProjectCategory {
  label: string;
  blurb: string;
  /** Tailwind text-* class for the label + brace color. */
  textClass: string;
  /** Tailwind bg tint for the blocked label that cradles the station icons. */
  blockClass: string;
}
