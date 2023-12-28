// data
const ssSlides = {
  slides: [
    {
      screenshots: [
        {
          path: "/thumb1.jpg",
        },
        {
          path: "/thumb2.jpg",
        },
        {
          path: "/thumb3.jpg",
        },
        {
          path: "/thumb4.jpg",
        },
      ],
      screenshots: [
        {
          path: "/thumb5.jpg",
        },
        {
          path: "/thumb6.jpg",
        },
        {
          path: "/thumb7.jpg",
        },
        {
          path: "/thumb8.jpg",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

//next image
import Image from "next/image";

const ssSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {ssSlides.slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.screenshots.map((screenshot, ssIndex) => (
                <div
                  className="relative rounded-lg overflow-hidden flex 
                items-center justify-center group"
                  key={ssIndex}
                >
                  <div
                    className="flex items-center justify-center relative
                  overflow-hidden group"
                  >
                    {/* image */}
                    <Image
                      src={screenshot.path}
                      width={500}
                      height={300}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ssSlider;
