import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CurrencyInput from './FormComp/CurrencyInput.js';
import DateInput from './FormComp/DateInput.js';
import Btn from '../../../TempBtn/Btn.js';

const schemaConverter = z.object({
  haveMoney: z
    .string()
    .nonempty("Це поле обов'язкове")
    .regex(/^\d+(\.\d{1,2})?$/, 'Введіть дійсне числове значення'),
  currency: z.enum(['UAH', 'USD', 'EUR', 'GBP'], {
    errorMap: () => ({ message: 'Виберіть валюту' }),
  }),
  date: z
    .string()
    .nonempty('Оберіть дату')
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Неправильний формат дати',
    }),
});

function ConverterCalculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaConverter),
  });

  const onSubmit = (data) => {
    console.log('Форма отправлена:', data);
    alert('Валюта конвертована!');
  };

  return (
    <div className="bg-custom-light-blue flex justify-center">
      <div className="container">
        <div className="mx-auto mt-[80px] mb-[80px] pt-[53px] pb-[55px] pl-[48px] pr-[68px] bg-white shadow w-[962px]">
          <h2 className="font-roboto font-bold text-black text-[40px] leading-140 mb-[70px]">
            Конвертер валют
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-between"
          >
            <div>
              <CurrencyInput
                id="haveMoney"
                label="В мене є:"
                register={register}
                error={errors.haveMoney}
                currencies={['UAH', 'USD', 'EUR', 'GBP']}
              />

              <DateInput id="date" register={register} error={errors.date} />
            </div>
            <img src="./icons/arrows.svg" className="arrows" alt="arrows" />
            <div>
              <CurrencyInput
                id="wantMoney"
                label="Хочу придбати:"
                register={register}
                error={errors.haveMoney}
                currencies={['USD', 'UAH', 'EUR', 'GBP']}
              />

              <div className="flex justify-end">
                <Btn
                  className={
                    'text-custom-light-blue bg-[#2C36F2] hover:bg-[#1E90FF] w-[220px] h-[60px]'
                  }
                  text={'Зберегти результат'}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConverterCalculator;
