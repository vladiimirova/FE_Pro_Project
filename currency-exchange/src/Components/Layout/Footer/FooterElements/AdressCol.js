import React from "react";
import { Link } from "react-router-dom";

function AdressCol() {
  return (
    <div className="ml-[41px]">
      <div className="flex  items-center gap-[11px]">
        <img src="./icons/logo.svg" className="header-logo" alt="header-logo" />
        <Link
          to="/"
          className="text-black font-work-sans text-[20px] font-bold"
        >
          Чіп Чендж
        </Link>
      </div>
      <p className="font-roboto font-normal  text-gray text-[12px] leading-140  mt-[18px] ">
        04128, м.Київ, вул. Хрещатик, 19 <br />
        Ліцензія НБУ №156 <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
      </p>
    </div>
  );
}

export default AdressCol;
