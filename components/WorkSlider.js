// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "FOREAL (Food Rescue and Distribution) Desktop Version",
          description:
            "Desktop app to support Sustainable Development Goal 2: Zero Hunger by redistributing surplus food like from restaurants to people in need.",
          screenshots: [
            {
              path: "/foreal5.png",
              ssdesc:
                "Registration page to register an account that has access to all features of the app. This will ensure flexibility",
            },
            {
              path: "/foreal6.png",
              ssdesc: "Login page for registered users",
            },
            {
              path: "/foreal1.png",
              ssdesc:
                "Main page of the app. This is where the user can choose one of the features",
            },
            {
              path: "/foreal2.png",
              ssdesc:
                "Donation page. Where users can input the required data to donate food",
            },
            {
              path: "/foreal3.png",
              ssdesc:
                "Recepient page. Where users can input the required data to receive food",
            },
            {
              path: "/foreal4.png",
              ssdesc:
                "Volunteer page. Where users can volunteer to help distribute food. After clicking submit, users will be given a summary of the delivery",
            },
          ],
          path: "/forealthumbnailfixed.png",
        },
        {
          title: "FOREAL (Food Rescue and Distribution) Android Version",
          description:
            "Mobile app to support Sustainable Development Goal 2: Zero Hunger by redistributing surplus food like from restaurants to people in need.",
          screenshots: [
            {
              path: "/forealandro1.png",
              ssdesc:
                "Integrated with Firebase Authentication to login with Google",
            },
            {
              path: "/forealandro2.png",
              ssdesc:
                "Dashboard UI to navigate to different features of the app",
            },
            {
              path: "/forealandro3.png",
              ssdesc: "Donation feature to donate food to people in need",
            },
            {
              path: "/forealandro4.png",
              ssdesc: "Request feature to input recipient's data",
            },
            {
              path: "/forealandro5.png",
              ssdesc:
                "Volunteer page with dropdown to select the food to deliver",
            },
          ],
          path: "/logoforealmobile.png",
        },
        {
          title: "title3",
          description: "desc3",
          screenshots: [
            {
              path: "/thumb2.jpg",
              ssdesc: "ssdesc2",
            },
            {
              path: "/thumb3.jpg",
              ssdesc: "ssdesc3",
            },
            {
              path: "/thumb1.jpg",
              ssdesc: "ssdesc1",
            },
            {
              path: "/thumb4.jpg",
              ssdesc: "ssdesc4",
            },
          ],
          path: "/thumb3.jpg",
        },
        {
          title: "title4",
          description: "desc4",
          screenshots: [
            {
              path: "/thumb4.jpg",
              ssdesc: "ssdesc4",
            },
            {
              path: "/thumb2.jpg",
              ssdesc: "ssdesc2",
            },
            {
              path: "/thumb3.jpg",
              ssdesc: "ssdesc3",
            },
            {
              path: "/thumb1.jpg",
              ssdesc: "ssdesc1",
            },
          ],
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title4",
          description: "desc4",
          screenshots: [
            {
              path: "/thumb3.jpg",
              ssdesc: "ssdesc3",
            },
            {
              path: "/thumb2.jpg",
              ssdesc: "ssdesc2",
            },
            {
              path: "/thumb1.jpg",
              ssdesc: "ssdesc1",
            },
            {
              path: "/thumb4.jpg",
              ssdesc: "ssdesc4",
            },
          ],
          path: "/thumb4.jpg",
        },
        {
          title: "title1",
          description: "desc1",
          screenshots: [
            {
              path: "/thumb2.jpg",
              ssdesc: "ssdesc2",
            },
            {
              path: "/thumb4.jpg",
              ssdesc: "ssdesc4",
            },
            {
              path: "/thumb3.jpg",
              ssdesc: "ssdesc3",
            },
            {
              path: "/thumb1.jpg",
              ssdesc: "ssdesc1",
            },
          ],
          path: "/thumb1.jpg",
        },
        {
          title: "title2",
          description: "desc2",
          screenshots: [
            {
              path: "/thumb2.jpg",
              ssdesc: "ssdesc2",
            },
            {
              path: "/thumb4.jpg",
              ssdesc: "ssdesc4",
            },
            {
              path: "/thumb3.jpg",
              ssdesc: "ssdesc3",
            },
            {
              path: "/thumb1.jpg",
              ssdesc: "ssdesc1",
            },
          ],
          path: "/thumb2.jpg",
        },
        {
          title: "title3",
          description: "desc3",
          screenshots: [
            {
              path: "/thumb2.jpg",
              ssdesc: "ssdesc2",
            },
            {
              path: "/thumb3.jpg",
              ssdesc: "ssdesc3",
            },
            {
              path: "/thumb1.jpg",
              ssdesc: "ssdesc1",
            },
            {
              path: "/thumb4.jpg",
              ssdesc: "ssdesc4",
            },
          ],
          path: "/thumb3.jpg",
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

// icons
import { BsArrowRight } from "react-icons/bs";

//next image
import Image from "next/image";

const WorkSlider = ({ handleImageClick }) => {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex} className="">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => (
                <div
                  className="relative rounded-lg overflow-hidden flex 
                items-center justify-center group"
                  key={imageIndex}
                  onClick={() =>
                    handleImageClick(
                      image.title,
                      image.description,
                      image.screenshots
                    )
                  }
                >
                  <div
                    className="flex items-center justify-center relative
                  overflow-hidden group"
                  >
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt="" />
                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l
                    from-transparent via-[#00e5ff] to-primary/30 opacity-0 
                    group-hover:opacity-80 transition-all duration-700"
                    ></div>
                    {/* title */}
                    <div
                      className="absolute bottom-0 translate-y-full 
                    group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                    transition-all duration-300"
                    >
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">VIEW</div>
                        {/* title part 2 */}
                        <div
                          className="translate-y-[500%] group-hover:translate-y-0 
                        transition-all duration-300 delay-150"
                        >
                          DETAILS
                        </div>
                        {/* icon */}
                        <div
                          className="text-xl translate-y-[500%]
                        group-hover:translate-y-0 transition-all duration-300 delay-200"
                        >
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
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

export default WorkSlider;
