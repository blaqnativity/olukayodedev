import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto flex items-center h-screen p-16">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-800">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              Sorry, this page isn't ready, or you're lost!!!.
            </p>
            <Link
              to="/"
              className="px-8 py-4 text-xl font-semibold rounded bg-black/90 text-white hover:bg-black/80 transition duration-300"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
