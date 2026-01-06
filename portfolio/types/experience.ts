export interface ExperienceEntry {
  title: string;
  subtitle: string;
  date: string;
  bullets: string[];
  iconLogo: string;
  location?: string;
  stack?: string[];
}

export interface ExperienceTab {
  label: string;
  value: string;
  icon: React.ElementType; 
  events: ExperienceEntry[];
}