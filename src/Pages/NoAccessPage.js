import React from "react";
import image from "../constants/void.png";

const NoAccessPage = () => {
  return (
    <div className="flex flex-col  w-full  h-[100vh] justify-center items-center bg-[#fff]">
      <img src={image} alt="void" className=" w-72 h-80" />
      {/* <div className=" mx-10 flex-wrap items-center justify-center md:w-80">
        <p className=" text-md sm:text-lg md:text-2xl text-center">
          Sorry, no access.
        </p>
      </div> */}
    </div>
  );
};

export default NoAccessPage;
