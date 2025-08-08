import React from "react";
import { GrHomeOption } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { MdWaterDrop } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <ul className="fixed z-100 bottom-0 flex justify-evenly sm:justify-start items-center font-bold gap-x-10 !pl-5 sm:!pl-7 md:!pl-10 sm:relative h-16 w-full text-[#f2e5e7] text-[1.5em] sm:text-[1.2em] md:text-[1em] bg-[#457f8d]">
        
        {/* Mobile icon + label */}
        <li className="sm:hidden flex flex-col items-center cursor-pointer hover:text-red-300 transition-all duration-200 ease-in-out">
          <GrHomeOption />
          <span className="text-xs">Home</span>
        </li>
        <li className="hidden sm:block cursor-pointer hover:text-red-300">HOME</li>

        <li className="sm:hidden flex flex-col items-center cursor-pointer hover:text-red-300 transition-all duration-200 ease-in-out">
          <IoGridOutline />
          <span className="text-xs">Categories</span>
        </li>
        <li className="hidden sm:block cursor-pointer hover:text-red-300">CATEGORIES</li>

        <li className="sm:hidden flex flex-col items-center cursor-pointer hover:text-red-300 transition-all duration-200 ease-in-out">
          <IoIosSearch />
          <span className="text-xs">Search</span>
        </li>
        <li className="hidden sm:block cursor-pointer hover:text-red-300">SEARCH</li>

        <li className="sm:hidden flex flex-col items-center cursor-pointer hover:text-red-300 transition-all duration-200 ease-in-out">
          <MdWaterDrop />
          <span className="text-xs">Venom Drops</span>
        </li>
        <li className="hidden sm:block cursor-pointer hover:text-green-300">VENOM DROPS</li>
      </ul>
    </>
  );
};

export default Navbar;
