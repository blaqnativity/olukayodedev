import { projects } from "../data";
import { motion } from "framer-motion";
import WhatsappApi from "../components/WhatsappApi";

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
  };
  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section pt-20 pb-10 md:pt-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-gray-700 font-bold mb-4">Portfolio</h2>
            <p className="text-lg text-gray-700 font-semibold">
              Showcasing some of my works and collaborations.
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            className="flex flex-col md:flex-row items-center mb-8"
          >
            <button className="filter-button bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-2 mb-2 text-white rounded">
              All
            </button>
            <button className="filter-button  bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-2 mb-2 text-white rounded">
              Web Development
            </button>
            <button className="filter-button  bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-2 mb-2 text-white rounded">
              Wordpress Site
            </button>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project) => (
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href={project.url} target="_blank">
                  <img
                    className="w-full h-60 object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg text-gray-700 font-medium text-txt group-hover:text-gray-dark">
                      {project.title}
                    </h3>
                    <span className="text-sm font-bold text-blue-600 group-hover:text-indigo-500">
                      {project.slug}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <WhatsappApi />
    </>
  );
};

export default Projects;
