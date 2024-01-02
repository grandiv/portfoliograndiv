import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiCplusplus,
  SiCsharp,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiTailwindcss,
  SiPython,
  SiMicrosoftsqlserver,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss />,
          <SiFramer />,
        ],
      },
      {
        title: "Software Engineering",
        icons: [<SiCplusplus />, <SiCsharp />, <SiMicrosoftsqlserver />],
      },
      {
        title: "Digital Content",
        icons: [<SiAdobephotoshop />, <SiAdobepremierepro />],
      },
      {
        title: "Data Science",
        icons: [<SiPython />],
      },
    ],
  },
  {
    title: "sertificates",
    info: [
      {
        title: "Web Development - KMTETI FT Gadjah Mada University",
        stage: "2023",
      },
      {
        title: "Data Science - KMTETI FT Gadjah Mada University",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title:
          "Software Engineer - Desktop Application FOREAL (Food Rescue and Allocation) for OOP Final Project - 2023",
        stage: "",
      },
      {
        title: "Web Developer - CRUD To-Do Web Application - 2023",
        stage: "",
      },
      {
        title:
          "Data Science - Machine Learning Model to Predict Student Performance Based on Demographic Student Data - 2023",
        stage: "",
      },
    ],
  },
  {
    title: "educations",
    info: [
      {
        title:
          "Information Technology Student - Gadjah Mada University | 2022 - Present",
        stage: "",
      },
      {
        title:
          "Information Technology Student - SMA Negeri 1 Yogyakarta | 2019 - 2022",
        stage: "",
      },
    ],
  },
];

// components
import AvatarAbout from "../../components/AvatarAbout";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* avatar img */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full max-w-[420px] max-h-[420px] absolute -bottom-32
          lg:bottom-0 lg:right-[20%]"
      >
        <AvatarAbout />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Commitment&nbsp; Efficiency &nbsp;Integrity
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify"
          >
            Grandiv possesses an active, diligent, and persevering work ethic,
            which enables him to excel both independently and collaboratively in
            a team-oriented environment. He is highly averse to procrastination
            and always strive to maintain efficient and timely completion of
            tasks. His excellent interpersonal skills facilitate ease in
            adapting to new situations and socializing with individuals from
            diverse backgrounds. He prioritizes integrity in all aspects of his
            personal and professional life.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after: h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Years of experience
                </div>
              </div>
              {/* upcoming projects */}
              <div
                className="relative flex-1 after:w-[1px] after: h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Upcoming projects
                </div>
              </div>
              {/* projects */}
              <div
                className="relative flex-1 after:w-[1px] after: h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Finished projects
                </div>
              </div>
              {/* sertificates */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Sertificates
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, aboutIndex) => {
              return (
                <div
                  key={`about-${aboutIndex}`}
                  className={`${
                    index === aboutIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(aboutIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, infoIndex) => {
              return (
                <div
                  key={`info-${infoIndex}`}
                  className="flex-1 flex flex-col md:flex-row 
                  max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={`icon-${iconIndex}`}
                          className="text-2xl text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
