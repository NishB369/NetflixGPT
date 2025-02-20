import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3">
        <div className="text-white rounded-md font-semibold text-sm px-4 py-2 cursor-pointer bg-black/30 border border-white">
          <span className="text-white mr-2 text-sm bi bi-translate"></span>
          English
          <span className="text-white ml-2 text-sm bi bi-chevron-down"></span>
        </div>
        <div className="bg-[#E50914] text-white rounded-md font-semibold text-sm px-4 py-2 cursor-pointer">
          Sign in
        </div>
      </div>
    </div>
  );
};

export default Header;
