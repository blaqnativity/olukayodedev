import { motion } from "framer-motion";
import { testimonials } from "../data";

const Testimonials = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="py-5 md:mt-20">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0"
        >
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
            Here's what some persons think
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-700 lg:text-xl xl:text-xl">
            Testimonials is a great way to increase brand trust and awareness.
            Use this section to highlight your popular customers.
          </p>
        </motion.div>
        <div className="container p-6 mx-auto mb-10 xl:px-0">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3"
          >
            {/* mapping through each testimonial */}
            {testimonials.map((testimony) => (
              <div className="lg:col-span-2 xl:col-auto">
                <div
                  key={testimony.id}
                  className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800"
                >
                  <p className="text-xl leading-normal dark:text-gray-300">
                    {testimony.note}
                  </p>
                  <div className="flex items-center mt-8 space-x-3">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                      <img
                        alt="Avatar"
                        src={testimony.imageUrl}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-200">
                        {testimony.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimony.portfolio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
