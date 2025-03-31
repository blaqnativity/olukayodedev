import React from "react";

const Footer = ({ logo }) => {
  const year = new Date().getFullYear();
  const day = new Date().getDate();
  return (
    <>
      <div class="bg-gray-100">
        <div class="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div class="p-5 sm:w-8/12">
            <img class="mb-4 h-7 w-auto rounded-full" src={logo} alt="" />

            <div class="flex text-gray-500 uppercase text-sm">
              <a href="#" class="mr-2 hover:text-indigo-600">
                Home
              </a>
              <a href="#" class="mr-2 hover:text-indigo-600">
                About Me
              </a>
            </div>
          </div>
          <div class="p-5 sm:w-4/12">
            <h3 class="font-medium text-lg text-indigo-600 mb-4">
              Subscribe to my Newsletter
            </h3>
            <form class="mt-4">
              <input
                class="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="username@email.com"
              />
            </form>
          </div>
        </div>
        <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright {day}-{year}. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
