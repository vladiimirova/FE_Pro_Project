import React from "react";
import Btn from '../../../../TempBtn/Btn';
import { HistoryTitleProps } from '../../../../Interfaces/Interfaces';

function HistoryTitle({ onClear }: HistoryTitleProps): JSX.Element {
  return (
    <div className="flex justify-between items-center">
      <h2 className="block font-roboto font-medium text-[#1F1E3F] text-[28px] leading-140">
        Історія конвертації
      </h2>
      <Btn
        className="text-custom-light-blue bg-[#2C36F2] hover:bg-[#1E90FF] w-[187px] h-[51px] m-0"
        to=""
        onClick={onClear}
        text="Очистити історію"
      />
    </div>
  );
}

export default HistoryTitle;
