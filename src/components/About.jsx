import React from "react";
import aboutBg from "../assets/aboutBg.svg";


const About = () => {
  return (
    <div className="w-full bg-white dark:bg-[#131516] pt-24" id="about">
      <div className="w-11/12 md:10/12 max-w-7xl mx-auto ">
        <div className="text-black dark:text-white text-3xl font-bold tracking-wider">
          About <span className="text-[#6674cc] dark:text-[#6e96cf]">Me</span>
        </div>

        <div className="h-0.5 w-full bg-[#777c85] my-6"></div>

        
        <div
          className="text-black dark:text-white mx-auto text-center text-2xl font-bold tracking-wider 
        my-3"
          data-aos="fade-up"
        >
          Anshit Sharma
        </div>

        <div
          className="text-black dark:text-white text-center pb-8"
          data-aos="fade-up"
        >
          Hello, I'm{" "}
          <span className="font-semibold text-[#6674cc] dark:text[#6e96cf]">
            Anshit Sharma
          </span>
          , a passionate 3rd year B.Tech student specializing in Artificial
          Intelligence and Machine Learning at the Maharaja Agrasen Institute Of
          Technology in Delhi. Alongside my academic pursuits, I thrive as a
          Full Stack Developer, blending creativity with technical expertise.
          Proficient in languages such as java, and Python, I embark on coding
          adventures to solve real-world problems. My journey extends beyond the
          classroom, fueled by an insatiable curiosity for machine learning.
          Leveraging this enthusiasm, I immerse myself in the dynamic realm of
          technology, constantly pushing boundaries and embracing challenges.
        </div>
      </div>
    </div>
  );
};

export default About;
