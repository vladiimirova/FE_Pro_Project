import React from "react";
import { Link } from "react-router-dom";

function CardLeftInf() {
  return (
    <div className="">
      <h1 className="font-roboto font-bold text-white text-[54px] leading-none">Чіп Чендж</h1>
      <p className="font-roboto font-medium text-gray-light text-[20px] leading-none mt-[25px]">Обмінник валют - навчальний</p>
      <Link
        to="/"
        className="text-gray font-roboto font-medium font-normal text-[16px] hover:text-hover rounded-[4px] bg-[#F6F7FF] w-[234px] h-[53px] inline-flex items-center justify-center text-center mt-[29px]"
      >
        Конвертер валют
      </Link>
    </div>
  );
}

export default CardLeftInf;
