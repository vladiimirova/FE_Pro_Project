import { z } from 'zod';

export const schemaConverter = z.object({
  haveMoney: z
  .string()
  .refine((val) => /^[0-9]*\.?[0-9]*$/.test(val.trim()), { message: 'Введіть лише цифри та крапку' }) 
  .refine((val) => val !== '', { message: 'Це поле обов\'язкове' })
  .transform((input) => parseFloat(input))
  .refine((value) => !isNaN(value) && value >= 0, { message: 'Значення повинно бути позитивним' }),

wantMoney: z
  .string()
  .refine((val) => /^[0-9]*\.?[0-9]*$/.test(val.trim()), { message: 'Введіть лише цифри та крапку' }) 
  .refine((val) => val !== '', { message: 'Це поле обов\'язкове' })
  .transform((input) => parseFloat(input))
  .refine((value) => !isNaN(value) && value >= 0, { message: 'Значення повинно бути позитивним' }),

  date: z
    .string()
    .nonempty('Оберіть дату')
    .refine(
      (date) => !isNaN(Date.parse(date)),
      { message: 'Неправильний формат дати' }
    )
    .refine(
      (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        return selectedDate >= sevenDaysAgo && selectedDate <= today;
      },
      { message: 'Дата повинна бути в межах сьогоднішнього дня і 7 днів назад' }
    ),
});
