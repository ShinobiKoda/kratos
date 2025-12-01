"use client"

import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="w-full px-4 xl:hidden mt-8">
      <div className="flex items-center rounded-[27px] shadow-[0px_4px_4px_0px_#00000040] py-2.5 px-4 gap-2">
        <Search size={31} color="#5B5B5B" className="font-light" />
        <input
          type="text"
          className="outline-none border-none w-full text-[17px] font-normal"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
