import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ImageModal = ({
  isOpen,
  closeModal,
  title,
  description,
  screenshots,
}) => {
  const handleDialogClose = () => {
    closeModal();
  };

  return (
    isOpen && (
      <div className="dialog-modal">
        <div className="container mx-auto">
          <div className="dialog-content">
            <button onClick={handleDialogClose} className="x">
              ❌
            </button>
            <div
              className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0"
            >
              <motion.h2
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="font-semibold text-[2rem] pb-4"
              >
                {title}
              </motion.h2>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-base leading-[1.3rem] px-0 py-2"
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <Swiper
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="h-[280px] sm:h-[480px]"
              >
                {screenshots.map((screenshot, ssIndex) => (
                  <SwiperSlide key={ssIndex}>
                    <div className="grid grid-cols-1 grid-rows-1 gap-1 cursor-pointer">
                      <div
                        className="relative rounded-lg overflow-hidden flex 
                        items-center justify-center group"
                      >
                        <div
                          className="flex items-center justify-center relative
                          overflow-hidden group"
                        >
                          <Image
                            src={screenshot.path}
                            width={800}
                            height={600}
                            alt={`Screenshot ${ssIndex + 1}`}
                          />
                        </div>
                      </div>
                      <div
                        className="text-center flex xl:w-[30vw] flex-row lg:text-left mb-4
                        xl:mb-0"
                      >
                        <motion.p
                          variants={fadeIn("up", 0.8)}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="text-base leading-[1.3rem] px-0 py-2"
                        >
                          {screenshot.ssdesc}
                        </motion.p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    )
  );
};

export default ImageModal;
