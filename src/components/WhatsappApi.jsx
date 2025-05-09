import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappApi = () => {
  // whatsapp api
  const phoneNumber = "+2348153127462";
  const message = "Hello, I am interested in your services.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="hidden md:block fixed md:bottom-30 left-20 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          animate={{ y: [0, -50, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaWhatsapp size={30} />
        </motion.div>
      </a>
    </div>
  );
};

export default WhatsappApi;
