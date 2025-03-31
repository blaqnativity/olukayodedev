import heroImg from "../assets/img/kaybee.png";

const CTA = ({ name, profile, message, hero }) => {
  const title = "Boost your productivity. Start using our app today.";
  const description =
    "Join us in our mission to harness the boundless power of the sun. Our state-of-the-art solar plant is revolutionizing energy production, providing clean and renewable electricity to power communities.";
  return (
    <>
      <section className="relative max-w-7xl h-[24rem] lg:rounded-lg mx-auto py-14 lg:pb-20 px-5 lg:px-0 my-40">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center">
            {title}
          </h3>
          <p className="text-sm text-white max-w-lg mx-auto text-center">
            {description}
          </p>
          <button className="bg-[#45B3BA] dark:bg-[#1A202C] w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-white font-semibold text-sm lg:text-base rounded px-4 py-2">
            Register for free
          </button>
        </div>
      </section>
    </>
  );
};

export default CTA;
