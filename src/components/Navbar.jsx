import { HeartPulse, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Patients", to: "/patients" },
  { name: "About", to: "/about" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // set dark mode base on user preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // handle dark mode toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-40'>
      <nav className='flex items-center justify-between gap-4 py-3 px-6 sm:px-13 md:px-18 lg:px-26 bg-surface/80 backdrop-blur-xl'>
        <NavLink to='/' className='flex items-center gap-2'>
          <HeartPulse className='size-8 text-primary' />
          <span className='text-2xl font-bold text-nowrap'>Jarurat Care</span>
        </NavLink>

        <div className='flex items-center gap-4'>
          <div className='max-md:hidden flex items-center gap-4 md:gap-8 bg-background rounded-4xl py-2 px-4 text-txt-secondary'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex flex-col items-center hover:text-txt-primary-light font-medium ${
                    isActive ? "text-primary" : ""
                  }`
                }>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* mobil menu toggle  */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-primary hover:text-primary-light bg-background rounded-full p-2 cursor-pointer'>
            {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>

          {/* dark mode toggle button */}
          <button
            onClick={handleDarkModeToggle}
            className='text-primary hover:text-primary-light bg-background rounded-full p-2 cursor-pointer'>
            {darkMode ? (
              <Sun className='size-6' />
            ) : (
              <Moon className='size-6' />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <div className='md:hidden fixed top-16 left-0 w-full min-h-[92vh] flex items-center justify-center bg-background/80 backdrop-blur-xs'>
          <div className='flex flex-col gap-12 pb-20'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex flex-col items-center text-4xl tracking-wide font-bold ${
                    isActive ? "text-primary" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
