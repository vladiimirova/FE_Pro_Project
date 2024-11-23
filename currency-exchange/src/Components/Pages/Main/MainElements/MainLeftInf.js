import React from "react";
import Btn from "../../../TempBtn/Btn.js";

function MainLeftInf() {
  return (
    <div>
      <h2 className="font-roboto font-bold text-black text-[40px] leading-140">
        Конвертер валют
      </h2>
      <p className="font-roboto font-normal  text-gray text-[20px] leading-none  w-[379px] mt-[27px]">
        Переважна діяльність банківської групи за останні чотири звітні квартали
        становить 50 і більше відсотків.
      </p>

      <Btn
        className={"text-custom-light-blue bg-[#2C36F2] hover:bg-[#1E90FF]"}
        to={"/converter"}
        text={"Конвертувати валюту"}
      />
    </div>
  );
}

export default MainLeftInf;
