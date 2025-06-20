import { useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
// import WhatsappApi from "./WhatsappApi";

const Hero = () => {
  // framer motion animation
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // typewriter effect
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Wordpress Developer",
      "UI/UX Designer",
      "Technical Writer",
    ],
    loop: 0,
    delaySpeed: 2500,
  });
  // end of typewriter effect

  return (
    <>
      <div className="relative h-[100vh] flex items-center">
        <div className="px-4 mx-auto mt-10 mb-16 max-w-7xl sm:mt-20">
          <div className="text-center h-[200px] md:h-[150px]">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-gray-700">
              <span className="block h1Text">Olukayode Ola-Eri</span>
            </h1>
            <p className="max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-2xl font-bold md:max-w-3xl">
              {text}
            </p>
          </div>
        </div>

        {/* social icons */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          className="absolute md:right-10 pl-5 md:pl-0 bottom-10 md:bottom-20 flex gap-5 md:flex-col items-center"
        >
          <a
            href="https://www.linkedin.com/in/olukayode-asemudara-8b04ba196/"
            target="_blank"
            className="text-blue-700/90 text-xl md:text-3xl transition-all duration-300 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/olukayode_mi/"
            target="_blank"
            className="text-pink-700/90 text-xl md:text-3xl transition-all duration-300 hover:text-pink-700"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/blaqnativity"
            className="text-black/90 text-xl md:text-3xl transition-all duration-300 hover:text-black"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* whatsapp api component */}
        {/* <WhatsappApi /> */}
      </div>
    </>
  );
};

export default Hero;
