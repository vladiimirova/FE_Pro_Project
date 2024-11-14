import React from "react";
import { Link } from "react-router-dom";

function Cabinet() {
    return (
        <div className="flex justify-center items-center mr-[27px] gap-[15px]">
        <img src='./icons/door.svg' className="door" alt="door" />
        <Link to="/" className="text-black font-roboto font-normal text-[16px] hover:text-hover">Особистий кабінет</Link> 
   </div>
    );
}

export default Cabinet;