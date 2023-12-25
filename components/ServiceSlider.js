// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "COMING SOON",
    path: "",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "I design websites, mobile apps, desktop apps, and other digital products.",
    path: "/contact",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I develop websites, mobile apps, desktop apps, and other digital products.",
    path: "/contact",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "COMING SOON",
    path: "",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "COMING SOON",
    path: "",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import Link from "next/link";
import { useRouter } from "next/router";

const ServiceSlider = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link
              className={`${item.path === pathname}`}
              href={item.path}
              key={index}
            >
              <div
                className="bg-primary/40 h-max rounded-lg px-6 py-8
            flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
            hover:bg-primary/80 transition-all duration-300"
              >
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight
                    className="group-hover:rotate-45 
                  group-hover:text-accent transition-all duration-300"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
