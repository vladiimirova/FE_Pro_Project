import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CurrencyInput from './FormComp/CurrencyInput';
import DateInput from './FormComp/DateInput';
import { format } from 'date-fns';

// Текущая дата
const today = format(new Date(), 'yyyy-MM-dd');

// Схема валидации данных формы с использованием Zod
const schemaConverter = z.object({
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
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Неправильний формат дати',
    })
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7); // 7 дней назад

      return selectedDate >= sevenDaysAgo && selectedDate <= today;
    }, {
      message: 'Дата повинна бути в межах сьогоднішнього дня і 7 днів назад',
    }),
});

// Интерфейс для данных формы
interface FormData {
  haveMoney: string;
  wantMoney: string;
  fromCurrency: 'UAH' | 'USD' | 'EUR' | 'GBP';
  toCurrency: 'UAH' | 'USD' | 'EUR' | 'GBP';
  date: string;
}

// Интерфейс для пропсов компонента
interface ConverterCalculatorProps {
  addToHistory: (newRecord: any) => void;
}

function ConverterCalculator({ addToHistory }: ConverterCalculatorProps) {
  // Настройка формы с использованием react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemaConverter), // Использование схемы валидации Zod
    defaultValues: {
      date: today,
      fromCurrency: 'UAH',
      toCurrency: 'USD',
    },
  });

const currencies = ['USD', 'UAH', 'EUR', 'GBP'];

  const [currencyFrom, setCurrencyFrom] = useState('UAH'); // Валюта, из которой конвертируем
  const [currencyTo, setCurrencyTo] = useState('USD'); // Валюта, в которую конвертируем

  // Состояние для выбранной даты
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Состояния для ввода значений и ошибок валидации
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromError, setFromError] = useState<string | null>(null); // Можно задать состояние как string | null
const [toError, setToError] = useState<string | null>(null); // Можно задать состояние как string | null


  // Текущий курс валют и история конверсий
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const validateDate = (date: string): boolean => {
    const selectedDate = new Date(date);
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7); // 7 дней назад
  
    return selectedDate >= sevenDaysAgo && selectedDate <= today;
  };

  // Функция для получения курса валют
  const fetchExchangeRate = async (
    fromCurrency: string,
    toCurrency: string,
    date: string
  ) => {
    if (!validateDate(date)) {
      console.error('Дата должна быть в пределах сегодняшнего дня и 7 дней назад');
      return; // Прерываем выполнение функции, если дата невалидна
    }
    
    const formattedDate = format(new Date(date), 'dd.MM.yyyy');
  
    // Формируем уникальный ключ с учетом fromCurrency и toCurrency
    const cacheKey = `exchangeRate_${fromCurrency}_${toCurrency}_${formattedDate}`;
  
    // Проверяем данные в localStorage
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      console.log(`Используем кэшированные данные для валюты ${fromCurrency} в ${toCurrency} на ${formattedDate}`);
      setExchangeRate(parsedData.rate);
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:8080/https://api.privatbank.ua/p24api/exchange_rates?json&date=${formattedDate}`
      );
  
      if (!response.ok) {
        console.error('Ошибка при получении данных:', response.statusText);
        setExchangeRate(null);
        return;
      }
  
      const data = await response.json();
      let rate = null;
  
      // Если обмен происходит с или на гривну
      if (fromCurrency === 'UAH' || toCurrency === 'UAH') {
        const fromRate = data.exchangeRate.find(
          (rate: { currency: string }) => rate.currency === (fromCurrency === 'UAH' ? toCurrency : fromCurrency)
        );
  
        if (fromRate?.saleRate) {
          rate = fromRate.saleRate;
        } else {
          console.error('Курс для выбранной валюты не найден.');
          setExchangeRate(null);
          return;
        }
      } else {
        // Если обе валюты не гривна, то рассчитываем курс через гривну
        const fromCurrencyRate = data.exchangeRate.find(
          (rate: { currency: string }) => rate.currency === fromCurrency
        );
        const toCurrencyRate = data.exchangeRate.find(
          (rate: { currency: string }) => rate.currency === toCurrency
        );
  
        if (fromCurrencyRate?.saleRate && toCurrencyRate?.saleRate) {
          rate = toCurrencyRate.saleRate / fromCurrencyRate.saleRate;
        } else {
          console.error('Не удалось найти курсы для одной из валют.');
          setExchangeRate(null);
          return;
        }
      }
  
      // Устанавливаем найденный курс
      setExchangeRate(rate);
  
      // Сохраняем курс в localStorage
      localStorage.setItem(cacheKey, JSON.stringify({ rate }));
      console.log(`Данные для ${formattedDate} сохранены в localStorage.`);
    } catch (error) {
      console.error('Ошибка при запросе курса валют:', error);
      setExchangeRate(null);
    }
  };
  
  const isCacheValid = (date: string): boolean => {
    const lastFetchedDate = localStorage.getItem('lastFetchedDate');
    if (!lastFetchedDate) return false;

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return new Date(lastFetchedDate) >= sevenDaysAgo;
  };

  // Обновляем курс валют при изменении валюты или даты
  useEffect(() => {
    cleanOldCache(); // Очищаем старые кэшированные данные при монтировании компонента
  }, []); // Пустой массив зависимостей, чтобы выполнить это только один раз
  
  // Проверка валидности кэша для использования
