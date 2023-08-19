import Image from "next/image";


export default function Header() {
  return (
    <nav className="text-center p-[20px] md:flex md:justify-between md:items-center md:px-[40px]">
        <p className="text-[36px] mb-[20px] md:mb-[0px]">Idris Elijah</p>
        <button className="primary-button w-[280px] h-[45px]">
            <Image 
                src='/assets/right-arrow.png'
                alt='right arrow'
                width={19}
                height={16}
            />
            Get Your Marketing Blueprint
        </button>
    </nav>
  )
}
