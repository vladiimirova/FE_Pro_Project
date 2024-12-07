import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CurrencyInput from './FormComp/CurrencyInput';
import DateInput from './FormComp/DateInput';
import { format } from 'date-fns';
import { FormData, ConverterCalculatorProps } from '../../../Interfaces/Interfaces';
import { schemaConverter } from './FormComp/ConverterValidation';
import debounce from 'lodash/debounce';
import { useConverterStore } from '../../../Store/Store'; 

const today = format(new Date(), 'yyyy-MM-dd');

function ConverterCalculator({ addToHistory }: ConverterCalculatorProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schemaConverter),
    defaultValues: {
      date: today,
      fromCurrency: 'UAH',
      toCurrency: 'USD',
    },
  });


  const debouncedFetchExchangeRate = debounce(fetchExchangeRate, 500);
const debouncedHandleDateChange = debounce(handleDateChange, 500);


const currencies = ['USD', 'UAH', 'EUR', 'GBP', 'CNY'];

  const {
    currencyFrom, currencyTo, fromValue, toValue, exchangeRate, selectedDate,
    fromError, toError, setCurrencyFrom, setCurrencyTo, setFromValue, setToValue,
    setExchangeRate, setSelectedDate, setFromError, setToError
  } = useConverterStore(state => state);
  
  function validateDate(date: string): boolean {
    const selectedDate = new Date(date);
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7); 
  
    return selectedDate >= sevenDaysAgo && selectedDate <= today;
  }  

  async function fetchExchangeRate(fromCurrency: string, toCurrency: string, date: string) {
    if (!validateDate(date)) {
      console.error('Дата должна быть в пределах сегодняшнего дня и 7 дней назад');
      return;
    }
    
    const formattedDate = format(new Date(date), 'dd.MM.yyyy');
    const cacheKey = `exchangeRate_${fromCurrency}_${toCurrency}_${formattedDate}`;
    
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
    
      if (fromCurrency === 'UAH' || toCurrency === 'UAH') {
        const fromRate = data.exchangeRate.find(
          (rate: { currency: string }) => rate.currency === (fromCurrency === 'UAH' ? toCurrency : fromCurrency)
        );
    
        if (fromRate) {
          rate = fromRate.saleRate || fromRate.saleRateNB || null;
        }
        
        if (!rate) {
          console.error('Курс для выбранной валюты не найден.');
          setExchangeRate(null);
          return;
        }
      } else {
        const fromCurrencyRate = data.exchangeRate.find((rate: { currency: string }) => rate.currency === fromCurrency);
        const toCurrencyRate = data.exchangeRate.find((rate: { currency: string }) => rate.currency === toCurrency);
    
        if (fromCurrencyRate && toCurrencyRate) {
          const fromRate = fromCurrencyRate.saleRate || fromCurrencyRate.saleRateNB || null;
          const toRate = toCurrencyRate.saleRate || toCurrencyRate.saleRateNB || null;
    
          if (fromRate && toRate) {
            rate = toRate / fromRate;
          }
        }
    
        if (!rate) {
          console.error('Не удалось найти курсы для одной из валют.');
          setExchangeRate(null);
          return;
        }
      }
    
      setExchangeRate(rate);
      localStorage.setItem(cacheKey, JSON.stringify({ rate }));
      console.log(`Данные для ${formattedDate} сохранены в localStorage.`);
    } catch (error) {
      console.error('Ошибка при запросе курса валют:', error);
      setExchangeRate(null);
    }
  }
  
  function isCacheValid(date: string): boolean {
    const lastFetchedDate = localStorage.getItem('lastFetchedDate');
    if (!lastFetchedDate) return false;
  
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return new Date(lastFetchedDate) >= sevenDaysAgo;
  }  

  useEffect(() => {
    cleanOldCache(); 
  }, []);
  
  useEffect(function () {
    if (!isCacheValid(selectedDate.toISOString())) {
      console.log('Данные устарели или их нет. Запрашиваем новые...');
      debouncedFetchExchangeRate(currencyFrom, currencyTo, selectedDate.toISOString());
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

  function cleanOldCache() {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const keysToRemove: string[] = [];
  
    Object.keys(localStorage).forEach(function (key) {
      if (key.startsWith('exchangeRate_')) {
        const dateStr = key.replace('exchangeRate_', '');
        if (new Date(dateStr) < sevenDaysAgo) {
          keysToRemove.push(key);
        }
      }
    });
  
    keysToRemove.forEach(function (key) {
      localStorage.removeItem(key);
    });
  
    console.log('Старые данные очищены:', keysToRemove);
  }  

  function handleCurrencyFromChange(e: { target: { value: string } }) {
    setCurrencyFrom(e.target.value);
    if (e.target.value === currencyTo) {
      const availableCurrencies = currencies.filter(function (c: string) {
        return c !== e.target.value;
      });
      setCurrencyTo(availableCurrencies[0]);
    }
  }
  
  function handleCurrencyToChange(e: { target: { value: string } }) {
    setCurrencyTo(e.target.value);
    if (e.target.value === currencyFrom) {
      const availableCurrencies = currencies.filter(function (c: string) {
        return c !== e.target.value;
      });
      setCurrencyFrom(availableCurrencies[0]);
    }
  }  

  function handleFromChange(e: { target: { value: string } }) {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setFromValue('');
      setToValue('');
      setFromError('');
      return;
    }
  
    try {
      schemaConverter.shape.haveMoney.parse(inputValue);
      setFromError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setFromError(err.errors[0].message);
        setToValue('');
        return;
      }
    }
  
    setFromValue(inputValue);
  
    if (exchangeRate && inputValue.trim() !== '') {
      const parsedValue = parseFloat(inputValue);
  
      let convertedValue: string;
      if (currencyFrom === 'UAH') {
        convertedValue = (parsedValue / exchangeRate).toFixed(2);
      } else if (currencyTo === 'UAH') {
        convertedValue = (parsedValue * exchangeRate).toFixed(2);
      } else {
        convertedValue = (parsedValue / exchangeRate).toFixed(2);
      }
  
      setToValue(convertedValue);
    } else {
      setToValue('');
    }
  }
  
  function handleToChange(e: { target: { value: string } }) {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setToValue('');
      setFromValue('');
      setToError('');
      return;
    }
  
    try {
      schemaConverter.shape.wantMoney.parse(inputValue);
      setToError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setToError(err.errors[0].message);
        setFromValue('');
        return;
      }
    }
  
    setToValue(inputValue);
  
    if (exchangeRate && inputValue.trim() !== '') {
      const parsedValue = parseFloat(inputValue);
  
      let convertedValue: string;
      if (currencyFrom === 'UAH') {
        convertedValue = (parsedValue * exchangeRate).toFixed(2);
      } else if (currencyTo === 'UAH') {
        convertedValue = (parsedValue / exchangeRate).toFixed(2);
      } else {
        convertedValue = (parsedValue * exchangeRate).toFixed(2);
      }
  
      setFromValue(convertedValue);
    } else {
      setFromValue('');
    }
  }  
  
  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newDate = e.target.value;
    setSelectedDate(new Date(newDate));
    trigger('date'); 
  } 
  
  useEffect(function () {
    if (selectedDate) {
      debouncedFetchExchangeRate(currencyFrom, currencyTo, selectedDate.toISOString());
    }
  }, [selectedDate, currencyFrom, currencyTo]);  

  function onSubmit(data: FormData) {
    if (Object.keys(errors).length > 0) {
      console.log('Есть ошибки валидации, форма не будет отправлена');
      alert('Пожалуйста, исправьте ошибки в форме');
      return; 
    }
  
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
        <div className="mx-auto mt-[80px] mb-[80px] pt-[53px] pb-[39px] pl-[48px] pr-[68px] bg-white shadow w-[962px]">
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
              <DateInput id="date" register={register} error={errors.date}  onChange={debouncedHandleDateChange} />
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
                  className="font-roboto font-medium font-normal text-[18px] rounded-[4px] inline-flex items-center justify-center text-center text-custom-light-blue bg-[#2C36F2] hover:bg-[#1E90FF] w-[220px] h-[60px]"
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

