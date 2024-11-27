import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CurrencyInput from "./FormComp/CurrencyInput";
import DateInput from "./FormComp/DateInput";
import { format } from "date-fns"; // Библиотека для работы с датами

const today = format(new Date(), "yyyy-MM-dd"); // Текущая дата в формате yyyy-MM-dd

const schemaConverter = z.object({
  haveMoney: z
    .string()
    .nonempty("Це поле обов'язкове")
    .regex(/^\d+(\.\d{1,2})?$/, "Введіть дійсне числове значення"),
  wantMoney: z
    .string()
    .nonempty("Це поле обов'язкове")
    .regex(/^\d+(\.\d{1,2})?$/, "Введіть дійсне числове значення"),
  date: z
    .string()
    .nonempty("Оберіть дату")
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Неправильний формат дати",
    }),
});

interface FormData {
  haveMoney: string;
  wantMoney: string;
  fromCurrency: "UAH" | "USD" | "EUR" | "GBP";
  toCurrency: "UAH" | "USD" | "EUR" | "GBP";
  date: string;
}

function ConverterCalculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemaConverter),
    defaultValues: {
      date: today, // Устанавливаем текущую дату как значение по умолчанию
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Форма отправлена:", data);
    alert("Валюта конвертована!");
  };

  return (
    <div className="bg-custom-light-blue flex justify-center">
      <div className="container">
        <div className="mx-auto mt-[80px] mb-[80px] pt-[53px] pb-[55px] pl-[48px] pr-[68px] bg-white shadow w-[962px]">
          <h2 className="font-roboto font-bold text-black text-[40px] leading-140 mb-[70px]">
            Конвертер валют
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">
            <div>
              <CurrencyInput
                id="haveMoney"
                currencyId="fromCurrency"
                label="В мене є:"
                register={register}
                error={errors}
                currencies={["UAH", "USD", "EUR", "GBP"]}
              />
              <DateInput id="date" register={register} error={errors.date} />
            </div>
            <img src="./icons/arrows.svg" className="arrows" alt="arrows" />
            <div>
              <CurrencyInput
                id="wantMoney"
                currencyId="toCurrency"
                label="Хочу придбати:"
                register={register}
                error={errors}
                currencies={["USD", "UAH", "EUR", "GBP"]}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="font-roboto font-medium font-normal text-[18px] rounded-[4px] inline-flex items-center justify-center text-center mt-[24px] text-custom-light-blue bg-[#2C36F2] hover:bg-[#1E90FF] w-[220px] h-[60px]"
                >
                  Зберегти результат
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConverterCalculator;
