import React from "react";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText, HiEnvelope } from "react-icons/hi2";

export function SocialButtons() {
  return (
    <div className="flex items-center gap-4 mb-6">
      
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button 
                variant="outlined"
                className="flex items-center gap-2 border border-white text-white rounded-md px-2 py-2 hover:bg-white/10 hover:translate-x-1 transition-all duration-300 focus:ring-0 normal-case text-sm font-medium tracking-wide"
            >
                <span>Resume</span>
                <HiDocumentText className="h-4 w-4" />
            </Button>
        </a>

        <Tooltip content="LinkedIn" placement="bottom">
            <a href="https://www.linkedin.com/in/justinklein2001/" target="_blank" rel="noopener noreferrer">
                <IconButton 
                variant="text" 
                color="white"
                className="rounded-full hover:bg-white/10 hover:scale-110 transition-transform align-top mx-1.5"
                >
                <FaLinkedin className="h-5 w-5" />
                </IconButton>
            </a>
        </Tooltip>

        <Tooltip content="GitHub" placement="bottom">
            <a href="https://github.com/justinklein2001" target="_blank" rel="noopener noreferrer">
                <IconButton 
                variant="text" 
                color="white"
                className="rounded-full hover:bg-white/10 hover:scale-110 transition-transform align-top mx-1.5"
                >
                <FaGithub className="h-5 w-5" />
                </IconButton>
            </a>
        </Tooltip>

        <Tooltip content="Email" placement="bottom">
            <a href="mailto:justinkleindev@gmail.com">
            <IconButton 
                variant="text" 
                color="white"
                className="rounded-full hover:bg-white/10 hover:scale-110 transition-transform align-top mx-1.5"
            >
                <HiEnvelope className="h-5 w-5" />
            </IconButton>
            </a>
        </Tooltip>
    </div>
  );
}