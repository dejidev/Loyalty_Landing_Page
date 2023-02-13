import React, { useRef } from "react";
import logo from "../assests/logo.png";
import vectorlogo from "../assests/Vectorlogo.png";

const Navbar = ({scroll}) => {

  return (
    <nav className="flex justify-between items-center pt-4 md:pt-8">
      <div className="text-white flex items-center md:text-5xl text-2xl">
        <span>I</span>
        <span className="relative">
          <img src={logo} alt="love" className="" />
          <img src={vectorlogo} alt="pin" className="absolute mid" />
        </span>
        <span>yalbaze</span>
      </div>
      <div>
        <button
          onClick={scroll}
          className="text-white border px-2 py-2 rounded-full text-[8px] md:text-sm lg:text:lg "
        >
          Get Priority Access
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
