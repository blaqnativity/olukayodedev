import { motion } from "framer-motion";

const Stack = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div class="w-full mx-auto max-w-4xl text-center p-6">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          h2
          class="text-3xl font-bold text-black mb-6"
        >
          My Skills
        </motion.div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">HTML5</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">CSS3</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">JavaScript</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">React.js</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">Vue.js</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="TailwindCSS"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">TailwindCSS</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">Node.js</span>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              class="w-12 h-12 mb-2"
            />
            <span class="text-gray-300">Git</span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Stack;
