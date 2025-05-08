import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, MenuIcon, MinusIcon } from "lucide-react";
import { div, ul } from "motion/react-client";
import { useState } from "react";

const Navbar = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl"
      >
        <div class="px-4">
          <div class="flex items-center justify-between">
            <div class="flex shrink-0">
              <a aria-current="page" class="flex items-center" href="/">
                <img class="h-7 w-auto rounded-full" src={logo} alt="" />
              </a>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Hire me
              </a>
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                projects
              </a>
            </div>
            <div class="hidden md:flex flex-wrap items-center justify-between gap-3">
              <span className="cursor-pointer text-sm text-black/60 hover:text-blue-500 transition duration-300 ease-in-out">
                <Linkedin />
              </span>
              <span className="cursor-pointer text-sm text-black/60 hover:text-black transition duration-300 ease-in-out">
                <Github />
              </span>
              <span className="cursor-pointer text-sm text-black/60 hover:text-pink-600 transition duration-300 ease-in-out">
                <Instagram />
              </span>
            </div>

            {/* toggle menu icons */}
            {isOpen ? (
              <div className="block md:hidden">
                <MinusIcon onClick={toggleMenu} />
              </div>
            ) : (
              <div className="block md:hidden">
                <MenuIcon onClick={toggleMenu} />
              </div>
            )}

            {/* showing the menu items based on the current state */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`fixed right-0 top-[51px] flex h-screen w-1/2 flex-col items-center justify-start py-10  gap-10 border-1 border-gray-800/50 bg-black/50 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-8 w-[90%]">
                  <a className="text-white text-center font-medium" href="#">
                    Hire me
                  </a>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
