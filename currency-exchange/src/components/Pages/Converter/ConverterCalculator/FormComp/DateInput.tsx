import React from "react";

interface DateInputProps {
  id: string;
  register: any; // Типізуємо `register`
  error: { message?: string } | undefined; // Змінюємо тип на optional `message`
}

function DateInput({ id, register, error }: DateInputProps) {
  return (
    <div>
      <div className="relative mt-[24px] w-[220px]">
        <input
          id={id}
          type="date"
          {...register(id)} // Використовуємо типізований register
          className={`w-full h-[60px] border-[1px] border-solid border-gray-line text-[20px] font-roboto text-gray font-medium flex justify-start pl-[20px] ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-[4px] focus:outline-none focus:ring-2 ${
            error ? "focus:ring-red-400" : "focus:ring-blue-400"
          } text-center custom-calendar-icon`}
        />
        <span className="absolute right-[17px] top-[50%] transform -translate-y-1/2 pointer-events-none">
          <img
            src="./icons/calendar.svg"
            alt="calendar"
            className="w-[20px] h-[20px]"
          />
        </span>
      </div>
      {/* Перевірка на наявність повідомлення про помилку */}
      {error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default DateInput;