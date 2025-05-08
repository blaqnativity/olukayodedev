import { motion } from "framer-motion";

const Testimonials = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
  };

  const testimonials = [
    {
      id: 1,
      name: "Utybe",
      note: "Kayode does well at replicating exact Figma designs that he is given for any project, and he ensures that his tasks are timely delivered.",
      portfolio: "UI/UX Designer",
    },
    {
      id: 2,
      name: "ProductsByMike",
      note: "I enjoy working with him and assigning tasks to him cause, I am certain that he'll always deliver.",
      portfolio: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Toluwase Ogunde",
      note: "I enjoy working with him and assigning tasks to him cause, I am certain that he'll always deliver.",
      portfolio: "Fullstack Developer & CEO (TheRootsHive)",
    },
  ];

  return (
    <>
      <div class="py-5 md:mt-20">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          class="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0"
        >
          <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
            Here's what some persons think
          </h2>
          <p class="max-w-2xl py-4 text-lg leading-normal text-gray-700 lg:text-xl xl:text-xl">
            Testimonials is a great way to increase brand trust and awareness.
            Use this section to highlight your popular customers.
          </p>
        </motion.div>
        <div class="container p-6 mx-auto mb-10 xl:px-0">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3"
          >
            {/* mapping through each testimonial */}
            {testimonials.map((testimony) => (
              <div class="lg:col-span-2 xl:col-auto">
                <div
                  key={testimony.id}
                  class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800"
                >
                  <p class="text-2xl leading-normal dark:text-gray-300">
                    {testimony.note}
                  </p>
                  <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                      <img
                        alt="Avatar"
                        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div class="text-lg font-medium text-gray-200">
                        {testimony.name}
                      </div>
                      <div class="text-gray-600 dark:text-gray-400">
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
