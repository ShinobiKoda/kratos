"use client"

import Image from "next/image";
import { useSidebar } from "@/components/ui/sidebar"
import { Search } from "lucide-react";

const Navbar = () => {
  const {toggleSidebar} = useSidebar();

  return (
    <nav className="w-full pt-7  px-4 md:px-[82px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="/images/radar-icon.svg"
            alt="Room Radar Icon"
            width={35}
            height={46}
            className="h-8 w-8"
          />
          <p className="font-semibold text-xl md:text-[28px] text-[#00FF11]">RoomRadar</p>
        </div>

        <div className="flex items-center gap-4">
          <Search />
          <button onClick={()=>toggleSidebar()} className="w-5 h-4 flex flex-col justify-between">
            <span className="h-0.5 bg-black w-full"></span>
            <span className="h-0.5 bg-black w-full"></span>
            <span className="h-0.5 bg-black w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
