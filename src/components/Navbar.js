import React, { useState } from "react";
// import { Link } from "react-scroll";
import logo from "../assests/logo.png";
import vectorlogo from "../assests/Vectorlogo.png";

const Navbar = ({ handleClick }) => {
  return (
    <nav className="flex justify-between items-center pt-4 md:pt-8">
      <div className="text-[#fff] flex items-center md:text-5xl text-2xl">
        <span>I</span>
        <span className="relative">
          <img src={logo} alt="love" className="" />
          <img src={vectorlogo} alt="pin" className="absolute mid" />
        </span>
        <span>yalbaze</span>
      </div>
      <div className="rounded-lg ">
        <div className=" rounded-full gr ">
          <button
            onClick={handleClick}
            className="text-[#fff] border-none bg-[#121B27] px-4 py-2 rounded-full text-[8px] md:text-sm lg:text:lg m-[1px]"
          >
            Get Priority Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
