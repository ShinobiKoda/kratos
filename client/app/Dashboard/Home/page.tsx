"use client";
import { inter } from "@/lib/font";
import { FaHeart } from "react-icons/fa";
import { CarouselCard } from "@/components/Carousel";



const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className=" px-4 xl:px-[82px] mt-8">
        <div
          style={{ backgroundImage: "url('/images/hero-img-mobile.svg')" }}
          className="w-full h-[164px] md:h-[300px] xl:h-[439px] pl-[13px] relative bg-cover bg-no-repeat bg-center rounded-[10px]"
        >
          <h1 className="font-semibold text-[26px] leading-7 text-white shadow-md absolute bottom-[35px]">
            Welcome Back, <br />
            Chiamaka
          </h1>
        </div>
      </div>

      <section className="w-full mt-[37px] px-4 xl:px-[82px]">
        <div className="w-full space-y-[9px]">
          <h2 className={`${inter.variable} flex items-center gap-1 text-(--dark-green)`}>
            <FaHeart /> <span className="font-medium text-xl">Saved Listings</span>
          </h2>
          <div className="h-0.5 bg-[#2A9821]"></div>
        </div>

        <div className="mt-[25px]">
          <CarouselCard/>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
