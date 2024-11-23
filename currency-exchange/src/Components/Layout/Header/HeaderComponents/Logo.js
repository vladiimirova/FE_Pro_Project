import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="flex justify-center items-center ml-[40px] gap-[12px]">
        <img src="./icons/logo.svg" className="header-logo" alt="header-logo" />
        <p className="text-black font-work-sans text-[20px] font-bold">Чіп Чендж</p>
      </Link>
    </div>
  );
}

export default Logo;
