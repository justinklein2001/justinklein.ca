import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2026 Justin Klein
      </Typography>
    <Typography color="blue-gray" className="font-normal">
        Built with Next.js (TypeScript) and Tailwind CSS
      </Typography>
    </footer>
  );
}