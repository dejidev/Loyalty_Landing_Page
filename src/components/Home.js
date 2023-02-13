import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "../styles/home.css";
import arrow from "../assests/arr.png";

const Home = ({toggleModal, inputName, inputEmail }) => {

  return (
    <article className="text-center text-[#FCFCFC]">
      <h1 className=" md:w-2/3 text-4xl md:text-6xl m-auto font-extrabold pt-8 pb-4">
        Turn your best customers into
        <span className="text-[#A75FD2]"> Loyal fans</span>
      </h1>

      <p className="md:text-lg lg:1/2 md:w-2/3 m-auto pb-8">
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
        programs to their customers. With our AI Powered platform, you can
        easily create and manage custom loyalty and rewards programs, track
        customer engagement, and gain valuable insights to improve your
        business. Sign up now to get early access.
      </p>

      <div className="form-outer">
        <div className="container">
          <form className="form ">
            <img src={arrow} alt="arrow" className="arr " />
            <div className="form-input ">
              <span className="icon">
                <BsPersonCircle className="text-[#FCFCFC]" />
              </span>
              <input
                type="name"
                name="name"
                ref={inputName}
                placeholder="Tell us your name"
                className="rounded-lg bg-[#121B27] border-[#FCFCFC] pa"
              />
            </div>
            <div className="form-input">
              <span className="icon">
                <FiMail className="text-gray-100" />
              </span>
              <input
                type="email"
                name="email"
                ref={inputEmail}
                placeholder="Enter your email address"
                className="rounded-lg bg-[#121B27] border-[#FCFCFC] pa"
              />
            </div>
            <div className="form-input py-2 sub">
              <button type="submit" onClick={toggleModal}>Get early access</button>
            </div>
            <div className="flex items-center justify-center pt-3 mb-20">
              <div className="box bg-[#175CE1] text-center">G</div>
              <div className="box bg-[#A75FD2]">O</div>
              <div className="box bg-[#175CE1]">U</div>
              <div className="box bg-[#A75FD2]">M</div>
              <p className="pl-6">+ 57 Joined</p>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Home;
