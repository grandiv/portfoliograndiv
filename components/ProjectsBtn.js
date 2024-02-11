// next image
import Image from "next/image";

//next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative max-sm:w-[40vw] max-sm:h-[40vw] w-[185px] h-[185px] flex justify-center items-center 
        bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-sm:w-[30vw] max-sm:h-[30vw] max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight
          className="absolute text-4xl max-sm:text-[7vw] group-hover:translate-x-2 
        transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
