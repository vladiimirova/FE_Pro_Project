import React from "react";
import { DateInputProps } from '../../../../Interfaces/Interfaces';

function DateInput({ id, register, error, onChange }: DateInputProps) {
  return (
    <div>
      <div className="relative w-[220px]">
        <input
         data-testid={id}
          id={id}
          type="date"
          {...register(id)} 
          className={`w-full h-[60px] border-[1px] border-solid border-gray-line text-[20px] font-roboto text-gray font-medium flex justify-start pl-[20px] ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-[4px] focus:outline-none focus:ring-2 ${
            error ? "focus:ring-red-400" : "focus:ring-blue-400"
          } text-center custom-calendar-icon`}
          onChange={onChange}
        />
        <span className="absolute right-[17px] top-[50%] transform -translate-y-1/2 pointer-events-none">
          <img
            src="./icons/calendar.svg"
            alt="calendar"
            className="w-[20px] h-[20px]"
          />
        </span>
      </div>
       <div className="text-red-500 text-sm mt-1 h-[16px] leading-[16px]">
        {error?.message || '\u00A0'}
      </div>
    </div>
  );
}

export default DateInput;
