import { motion } from "framer-motion";
import heroBg from "../assets/img/kaybee.png";

const Hero = ({ titleOne, titleTwo, heroImg = heroBg, message }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-primary text-gray-800 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 mt-8 md:mt-0 ">
      {/* Left Side: Image */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        className="w-full md:w-5/12 flex justify-center h-full md:justify-end"
      >
        <img
          src={heroImg}
          alt="Hero Section Image"
          className="w-72 h-96 md:w-80 lg:w-96 object-cover object-top rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side: Text Content */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        className="w-full md:w-7/12 text-center md:text-left relative"
      >
        {/* Vertical Text */}
        <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-[2px] bg-gray-900"></div>
            <p>MORE ABOUT</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
          {titleOne} <br /> {titleTwo}
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://dev.to/theolukayodeasemudara"
            className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center"
            role="button"
            target="_blank"
          >
            Blog posts
          </a>
          <a
            href="#"
            className="border-2 border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded-lg text-center"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
