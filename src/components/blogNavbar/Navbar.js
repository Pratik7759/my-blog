import React from "react";
import Heading from "../heading/Heading";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full border-b-2 bg-gradient-to-r from-[#8DD5E4] via-[#86A8E7] to-[#818CDB] mt-0 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-3 max-w-[1200px] mx-auto">
        <Heading />
        <button className="text-white text-base font-semibold bg-[#5160d2] px-5 pb-2 pt-1 align-middle rounded-lg md:mt-0 mt-4 md:max-w-max w-full shadow-xl hover:bg-[#783180]">
          Add New Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
