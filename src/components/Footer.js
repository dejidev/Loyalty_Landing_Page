import React from "react";


const Footer = () => {
  return (
    <div className="py-8 text-[#FCFCFC]">
      <hr className="text-[1px] py-2" />
      <div className="md:flex justify-between ">
        <div className=" w-2/3 md:w-1/4 pb-4">
          <p>
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>
        <p className="md:w-1/4 text-bold pb-4">Loyalbaze is almost here.</p>
        <div className="w-1/4 pb-4">
          <p>+2349036189485</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
