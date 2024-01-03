// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import ImageModal from "../../components/ImageModal";

// react hooks
import React, { useState } from "react";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (title, description, screenshots) => {
    setSelectedImage({ title, description, screenshots });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="h-screen bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Projects I&apos;ve worked on. Click on the project to see more
              details.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider handleImageClick={openModal} />
          </motion.div>
          {/* Modal */}
          <ImageModal
            isOpen={selectedImage !== null}
            closeModal={closeModal}
            title={selectedImage?.title}
            description={selectedImage?.description}
            screenshots={selectedImage?.screenshots || []}
          />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
