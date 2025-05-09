import { FaBars, FaRegMinusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header class="relative max-w-7xl mx-auto lg:px-8 px-4 flex flex-wrap items-center py-4">
        {/* logo text */}
        <div class="flex-1 flex justify-between items-center">
          <Link to="/" className="flex flex-col items-end leading-tight">
            <span className="logo font-[YourFont] text-3xl md:text-4xl tracking-wide">
              Asemudara's
            </span>
            <span className="uppercase tracking-widest text-[9px]">
              portfolio
            </span>
          </Link>
        </div>

        {/* nav desktop menu */}
        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-600 font-medium pt-4 md:pt-0">
              <li className="hover:text-gray-800 transition duration-300">
                <Link class="md:p-4 py-3 px-0 block" to="/">
                  Home
                </Link>
              </li>
              <li className="hover:text-gray-800 transition duration-300">
                <Link class="md:p-4 py-3 px-0 block" to="/about">
                  About
                </Link>
              </li>

              {/* <li className="hover:text-gray-800 transition duration-300">
                <Link class="md:p-4 py-3 px-0 block" to="/resume">
                  Resume
                </Link>
              </li> */}
              <li className="hover:text-gray-800 transition duration-300">
                <Link class="md:p-4 py-3 px-0 block" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="hover:text-gray-800 transition duration-300">
                <Link
                  class="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                  to="/blog-posts"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* menu icon */}
        <div for="menu-toggle" class="text-2xl pointer-cursor md:hidden block">
          {isOpen ? (
            <FaRegMinusSquare onClick={toggleMenu} />
          ) : (
            <FaBars onClick={toggleMenu} />
          )}
        </div>

        {/* mobile menu nav */}
        {isOpen && (
          <div class="fixed bg-black/90 md:hidden w-[250px] flex flex-col items-center justify-start h-screen z-20 top-16 right-0">
            <nav>
              <ul class="flex flex-col items-center justify-between text-base text-gray-600 font-medium pt-4 md:pt-0">
                <li className="hover:text-gray-800 transition duration-300">
                  <Link class="md:p-4 py-3 px-0 block" to="/">
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray-800 transition duration-300">
                  <Link class="md:p-4 py-3 px-0 block" to="/about">
                    About
                  </Link>
                </li>

                {/* <li className="hover:text-gray-800 transition duration-300">
                    <Link class="md:p-4 py-3 px-0 block" to="/resume">
                      Resume
                    </Link>
                  </li> */}
                <li className="hover:text-gray-800 transition duration-300">
                  <Link class="md:p-4 py-3 px-0 block" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="hover:text-gray-800 transition duration-300">
                  <Link
                    class="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                    to="/blog-posts"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