useEffect(() => {
  // Если данных нет в localStorage, запрашиваем новые
  if (!isCacheValid(selectedDate.toISOString())) {
    console.log('Данные устарели или их нет. Запрашиваем новые...');
    fetchExchangeRate(currencyFrom, currencyTo, selectedDate.toISOString());
    localStorage.setItem('lastFetchedDate', new Date().toISOString());
  } else {
    console.log('Используем кэшированные данные.');
    const cachedData = localStorage.getItem(`exchangeRate_${selectedDate.toISOString()}`);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setExchangeRate(parsedData.rate);
    }
  }
}, [currencyFrom, currencyTo, selectedDate]);

  
  // Функция для очистки старых данных
  const cleanOldCache = () => {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const keysToRemove: string[] = [];
  
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('exchangeRate_')) {
        const dateStr = key.replace('exchangeRate_', '');
        if (new Date(dateStr) < sevenDaysAgo) {
          keysToRemove.push(key);
        }
      }
    });
  
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    console.log('Старые данные очищены:', keysToRemove);
  };

  // Обработчик изменения валюты и суммы
  const handleCurrencyFromChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCurrencyFrom(e.target.value);
    if (e.target.value === currencyTo) {
      const availableCurrencies = currencies.filter(
        (c: React.SetStateAction<string>) => c !== e.target.value
      );
      setCurrencyTo(availableCurrencies[0]);
    }
  };

  const handleCurrencyToChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCurrencyTo(e.target.value);
    if (e.target.value === currencyFrom) {
      const availableCurrencies = currencies.filter(
        (c: React.SetStateAction<string>) => c !== e.target.value
      );
      setCurrencyFrom(availableCurrencies[0]);
    }
  };

  const handleFromChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
  
    try {
      // Преобразование строки в число внутри схемы
      schemaConverter.shape.haveMoney.parse(inputValue);
      setFromError(''); // Если ошибка, сбрасываем ошибку
    } catch (err) {
      if (err instanceof z.ZodError) {
        setFromError(err.errors[0].message); // Если ошибка валидации
        setToValue(''); // Очищаем поле назначения
        return; // Прерываем дальнейшую обработку
      }
    }
  
    setFromValue(inputValue);
  
    // Если валидный ввод и есть курс, пересчитываем
    if (exchangeRate && inputValue.trim() !== '') {
      const parsedValue = parseFloat(inputValue);
  
      // Логика направления конверсии
      let convertedValue: string;
      if (currencyFrom === 'UAH') {
        // Гривна -> другая валюта: деление
        convertedValue = (parsedValue / exchangeRate).toFixed(2);
      } else if (currencyTo === 'UAH') {
        // Другая валюта -> гривна: умножение
        convertedValue = (parsedValue * exchangeRate).toFixed(2);
      } else {
        // Валюта -> Валюта: пересчет через гривну
        convertedValue = (parsedValue / exchangeRate).toFixed(2);
      }
  
      setToValue(convertedValue); // Устанавливаем значение назначения
    } else {
      setToValue(''); // Если ввода нет или курс не задан
    }
  };
  
  const handleToChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
  
    try {
      // Преобразование строки в число внутри схемы
      schemaConverter.shape.wantMoney.parse(inputValue);
      setToError(''); // Если ошибка, сбрасываем ошибку
    } catch (err) {
      if (err instanceof z.ZodError) {
        setToError(err.errors[0].message); // Если ошибка валидации
        setFromValue(''); // Очищаем поле источника
        return; // Прерываем дальнейшую обработку
      }
    }
  
    setToValue(inputValue);
  
    // Если валидный ввод и есть курс, пересчитываем
    if (exchangeRate && inputValue.trim() !== '') {
      const parsedValue = parseFloat(inputValue);
  
      // Логика направления конверсии
      let convertedValue: string;
      if (currencyFrom === 'UAH') {
        // Гривна -> другая валюта: умножение
        convertedValue = (parsedValue * exchangeRate).toFixed(2);
      } else if (currencyTo === 'UAH') {
        // Другая валюта -> гривна: деление
        convertedValue = (parsedValue / exchangeRate).toFixed(2);
      } else {
        // Валюта -> Валюта: пересчет через гривну
        convertedValue = (parsedValue * exchangeRate).toFixed(2);
      }
  
      setFromValue(convertedValue); // Устанавливаем значение источника
    } else {
      setFromValue(''); // Если ввода нет или курс не задан
    }
  };
  

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSelectedDate(new Date(newDate)); // Обновляем состояние даты
  };
  
  useEffect(() => {
    if (selectedDate) {
      fetchExchangeRate(currencyFrom, currencyTo, selectedDate.toISOString());
    }
  }, [selectedDate, currencyFrom, currencyTo]);

  // Обработчик отправки формы
  function onSubmit(data: FormData) {
    console.log('Форма отправлена:', data);
    alert('Валюта конвертована!');

    addToHistory({
      date: data.date,
      haveMoney: data.haveMoney,
      wantMoney: data.wantMoney,
      fromCurrency: data.fromCurrency,
      toCurrency: data.toCurrency,
    });
  }

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
                currencyId="fromCurrency"
                label="В мене є:"
                placeholder="1000"
                register={register}
                error={errors}
                currencies={currencies}
                currencyValue={currencyFrom}
                value={fromValue}
                onChange={handleFromChange}
                onChangeCurrency={handleCurrencyFromChange}
              />
              <DateInput id="date" register={register} error={errors.date}  onChange={handleDateChange} />
            </div>
            <img src="./icons/arrows.svg" className="arrows" alt="arrows" />
            <div>
              <CurrencyInput
                id="wantMoney"
                currencyId="toCurrency"
                label="Хочу придбати:"
                register={register}
                placeholder="38.7"
                error={errors}
                currencies={currencies}
                currencyValue={currencyTo}
                value={toValue}
                onChange={handleToChange}
                onChangeCurrency={handleCurrencyToChange}
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

