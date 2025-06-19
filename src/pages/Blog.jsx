import { posts } from "../data";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="md:pt-20 pt-20">
        <div className="text-center">
          <h2 className="font-semibold text-3xl text-gray-700">
            Check out my latest articles
          </h2>
          <p className="mt-2 text-gray-500">My Blog</p>
        </div>

        {/* ✅ Wrap all items in one <ul> */}
        <ul className="max-w-7xl mx-auto grid grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
          {posts.map((post) => (
            <motion.li
              key={post.id}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.9 }}
              className="flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-gray-700 font-semibold">
                  <span className="mb-1 block text-sm leading-6 text-indigo-500">
                    {post.date}
                  </span>
                  {post.title}
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>{post.content.slice(0, 200)}... </p>
                </div>
                <a
                  className="group w-fit flex items-center gap-1 py-3 px-5 rounded-full text-sm font-semibold whitespace-nowrap focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                  href={post.postUrl}
                  target="_blank"
                >
                  Read Article
                  <span className="sr-only">, Read full article</span>
                  <FaAngleRight />
                </a>
              </div>
              <img
                src={post.imageUrl}
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50 md:max-w-[400px] sm:mb-0 xl:mb-6"
                width="1216"
                height="640"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blog;
