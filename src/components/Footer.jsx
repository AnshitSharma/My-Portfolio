import React from "react";
import {
  IoIosMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#6674cc] dark:bg-[#29347a] w-full text-white py-3">
      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col sm:flex-row gap-y-3 items-center justify-between">
        <div className="text-2xl font-semibold tracking-wider">Anshit Sharma</div>
        <div className="flex gap-x-4 items-center text-3xl">
          <a
            href="mailto:anshitsharma82002@gmail.com"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
          >
            <IoIosMail />
          </a>
          <a
            href="https://www.linkedin.com/in/anshit-sharma-602a7b21b/"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/AnshitSharma"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.instagram.com/anshit_231/"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
          >
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
