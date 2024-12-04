import React, { useState, useEffect } from "react";
import ConverterCalculator from './ConverterCalculator/ConverterCalculator';
import ConverterHistory from './ConverterHistory/ConverterHistory';

function Converter(): JSX.Element {
  const [history, setHistory] = useState<any[]>(function () {
    const savedHistory = localStorage.getItem("conversionHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  function addToHistory(newRecord: any): void {
    setHistory(function (prevHistory) {
      const updatedHistory = [...prevHistory, newRecord];
      if (updatedHistory.length > 10) {
        updatedHistory.shift();
      }
      localStorage.setItem("conversionHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  }

  function clearHistory(): void {
    setHistory([]);
    localStorage.removeItem("conversionHistory");
  }

  return (
    <div>
      <ConverterCalculator addToHistory={addToHistory} />
      <ConverterHistory history={history} onClear={clearHistory} />
    </div>
  );
}

export default Converter;
