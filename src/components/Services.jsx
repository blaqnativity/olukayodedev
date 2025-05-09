import { motion } from "framer-motion";
import { services } from "../data";

const Stack = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-5 mt-16">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9 }}
        className="text-center"
      >
        <h2 className="font-semibold text-3xl text-gray-700">
          Services I offer my clients
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">My Services</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            className="flex gap-4 items-start"
          >
            <span className="text-gray-700 bg-gray-500/10 p-3 rounded-full">
              <service.icon />
            </span>
            <div>
              <h3 className="font-semibold text-xl text-gray-700">
                {service.title}
              </h3>
              <p className="mt-1 text-gray-500">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
