import React, { useState } from "react";
import ConverterCalculator from './ConverterCalculator/ConverterCalculator';
import ConverterHistory from './ConverterHistory/ConverterHistory';

function Converter(): JSX.Element {
  const [history, setHistory] = useState<any[]>([]);

  function addToHistory(newRecord: any): void {
    setHistory(function(prevHistory) {
      return [...prevHistory, newRecord];
    });
  }

  return (
    <div>
      <ConverterCalculator addToHistory={addToHistory} />
      <ConverterHistory history={history} />
    </div>
  );
}

export default Converter;
