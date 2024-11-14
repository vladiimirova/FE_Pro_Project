import React from "react";
import { Link } from "react-router-dom";

function MainLeftInf() {
  return (
    <div>
      <h2 className="font-roboto font-bold text-black text-[40px] leading-none">Конвертер валют</h2>
      <p className="font-roboto font-normal  text-gray text-[20px] leading-none  w-[379px] mt-[27px]">Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
      <Link
        to="/"
        className="bg-[#2C36F2] text-white font-roboto font-medium font-normal text-[16px] hover:bg-[#1E90FF] rounded-[4px] bg-[#F6F7FF] w-[234px] h-[53px] inline-flex items-center justify-center text-center mt-[29px]"
      >
        Конвертувати валюту
      </Link>
    </div>
  );
}

export default MainLeftInf;