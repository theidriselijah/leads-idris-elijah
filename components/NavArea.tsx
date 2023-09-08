import Image from "next/image";
import { Link } from "react-scroll";


export default function NavArea() {
  return (
    <nav className="text-center p-[20px] md:flex md:justify-between md:items-center md:px-[40px] lg:mx-auto lg:max-w-6xl">
        <p className="text-[36px] font-bold mb-[20px] md:mb-[0px]">
          Idris Elijah
        </p>
        <div className="flex justify-center items-center">
          <Link to="blueprint" smooth={true} duration={2000}>
            <button className="primary-button w-[280px] h-[45px]">
              <Image
                src="/assets/right-arrow.webp"
                alt="right arrow"
                width={19}
                height={16}
              />
              Get Your Marketing Blueprint
            </button>
          </Link>
        </div>
      </nav>
  )
}
