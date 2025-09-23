import { HeartPulse, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Patients", to: "/patients" },
  { name: "About", to: "/about" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

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
    <header className='fixed top-0 left-0 right-0 bg-surface/80 backdrop-blur-xl z-40'>
      <nav className='flex items-center justify-between gap-4 py-3 px-6 sm:px-13 md:px-18 lg:px-26'>
        <NavLink to='/' className='flex items-center gap-2'>
          <HeartPulse className='size-8 text-primary' />
          <span className='text-2xl font-bold'>Jarurat Care</span>
        </NavLink>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4 md:gap-8 bg-background rounded-4xl py-2 px-4 text-txt-secondary'>
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
    </header>
  );
};

export default Navbar;
