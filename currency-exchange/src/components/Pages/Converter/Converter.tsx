import React, { useState, useEffect } from "react";
import ConverterCalculator from './ConverterCalculator/ConverterCalculator';
import ConverterHistory from './ConverterHistory/ConverterHistory';

function Converter(): JSX.Element {
  // Ініціалізація історії з локального сховища
  const [history, setHistory] = useState<any[]>(() => {
    const savedHistory = localStorage.getItem("conversionHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Функція для додавання нової історії та оновлення локального сховища
  function addToHistory(newRecord: any): void {
    setHistory(prevHistory => {
      const updatedHistory = [...prevHistory, newRecord];
      if (updatedHistory.length > 10) {
        updatedHistory.shift(); // Оставляем только последние 10 записей
      }
      localStorage.setItem("conversionHistory", JSON.stringify(updatedHistory)); // Сохраняем в локальное хранилище
      return updatedHistory;
    });
  }

  // Функция для очистки истории
  function clearHistory(): void {
    setHistory([]); // Очищаем историю в состоянии
    localStorage.removeItem("conversionHistory"); // Очищаем локальное хранилище
  }

  return (
    <div>
      <ConverterCalculator addToHistory={addToHistory} />
      <ConverterHistory history={history} onClear={clearHistory} />
    </div>
  );
}

export default Converter;
