// imports
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 lg:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-4 lg:py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logograndiv.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
              className="w-24 h-6 lg:w-32 lg:h-8"
            />
          </Link>
          {/* CV button */}
          <Link
            href={"/Muhammad Grandiv Lava Putra_Curriculum-Vitae.pdf"}
            passHref
            className="border border-accent rounded-full px-3 py-1 text-xs lg:text-sm hover:bg-accent hover:text-white transition-all duration-300"
          >
            Download my CV
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
