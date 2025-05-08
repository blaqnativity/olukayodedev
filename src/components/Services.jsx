import {
  FaCode,
  FaFigma,
  FaGlobe,
  FaPen,
  FaRocket,
  FaWordpress,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Stack = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
  };
  return (
    <>
      <div class="max-w-4xl mx-auto px-5 mt-16">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          class="text-center"
        >
          <h2 class="font-semibold text-3xl">Services I offer my clients</h2>
          <p class="max-w-md mx-auto mt-2 text-gray-500">My Services</p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          class="grid md:grid-cols-2 gap-10 mt-10"
        >
          <div class="flex gap-4 items-start">
            <span class="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <FaCode />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Front-end Development</h3>
              <p class="mt-1 text-gray-500">
                I create responsive websites that allow the user to experience
                your website in the best and most apporpriate way suited to the
                device they are using.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <FaFigma />
            </span>
            <div>
              <h3 class="font-semibold text-xl">UI/UX Design</h3>
              <p class="mt-1 text-gray-500">
                I create user-friendly interfaces that enable users to
                understand how to use complex technical products
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <FaGlobe />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Web Design</h3>
              <p class="mt-1 text-gray-500">
                I have excellent understanding of graphic design, color schemes,
                button design, interface design, photoshop/ illustrator,
                navigational design, and typography.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <FaWordpress />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Wordpress Site Development</h3>
              <p class="mt-1 text-gray-500">
                In many projects, my client’s require the ability to manage the
                content of their website. WordPress is the world’s most popular
                content management system which I have many years of experience
                with.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <FaPen />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Technical Writing</h3>
              <p class="mt-1 text-gray-500">
                I create software documentation, user manuals, and other
                technical content that converts complex technical information to
                a non-technical language.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <FaRocket />
            </span>
            <div>
              <h3 class="font-semibold text-xl">More</h3>
              <p class="mt-1 text-gray-500">
                If you’d like to find out more about how I work and my process
                of working with clients, please send me a message in the contact
                page and give a little information about the project you have in
                mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Stack;
