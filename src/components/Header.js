import React from "react";

const Header = ({ text }) => {
  return (
    <div className="flex w-full justify-between items-center">
      <p className=" text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5810] to-[#ffad06] ">
        {text}
      </p>
    </div>
  );
};

export default Header;
