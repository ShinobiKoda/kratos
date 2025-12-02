"use client";
import { inter } from "@/lib/font";
import { FaHeart } from "react-icons/fa";
import { SavedListings } from "@/components/SavedListings";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full px-4 xl:px-[82px] mt-8 max-w-[1440px] mx-auto">
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

      <section className="w-full max-w-[1440px] mx-auto mt-[37px] px-4 xl:px-[82px] md:grid grid-cols-[3fr_1fr] gap-6">
        <div>
          <div className="w-full space-y-[9px]">
            <h2
              className={`${inter.variable} flex items-center gap-1 text-(--dark-green)`}
            >
              <FaHeart />{" "}
              <span className="font-medium text-xl">Saved Listings</span>
            </h2>
            <div className="h-0.5 bg-[#2A9821]"></div>
          </div>

          <div className="mt-[25px]">
            <SavedListings />
          </div>
        </div>

        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat hidden md:block rounded-[14px]"
          style={{
            backgroundImage: "url('/images/saved-listings-aside.svg')",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Homepage;
