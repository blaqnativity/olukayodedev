import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import olk from "../assets/img/kay.png";
import { motion } from "framer-motion";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
  };
  return (
    <>
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        class="min-h-screen bg-primary text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* <!-- Left Side: Image --> */}
        <div class="w-full md:w-5/12 flex justify-center h-full md:justify-end">
          <img
            src={olk}
            alt="About Me"
            class="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* <!-- Right Side: Text Content --> */}
        <div class="w-full md:w-7/12 text-center md:text-left relative">
          {/* <!-- Vertical Text --> */}
          <div class="absolute left-[40%] -top-6 md:-left-16 text-gray-900  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
            <div class="flex items-center justify-center gap-2">
              <div class="w-16 h-[2px] bg-gray-900"></div>
              <p>MEET ME</p>
            </div>
          </div>

          {/* <!-- Main Heading --> */}
          <h2 class="text-gray-900 text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
            I Am A Passionate <br /> Software Developer
          </h2>

          {/* <!-- Description --> */}
          <p class="text-gray-900 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
            I am a Software Developer with over 2 years expertise in Next.js,
            React.js, & modern frontend web technologies. I specialize in
            building user-friendly applications that solve real-world problems.
            With a deep understanding of frontend development, state management,
            and API integration, I can bring your ideas to life.
          </p>

          {/* <!-- Buttons --> */}
          <div class="flex justify-center md:justify-start">
            <a
              href="/olukayodeasemudara.pdf"
              target="_blank"
              class="bg-tertiary text-white bg-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center"
            >
              Download Resume
            </a>
          </div>
          <div className="flex flex-col gap-2 justify-center md:justify-start md:items-start mt-5 text-gray-900">
            <span className="font-medium text-gray-700">
              Name: Olukayode Asemudara
            </span>

            <span>email: olukayodeasemudara@gmail.com</span>
          </div>
        </div>
      </motion.section>

      <Services />
      <Testimonials />
    </>
  );
};

export default About;
