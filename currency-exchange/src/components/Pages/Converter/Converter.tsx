import React, { useState, useEffect } from "react";
import ConverterCalculator from './ConverterCalculator/ConverterCalculator';
import ConverterHistory from './ConverterHistory/ConverterHistory';
import { useConverterStore } from '../../Store/Store';

function Converter(): JSX.Element {
  const { history, addToHistory, clearHistory } = useConverterStore(state => state);

  return (
    <div>
      <ConverterCalculator addToHistory={addToHistory} />
      <ConverterHistory history={history} onClear={clearHistory} />
    </div>
  );
}


export default Converter;

