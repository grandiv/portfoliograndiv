// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

// react-typing-animation
import { TypeAnimation } from "react-type-animation";

// react helmet
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <Helmet>
        <title>Grandiv | Home</title>
        <link
          id="favicon"
          rel="icon"
          type="image/x-icon"
          href="/icon.png"
          data-react-helmet="true"
        />
      </Helmet>
      {/* bg img */}
      <div
        className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
      ></div>
      {/* particles */}
      <div className="w-[1500px] h-full absolute right-0 bottom-0">
        <ParticlesContainer />
      </div>
      {/* text */}
      <div className="w-full h-full">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi! my name is
            <span className="text-accent"> Grandiv</span>
            <br /> <span className="mr-4">I am a</span>
            <TypeAnimation
              sequence={["Student", 2000, "Developer", 2000]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Welcome to my Digital Hub! 🚀 an exhibition of my journey in
            development
          </motion.p>
          {/* button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
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
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
