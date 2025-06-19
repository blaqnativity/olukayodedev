import { FaBars, FaRegMinusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest < scrollY.getPrevious());
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: show ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="w-full inset-x-0 z-50 top-0 backdrop-blur-[5px] shadow-md fixed bg-white"
      >
        <div className="max-w-7xl mx-auto md:px-4 px-4 flex flex-wrap items-center py-4">
          {/* logo text */}
          <div className="flex-1 flex justify-between items-center">
            <Link to="/" className="flex flex-col items-end leading-tight">
              <span className="logo text-2xl md:text-4xl tracking-wide">
                Asemudara's
              </span>
              <small className="logo2 md:text-[14px]">portfolio</small>
            </Link>
          </div>

          {/* nav desktop menu */}
          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-600 font-medium pt-4 md:pt-0">
                <li className="hover:text-gray-800 transition duration-300">
                  <Link className="md:p-4 py-3 px-0 block" to="/">
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray-800 transition duration-300">
                  <Link className="md:p-4 py-3 px-0 block" to="/about">
                    About
                  </Link>
                </li>
                <li className="hover:text-gray-800 transition duration-300">
                  <Link className="md:p-4 py-3 px-0 block" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="hover:text-gray-800 transition duration-300">
                  <Link className="md:p-4 py-3 px-0 block" to="/blog-posts">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* menu icon */}
          <div className="text-2xl cursor-pointer md:hidden block">
            {isOpen ? (
              <FaRegMinusSquare onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </div>

          {/* mobile menu nav */}
          {isOpen && (
            <div className="fixed bg-black/90 md:hidden w-[350px] flex flex-col items-center justify-start h-screen z-30 top-19 right-0">
              <nav>
                <ul className="flex flex-col items-center justify-between text-base text-white font-medium pt-6">
                  <li className="hover:text-gray-300 transition duration-300">
                    <Link className="p-4 block" to="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-gray-300 transition duration-300">
                    <Link
                      className="p-4 block"
                      to="/about"
                      onClick={toggleMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li className="hover:text-gray-300 transition duration-300">
                    <Link
                      className="p-4 block"
                      to="/portfolio"
                      onClick={toggleMenu}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="hover:text-gray-300 transition duration-300">
                    <Link
                      className="p-4 block"
                      to="/blog-posts"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
