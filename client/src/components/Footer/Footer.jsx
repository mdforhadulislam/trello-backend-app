import React from "react";

const Footer = () => {
  return (
    <footer className="container m-auto block p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900" style={{boxShadow:"0px 0px 10px 5px #e9e9e9"}}>
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center justify-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Trello App
          </span>
        </a>
        <ul className="flex item-center justify-center flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href={"/"} className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href={"/"} className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href={"/"} className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href={"/"} className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Trello App™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
