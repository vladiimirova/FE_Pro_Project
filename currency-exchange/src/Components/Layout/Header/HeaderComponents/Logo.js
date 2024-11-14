import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="flex justify-center items-center ml-[40px] gap-[12px]">
             <img src='./icons/logo.svg' className="header-logo" alt="header-logo" />
               <Link to="/" className="text-black font-work-sans text-[20px] font-bold">Чіп Чендж</Link> 
        </div>
    );
}

export default Logo;