import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosStar } from "react-icons/io";
import cpp from "../assets/C++.png";
import codehelp from "../assets/codehelp.png";
import ml from "../assets/ml.png";
import dsa from "../assets/dsa.png";
import ocr from "../assets/ocr.png";

const Experiences = () => {
  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-28"
      id="experience"
    >
      <div className="w-11/12 md:w-10/12 mx-auto max-w-7xl">
        <div
          className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center "
          data-aos="fade-up"
        >
          Experiences
        </div>

        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center
        py-6"
          data-aos="fade-up"
        >
          Dedicated intern with hands-on experience in diverse roles, combining
          coursework knowledge in Software Development and Machine Learning with
          practical application in real-world settings.
        </div>

        <VerticalTimeline lineColor={"#e9ecf7"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>Apr-Present 2024</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={
              <div className="text-xl flex justify-center items-center w-full aspect-square">
                <img src={ml} alt="" width={30} className="bg-transparent " />
              </div>
            }
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-2xl">
              Machine Learning
            </h1>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Udemy
            </h4>
            <p className="flex flex-col items-start gap-x-8">
              In my third year of B.Tech, I mastered machine learning through
              comprehensive coursework, equipping myself with advanced skills in
              the field.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>Dec-Jun 2022-23</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={
              <div className="text-xl flex justify-center items-center w-full aspect-square">
                <img
                  src={codehelp}
                  alt=""
                  width={35}
                  className="bg-transparent "
                />
              </div>
            }
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-2xl">
              Mern-Stack Web Development
            </h1>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              CodeHelp
            </h4>
            <p className="flex flex-col items-start gap-x-8">
              Completed comprehensive coursework in MERN (MongoDB, React,
              Node.js) Stack development during the second year of my B.Tech
              program.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>Jun-Nov 2022</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={
              <div className="text-xl flex justify-center items-center w-full aspect-square">
                <img src={dsa} alt="" width={35} className="bg-transparent " />
              </div>
            }
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-2xl">
              Data Structures and Algorithms
            </h1>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Udemy
            </h4>
            <p className="flex flex-col items-start gap-x-8">
              Mastered Data Structures and Algorithms in C++ during my second
              year of BTech, enhancing problem-solving skills and algorithmic
              proficiency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>Mar 2024</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={
              <div className="text-xl flex justify-center items-center w-full aspect-square">
                <img src={cpp} alt="" width={30} className="bg-transparent " />
              </div>
            }
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-3xl">
              Java
            </h1>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Kunal kushwaha
            </h4>
            <p className="flex flex-col items-start gap-x-8">
              "Doing comprehensive Java course through Kunal kushwaha,mastering
              foundational principles and programming techniques."
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#6674cc", color: "#fff" }}
            icon={<IoIosStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
