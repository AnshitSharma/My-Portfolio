import React from "react";
import Typewriter from "typewriter-effect";
import heroSectionImg from "../assets/AI_Image_Myself.png";
import waveHand from "../assets/waving-hand.svg";
import mail from "../assets/envelope.svg";
import linkedin from "../assets/linkedin-original.svg";
import github from "../assets/github-square.svg";
import instagram from "../assets/instagram-1.svg";
import Button from "./Button";

const HeroSection = () => {

  return (
    <div className="w-full bg-white dark:bg-[#131516] pt-44 pb-12">
      <div
        className="w-11/12 md:10/12 max-w-7xl mx-auto
      flex gap-x-10 items-center flex-col-reverse sm:flex-row gap-y-6"
      >
        {/* Left Section */}
        <div
          className="w-full sm:w-3/5 flex flex-col gap-y-8 items-center sm:items-start"
          data-aos={window.innerWidth > 640 ? "fade-right" : "fade-up"}
        >
          <div
            className="text-black dark:text-white sm:text-2xl text-lg font-bold 
          tracking-wider leading-normal text-center sm:text-left"
          >
            Hi
            <img
              src={waveHand}
              alt=""
              width={30}
              className="inline mb-2 ml-1 relative z-0"
              style={{ transform: "rotateY(180deg)" }}
            />
            <br /> I'm Anshit Sharma
          </div>
          <div
            className=" text-xl sm:text-3xl font-bold flex gap-x-3 sm:gap-x-6 flex-wrap
          "
          >
            <span className="text-[#6674cc] dark:text[#6e96cf] w-full sm:w-fit text-center sm:text-left">
              I am a
            </span>
            <span className="w-full sm:w-fit text-black dark:text-white text-center sm:text-left">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Machine Learning Enthusiast",
                    "Coder",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div
            className="text-black dark:text-white text-sm sm:text-lg
          text-center sm:text-left"
          >
            Welcome to my portfolio! I'm a Full Stack Developer and Machine
            Learning enthusiast, showcasing my journey in software development,
            from user interfaces to diving into AI. Join me on this digital
            journey of constant learning and growth.
          </div>
          <a
            href="https://drive.google.com/file/d/18uM149W4YBiknn1p69_t9OlCO1_QElEN/view?usp=sharing"
            className="outline-none"
            target="_blank"
          >
            <Button content={"Check Resume"} />
          </a>

          <div className="flex gap-x-4 items-center">
            <a
              href="mailto:anshitsharma82002@gmail.com"
              target="_blank"
              className="-mr-2 hover:scale-110 transition-all duration-300"
            >
              <img src={mail} alt="" className="w-14" />
            </a>
            <a
              href="https://www.linkedin.com/in/anshit-sharma-602a7b21b/"
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <img src={linkedin} alt="" className="w-[34px]" />
            </a>
            <a
              href="https://github.com/AnshitSharma"
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <img src={github} alt="" className="w-8" />
            </a>
            <a
              href="https://www.instagram.com/anshit_231/"
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <img src={instagram} alt="" className="w-9" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="heroImg w-full sm:w-2/5 rounded-full overflow-hidden border-4 border-[#6674cc]"
          data-aos={window.innerWidth > 640 ? "fade-left" : "zoom-in"}
        >
          <img src={heroSectionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
