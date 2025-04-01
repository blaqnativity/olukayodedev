// import DatePicker from "./DatePicker.jsx";
const Navbar = ({ logo }) => {
  return (
    <>
      <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
        <div class="px-4">
          <div class="flex items-center justify-between">
            <div class="flex shrink-0">
              <a aria-current="page" class="flex items-center" href="/">
                <img class="h-7 w-auto rounded-full" src={logo} alt="" />
                <p class="sr-only">Website Title</p>
              </a>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Hire me
              </a>
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                projects
              </a>
            </div>
            <div class="flex items-center justify-end gap-3">
              <button
                type="submit"
                className="border-2 border-gray-300 rounded-full px-4 py-2"
              >
                Schedule a call
              </button>
              {/* <DatePicker /> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
