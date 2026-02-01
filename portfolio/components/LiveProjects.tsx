import { Button } from "@material-tailwind/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export function LiveProjects() {
  return (
    <div className="mt-4 sm:mb-8">
        <h2 className="text-2xl font-bold mb-3">Live Projects 🚀</h2>
        <div className="flex items-center gap-4">
            <a href="https://get-smart.justinklein.ca" target="_blank" rel="noopener noreferrer">
                <Button 
                    variant="outlined"
                    className="flex items-center gap-2 border border-green-500 text-white rounded-md px-2 py-2 hover:bg-green-500/10 hover:translate-x-1 transition-all duration-300 focus:ring-0 normal-case md:text-md text-sm font-medium tracking-wide"
                >
                    <span>Get Smart!</span>
                    <FaExternalLinkAlt className="h-4 w-4" />
                </Button>
            </a>
            <a href="https://get-quizzed.justinklein.ca" target="_blank" rel="noopener noreferrer">
                <Button 
                    variant="outlined"
                    className="flex items-center gap-2 border border-orange-500 text-white rounded-md px-2 py-2 hover:bg-orange-500/10 hover:translate-x-1 transition-all duration-300 focus:ring-0 normal-case md:text-md text-sm font-medium tracking-wide"
                >
                    <span>Get Quizzed!</span>
                    <FaExternalLinkAlt className="h-4 w-4" />
                </Button>
            </a>
        </div>
    </div>
  );
}    