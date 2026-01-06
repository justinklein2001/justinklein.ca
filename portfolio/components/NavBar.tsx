import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#experience" className="flex items-center hover:text-blue-700 transition-colors">
          Experience
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#projects" className="flex items-center hover:text-blue-700 transition-colors">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#summary" className="flex items-center hover:text-blue-700 transition-colors">
          TLDR
        </a>
      </Typography>
      <a 
          href="https://www.linkedin.com/in/justinklein2001/"
          target="_blank" 
          rel="noopener noreferrer"
          className="h-5 w-5 flex items-center justify-center rounded-full text-white hover:bg-white/10 hover:scale-110 transition-transform md:mb-0 mb-1"
      >
          <FaLinkedin className="h-5 w-5" />
      </a>
      <a 
          href="https://github.com/justinklein2001"
          target="_blank" 
          rel="noopener noreferrer"
          className="h-5 w-5 flex items-center justify-center rounded-full text-white hover:bg-white/10 hover:scale-110 transition-transform"
      >
          <FaGithub className="h-5 w-5" />
      </a>

    </ul>
  );
}
 
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto px-6 py-3 border-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
            JK
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto mb-4.5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}