import { Facebook, Github, HeartPulse, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-surface/80 flex flex-col justify-center sm:items-center gap-4 py-6 px-6 sm:px-13 md:px-18 lg:px-26 divide-y divide-txt-secondary/50'>
      <div className='flex max-sm:flex-col justify-between sm:items-center gap-4 w-full pb-6'>
        <div className='space-y-2'>
          <div className='flex items-center justify-start gap-4'>
            <HeartPulse className='size-8 text-primary' />
            <span className='text-2xl font-bold'>Jarurat Care</span>
          </div>
          <p className='text-sm text-txt-secondary'>
            Intelligent Patient Data Management.
          </p>
        </div>

        <div className='space-y-3 sm:space-y-6'>
          <div className='max-sm:hidden flex items-center gap-4 sm:gap-8 text-txt-secondary'>
            <Link to={"/"} className='hover:text-primary'>
              Home
            </Link>
            <Link to={"/patients"} className='hover:text-primary'>
              Patients
            </Link>
            <Link to={"/about"} className='hover:text-primary'>
              About
            </Link>
          </div>

          <div className='flex justify-start sm:justify-end items-center gap-5 text-txt-secondary'>
            <a href='#'>
              <Linkedin className='size-6 hover:text-primary' />
            </a>
            <a href='#'>
              <Twitter className='size-6 hover:text-primary' />
            </a>
            <a href='#'>
              <Facebook className='size-6 hover:text-primary' />
            </a>
            <a
              target='_blank'
              href='https://github.com/Shubham-567/JaruratCare-Patient-Dashboard'>
              <Github className='size-6 hover:text-primary' />
            </a>
          </div>
        </div>
      </div>

      <p className='text-sm text-txt-secondary'>
        © {new Date().getFullYear()} Jarurat Care. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
