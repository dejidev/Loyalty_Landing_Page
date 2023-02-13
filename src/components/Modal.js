import React, { useState } from "react";
import "../styles/modal.css";
import mark from "../assests/mark.png";
import yes from "../assests/yes.png";

const Modal = ({ modal, toggleModal }) => {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      {modal && (
        <div className="modal ">
          <div onClick={toggleModal} className="overlay"></div>

          <div className="modal-content text-center bg-[#15141B]  px-4 py-8 w-4/5">
            <div className="relative flex items-center justify-center py-4">
              <img src={yes} alt="bg" className="" />
              <img src={mark} alt="mark" className="absolute mid mt-4" />
            </div>
            <h1 className="md:text-3xl text-xl text-[#fff] py-4">
              Congratulations
            </h1>
            <p className="grt pb-8">
              Great move! You're one step closer to getting your hands on the
              product. Please check your mail for more information.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
