import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [toggle, setToggled] = useState(false);
  const navContainer = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <nav className=" mx-8 my-3 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/Logo.svg" className="h-8" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#B19DD0]">
          Home
        </span>
      </a>
      {/* Nav Links */}
      <div className="">
        <ul className="hidden md:flex xl:flex space-x-8 my-2 text-[#9b79ce]">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div
        onClick={() => setToggled(!toggle)}
        className="cursor-pointer space-y-1.5 md:hidden xl:hidden z-50">
        <motion.span
          animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
          className="block h-0.5 w-6 bg-[#9b79ce]"></motion.span>
        <motion.span
          animate={{ width: toggle ? 0 : 20 }}
          className="block h-0.5 w-4 bg-[#9b79ce]"></motion.span>
        <motion.span
          animate={{
            rotateZ: toggle ? -45 : 0,
            y: toggle ? -8 : 0,
            width: toggle ? 26 : 14,
          }}
          className="block h-0.5 w-2 bg-[#9b79ce]"></motion.span>
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <motion.div
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
          variants={navContainer}
          exit="hidden"
          className="fixed flex bg-white w-1/2 h-screen bottom-0 right-0 justify-center items-start">
          <div className="flex flex-col justify-center items-center gap-20 text-xl mt-14 text-[#9b79ce]">
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
