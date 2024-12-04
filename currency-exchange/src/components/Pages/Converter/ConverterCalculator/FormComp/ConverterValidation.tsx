import { z } from 'zod';

export const schemaConverter = z.object({
  haveMoney: z
    .string()
    .nonempty("Це поле обов'язкове")
    .transform((input) => parseFloat(input))
    .refine((value) => value > 0, 'Значення повинно бути позитивним'),

  wantMoney: z
    .string()
    .nonempty("Це поле обов'язкове")
    .transform((input) => parseFloat(input))
    .refine((value) => value > 0, 'Значення повинно бути позитивним'),

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
