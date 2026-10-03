import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

// One entry per network. `accent` holds the hover-only color treatment so each
// button lights up in its own brand-ish color (blue / white / emerald) while
// resting in the same neutral bordered pill.
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justinklein2001/",
    Icon: FaLinkedin,
    accent:
      "hover:border-blue-500 hover:text-blue-400 hover:shadow-blue-900/40",
  },
  {
    label: "GitHub",
    href: "https://github.com/justinklein2001",
    Icon: FaGithub,
    accent:
      "hover:border-gray-400 hover:text-gray-900 dark:hover:border-gray-300 dark:hover:text-white hover:shadow-black/50",
  },
  {
    label: "Email",
    href: "mailto:justinkleindev@gmail.com",
    Icon: HiEnvelope,
    accent:
      "hover:border-emerald-500 hover:text-emerald-400 hover:shadow-emerald-900/40",
  },
] as const;

export function SocialButtons() {
  return (
    <div className="flex items-center gap-3 mb-6">
      {socials.map(({ label, href, Icon, accent }) => {
        const isExternal = href.startsWith("http");
        return (
          <Tooltip key={label} content={label} placement="bottom">
            <a
              href={href}
              aria-label={label}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-600 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300 shadow-md shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${accent}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Tooltip>
        );
      })}
    </div>
  );
}
