import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, MenuIcon, MinusIcon } from "lucide-react";
import { useState } from "react";

const Navbar = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Motion variants for slide in/out
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0">
            <a className="flex items-center" href="/">
              <img className="h-7 w-auto rounded-full" src={logo} alt="logo" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100"
              href="#"
            >
              Hire me
            </a>
            <a
              className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100"
              href="#"
            >
              Projects
            </a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex flex-wrap items-center justify-between gap-3">
            <span className="cursor-pointer text-sm text-black/60 hover:text-blue-500">
              <a
                href="https://www.linkedin.com/in/olukayode-asemudara-8b04ba196/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </span>
            <span className="cursor-pointer text-sm text-black/60 hover:text-black">
              <a href="#" target="_blank">
                <Github />
              </a>
            </span>
            <span className="cursor-pointer text-sm text-black/60 hover:text-pink-600">
              <a href="https://www.instagram.com/olukayode_mi/" target="_blank">
                <Instagram />
              </a>
            </span>
          </div>

          {/* Mobile toggle */}
          <div className="block md:hidden">
            {isOpen ? (
              <MinusIcon onClick={toggleMenu} />
            ) : (
              <MenuIcon onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.5 }}
            className="fixed right-0 top-[51px] flex h-screen w-1/2 flex-col items-center justify-start py-10 gap-10 bg-black/90 z-40"
          >
            <ul className="flex flex-col gap-8 w-[90%]">
              <a className="text-white text-center font-medium" href="#">
                Hire me
              </a>
              <a className="text-white text-center font-medium" href="#">
                Projects
              </a>
            </ul>

            <ul className="flex flex-wrap gap-8">
              <span className="cursor-pointer text-sm text-white">
                <Linkedin />
              </span>
              <span className="cursor-pointer text-sm text-white ">
                <Github />
              </span>
              <span className="cursor-pointer text-sm text-white ">
                <Instagram />
              </span>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
