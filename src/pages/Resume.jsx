import { motion } from "framer-motion";
import { resume } from "../data";

const Resume = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl md:my-0">
      <div className="title mb-10">
        <h2 className="text-3xl font-bold text-center mb-4">My Resume</h2>
        <div className="flex justify-center">
          <div className="w-16 h-[2px] bg-gray-900"></div>
        </div>
      </div>
      <div className="relative wrap overflow-hidden">
        <div className="md:border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2"></div>

        {resume.map((item, index) => (
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0
                ? "right-timeline"
                : "flex-row-reverse left-timeline"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="hidden z-20 md:flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-gray-900">
                {index + 1}
              </h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-xl">
                {item.company}
              </h3>
              <p className="text-md my-2 text-gray-800 font-extrabold leading-snug tracking-wide">
                {item.role} | {item.date}
              </p>
              <p className="text-slate-100 leading-tight">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
