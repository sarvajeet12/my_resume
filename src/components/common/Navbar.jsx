// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import Btn from "./Btn";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { motion, useScroll } from "motion/react";

const Navbar = () => {
  // const [activeLink, setActiveLink] = useState("#home");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navLinks = [
  //   {
  //     label: "Home",
  //     href: "#home",
  //   },
  //   {
  //     label: "About",
  //     href: "#about",
  //   },
  //   {
  //     label: "Skills",
  //     href: "#skill",
  //   },
  //   {
  //     label: "Projects",
  //     href: "#projects",
  //   },
  //   {
  //     label: "Experience",
  //     href: "#experience",
  //   },
  //   {
  //     label: "Education",
  //     href: "#education",
  //   },
  //   {
  //     label: "Certificate",
  //     href: "#certificate",
  //   },
  //   {
  //     label: "LinkedIn",
  //     href: "#certificate",
  //   },
  //   {
  //     label: "GitHub",
  //     href: "#certificate",
  //   },
  // ];

  // Framer Motion
  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-#030712/90 backdrop-blur-sm z-50 border-b border-gray-900 shadow-sm ">
      <div className="max-w-7xl container mx-auto flex items-center justify-end px-4 sm:px-6 lg:px-8  md:h-20 h-16">
        {/* mobile menu button */}
        {/* <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6 text-blue-500 font-bold" />
          ) : (
            <HiMenu className="size-6 text-blue-500 font-bold" />
          )}
        </button> */}

        {/* desktop nav items */}
        {/* <div className="hidden md:flex items-center gap-8 ">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-md font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all ${
                activeLink === link.href
                  ? " text-blue-500 after:w-full"
                  : "text-slate-400 hover:text-blue-500"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div> */}

        {/* LinkedIn and GitHub */}
        {/* Framer Motion */}
        <motion.div
          className="bg-yellow-600 w-full h-1.5 fixed top-0 left-0 origin-left"
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>

        <div className="gap-10 flex">
          <a
            href="https://www.linkedin.com/in/sarvajeet-lal-shah-928280274"
            title="LinkedIn"
            target="_blank"
          >
            <IoLogoLinkedin className="text-blue-500 cursor-pointer text-4xl hover:text-slate-400" />
          </a>
          <a
            href="https://github.com/sarvajeet12"
            title="GitHub"
            target="_blank"
          >
            <FaSquareGithub className="text-blue-500 cursor-pointer text-4xl hover:text-slate-400" />
          </a>
          <a href="#contact" title="contact">
            <IoMdContact className="text-blue-500 cursor-pointer text-4xl hover:text-slate-400" />
          </a>
        </div>
      </div>

      {/* mobile menu items */}
      {/* {isMenuOpen && (
        <div className="md:hidden py-4">
          <div className="container mx-auto px-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                href={link.href}
                key={index}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))} */}

      {/* LinkedIn and GitHub */}
      {/* <div className="flex gap-5">
              
              <IoLogoLinkedin className="text-blue-500 cursor-pointer text-4xl" />
              
              <FaSquareGithub className="text-blue-500 cursor-pointer text-4xl" />
            </div> */}
      {/* </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
