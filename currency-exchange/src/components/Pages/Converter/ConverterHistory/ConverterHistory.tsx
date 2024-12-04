import React from "react";
import HistoryTitle from './HistoryComp/HistoryTitle';
import HistoryInf from './HistoryComp/HistoryInf';

interface HistoryItem {
  date: string;
  haveMoney: string;
  wantMoney: string;
  fromCurrency: string;
  toCurrency: string;
}

interface ConverterHistoryProps {
  history: HistoryItem[];
  onClear: () => void;
}

function ConverterHistory({ history, onClear }: ConverterHistoryProps): JSX.Element {
  return (
    <div className="bg-white flex justify-center">
      <div className="container">
        <div className="mx-auto mt-[80px] mb-[80px] pt-[53px] pb-[55px] pl-[48px] pr-[68px] bg-custom-light-blue shadow w-[962px]">
          <HistoryTitle onClear={onClear} />
          <div className="flex flex-wrap justify-between gap-y-[16px]">
            {history.map((item, index) => (
              <HistoryInf
                key={index}
                date={item.date}
                haveMoney={item.haveMoney}
                wantMoney={item.wantMoney}
                fromCurrency={item.fromCurrency}
                toCurrency={item.toCurrency}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConverterHistory;
