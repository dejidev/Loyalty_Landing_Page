import React, { forwardRef } from "react";
import zig from "../assests/zig.png";
import bg from "../assests/bg.png";
import "../styles/priority.css";

const Priority = (ref) => {
  return (
    <div
      
      className="text-[#FCFCFC] lg:flex justify-center items-center py-8 lg:py-12 relative"
    >
      <img src={bg} alt="bg" className="absolute pos " />
      <div className="pb-12 lg:w-1/2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-6xl ">Priority Access</h1>
          <img src={zig} alt="zig" className="" />
        </div>

        <p className=" md:text-lg lg:pr-4" >
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
        </p>
      </div>

      <form
        action="post"
        className="py-8 px-8 lg:px-12  rounded-lg md:w-2/3 lg:w-1/2 m-auto   bg-[#1D2939]"
      >
        <h2 className="text-lg py-4 pl-[10px]">Book a Consultation with us</h2>
        <input
          type="text"
          placeholder="Enter your full name"
          className=" py-2 my-3 lg:my-4 rounded-lg border-[#FCFCFC] placeholder:-p-2  bg-[#1D2939]"
        />
        <input
          type="text"
          placeholder="Enter your work email"
          className=" py-2 my-3 lg:my-4 rounded-lg border-[#FCFCFC] placeholder:-p-2   bg-[#1D2939]"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="py-2 my-3 lg:my-4 rounded-lg border-[#FCFCFC] placeholder:-p-2   bg-[#1D2939]"
        />
        <input
          type="text"
          placeholder="Company`s Name"
          className=" py-2 my-3 lg:my-4 rounded-lg border-[#FCFCFC] placeholder:-p-2   bg-[#1D2939]"
        />
        <select
          name="country"
          id="country"
          placeholder="Country"
          className="w-full py-3 my-3 lg:my-4 rounded-lg text-[#9CA3AF]   bg-[#1D2939]"
        >
          <option value="Nigeria">Nigeria</option>
          <option value="Canada">Canada</option>
          <option value="Argentina">Argentina</option>
          <option value="France">France</option>
        </select>
        <textarea
          name="message"
          id=""
          placeholder="Drop a message"
          className="w-full py-2 my-3 rounded-lg border-[0.5px] border-[#FCFCFC]   bg-[#1D2939]"
        ></textarea>

        <div className="form-input py-2 sub">
          <button type="submit">Send Request</button>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(Priority);
