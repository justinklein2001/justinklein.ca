import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

export function SocialButtons() {
  return (
    <div className="flex items-center gap-4 mb-6">

        {/* LinkedIn */}
        <Tooltip content="LinkedIn" placement="bottom">
            <a 
                href="https://www.linkedin.com/in/justinklein2001/"
                target="_blank" 
                rel="noopener noreferrer"
                className="h-6 w-6 flex items-center justify-center rounded-full text-white hover:bg-white/10 hover:scale-110 transition-transform"
            >
                <FaLinkedin className="h-6 w-6" />
            </a>
        </Tooltip>

        {/* GitHub */}
        <Tooltip content="GitHub" placement="bottom">
            <a 
                href="https://github.com/justinklein2001"
                target="_blank" 
                rel="noopener noreferrer"
                className="h-7 w-7 flex items-center justify-center rounded-full text-white hover:bg-white/10 hover:scale-110 transition-transform"
            >
                <FaGithub className="h-6 w-6" />
            </a>
        </Tooltip>

        {/* Email */}
        <Tooltip content="Email" placement="bottom">
            <a 
                href="mailto:justinkleindev@gmail.com"
                className="h-6 w-6 flex items-center justify-center rounded-full text-white hover:bg-white/10 hover:scale-110 transition-transform"
            >
                <HiEnvelope className="h-6 w-6" />
            </a>
        </Tooltip>
    </div>
  );
}